<template>
  <v-app v-show="!isLoading">
    <v-fade-transition mode="out-in">
      <nuxt />
    </v-fade-transition>
  </v-app>
</template>

<script>
  export default {
    data() {
      return {
        isLoading: true
      }
    },
    mounted() {
      this.$nextTick(function() {
        this.isLoading = false
      });
    }
  }
</script>
