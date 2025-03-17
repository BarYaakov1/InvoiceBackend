"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceService = exports.Invoice = void 0;
const common_1 = require("@nestjs/common");
class Invoice {
    id;
    name;
    supplier;
    date;
    status;
    cost;
}
exports.Invoice = Invoice;
let InvoiceService = class InvoiceService {
    invoices = [
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
    async getAllInvoices() {
        return this.invoices;
    }
    async searchInvoices(search = '', startDate = '', endDate = '', status = '') {
        return this.invoices.filter((invoice) => {
            const invoiceDate = new Date(invoice.date);
            const start = startDate ? new Date(startDate + 'T00:00:00Z') : null;
            const end = endDate ? new Date(endDate + 'T23:59:59Z') : null;
            const matchesDate = (!start || (start instanceof Date && !isNaN(start.getTime()) && invoiceDate >= start)) &&
                (!end || (end instanceof Date && !isNaN(end.getTime()) && invoiceDate <= end));
            const matchesSearch = !search ||
                invoice.name.toLowerCase().includes(search.toLowerCase().trim()) ||
                invoice.supplier.toLowerCase().includes(search.toLowerCase().trim());
            const matchesStatus = !status || invoice.status.toLowerCase().trim() === status.toLowerCase().trim();
            return matchesSearch && matchesDate && matchesStatus;
        });
    }
};
exports.InvoiceService = InvoiceService;
exports.InvoiceService = InvoiceService = __decorate([
    (0, common_1.Injectable)()
], InvoiceService);
//# sourceMappingURL=invoice.service.js.map