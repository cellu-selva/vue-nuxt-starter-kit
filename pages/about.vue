<template lang="html">
  <div class="container">
    <h1 class="title">
      about us
      <div v-if="$store.state.authUser && $store.state.authUser.user">
        {{ $store.state.authUser.user.username || 'friend' }}
      </div>      
    </h1>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
</style>
