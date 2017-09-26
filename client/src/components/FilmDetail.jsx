import React from 'react';

const FilmDetail = ({ film }) => {

    if (!film) {
        return null;
    }

    return (
        <h3>
            {film.show_title}
        </h3>
    );

}


export default FilmDetail;