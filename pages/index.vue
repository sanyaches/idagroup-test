<template>
  <b-container>
    <div>
      <TableProducts />
    </div>
  </b-container>
</template>

<script>
import TableProducts from '../components/TableProducts'
export default {
  components: {
    TableProducts
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}
</style>
