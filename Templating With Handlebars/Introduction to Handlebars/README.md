# The major steps of using Handlebars in a project:

- Add the Handlebars library to your project. — one option is to use a Content Delivery Network (CDN): MDN CDN documentation.
 -reate a Handlebars script in your HTML file.
- In your JavaScript file, grab the HTML stored in the Handlebars script.
- Use Handlebars.compile() to return a templating function.
- Pass in a context object to the templating function to get a compiled template.
- Render the compiled template onto the web page.