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

    // Liste mit verschiedenen Produkten

//     public List<ProduktDTO> produktliste = List.of(
//            new ProduktDTO("Benedictus", 23.00, "Das Original aus dem Kloster Scheyern"),
//            new ProduktDTO("Chiemseer", 22.00, "Immer eine gute Wahl"),
//            new ProduktDTO("Altmühltaler Hell", 24.00, "Das besondere Bier für die echten Kenner")
//    );


    @GetMapping("api/produkt_sortiment")
    public List<Produkt> showProduktSortiment() {
    // return produktliste;
        return produktRepository.findAll();
    }


}
