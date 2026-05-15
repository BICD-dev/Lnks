import { nanoid } from "nanoid";
import { UrlRepository } from "../repostories/url.repository";
import { AppError } from "../middleware/errorhandler.middleware";

export class UrlService {
    private readonly urlRepository: UrlRepository; 

    constructor() {
        this.urlRepository = new UrlRepository();
    }

    async shortenUrl(originalUrl: string): Promise<string> {
        // use class validator later for validation
        if (!originalUrl) {
            throw new AppError('Original URL is required', 400);
        }
        // geberate a unique short code
        const shortCode = this.generateShortCode();
        // save the original URL and short code to the database
        await this.urlRepository.createUrl(originalUrl, shortCode);
        return shortCode;
    }

    async getOriginalUrl(shortCode: string): Promise<string> {
        const url = await this.urlRepository.findByShortCode(shortCode);
        if (!url) {
            throw new AppError('Short code not found', 404);
        }
        await this.urlRepository.incrementClickCount(shortCode);
        return url.originalUrl;
    }

    private generateShortCode(): string {
        const code = nanoid(8);
        return code;
    }
}