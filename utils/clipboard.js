export const Clipboard = {
  setClipboard: async function (value) {
    return await navigator.clipboard.writeText(value);
  }
}
