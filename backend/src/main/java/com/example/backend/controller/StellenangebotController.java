package com.example.backend.controller;

import com.example.backend.entity.Stellenangebot;
import com.example.backend.repository.StellenangebotRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class StellenangebotController {

private final StellenangebotRepository stellenangebotRepository;

    @Autowired
    public StellenangebotController(StellenangebotRepository stellenangebotRepository) {
        this.stellenangebotRepository = stellenangebotRepository;
    }

    @GetMapping("api/stellenangebot")
    public List<Stellenangebot> showStellenangebot(){
        return stellenangebotRepository.findAll();
    }





}
