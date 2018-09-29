page('', index);
page('/item/:item', item);
page();

function index() {
  fetch(endpoint)
  .then(response => response.json())
  .then(data => listItems(data))
  .catch(function(err) {
    console.log('Fetch Error: ', err);
  });
}

function item(id) {
  fetch("https://api.mercadolibre.com/items/" + id.params.item)
  .then(response => response.json())
  .then(data => showItemDetails(data))
  .catch(function(err) {
    console.log('Fetch Error: ', err);
  });
}