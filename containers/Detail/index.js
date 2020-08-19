import React from 'react';
import {Card, Button, Text} from 'react-native-elements';
import {StyledImage, Section, Title, BottomSection, StatsContainer} from './styled';

const Detail = ({navigation, route}) => {
  const {data} = route.params;
  return (
    <Card>
      <Text h4>{data.name}</Text>
      <StyledImage
        source={{
          uri:
            data.extra_data &&
            data.extra_data.sprites &&
            data.extra_data.sprites.front_default,
        }}
      />
      <Section>
        <Title>Tipos:</Title>
        {data.extra_data &&
          data.extra_data.types &&
          data.extra_data.types.map(({type: {name}}, i) => (
            <Text key={i}>{name}</Text>
          ))}
      </Section>
      <Section>
        <Title>Habilidades:</Title>
        {data.extra_data &&
          data.extra_data.abilities.map(({ability: {name}}, i) => (
            <Text key={i}>{name}</Text>
          ))}
      </Section>
      <BottomSection>
        {data.extra_data &&
          data.extra_data.stats.map(({base_stat, stat: {name}}, i) => (
            <StatsContainer key={i}>
              <Text>{name} - </Text>
              <Text>{base_stat}</Text>
            </StatsContainer>
          ))}
      </BottomSection>
      <Button title="Regresar" onPress={() => navigation.goBack()} />
    </Card>
  );
};

export default Detail;
