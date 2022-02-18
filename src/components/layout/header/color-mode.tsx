/** @jsxImportSource theme-ui */

import { Button, useColorMode } from 'theme-ui';

export const ColorMode = () => {
  const [colorMode, setColorMode] = useColorMode();

  return (
    <Button
      onClick={() => {
        const next = colorMode === 'dark' ? 'light' : 'dark';
        setColorMode(next);
      }}
    >
      set color mode
    </Button>
  );
};
