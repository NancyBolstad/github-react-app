import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Typography from '../../components/Typography';
import MainContent from '../../components/MainContent';
import { Context } from '../../context/GlobalContext';
import Loader from '../../components/Loader';
import usePagination from '../../hooks/usePagination';
import Table from '../../components/Table';
import PaginateButtons from '../../components/PaginateButtons';

interface Props {}

export const Home: React.FunctionComponent<Props> = () => {
  const localContext = React.useContext(Context);
  let history = useHistory();
  const pageSize = 20;
  const { next, prev, jump, currentData, currentPage, maxPage } = usePagination(
    localContext.default,
    pageSize,
  );

  useEffect(() => {
    history.push({
      pathname: `&page=${currentPage}`,
    });
  }, [currentPage, history]);

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
        <div>
          <Table rows={currentData()} />
          <PaginateButtons
            totalPages={maxPage}
            preHandler={prev}
            nextHandler={next}
            jumpHandler={jump}
            displayNext={currentPage < maxPage}
            displayPrev={currentPage > 1}
          />
        </div>
      )}
    </MainContent>
  );
};

export default Home;
