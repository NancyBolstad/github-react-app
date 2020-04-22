import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
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
  const localContext = React.useContext(Context);
  let history = useHistory();
  const { next, prev, jump, currentData, currentPage, maxPage } = usePagination(
    localContext.default,
    PAGE_SIZE,
  );

  useEffect(() => {
    history.push({
      pathname: `&page=${currentPage}`,
    });
  }, [currentPage, history]);

  function sort(value: string) {
    console.log(value);
  }

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
          <Table
            headerNames={['name', 'forks', 'description']}
            rows={currentData()}
            sortMethod={sort}
          />
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
