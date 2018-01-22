import React from 'react';
import { Flex, Box } from 'grid-styled';

const InvoiceFooter = (props) => {
  const { name, cellphone, address, location, accountNumber, bankName, swift, aba, total } = props;
  return (
    <Flex align="flex-start" className="InvoiceFooter" wrap={true}>
      <Box width={1}>
        <p>Please make the transfer of the <strong>{total.toFixed(2)} USD </strong>
          to my bank account with the following data:
        </p>
        <br/>
        <p>Beneficiary: {name.toUpperCase()}</p>
        <p>Address Beneficiary: { address } • { location }</p>
        <p>Cell phone: { cellphone }</p>
        <p>Account number: {accountNumber}</p>
        <p>Bank Name: {bankName}</p>
        { swift && <p>SWIFT: {swift}</p> }
        { aba && <p>ABA: {aba}</p> }
        <br/>
        <br/>
        <p>Kind Regars,</p>
        <p>{name.toUpperCase()}</p>
      </Box>
    </Flex>
  );
};

export default InvoiceFooter;
