<template>
  <v-list>
    <template v-for="item in items">
      <v-list-item :key="item.text" link :to="item.to">
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>
            {{ $t(item.text) }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </template>
  </v-list>
</template>

<script>
export default {
  data: () => ({
    items: [
      { icon: "mdi-home", text: "home", to: "/" },
      { icon: "mdi-information", text: "about", to: "/about" },
      { icon: "mdi-content-copy", text: "login", to: "/login" },
      { icon: "mdi-cog", text: "settings" },
      { icon: "mdi-message", text: "messages" },
      { icon: "mdi-help-circle", text: "help" },
    ],
  }),
};
</script>
