export const getGifs = async (category) => {
  const q = encodeURI(category);
  const apiKey = 'IVvDYEH7PqiEY09DwKEOCMICNYz4l49o';
  const limit = '10';
  const url = `https://api.giphy.com/v1/gifs/search?q=${q}&limit=${limit}&api_key=${apiKey}`;

  const resp = await fetch(url);
  const { data } = await resp.json();
  const gifs = data.map((img) => ({
    id: img.id,
    title: img.title,
    url: img.images?.downsized_medium.url,
  }));

  return gifs;
};
