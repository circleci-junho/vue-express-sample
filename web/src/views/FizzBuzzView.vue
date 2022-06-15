<template>
  <div class="fizzubzz">
    <FizzBuzz />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FizzBuzz from '@/components/FizzBuzz.vue';

export default defineComponent({
  name: 'FizzBuzzView',
  components: {
    FizzBuzz,
  },
});
</script>
