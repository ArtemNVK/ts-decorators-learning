import { CryptoService } from "./crypto.service";
import { Inject } from "./inject-decorator";
import { Injectable } from "./injectable-decorator";

@Injectable()
export class UserService {
    constructor(@Inject(CryptoService) private cryptoService: CryptoService) {}
}