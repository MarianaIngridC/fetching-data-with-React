import React from 'react'

const IMG_API ="https://image.tmdb.org/t/p/w500";

const setVoteClass = (vote) => {
	if(vote >= 8) {
		return "green";
	} else if (vote >= 6) {
		return "orange";
	} else {
		return "red";
	}
}


const Movie = ({title,poster_path, overview, vote_average }) => {
	return (
		<div className="movie">
			{/* if the poster exist in the API then take it and show it, if not take this image by default for all movies wich don't have a poster*/}
			<img src={poster_path ? (IMG_API + poster_path) : 'https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=740&q=80'} alt={title}/>
			<div className="movie-info">
				<h3>{title}</h3>
				<span className={`tag ${setVoteClass(vote_average)}`}>{vote_average}</span>
			</div>
			<div className="movie-over">
				<h2>Overview</h2>
				<p>{overview}</p>
			</div>
		</div>
	)
}

export default Movie