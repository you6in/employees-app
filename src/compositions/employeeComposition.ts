import BaseApi from "@/api/baseApi";
import { Employee } from "@/types/employees";

const baseUrl = "https://6156a6b6e039a0001725ab4b.mockapi.io";

const api = new BaseApi<Employee>(baseUrl);

export default function employeeComposition() {
  const getEmployees: () => Promise<Employee[]> = async () => {
    return await api.getItems("eployees");
  };

  return {
    getEmployees,
  };
}
