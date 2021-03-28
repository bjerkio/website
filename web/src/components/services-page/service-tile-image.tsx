import React from 'react';
import { Image, Label, ThemeUIStyleObject } from 'theme-ui';

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
      marginTop: '3%',
      maxWidth: '350px',
      position: 'absolute',
      width: '20%',
      zIndex: 10,
      marginLeft: '3%',
      display: ['none', 'none', 'block'],
    },
    '.photo': {
      maxWidth: '120px',
      width: '7%',
      position: 'absolute',
      marginLeft: '17.2%',
      display: ['none', 'none', 'block'],
    },
    '.initials': {
      position: 'absolute',
      fontWeight: '700',
      marginTop: '12%',
      marginLeft: '4%',
      display: ['none', 'none', 'block'],
      fontSize: 20,
    },
    '.position': {
      position: 'absolute',
      marginTop: '13%',
      marginLeft: '4%',
      display: ['none', 'none', 'block'],
      fontSize: 20,
    },
  },
  '.strategy': {
    '.icon': {
      maxWidth: '325px',
      position: 'absolute',
      width: '18%',
      zIndex: 10,
      marginTop: '-1%',
      display: ['none', 'none', 'block'],
    },
    '.photo': {
      maxWidth: '120px',
      width: '7%',
      position: 'absolute',
      marginTop: '6.5%',
      marginLeft: '-2.5%',
      display: ['none', 'none', 'block'],
    },
    '.initials': {
      position: 'absolute',
      fontWeight: '700',
      marginTop: '11.7%',
      marginLeft: '7.5%',
      display: ['none', 'none', 'block'],
      fontSize: 20,
    },
    '.position': {
      position: 'absolute',
      marginTop: '12.7%',
      marginLeft: '7.5%',
      display: ['none', 'none', 'block'],
      fontSize: 20,
    },
  },
  '.project-management': {
    '.icon': {
      maxWidth: '325px',
      position: 'absolute',
      width: '18%',
      zIndex: 10,
      // marginTop: '-2%',
      display: ['none', 'none', 'block'],
    },
    '.photo': {
      maxWidth: '120px',
      width: '7%',
      position: 'absolute',
      marginTop: '6.3%',
      marginLeft: '15%',
      display: ['none', 'none', 'block'],
    },
    '.initials': {
      position: 'absolute',
      fontWeight: '700',
      marginTop: '12%',
      marginLeft: '0.5%',
      display: ['none', 'none', 'block'],
      fontSize: 20,
    },
    '.position': {
      position: 'absolute',
      marginTop: '13%',
      marginLeft: '0.5%',
      display: ['none', 'none', 'block'],
      fontSize: 20,
    },
  },
};

export const ServiceTileImage: React.FC<{ data: ServiceTileImageProps }> = ({
  data: { photo, icon, initials, position, name },
  ...props
}) => (
  <div sx={styles} className={name} {...props}>
    <Image sx={{ ...styles[`.${name}`]['.icon'] }} src={`../${icon}`} />
    <Image sx={{ ...styles[`.${name}`]['.photo'] }} src={`../${photo}`} />
    <Label sx={{ ...styles[`.${name}`]['.initials'] }}>{initials}</Label>
    <Label sx={{ ...styles[`.${name}`]['.position'] }}>{position}</Label>
  </div>
);
