const source = document.getElementById('languagesTemp').innerHTML;
const template = Handlebars.compile(source);

const context = {
  languages: [
    {
      name: 'HTML'
    },
    {
      name:'CSS'
    }, 
    {
      name: 'JavaScript'
    }
  ]
};

const compiledHtml = template(context);

const displayGoals = document.getElementById('goals');
displayGoals.innerHTML = compiledHtml;
