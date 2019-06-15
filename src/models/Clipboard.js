export const Clipboard = {
  setClipboard: function (value) {
    // Create and add an input field.
    var tempInput = document.createElement("input")
    // The 24pt font size is to prevent ios from automatically zooming in.
    tempInput.style.cssText = "position: absolute; font-size: 24pt; left: -1000px; top: -1000px"
    tempInput.contentEditable = true
    tempInput.value = value
    document.body.appendChild(tempInput)

    // For internet explorer.
    if (document.body.createTextRange) {
      let range = tempInput.createTextRange()
      range.collapse(true)
      range.moveStart('character', 0)
      range.moveEnd('character', 99999)
      range.select()
    }

    // For mobile safari.
    else if (tempInput.setSelectionRange && navigator.userAgent.match(/ipad|ipod|iphone/i)) {
      tempInput.setSelectionRange(0, 99999)
    } 
    
    // For safari, chrome, and firefox.
    else {
      tempInput.select()
    }

    document.execCommand("copy")
    document.body.removeChild(tempInput)
  }
}
