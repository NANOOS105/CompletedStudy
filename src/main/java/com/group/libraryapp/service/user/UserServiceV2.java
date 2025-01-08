package com.group.libraryapp.service.user;

import com.group.libraryapp.domain.user.User;
import com.group.libraryapp.domain.user.UserRepository;
import com.group.libraryapp.dto.user.request.UserCreateRequest;
import com.group.libraryapp.dto.user.request.UserUpdateRequest;
import com.group.libraryapp.dto.user.response.UserResponse;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserServiceV2 {
    private final UserRepository userRepository;

    public UserServiceV2(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    //아래에 있는 함수가 시작될 대 start transaction; 을 해줌
    //함수가 예외 없이 잘 끝났다면 commit
    //혹시라도 문제가 있다면 rollback

    @Transactional
    public void saveUser(UserCreateRequest request) {
        userRepository.save(new User(request.getName(), request.getAge()));
    }

//    public List<UserResponse> getUsers(){
//        List<User> users = userRepository.findAll();
//        return users.stream()
//                .map(user -> new UserResponse(user.getId(),user.getName(),user.getAge()))
//                .collect(Collectors.toList());
//    }

    @Transactional(readOnly = true)
    public List<UserResponse> getUser(){
        return userRepository.findAll().stream()
                .map(UserResponse::new)
                .collect(Collectors.toList());
    }

    @Transactional
    public void updateUser(UserUpdateRequest request) {
        User user = userRepository.findById(request.getId())
                .orElseThrow(IllegalArgumentException::new);

        user.updateName(request.getName());
        //세이브를 적지 않아도 변경 감지해서 자동으로 업데이트
    }

    @Transactional
    public void deleteUser(String name) {
        User user = userRepository.findByName(name);
        if (user == null) {
            throw new IllegalArgumentException();
        }
        userRepository.delete(user);
    }
}
