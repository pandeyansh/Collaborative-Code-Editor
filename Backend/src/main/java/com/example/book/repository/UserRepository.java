package com.example.book.repository;

import org.springframework.boot.autoconfigure.security.SecurityProperties.User;
import org.springframework.data.jpa.repository.JpaRepository;

import com.example.book.entity.Users;

public interface UserRepository extends JpaRepository<Users, Integer>{

	Users findByUsername(String username);

	void save(User user);
       
}
