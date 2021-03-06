import './modal.css';
import React from "react";
import { Swiperwrapper, MovieCard, CardImg, Swiperslide , MovieName } from './styles';

const TrendingMovie = ({ trendingMovies, query, getModalData }) => {
  return (
    <div>
      {
        query === '' && (
          <div className="swiper-container">
            <p className="trending-movie-title">Trending Movies</p>
            {
              trendingMovies !== undefined &&
              <Swiperwrapper className="swiper-wrapper">
                {
                  trendingMovies.map((data, index) => {
                    return (
                      <Swiperslide className="swiper-slide" key={index} onClick={() => getModalData(data.id, 'movie')}>
                        <MovieCard>
                          <CardImg src={`https://image.tmdb.org/t/p/original${data.poster_path}`} alt="1212"></CardImg>
                          <MovieName>{data.title}</MovieName>
                        </MovieCard>
                      </Swiperslide>
                    )
                  })
                }
              </Swiperwrapper>
            }
            <div className="swiper-pagination"></div>
          </div>
        )
      }
    </div>
  );
};

export default TrendingMovie;