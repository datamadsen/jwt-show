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
    <div>
      <ColorMode class="inline-block mr-4 mt-2 md:mt-0" />
      <Copy class="inline-block mr-4 mt-2 md:mt-0"  />
      <Expiration class="inline-block mt-2 md:mt-0" />
    </div>
    <DecodedJwt />
  </div>
</template>
