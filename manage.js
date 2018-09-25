const listItems = (productsData) => {
  $("main").html("");
  let allItems = productsData.findItemsByCategoryResponse[0].searchResult[0].item;
  allItems.map((arr) => {
    let idItem = arr.itemId;
    let titleItem = arr.title;
    let imageItem = arr.galleryURL[0];
    return createItemHtml(idItem, titleItem, imageItem);
  });
}