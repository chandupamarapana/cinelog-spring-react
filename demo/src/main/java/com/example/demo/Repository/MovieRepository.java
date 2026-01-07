package com.example.demo.Repository;

import com.example.demo.Model.Movie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public class MovieRepository extends JpaRepository<Movie, Long> {
    // this is an empty repository gives us all the CRUD operations automatically

}
