/** @jsx jsx */
import { Box, Flex, Grid, Text } from '@theme-ui/components';
import { graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import React from 'react';
import { useIntl } from 'react-intl';
import { jsx } from 'theme-ui';
import { EmployeeListFragment } from '../../generated/graphql-types';

export const query = graphql`
  fragment EmployeeList on employee {
    name
    position {
      nb
      en
    }
    email
    phoneNumber
    photo {
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`;

export const EmployeeList: React.FC<{ data: EmployeeListFragment[] }> = ({
  data = [],
}) => {
  const intl = useIntl();
  const lang = intl.locale as keyof EmployeeListFragment['position'];
  return (
    <Grid gap={1} columns={[1, 2, 3]}>
      {data?.map((employee, index) => {
        const image = getImage(employee.photo as any);
        return (
          <Box
            key={index}
            sx={{
              mb: 5,
              mr: [4, 4, 3],
            }}
          >
            {image && (
              <GatsbyImage
                image={image}
                alt={employee.name}
                sx={{ width: '100%', mb: 3 }}
              />
            )}
            <Text
              sx={{
                fontWeight: 'bold',
                fontSize: [20, 20, 24],
                display: 'block',
              }}
            >
              {employee.name}
            </Text>
            <Text sx={{ fontSize: [20, 20, 24] }}>
              {employee.position[lang]}
            </Text>
            <Flex
              mt={2}
              sx={{ flexDirection: 'column', fontSize: [20, 20, 24] }}
            >
              <Text>{employee.email}</Text>
              <Text>{employee.phoneNumber}</Text>
            </Flex>
          </Box>
        );
      })}
    </Grid>
  );
};
