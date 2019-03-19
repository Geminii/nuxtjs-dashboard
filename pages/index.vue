<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <material-card
            color="success"
            elevation="12"
            title="Connexion"
          >
            <v-card-text>
              <v-form>
                <v-text-field type="text" v-model="username" prepend-icon="person" name="username" label="Login" :placeholder="defaultUserPassword"></v-text-field>
                <v-text-field type="password" v-model="password" prepend-icon="lock" name="password" label="Password" :placeholder="defaultUserPassword"></v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-layout justify-center align-center>
                <v-btn color="success" :disabled="isDisabled" @click.prevent="authenticate">Login</v-btn>
              </v-layout>
            </v-card-actions>
          </material-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
  import { mapActions } from 'vuex'
  import materialCard  from '~/components/material/AppCard'

  export default {
    components: {
      materialCard
    },
    data() {
      return {
        username: 'admin',
        password: 'admin',
        defaultUserPassword: 'admin'
      }
    },
    computed: {
      isDisabled() {
        return this.username !== this.defaultUserPassword || this.password !== this.defaultUserPassword;
      }
    },
    methods: {
      ...mapActions({
        setUsername: 'user/setUsername'
      }),

      async authenticate() {
        if (!this.isDisabled) {
          await this.setUsername(this.defaultUserPassword);
          this.$router.push({ path: 'dashboard' });
        }
      }
    }
  }
</script>
