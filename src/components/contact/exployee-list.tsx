import { Grid } from '@theme-ui/components';
import React from 'react';
import { List, ListItem } from '../list';
import { EmployeeListItem, EmployeeListItemProps } from './employee-list-item';

export const EmployeeList: React.FC<{ data: EmployeeListItemProps[] }> = ({
  data = [],
}) => (
  <List>
    <Grid gap={1} columns={[1, 2, 3]}>
      {data?.map((service, index) => (
        <ListItem key={index}>
          <EmployeeListItem data={service} />
        </ListItem>
      ))}
    </Grid>
  </List>
);
