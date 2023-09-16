import React from "react";
import Header from "../components/landing/Header";
import Footer from "../utilities/footer";
import MovieList from "../components/landing/MovieList";

function HomePage() {
  return (
    <div>
      <Header />
      <MovieList />
      <Footer />
    </div>
  );
}

export default HomePage;
