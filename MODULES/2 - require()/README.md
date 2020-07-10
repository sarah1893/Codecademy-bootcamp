# require()

To make use of the exported module and the behavior we define within it, we import the module into another file. In Node.js, use the `require()` function to import modules.

For instance, say we want the module to control the menu’s data and behavior, and we want a separate file to handle placing an order. We would create a separate file **order.js** and import the `Menu` module from **menu.js** to **order.js** using `require()`. `require()` takes a file path argument pointing to the original module file.

In **order.js** we would write:

```
const Menu = require('./menu.js');

function placeOrder() {
  console.log('My order is: ' + Menu.specialty);
}

placeOrder();
```

We now have the entire behavior of `Menu` available in **order.js**. Here, we notice:

1. In **order.js** we import the module by creating a `const` variable called `Menu` and setting it equal to the value of the `require()` function. We can set the name of this variable to anything we like, such as `menuItems`.

2. `require()` is a JavaScript function that loads a module. It’s argument is the file path of the module: `./menu.js`. With `require()`, the `.js` extension is optional and will be assumed if it is not included.

3. The `placeOrder()` function then uses the Menu module. By calling Menu.specialty, we access the property specialty defined in the Menu module.
Taking a closer look, the pattern to import a module is:

Import the module with require() and assign it to a local variable.
Use the module and its properties within a program.