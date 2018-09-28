page('', index);
page('/item', item);
page();

function index() {
  fetch(endpoint)
  .then(response => response.json())
  .then(data => listItems(data))
  .catch(function(err) {
    console.log('Fetch Error: ', err);
  });
}

function item() {
  $("main").html("Esse é o produto 1. Lindo né? <a href='/'> Volte </a> ")
}