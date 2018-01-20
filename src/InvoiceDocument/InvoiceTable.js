import React from 'react';
import { Flex, Box } from 'grid-styled';

const InvoiceTable = ({ services }) => {

  let total = 0;
  const rows = services.map(item => {
    item.total = parseFloat(item.unitPrice * item.amount);
    total = total + item.total;
    return item;
  });


  return (
    <Flex className="InvoiceTable" wrap={true}>
      <Box width={1} style={{textAlign: 'justify'}}>
        <table width="100%">
          <thead>
            <tr>
              <th><strong>SERVICE</strong></th>
              <th><strong>UNIT PRICE</strong></th>
              <th><strong>AMOUNT</strong></th>
              <th><strong>TOTAL</strong></th>
            </tr>
          </thead>
          <tbody>
            {rows.map(item => (
              <tr>
                <td>{item.name}</td>
                <td className="isMoney">{item.unitPrice.toFixed(2).toLocaleString()} USD</td>
                <td className="isMoney">{item.amount}</td>
                <td className="isMoney">{item.total.toFixed(2).toLocaleString()} USD</td>
              </tr>
            )) }
            <tr>
              <td><strong>TOTAL</strong></td>
              <td></td>
              <td></td>
              <td className="isMoney">{total.toFixed(2).toLocaleString()}</td>
            </tr>
          </tbody>
        </table>
        <br/>
        <br/>
      </Box>
    </Flex>
  );
}

export default InvoiceTable;
