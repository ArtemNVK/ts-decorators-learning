import { Module } from "./decorators/module-decorator";
import { UserModule } from "./user.module";
import { UserService } from "./user.service";

@Module({
    imports: [UserModule],
    providers: [UserService]
})
export class AppModule {}