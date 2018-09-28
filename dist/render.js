const createItemHtml = (id, title, image, url) => {
  //Gerar novo ID. Api traz itens diferentes com o mesmo ID. 
  let idStoreItem = id + Math.floor(Math.random() * 256);

  let template = `
  <div class="item-product" data-id="${id}" data-storeId="${idStoreItem}"> 
    <img src="${image}" class="product-image" />
    <div class="product-info">
    <span class="product-price"> $5 USD </span>
    <span class="procut-name"> ${title} </span> 
    <div class="actions">
      <button type="button" class="btn btn-info"> Ver mais </button> 
      <button type="button" class="btn btn-select add" data-storeId="${idStoreItem}"> + Sacola </button> 
      <button type="button" class="btn btn-wishlist add" data-storeId="${idStoreItem}"> Wishlist </button> 
    </div>
    </div>
  </div>
  `
  $("main").append(template)
  addButton(idStoreItem)
}