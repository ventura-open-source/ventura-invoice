import React from 'react';
import { Box } from 'grid-styled';

function PersonalData({ onChange, name, address, location, dniType, dni, cellphone }) {
  return ([
    <Box width={1} p={1} key="p1">
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        onChange={onChange}
        value={name}
        style={{width: '300px'}}
      />
    </Box>,
    <Box width={1} p={1} key="p2">
      <label htmlFor="address">Address</label>
      <input
        type="text"
        name="address"
        onChange={onChange}
        value={address}
      />
      <label htmlFor="address">Location</label>
      <input
        type="text"
        placeholder="Medellin, Colombia"
        name="location"
        onChange={onChange}
        value={location}
      />
    </Box>,
    <Box width={1} p={1} key="p3">
      <label htmlFor="cellphone">Cellphone</label>
      <input
        type="text"
        name="cellphone"
        onChange={onChange}
        value={cellphone}
        style={{width: '250px'}}
      />
    </Box>,
    <Box width={1} p={1} key="p4">
      <label htmlFor="dniType">Dni Type</label>
      <input
        type="text"
        name="dniType"
        placeholder="C.C / NIT / C.E / PB"
        onChange={onChange}
        value={dniType}
        style={{width: '40px'}}
      />
      <label htmlFor="dni">Dni</label>
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
