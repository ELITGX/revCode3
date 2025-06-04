// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]

const contenedor = document.getElementById("lista-de-productos") // Se cambia el nombre de la variable porque es confuso y se obtiene el elemento por id en vez de name
const input = document.getElementById("input-busqueda"); // Se acambia nombre de la variable y se cambia el querySelector por getElementById para usar el id que se agrego en el html
const botonDeFiltro = document.querySelector("button"); // Se sube la variable para mejor orden del codigo

// Se encapsula el for en una funcion para renderizar la lista que se menciona abajo pero no se habia creado
function displayProductos(productos){
   contenedor.innerHTML = ""; // Se agrega esta linea para limpiar el contenedor antes de agregar nuevos elementos
  for (let i = 0; i < productos.length; i++) {
  const d = document.createElement("div") // Se cambia var por const
  d.classList.add("producto")

  const ti = document.createElement("p") // Se cambia var por const
  ti.classList.add("titulo")
  ti.textContent = productos[i].nombre
  
  const imagen = document.createElement("img"); // Se cambia var por const
  imagen.setAttribute('src', productos[i].img);

  d.appendChild(ti)
  d.appendChild(imagen)

  contenedor.appendChild(d)
  }
}
// Se sube la funcion filtrado
const filtrado = (productos = [], texto) => {
  return productos.filter(item => item.tipo.includes(texto) || item.color.includes(texto));
}  

displayProductos(productos); // Se agrega ;

// Se borra codigo duplicado y se reutiliza la funcion de displayProductos
botonDeFiltro.onclick = function() {
  //se comenta el while
  // while (li.firstChild) {
  //   li.removeChild(li.firstChild);
  // }

  const texto = input.value; //Se cambia nombre de variable que cambiamos arriba
  //console.log(texto); //Consol log inecesario se comenta
  const productosFiltrados = filtrado(productos, texto );
  displayProductos(productosFiltrados);
}

