<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
      <img
        src="/typescript.ico"
        class="logo typescript"
        alt="typescript logo"
      />
    </a>
    <a href="https://pinia.web3doc.top/" target="_blank">
      <img src="/pinia.svg" class="logo pinia" alt="pinia logo" />
    </a>
    <a href="https://www.antdv.com/" target="_blank">
      <img src="/ant.svg" class="logo ant" alt="Aant logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue + TypeScript + Pinia + Ant Design for vue." />
</template>

<script setup lang="ts">
import HelloWorld from "../components/HelloWorld.vue";
</script>

<style lang="less">
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.logo.typescript:hover {
  filter: drop-shadow(0 0 2em #6042b8aa);
}

.logo.pinia:hover {
  filter: drop-shadow(0 0 2em #150decaa);
}

.logo.ant:hover {
  filter: drop-shadow(0 0 2em #b87142aa);
}
</style>
