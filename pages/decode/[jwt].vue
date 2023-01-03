<script setup>
import {useJwtStore} from "~/stores/jwtStore";
import Copy from "~/components/Copy.vue";

const jwt = useJwtStore();
const route = useRoute();

jwt.set(route.params.jwt);
</script>
<template>
  <div>
    <EncodedJwtInput :autofocus=false />
    <div class="my-2">
      <ColorMode class="inline-block mr-4" />
      <Copy class="inline-block mr-4" />
      <Expiration class="inline-block" />
    </div>
    <DecodedJwt />
  </div>
</template>
