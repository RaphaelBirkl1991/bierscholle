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

    // private final ProduktRepository produktRepository;

//    public List<ProduktDTO> prouktliste = List.of(
//            new ProduktDTO("Benedictus", 23.00, "Das Original aus dem Kloster Scheyern"),
//            new ProduktDTO("Chiemseer", 22.00, "Immer eine gute Wahl"),
//            new ProduktDTO("Altmühltaler Hell", 24.00, "Das besondere Bier für die echten Kenner")
//    );

  //  public ProduktDTO = new ProduktDTO ("Benedictus", 2.15, "Das Original aus dem Kloster Scheyern");

    ProduktDTO produktDTO = new ProduktDTO("Benediktus", 2.10, "Das original aus Scheyern");

    @GetMapping("api/produkt_sortiment")
    public ProduktDTO showProduktDTO() {
     //   produktDTO = new ProduktDTO("Benediktus", 2.10, "Das original aus Scheyern");
        return produktDTO;
    }




    // Eigene Versuche die Daten aus der Datenbank zu holen

//    @Autowired
//    public ProduktController(ProduktRepository produktRepository ) {
//        this.produktRepository = produktRepository;
//    }

//    @GetMapping("/")
//    public List<Produkt> getAll(){
//        return produktRepository.findAll();
//    }




}
