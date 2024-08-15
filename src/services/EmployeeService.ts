import axios, {AxiosResponse} from "axios";
import { EmployeeRequest } from "../models/EmployeeRequest";

export const createEmployee = async (employee: EmployeeRequest) : Promise<Number> => {
    try {
        let response: AxiosResponse = null;
        if (employee.type.toString() === '1') {
            response = await axios.post("http://localhost:8080/api/delivery", employee);
        } else if (employee.type.toString() === '2') {
            response = await axios.post("http://localhost:8080/api/sales", employee);
        }

        return response.data;
    } catch (e) {
        console.log(e);
        throw new Error(e.response.data);
    }
}
