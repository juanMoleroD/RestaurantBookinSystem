package com.example.backend.components;

import com.example.backend.models.Booking;
import com.example.backend.models.Customer;
import com.example.backend.repositories.BookingRepository;
import com.example.backend.repositories.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.awt.*;
import java.awt.print.Book;
import java.time.LocalDate;
import java.util.ArrayList;

@Component
public class DataLoader {

    BookingRepository bookingRepository;
    CustomerRepository customerRepository;

    public DataLoader(BookingRepository bookingRepository, CustomerRepository customerRepository) {
        this.bookingRepository = bookingRepository;
        this.customerRepository = customerRepository;
    }

    @PostConstruct
    public void setup() {
        Customer customer = new Customer();
        customer.setBookings(new ArrayList<>());
        customer.setName("Juan");

        Booking booking = new Booking();
        booking.setTableNumber(1);
        booking.setCustomer(customer);
        booking.setDate(LocalDate.of(2022,1,1));

        customerRepository.save(customer);
        bookingRepository.save(booking);
    }

}
