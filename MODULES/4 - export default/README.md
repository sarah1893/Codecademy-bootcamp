# export default

Node.js supports `require()/module.exports`, but as of ES6, JavaScript supports a new more readable and flexible syntax for exporting modules. These are usually broken down into one of two techniques, *default export* and *named exports*.

We’ll begin with the first syntax, default export. The default export syntax works similarly to the `module.exports` syntax, allowing us to export one module per file.

Let’s look at an example in **menu.js**.

```
let Menu = {};

export default Menu;
```

1. `export default` uses the JavaScript `export` statement to export JavaScript objects, functions, and primitive data types.
   
2. `Menu` refers to the name of the `Menu` object, the object that we are setting the properties on within our modules.

When using ES6 syntax, we use `export default` in place of `module.exports`. Node.js doesn’t support `export default` by default, so `module.exports` is usually used for Node.js development and ES6 syntax is used for front-end development. As with most ES6 features, it is common to transpile code since ES6 is [not supported by all browsers](https://caniuse.com/#feat=es6).