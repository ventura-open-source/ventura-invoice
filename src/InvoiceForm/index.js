import React, { Component, PureComponent } from 'react';
import { Flex, Box } from 'grid-styled';
import PersonalData from './PersonalData';
import MonerayData from './MonetaryData';

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
  }

  componentDidMount() {
    this.props.onChange(this.state);
  }

  handleInput = ev => {
    const target = ev.target;
    this.setState({
      [target.name] : target.value
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
          </Flex>
        </form>
      </Box>
    );
  }
}

export default InvoiceForm;
