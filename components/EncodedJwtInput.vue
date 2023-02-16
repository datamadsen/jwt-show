<script setup>
import {useJwtStore} from "~/stores/jwtStore";

const jwt = useJwtStore();
const router = useRouter();
const el = ref();

const props = defineProps({
  autofocus: {
    type: Boolean,
    default: false
  }
});

/* Blur the input on paste. This will set also trigger the change event. */
function blurInput(event) {
  window.setTimeout(function() {
    event.target.blur();
  },0 );
}

/* When there's a change, navigate to a url that will show the jwt. */
function change(event) {
  router.push({ path: `/decode/${event.target.value}` })
}

onMounted(() => {
  // If we are on something non-mobile, automatically focus the input element. You would think we could use the
  // autofocus attribute on the input element, but that doesn't work with firefox for whatever reason.
  if(props.autofocus && !/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    el.value.focus();
  }
})
</script>

<template>
  <div>
    <input
      ref="el"
      type="text"
      placeholder="paste jwt here"
      class="w-full text-base border-2 rounded"
      :class="{'px-0': jwt.encoded, 'px-2': !jwt.encoded}"
      v-model="jwt.encoded"
      @change="change($event)"
      @focusin="$event.target.value=''"
      @focusout="$event.target.value=jwt.encoded"
      @paste="blurInput($event)"
    />
  </div>
</template>
