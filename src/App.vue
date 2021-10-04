<template>
  <div class="container">
    <div class="header">
      <h1 class="header__title">Dashboard</h1>
      <button class="header__button">Add employee</button>
    </div>
    <tabs></tabs>
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
          v-for="employee in localEmployees"
          :employee="employee"
          :key="employee.id"
        />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, Ref } from "vue";
import employeeComposition from "@/compositions/employeeComposition";
import Tabs from "./components/Tabs.vue";
import EmployeeItem from "@/components/Employee.vue";
import { Employee } from "@/types/employees";

export default defineComponent({
  name: "App",
  components: { Tabs, EmployeeItem },
  setup() {
    /**
     * Data
     */
    const localEmployees: Ref<Employee[]> = ref([]);

    /**
     * Compositions
     */
    const employeesManagement = employeeComposition();

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

      console.log(data);
    };

    return {
      localEmployees,
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
}
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 50px;
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
</style>
