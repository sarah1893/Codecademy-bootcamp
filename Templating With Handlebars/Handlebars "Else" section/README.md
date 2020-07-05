# Handlebars "Else" section

In the previous exercise, you used {{if}} to determine if the compiled HTML should include a block of code. But, if that argument turns out to be falsy then you’ll just have a blank section in your HTML!

Instead, you can add a default line of code by creating an else section, using Handlebar’s {{else}} expression.

Take a look at the following code to see how {{else}} is implemented:

```
{{#if argument}}
  // Code to include if the provided argument is truthy 
{{else}}
  // Code to include if the provided argument is falsy 
{{/if}}
```

In this exercise, you’ll incorporate an else section into your code from the previous exercise.