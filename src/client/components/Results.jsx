import Movie from "./Movie";

function Results({ movies }) {
  movies = movies.slice(0, 10);
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 m-5">
      {movies.length ? (
        movies.map((movie) => {
          return (
            <Movie
              title={movie.title}
              image={movie.image}
              description={movie.description}
            />
          );
        })
      ) : (
        <p className="text-white">No movies found!</p>
      )}
    </div>
  );
}
export default Results;
