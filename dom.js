const createItemHtml = (id, title, image) => {
  let template = `
  <div class="item-product" data-id="${id}" > 
    <img src="${image}" class="product-image" />
    <div class="product-info">
    <span class="product-price"> $5 USD </span>
    <span class="procut-name"> ${title} </span> 
    <div class="actions">
      <a class="btn btn-info" href="#"> Ver mais </a> 
      <a class="btn btn-select" href="#"> Selecionar </a> 
      <a class="btn btn-wishlist" href="#"> Wishlist </a> 
    </div>
    </div>
  </div>
  `
  $("main").append(template)
}