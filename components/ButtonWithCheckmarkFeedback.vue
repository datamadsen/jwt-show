<script setup>
defineProps({
  stuff: String
})

const successMark = ref(false);

function btnClick() {
  successMark.value = true;
  setTimeout(() => successMark.value = false, 2000);
}

</script>

<template>
  <button :class="{success: successMark}" @click="btnClick()">
    <slot/>
    <span class="checkmark">
      <span class="checkmark_stem"></span>
      <span class="checkmark_kick"></span>
    </span>
  </button>
</template>
