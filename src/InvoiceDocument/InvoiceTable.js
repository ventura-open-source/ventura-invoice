import React from 'react';
import { Flex, Box } from 'grid-styled';
import { makeid } from './../utils';

const InvoiceTable = ({ services, total }) => {

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
            {services.map(item => (
              <tr key={makeid()}>
                <td>{item.name}</td>
                <td className="isMoney">{item.unitPrice.toFixed(2).toLocaleString()} {item.targetCurrency || item.currency}</td>
                <td className="isMoney">{item.amount}</td>
                <td className="isMoney">{item.total.toFixed(2).toLocaleString()} {item.targetCurrency || item.currency}</td>
              </tr>
            )) }
            <tr>
              <td><strong>TOTAL</strong></td>
              <td></td>
              <td></td>
              <td className="isMoney">{total.toFixed(2).toLocaleString()} USD</td>
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
