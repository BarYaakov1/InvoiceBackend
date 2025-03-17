import { Injectable } from '@nestjs/common';

export class Invoice {
    id: number;
    name: string;
    supplier: string;
    date: string;
    status: string;
    cost: number; 
}

@Injectable()
export class InvoiceService {
  private invoices: Invoice[] = [
    { id: 1, name: 'יום צילום', supplier: 'שם ספק', date: '2024-03-01', status: 'approved', cost: 500 },
    { id: 2, name: 'יום צילום', supplier: 'שם ספק', date: '2024-03-02', status: 'rejected', cost: 1200 },
    { id: 3, name: 'יום צילום', supplier: 'שם ספק', date: '2024-03-03', status: 'pending', cost: 750 },
    { id: 4, name: 'יום צילום', supplier: 'שם ספק', date: '2024-03-04', status: 'approved', cost: 900 },
    { id: 5, name: 'יום צילום', supplier: 'שם ספק', date: '2024-03-05', status: 'pending', cost: 400 },
    { id: 6, name: 'יום צילום', supplier: 'שם ספק', date: '2024-03-05', status: 'pending', cost: 400 },
    { id: 7, name: 'יום צילום', supplier: 'שם ספק', date: '2024-03-05', status: 'approved', cost: 400 },
    { id: 8, name: 'יום צילום', supplier: 'שם ספק', date: '2024-03-05', status: 'approved', cost: 400 },
    { id: 9, name: 'יום צילום', supplier: 'שם ספק', date: '2024-03-05', status: 'rejected', cost: 400 },
    { id: 9, name: 'במאי', supplier: 'ספק', date: '2024-03-05', status: 'rejected', cost: 400 },

  ];

  //method to return all invoices
  async getAllInvoices(): Promise<Invoice[]> {
    return this.invoices;
  }

  async searchInvoices(
    search: string = '',
    startDate: string = '',
    endDate: string = '',
    status: string = ''
  ): Promise<Invoice[]> {
    return this.invoices.filter((invoice) => {
      const invoiceDate = new Date(invoice.date);
      const start = startDate ? new Date(startDate + 'T00:00:00Z') : null;
      const end = endDate ? new Date(endDate + 'T23:59:59Z') : null;

      const matchesDate =
        (!start || (start instanceof Date && !isNaN(start.getTime()) && invoiceDate >= start)) &&
        (!end || (end instanceof Date && !isNaN(end.getTime()) && invoiceDate <= end));

      const matchesSearch =
        !search ||
        invoice.name.toLowerCase().includes(search.toLowerCase().trim()) ||
        invoice.supplier.toLowerCase().includes(search.toLowerCase().trim());

      const matchesStatus = !status || invoice.status.toLowerCase().trim() === status.toLowerCase().trim();

      return matchesSearch && matchesDate && matchesStatus;
    });
  }
}
