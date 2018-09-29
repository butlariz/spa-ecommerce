const listItems = (productsData) => {
  $("main").html("");
  let allItems = productsData.results;
  allItems.map((arr) => {
    return createListHtml(arr.id, arr.title, arr.thumbnail, arr.price);
  });
}
 
const addButton = (buttonID) => {
  const buttonSelect = `.btn-select[data-id="${buttonID}"]`
  const divItem = `.item[data-id="${buttonID}"]`

  $(buttonSelect).click(function(){
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
    console.log(currentItems)
    if (currentItems !== null) {
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

const showItemDetails = (itemData) => {
  console.log(itemData)
  $("main").html("");
  
  let infoProduct = {
    id: itemData.id,
    title: itemData.title,
    image: itemData.pictures[0]["secure_url"],
    url: itemData.permalink,
    price: itemData.price,
    quantity: itemData["available_quantity"]
  }

  // buscar descrição fetch https://api.mercadolibre.com/items/ITEM_ID/description
  createItemHtml(infoProduct);
} 