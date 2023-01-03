<template>
  <div>
    <span class="button-group">
      <span class="title">color:</span>
      <button v-for="color of ['dark', 'light', 'system']"
              @click="$colorMode.preference = color"
              :key="color"
              :class="{ active: color === $colorMode.preference }">{{ color }}</button>
    </span>
  </div>
</template>