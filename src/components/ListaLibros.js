import React, { useState, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import BookCard from "./BookCard";
import { GetLibrosByVolumes, getLibrosBySearch } from "../services/libros";
import Search from "./Search";
/*
class ListaLibros extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      libros: [],
      isFetch: true,
      notFound: false,
    };
  }

  async componentDidMount() {
    const responseJson = await GetLibrosByVolumes();
    this.setState({ libros: responseJson.items, isFetch: false });
  }

  search = async (search) => {
    const responseJson = await getLibrosBySearch(search);
    if (responseJson.totalItems > 0) {
      this.setState({
        libros: responseJson.items,
        notFound: false,
      });
    } else {
      this.setState({
        libros: [],
        notFound: typeof responseJson.items === "undefined",
      });
    }
  };

  render() {
    const { libros, search, isFetch, notFound } = this.state;
    if (this.state.isFetch) {
      return "Loading...";
    }

    return (
      <>
        <Search search={search} />
        {isFetch && "loading..."}

        {notFound && "No books found"}
        <div className="book-card-root">
          <Grid container spacing={3}>
            {this.state.libros.map((libro) => (
              <BookCard
                name={libro.volumeInfo.title}
                subtitle={libro.volumeInfo.subtitle}
                id={libro.id}
                key={libro.id}
                imageUrl="https://cdn.pixabay.com/photo/2017/01/13/14/26/book-1977396_960_720.png"
              />
            ))}
          </Grid>
        </div>
      </>
    );
  }
}

export default ListaLibros;*/

const ListaLibros = () => {
  const [isFetch, setIsFetch] = useState(true);
  const [libros, setLibros] = useState([]);
  const [notFound, setNotFound] = useState(null);

  /*async componentDidMount() {
    const responseJson = await GetLibrosByVolumes();
    this.setState({ libros: responseJson.items, isFetch: false });
  }*/

  useEffect(async () => {
    const responseJson = await GetLibrosByVolumes();
    console.log(responseJson);
    if (responseJson.totalItems > 0) {
      setLibros(responseJson.items);
      setNotFound(false);
      setIsFetch(false);
    }
  }, []);

  const search = async (search) => {
    setLibros([]);
    setIsFetch(true);

    const responseJson = await getLibrosBySearch(search);
    if (responseJson.totalItems > 0) {
      setLibros(responseJson.items);
      setNotFound(false);
      setIsFetch(false);
    } else {
      setLibros([]);
      setIsFetch(false);
      setNotFound(typeof responseJson.items === "undefined");
    }
  };

  return (
    <>
      <Search search={search} />
      {isFetch && "loading..."}

      {notFound && "No books found"}
      <div className="book-card-root">
        <Grid container spacing={3}>
          {libros.map((libro) => (
            <BookCard
              name={libro.volumeInfo.title}
              subtitle={libro.volumeInfo.subtitle}
              id={libro.id}
              key={libro.id}
              imageUrl="https://cdn.pixabay.com/photo/2017/01/13/14/26/book-1977396_960_720.png"
            />
          ))}
        </Grid>
      </div>
    </>
  );
};

export default ListaLibros;
