# Combining Export Statements

We can also use named exports and default exports together. In **menu.js**:

```
let specialty = '';
function isVegetarian() {
}; 
function isLowSodium() {
}; 
function isGlutenFree() {
};

export { specialty as chefsSpecial, isVegetarian as isVeg };
export default isGlutenFree;
```

Here we use the keyword `export` to export the named exports at the bottom of the file. Meanwhile, we export the `isGlutenFree` variable using the `export default` syntax.

This would also work if we exported most of the variables as declared and exported others with the `export default` syntax.

```
export let Menu = {};

export let specialty = '';
export let isVegetarian = function() {
}; 
export let isLowSodium = function() {
}; 
let isGlutenFree = function() {
};

export default isGlutenFree;
```

Here we use the `export` keyword to export the variables upon declaration, and again export the `isGlutenFree` variable using the `export default syntax`

While it’s better to avoid combining two methods of exporting, it is useful on occasion. For example, if you suspect developers may only be interested in importing a specific function and won’t need to import the entire default export.