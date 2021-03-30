import React from 'react';
import { Label, ThemeUIStyleObject } from 'theme-ui';

export interface ServiceTileImageProps {
  photo: string;
  icon: string;
  initials: string;
  position: string;
  name: 'programming' | 'strategy' | 'project-management';
}

const styles: ThemeUIStyleObject = {
  '.programming': {
    '.icon': {
      maxWidth: '350px',
      position: 'absolute',
      width: '20%',
      zIndex: 10,
      marginLeft: '3%',
    },
    '.photo': {
      maxWidth: '120px',
      width: '7%',
      position: 'absolute',
      marginTop: '-3%',
      marginLeft: '17.2%',
    },
    '.initials': {
      position: 'absolute',
      fontWeight: '700',
      marginTop: '9%',
      marginLeft: '4%',
    },
    '.position': {
      position: 'absolute',
      marginTop: '10%',
      marginLeft: '4%',
    },
  },
  '.strategy': {
    '.icon': {
      maxWidth: '325px',
      position: 'absolute',
      width: '18%',
      zIndex: 10,
      marginTop: '-5%',
    },
    '.photo': {
      maxWidth: '120px',
      width: '7%',
      position: 'absolute',
      marginTop: '2.5%',
      marginLeft: '-2.5%',
    },
    '.initials': {
      position: 'absolute',
      fontWeight: '700',
      marginTop: '7.7%',
      marginLeft: '7.5%',
    },
    '.position': {
      position: 'absolute',
      marginTop: '8.7%',
      marginLeft: '7.5%',
    },
  },
  '.project-management': {
    '.icon': {
      maxWidth: '325px',
      position: 'absolute',
      width: '18%',
      zIndex: 10,
      marginTop: '-5%',
    },
    '.photo': {
      maxWidth: '120px',
      width: '7%',
      position: 'absolute',
      marginTop: '1.3%',
      marginLeft: '15%',
    },
    '.initials': {
      position: 'absolute',
      fontWeight: '700',
      marginTop: '6%',
      marginLeft: '0.5%',
    },
    '.position': {
      position: 'absolute',
      marginTop: '7%',
      marginLeft: '0.5%',
    },
  },
};

export const ServiceTileImage: React.FC<{ data: ServiceTileImageProps }> = ({
  data: { photo, icon, initials, position, name },
}) => (
  <div sx={styles} className={name}>
    <img style={{ ...styles[`.${name}`]['.icon'] }} src={`../${icon}`} />
    <img style={{ ...styles[`.${name}`]['.photo'] }} src={`../${photo}`} />
    <Label sx={{ ...styles[`.${name}`]['.initials'] }}>{initials}</Label>
    <Label sx={{ ...styles[`.${name}`]['.position'] }}>{position}</Label>
  </div>
);
