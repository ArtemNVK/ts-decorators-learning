import { CryptoService } from "./crypto.service";
import { Inject } from "./decorators/inject-decorator";
import { Injectable } from "./decorators/injectable-decorator";

@Injectable()
export class UserService {
    constructor(@Inject(CryptoService) private cryptoService: CryptoService) {}
}