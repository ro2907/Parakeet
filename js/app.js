const tablaProductos = document.querySelector("#productos");
let articulosCarrito = [];
let bandera = true;
//Evenlisteners
evenlisteners();
function evenlisteners() {
    tablaProductos.addEventListener('click', agregar)
    articulosCarrito = JSON.parse(localStorage.getItem('articulosCarrito'))|| [];
}

function cargarProductos() {
  fetch("distriVictoria2.json")
    .then((respuesta) => respuesta.json())
    .then((productos) => {
      productos.imagen.forEach((producto) => {
        let bandera = true;
        // const id = Date.now();
        const card2 = document.createElement("div");
        if(articulosCarrito.length > 0){
            articulosCarrito.forEach(productoCarro =>{
                if(producto.producto === productoCarro.titulo && bandera) {
                    card2.innerHTML += `
                    <div class="card2 shadow rounded cardExpan contenedor">
                        <div class="imgBox">
                            <img src="${producto.image}" alt="">
                        </div>
                        <div class="detalle">
                            <div class="title">
                                <h3>${producto.producto}</h3>
                                    <div class="price">
                           
                                        <span>${producto.precio}</span>
                                    </div>
                                
                            </div>
                            <div class="btn btn2 text-wrap agregar-carrito btn2-danger" data-id="${producto.id}">Quitar del carrito</div>
                        </div>
                    </div>
                    `;
                  bandera = false;  
                }
                // else{
                //     card2.innerHTML += `
                //     <div class="card2 shadow rounded cardExpan contenedor">
                //         <div class="imgBox">
                //             <img src="${producto.image}" alt="">
                //         </div>
                //         <div class="detalle">
                //             <div class="title">
                //                 <h3>${producto.producto}</h3>
                //                     <div class="price">
                           
                //                         <span>${producto.precio}</span>
                //                     </div>
                                
                //             </div>
                //             <div class="btn btn2 text-wrap agregar-carrito" data-id="${id}">Agregar al carrito</div>
                //         </div>
                //     </div>
                //     `;
                // }
            
            })
        }
         if(bandera){
            card2.innerHTML += `
                    <div class="card2 shadow rounded cardExpan contenedor">
                        <div class="imgBox">
                            <img src="${producto.image}" alt="">
                        </div>
                        <div class="detalle">
                            <div class="title">
                                <h3>${producto.producto}</h3>
                                    <div class="price">
                           
                                        <span>${producto.precio}</span>
                                    </div>
                                
                            </div>
                            <div class="btn btn2 text-wrap agregar-carrito" data-id="${producto.id}">Agregar al carrito</div>
                        </div>
                    </div>
                    `;
        
        } 
            
        
        

        // tablaProductos.appendChild(card);
        tablaProductos.appendChild(card2);
      });
    });
}
cargarProductos();

function agregar(e){
    e.preventDefault();
    if(e.target.classList.contains('agregar-carrito')) {
        

        if(e.target.classList.contains('btn2-danger')) {
            const productoId = e.target.getAttribute('data-id');
             
            // Eliminar producto del carrito
            articulosCarrito = articulosCarrito.filter( producto => producto.id !== productoId );
            localStorage.setItem('articulosCarrito', JSON.stringify(articulosCarrito));
            // cambio de color del boton y mensaje
            e.target.classList.toggle('btn2-danger');
            e.target.textContent ="Agregar al carrito";
            
            console.log("Producto Eliminado");
            console.log(articulosCarrito);
        } else{
            const producto = e.target.parentElement.parentElement;
        //Enviamos el producto selecionado para tomar sus datos
        leerDatosproducto(producto);
        localStorage.setItem('articulosCarrito', JSON.stringify(articulosCarrito));
        // cambio de color del boton y mensaje
        e.target.classList.toggle('btn2-danger');
        e.target.textContent ="Quitar del carrito";
        }
         
    }
}

function leerDatosproducto(producto){
    let infoProducto = {
        imagen: producto.querySelector('img').src,
        titulo: producto.querySelector('h3').textContent,
        precio: producto.querySelector('.price span').textContent,
        id: producto.querySelector('.detalle .agregar-carrito').getAttribute('data-id'),
        cantidad: 0
    };
    articulosCarrito.push(infoProducto); //= [...articulosCarrito, infoCurso];
        console.log(articulosCarrito);
}

