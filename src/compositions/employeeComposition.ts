import BaseApi from "@/api/baseApi";
import { Employee } from "@/types/employees";

const baseUrl = "https://615ac0e34a360f0017a81247.mockapi.io/users";

const api = new BaseApi<Employee>(baseUrl);

export default function employeeComposition() {
  const getEmployees: () => Promise<Employee[]> = async () => {
    return await api.getItems();
  };

  const removeEmployee: (id: string) => Promise<Employee> = async (id) => {
    return await api.removeItem(id);
  };

  return {
    getEmployees,
    removeEmployee,
  };
}
