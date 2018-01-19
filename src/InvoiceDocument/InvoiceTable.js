import React from 'react';
import { Flex, Box } from 'grid-styled';

const InvoiceTable = (props) => {
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
            <tr>
              <td>Service delivery in January</td>
              <td className="isMoney">2.207,16 USD</td>
              <td className="isMoney">1</td>
              <td className="isMoney">2.207,16 USD</td>
            </tr>
            <tr>
              <td>Transaction fee</td>
              <td className="isMoney">9,19 USD</td>
              <td className="isMoney">1</td>
              <td className="isMoney">9,19 USD </td>
            </tr>
            <tr>
              <td><strong>TOTAL</strong></td>
              <td></td>
              <td></td>
              <td className="isMoney">2.216,35 USD</td>
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
