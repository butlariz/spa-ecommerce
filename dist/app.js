const listItems = (productsData) => {
  main.html("");
  let allItems = productsData.results;
  allItems.map((arr) => {
    let infoProduct = {
      id: arr.id,
      title: arr.title,
      image: arr.thumbnail,
      price: arr.price,
    }
    return createListHtml(infoProduct);
  });
}


const showItemDetails = (itemData) => {
  $("header").remove();
  main.html("");
  
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


const selectItem = (item) => {
  if (typeof(Storage) !== "undefined") {
    const currentItems = JSON.parse(localStorage.getItem("Produtos"));

    if(currentItems) {
      for (current of currentItems) {
        if (current.id === item.id) {
          $('.item[data-id="' + item.id + '"]').addClass("selected-item");
        } 
      }
    }
  }
}

const button = (item) => {
  const buttonSelect = `.btn-select[data-id="${item.id}"]`

  $(buttonSelect).click(function(){
    let addOrRemove = checkBagItems(item); 

    if (addOrRemove === "add") {
      $('.item[data-id="' + item.id + '"]').addClass("selected-item");
      addToCart(item);
    } else if (addOrRemove === "remove") {
      $('.item[data-id="' + item.id + '"]').removeClass("selected-item");
      removeFromCart(item);
    }
  });

}

const checkBagItems = (item) => {

  if (typeof(Storage) !== "undefined") {
    const currentItems = JSON.parse(localStorage.getItem("Produtos"));
    if(currentItems) {

      for (current of currentItems) {
        if (current.id === item.id) {
          return "remove"
        } else {
          return "add"
        }
      }

      return "add"
    } else {
      return "add"
    }

  } else {
      alert("Sorry! No Web Storage support..");
  } 
}

const addToCart = (itemData) => {
  const currentItems = JSON.parse(localStorage.getItem("Produtos"));
  if (currentItems) { 
    localStorage.setItem("Produtos", JSON.stringify([...currentItems, itemData]));
  } else {
    localStorage.setItem("Produtos", JSON.stringify([itemData]));
  }
}

const removeFromCart = (itemData) => { 
  const currentItems = JSON.parse(localStorage.getItem("Produtos"));
  $.each(currentItems, function(index, value) {
    if (itemData.id === value.id) {
      var bagProducts = [...currentItems];
      bagProducts.splice(index, 1)
      return localStorage.setItem("Produtos", JSON.stringify(bagProducts));
    } 
  })
} 

const showBagItems = (products) => {
  products.map((arr) => {
    renderBag(arr)
  })
}