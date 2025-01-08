package com.group.libraryapp.domain.user;

import org.springframework.context.annotation.Profile;
import org.springframework.data.jpa.repository.JpaRepository;

@Profile("dev")
public interface UserRepository extends JpaRepository<User, Long> {

    User findByName(String name);

}
