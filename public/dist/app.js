const listItems = (productsData) => {
  $("main").html("");
  let allItems = productsData.results;
  allItems.map((arr) => {

    let idItem = arr.id;
    let titleItem = arr.title;
    let imageItem = arr.thumbnail;
    let urlItem = arr.permalink;
    let priceItem = arr.price

    return createItemHtml(idItem, titleItem, imageItem, urlItem, priceItem);
  });
}
 
const addButton = (buttonID) => {
  const button = `.btn-select[data-id="${buttonID}"]`
  const divItem = `.item-product[data-id="${buttonID}"]`

  $(button).click(function(){
    if( $(this).hasClass("add")) {
      $(divItem).addClass("selected-item");
      addToCart(buttonID);
      $(this).toggleClass("add")
    } else {
      $(divItem).removeClass("selected-item");
      removeFromCart(buttonID);
      $(this).toggleClass("add")
    }
  })
}

const addToCart = (itemID) => {
  if (typeof(Storage) !== "undefined") {
    let currentItems = localStorage.getItem("Produtos");

    if (currentItems !== "null") {
    localStorage.setItem("Produtos", currentItems + "," + itemID);
    } else {
      localStorage.setItem("Produtos", itemID);
    }

  } else {
    alert("Sorry! No Web Storage support..");
  }
}

const removeFromCart = (itemID) => {
  console.log("bye")
  let cartItems = localStorage.getItem("Produtos").split(",")
  $.each(cartItems, function(index) {
    if(itemID === cartItems[index]) {
      cartItems.splice(index, 1)
      }
  });
}