/* const simpsonApi= [
    {
      "quote":"For once maybe someone will call me \"sir\" without adding, \"You're making a scene.\"",
      "character":"Homer Simpson",
      "image":"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
      "characterDirection":"Right"
    },
    
    {
      "quote":"Last night's 'Itchy and Scratchy' was, without a doubt, the worst episode ever. Rest assured that I was on the Internet within minutes, registering my disgust throughout the world.",
      "character":"Comic Book Guy",
      "image":"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FComicBookGuy.png?1497567511970","characterDirection":"Right"
    },
    
    {
      "quote":"And this is the snack holder where I can put my beverage or, if you will, cupcake.",
      "character":"Homer Simpson",
      "image":"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939","characterDirection":"Right"
    },
    
    {
      "quote":"Facts are meaningless. You could use facts to prove anything that's even remotely true.",
      "character":"Homer Simpson",
      "image":"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939","characterDirection":"Right"
    },
    {
      "quote":"I can't even say the word 'titmouse' without gigggling like a schoolgirl.",
      "character":"Homer Simpson",
      "image":"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
      "characterDirection":"Right"
    },
    {
      "quote":"I believe the children are the future... Unless we stop them now!",
      "character":"Homer Simpson",
      "image":"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
      "characterDirection":"Right"
    },
    {
      "quote":"Well, I'm better than dirt. Well, most kinds of dirt. I mean not that fancy store bought dirt. That stuffs loaded with nutrients. I.. I can't compete with that stuff.",
      "character":"Moe Szyslak",
      "image":"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FMoeSzyslak.png?1497567512411",
      "characterDirection":"Right"
    },
    {"quote":"Gah, stupid sexy Flanders!",
    "character":"Homer Simpson",
    "image":"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FHomerSimpson.png?1497567511939",
    "characterDirection":"Right"
  },
  {
    "quote":"I think women and seamen don't mix",
    "character":"Waylon Smithers",
    "image":"https://cdn.glitch.com/3c3ffadc-3406-4440-bb95-d40ec8fcde72%2FWaylonSmithers.png?1497567511840",
    "characterDirection":"Left"
  }];


function getData(){
 return new Promise((resolve, reject)=>{

  if(simpsonApi.length==0){
    reject(new Error('dta esta vacia'))
  }
  setTimeout(
    ()=>{
      resolve(simpsonApi);
    },2000
 
  )


 }
 )
}

/* getData()
.then(
  (simpsonApi)=>{
console.log(simpsonApi)
  }
)
.catch(
err=>{
  console.log(err.message)}
)
 */

/* async function fetchingData(){
  const characters = await getData();
  console.log(characters);
}

fetchingData()



 */

 ///////////
/*  const simpsonApi=async()=>{
const url='https://thesimpsonsquoteapi.glitch.me/quotes?count=9'
const resp= await fetch(url)
const data =await resp.json();

const characters = data.map((character)=>
({frase:character.quote,
  nombre:character.character,
  img:character.image,

}))
console.log(characters)
return characters;
 } */



///////

const simpsonApi=async()=>{
  let characters=[]
await fetch("https://thesimpsonsquoteapi.glitch.me/quotes?count=9")
       .then(response=>response.json())
       .then(data=>characters=data)
       console.log(characters)
       return characters

}

 export default simpsonApi  

/////////
/* const productos = [
  {
    id: 0,
    name: 'tomate',
    descripcion: 'grande',
    stock: 200,
  },
  {
    id: 01,
    name: 'papa',
    descripcion: 'chica',
    stock: 120,
  },
];
const getProductos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(productos);
    }, 3000);
  });
};

async function fetchProductos() {
  const productPromise = await getProductos();
  console.log(productPromise);
}

fetchProductos();
 */