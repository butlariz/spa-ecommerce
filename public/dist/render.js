const createListHtml = (id, title, image, price) => {
  //Gerar novo ID. Api traz itens diferentes com o mesmo ID. 

  let template = `
  <div class="item-product" data-id="${id}"> 
    <img src="${image}" class="product-image" />
    <div class="product-info">
    <span class="product-price"> ${price} BRL </span>
    <span class="procut-name"> ${title} </span> 
    <div class="actions">
      <a href="/item/${id}" class="btn btn-info">Ver mais</a> 
      <button type="button" class="btn btn-select add" data-id="${id}"> + Sacola </button> 
      <button type="button" class="btn btn-wishlist add" data-id="${id}"> Wishlist </button> 
    </div>
    </div>
  </div>
  `
  $("main").append(template)
  addButton(id)
}

const createItemHtml = (product) => {
  //Gerar novo ID. Api traz itens diferentes com o mesmo ID. 

  product = {
    id: itemData.id,
    image: itemData.pictures[0]["secure_url"],
    url: itemData.permalink,
    price: itemData.price,
    quantity: itemData["available_quantity"]
  }

  let template = `
  <div class="item-product" data-id="${product.id}"> 
    <img src="${product.image}" class="product-image" />
    <div class="product-info">
    <span class="procut-name"> ${product.title} </span> 
    <span class="product-price"> ${product.price} BRL </span>
    <div class="actions">
      <button type="button" class="btn btn-info"> Ver mais </button> 
      <button type="button" class="btn btn-select add" data-id="${product.id}"> + Sacola </button> 
      <button type="button" class="btn btn-wishlist add" data-id="${product.id}"> Wishlist </button> 
    </div>
    </div>
  </div>
  `
  $("main").append(template)
  addButton(id)
}