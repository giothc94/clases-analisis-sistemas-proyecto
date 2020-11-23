<template>
  <div class="hello">
    <div class="container">
      <div class="row">
        <div class="col-4" v-for="product in 7" :key="product.id">
          <div class="card mb-3">
            <img src="../assets/logo.png" class="card-img-top" alt="..." width="100" height="100" />
            <div class="card-body">
              <h5 class="card-title">Card title {{ product }}</h5>
              <p class="card-text">
                This is a longer card with supporting text below as a natural lead-in
                to additional content. This content is a little bit longer.
              </p>
              <p class="card-text">
                <small class="text-muted">Last updated 3 mins ago</small>
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
  name: "HelloWorld",
  props: {
    msg: String,
  },
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
