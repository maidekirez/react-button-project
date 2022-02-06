import React from 'react';
// import ChangeThemeButton from './ChangeThemeButton';
import { BaseButton, StyledButton, PrimaryButton } from '../styledComponents';

const Home = (props) => {
  return (
    <>
      <h1>Home</h1>
      <BaseButton as="a" href="htpp://google.com.tr">
        Base Button
      </BaseButton>
      {/* link gibi davranır */}
      <StyledButton type="submit">Styled Button</StyledButton>
      <PrimaryButton variant="outline">Primary Button</PrimaryButton>
      <PrimaryButton >Primary Button</PrimaryButton>
      {/* <ChangeThemeButton /> */}
    </>
  );
};

export default Home;
