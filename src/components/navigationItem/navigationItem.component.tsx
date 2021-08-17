import React from 'react';

import {
  NavigationItemContainer,
  NavigationItemLink,
} from './navigationItem.styles';

interface NatigationProps {
  destination: string;
  children?: React.ReactNode;
}

const NavigationItem = ({destination, children}: NatigationProps) => {
  return (
    <NavigationItemContainer>
      <NavigationItemLink to={`/${destination}`} >
        {children}
      </NavigationItemLink>
    </NavigationItemContainer>
  );
};

export default NavigationItem;
