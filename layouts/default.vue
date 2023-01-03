<template>
  <ColorScheme>
    <div class="">
      <AppHeader/>
      <div class="">
        <slot />
      </div>
      <div class="min-w-full text-right pr-2">
        <AppFooter />
      </div>
    </div>
  </ColorScheme>
</template>
