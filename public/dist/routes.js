page('', index);
page('/item/:item', item);
page('/bag', bag)
page('/wishlist', wishlist)
page('/search/:search', search)
page();

function index() {
  nav.removeClass("page-aquamarine")
  if ($("header").length === 0) {
    renderHeader();
  }
  fetch(endpoint)
  .then(response => response.json())
  .then(data => listItems(data))
  .catch(function(err) {
    console.log('Fetch Error: ', err);
  });
}

function item(id) {
  nav.addClass("page-aquamarine")
  fetch(callItem + id.params.item)
  .then(response => response.json())
  .then(data => showItemDetails(data))
  .catch(function(err) {
    console.log('Fetch Error: ', err);
  });
}

function bag() {
  nav.addClass("page-aquamarine")
  $("header").remove();
  $("main").html("");
  showBagItems(JSON.parse(localStorage.getItem("Produtos")));
}

function wishlist() {
  nav.addClass("page-aquamarine")
  $("header").remove();
  $("main").html("");
  showBagItems(JSON.parse(localStorage.getItem("Wishlist")));
}

function search(keyword) {
  nav.addClass("page-aquamarine")
  $("header").remove();
  fetch(`https://api.mercadolibre.com/sites/MLB/search?category=MLB3937&q='${keyword}'`)
  .then(response => response.json())
  .then(data => listItems(data))
  .catch(function(err) {
    console.log('Fetch Error: ', err);
  });
}