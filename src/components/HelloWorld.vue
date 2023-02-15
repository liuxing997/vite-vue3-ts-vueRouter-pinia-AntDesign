<template>
  <h1>{{ msg }}</h1>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <button type="button" @click="store.count++">
      pinia count is {{ store.count }}
    </button>
    &emsp;
    <a-button type="primary" shape="circle" size="large">A</a-button>
    <p>
      Thank you for use llx-cli !
      <code></code> Development by 刘兴
    </p>
  </div>
  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useCountStore } from "../store/modules/count";

defineProps<{ msg: string }>();

const store = useCountStore();

const count = ref(0);
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
