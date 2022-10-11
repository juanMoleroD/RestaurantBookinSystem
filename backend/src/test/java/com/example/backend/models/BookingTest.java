package com.example.backend.models;

import org.junit.jupiter.api.Test;

import java.time.LocalDate;
import java.util.Date;

import static org.junit.jupiter.api.Assertions.*;


class BookingTest {

    Booking booking = new Booking(1L);

    @Test
    void hasFinalUniqueID() {
        assertEquals(1L, booking.getId());
//        assertThrows(booking.setId(1L));

    }

    @Test
    void hasDate() {
        LocalDate date = LocalDate.of(2022, 10, 20);
        assertEquals(date, booking.getDate());
    }
}