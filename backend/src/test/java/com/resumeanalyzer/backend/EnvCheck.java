package com.resumeanalyzer.backend;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class EnvCheck implements CommandLineRunner {

    @Value("${SPRING_DATASOURCE_URL:NOT_FOUND}")
    private String url;

    @Override
    public void run(String... args) {
        System.out.println("SPRING_DATASOURCE_URL = " + url);
    }
}