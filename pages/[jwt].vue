<script setup>
const route = useRoute();
const router = useRouter();

const jwt = route.params.jwt;

if (jwt)
  router.push({ name: "decode-jwt", params: { jwt } });
</script>

<template>
  Connecting...
</template>
