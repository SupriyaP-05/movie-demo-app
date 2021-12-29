import './modal.css';
import React from "react";
import { Swiperwrapper, MovieCard, CardImg, Swiperslide, MovieName } from './styles';

const TVShows = ({ tvShows, query, getModalData }) => {
    return (
        <div>
            {
                query !== '' && (
                    <div className="swiper-container">
                        <p className="tv-shows-title">Tv Shows</p>
                        {
                            tvShows !== undefined &&
                            <Swiperwrapper className="swiper-wrapper">
                                {
                                    tvShows.map((data, index) => {
                                        return (
                                            <Swiperslide className="swiper-slide" key={index} onClick={() => getModalData(data.id, 'tv')}>
                                                <MovieCard>
                                                    <CardImg src={`https://image.tmdb.org/t/p/original${data.poster_path}`} alt="1212"></CardImg>
                                                    <MovieName>{data.original_name}</MovieName>
                                                </MovieCard>
                                            </Swiperslide>
                                        )
                                    })
                                }
                            </Swiperwrapper>
                        }
                    </div>
                )
            }
        </div>
    );
};

export default TVShows;