import React, {Component} from "react";  // shortcut imrc
import { getMovies } from '../services/fakeMovieService';  // shortcut cc

class Movies extends Component {

    state = {
        movies : getMovies()
    };

    render () {
    return <table className="table">
        <thead>
            <tr>
                <th>Title</th>
                <th>Genre</th>
                <th>Stock</th>
                <th>Rate</th>
            </tr>
        </thead>
        <tbody>
            {this.state.movies.map(movie=>
            <tr>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>{movie.dailyRentalRate}</td>
            </tr>
            )}
        </tbody>
    </table>
    };



}

export default Movies;