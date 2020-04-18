import React from 'react';
import { ButtonAnchor } from '../../components/Button';
import { ButtonsWrapper, JumpPageButton } from './styles';

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
          aria-label="Go to previous page"
          title="Go to previous page"
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
          aria-label={`Page ${number}`}
          title={`Page ${number}`}
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
          aria-label="Go to next page"
          title="Go to next page"
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
