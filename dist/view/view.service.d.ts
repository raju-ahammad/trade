import { OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NextServer } from 'next/dist/server/next';
export declare class ViewService implements OnModuleInit {
    private configService;
    private server;
    constructor(configService: ConfigService);
    onModuleInit(): Promise<void>;
    getNextServer(): NextServer;
}
