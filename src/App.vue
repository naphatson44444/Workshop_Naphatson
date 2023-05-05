<template>
  <div id="app">
    <template>

      <v-bottom-navigation v-model="value">

        <v-btn value="profile" @click="goToProfile()">
          <span>Profile</span>

        </v-btn>

        <v-btn value="contact" @click="goToContact()">
          <span>Contact</span>

        </v-btn>

          <v-btn value="project" @click="goToProject()">
          <span>Project</span>

        </v-btn>

      </v-bottom-navigation>
    </template>
    <router-view />
  </div>
</template>

<script>
export default {
   name: 'App',

   data: () => ({
      //
   }),
   methods: {
      goToProfile(){
        this.$router.push('/profile');
     },
      goToContact() {
        this.$router.push('/contact');
     },
      goToProject() {
        this.$router.push('/project');
     },
   }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
.router-link-exact-active {
  color: blue;
}
</style>