<script>
export default {
  props: {
    name: String,
    value: Object,
    indent: Number,
    last: Boolean
  },
  computed: {
    totalClaims: function () {
      return Object.keys(this.value).length;
    }
  }
}
</script>

<template>
  <!-- claim value -->
  <span class="brace">{</span>
    <span v-for="(value, key, index) in value">
      <Claim :name="key" :value="value" :indent="indent + 1" :last="index === totalClaims -1"/>
    </span>
  <span v-for="n in indent">&nbsp;&nbsp;</span>
  <span class="brace">}</span>
</template>

