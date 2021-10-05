import breakpoints from 'src/styles/breakpoints';
import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const Wrapper = styled.div`
    background-color: ${colors.white};
    max-width: 500px;
    padding: 20px;
    display: flex;
    flex-direction: row;
    padding: 80px 40px;
`;

export const RewardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: space-around;

    @media ${breakpoints.mobile} {
        flex-direction: row;
    }
`;

export const AvatarContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 20px;

    p {
        padding-top: 10px;
    }
`;

export const RewardBlock = styled.div`
    display: flex;
    flex-direction: column;

    p {
        padding-top: 10px;
    }
`;
