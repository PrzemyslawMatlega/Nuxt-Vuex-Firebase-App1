<template>
  <div>
    <v-app>
      <v-app-bar color="orange" dark>
        <nuxt-link to="/" tag="div">
          <v-toolbar-title>AppNo1 - Nuxt/Vuex/Firebase</v-toolbar-title>
        </nuxt-link>
        <v-spacer></v-spacer>
        <nuxt-link to="/admin" tag="div">
          <v-btn text >Edit Panel</v-btn>
        </nuxt-link>
      </v-app-bar>
    <nuxt />
    </v-app>
  </div>
</template>

<style lang="scss">
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
