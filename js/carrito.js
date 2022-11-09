
const tablaCarrito = document.querySelector('#tablaCarrito');
const totalHTML = document.querySelector('#totalHTML');

let articulosCarrito =[];
let total = 0;

eventListeners2();
function eventListeners2() {
    //Cuando arranca la App
    tablaCarrito.addEventListener('click', eliminar) 

document.addEventListener('DOMContentLoaded', ()=>{
    const articulosCarritoPrev = JSON.parse(localStorage.getItem('articulosCarrito'))|| [];
    articulosCarritoPrev.forEach(curso => articulosCarrito.push(curso));
    carritoHTML();
    calcularTotal();  
})
};

function carritoHTML() {
    articulosCarrito.forEach(producto => {
        
        const card = document.createElement("div");
        card.innerHTML += `
        <div class="card2 contenedor cardCarrito mb-4 shadow rounded">
        <div class="imgBox">
          <img
            src="${producto.imagen}"
            style="height: 150px; width: 150px"
            alt=""
          />
        </div>
        <div class="detalle detalleCarrito flex">
          <div>
            <div class="title">
              <h3>${producto.titulo}</h3>
            </div>

            
              <div class="price">
                <span>${producto.precio}</span>
              </div>
            
          </div>

          
            <div class="form-group">
              <label for="gasto">Cantidad:</label>
              <input
                type="number"
                class="form-control"
                name="${producto.id}"
                placeholder="${producto.cantidad}"
                style="width: 150px"
                onchange="cantidad(event)"
                />
            </div>
          
          <div>
            <div class="btn btn2 text-wrap mt-2 btn2-danger eliminar-carrito" data-id="${producto.id}">Eliminar</div>
          </div>
        </div>
      </div>
      

            
            `;
        
        tablaCarrito.appendChild(card);
      })
}

function eliminar(e){
    e.preventDefault();
    if(e.target.classList.contains('eliminar-carrito')) {
        

        if(e.target.classList.contains('btn2-danger')) {
            const productoId = e.target.getAttribute('data-id');
             
            // Eliminar producto del carrito
            articulosCarrito = articulosCarrito.filter( producto => producto.id !== productoId );
            localStorage.setItem('articulosCarrito', JSON.stringify(articulosCarrito));
            vaciarCarrito();
            carritoHTML();
           
            
            console.log("Producto Eliminado");
            console.log(articulosCarrito);
        }
    }
}
function vaciarCarrito() {
    while(tablaCarrito.firstChild) {
        tablaCarrito.removeChild(tablaCarrito.firstChild);
    }
}

// Cargar cantidades
function cantidad(event){
    const idCantidades = event.target.name;
    articulosCarrito = articulosCarrito.map( producto =>{
        if(producto.id === idCantidades){
            producto.cantidad = event.target.value;
        }
        return producto;
    });
    localStorage.setItem('articulosCarrito', JSON.stringify(articulosCarrito));
     console.log(articulosCarrito)
     calcularTotal();
    
}
// Puedes ver que si bien no se ve mal, podemos tenerlo todo en una sola linea con un .reduce
                            
// total, actual
// let resultado = carrito.reduce((total, producto) => total + producto.precio, 0); //0 es el inicio
//  console.log( resultado );
function calcularTotal() {
    total = 0;
    articulosCarrito.forEach(producto => {
        if (producto.cantidad != 0 || producto.cantidad !== NaN) {
            console.log(producto.precio.slice(producto.precio.indexOf(","))); 
            total = total + Number(producto.precio.slice(1)) * Number(producto.cantidad)
        }
    });
    console.log(total);
    totalHTML.textContent = Number((total).toFixed(2));
}
const actividad = 'Estoy aprendiendo Javascript Moderno';
console.log(actividad.split(" "));
let rodrigo = "12,234.45"
let total3 = rodrigo.substring(rodrigo.indexOf(","), 0) + rodrigo.substring(rodrigo.indexOf(",")+1)
console.log(total3)
