import { BoxProps, Text as ThemeUiText } from '@theme-ui/components';
import React from 'react';
import { MessageDescriptor, useIntl } from 'react-intl';

export type TextProps = Required<Omit<MessageDescriptor, 'description'>> &
  Pick<MessageDescriptor, 'description'> &
  BoxProps;

export const Text = React.forwardRef<HTMLDivElement, TextProps>(
  ({ id, description, defaultMessage, ...props }, ref) => {
    const intl = useIntl();
    return (
      <ThemeUiText ref={ref} {...props}>
        {intl.formatMessage({ id, description, defaultMessage })}
      </ThemeUiText>
    );
  },
);

Text.displayName = 'Text';
