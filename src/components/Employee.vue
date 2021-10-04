<template>
  <div class="employee">
    <div class="employee__number">{{ employee.id }}</div>
    <div class="employee__avatar">
      <div class="employee__img">
        <img :src="employee.avatar" :alt="employee.name" />
      </div>
    </div>
    <div class="employee__name">{{ employee.name }}</div>
    <div class="employee__code">{{ employee.employeeCode }}</div>
    <div class="employee__position">{{ employee.designation }}</div>
    <div class="employee__phone">{{ employee.phone }}</div>
    <div class="employee__join-date">
      {{ new Date(employee.joiningDate).toLocaleDateString() }}
    </div>
    <div class="employee__actions"><button>remove</button></div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Employee } from "@/types/employees.d";

export default defineComponent({
  name: "Employee",
  props: {
    employee: {
      type: Object as () => Employee,
      required: true,
    },
  },
});
</script>

<style scoped lang="scss">
.employee {
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border-radius: 6px;
  padding: 16px 32px;
  transition: 0.3s;
  color: #868484;

  &__number {
    width: 2%;
    margin-right: 20px;
  }

  &__avatar {
    width: 8%;
  }

  &__img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 20px;

    img {
      width: 100%;
      height: 100%;
      object-position: center;
      object-fit: cover;
    }
  }

  &__name {
    width: 20%;
    font-size: 18px;
    font-weight: 600;
    margin-right: 20px;
  }

  &__code {
    width: 14%;
    margin-right: 20px;
    text-align: center;
  }

  &__position {
    width: 14%;
    margin-right: 20px;
    text-align: center;
  }

  &__join-date {
    width: 10%;
    text-align: center;
  }

  &__phone {
    width: 14%;
    margin-right: 20px;
    text-align: center;
  }

  &__actions {
    margin-left: auto;

    button {
      background-color: red;
    }
  }

  &:hover {
    box-shadow: 0 5px 10px 2px rgba(34, 60, 80, 0.2);
  }

  & + .employee {
    margin-top: 12px;
  }
}
</style>
