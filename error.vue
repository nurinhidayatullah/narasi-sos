<template>
  <div class="main">
    <div class="error">
      <span class="code">{{ error.statusCode }}</span>
      <span class="message">{{ error.message }}</span>
      <nuxt-link to="/">back to home</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    error: Object
  }
}
</script>

<style lang="scss" scoped>
.main {
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  .error {
    width: 300px;
    padding: 16px;
    border: 1px solid #4a25aa;
    border-radius: 10px;
    .code {
      font-size: 24px;
      color: #4a25aa;
      display: block;
    }
    .message {
      font-size: 16px;
      display: block;
      margin-bottom: 8px;
    }
    a {
      font-weight: 600;
    }
  }
}
</style>