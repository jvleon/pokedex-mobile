import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import InfiniteScroll from 'react-native-infinite-scrolling';
import {fetchBerries} from '../../actions/';
import Modal from '../../components/Modal';
import BerriesCard from '../../components/BerriesCard';

const BerriesContainer = ({berries, navigation, next, loading, ...props}) => {
  useEffect(() => {
    props.fetchBerries();
  }, []);

  const onLoadMore = () => {
    props.fetchBerries(next);
  };

  return (
    <>
      <InfiniteScroll
        renderData={BerriesCard}
        data={berries}
        loadMore={onLoadMore}
      />
      <Modal loading={loading} />
    </>
  );
};

const mapStateToProps = ({berries}) => ({
  berries: berries.berries,
  next: berries.next,
  loading: berries.loading,
});

const mapDispatchToProps = {
  fetchBerries,
};

export default connect(mapStateToProps, mapDispatchToProps)(BerriesContainer);
