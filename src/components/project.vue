<template> 
  <div class="hello">
     <v-col cols="12">
            <img
               src="../assets/1.jpg"
               class="my-3"
               contain
               height="270"
            />
         </v-col>
    <h3>Project : {{ text }}</h3>
    <h3>ผลงาน : ออกแบบหน้าโมบายแอป</h3>
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
      text: "ผลงานที่เคยทำ",
      
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