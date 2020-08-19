/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View} from 'react-native';
import {Card, Button, Image, Text} from 'react-native-elements';

const Detail = ({navigation, route}) => {
  const {data} = route.params;
  return (
    <Card>
      <Text h4>{data.name}</Text>
      <Image
        style={{height: 180}}
        source={{
          uri:
            data.extra_data &&
            data.extra_data.sprites &&
            data.extra_data.sprites.front_default,
        }}
      />
      <View style={{paddingBottom: 5, paddingTop: 5}}>
        <Text style={{fontSize: 20}}>Tipos:</Text>
        {data.extra_data &&
          data.extra_data.types &&
          data.extra_data.types.map(({type: {name}}, i) => (
            <Text key={i}>{name}</Text>
          ))}
      </View>
      <View style={{paddingBottom: 5, paddingTop: 5}}>
        <Text style={{fontSize: 20}}>Habilidades:</Text>
        {data.extra_data &&
          data.extra_data.abilities.map(({ability: {name}}, i) => (
            <Text key={i}>{name}</Text>
          ))}
      </View>
      <View
        style={{
          paddingBottom: 5,
          paddingTop: 5,
          display: 'flex',
          flexWrap: 'wrap',
          flexDirection: 'row'
        }}>
        {data.extra_data &&
          data.extra_data.stats.map(({base_stat, stat: {name}}, i) => (
            <View key={i} style={{width: '50%'}}>
              <Text>{name} - </Text>
              <Text>{base_stat}</Text>
            </View>
          ))}
      </View>
      <Button title="Regresar" onPress={() => navigation.goBack()} />
    </Card>
  );
};

export default Detail;
