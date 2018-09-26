fetch(endpoint)
.then(response => response.json())
.then(data => listItems(data))
.catch(function(err) {
  console.log('Fetch Error: ', err);
});