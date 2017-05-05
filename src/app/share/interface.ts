export interface IAuth {
    id: number,
    username: string,
    fullname: string,
    email: string,
    phone: string,
    companyName: string,
    taxno: string,
    secretkey: string;
    isExportInvoice: boolean;
    isImportInvoice: boolean;
    isBOI: boolean;
    isOther: boolean;
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
    updateBy: string;
    isExportInvoice: boolean;
    isImportInvoice: boolean;
    isBOI: boolean;
    isOther: boolean;
}

export interface IDocumentType {
    name: string;
    description: string;
}