<template>
  <v-app>
    <v-app-bar
      app
      dense
      :clipped-left="$vuetify.breakpoint.lgAndUp"
      collapse-on-scroll
      color="primary"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />

      <v-toolbar-title>Page title</v-toolbar-title>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="$vuetify.breakpoint.lgAndUp"
      app
    >
      <drawer-profile />
      <drawer-list />
    </v-navigation-drawer>   
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import DrawerList from "@/components/DrawerList";
import DrawerProfile from "@/components/DrawerProfile";
export default {  
  data: () => ({
    drawer: false,
    langs: ["en", "es"],
  }),
  components: { DrawerList, DrawerProfile },
  computed: {
    authorized() {
      return this.$store.getters.isAuthorized;
    },
  },
};
</script>
