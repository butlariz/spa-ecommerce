const listItems = (productsData) => {
  $("main").html("");
  let allItems = productsData.findItemsByCategoryResponse[0].searchResult[0].item;
  allItems.map((arr) => {

    let idItem = arr.itemId;
    let titleItem = arr.title;
    let imageItem = arr.galleryURL[0];
    let urlItem = arr.viewItemURL;

    return createItemHtml(idItem, titleItem, imageItem, urlItem);
  });
}

const addButton = (buttonID) => {
  const button = `.btn-select[data-storeId="${buttonID}"]`
  const divItem = `.item-product[data-storeId="${buttonID}"]`

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