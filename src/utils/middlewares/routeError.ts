import { Request, Response } from "express"

export const routeError = (req: Request,res: Response) => {
    res.status(404).json({
        message: `Error en la ruta ${req.url}, chequea que esté bien escrita. El método ${req.method} no fue implementado`,
    })
    }