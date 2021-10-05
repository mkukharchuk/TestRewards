import styled from 'styled-components';
import { colors } from '../../../styles/colors';

export const Wrapper = styled.div`
    position: relative;
    background-color: ${colors.lightGray};
    max-width: 1400px;
    height: 100%;
    padding: 20px 60px 20px 20px;
    border-top: 4px solid ${colors.secondary};
`;

export const RewardAddButton = styled.button`
    position: absolute;
    top: -30px;
    right: 50px;
    width: 60px;
    height: 60px;
    background-color: ${colors.white};
    border-radius: 100%;
    border: 2px solid ${colors.primary};
    padding: 18px;

    cursor: pointer;

    &:hover {
        background-color: ${colors.darkPurple};
        border: 2px solid transparent;
        svg {
            path {
                fill: ${colors.white}
            }
        }
    }
`;
