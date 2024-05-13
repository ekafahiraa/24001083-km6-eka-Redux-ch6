import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./App.css";
import { setCurrentSlide } from "./redux/reducers/movieReducers";

export default function LandingPage() {
  const dispatch = useDispatch();
  const currentSlide = useSelector((state) => state?.movies?.currentSlide);
  const popularMovies = useSelector((state) => state?.movies?.movies);
  console.log("popular movies: ", popularMovies);

  // Mengatur interval untuk mengganti slide setiap 3 detik
  useEffect(() => {
    const interval = setInterval(() => {
      // Membersihkan interval jika tidak lagi digunakan
      dispatch(setCurrentSlide((currentSlide + 1) % popularMovies?.length));
    }, 3000); // Bergantung pada nilai slide saat ini dan daftar popularMovies

    return () => clearInterval(interval);
  }, [currentSlide, dispatch, popularMovies?.length]);

  return (
    <div
      style={{
        fontFamily: "Sans-Serif",
      }}
    >
      <div>
        <Navbar />
      </div>
      <>
        <div className="carousel">
          {popularMovies?.map((movie, index) => (
            <div
              key={index}
              className={`carousel-slide ${
                index === currentSlide ? "show" : ""
              }`}
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
              }}
            >
              <div className="overlay flex flex-col items-start justify-end h-full px-6 pb-10 text-white">
                <h1 className="text-6xl l:text-4xl lg:text-4xl text-white font-semibold mb-3 max-w-md">
                  "{movie.title}"
                </h1>
                <p className="text-white text-sm md:text-base max-w-md">
                  <span style={{ fontStyle: "italic" }}>
                    {movie.overview.slice(0, 100)}...
                  </span>
                </p>
              </div>
            </div>
          ))}
        </div>
      </>
      <div>
        <Footer />
      </div>
    </div>
  );
}
