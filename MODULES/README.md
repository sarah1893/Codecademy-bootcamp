# Hello Modules

JavaScript *modules* are reusable pieces of code that can be exported from one program and imported for use in another program.

Modules are particularly useful for a number of reasons. By separating code with similar logic into files called modules, we can:

- find, fix, and debug code more easily;
- reuse and recycle defined logic in different parts of our application;
- keep information private and protected from other modules;
- and, importantly, prevent pollution of the global namespace and potential naming collisions, by cautiously selecting variables and behavior we load into a program.
  
In this lesson, we’ll cover two ways to implement modules in JavaScript: Node.js’s `module.exports` and `require()` syntax, as well as the ES6 `import/export` syntax.