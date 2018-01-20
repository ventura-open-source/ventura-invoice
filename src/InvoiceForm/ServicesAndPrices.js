import React, { PureComponent } from 'react';
import { Flex, Box } from 'grid-styled';

class ServicesAndPrices extends PureComponent {
  state = {
    type: 'salary',
    name: '',
    amount: 1,
    unitPrice: 0.0,
  }

  handleInput = ev => {
    const target = ev.target;
    this.setState({
      [target.name] : target.value
    });
  };

  addItem = () => {
    let data = Object.assign({}, this.state);
    data.unitPrice = parseFloat(data.unitPrice);
    this.props.onAddItem(data);
  };

  renderServices = (services) => {
    const { onRemoveItem } = this.props;
    return (
      <Flex wrap={true}>
        {services.map((item, i) => (
          <Box width={1} m={1}  p={2} className="ServiceItem">
            {item.type} - {item.amount} units - {item.unitPrice.toLocaleString()} EUR
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
          <label for="type">Type</label>
          <select name="type" value={this.state.type} onChange={this.handleInput} style={{ width: '110px'}}>
            <option value="salary">Salary</option>
            <option value="fee">Transaction Fee</option>
            <option value="extra">Extra hours</option>
            <option value="share">Share</option>
            <option value="bono">Bono</option>
            <option value="discount">Discount</option>
          </select>
          <label for="unitPrice">Unit price (EUR)</label>
          <input
            type="text"
            name="unitPrice"
            value={this.state.unitPrice}
            onChange={this.handleInput}
            style={{width: '50px'}}
          />
          <label for="amount">Unit price</label>
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
          {this.renderServices(services)}
        </Box>
      </Flex>
    );
  }
}

export default ServicesAndPrices;
