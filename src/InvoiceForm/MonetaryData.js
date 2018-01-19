import React from 'react';
import { Flex, Box } from 'grid-styled';

function MonerayData({ onChange, centerCost, invoiceNumber, date, accountNumber, bankName, swift, aba }) {
  return ([
    <Box width={1} p={1}>
      <label for="centerCost">CenterCost</label>
      <input
        type="text"
        name="centerCost"
        onChange={onChange}
        value={centerCost}
        style={{width: '60px'}}
      />
      <label for="invoiceNumber">Invoice Number</label>
      <input
        type="number"
        name="invoiceNumber"
        onChange={onChange}
        value={invoiceNumber}
      />
    </Box>,
    <Box width={1} p={1}>
      <label for="date">Date</label>
      <input
        type="date"
        name="date"
        onChange={onChange}
        value={date}
        style={{width: '150px'}}
      />
    </Box>,
    <Box width={1} p={1}>
      <label for="accountNumber">Account Number</label>
      <input
        type="text"
        name="accountNumber"
        onChange={onChange}
        value={accountNumber}
        style={{width: '140px'}}
      />
      <label for="bankName">Bank Name</label>
      <input
        type="text"
        name="bankName"
        onChange={onChange}
        value={bankName}
        style={{width: '90px'}}
      />
    </Box>,
    <Box width={1} p={1}>
      <label for="swift">SWIFT Code</label>
      <input
        type="text"
        name="swift"
        onChange={onChange}
        value={swift}
        style={{width: '140px'}}
      />
      <label for="aba">ABA Code</label>
      <input
        type="text"
        name="aba"
        onChange={onChange}
        value={aba}
        style={{width: '140px'}}
      />
    </Box>,
  ]);
}

export default MonerayData;
