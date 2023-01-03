<script>
export default {
  props: {
    name: String,
    value: Array,
    indent: Number,
    last: Boolean
  }
}
</script>

<template>
  <!-- claim value -->
  <span class="bracket">[</span>
  <span v-for="(claim, index) in value">
      <Claim :value="claim" :indent="indent + 1" :last="index === value.length - 1"/>
    </span>
  <span v-for="n in indent">&nbsp;&nbsp;</span>
  <span class="bracket">]</span>
</template>

