import React from 'react';
import styled from 'styled-components';
import createFontStyles from '../../util/createFontStyles';
import { Item } from '../../types/data';

interface Props {
  rows: Item[];
}

const Container = styled.table`
  border-collapse: collapse;
  width: 1080px;

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  tr:hover {
    background-color: #ddd;
  }

  td {
    text-align: center;
  }
`;

const TableHeader = styled.th`
  padding: ${props => props.theme.spacing.xs}rem 0;
  text-align: center;
  background-color: ${props => props.theme.colors.secondary};
  color: white;
`;

export const Table: React.FunctionComponent<Props> = ({ rows }) => {
  return (
    <>
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
          {(rows || []).map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.description}</td>
              <td>{item.forks}</td>
              <td>{item.license?.name}</td>
            </tr>
          ))}
        </tbody>
      </Container>
    </>
  );
};

export default Table;
