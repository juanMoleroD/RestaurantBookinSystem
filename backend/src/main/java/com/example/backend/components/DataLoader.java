package com.example.backend.components;

import com.example.backend.models.Booking;
import com.example.backend.models.Customer;
import com.example.backend.repositories.BookingRepository;
import com.example.backend.repositories.CustomerRepository;

import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.time.LocalDate;
import java.time.LocalTime;
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
        Customer customer1 = new Customer();
        customer1.setBookings(new ArrayList<>());
        customer1.setName("Juan");

        Booking booking1 = new Booking();
        booking1.setTableNumber(1);
        booking1.setCustomer(customer1);
        booking1.setDate(LocalDate.of(2022,1,1));
        booking1.setTime(LocalTime.of(12, 00));

        customerRepository.save(customer1);
        bookingRepository.save(booking1);

        Customer customer2 = new Customer();
        customer2.setBookings(new ArrayList<>());
        customer2.setName("Alejandro");

        Booking booking2 = new Booking();
        booking2.setTableNumber(2);
        booking2.setCustomer(customer2);
        booking2.setDate(LocalDate.of(2022,5,15));
        booking2.setTime(LocalTime.of(13, 00));

        customerRepository.save(customer2);
        bookingRepository.save(booking2);

        Booking booking3 = new Booking();
        booking3.setTableNumber(3);
        booking3.setCustomer(customer2);
        booking3.setDate(LocalDate.of(2022,5,15));
        booking3.setTime(LocalTime.of(13, 00));

        bookingRepository.save(booking3);


        Booking booking4 = new Booking();
        booking4.setTableNumber(4);
        booking4.setCustomer(customer1);
        booking4.setDate(LocalDate.of(2022,5,15));
        booking4.setTime(LocalTime.of(13, 00));

        bookingRepository.save(booking4);


        Customer customer3 = new Customer();
        customer3.setName("Marcelo");
        customer3.setBookings(new ArrayList<>());


        Booking booking5 = new Booking();
        booking5.setTableNumber(5);
        booking5.setCustomer(customer3);
        booking5.setDate(LocalDate.of(2022,7,12));
        booking5.setTime(LocalTime.of(16, 00));


        customerRepository.save(customer3);
        bookingRepository.save(booking5);


        Customer customer4 = new Customer();
        customer4.setBookings(new ArrayList<>());
        customer4.setName("Ben");


        Booking booking6 = new Booking();
        booking6.setTableNumber(6);
        booking6.setCustomer(customer4);
        booking6.setDate(LocalDate.of(2022,9,12));
        booking6.setTime(LocalTime.of(19, 00));

        customerRepository.save(customer4);
        bookingRepository.save(booking6);




        Customer customer5 = new Customer();
        customer5.setBookings(new ArrayList<>());
        customer5.setName("Steve");


        Booking booking7 = new Booking();
        booking7.setTableNumber(7);
        booking7.setCustomer(customer5);
        booking7.setDate(LocalDate.of(2022,12,01));
        booking7.setTime(LocalTime.of(11, 00));

        customerRepository.save(customer5);
        bookingRepository.save(booking7);


    }



}
