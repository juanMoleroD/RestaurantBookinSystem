package com.example.backend.controllers;

import com.example.backend.models.Booking;
import com.example.backend.repositories.BookingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/bookings")
public class BookingController {

    @Autowired
    BookingRepository repo;

    @GetMapping
    List<Booking> getAllBookings() {
        return repo.findAll();
    }

    @GetMapping("/{id}")
    ResponseEntity <Optional<Booking>> getBookingById(@PathVariable Long id){
        return new ResponseEntity<>(repo.findById(id), HttpStatus.OK);

    }

    @PostMapping
    ResponseEntity <Booking> addNewBooking(@RequestBody Booking booking){
        return new ResponseEntity<>(repo.save(booking), HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    ResponseEntity<Booking> deleteBookingById(@PathVariable Long id){
        repo.deleteById(id);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    ResponseEntity<Booking> updateBookingById(@PathVariable Long id, @RequestBody Booking booking){
        if(repo.findById(id).isPresent()) return new ResponseEntity<>(repo.save(booking), HttpStatus.OK); //updated
        return new ResponseEntity<>(repo.save(booking), HttpStatus.CREATED);
    }
}
