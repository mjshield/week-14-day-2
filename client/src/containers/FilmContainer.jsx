import React, { Component } from 'react';
import FilmSelector from '../components/FilmSelector'
import FilmDetail from '../components/FilmDetail'

class FilmContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            films: [],
            selectedFilm: null
        };
        this.handleSelectedFilm = this.handleSelectedFilm.bind(this);
    }

    handleSelectedFilm(film) {
        this.setState({selectedFilm: film})
    }


    componentDidMount() {
        fetch("https://netflixroulette.net/api/api.php?actor=Donald%20Sutherland")
        .then((res) => res.json())
        .then((res) => this.setState({ films: res, selectedFilm: res[0]}));
    }


    render() {

        return (
            <div>
                <h2>Sutherland Films</h2>
                <FilmSelector films={this.state.films} handleSelectedFilm = {this.handleSelectedFilm}/>
                {/* <FilmDetail film={this.selectedFilm}/> */}
            </div>
        )
    }

}

export default FilmContainer;