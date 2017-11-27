
<template>
  
</template>

<script>
import { mapActions } from 'vuex'

export default {
  mounted () {
    this.logout()
  },
  methods: {
    ...mapActions({
      logout: 'logout'
    })
  }
}
</script>
