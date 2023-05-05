<template> 
  <div class="hello">
     <v-col cols="12">
            <img
               src="../assets/gib.jpg"
               class="my-3"
               contain
               height="270"
            />
         </v-col>
    <h3>Name : {{ text }}</h3>
    <h3>Nick name : GIB</h3>
    <h3>Age : 21  </h3>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
  data() {
    return {
      text: "Naphatson  Sriphet",
      
    };
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