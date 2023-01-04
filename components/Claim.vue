<script>
import ArrayClaim from "~/components/ArrayClaim.vue";
import ObjectClaim from "~/components/ObjectClaim.vue";

export default {
  components: {ObjectClaim, ArrayClaim},
  props: {
    name: String,
    value: [Boolean, Number, String, Array, Object],
    indent: Number,
    last: Boolean
  },
  data: () => ({
    registeredClaims: {
      "iss": "https://tools.ietf.org/html/rfc7519#section-4.1.1",
      "sub": "https://tools.ietf.org/html/rfc7519#section-4.1.2",
      "aud": "https://tools.ietf.org/html/rfc7519#section-4.1.3",
      "exp": "https://tools.ietf.org/html/rfc7519#section-4.1.4",
      "nbf": "https://tools.ietf.org/html/rfc7519#section-4.1.5",
      "iat": "https://tools.ietf.org/html/rfc7519#section-4.1.6"
    },
    registeredTimeClaims: ["exp", "nbf", "iat"]
  }),
  computed: {
    isTimeClaim() {
      return this.registeredTimeClaims.indexOf(this.name) > -1;
    },
    timeString() {
      // Return the toString() of the date without the named timezone in the parentheses.
      return new Date(this.value * 1000).toString().replace(/ *\([^)]*\) */g, "");
    },
    jwtLink() {
      return "/decode/" + this.value;
    }
  }
}
</script>

<template>
  <div>
    <!-- indentation -->
    <span v-for="n in indent">&nbsp;&nbsp;</span>

    <!-- claim name, surrounded with quotes, possibly with a link to the rfc -->
    <span v-if="name">
      <span class="property">"</span>
      <span class="property">
        <a v-if="registeredClaims.hasOwnProperty(name)" class="underline" :href="registeredClaims[name]"
           target="_blank">{{ name }}</a>
        <span v-else>{{ name }}</span>
      </span>
      <span class="property">"</span>
      <span class="colon">:&nbsp;</span>
    </span>

    <!-- claim value -->
    <span class="claim-value">
      <span v-if="typeof value === 'string' && isJwt(value)" class="string">
        <span>&quot;<NuxtLink :to="jwtLink" class="underline">{{ value }}</NuxtLink>&quot;</span>
      </span>
      <span v-else-if="typeof value === 'string'" class="string">&quot;{{ value }}&quot;</span>
      <span v-else-if="typeof value === 'number'" class="number">{{ value }}</span>
      <span v-else-if="typeof value === 'boolean'" class="boolean">{{ value }}</span>
      <span v-else-if="value === null" class="boolean">null</span>
      <ArrayClaim v-else-if="Array.isArray(value)" :name="name" :value="value" :indent="indent"/>
      <ObjectClaim v-else-if="typeof value === 'object' && value !== null" :name="name" :value="value" :indent="indent"/>
      <span v-else>{{ name }}: {{ value }}</span>

      <span v-if="!last" class="comma">,</span>

      <span v-if="isTimeClaim" class="comment">&nbsp;//&nbsp;{{ timeString }}</span>
    </span>
  </div>
</template>
