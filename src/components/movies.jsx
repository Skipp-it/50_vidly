import React, {Component} from "react";  // shortcut imrc
import { getMovies } from '../services/fakeMovieService';  // shortcut cc

class Movies extends Component {

    state = {
        movies : getMovies()
    };

    handleDelete = movie =>{
        const movies = this.state.movies.filter(m => m._id !== movie._id);
        this.setState({movies}) // in loc de ({movies : movies}) se poate scrie ({movies})
    }

    render () {
const {length : count} = this.state.movies;

        if (count === 0){
            return <p>There are no movies in database.</p>
        }

    return (
    <React.Fragment>
    <p>Showing {count} movies from database</p>
        <table className="table">
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Genre</th>
                    <th>Stock</th>
                    <th>Rate</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {this.state.movies.map(movie=>
                <tr id={movie._id} key={movie._id}>
                    <td>{movie.title}</td>
                    <td>{movie.genre.name}</td>
                    <td>{movie.numberInStock}</td>
                    <td>{movie.dailyRentalRate}</td>
                    <td><button className="btn btn-danger btn-sm" onClick={()=>this.handleDelete(movie)} >Delete</button>
                    </td>
                </tr>
                )}
            </tbody>
        </table> 
    </React.Fragment>
    )};



    
}

export default Movies;