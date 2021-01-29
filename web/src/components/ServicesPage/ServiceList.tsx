import React from 'react'
import List from '../List';
import ListItem from '../ListItem';
import ServiceListItem, { ServiceListItemProps } from './ServiceListItem';

const ServiceList: React.FC<{data: ServiceListItemProps[]}> = ({data = []}) => (
    <List>
      {data &&
        data.map((service, index) => (
          <ListItem key={index}>
            <ServiceListItem data={service} />
          </ListItem>
        ))}
    </List>
)

export default ServiceList;
