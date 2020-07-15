# Export as

Named exports also conveniently offer a way to change the name of variables when we export or import them. We can do this with the `as` keyword.

Let’s see how this works. In our **menu.js** example

```
let specialty = '';
let isVegetarian = function() {
}; 
let isLowSodium = function() {
}; 

export { specialty as chefsSpecial, isVegetarian as isVeg, isLowSodium };
```

In the above example, take a look at the `export` statement at the bottom of the of the file.

1. The `as` keyword allows us to give a variable name an alias as demonstrated in `specialty as chefsSpecial` and `isVegetarian as isVeg`.

2. Since we did not give `isLowSodium` an alias, it will maintain its original name.