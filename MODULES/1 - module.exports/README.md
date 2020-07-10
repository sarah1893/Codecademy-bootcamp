# module.exports

We can get started with modules by defining a module in one file and making the module available for use in another file with Node.js `module.exports` syntax. Every JavaScript file run in Node has a local `module` object with an `exports` property used to define what should be exported from the file.

Below is an example of how to define a module and how to export it using the statement `module.exports`.

In **menu.js** we write:

```
let Menu = {};
Menu.specialty = "Roasted Beet Burger with Mint Sauce";

module.exports = Menu; 
```

Let’s consider what this code means.

1. `let Menu = {};` creates the object that represents the module `Menu`. The statement contains an uppercase variable named `Menu` which is set equal to an empty object.

2. `Menu.specialty` is defined as a property of the `Menu` module. We add data to the `Menu` object by setting properties on that object and giving the properties a value.
   
3. `"Roasted Beet Burger with Mint Sauce";` is the value stored in the `Menu.specialty` property.

4. `module.exports = Menu;` exports the `Menu` object as a module. `module` is a variable that represents the module, and `exports` exposes the module as an object.

The pattern we use to export modules is thus:

1. Create an object to represent the module.

2. Add properties or methods to the module object.

3. Export the module with `module.exports`.

Let’s create our first module.