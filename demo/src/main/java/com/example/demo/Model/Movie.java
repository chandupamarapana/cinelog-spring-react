package com.example.demo.Model;

import jakarta.persistence.*;
import lombok.Data;
import org.hibernate.Length;

import java.time.LocalDate;

@Entity
@Table(name = "movies")
public class Movie {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String title;
    private Integer rating; // 1 to 5 stars

    @Column(length = 1000)
    private String review;

    private LocalDate dateWatched;

    public long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public Integer getRating() {
        return rating;
    }

    public String getReview() {
        return review;
    }

    public LocalDate getDateWatched() {
        return dateWatched;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public void setRating(Integer rating) {
        this.rating = rating;
    }

    public void setReview(String review) {
        this.review = review;
    }

    public void setDateWatched(LocalDate dateWatched) {
        this.dateWatched = dateWatched;
    }
}
