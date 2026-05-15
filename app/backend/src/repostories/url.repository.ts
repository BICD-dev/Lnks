import { Prisma } from "@prisma/client";
import { prisma } from "../lib/prisma";


export class UrlRepository {

    async createUrl(originalUrl: string, shortCode: string){
        const url = await prisma.url.create({
            data:{
                originalUrl,
                shortCode
            }
        });
        return url;
    }

    async findByShortCode(shortCode: string){
        const url = await prisma.url.findUnique({
            where: {
                shortCode
            }
        });
        return url;
    }

    async incrementClickCount(shortCode: string){
        const url = await prisma.url.update({
            where: {
                shortCode
            },
            data: {
                clickCount: {
                    increment: 1
                }
            }
        });
        return url;
    }

    async findAllUrls(){
        const urls = await prisma.url.findMany();
        return urls;
    }

    async deleteUrl(shortCode: string){
        const url = await prisma.url.delete({
            where: {
                shortCode
            }
        });
        return url;
    }
}