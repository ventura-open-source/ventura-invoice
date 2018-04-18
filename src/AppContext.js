import React from 'react';
import format from 'date-fns/format';
import { DATE_FORMAT } from './utils';

export const defaultValue = {
  name: 'Genesis Guerrero',
  address: '',
  location: '',
  cellphone: '',
  dniType: 'C.C',
  dni: '',
  invoiceNumber: '0',
  centerCost: '',
  date: format(new Date(), DATE_FORMAT),
  officeAddress: 'Calle 15 Sur #46-36 • Mirador de Santa María 303',
  officeLocation: 'Medellin, Colombia',
  accountNumber: '',
  bankName: '',
  swift: '',
  aba: '',
  services: [],
  total: 0,
};

export const AppContext = React.createContext(defaultValue);

export const updateDates = (data, date) => {
  const result = { ...data };
  result.date = date
    ? format(result.date, DATE_FORMAT)
    : format(new Date(), DATE_FORMAT);

    result.services.forEach(i => {
      if(i.type === "salary") {
        i.name = "Services delivery in " + format(result.date, 'MMMM');
      }
    });

    return result;
};

export const calcTotal = services => {
  let total = 0;
  console.log(services);
  services.forEach(item => {
    item.total = parseFloat(item.unitPrice * item.amount);
    total = total + item.total;
    return item;
  });
  return total;
}

export const onAddItem = (item, form, cb) => {
  if(item.type === "salary") {
    const month = form.date ? format(form.date, 'MMMM') : format(new Date(), 'MMMM');
    item.name = "Services delivery in " + month;
  }
  if(item.type === "fee") {
    item.name = "Transaction fee";
  }
  item.total = parseFloat(item.amount * item.unitPrice);
  const services = [...form.services, item];
  cb({
    services,
    total: calcTotal(services, item),
  });
};

export const onRemoveItem = (idx, form, cb) => {
  const services = form.services.filter((_, i) => i !== idx);
  cb({
    services,
    total: calcTotal(services),
  });
};

export const onSend = (e, form) => {
  e.preventDefault();
  const to = 'alfredo.ortegon.viventura@gmail.com';
  const subject = `Invoice ${form.invoiceNumber} - ${form.name}`;
  const bbc = 'ventura.product.manager@gmail.com';
  const body = `Hi Alfredo, I attach you my next invoice. Thank you in advance.`;
  window.open(`https://mail.google.com/mail/?ui=2&view=cm&fs=1&tf=1&shva=1&to=${to}&su=${subject}&body=${body}&bcc=${bbc}`);
}

