<script setup>
import {useJwtStore} from "~/stores/jwtStore";

const jwt = useJwtStore();
jwt.set(null);
</script>

<template>
  <div>
    <EncodedJwtInput :autofocus=true />
    <div class="my-2">
      <ColorMode class="inline-block mr-4" />
      <Demo class="inline-block mt-2 md:mt-0" />
    </div>
  </div>
</template>
