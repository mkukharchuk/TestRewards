import styled from 'styled-components';

export const StyledText = styled.p<{size: number; color: string; weight: string}>`
    font-family: 'Montserrat', sans-serif;
    font-size: ${({ size }) => size}px;
    color: ${({ color }) => color};
    font-weight: ${({ weight }) => weight};
`;
