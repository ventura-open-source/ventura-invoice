import React, { Component, PureComponent } from 'react';
import { Flex, Box } from 'grid-styled';
import format from 'date-fns/format';
import PersonalData from './PersonalData';
import MonerayData from './MonetaryData';
import ServicesAndPrices from './ServicesAndPrices';

class InvoiceForm extends PureComponent {

  state = {
    name: '',
    address: 'CRA 46 #19 Sur - 100, APT. 603',
    location: 'Envigado, Colombia',
    dniType: 'C.C',
    dni: '',
    centerCost: '24551',
    invoiceNumber: 1,
    accountNumber: '',
    bankName: '',
    date: '',
    services: [
      {
        type: 'salary', //salary
        name: 'Service delivery in %month%',
        amount: 1,
        unitPrice: 0.0,
      },
      {
        type: 'fee', //fee
        name: 'Transaction fee',
        amount: 1,
        unitPrice: 0.0,
      },
      //type: 3 //extra hours
      //type: 4 //share
      //type: 5 //bono
      //type: 6 //discount
    ],
  }

  //https://api.fixer.io/latest

  componentDidMount() {
    this.props.onChange(this.state);
  }

  handleInput = ev => {
    const target = ev.target;
    this.setState({
      [target.name] : target.value
    }, () => this.props.onChange(this.state));
  };

  onAddItem = item => {
    if(item.type === "salary") {
      const month = this.props.date ? format(this.props.date, 'MMMM') : format(new Date(), 'MMMM');
      item.name = "Services delivery in " + month;
    }
    if(item.type === "fee") { item.name = "Transaction fee"; }

    this.setState({
       services: [...this.state.services, item]
    }, () => this.props.onChange(this.state));
  };

  onRemoveItem = idx => {
    this.setState({
       services: this.state.services.filter((_, i) => i !== idx)
    }, () => this.props.onChange(this.state));
  };

  render() {
    return (
      <Box className="InvoiceForm" width={[1,1,'38.5%']} p={2}>
        <h1>Invoice Form</h1>
        <form>
          <Flex wrap={true}>
            <h3>Personal info</h3>
            <PersonalData
              onChange={this.handleInput}
              name={this.state.name}
              address={this.state.address}
              location={this.state.location}
              dniType={this.state.dniType}
              dni={this.state.dni}
              cellphone={this.state.cellphone}
            />
            <hr />
            <h3>Monetary info</h3>
            <MonerayData
              onChange={this.handleInput}
              centerCost={this.state.centerCost}
              invoiceNumber={this.state.invoiceNumber}
              accountNumber={this.state.accountNumber}
              bankName={this.state.bankName}
              swift={this.state.swift}
              aba={this.state.aba}
              date={this.state.date}
            />
            <hr />
            <h3>Services and Prices</h3>
            <ServicesAndPrices
              onAddItem={this.onAddItem}
              onRemoveItem={this.onRemoveItem}
              date={this.state.date}
              services={this.state.services}
            />
          </Flex>
        </form>
      </Box>
    );
  }
}

export default InvoiceForm;
