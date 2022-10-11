package com.example.backend.models;

public class Booking {

    private Long id;


    public Booking(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
