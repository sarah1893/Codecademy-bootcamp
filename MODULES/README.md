# Hello Modules

JavaScript *modules* are reusable pieces of code that can be exported from one program and imported for use in another program.

Modules are particularly useful for a number of reasons. By separating code with similar logic into files called modules, we can:

- find, fix, and debug code more easily;
- reuse and recycle defined logic in different parts of our application;
- keep information private and protected from other modules;
- and, importantly, prevent pollution of the global namespace and potential naming collisions, by cautiously selecting variables and behavior we load into a program.
  
In this lesson, we’ll cover two ways to implement modules in JavaScript: Node.js’s `module.exports` and `require()` syntax, as well as the ES6 `import/export` syntax.


# Review

We just learned how to use JavaScript modules. Let’s review what we learned:

*Modules* in Node.js are reusable pieces of code that can be exported from one program and imported for use in another program.

- `module.exports` exports the module for use in another program.

- `require()` imports the module for use in the current program.
  
ES6 introduced a more flexible, easier syntax to export modules:

- default exports use `export default` to export JavaScript objects, functions, and primitive data types.

- named exports use the `export` keyword to export data in variables.

- named exports can be aliased with the `as` keyword.
  
- `import` is a keyword that imports any object, function, or data type.