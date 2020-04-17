import React from 'react';
import styled from 'styled-components';
import { Item } from '../../types/data';
import Typography from '../../components/Typography';
import MainContent from '../../components/MainContent';
import { Context } from '../../context/GlobalContext';
import Loader from '../../components/Loader';

interface Props {}

const Container = styled.table`
  border-collapse: collapse;
  width: 1080px;

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  tr:hover {
    background-color: #ddd;
  }
`;

const TableHeader = styled.th`
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4caf50;
  color: white;
`;

export const Home: React.FunctionComponent<Props> = () => {
  const localContext = React.useContext(Context);
  const pageSize = 20;
  const [totalPage, setTotalPage] = React.useState(0);
  const [data, setData] = React.useState<Item[]>([]);
  const [pageNumber, setPageNumber] = React.useState(1);

  function pagination() {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = pageSize * pageNumber - 1;
    const array = localContext.default;
    const page = array.slice(startIndex, endIndex);
    console.log({ page });
    setData([...localContext.default].slice(startIndex, endIndex));
  }

  React.useEffect(() => {
    if (localContext) {
      setData(localContext.default);
      pagination();
      setTotalPage(Math.ceil(localContext.default.length / pageSize));
    }
  }, [localContext, pageNumber]);
  console.log({ totalPage });

  return (
    <MainContent>
      <Typography
        element="h1"
        variant="h1"
        content="Github API Table"
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
          <Container>
            <thead>
              <tr>
                <TableHeader>Name</TableHeader>
                <TableHeader>Description</TableHeader>
                <TableHeader>Forks</TableHeader>
                <TableHeader>License</TableHeader>
              </tr>
            </thead>
            <tbody>
              {(data || []).map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.description}</td>
                  <td>{item.forks}</td>
                  <td>{item.license?.name}</td>
                </tr>
              ))}
            </tbody>
          </Container>
          {pageNumber > 1 && (
            <button
              onClick={e => {
                e.preventDefault();
                setPageNumber(pageNumber - 1);
              }}
            >
              Prev
            </button>
          )}
          {pageNumber < totalPage && (
            <button
              onClick={e => {
                e.preventDefault();
                setPageNumber(pageNumber + 1);
              }}
            >
              Next
            </button>
          )}
        </div>
      )}
    </MainContent>
  );
};

export default Home;
