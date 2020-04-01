<template>
  <v-list>
    <template v-for="item in items">
      <v-list-item
        :key="item.text"
        link
        :to="item.to"
      >
        <v-list-item-action>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>
            {{ item.text }}
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
      { icon: "mdi-home", text: "Home", to: "/" },
      { icon: "mdi-history", text: "Frequently contacted", to: "/about" },
      { icon: "mdi-content-copy", text: "Login", to: "/login" },
      { icon: "mdi-cog", text: "Settings" },
      { icon: "mdi-message", text: "Send feedback" },
      { icon: "mdi-help-circle", text: "Help" },
      { icon: "mdi-cellphone-link", text: "App downloads" },
      { icon: "mdi-keyboard", text: "Go to the old version" }
    ]
  })
};
</script>