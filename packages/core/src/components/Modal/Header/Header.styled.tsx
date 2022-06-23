import { rgba } from 'polished';
import styled, { css } from 'styled-components';
import { getRemFromPx } from '../helpers';
import { Props } from './types';

const getPosition = ({ scrollState }: Props) => {
    const { scrollPosition } = scrollState;
    const scrollPositionRem = getRemFromPx(scrollPosition);

    const isWithinThreshold = 6.6 - scrollPositionRem > 2.1;

    return css`
        position: ${isWithinThreshold ? 'relative' : 'fixed'};
        padding: ${({ theme }) => `${isWithinThreshold ? theme.spacing.L2 : theme.spacing.S4} ${theme.spacing.S4} ${theme.spacing.S4}`};

        @media (min-width: 768px) {
            position: relative;
            padding: ${({ theme }) => `${theme.spacing.M2} ${theme.spacing.M2} ${theme.spacing.S4}`};
        }

        @media (min-width: 768px) and (max-height: 700px) {
            transition: padding 100ms linear;
            padding: ${({ theme }) =>
                `${scrollState.scrolledToTop ? theme.spacing.M2 : theme.spacing.S4} ${theme.spacing.M2} ${theme.spacing.S4} ${
                    theme.spacing.M2
                }`};
        }
    `;
};

const getBoxShadow = ({ scrollState, theme }: Props) => {
    const { scrollPosition } = scrollState;
    const scrollPositionRem = getRemFromPx(scrollPosition);

    return css`
        box-shadow: ${6.6 - scrollPositionRem < 2.1 && `0 1.8rem 1.6rem -1.6rem ${rgba(theme.colors.grey[400], 0.6)}`};

        @media (min-width: 768px) {
            box-shadow: ${({ theme }) => !scrollState.scrolledToTop && `0 1.8rem 1.6rem -1.6rem ${rgba(theme.colors.grey[400], 0.6)}`};
        }
    `;
};

export const Header = styled('div')<Props>`
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.modal.backgroundColor};
    width: 100%;
    border-top-left-radius: 1.6rem;
    border-top-right-radius: 1.6rem;
    z-index: 10;
    color: ${({ theme }) => theme.modal.headerColor};
    ${getPosition}
    ${getBoxShadow}
`;
