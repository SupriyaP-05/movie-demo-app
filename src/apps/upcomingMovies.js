import './modal.css';
import React from "react";
import { Swiperwrapper, MovieCard, CardImg, MovieName } from './styles';

const UpcomingMovies = ({ movieList, query, getModalData }) => {
  return (
    <div style={{paddingTop: "20px"}}>
      {
        query !== '' ?
          <p className="upcoming-movie-title">Movies</p>
          :
          <p className="upcoming-movie-title">Upcoming Movies</p>
      }
      <div className="swiper-container">
        {
          movieList !== undefined &&
          <Swiperwrapper className="swiper-wrapper">
            {
              movieList.map((data, index) => {
                console.log(data, 'data');
                return (
                  <div className="swiper-slide" key={index} onClick={() => getModalData(data.id, 'movie')}>
                    <MovieCard>
                      <CardImg src={`https://image.tmdb.org/t/p/original${data.poster_path}`} alt="1212">
                      </CardImg>
                      <MovieName>{data.title}</MovieName>
                    </MovieCard>
                  </div>
                )
              })
            }
          </Swiperwrapper>
        }
      </div>
    </div>
  );
};

export default UpcomingMovies;