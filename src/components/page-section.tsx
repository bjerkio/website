import { Box } from 'theme-ui';

export interface PageSectionProps {
  backgroundColor?: 'green';
}

export const PageSection: React.FC<PageSectionProps> = ({
  children,
  backgroundColor: backgroundColorProp,
}) => {
  const backgroundColor =
    backgroundColorProp === 'green' ? 'green100' : 'green20';
  return (
    <Box
      sx={{
        backgroundColor,
        py: ['98px', '194px'],
        width: '100%',
      }}
    >
      {children}
    </Box>
  );
};
