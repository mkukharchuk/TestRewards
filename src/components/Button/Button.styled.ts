import { colors } from 'src/styles/colors';
import styled from 'styled-components';

export const StyledButton = styled.button`
  border-radius: 4px;
  color: ${colors.white};
  background-color: ${colors.darkPurple};
  padding: 10px 20px;
  font-weight: bold;
  font-size: 14px;
  width: 100px;
  cursor: pointer;

  &:hover {
    opacity: 0.9
  }
`;
