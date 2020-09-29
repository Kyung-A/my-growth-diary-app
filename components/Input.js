import React from "react";
import styled from "styled-components/native";
import PropTypes from "prop-types";

const TextInput = styled.TextInput`
  width: 90%;
  border: 1px solid #ccc;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 5px;
`;

const Input = ({ placeholder, onChange, onSubmit }) => (
  <TextInput
    onChangeText={onChange}
    placeholder={placeholder}
    returnKeyType={"done"}
    onSubmitEditing={onSubmit}
    autoCorrect={false}
    multiline={true}
    numberOfLines={20}
    maxLength={1000}
    textAlignVertical={"top"}
    style={{ height: 350 }}
  />
);

Input.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default Input;
