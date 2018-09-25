fetch('https://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByCategory&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=idAqui&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&categoryId=110633&paginationInput.entriesPerPage=20&paginationInput.pageNumber=21')
.then(response => response.json())
.then(data => listItems(data))
.catch(function(err) {
  console.log('Fetch Error: ', err);
});

// fetch('http://open.api.ebay.com/shopping?callname=FindProducts&responseencoding=JSON&appid=IDAQUI&siteid=0&version=967&QueryKeywords=harry%20potter&MaxEntries=20&paginationInput.pageNumber=1')
// .then(response => response.json())
// .then(data => listItems(data))
// .catch(function(err) {
//   console.log('Fetch Error: ', err);
// });

// const listItems = (productsData) => {
//   $("main").html("");
//   let allItems = productsData["Product"];
//   allItems.map((arr) => {
//     let idItem = arr["ProductID"][0]["Value"];
//     let titleItem = arr["Title"];
//     let imageItem = arr["StockPhotoURL"];

//     return createItemHtml(idItem, titleItem, imageItem);
//   });
// }
