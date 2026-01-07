package com.example.demo.Controller;

import com.example.demo.Model.Movie;
import com.example.demo.Service.MovieService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/movies")
@CrossOrigin(origins = "http://localhost:5173") // Port 5173 is default for Vite/React
public class MovieController {
    private final MovieService service;

    public MovieController(MovieService service){
        this.service = service;
    }

    @GetMapping
    public List<Movie> getMovies(){
        return service.getAllMovies();
    }

    @PostMapping
    public List<Movie> addMovie(@RequestBody Movie movie){
        return service.saveMovie(movie);
    }

}
