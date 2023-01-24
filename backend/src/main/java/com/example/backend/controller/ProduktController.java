package com.example.backend.controller;

import com.example.backend.DTO.ProduktDTO;
import com.example.backend.entity.Produkt;
import com.example.backend.repository.ProduktRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;


@RestController
public class ProduktController {

     private final ProduktRepository produktRepository;

    @Autowired
    public ProduktController(ProduktRepository produktRepository ) {
        this.produktRepository = produktRepository;
    }



    @GetMapping("api/produkt_sortiment")
    public List<Produkt> showProduktSortiment() {
    // return produktliste;
        return produktRepository.findAll();
    }


}
