package com.example.demo.Repository;

import com.example.demo.Model.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

public interface MovieRepository extends JpaRepository<Movie,Long> {
    //this empty repo will give the crud operations automatically
}
