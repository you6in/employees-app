<template>
  <div v-if="isVisible" class="overlay">
    <div class="modal">
      <button class="modal__close" @click="close">X</button>
      <div class="modal__header">
        <slot name="header"></slot>
      </div>

      <div class="modal__body">
        <slot name="body"></slot>
      </div>

      <div class="modal__footer">
        <slot name="footer"></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Modal",
  props: {
    isVisible: {
      type: Boolean,
      default: false,
    },
  },
  setup(_, vm) {
    const close: () => void = () => vm.emit("close");

    return {
      close,
    };
  },
});
</script>

<style lang="scss">
.overlay {
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  z-index: 31;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(169, 169, 169, 0.32);
}

.modal {
  background-color: white;
  border-radius: 7px;
  width: 490px;
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 30px 20px;

  &__close {
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 31;
    color: black;

    &:hover {
      box-shadow: none;
    }
  }

  &__header {
    h1 {
      font-size: 20px;
      margin-top: 0;
    }
  }

  &__body {
    margin-bottom: 40px;
  }

  &__footer {
    display: flex;
    align-items: center;
    justify-content: space-between;

    button.cancel {
      background-color: white;
      border: 1px solid #868484;
      color: #868484;
    }

    button.accept-red {
      background-color: red;
    }
  }
}
</style>
