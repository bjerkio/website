import { Grid } from '@theme-ui/components';
import React from 'react';
import { List, ListItem } from '../list';
import { ProjectListItem, ProjectListItemProps } from './project-list-item';

export const ProjectList: React.FC<{ data: ProjectListItemProps[] }> = ({
  data = [],
}) => (
  <List>
    <Grid gap={1} columns={[1, 2, 3]}>
      {data?.map((service, index) => (
        <ListItem key={index}>
          <ProjectListItem data={service} />
        </ListItem>
      ))}
    </Grid>
  </List>
);
