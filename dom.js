const createItemHtml = (id, title, image, url) => {
  let idStoreItem = id + Math.floor(Math.random() * 256);

  let template = `
  <div class="item-product" data-id="${id}" data-storeId="${idStoreItem}"> 
    <img src="${image}" class="product-image" />
    <div class="product-info">
    <span class="product-price"> $5 USD </span>
    <span class="procut-name"> ${title} </span> 
    <div class="actions">
      <a class="btn btn-info" href="${url}"> Ver mais </a> 
      <button class="btn btn-select" href="#" data-storeId="${idStoreItem}"> Selecionar </button> 
      <button class="btn btn-wishlist" href="#" data-storeId="${idStoreItem}"> Wishlist </button> 
    </div>
    </div>
  </div>
  `
  $(`.btn-select[data-storeId="${id}"]`).click(function(){
    console.log("oi")
    $(this).parents(".item-product")[0].addClass("selected-item")
  })

  $("main").append(template)
}