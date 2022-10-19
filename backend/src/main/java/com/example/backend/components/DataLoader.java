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
        customer1.setName("Delia");
        customerRepository.save(customer1);

        Customer customer2 = new Customer();
        customer2.setBookings(new ArrayList<>());
        customer2.setName("Jaide");
        customerRepository.save(customer2);

        Customer customer3 = new Customer();
        customer3.setName("Marcelo");
        customer3.setBookings(new ArrayList<>());
        customerRepository.save(customer3);

        Customer customer4 = new Customer();
        customer4.setBookings(new ArrayList<>());
        customer4.setName("Steve");
        customerRepository.save(customer4);

        Customer customer5 = new Customer();
        customer5.setBookings(new ArrayList<>());
        customer5.setName("Ben");
        customerRepository.save(customer5);




        Booking booking1 = new Booking();
        booking1.setTableNumber(1);
        booking1.setCustomer(customer1);
        booking1.setDate(LocalDate.of(2022,11,1));
        booking1.setTime(LocalTime.of(12, 00));
        bookingRepository.save(booking1);

        Booking booking2 = new Booking();
        booking2.setTableNumber(3);
        booking2.setCustomer(customer2);
        booking2.setDate(LocalDate.of(2022,11,1));
        booking2.setTime(LocalTime.of(13, 00));
        bookingRepository.save(booking2);

        Booking booking3 = new Booking();
        booking3.setTableNumber(5);
        booking3.setCustomer(customer2);
        booking3.setDate(LocalDate.of(2022,11,1));
        booking3.setTime(LocalTime.of(11, 00));
        bookingRepository.save(booking3);


        Booking booking4 = new Booking();
        booking4.setTableNumber(8);
        booking4.setCustomer(customer1);
        booking4.setDate(LocalDate.of(2022,11,1));
        booking4.setTime(LocalTime.of(12, 00));
        bookingRepository.save(booking4);

        Booking booking5 = new Booking();
        booking5.setTableNumber(5);
        booking5.setCustomer(customer3);
        booking5.setDate(LocalDate.of(2022,11,2));
        booking5.setTime(LocalTime.of(16, 00));
        bookingRepository.save(booking5);

        Booking booking6 = new Booking();
        booking6.setTableNumber(6);
        booking6.setCustomer(customer4);
        booking6.setDate(LocalDate.of(2022,11,2));
        booking6.setTime(LocalTime.of(17, 00));
        bookingRepository.save(booking6);


        Booking booking7 = new Booking();
        booking7.setTableNumber(3);
        booking7.setCustomer(customer5);
        booking7.setDate(LocalDate.of(2022,11,2));
        booking7.setTime(LocalTime.of(17, 00));
        bookingRepository.save(booking7);



        Booking booking8 = new Booking();
        booking8.setTableNumber(2);
        booking8.setCustomer(customer4);
        booking8.setDate(LocalDate.of(2022,11,2));
        booking8.setTime(LocalTime.of(18, 30));
        bookingRepository.save(booking8);

        Booking booking9 = new Booking();
        booking9.setTableNumber(8);
        booking9.setCustomer(customer2);
        booking9.setDate(LocalDate.of(2022,11,2));
        booking9.setTime(LocalTime.of(17, 30));
        bookingRepository.save(booking9);

        Booking booking10 = new Booking();
        booking10.setTableNumber(1);
        booking10.setCustomer(customer1);
        booking10.setDate(LocalDate.of(2022,11,2));
        booking10.setTime(LocalTime.of(15, 00));
        bookingRepository.save(booking10);
    }
}
