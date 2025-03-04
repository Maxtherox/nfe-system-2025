import { Link } from "react-router-dom";
import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/DEVICE_BREAKPOINTS.js";

export const Container = styled(Link)`
  width: 36.8rem;
  height: 26.7rem;

  background-color: ${({ theme }) => theme.COLORS.BLUE_500};
  color: ${({ theme }) => theme.COLORS.WHITE_100};
  border-radius: 7px;
  overflow: hidden;
  filter: drop-shadow(1PX 0 2px #000000d3);
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width:${DEVICE_BREAKPOINTS.XS}) {
        width: 30rem;
    }

  > svg {
    flex: 1;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  > footer {
    background-color: ${({ theme }) => theme.COLORS.BLUE_600};
    width: 100%;
    padding: 30px 0;
    text-align: center;
    font-weight: 700;
  }
`;