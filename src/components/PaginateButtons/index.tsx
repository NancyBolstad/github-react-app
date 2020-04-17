import React from 'react';
import Button from '../../components/Button';

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
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <div>
      {displayPrev && (
        <Button
          size="small"
          variant="secondary"
          onClick={e => {
            e.preventDefault();
            preHandler();
          }}
        >
          Prev
        </Button>
      )}
      {pageNumbers.map((number, index) => (
        <Button
          key={index}
          size="small"
          variant="secondary"
          onClick={e => {
            e.preventDefault();
            jumpHandler(number);
          }}
        >
          {number}
        </Button>
      ))}
      {displayNext && (
        <Button
          size="small"
          variant="secondary"
          onClick={e => {
            e.preventDefault();
            nextHandler();
          }}
        >
          Next
        </Button>
      )}
    </div>
  );
};

export default PaginateButtons;
