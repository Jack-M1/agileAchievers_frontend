import axios, { AxiosResponse } from "axios";
import { Employee } from "../models/Employee";
import { getHeader } from "./AuthUtil";

export const getDeliveryEmployees = async (token: String): Promise<Employee> => {
    try {
        const response: AxiosResponse = await axios.get("http://localhost:8080/api/delivery", getHeader(token));

        return response.data;
    } catch (e) {
        console.log(e);
        throw new Error('Failed to get delivery employees');
    }
}

