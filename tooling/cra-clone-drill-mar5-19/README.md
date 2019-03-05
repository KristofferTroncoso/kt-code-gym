# steps to clone create-react-app

## make your repo
* npm init

## make a src folder with react components
* npm install react react-dom
* mkdir src
* make components like an index.js file and an App file like usual
* We basically can't use this code in the src folder since the browser won't understand jsx and the separate modules/files.
  * we'll have to take advantage of webpack to bundle it with the help of babel.

## babel cli transpile script
* this is for outputting something like a npm component library
* npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/preset-react
  * you need these core packages and the presets to transpile the src code
* make an npm script in package.json
  * "babel src -d lib"
    * stands for: 'take the js files in src and output to new directory lib'
* The script will run but it wont transpile the code unless you specify the presets in a .babelrc or babel.config.js file
  * {"presets": ["@babel/preset-env", "@babel/preset-react"]}
* now it should output a transpiled version of your src folder
* you can also add a --copy-files flag to your script to copy other files in src folder

## webpack
* npm install --save-dev webpack webpack-cli
* add npm "build" script to package.json 
  * "build": "webpack"
    * by default, webpack with no config will take a src/index.js file and bundle it to a dist/main.js file. it will create the folder if needed.
* if we try to bundle some react components, it will throw an error because it doesnt understand jsx. we'll have to install babel-loader
* npm install --save-dev babel-loader
* make a webpack.config.js
```js
module.exports = {
  module: {
    rules: [
      {test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"}
    ]
  }
}
```
* basically now when webpack runs its build process, it will look to babel-loader to help it process the files. babel-loader will look for a babel config file (.babelrc or babel.config.js) to figure out what presets and plugins to use. 


## webpack-dev-server "npm start"
* We want a way to easily see what we're developing in the server live just like create-react-app using "npm start". We can do this using webpack-dev-server; it has automatic hot-reloading. 
  * if we dont use this, the manual way is to rebuild after each change in src by using "npm build" with webpack and then reloading the browser. 
  * with webpack-dev-server, it builds your src folder and stores it in memory.
* npm install --save-dev webpack-dev-server
* add npm script: "start": "webpack-dev-server --open"
  * the --open flag will automatically open the browser window.
* add a devServer key with contentBase value to your webpack.config.js so that webpack-dev-server knows what folder has the index.html file.
  * You still manually need to create that dist/index.html

# styles and css
* jsx inline styles will work because of the react preset
* import .css files into your components will not work until we install some webpack loaders to handle it
  * https://webpack.js.org/loaders/style-loader/
* npm install --save-dev style-loader file-loader
* add to your webpack.config.js
```js
  {
    test: /\.css$/,
    use: [
      { loader: "style-loader/url" },
      { loader: "file-loader" }
    ]
  }
```