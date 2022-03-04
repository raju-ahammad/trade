import { Request, Response } from 'express';
import { ViewService } from './view.service';
export declare class ViewController {
    private viewService;
    constructor(viewService: ViewService);
    handler(req: Request, res: Response): Promise<void>;
    home(req: Request, res: Response): Promise<void>;
    assets(req: Request, res: Response): Promise<void>;
}
