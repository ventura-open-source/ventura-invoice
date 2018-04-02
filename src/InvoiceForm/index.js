import React from 'react';
import { Flex, Box } from 'grid-styled';
import PersonalData from './PersonalData';
import MonerayData from './MonetaryData';
import ServicesAndPrices from './ServicesAndPrices';
import { AppContext, onSend, onAddItem, onRemoveItem } from './../AppContext';

const { Consumer } = AppContext;
const marginRight = { marginRight: '20px'};

class InvoiceForm extends React.Component {

  handleInput = ev => {
    const target = ev.target;
    this.props.onChange({
      [target.name] : target.value
    });
  };

  render() {
    return (
      <Consumer>
        { form => (
          <Box className="InvoiceForm" width={[1,1,'38.5%']} p={2}>
            <h1>Invoice Form</h1>
            <form>
              <Flex wrap={true}>
                <h3>Personal info</h3>
                <PersonalData
                  onChange={this.handleInput}
                  name={form.name}
                  address={form.address}
                  location={form.location}
                  dniType={form.dniType}
                  dni={form.dni}
                  cellphone={form.cellphone}
                />
                <hr />
                <h3>Monetary info</h3>
                <MonerayData
                  onChange={this.handleInput}
                  centerCost={form.centerCost}
                  invoiceNumber={form.invoiceNumber}
                  accountNumber={form.accountNumber}
                  bankName={form.bankName}
                  swift={form.swift}
                  aba={form.aba}
                  date={form.date}
                />
                <hr />
                <h3>Services and Prices</h3>
                <ServicesAndPrices
                  onAddItem={item => onAddItem(item, form, this.props.onChange)}
                  onRemoveItem={idx => onRemoveItem(idx , form, this.props.onChange)}
                  date={form.date}
                  services={form.services}
                />
              </Flex>
              <hr />
              <div style={{ textAlign: 'center'}}>
                <button
                  type="button"
                  style={marginRight}
                  onClick={() => window.print()}
                >
                  1. Save PDF
                </button>
                <button
                  type="button"
                  onClick={e => onSend(e, form)}
                >
                  2. Send to Fredo
                </button>
              </div>
            </form>
          </Box>
        )}
      </Consumer>
    );
  }
}

export default InvoiceForm;
