package com.group.libraryapp.domain.user;

import javax.persistence.*;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY) //AUTO INCREMENT
    private Long id = null;

    @Column(nullable = false, length = 20) //어노테이션 생략 가능
    private String name;
    private Integer age;

    protected User(){}

    public User(String name, Integer age) {
        if (name == null || name.isBlank()) {
            throw new IllegalArgumentException(String.format("잘못된 name(%s)이 들어왔습니다", name));
        }
        this.name = name;
        this.age = age;
    }

    public Integer getAge() {
        return age;
    }

    public String getName() {
        return name;
    }

    public Long getId() {
        return id;
    }

    public void updateName(String name){
        this.name = name;
    }
}
