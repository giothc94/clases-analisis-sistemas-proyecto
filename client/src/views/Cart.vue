<template>
  <div class="about">
    <div class="container">
      <h1 class="mt-5 mb-3 text-center">Your cart</h1>
      <router-link class="mb-5 text-info" to="/">continuar comprando</router-link>
      <table class="table mt-3">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Nº</th>
            <th scope="col">Producto</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Cantidad</th>
            <th scope="col">Precio unitario</th>
            <th scope="col">Precio total</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in products" :key="product.id">
            <th scope="row">{{ product.id }}</th>
            <td>{{ product.nombre }}</td>
            <td>{{ product.descripcion }}</td>
            <td></td>
            <td>{{ product.precio }}</td>
            <td><div class="btn btn-danger">Eliminar</div></td>
          </tr>
          <tr>
            <th></th>
            <td></td>
            <td></td>
            <td>total</td>
            <td>50.00</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      products: []
    }
  },
  methods: {
    getProducts(){
      this.products = JSON.parse(localStorage.getItem("productos"))
    }
  },
  mounted(){
    this.getProducts()
  }
}
</script>