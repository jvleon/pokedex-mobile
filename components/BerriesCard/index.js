import React from 'react';
import {Card, Text} from 'react-native-elements';
import {Section, Title} from './styled';

const BerriesCard = ({item: {name, data}}) => {
  return (
    <Card>
      <Title>{name}</Title>
      <Section>
        <Text>Tamaño: {data.size}</Text>
        <Text>Tiempo de crecimiento: {data.growth_time}</Text>
        <Text>Maxima cosecha: {data.max_harvest}</Text>
      </Section>
    </Card>
  );
};

export default BerriesCard;
