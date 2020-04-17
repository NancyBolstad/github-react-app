import React from 'react';
import styled from 'styled-components';
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
`;

const TableHeader = styled.th`
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #4caf50;
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
