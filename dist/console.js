"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nestjs_console_1 = require("nestjs-console");
const app_module_1 = require("./app/app.module");
const bootstrap = new nestjs_console_1.BootstrapConsole({
    module: app_module_1.AppModule,
    useDecorators: true
});
bootstrap.init().then(async (app) => {
    try {
        await app.init();
        await bootstrap.boot();
        app.close();
        process.exit(0);
    }
    catch (e) {
        app.close();
        process.exit(1);
    }
});
//# sourceMappingURL=console.js.map