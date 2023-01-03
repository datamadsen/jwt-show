
import { defineStore } from 'pinia'

export const useJwtStore = defineStore('jwt', {
  state: () => ({
    encoded: '',
    stringified: ''
  }),
  getters: {
    decoded: (state) => JwtDecoder.decode(state.encoded),
  },
  actions: {
    set(encoded) {
      this.encoded = encoded;
      this.stringified = JSON.stringify(this.decoded, null, 2);
    },
  },
})
