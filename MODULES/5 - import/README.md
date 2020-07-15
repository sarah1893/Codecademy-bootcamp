# import

ES6 module syntax also introduces the `import` keyword for importing objects. In our **order.js** example, we import an object like this:

```
import Menu from './menu';
```

1. The `import` keyword begins the statement.
   
2. The keyword `Menu` here specifies the name of the variable to store the default export in.
   
3. `from` specifies where to load the module from.

4. `'./menu'` is the name of the module to load. When dealing with local files, it specifically refers to the name of the file without the extension of the file.

We can then continue using the Menu module in the **order.js** file.