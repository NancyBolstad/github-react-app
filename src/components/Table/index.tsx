import React from 'react';
import { Item } from '../../types/data';
import { StyledTable, TableHeader, TableRow, TableDataCell, RemovableRow } from './styles';

type KeyName = keyof Item;

interface Props {
  headerNames: KeyName[];
  rows: Item[];
}

export const Table: React.FunctionComponent<Props> = ({ headerNames, rows }) => {
  return (
    <>
      <StyledTable>
        <thead>
          <TableRow>
            {(headerNames || []).map((headerName, index) => (
              <TableHeader>
                <TableDataCell key={index}>{headerName}</TableDataCell>
              </TableHeader>
            ))}
          </TableRow>
        </thead>
        <tbody>
          {(rows || []).map((item: Item, index) => (
            <RemovableRow key={index}>
              {(headerNames || []).map((headerName, index) => {
                if (headerName === 'owner') {
                  return <TableDataCell key={index}>{item.owner.node_id}</TableDataCell>;
                } else if (headerName === 'license') {
                  return <TableDataCell key={index}>{item.license?.name}</TableDataCell>;
                } else {
                  return <TableDataCell key={index}>{item[headerName]}</TableDataCell>;
                }
              })}
            </RemovableRow>
          ))}
        </tbody>
      </StyledTable>
    </>
  );
};

export default Table;
