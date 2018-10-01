const renderHeader = () => {
  const header = `
  <header>
    <a href="/search/anel ametista" class="shop-now"> Compre agora </a>
  </header>
  `
  $("body").prepend(header);
}

const createListHtml = (product) => {
  const template = `
  <div class="item item-list" data-id="${product.id}"> 
    <img src="${product.image}" class="product-image" />
    <div class="product-info">
    <span class="product-price"> ${product.price} BRL </span>
    <span class="procut-name"> ${product.title} </span> 
    <div class="actions actions-list">
      <a href="/item/${product.id}" class="btn btn-info">Ver mais</a> 
      <button type="button" class="btn btn-select add" data-id="${product.id}"><i class="fas fa-shopping-bag"></i> Sacola</button> 
      <button type="button" class="btn btn-wishlist add" data-id="${product.id}"><i class="fas fa-heart"></i> Wishlist</button> 
    </div>
    </div>
  </div>
  `
  main.append(template)
  selectItem(product)
  button(product)

  if (main.text().length < 1) {
    main.html("Desculpe, não há nada aqui")
  }
}

const createItemHtml = (product) => {
  const template = `
  <div class="item item-single" data-id="${product.id}"> 
    <img src="${product.image}" class="item-image" />
    <div class="product-info">
    <span class="item-name"> ${product.title} </span> 
    <span class="item-price"> ${product.price} BRL </span>
    <a href="${product.url}" class="item-url"> Finalizar compra no Site </a>
    <div class="actions actions-item">
      <button type="button" class="btn btn-select add" data-id="${product.id}"> <i class="fas fa-shopping-bag"></i> Sacola </button> 
      <button type="button" class="btn btn-wishlist add" data-id="${product.id}"> <i class="fas fa-heart"></i> Wishlist </button> 
    </div>
    </div>
  </div>
  `
  main.append(template)
  button(product)

  if (main.text().length < 1) {
    main.html("Desculpe, não há nada aqui")
  }
}

const renderBag = (product) => {
  const template = `
  <div class="item item-single" data-id="${product.id}"> 
    <img src="${product.image}" class="product-image" />
    <div class="product-info bag">
    <span class="product-price"> ${product.price} BRL </span>
    <span class="procut-name"> ${product.title} </span> 
    <a href="/${product.url}" class="item-url"> Finalizar compra no site </a> 
    <div class="actions actions-list">
      <a href="/item/${product.id}" class="btn btn-info">Ver mais</a> 
      <button type="button" class="btn btn-select add" data-id="${product.id}"><i class="fas fa-shopping-bag"></i> Sacola</button> 
      <button type="button" class="btn btn-wishlist add" data-id="${product.id}"><i class="fas fa-heart"></i> Wishlist</button> 
    </div>
    </div>
  </div>
  `
  main.append(template)
  selectItem(product)
  button(product)
}