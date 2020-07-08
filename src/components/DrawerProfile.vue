<template>
  <v-list-item
    two-line
    v-if="user"
  >
    <v-list-item-avatar>
      <img :src="user.photoURL">
    </v-list-item-avatar>

    <v-list-item-content>
      <v-list-item-title>{{ user.displayName }}</v-list-item-title>
      <v-list-item-subtitle>{{ user.email }}</v-list-item-subtitle>
    </v-list-item-content>
  </v-list-item>
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.getters.getUser;
    }
  }
};
</script>