import { colors } from 'src/styles/colors';
import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 6px;
`;

export const Tab = styled.div<{active: boolean}>`
  margin: 0 15px;
  padding-bottom: 10px;
  border-bottom: 4px solid ${({ active }) => (active ? colors.purple : 'transparent')};
  cursor: pointer;
`;

export const TabsContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 30px;
`;

export const TabContent = styled.div`
  display: flex;
  padding: 15px
`;
