const tablaProductos = document.querySelector('#productos')
const tablaProductos2 = document.querySelector('#productos2')

function cargarProductos(){
    fetch('distriVictoria2.json')
    .then(respuesta => respuesta.json())
    .then(productos => {
        console.log(productos.imagen)
        productos.imagen.forEach(producto => {
            const card = document.createElement('div');
            card.innerHTML += `
            <div class="card" style="width: 18rem;">
        <img src="${producto.image}">
        <div class="card-body">
          <h5 class="card-title ">${producto.producto}</h5>
          <p class="card-text">${producto.precio}</p>
         
          <a href="#" class="btn btn-primary">Agregar al Carrito</a>
        </div>
      </div>
            `;
            const card2 = document.createElement('div');  
            card2.innerHTML += `
            <div class="card2">
                <div class="imgBox">
            <img src="${producto.image}" alt="">
            </div>
            <div class="detalle">
            <div class="title">
                <h3>${producto.producto}</h3>
                
                
            </div>
            
            <div class="buy">
                <div class="price">
                   
                    <span>${producto.precio}</span>
                </div>
                <div class="btn">
                    <a href="#">Agregar al carrito</a>
                </div>
            </div>
            </div>
            </div>`;
            tablaProductos.appendChild(card);
            tablaProductos2.appendChild(card2);
        })
    })
}
cargarProductos();

function carritoHTML() {

    vaciarCarrito();

    articulosCarrito.forEach(curso => {
         const row = document.createElement('tr');
         row.innerHTML = `
              <td>  
                   <img src="${curso.imagen}" width=100>
              </td>
              <td>${curso.titulo}</td>
              <td>${curso.precio}</td>
              <td>${curso.cantidad} </td>
              <td>
                   <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
              </td>
         `;
         contenedorCarrito.appendChild(row);
    });

}

//incrementar y decrementar
// <!-- incrementar y decrementar -->
// <div class="wrapper">
//   <span class="minus">-</span>
//   <span class="num">01</span>
//   <span class="plus">+</span>
// </div>

        const plus = document.querySelector(".plus"),
         minus = document.querySelector(".minus"),
         num = document.querySelector(".num");
         let a = 1;
         plus.addEventListener("click", ()=>{
           a++;
           a = (a < 10) ? "0" + a : a;
           num.innerText = a;
         });
     
         minus.addEventListener("click", ()=>{
           if(a > 1){
             a--;
             a = (a < 10) ? "0" + a : a;
             num.innerText = a;
           }
         });
     
 