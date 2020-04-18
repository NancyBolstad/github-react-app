import React from 'react';
import { Item } from '../../types/data';
import { StyledTable, TableHeader, TableRow, TableDataCell } from './styles';

interface Props {
  rows: Item[];
}

export const Table: React.FunctionComponent<Props> = ({ rows }) => {
  return (
    <>
      <StyledTable>
        <thead>
          <TableRow>
            <TableHeader>Name</TableHeader>
            <TableHeader>Description</TableHeader>
            <TableHeader>Forks</TableHeader>
            <TableHeader>License</TableHeader>
          </TableRow>
        </thead>
        <tbody>
          {(rows || []).map((item, index) => (
            <TableRow key={index}>
              <TableDataCell>{item.name}</TableDataCell>
              <TableDataCell>{item.description}</TableDataCell>
              <TableDataCell>{item.forks}</TableDataCell>
              <TableDataCell>{item.license?.name}</TableDataCell>
            </TableRow>
          ))}
        </tbody>
      </StyledTable>
    </>
  );
};

export default Table;
