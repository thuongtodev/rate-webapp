import React from 'react';
import { Loader, Dimmer } from 'semantic-ui-react';

interface Props {
  loading?: boolean;
  children?: JSX.Element | JSX.Element[];
  color?: string;
  size?: number;
}

export default ({ children, loading }: Props) => {
  return (
    <>
      <Dimmer active={loading}>
        <Loader size="medium">Loading</Loader>
      </Dimmer>
      {children}
    </>
  );
};
