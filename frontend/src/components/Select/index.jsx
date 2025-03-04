// Select.js

import React from "react";
import { Container } from "./styles";

export function Select({ options, ...rest }) {
  return (
    <Container>
      <select {...rest}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </Container>
  );
}

