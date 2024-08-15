import axios, { AxiosResponse } from "axios";
import { Employee } from "../models/Employee";

export const getDeliveryEmployees = async (): Promise<Employee> => {
    try {
        const response: AxiosResponse = await axios.get("http://localhost:8080/api/delivery");

        return response.data;
    } catch (e) {
        console.log(e);
        throw new Error('Failed to get delivery employees');
    }
}

