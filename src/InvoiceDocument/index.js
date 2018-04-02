import React from 'react';
import { Box } from 'grid-styled';
import InvoiceHeader from './InvoiceHeader';
import InvoiceTable from './InvoiceTable';
import InvoiceFooter from './InvoiceFooter';
import { AppContext } from './../AppContext';

const { Consumer } = AppContext;

function InvoiceDocument() {

  return (
    <Consumer>
      { form => (
        <Box className="InvoiceDocument" width={[1,1,3/5]} p="1in" m={1}>
          <InvoiceHeader
            name={form.name}
            address={form.address}
            location={form.location}
            dniType={form.dniType}
            dni={form.dni}
            invoiceNumber={form.invoiceNumber}
            centerCost={form.centerCost}
            date={form.date}
          />
          <InvoiceTable
            services={form.services || []}
            total={form.total}
          />
          <InvoiceFooter
            name={form.name}
            address={form.officeAddress}
            location={form.officeLocation}
            cellphone={form.cellphone}
            accountNumber={form.accountNumber}
            bankName={form.bankName}
            swift={form.swift}
            aba={form.aba}
            total={form.total}
          />
        </Box>
      )}
    </Consumer>
  );
}

export default InvoiceDocument;
