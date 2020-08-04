import React, {useCallback, useState} from 'react'
import {useDropzone} from 'react-dropzone'
import JSONTree from 'react-json-tree'
import Pbf from 'pbf'
import { VectorTile } from '@mapbox/vector-tile'


function App() {
  const [data, setData] = useState({ sourceLayer: [ {} ] })
  const onDrop = useCallback(acceptedFiles => {
    acceptedFiles.forEach((file) => {
      const reader = new FileReader()

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
        const binaryStr = reader.result
        console.log(binaryStr)
        const pbf = new Pbf(binaryStr)
        const vectorTile = new VectorTile(pbf)

        const data = {}

        console.log('pbf length:', pbf.length)
        
        const layers = vectorTile.layers

        Object.keys(layers).forEach(sourceLayerName => {
          const sourceLayerFeatures = []
          const sourceLayer = layers[sourceLayerName]
          for (let index = 0; index < sourceLayer.length; index++) {
            const feature = sourceLayer.feature(index)
            sourceLayerFeatures.push({
              extent: feature.extent,
              type: feature.type,
              properties: feature.properties,
            })
          }
          data[sourceLayerName] = sourceLayerFeatures
        })

        setData(data)
        console.log(data)

        // const mainLayerName = Object.keys(layers)[0]
        // console.log('layer name:', mainLayerName)
        // const mainLayer = layers[mainLayerName]
        // console.log('layer length', mainLayer.length)
        // const aFeature = mainLayer.feature(0)
        // console.log('example feature type:', aFeature.type)
        // console.log('example feature:', aFeature.properties)
        // console.log('example feature:bbox:', aFeature.bbox())
        // console.log('example feature to GeoJSON')
        // console.log( aFeature.toGeoJSON(5,26,16))
      }
      reader.readAsArrayBuffer(file)
    })
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  return (
    <>
      <h1>What's in my tile?</h1>
      <div {...getRootProps()} className="dropZone">
        <input {...getInputProps()} />
        {
          isDragActive ?
            <p>Drop the files here ...</p> :
            <p>Drag 'n' drop a PBF vector tile here, or click to select file</p>
        }
      </div>
      <JSONTree data={data} theme="chalk" hideRoot={true} shouldExpandNode={(keyPath, data, level) => {
        if (level === 3 && keyPath && keyPath[0] === 'properties') return true
        if (level === 2 && keyPath && keyPath[0] === 0) return true
        if (level < 2) return true
      }} />
    </>
  )
}

export default App;
