import { computed, Ref } from "vue";

export const employeeTabs: Readonly<Ref<string[]>> = computed(() => {
  return ["Employee List", "Developer", "Analyst", "Coordinator", "Architect"];
});
