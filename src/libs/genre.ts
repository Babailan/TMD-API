function genre(name: string[] | string, genres: Array<any>) {
  for (let i = 0; i < genres.length; i++) {
    if (name === genres[i].name) {
      return genres[i].id;
    }
  }

  return "No result";
}

export default genre;
