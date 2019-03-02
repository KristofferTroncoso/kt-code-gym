ok so you only really need the babel cli for now.

`npm install --save-dev @babel/core @babel/cli`

```js
+   "scripts": {
+     "build": "babel src -d lib"
+   },
```

npm install @babel/preset-env --save-dev

create .babelrc file
{
  "presets": ["@babel/preset-env"]
}


now it's transpiling everything in your src folder into a lib folder.

(how do i make it able to read the untranspiled files so that we can preview in dev mode like CRA (without building into lib folder))