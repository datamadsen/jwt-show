<script setup>
import { ref } from 'vue';
import {useJwtStore} from "~/stores/jwtStore";
import {JwtExpiration} from "~/utils/jwt-expiration";

const componentKey = ref(0);

const jwt = useJwtStore();

let expires = null
if (jwt.decoded.exp)
  expires = new Date(jwt.decoded.exp * 1000)

let expiration = (jwt.decoded.exp || 0) * 1000;
let expirationString = JwtExpiration.expString(expiration);
let isExpired = JwtExpiration.isExpired(expiration);
let intervalId;

onMounted(() => {
  intervalId = setInterval(function() {
    expiration = (jwt.decoded.exp || 0) * 1000;
    expirationString = JwtExpiration.expString(expiration);
    isExpired = JwtExpiration.isExpired(expiration);
    componentKey.value++;
  }, 500)
})

onUnmounted(() => {
  clearInterval(intervalId);
})
</script>

<template>
  <div v-if="expires">
    <pre :key="componentKey" class="expirationCountdown" :class="{ expired: isExpired }">{{ expirationString }}</pre>
  </div>
</template>

