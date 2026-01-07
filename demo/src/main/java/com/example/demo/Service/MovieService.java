package com.example.demo.Service;

import com.example.demo.Model.Movie;
import com.example.demo.Repository.MovieRepository;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;

@Service
public class MovieService {
    private final MovieRepository movieRepository;
    public MovieService(MovieRepository movieRepository) {
        this.movieRepository = movieRepository;
    }
        public List<Movie> getAllMovies(){
            return movieRepository.findAll();
        }
        public List<Movie> saveMovie(Movie movie){
        return Collections.singletonList(movieRepository.save(movie));
        }
    }

