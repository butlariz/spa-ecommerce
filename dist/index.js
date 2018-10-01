// url to fetch
const endpoint = "https://api.mercadolibre.com/sites/MLB/search?category=MLB3937&q='kit colar'";
const callItem = "https://api.mercadolibre.com/items/";

// global
const nav = $('nav')
const main = $("main");
const header = $("header");

$(document).ready(function(){
  $(document).scroll(function(){
    if ($(this).scrollTop() > 210) {
      nav.addClass("aquamarine");
    } else {
      nav.removeClass("aquamarine")
    }
  });

  $("#btn-search").click(function() {
    event.preventDefault()
    let keyword = $("#input-search").val();
    search(keyword)
  });
});