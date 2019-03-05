# make a create-react-app clone
## this is a good drill for babel, webpack, and webpack loaders

* should have an src folder with regular react app structure. index.js file with additional components like App.js and imported App.css file.
* "npm start" script which will spin up a live server with hot-reload. This should only be building into memory.
* "npm build" script which will output to a 'dist' folder a working static version of the react app.
  * you can create the dist folder and index.html file ahead of time.
* "npm transpile" script which will transpile the js files in src into a 'lib' folder.
  * the file structure should remain intact.
  * This is good for building component libraries.

## bonus points:
* match the same directory names as create-react-app
  * "dist", "build", "lib" etc