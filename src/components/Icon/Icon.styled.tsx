import styled from 'styled-components';

export const StyledIcon = styled.div<{size: number, color: string}>`
    svg {
        height: ${({ size }) => size}px;
        width: ${({ size }) => size}px;

        path {
            fill: ${({ color }) => color};
        }
    }
`;
