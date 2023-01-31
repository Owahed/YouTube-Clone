import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
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

  return (
    <Container>
      <CategoriesBar />
      <Row>
        {videos.map((video) => (
          <Col key={video.id} lg={3} md={4}>
            <Video video={video} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HomeScreen;
