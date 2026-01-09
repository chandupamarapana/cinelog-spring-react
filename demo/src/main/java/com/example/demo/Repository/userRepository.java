package com.example.demo.Repository;

import com.example.demo.Model.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface userRepository extends JpaRepository<User, Long> {
    // we need this to find users during login
    Optional<User> findByUsername(String username);

    //we need this for registration checks
    Boolean existsByUsername(String username);
    Boolean existsByEmail (String email);

}
