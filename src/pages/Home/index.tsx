import React from 'react';
import { useParams } from 'react-router-dom';
import Typography from '../../components/Typography';
import MainContent from '../../components/MainContent';
import { Context } from '../../context/GlobalContext';
import Loader from '../../components/Loader';
import usePagination from '../../hooks/usePagination';
import Table from '../../components/Table';
import PaginateButtons from '../../components/PaginateButtons';
import { PAGE_SIZE } from '../../util/constants';

interface Props {}

export const Home: React.FunctionComponent<Props> = () => {
  const { number = '1' } = useParams();
  const localContext = React.useContext(Context);
  const maxPage = Math.ceil(localContext.default.length / PAGE_SIZE);
  const currentPage = parseInt(number) <= maxPage && parseInt(number) > 0 ? parseInt(number) : 1;
  const { next, prev, jump, currentData } = usePagination(
    localContext.default,
    PAGE_SIZE,
    currentPage,
    maxPage,
  );

  return (
    <MainContent>
      <Typography
        element="h1"
        variant="h1"
        content="Github's Most Popular JavaScript-repos"
        bottom={32}
        top={32}
        bottomDesktop={48}
        topDesktop={48}
        isPrimaryColor
      />
      {localContext.loaded ? (
        <Loader />
      ) : (
        <>
          <Table headerNames={['name', 'forks', 'description']} rows={currentData()} />
          <PaginateButtons
            totalPages={maxPage}
            preHandler={prev}
            nextHandler={next}
            jumpHandler={jump}
            displayNext={currentPage < maxPage}
            displayPrev={currentPage > 1}
            currentPage={currentPage}
          />
        </>
      )}
    </MainContent>
  );
};

export default Home;
