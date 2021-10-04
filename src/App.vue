<template>
  <div class="container">
    <div class="header">
      <h1 class="header__title">Dashboard</h1>
      <button class="header__button">+ Add Employee</button>
    </div>

    <tabs :tabs="employeeTabs" @change-tab="changeTab" />

    <div class="table">
      <div class="table__header">
        <div class="info">Basic Info</div>
        <div class="code">Employee Code</div>
        <div class="position">Designation</div>
        <div class="phone">Phone Number</div>
        <div class="joining-date">Joining Date</div>
      </div>
      <div class="table__body">
        <employee-item
          v-for="employee in filteredEmployees"
          :employee="employee"
          :key="employee.id"
          @remove="remove(employee.id)"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref, Ref } from "vue";
import employeeComposition from "@/compositions/employeeComposition";
import Tabs from "./components/Tabs.vue";
import EmployeeItem from "@/components/Employee.vue";
import { Employee } from "@/types/employees";
import { employeeTabs } from "@/config/employeeTabsConfig";

export default defineComponent({
  name: "App",
  components: { Tabs, EmployeeItem },
  setup() {
    /**
     * Data
     */
    const localEmployees: Ref<Employee[]> = ref([]);
    const currentTab: Ref<string> = ref(employeeTabs.value[0]);

    /**
     * Compositions
     */
    const employeesManagement = employeeComposition();

    /**
     * Computed
     */
    const filteredEmployees: Readonly<Ref<Employee[]>> = computed(() =>
      currentTab.value === "Employee List"
        ? localEmployees.value
        : localEmployees.value.filter(
            ({ designation }) => designation === currentTab.value
          )
    );

    /**
     * Hooks
     */
    onMounted(async () => {
      await getEmployees();
    });

    /**
     * Methods
     */
    const getEmployees: () => void = async () => {
      const data = await employeesManagement.getEmployees();

      localEmployees.value = data;
    };

    const remove: (id: string) => void = async (id) => {
      const candidate = await employeesManagement.removeEmployee(id);

      if (!candidate || !candidate.id) return;

      localEmployees.value = localEmployees.value.filter(
        ({ id }) => id !== candidate.id
      );
    };

    const changeTab: (tab: string) => void = (tab) => (currentTab.value = tab);

    return {
      employeeTabs,

      filteredEmployees,

      remove,
      changeTab,
    };
  },
});
</script>

<style lang="scss">
@import "~normalize.css";

* {
  box-sizing: border-box;
}

body {
  background-color: #eeeeee;
  font-family: Arial, serif;
}
.container {
  width: 1200px;
  margin: 0 auto;
  padding: 20px 0;
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
}
.tabs {
  margin-bottom: 50px;
}

.table {
  &__header {
    width: 100%;
    display: flex;
    align-items: center;
    height: 60px;
    color: #868484;
    font-weight: 600;
    padding: 0 32px;

    .info {
      width: calc(30% + 20px);
      margin-right: 20px;
      padding-left: 40px;
    }

    .code {
      width: 14%;
      margin-right: 20px;
      text-align: center;
    }

    .position {
      width: 14%;
      margin-right: 20px;
      text-align: center;
    }

    .phone {
      width: 14%;
      margin-right: 20px;
      text-align: center;
    }

    .joining-date {
      width: 10%;
      text-align: center;
    }
  }
}

button {
  border: none;
  border-radius: 4px;
  color: white;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: 0.3s;
  padding: 12px 16px;

  &:hover {
    box-shadow: 0 5px 10px 2px rgba(34, 60, 80, 0.2);
  }
}

.header__button {
  background-color: #00dc81;
}
</style>
