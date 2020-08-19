import React from 'react';
import {View} from 'react-native';
import {Card, Button, Image} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

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
      <Card title={name} style={{height: 300, width: 200}}>
        <View>
          <Image
            style={{height: 300}}
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
      </Card>
    </>
  );
};

export default CustomCard;
