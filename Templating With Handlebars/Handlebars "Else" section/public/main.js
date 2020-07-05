const source = document.getElementById('ifHelper').innerHTML;
const template = Handlebars.compile(source);

let context = {
  opinion: false
};

const compiledHtml = template(context);

const debateElement = document.getElementById('debate');
debateElement.innerHTML = compiledHtml;
