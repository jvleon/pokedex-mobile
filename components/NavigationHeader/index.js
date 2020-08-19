import React from 'react';
import {Icon} from 'react-native-elements';
import {TouchableOpacity} from 'react-native';
import {Container, ButtonContainer, TitleContainer, Title} from './styled';

const HeaderNavigation = ({navigation}) => (
  <Container>
    <ButtonContainer>
      <TouchableOpacity onPress={() => console.log(navigation.toggleDrawer())}>
        <Icon name="bars" type="font-awesome" color="black" />
      </TouchableOpacity>
    </ButtonContainer>
    <TitleContainer>
      <Title>Pokedex</Title>
    </TitleContainer>
  </Container>
);

export default HeaderNavigation;
