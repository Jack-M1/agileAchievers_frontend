import express from "express";
import {createEmployee} from "../services/EmployeeService";


export const getEmployeeForm = async (req: express.Request, res: express.Response): Promise<void> => {
    res.render('employeeForm.html');
}

export const postEmployeeForm = async (req: express.Request, res: express.Response): Promise<void> => {
    try {
        const id = await createEmployee(req.body);

        res.redirect('/deliveryEmployees/');
    } catch (e) {
        res.locals.errormessage = e.message;
        res.render('employeeForm.html', req.body);
    }
}