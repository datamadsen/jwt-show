<script setup>
import {JwtIssuer} from "~/utils/jwt-issuer";

const router = useRouter();

async function setDemoToken() {
  const demoToken = await JwtIssuer.issueDemoToken();
  router.push({ name: "decode-jwt", params: { jwt: demoToken } });
}
</script>

<template>
  <div>
    <span class="button-group">
      <button @click="setDemoToken()">demo token</button>
    </span>
  </div>
</template>
