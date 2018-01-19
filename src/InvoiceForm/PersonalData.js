import React from 'react';
import { Flex, Box } from 'grid-styled';

function PersonalData({ onChange, name, address, location, dniType, dni, cellphone }) {
  return ([
    <Box width={1} p={1}>
      <label for="name">Name</label>
      <input
        type="text"
        name="name"
        onChange={onChange}
        value={name}
        style={{width: '300px'}}
      />
    </Box>,
    <Box width={1} p={1}>
      <label for="address">Address</label>
      <input
        type="text"
        name="address"
        onChange={onChange}
        value={address}
      />
      <label for="address">Location</label>
      <input
        type="text"
        placeholder="Medellin, Colombia"
        name="location"
        onChange={onChange}
        value={location}
      />
    </Box>,
    <Box width={1} p={1}>
      <label for="cellphone">Cellphone</label>
      <input
        type="text"
        name="cellphone"
        onChange={onChange}
        value={cellphone}
        style={{width: '250px'}}
      />
    </Box>,
    <Box width={1} p={1}>
      <label for="dniType">Dni Type</label>
      <input
        type="text"
        name="dniType"
        placeholder="C.C / NIT / C.E / PB"
        onChange={onChange}
        value={dniType}
        style={{width: '40px'}}
      />
      <label for="dni">Dni</label>
      <input
        type="text"
        name="dni"
        onChange={onChange}
        value={dni}
      />
    </Box>,
  ]);
}

export default PersonalData;
