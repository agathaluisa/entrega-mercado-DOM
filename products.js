const products = [
  {
    title: "Uva Crimson",
    price: 8.99,
    category: "Frutas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Banana",
    price: 5.69,
    category: "Frutas",
    image: "./img/products/product_2.svg",
    imageDescription: "",
  },
  {
    title: "Mamão",
    price: 4.99,
    category: "Frutas",
    image: "./img/products/product_3.svg",
    imageDescription: "",
  },
  {
    title: "Maçã",
    price: 9.2,
    category: "Frutas",
    image: "./img/products/product_4.svg",
    imageDescription: "",
  },
  {
    title: "Refrigerante",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Vinho",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_6.svg",
    imageDescription: "",
  },
  {
    title: "Água Tônica",
    price: 8.99,
    category: "Bebidas",
    image: undefined,
    imageDescription: "",
  },
  {
    title: "Água de coco",
    price: 8.99,
    category: "Bebidas",
    image: "./img/products/product_8.svg",
    imageDescription: "",
  },

  {
    title: "Sabonete",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_9.svg",
    imageDescription: "",
  },

  {
    title: "Detergente",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_10.svg",
    imageDescription: "",
  },

  {
    title: "Limpa superfícies",
    price: 8.99,
    category: "Higiene",
    image: "./img/products/product_11.svg",
    imageDescription: "",
  },

  {
    title: "Lustra Móveis",
    price: 8.99,
    category: "Higiene",
    image: undefined,
    imageDescription: "",
  },
];

let frutas = []
let bebidas = []
let higiene = []


for(let i = 0; i < products.length; i++){
  if(products[i].category === "Frutas"){
    frutas.push(products[i])
  } else if(products[i].category === "Bebidas"){
    bebidas.push(products[i])
  } else {
    higiene.push(products[i])
  }
}


const ulFruits = document.createElement('ul')
const mainFruits = document.querySelector('.fruits')

mainFruits.appendChild(ulFruits)


for(let i = 0; i < frutas.length; i++){
  //CRIOU TODOS OS ELEMENTOS PRESENTES NA LI
    let item = document.createElement('li')
    let main = document.createElement('main')
    let h1 = document.createElement('h1')
    let h5 = document.createElement('h5')
    let strong = document.createElement('strong')
    let img = document.createElement('img')
    //ADICIONOU AS CLASSES CSS AOS ELEMENTOS
    item.classList.add('product')
    img.classList.add('product-img')
    main.classList.add('product-main')
    h1.classList.add('product-title')
    h5.classList.add('product-category')
    strong.classList.add('product-price')
    //COLOCOU O TEXTO ONDE PRECISAVA
    h1.innerText = frutas[i].title
    h5.innerText = frutas[i].category
    strong.innerText = frutas[i].price

    //COLOCOU AS IMAGENS DE CADA PRODUTO
    if(!frutas[i].image){
      img.setAttribute('src', './img/products/no-img.svg' )
    }else{
      img.setAttribute('src', frutas[i].image )
    }

    img.setAttribute('alt', frutas[i].imageDescription)
    img.setAttribute('title', frutas[i].imageDescription)
    //INSERIU ELEMENTOS NA PAGINA
    ulFruits.appendChild(item)
    item.appendChild(img)
    item.appendChild(main)
    main.appendChild(h1)
    main.appendChild(h5)
    main.appendChild(strong)
}


const ulDrinks = document.createElement('ul')
const mainDrinks = document.querySelector('.drinks')

mainDrinks.appendChild(ulDrinks)

for(let i= 0; i < bebidas.length; i++){
  let item = document.createElement('li')
  let main = document.createElement('main')
  let h1 = document.createElement('h1')
  let h5 = document.createElement('h5')
  let strong = document.createElement('strong')
  let img = document.createElement('img')

  item.classList.add('product')
  main.classList.add('product-main')
  h1.classList.add('product-title')
  h5.classList.add('product-category')
  strong.classList.add('product-price')
  img.classList.add('product-img')

  h1.innerText = bebidas[i].title
  h5.innerText = bebidas[i].category
  strong.innerText = bebidas[i].price

  if(!bebidas[i].image){
    img.setAttribute('src', './img/products/no-img.svg')
  } else {
    img.setAttribute('src', bebidas[i].image)
  }

  img.setAttribute('alt', bebidas[i].imageDescription)
  img.setAttribute('title', bebidas[i].imageDescription)

  ulDrinks.appendChild(item)
  item.appendChild(img)
  item.appendChild(main)
  main.appendChild(h1)
  main.appendChild(h5)
  main.appendChild(strong)
}

const ulHigiene = document.createElement('ul')
const mainHigiene = document.querySelector('.hygiene')

mainHigiene.appendChild(ulHigiene)

for(let i= 0; i < higiene.length; i++){
  let item = document.createElement('li')
  let main = document.createElement('main')
  let h1 = document.createElement('h1')
  let h5 = document.createElement('h5')
  let strong = document.createElement('strong')
  let img = document.createElement('img')

  item.classList.add('product')
  main.classList.add('product-main')
  h1.classList.add('product-title')
  h5.classList.add('product-category')
  strong.classList.add('product-price')
  img.classList.add('product-img')

  h1.innerText = higiene[i].title
  h5.innerText = higiene[i].category
  strong.innerText = higiene[i].price

  if(!higiene[i].image){
    img.setAttribute('src', './img/products/no-img.svg')
  } else {
    img.setAttribute('src', higiene[i].image)
  }

  img.setAttribute('alt', higiene[i].imageDescription)
  img.setAttribute('title', higiene[i].imageDescription)

  ulHigiene.appendChild(item)
  item.appendChild(img)
  item.appendChild(main)
  main.appendChild(h1)
  main.appendChild(h5)
  main.appendChild(strong)
}

