import React from 'react';
import PropTypes from 'prop-types';
import { Input, Label } from './Filter.styled';
export default function Filter({ value, onChange }) {
  return (
    <Label>
      Find contacts by me
      <Input type="text" value={value} onChange={onChange} />
    </Label>
  );
}

Filter.propTypes = {
  
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
