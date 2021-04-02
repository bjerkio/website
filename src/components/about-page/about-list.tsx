import React from 'react';
import { List, ListItem } from '../list';
import { AboutListItem, AboutListItemProps } from './about-list-item';

export const AboutList: React.FC<{ data: AboutListItemProps[] }> = ({
  data = [],
}) => (
  <List>
    {data?.map((item, index) => (
      <ListItem key={index}>
        <AboutListItem data={item} />
      </ListItem>
    ))}
  </List>
);
