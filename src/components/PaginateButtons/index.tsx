import React from 'react';
import styled, { css } from 'styled-components';
import { ButtonAnchor } from '../../components/Button';
import setColorOpacity from '../../util/setColorOpacity';

const ButtonsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: ${props => props.theme.spacing.s}rem auto;
`;

const JumpPageButton = styled(ButtonAnchor)<{ isActive: boolean }>`
  margin: 0 ${props => props.theme.spacing.xs}rem;
  ${props =>
    props.isActive &&
    css`
      background-color: ${props => setColorOpacity(props.theme.colors.secondary, '0.5')};
    `}
`;

interface Props {
  totalPages: number;
  preHandler: () => any;
  nextHandler: () => any;
  jumpHandler: (pageNumber: number) => any;
  displayPrev: boolean;
  displayNext: boolean;
}

export const PaginateButtons: React.FunctionComponent<Props> = ({
  totalPages,
  preHandler,
  nextHandler,
  jumpHandler,
  displayNext,
  displayPrev,
}) => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const pageNumbers: number[] = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  React.useEffect(() => {
    setActiveIndex(1);
  }, []);

  return (
    <ButtonsWrapper>
      {displayPrev && (
        <ButtonAnchor
          size="small"
          variant="secondary"
          href="#"
          aria-label={`Gå til forrige side`}
          title={`Gå til forrige side`}
          onClick={e => {
            e.preventDefault();
            preHandler();
          }}
        >
          Prev
        </ButtonAnchor>
      )}
      {pageNumbers.map((number, index) => (
        <JumpPageButton
          key={index}
          size="small"
          variant="secondary"
          isActive={index === activeIndex - 1}
          aria-label={`Side ${number}`}
          title={`Side ${number}`}
          href="#"
          onClick={e => {
            e.preventDefault();
            jumpHandler(number);
            setActiveIndex(number);
          }}
        >
          {number}
        </JumpPageButton>
      ))}
      {displayNext && (
        <ButtonAnchor
          size="small"
          variant="secondary"
          aria-label={`Gå til neste side`}
          title={`Gå til neste side`}
          href="#"
          onClick={e => {
            e.preventDefault();
            nextHandler();
          }}
        >
          Next
        </ButtonAnchor>
      )}
    </ButtonsWrapper>
  );
};

export default PaginateButtons;
