"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const cookieParser = require("cookie-parser");
const config_1 = require("@nestjs/config");
const app_config_1 = require("../config-example/app.config");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const configService = app.get(config_1.ConfigService);
    const port = configService.get('service.port');
    app.use(cookieParser());
    app.enableCors(app_config_1.corsConfig);
    await app.listen(port);
}
bootstrap();
//# sourceMappingURL=main.js.map