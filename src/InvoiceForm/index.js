import React, { PureComponent } from 'react';
import { Flex, Box } from 'grid-styled';
import getYear from 'date-fns/get_year';
import format from 'date-fns/format';
import PersonalData from './PersonalData';
import MonerayData from './MonetaryData';
import ServicesAndPrices from './ServicesAndPrices';
import { pad } from './../InvoiceDocument/InvoiceHeader';

class InvoiceForm extends PureComponent {

  state = {
    name: '',
    address: 'CRA 46 #19 Sur - 100, APT. 603',
    location: 'Envigado, Colombia',
    dniType: 'C.C',
    dni: '',
    cellphone: '',
    centerCost: '24551',
    invoiceNumber: 1,
    accountNumber: '',
    bankName: '',
    date: '',
    services: [
      //type: 1  //salary
      //type: 2 //fee
      //type: 3 //extra hours
      //type: 4 //share
      //type: 5 //bono
      //type: 6 //discount
      //type: 7 //custom
    ],
  }

  componentDidMount() {
    const data = window.localStorage.getItem('data');
    if(data !== null) {
      this.setState(JSON.parse(data), () => {
        this.props.onChange(this.state);
      });
    }
  }

  componentDidUpdate() { this.saveToLocalStorage(); }

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
    }, () => {
      this.props.onChange(this.state);
    });
  };

  onRemoveItem = idx => {
    this.setState({
       services: this.state.services.filter((_, i) => i !== idx)
    }, () => this.props.onChange(this.state));
  };

  saveToLocalStorage() {
    window.localStorage.setItem('data', JSON.stringify(this.state))
  }

  onSend = (e) => {
    console.log(this.state);
    e.preventDefault();
    const to = 'alfredo.ortegon.viventura@gmail.com';
    const subject = `Invoice ${pad(this.state.invoiceNumber, 2)}/${getYear(new Date()).toString().substr(2)} - ${this.state.name}`;
    const bbc = 'ventura.product.manager@gmail.com';
    const body = `Hi Alfredo, I attach you my next invoice. Thank you in advance.`;
    window.open(`https://mail.google.com/mail/?ui=2&view=cm&fs=1&tf=1&shva=1&to=${to}&su=${subject}&body=${body}&bcc=${bbc}`);
  }

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
          <hr />
          <div style={{ textAlign: 'center'}}>
            <button type="button" style={{ marginRight: '20px'}} onClick={() => window.print()}>1. Save PDF </button>
            <button type="button" onClick={this.onSend}>2. Send to Fredo</button>
          </div>
        </form>
      </Box>
    );
  }
}

export default InvoiceForm;
