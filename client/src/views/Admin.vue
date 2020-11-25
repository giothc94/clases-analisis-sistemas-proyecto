<template>
  <div>
    <div class="container">
      <div class="row mt-5">
        <div class="col-md-6">
          <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">First</th>
                <th scope="col">Last</th>
                <th scope="col">Handle</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Mark</td>
                <td>Otto</td>
                <td>@mdo</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Jacob</td>
                <td>Thornton</td>
                <td>@fat</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Larry</td>
                <td>the Bird</td>
                <td>@twitter</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div class="col-md-6">
          <div>
            <div class="form-group">
              <label for="exampleInputEmail1">Nombre del producto</label>
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Ingrese el nombre del producto"
                v-model="nombre"
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1"
                >Descripcion del producto</label
              >
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Ingrese la descipcion del producto"
                v-model="descripcion"
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlFile1">Imagen del producto</label>
              <input
                type="file"
                class="form-control-file"
                id="exampleFormControlFile1"
                v-on:change="cargarImagen"
              />
            </div>
            <button class="btn btn-primary" v-on:click="enviarProducto">Enviar</button>
          </div>
          <div class="card p-4 mt-5">
            <p>Nombre: {{ nombre }}</p>
            <p>Descripcion: {{ descripcion }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios"
export default {
  data() {
    return {
      nombre: null,
      descripcion: null,
      image: null,
    };
  },
  methods: {
    cargarImagen(event) {
      this.image = event.target.files[0];
    },
    enviarProducto(){
      let formData = new FormData();
      formData.append("nombreProducto",this.nombre);
      formData.append("descripcionProducto", this.descripcion);
      formData.append("imagenProducto", this.image)
      axios.post("http://localhost:3000/products/upload", formData)
        .then(console.log)
        .catch(console.error)
    }
  },
};
</script>
