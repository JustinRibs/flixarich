import Results from "./Results";
import fetchMovie from "../queries/fetchMovie";
import { useQuery } from "react-query";
import { useState } from "react";
function Layout() {
  const [movie, setMovie] = useState("");
  const results = useQuery([movie], fetchMovie);
  console.log(results);
  const movies = results?.data?.results ?? [];
  return (
    <div className="m-5 grid grid-flow-col sm:grid-cols-1">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          let formData = new FormData(e.target);
          let movie = formData.get("movie") ?? "";
          setMovie(movie);
        }}
        className="rounded-lg border h-40 bg-sky-700 border-x-900 m-2 max-w-sm p-4 flex flex-col items-start justify-between shadow-xl shadow-cyan-900"
      >
        <div>
          <label className="text-lime-50" htmlFor="Movie Title">
            Movie Title:
          </label>
          <input
            name="movie"
            type="search"
            className="form-input px-2 py-1 rounded-full block mt-2"
            placeholder="Suicide Squad"
          />
        </div>

        <button
          className="bg-green-500 hover:bg-green-400 text-white font-bold py-2 px-2 border-b-4 border-green-700 hover:border-green-500 rounded"
          type="submit"
        >
          Search
        </button>
      </form>
      <Results movies={movies} />
    </div>
  );
}

export default Layout;
