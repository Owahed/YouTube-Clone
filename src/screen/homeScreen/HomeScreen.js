import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import Skeleton from "react-loading-skeleton";
import { useDispatch, useSelector } from "react-redux";
import CategoriesBar from "../../components/categoriesBar/CategoriesBar";
import SkeletonVideo from "../../components/Skeletons/SkeletonVideo";
import Video from "../../components/video/Video";
import {
  getPopularVideos,
  getVideoByCategory,
} from "../../redux/actions/video.action";

const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  const { videos, activeCategory, loading } = useSelector(
    (state) => state.homeVideos
  );

  const fetchData = () => {
    if (activeCategory === "All") dispatch(getPopularVideos());
    else {
      dispatch(getVideoByCategory(activeCategory));
    }
  };

  return (
    <Container>
      <CategoriesBar />
      <Row>
        <InfiniteScroll
          className="row"
          dataLength={videos.length}
          next={fetchData}
          hasMore={true}
          loader={
            <div className="spinner-border text-danger d-block mx-auto "></div>
          }
        >
          {!loading
            ? videos.map((video) => (
                <Col lg={3} md={4}>
                  <Video key={video.id} video={video} />
                </Col>
              ))
            : [
                ...Array(20).map(() => (
                  <Col lg={3} md={4}>
                    <SkeletonVideo />
                  </Col>
                )),
              ]}
        </InfiniteScroll>
      </Row>
    </Container>
  );
};

export default HomeScreen;
