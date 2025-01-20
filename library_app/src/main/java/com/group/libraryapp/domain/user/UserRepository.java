package com.group.libraryapp.domain.user;

import org.springframework.context.annotation.Profile;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

@Profile("dev")
public interface UserRepository extends JpaRepository<User, Long> {

    Optional<User> findByName(String name);

}
