import React, { Component } from 'react';
import { Flex, Box } from 'grid-styled';
import { hot } from 'react-hot-loader';

import InvoiceDocument from './InvoiceDocument';
import InvoiceForm from './InvoiceForm';
import { AppContext, defaultValue, updateDates } from './AppContext';
import { saveToLocalStorage } from './utils';
import './App.css';

const { Provider } = AppContext;

class App extends Component {
  state = defaultValue;

  componentDidMount() {
    const data = window.localStorage.getItem('data');
    if(data !== null) {
      const initialState = updateDates(JSON.parse(data));
      this.setState(initialState);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.date !== this.state.date) {
      this.setState(updateDates(this.state, this.state.date));
    }
    saveToLocalStorage(this.state);
  }

  onFormChange = data => {
    this.setState(data);
  };

  render() {
    return (
      <Provider value={this.state}>
        <Box className="App" width={1}>
          <Flex wrap={true}>
            <InvoiceDocument/>
            <InvoiceForm onChange={this.onFormChange}/>
          </Flex>
        </Box>
      </Provider>
    );
  }
}

export default hot(module)(App);
