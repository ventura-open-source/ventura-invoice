import React, { PureComponent } from 'react';
import { Flex, Box } from 'grid-styled';

class ServicesAndPrices extends PureComponent {
  state = {
    type: 'salary',
    currency: 'EUR',
    targetCurrency: 'USD',
    name: '',
    amount: 1,
    unitPrice: 0.0,
    dollarPrice: null,
    autoConvert: true,
  }

  componentDidMount() {
    if(this.state.autoConvert) {
      this.fetchRates();
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(
        (
          prevState.currency !== this.state.currency ||
          prevState.targetCurrency !== this.state.targetCurrency
        )
        && this.state.currency !== this.state.targetCurrency
        && this.state.currency !== "COP"
        && this.state.targetCurrency !== "COP"
    ) {
      this.fetchRates();
    }
    if(this.state.targetCurrency === "COP" || this.state.currency === "COP") {
      this.setState({ autoConvert: false, currency: "COP", targetCurrency: "COP" });
    }
  }

  fetchRates() {
    fetch('https://api.fixer.io/latest?base='+this.state.currency)
    .then(response => response.json())
    .then(data => {
      this.setState({ dollarPrice: data.rates[this.state.targetCurrency]});
    });
  }


  handleInput = ev => {
    const target = ev.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [target.name] : value
    });
  };

  addItem = () => {
    //exclude dollar conversion rate
    const { dollarPrice, autoConvert, ...others } = this.state;
    let data = Object.assign({}, others);
    if(autoConvert) {
      data.unitPrice = dollarPrice * parseFloat(data.unitPrice);
    } else {
      data.targetCurrency = data.currency;
      data.unitPrice = parseFloat(data.unitPrice);
    }
    this.props.onAddItem(data);
  };

  renderServices = (services) => {
    const { onRemoveItem } = this.props;
    return (
      <Flex wrap={true}>
        {services.map((item, i) => (
          <Box width={1} m={1}  p={2} className="ServiceItem" key={i}>
            {item.type} - {item.amount} units - {item.unitPrice.toLocaleString()} {item.targetCurrency}
            <span className="delete" title="remove" onClick={() => onRemoveItem(i)}>x</span>
          </Box>
        ))}
      </Flex>
    );
  }

  render() {
    const { services } = this.props;

    return (
      <Flex wrap={true}>
        <Box width={1} p={1}>
          <label htmlFor="currency">Currency</label>
          <select name="currency" value={this.state.currency}
            onChange={this.handleInput} style={{ width: '110px'}}>
            <option value="EUR">EUR</option>
            <option value="USD">USD</option>
            <option value="COP">COP</option>
          </select>
          { (this.state.targetCurrency !== "COP" || this.state.currency !== "COP") && (
            <div>
              <label htmlFor="autoConvert">Automatic apply exchange rate</label>
              <input
                type="checkbox"
                name="autoConvert"
                checked={this.state.autoConvert}
                onChange={this.handleInput}
                style={{width: '50px'}}
              />
            </div>
          )}
          {
            this.state.autoConvert && (
              <div>
                <label htmlFor="targetCurrency">To</label>
                <select name="targetCurrency" value={this.state.targetCurrency}
                  onChange={this.handleInput} style={{ width: '110px'}}>
                  <option value="EUR">EUR</option>
                  <option value="USD">USD</option>
                  <option value="COP">COP</option>
                </select>
              </div>
            )
          }
        </Box>
        <Box width={1} p={1}>
          <label htmlFor="type">Type</label>
          <select name="type" value={this.state.type} onChange={this.handleInput} style={{ width: '110px'}}>
            <option value="salary">Salary</option>
            <option value="fee">Transaction Fee</option>
            <option value="extra">Extra hours</option>
            <option value="share">Share</option>
            <option value="bono">Bono</option>
            <option value="discount">Discount</option>
            <option value="custom">Custom</option>
          </select>
          {
            this.state.type === "custom" && (
              <div>
                <label htmlFor="name">Title</label>
                <input
                  type="text"
                  name="name"
                  value={this.state.customName}
                  onChange={this.handleInput}
                  style={{width: '150px'}}
                />
              </div>
            )
          }
          <label htmlFor="unitPrice">Unit price ({this.state.currency})</label>
          <input
            type="text"
            name="unitPrice"
            value={this.state.unitPrice}
            onChange={this.handleInput}
            style={{width: '50px'}}
          />
          <label htmlFor="amount">Unit price</label>
          <input
            type="number"
            name="amount"
            value={this.state.amount}
            onChange={this.handleInput}
            style={{width: '40px'}}
          />
        </Box>
        <Box width={1} p={1} style={{ textAlign: 'center' }}>
          <button type="button" onClick={this.addItem}>Add +</button>
        </Box>
        <Box width={1} p={2} mt={1}>
          { this.state.autoConvert &&
            <small>
              * Conversion rate {this.state.currency} - {this.state.targetCurrency} for today is: <b>{this.state.dollarPrice}</b>
            </small>
          }
          <br/><br/>
          {this.renderServices(services)}
        </Box>
      </Flex>
    );
  }
}

export default ServicesAndPrices;
