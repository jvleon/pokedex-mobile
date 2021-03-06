import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import InfiniteScroll from 'react-native-infinite-scrolling';
import {getPokedex} from '../../actions/';
import Card from '../../components/Card';
import Modal from '../../components/Modal';

const Home = ({pokemons, navigation, next, loading, ...props}) => {
  useEffect(() => {
    props.getPokedex();
  }, []);

  const onLoadMore = () => {
    props.getPokedex(next);
  };
  return (
    <>
      <InfiniteScroll renderData={Card} data={pokemons} loadMore={onLoadMore} />
      <Modal loading={loading} />
    </>
  );
};

const mapStateToProps = ({pokemons}) => ({
  pokemons: pokemons.pokemons,
  next: pokemons.next,
  loading: pokemons.loading,
});

const mapDispatchToProps = {
  getPokedex,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
