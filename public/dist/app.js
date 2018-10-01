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

const colorHeart = (item) => {
  if (typeof(Storage) !== "undefined") {
    const currentItems = JSON.parse(localStorage.getItem("Wishlist"));

    if(currentItems) {
      for (current of currentItems) {
        if (current.id === item.id) {
          $('.btn-wishlist[data-id="' + item.id + '"]').addClass("heart-red");
        } 
      }
    }
  }
}

const bagButton = (item) => {
  const buttonSelect = `.btn-select[data-id="${item.id}"]`

  $(buttonSelect).click(function(){
    let addOrRemove = checkBagItems(item, "Produtos"); 

    if (addOrRemove === "add") {
      $('.item[data-id="' + item.id + '"]').addClass("selected-item");
      addToCart(item, "Produtos");
    } else if (addOrRemove === "remove") {
      $('.item[data-id="' + item.id + '"]').removeClass("selected-item");
      removeFromCart(item, "Produtos");
    }
  });

  selectItem(item)
}

const wishlistButton = (item) => {
  const buttonWishlist = `.btn-wishlist[data-id="${item.id}"]`

  $(buttonWishlist).click(function(){
    let addOrRemove = checkBagItems(item, "Wishlist"); 

    if (addOrRemove === "add") {
      $(this).addClass("heart-red");
      addToCart(item, "Wishlist");
    } else if (addOrRemove === "remove") {
      $(this).removeClass("heart-red");
      removeFromCart(item, "Wishlist");
    }
  });

  colorHeart(item)
}

const checkBagItems = (item, key) => {

  if (typeof(Storage) !== "undefined") {
    const currentItems = JSON.parse(localStorage.getItem(key));
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

const addToCart = (itemData, key) => {
  const currentItems = JSON.parse(localStorage.getItem(key));
  if (currentItems) { 
    localStorage.setItem(key, JSON.stringify([...currentItems, itemData]));
  } else {
    localStorage.setItem(key, JSON.stringify([itemData]));
  }
}

const removeFromCart = (itemData, key) => { 
  const currentItems = JSON.parse(localStorage.getItem(key));
  $.each(currentItems, function(index, value) {
    if (itemData.id === value.id) {
      var bagProducts = [...currentItems];
      bagProducts.splice(index, 1)
      return localStorage.setItem(key, JSON.stringify(bagProducts));
    } 
  })
} 

const showBagItems = (products) => {
  products.map((arr) => {
    renderBag(arr)
  })
}