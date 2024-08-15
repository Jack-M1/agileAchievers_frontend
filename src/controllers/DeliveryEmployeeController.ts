import express from "express";
import { getDeliveryEmployees } from "../services/DeliveryEmployeeService";

export const getAllDeliveryEmployees = async (req: express.Request, res: express.Response): Promise<void> => {
    res.render('deliveryEmployeeList.html', { deliveryEmployees: await getDeliveryEmployees(req.session.token) })
}
