export declare class Invoice {
    id: number;
    name: string;
    supplier: string;
    date: string;
    status: string;
    cost: number;
}
export declare class InvoiceService {
    private invoices;
    getAllInvoices(): Promise<Invoice[]>;
    searchInvoices(search?: string, startDate?: string, endDate?: string, status?: string): Promise<Invoice[]>;
}
