const productData = [
  {
    name: "Casa de campo",
    description: "Un lugar ideal para descansar de la ciudad",
    src: "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
    rooms: 2,
    m: 170,
    precio: 80000
  },
  {
    name: "Casa de playa",
    description: "Despierta tus días oyendo el océano",
    src: "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
    rooms: 2,
    m: 130,
    precio: 120000
  },
  {
    name: "Casa en el centro",
    description: "Ten cerca de ti todo lo que necesitas",
    src: "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
    rooms: 1,
    m: 6,
    precio: 100000
  },
  {
    name: "Casa rodante",
    description: "Conviertete en un nómada del mundo sin salir de tu casa",
    src: "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
    rooms: 1,
    m: 6,
    precio: 60000
  },
  {
    name: "Departamento",
    description: "Desde las alturas todo se ve mejor",
    src: "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
    rooms: 3,
    m: 200,
    precio: 50000
  },
  {
    name: "Mansión",
    description: "Vive una vida lujosa en la mansión de tus sueños",
    src: "https://resizer.glanacion.com/resizer/fhK-tSVag_8UGJjPMgWrspslPoU=/768x0/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/lanacionar/CUXVMXQE4JD5XIXX4X3PDZAVMY.jpg",
    rooms: 5,
    m: 500,
    precio: 300000
  },
];
const roomsInput = document.querySelector("#roomsInput");
const min = document.querySelector("#min");
const max = document.querySelector("#max");
const productContainer = document.querySelector("#productContainer");
const form = document.querySelector("#form");
const totalProducts = document.querySelector("#totalProducts");
const render = (arr) => {
  let productList = "";
  for (let product of arr) {
    const plantilla = `<div class="tarjeta">
    <img src="${product.src}" alt="">
    <h3>${product.name}</h3>
    <p>${product.description}</p>
    <h4>Habitaciones: ${product.rooms}</h4>
    <p>$ ${product.precio}</p>
    <button>Arrendar</button>
    </div>`;
    productList += plantilla;
  }
  let total = arr.length;
  totalProducts.textContent = total;
  productContainer.innerHTML = productList;
};
render(productData);
const filter = () => {
  if (!max.value || !min.value) {
    alert("Debes llenar todos los campos");
    return;
  }
  const filteredData = [];
  for (let product of productData) {
      if (
        product.precio >= min.value &&
        product.precio <= max.value &&
        roomsInput.value == product.rooms
      ) {
        filteredData.push(product);
      }
  }
  render(filteredData);
};
form.addEventListener("submit", (evento) => {
  evento.preventDefault();
  filter();
});