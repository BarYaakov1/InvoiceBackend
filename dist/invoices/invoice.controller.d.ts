import { InvoiceService, Invoice } from './invoice.service';
export declare class InvoiceController {
    private readonly invoiceService;
    constructor(invoiceService: InvoiceService);
    getAllInvoices(): Promise<Invoice[]>;
    searchInvoices(search?: string, startDate?: string, endDate?: string, status?: string): Promise<Invoice[]>;
}
