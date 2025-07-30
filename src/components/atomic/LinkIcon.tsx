import styled, { css } from "styled-components";

const StyledIcon = styled.div`
padding: 1.5rem;
border: 0.3rem solid;
border-color: white;
border-radius: 100rem;

`;

function LinkIconContainer({icon}: {icon: React.ReactNode}) {
  return (
    <StyledIcon>
      {icon}
    </StyledIcon>);
}

export default LinkIconContainer;