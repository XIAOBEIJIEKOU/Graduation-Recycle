package com.example.rubbish;

import org.mybatis.spring.annotation.MapperScan;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
@MapperScan("com.example.rubbish.dao")
public class RubbishApplication {

    public static void main(String[] args) {
        SpringApplication.run(RubbishApplication.class, args);
    }

}
