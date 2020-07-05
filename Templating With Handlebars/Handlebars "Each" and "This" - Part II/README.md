# Handlebars "Each" and "This" - Part II
Using {{this}} also gives you access to the properties of the element being iterated over.

For instance, if you’re using the following array inside the context object:
 ```
const context = {
  someArray: [
    {shape: 'Triangle'},
    {shape: 'Circle'},
    {shape: 'Square'}
  ] 
}
```
And your template looks like:
```
{{#each someArray}}
  <p>The current shape is: {{this.shape}}!</p>
{{/each}}
```

After going through the steps of compiling, the finished HTML will look like:
```
<p>The current shape is: Triangle!</p>
<p>The current shape is: Circle!</p>
<p>The current shape is: Square!</p>
```
This exercise will provide additional practice using the {{each}} block and accessing properties using {{this}}.