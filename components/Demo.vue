<template>
  <span class="button-group ml-4">
    <button @click="setDemoToken()">demo token</button>
  </span>
</template>

<script setup>
import {JwtIssuer} from "~/utils/jwt-issuer";

const router = useRouter();

async function setDemoToken() {
  const demoToken = await JwtIssuer.issueDemoToken();
  router.push({path: `/decode/${demoToken}`})
}
</script>
