import React from 'react';

class FilmSelector extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedIndex: undefined
        }
    }

    handleChange(e) {
        this.setState({selectedIndex: e.target.value})

        this.props.handleSelectedFilm(this.props.films[e.target.value])
    }


    render() {

        const films = this.props.films.map((film, index) => {
            return (
                <option value={index} key={index}>{film.show_title}</option>
            )
        })

        return (
            <select id="films" value={this.state.selectedIndex} onChange={this.handleChange.bind(this)}>
                <option>Film Selector</option>
                {films}
            </select>
        )
    }

}

export default FilmSelector;