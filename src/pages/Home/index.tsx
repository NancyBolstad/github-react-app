import React from 'react';
import styled from 'styled-components';
import Typography from '../../components/Typography';
import MainContent from '../../components/MainContent';
import { Context } from '../../context/GlobalContext';
import Loader from '../../components/Loader';

interface Props {}

const Container = styled.table`
  border-collapse: collapse;
  width: 100%;

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
  console.log({ localContext });

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
          {(localContext.default || []).map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.forks}</td>
              <td>{item.license?.name}</td>
            </tr>
          ))}
          </tbody>
        </Container>
      )}
    </MainContent>
  );
};

export default Home;
