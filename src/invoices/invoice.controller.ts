import { Controller, Get, Query } from '@nestjs/common';
import { InvoiceService, Invoice } from './invoice.service';

@Controller('invoices')
export class InvoiceController {
  constructor(private readonly invoiceService: InvoiceService) {}

  @Get('all')
  async getAllInvoices(): Promise<Invoice[]> {
    return this.invoiceService.getAllInvoices(); 
  }
  

  @Get()
  async searchInvoices(
    @Query('search') search?: string,
    @Query('startDate') startDate?: string,
    @Query('endDate') endDate?: string,
    @Query('status') status?: string
  ): Promise<Invoice[]> {
    return this.invoiceService.searchInvoices(
      search ?? '', 
      startDate ?? '', 
      endDate ?? '', 
      status ?? ''
    );
  }
}
