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
              />
            </div>
            <div class="form-group">
              <label for="exampleInputPassword1">Descripcion del producto</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Ingrese la descipcion del producto"
              />
            </div>
            <div class="form-group">
              <label for="exampleFormControlFile1">Imagen del producto</label>
              <input
                type="file"
                class="form-control-file"
                id="exampleFormControlFile1"
              />
            </div>
            <button type="submit" class="btn btn-primary">Enviar</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
