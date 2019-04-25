import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  text-align: center;
`

const StyledH1 = styled.h1`
  font-size: 80px;
  color: #ead7d6;
`

function Header() {
  return (
    <StyledHeader>
      <StyledH1>todos</StyledH1>
    </StyledHeader>
  );
}

export default Header;