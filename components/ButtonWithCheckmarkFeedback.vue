<script>
export default {
  props: {
    stuff: String
  },
  methods: {
    btnClick(element) {
      this.$emit("click");
      element.classList.add('success');
      window.setTimeout(function () {
        element.classList.remove('success');
      }, 2000);
    }
  }
}
</script>

<template>
  <button @click="btnClick($event.target)">
    <slot/>
    <span class="checkmark">
      <span class="checkmark_stem"></span>
      <span class="checkmark_kick"></span>
    </span>
  </button>
</template>
