const tablaProductos = document.querySelector("#productos");

function cargarProductos() {
  fetch("distriVictoria2.json")
    .then((respuesta) => respuesta.json())
    .then((productos) => {
      console.log(productos.imagen);
      productos.imagen.forEach((producto) => {
        const card2 = document.createElement("div");
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
                    <div class=" btn btn2">
                        <a href="#">Agregar al carrito</a>
                    </div>
                </div>
            </div>
            `;

        // tablaProductos.appendChild(card);
        tablaProductos.appendChild(card2);
      });
    });
}
cargarProductos();

//incrementar y decrementar
// <!-- incrementar y decrementar -->
// <div class="wrapper">
//   <span class="minus">-</span>
//   <span class="num">01</span>
//   <span class="plus">+</span>
// </div>

// const plus = document.querySelector(".plus"),
//  minus = document.querySelector(".minus"),
//  num = document.querySelector(".num");
//  let a = 1;
//  plus.addEventListener("click", ()=>{
//    a++;
//    a = (a < 10) ? "0" + a : a;
//    num.innerText = a;
//  });

//  minus.addEventListener("click", ()=>{
//    if(a > 1){
//      a--;
//      a = (a < 10) ? "0" + a : a;
//      num.innerText = a;
//    }
//  });
