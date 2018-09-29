const createListHtml = (id, title, image, price) => {
  let template = `
  <div class="item item-list" data-id="${id}"> 
    <img src="${image}" class="product-image" />
    <div class="product-info">
    <span class="product-price"> ${price} BRL </span>
    <span class="procut-name"> ${title} </span> 
    <div class="actions actions-list">
      <a href="/item/${id}" class="btn btn-info">Ver mais</a> 
      <button type="button" class="btn btn-select add" data-id="${id}"><i class="fas fa-shopping-bag"></i> Sacola</button> 
      <button type="button" class="btn btn-wishlist add" data-id="${id}"><i class="fas fa-heart"></i> Wishlist</button> 
    </div>
    </div>
  </div>
  `
  $("main").append(template)
  addButton(id)
}

const createItemHtml = (product) => {
  let template = `
  <div class="item item-single" data-id="${product.id}"> 
    <img src="${product.image}" class="item-image" />
    <div class="product-info">
    <span class="item-name"> ${product.title} </span> 
    <span class="item-price"> ${product.price} BRL </span>
    <a href="${product.permalink}" class="item-url"> Finalizar compra no Site </a>
    <div class="actions actions-item">
      <button type="button" class="btn btn-select add" data-id="${product.id}"> <i class="fas fa-shopping-bag"></i> Sacola </button> 
      <button type="button" class="btn btn-wishlist add" data-id="${product.id}"> <i class="fas fa-heart"></i> Wishlist </button> 
    </div>
    </div>
  </div>
  `
  $("main").append(template)
  addButton(id)
}