import { NextFunction, Request, Response } from "express";
import { UrlService } from "../service/url.service";

export class UrlController {
    private urlService: UrlService;

    constructor() {
        this.urlService = new UrlService();
    }

  async shortenUrl(req:Request, res:Response, next:NextFunction) {
    try {
        const { originalUrl } = req.body;
        const response = await this.urlService.shortenUrl(originalUrl);
        const resObj = {
            status: 'success',
            data: { shortCode: response }
        }
        res.status(201).json(resObj);
    } catch (error) {
        next(error);
    }
  }

    async getOriginalUrl(req:Request, res:Response, next:NextFunction) {
        try {
            const { shortCode } = req.params;
            const response = await this.urlService.getOriginalUrl(shortCode as string);
            const resObj = {
                status: 'success',
                data: { originalUrl: response }
            }
            res.status(200).json(resObj);
        } catch (error) {
            next(error);
        }
    }

}