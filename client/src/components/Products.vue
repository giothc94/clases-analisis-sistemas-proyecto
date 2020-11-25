<template>
  <div class="hello">
    <div class="container">
      <h2 class="mt-5 mb-5 display-4 text-center">Lista de productos</h2>
      <div class="row">
        <div class="col-4" v-for="product in products" :key="product.id">
          <div class="card mb-3">
            <img
              src="../assets/logo.png"
              class="card-img-top"
              alt="..."
              width="100"
              height="100"
            />
            <div class="card-body">
              <h5 class="card-title">{{ product.nombre }}</h5>
              <p class="card-text">
                {{ product.descripcion }}
              </p>
              <p
                class="card-text d-flex justify-content-lg-between align-items-center"
              >
                <small class="text-muted mr-5">$ {{ product.precio }}</small>
                <button
                  class="btn btn-dark"
                  v-on:click="agregarAlCarrito(product)"
                >
                  Agregar al carrito
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Products",
  data() {
    return {
      products: [
        {
          id: 1,
          nombre: "mochila",
          descripcion: "Es una descripcion corta de mochila",
          precio: 23.0
        },
        {
          id: 2,
          nombre: "zapatos",
          descripcion: "Es una descripcion corta de zapatos",
          precio: 20.0
        },
        {
          id: 3,
          nombre: "camiseta",
          descripcion: "Es una descripcion corta de camiseta",
          precio: 13.0
        },
        {
          id: 4,
          nombre: "pantalon",
          descripcion: "Es una descripcion corta de pantalon",
          precio: 40.0
        }
      ],
      productsInCar: []
    };
  },
  methods: {
    agregarAlCarrito(product) {
      // Forma 1
      localStorage.setItem(`${product.id}`, JSON.stringify(product));
      // Forma 2
      this.productsInCar.push(product);
      let productsString = this.productsInCar.map(producto =>
        JSON.stringify(producto)
      );
      localStorage.setItem("productos", `[${productsString.toString()}]`);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
