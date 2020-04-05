<template>
  <v-container fluid>

    <v-card>
      <v-card-title>
        Sign in
      </v-card-title>
      <v-card-text>
        <v-form>
          <v-text-field
            label="Email"
            name="login"
            v-model="login"
            prepend-icon="mdi-account"
          ></v-text-field>
          <v-text-field
            label="Password"
            name="password"
            type="password"
            v-model="password"
            prepend-icon="mdi-lock"
          ></v-text-field>

        </v-form>
        <div v-if="message">{{ message}}</div>
      </v-card-text>
      <v-card-actions>
        <v-btn
          @click="signIn"
          color="primary"
          outlined
          tile
        >Sign in</v-btn>
        <v-btn
          @click="signUp"
          color="primary"
          outlined
          tile
        >Sign up</v-btn>
        <v-btn
          outlined
          tile
          color="primary"
          @click="withGoogle"
        >
          <v-avatar
            tile
            size="35"
          >
            <v-img
              @click="withGoogle"
              src="@/assets/btn_google_light_normal_ios.svg"
            />
          </v-avatar>
          Use Google
        </v-btn>
      </v-card-actions>
    </v-card>

  </v-container>
</template>

<script>
export default {
  data() {
    return {
      login: "",
      password: "",
      message: ""
    };
  },

  methods: {
    signIn() {
      this.$store.dispatch("authorizeUser", {
        email: this.login,
        password: this.password
      });
    },

    signUp() {
      this.$store.dispatch("signUp", {
        email: this.login,
        password: this.password
      });
    },

    withGoogle() {
      this.$store.dispatch("authorizeWithGoogle");
    }
  }
};
</script>
