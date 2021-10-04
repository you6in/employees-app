<template>
  <div class="tabs">
    <div
      v-for="tab in tabs"
      :key="tab"
      :class="{ 'tab--current': currentTab === tab }"
      class="tab"
      @click="changeTab(tab)"
    >
      {{ tab }}
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, Ref } from "vue";

export default defineComponent({
  name: "Tabs",
  props: {
    tabs: {
      type: Array as () => string[],
      required: true,
    },
  },
  setup(props, vm) {
    /**
     * Data
     */
    const currentTab: Ref<string> = ref(props.tabs[0]);

    /**
     * Methods
     */
    const changeTab: (tab: string) => void = (tab) => {
      currentTab.value = tab;

      vm.emit("change-tab", tab);
    };

    return { currentTab, changeTab };
  },
});
</script>

<style scoped lang="scss">
.tabs {
  display: flex;
  align-items: center;
  border-bottom: 2px solid #d5d5d5;
}

.tab {
  font-size: 20px;
  font-weight: 600;
  color: #868484;
  padding: 16px 12px;
  cursor: pointer;
  border-bottom: 2px solid transparent;
  margin-bottom: -2px;
  transition: 0.3s;

  &--current {
    color: #414246;
    border-bottom: 2px solid #00dc81;
  }

  &:hover {
    color: #414246;
  }

  & + .tab {
    margin-left: 30px;
  }
}
</style>
