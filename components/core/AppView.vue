<template>
  <v-content>
    <div id="core-view">
      <v-fade-transition mode="out-in">
        <nuxt />
      </v-fade-transition>
    </div>
    <core-footer v-if="$route.name !== 'Maps'" />
  </v-content>
</template>

<script>
  import coreFooter from '~/components/core/AppFooter'

  export default {
    metaInfo () {
      return {
        title: 'Vuetify Material Dashboard by CreativeTim'
      }
    },
    components: {
      coreFooter
    }
  }
</script>

<style>
  #core-view {
    padding-bottom: 100px;
  }
</style>
