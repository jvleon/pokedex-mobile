import React from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';
import {StyledCard, StyledImage} from './styled';

const FunctionalButton = ({data}) => {
  const navigation = useNavigation();
  return (
    <Button
      title="Ver mas"
      type="outline"
      onPress={() => navigation.navigate('Detail', {data})}
    />
  );
};

const CustomCard = ({item: {name, extra_data}}) => {
  return (
    <>
      <StyledCard title={name}>
        <View>
          <StyledImage
            source={{
              uri:
                extra_data &&
                extra_data.sprites &&
                extra_data.sprites.front_default,
            }}
          />
        </View>
        <View>
          <FunctionalButton data={{name, extra_data}} />
        </View>
      </StyledCard>
    </>
  );
};

export default CustomCard;
