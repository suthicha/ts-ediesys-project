import { IAuth } from '../share';

export class Auth implements IAuth {
    id: number;
    username: string;
    fullname: string;
    email: string;
    phone: string;
    companyName: string;
    taxno: string;
    secretkey: string;
}
