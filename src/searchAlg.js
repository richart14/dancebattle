export const songSearch = (searchTerm, songArray) => {
  let result = [];
  const re = new RegExp(`.*${searchTerm}.*`, 'i');
  songArray.forEach(song => re.test(song.title) ? result.push(song) : '');
  return result;
}