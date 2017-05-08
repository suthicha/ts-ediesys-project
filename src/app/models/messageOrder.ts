import { IMessageOrder } from '../share';

export class MessageOrder implements IMessageOrder{
    messageId: number;
    taxno: string;
    fileName: string;
    baseFileName: string;
    contentType: string;
    size: number;
    status: number;
    createDate: Date;
    doctype: string;
    remark: string;
}