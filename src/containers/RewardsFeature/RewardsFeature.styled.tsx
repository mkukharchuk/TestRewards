import breakpoints from 'src/styles/breakpoints';
import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    width: 100%;
    min-height: 100%;

    @media ${breakpoints.laptop} {
        width: 1024px;
    }
`;
