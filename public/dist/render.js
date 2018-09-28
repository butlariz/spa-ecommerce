const createItemHtml = (id, title, image, url, price) => {
  //Gerar novo ID. Api traz itens diferentes com o mesmo ID. 

  let template = `
  <div class="item-product" data-id="${id}"> 
    <img src="${image}" class="product-image" />
    <div class="product-info">
    <span class="product-price"> ${price} BRL </span>
    <span class="procut-name"> ${title} </span> 
    <div class="actions">
      <button type="button" class="btn btn-info"> Ver mais </button> 
      <button type="button" class="btn btn-select add" data-id="${id}"> + Sacola </button> 
      <button type="button" class="btn btn-wishlist add" data-id="${id}"> Wishlist </button> 
    </div>
    </div>
  </div>
  `
  $("main").append(template)
  addButton(id)
}