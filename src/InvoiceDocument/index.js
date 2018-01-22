import React, { PureComponent } from 'react';
import { Box } from 'grid-styled';
import InvoiceHeader from './InvoiceHeader';
import InvoiceTable from './InvoiceTable';
import InvoiceFooter from './InvoiceFooter';

class InvoiceDocument extends PureComponent {
  state = { total: 0, services: []};

  onTotal = v => this.setState({total: v});

  calcTotal = services => {
    let total = 0;
    const rows = services.map(item => {
      item.total = parseFloat(item.unitPrice * item.amount);
      total = total + item.total;
      return item;
    });
    this.setState({ total: total, services: rows });
  }

  componentWillReceiveProps(props) {
    this.calcTotal(props.data.services);
  }

  render() {
    const { data } = this.props;

    return (
      <Box className="InvoiceDocument" width={[1,1,3/5]} p="1in" m={1}>
        <InvoiceHeader
          name={data.name}
          address={data.address}
          location={data.location}
          dniType={data.dniType}
          dni={data.dni}
          invoiceNumber={data.invoiceNumber}
          centerCost={data.centerCost}
          date={data.date}
        />
        <InvoiceTable services={this.state.services || []} total={this.state.total}/>
        <InvoiceFooter
          name={data.name}
          address="Calle 15 Sur # 46 - 36, Mirador de Santa Maria 303"
          location="Medellin, Colombia"
          cellphone={data.cellphone}
          accountNumber={data.accountNumber}
          bankName={data.bankName}
          swift={data.swift}
          aba={data.aba}
          total={this.state.total}
        />
      </Box>
    );
  }
}

export default InvoiceDocument;
