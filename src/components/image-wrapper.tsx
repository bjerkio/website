import { Box } from 'theme-ui';
export interface ImageWrapperProps {
  height?: string | number | undefined;
}
export const ImageWrapper: React.FC<ImageWrapperProps> = ({ children }) => (
  <Box
    sx={{
      width: '100%',
      '& > img': { position: 'unset' },
      height: '2.1rem',
    }}
  >
    <Box
      sx={{
        position: 'relative',
        height: '100%',
      }}
    >
      {children}
    </Box>
  </Box>
);
