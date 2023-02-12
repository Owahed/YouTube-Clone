import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import CategoriesBar from "../../components/categoriesBar/CategoriesBar";
import Video from "../../components/video/Video";
import { getPopularVideos } from "../../redux/actions/video.action";

const HomeScreen = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPopularVideos());
  }, [dispatch]);

  const { videos } = useSelector((state) => state.homeVideos);
  const fetchData = () => {
    //Next
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
          {videos.map((video) => (
            <Col key={video.id} lg={3} md={4}>
              <Video video={video} />
            </Col>
          ))}
        </InfiniteScroll>
      </Row>
    </Container>
  );
};

export default HomeScreen;
