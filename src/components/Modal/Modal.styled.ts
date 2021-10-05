import breakpoints from 'src/styles/breakpoints';
import { colors } from 'src/styles/colors';
import styled from 'styled-components';

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba($color: #000000, $alpha: 0.35);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalWrapper = styled.div`

  width: 100%;
  height: auto;
  background-color: #fff;
  padding: 15px 10px;
  border-radius: 4px;

  background-color: ${colors.white};
  backdrop-filter: blur(5px);
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);

  @media ${breakpoints.mobile} {
    width: 350px;
  }

`;
