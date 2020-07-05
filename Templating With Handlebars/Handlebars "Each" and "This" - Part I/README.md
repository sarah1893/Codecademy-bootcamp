# Handlebars "Each" and "This" - Part I

Another helper that Handlebars offers is the {{each}} block which allows you to iterate through an array. Just like the {{if}} block, there is an opening {{#each}} expression and closing {{/each}} expression. Inside the {{each}} block, {{this}} acts as a placeholder for the element in the iteration.

Below is an example of the Handlebars {{each}} block:
```
{{#each someArray}}
  <p>{{this}} is the current element!</p>
{{/each}}
```
This {{each}} block would be paired with an array like:
```
const context = {
  someArray: ['First', 'Second', 'Third'] 
}
```
After compiling, the HTML will look like:

```
<p>First is the current element!</p>
<p>Second is the current element!</p>
<p>Third is the current element!</p>
```

In this exercise, you’ll be writing your own {{each}} block and using the {{this}} expression.