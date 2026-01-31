"use strict";
// static/js/main.ts
const { createApp, ref } = window.Vue;
const App = {
    setup() {
        const count = ref(0);
        const increment = () => count.value++;
        return { count, increment };
    },
    template: `
    <div>
      <p>Vue Counter: {{ count }}</p>
      <button @click="increment" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Increment
      </button>
    </div>
  `
};
createApp(App).mount('#vue-app');
