export interface IAuth {
    id: number,
    username: string,
    fullname: string,
    email: string,
    phone: string,
    companyName: string,
    taxno: string,
    secretkey: string
}

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
