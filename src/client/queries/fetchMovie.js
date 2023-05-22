const fetchMovie = async ({ queryKey }) => {
  const movie = queryKey[0];
  const apiRes = await fetch(
    `https://imdb-api.com/en/API/SearchMovie/k_63snrs0m/${movie}`
  );
  if (!apiRes.ok) throw new Error(`Error in fetchMovie func`);
  return apiRes.json();
};
export default fetchMovie;
