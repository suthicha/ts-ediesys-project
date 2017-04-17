import { IUser } from '../share';
export class User implements IUser {
    isExportInvoice: boolean;
    isImportInvoice: boolean;
    isBOI: boolean;
    isOther: boolean;
    id: number;
    username: string;
    password: string;
    fullname: string;
    email: string;
    companyName: string;
    taxno: string;
    phone: string;
    secretkey: string;
    updateBy: string;
}