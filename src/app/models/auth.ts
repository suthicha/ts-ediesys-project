import { IAuth } from '../share';

export class Auth implements IAuth {
    isExportInvoice: boolean;
    isImportInvoice: boolean;
    isBOI: boolean;
    isOther: boolean;
    id: number;
    username: string;
    fullname: string;
    email: string;
    phone: string;
    companyName: string;
    taxno: string;
    secretkey: string;
}
