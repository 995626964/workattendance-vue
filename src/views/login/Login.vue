<template>
  <div class="hello">
    <a-button @click="sat">say</a-button>
  </div>
</template>

<script>
export default {
  methods: {
    sat() {
      this.$axios.post("/api/login/doLogin", {
          jobNumber: "0000",
          password: "123456",
        },res=>{
          console.log(res.data.token)
         this.$token.set(132)
        })
      console.log(this.$token.get());
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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