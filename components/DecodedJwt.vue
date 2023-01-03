<script>
import {useJwtStore} from "~/stores/jwtStore";
export default {
  data: () => ({
    jwt: useJwtStore()
  }),
  computed: {
    totalClaims: function () {
      return Object.keys(this.jwt.decoded).length;
    },
    isJwt: function() {
      return isJwt(this.jwt.encoded);
    }
  },
  onMount() {

  }
}
</script>

<template>
  <div class="text-lg">
    <div v-if="!isJwt">
      <span>{{ jwt.decoded }}</span>
    </div>
    <div v-else>
      <span class="brace">{</span>
      <div v-for="(value, key, index) in jwt.decoded">
        <Claim :name="key" :value="value" :indent="1" :last="index === totalClaims -1"/>
      </div>
      <span class="brace">}</span>
    </div>
  </div>
</template>
