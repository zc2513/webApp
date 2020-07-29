<template>
  <div class="home">
    <HelloWorld :msg="`${key}12`" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
  data() {
    return {
      key: "首页",
    };
  },
};
</script>
