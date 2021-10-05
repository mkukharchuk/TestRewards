import { colors } from 'src/styles/colors';
import styled from 'styled-components';

export const AvatarWrapper = styled.div<{size: number}>`
  background-color: ${colors.primary};
  padding: 20px;
  border-radius: 100%;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
`;
