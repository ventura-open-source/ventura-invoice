import React from 'react';
import { Flex, Box } from 'grid-styled';
import format from 'date-fns/format';
import getYear from 'date-fns/get_year';

export const currentDate = format(new Date(), 'DD/MMM/YYYY');

export const pad = (num, size) => {
    var s = num+"";
    while (s.length < size) s = "0" + s;
    return s;
}

const InvoiceHeader = (props) => {
  const { name, address, location, dniType, dni, invoiceNumber, centerCost, date } = props;
  const invoiceId = `${pad(invoiceNumber,2)}/${getYear(currentDate).toString().substr(2)}`

  return (
    <Flex align="flex-end" className="InvoiceHeader" wrap={true}>
      <Box width={1} style={{ textAlign: 'right'}}>
        <p>{name.toUpperCase()}</p>
        <p>{address.toUpperCase()}</p>
        <p>{location.toUpperCase()}</p>
        <p>{dniType} {dni}</p>
      </Box>
      <Box width={1}>
        <p>ventura TRAVEL GmhB</p>
        <p>Kottubesser Damm 103a, 10967 Berlin</p>
        <p>Center cost: {centerCost}</p>
        <p style={{textAlign: 'right'}}>Medellin, { date ? format(date, 'DD/MMM/YYYY') : currentDate}</p>
        <p>Invoice Nr: {invoiceId}</p>
        <br/>
        <p>Dear Sr. Kiwitz</p>
        <p>To your request I emit this invoice:</p>
        <br/>
      </Box>
    </Flex>
  );
};

export default InvoiceHeader;
