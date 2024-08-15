import express from "express";
import { getToken } from "../services/AuthService";

export const getLoginForm = async (req: express.Request, res: express.Response): Promise<void> => {
    res.render('loginForm.html');
}

export const postLoginForm = async (req: express.Request, res:express.Response): Promise<void> => {
    try {
        // Validation
        const requestBody = req.body;
        if (req.body.username.length > 64 || req.body.username.length == 0) {
            res.locals.errormessage = "Username length out of allowed bounds";
            return res.render('loginForm.html', req.body);
        }
        if (req.body.password.length > 64 || req.body.password.length == 0) {
            res.locals.errormessage = "Password length out of allowed bounds";
            return res.render('loginForm.html', req.body);
        }

        
        req.session.token = await getToken(req.body);
        res.redirect('/deliveryEmployees');
    } catch (e) {
        res.locals.errormessage = e.message;
        res.render('loginForm.html', req.body);
    }
}