open-source JavaScript library:
https://leafletjs.com/

Instalation & Setup:
https://react-leaflet.js.org/docs/start-installation

Video Guia (+ou-)
https://www.youtube.com/watch?v=PMtXhxW6t2k

1. npm install react react-dom leaflet

2. npm install react-leaflet

3. Load Leaflet's CSS and Leaflet components on the App/Component:

   `import "leaflet/dist/leaflet.css";`

   `import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'`

Add the following code to your app and check it displays correctly.
Make sure the Mapcontainer has a hight defined.

Ex: on the file src>App.css

.myMap {
height: 500px;
width: 500px;
}

<MapContainer
className="myMap"
center={[51.505, -0.09]}
zoom={13}
scrollWheelZoom={false}>

<TileLayer
    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
<Marker position={[51.505, -0.09]}>
<Popup>
A pretty CSS3 popup. <br /> Easily customizable.
</Popup>
</Marker>
</MapContainer>

3. Resolvendo pepino:
   https://stackoverflow.com/questions/67552020/how-to-fix-error-failed-to-compile-node-modules-react-leaflet-core-esm-pat

Pepino:
“Failed to compile : ./node_modules/@react-leaflet/core/esm/path.js 10:41 Module parse failed: Unexpected token (10:41)”
./node_modules/@react-leaflet/core/esm/path.js 10:41
etc...

Open your 'package.json' file and edit your browserslist as follows:

"browserslist": {
"production": [
">0.2%",
"not dead",
"not op_mini all"
],
"development": [
"last 1 chrome version",
"last 1 firefox version",
"last 1 safari version"
]
},

to:

"browserslist": [
">0.2%",
"not dead",
"not op_mini all"
],
