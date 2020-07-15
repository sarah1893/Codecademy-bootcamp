# Export Named Exports

Named exports are also distinct in that they can be exported as soon as they are declared, by placing the keyword `export` in front of variable declarations.

In **menu.js**

```
export let specialty = '';
export function isVegetarian() {
}; 
function isLowSodium() {
}; 
```

1. The `export` keyword allows us to export objects upon declaration, as shown in `export let specialty and export function isVegetarian() {}`.

2. We no longer need an `export` statement at the bottom of our file, since this behavior is handled above.