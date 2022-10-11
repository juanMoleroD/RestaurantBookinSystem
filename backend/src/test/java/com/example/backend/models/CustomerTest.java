package com.example.backend.models;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class CustomerTest {

    Customer customer = new Customer("Guachin");

    @Test
    void hasName() {
        assertEquals("Guachin", customer.getName());
    }

    @Test
    void canChangeName() {
        customer.setName("ElGarchota");
        assertEquals("ElGarchota", customer.getName());
    }

}