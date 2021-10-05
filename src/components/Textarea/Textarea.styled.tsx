import { colors } from 'src/styles/colors';
import styled from 'styled-components';

export const StyledTextarea = styled.textarea`
  border: 2px solid ${colors.primary};
  border-radius: 4px;
  padding: 10px 10px;
`;

export const StyledLabel = styled.label`
  color: ${colors.black};
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
