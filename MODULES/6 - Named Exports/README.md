# Named Exports

ES6 introduced a second common approach to export modules. In addition to `export default`, *named exports* allow us to export data through the use of variables.

Let’s see how this works. In **menu.js** we would be sure to give each piece of data a distinct variable name:

```
let specialty = '';
function isVegetarian() {
}; 
function isLowSodium() {
}; 

export { specialty, isVegetarian };
```

1. Notice that, when we use named exports, we are not setting the properties on an object. Each export is stored in its own variable.

2. `specialty` is a string object, while `isVegetarian` and `isLowSodium` are objects in the form of functions. Recall that in JavaScript, every function is in fact a function object.

3. `export { specialty, isVegetarian };` exports objects by their variable names. Notice the keyword `export` is the prefix.

4. `specialty` and `isVegetarian` are exported, while `isLowSodium` is not exported, since it is not specified in the export syntax.