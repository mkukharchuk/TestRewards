import breakpoints from 'src/styles/breakpoints';
import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-content: center;
    width: 100%;
    height: 100vh;

    @media ${breakpoints.laptop} {
        width: 1024px;
    }
`;
