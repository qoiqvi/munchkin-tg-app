<script setup lang="ts">
useHead({
  script: [{ src: "https://telegram.org/js/telegram-web-app.js", defer: true }],
});
</script>

<template>
  <ClientOnly>
    <header class="app-header">
      <h3>Munchkin</h3>
    </header>
    <div class="app-content">
      <slot> </slot>
    </div>
    <footer class="app-footer">
      <span>
        Created by
        <a target="_blank" href="https://github.com/qoiqvi">@qoiqvi</a>
      </span>
    </footer>
  </ClientOnly>
</template>

<style>
.app-header {
  height: 35px;
  background-color: rgba(255, 255, 0, 0.795);
  display: flex;
  align-items: center;
  justify-content: center;
}

.app-footer {
  background-color: rgba(255, 255, 0, 0.795);
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.app-content {
  height: calc(100vh - 60px - 30px);
}
</style>
