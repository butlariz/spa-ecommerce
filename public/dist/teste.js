page('/', index);
page('/cars', cars);
page('/car', car);
page();

function index(){
$('main').html(renderIndex());
};

async function cars() {
const mLCars = await trazBusca();
// $('main').html(exibePosts(mLCars));
// $('#list').html(renderList());
}

function car(){
$('main').html(form());
}

function renderIndex() {
return `
<div class = 'w-100 h-100 carStock'>
  <div class='sellCars'>
    <a href='/cars' class='btn essence-btn id='show-cars'' >Pesquise  carros</a>
  </div>
</div>
`;
}

function erro(){
console.log('erro');
}

function trazBusca(){
const pegarNoticia = new XMLHttpRequest();
pegarNoticia.open('GET', `https://api.mercadolibre.com/sites/MLB/search?q=ferrari&limit=10`);
pegarNoticia.onload = carregaPost;
pegarNoticia.onerror = erro;
pegarNoticia.send();
}

function carregaPost(){
  let docs = JSON.parse(this.responseText)["results"]
  exibePosts(docs)
}

async function exibePosts(cars){
  console.log(cars)
  cars.map((arr) => {
    let template = `
    <div class = 'area-noticia'>
      <div class='noticia'>
        <h3>${arr.title}</h3>
        <p>${arr.price}</p>

        <img src='${arr.thumbnail}'>
      </div>
    </div>`

    $("#list").append(template)
  })
}

function renderList() {
let listCars = JSON.parse(localStorage.getItem('cars'));
let carSum =  '';

if(listCars){
  CarSum = listCars.length;
}
return `
<div class='d-flex justify-content-end clearfix'>
  <div class='list-area'>
    <a href= '/car' id="listBtn"><img class='carImg' src='/dist/img/listCar.jpg'</img><<span id='list-sum'>${carSum}</span></a>
  </div>
</div>
`;
}

function form(){
return  `
<div>Seu Formulario</div>
`
}