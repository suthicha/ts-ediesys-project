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

export interface IUser {
    id: number;
    username: string;
    password: string;
    fullname: string;
    email: string;
    companyName: string;
    taxno: string;
    phone: string;
    secretkey: string;
}