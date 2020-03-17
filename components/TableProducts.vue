<template>
  <div class="table-ui">
    <h1 class="table-ui__title">Table UI</h1>
    <b-table class="table-ui__table" striped hover :items="getProducts"></b-table>
  </div>
</template>

<script lang="ts">
  import {
    Vue,
    Component,
  } from 'nuxt-property-decorator'
  import { namespace } from 'vuex-class';

  const productsStore = namespace('products');

  @Component({

  })
  export default class TableProducts extends Vue {
    @productsStore.Action private loadProducts;
    @productsStore.Getter private getProducts;

    created() {
      this.loadProducts().then(() => {
        Vue.prototype.$snotify.success('Products are loaded successfully!', 'Success')
      }).catch((err) => {
        Vue.prototype.$snotify.error('Try reload page!', err.error)
      });
    }
  }
</script>

<style scoped lang="scss">
  .table-ui {
    &__title {
      margin: 32px 0;
    }
    &__table {
      padding: 10px 0;
    }
  }
</style>
