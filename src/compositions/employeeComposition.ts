import BaseApi from "@/api/baseApi";
import { Employee } from "@/types/employees";

const baseUrl = "https://615ac0e34a360f0017a81247.mockapi.io";

const api = new BaseApi<Employee>(baseUrl);

export default function employeeComposition() {
  const getEmployees: () => Promise<Employee[]> = async () => {
    return await api.getItems("users");
  };

  return {
    getEmployees,
  };
}
