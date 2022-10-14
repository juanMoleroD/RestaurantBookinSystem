package com.example.backend.controllers;


import com.example.backend.models.Customer;
import com.example.backend.repositories.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.RequestEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/customers")
public class CustomerController {

    @Autowired
    CustomerRepository customerRepository;

    @GetMapping
    List<Customer> getCustomers(){
        return customerRepository.findAll();
    }

    @GetMapping("/{id}")
    ResponseEntity<Optional<Customer>> getCustomerById(@PathVariable Long id){
        return new ResponseEntity<>(customerRepository.findById(id), HttpStatus.ACCEPTED);
    }

    @PostMapping
    ResponseEntity<Customer> addNewCustomer(@RequestBody Customer customer){
        return new ResponseEntity<>(customerRepository.save(customer), HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    ResponseEntity<Customer> deleteCustomerById(@PathVariable Long id){
        customerRepository.deleteById(id);
        return new ResponseEntity<>(null, HttpStatus.OK);
    }

    @PutMapping("/{id}")
    ResponseEntity<Customer> updateCustomerById(@PathVariable Long id, @RequestBody Customer customer){
        if(customerRepository.findById(id).isPresent()) return new ResponseEntity<>(customerRepository.save(customer), HttpStatus.OK);
        return new ResponseEntity(customerRepository.save(customer), HttpStatus.CREATED) ;
    }



}
