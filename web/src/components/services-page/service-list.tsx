import React from 'react';
import { List, ListItem } from '../list';
import { ServiceListItem, ServiceListItemProps } from './service-list-item';

export const ServiceList: React.FC<{ data: ServiceListItemProps[] }> = ({
  data = [],
}) => (
  <List>
    {data?.map((service, index) => (
      <ListItem key={index}>
        <ServiceListItem data={service} />
      </ListItem>
    ))}
  </List>
);
