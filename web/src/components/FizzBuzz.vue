<template>
  <div class="fizzBuzz">
    <div class="fizzBuzz__head">
      <span>Is this FizzBuzz?</span>
    </div>
    <div class="fizzBuzz__text">
      <span v-if="result.fizzBuzz == ``">{{result.count}}</span>
      <span v-else>{{result.count}} is {{result.fizzBuzz}}!</span>
    </div>
    <div
      class="fizzBuzz__button"
      @click="getFizzBuzz()"
    >
      <span>Count up</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { fizzBuzz } from '@/hooks/fizzBuzz';

export default defineComponent({
  setup() {
    return {
      ...fizzBuzz(),
    };
  }
});
</script>

<style lang="scss" scoped>
.fizzBuzz{
  align-items: center;
  width: 35%;
  margin: auto;

  %__default {
    display: flex;
    justify-content: center;
    margin: 10px;
  }

  &__head{
    @extend %__default;
    font-size: 1.5em;
  }

  &__text{
    @extend %__default;
    font-size: 2em;
  }

  &__button{
    @extend %__default;
    font-size: 1em;

    border: 1px #757575 solid;
    border-radius: 3px;
    padding: 10px;
    cursor: pointer;
    box-shadow: 0px 3px 4px #757575;

    &:hover{
      transform: scale(1.02);
      transition: transform .2s;
    }

    &:active{
      transform: scale(1);
    } 
  }
}
</style>