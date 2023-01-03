<script setup>
import {Clipboard} from "~/utils/clipboard";
import {useJwtStore} from "~/stores/jwtStore";

const jwt = useJwtStore();

function copyStuff(stuff) {
  Clipboard.setClipboard(stuff);
}

function copyLink() {
  Clipboard.setClipboard(window.location)
}
</script>

<template>
  <div>
    <span class="button-group">
      <span class="title">copy:</span>
      <ButtonWithCheckmarkFeedback @click="copyStuff(jwt.encoded)">
        encoded
      </ButtonWithCheckmarkFeedback>
      <ButtonWithCheckmarkFeedback @click="copyStuff(jwt.stringified)">
        decoded
      </ButtonWithCheckmarkFeedback>
      <ButtonWithCheckmarkFeedback @click="copyLink()">
        link
      </ButtonWithCheckmarkFeedback>
    </span>
  </div>
</template>
