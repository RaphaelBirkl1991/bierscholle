package com.example.backend.controller;

import com.example.backend.entity.Kontakt;
import com.example.backend.entity.Kunde;
import com.example.backend.repository.KontaktRepository;
import com.example.backend.repository.KundenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class KontaktController {
    private final KontaktRepository kontaktRepository;

    @Autowired
    public KontaktController(KontaktRepository kontaktRepository) {
        this.kontaktRepository = kontaktRepository;
    }

//    @GetMapping("api/kunden_liste")
//    public List<Kunde> showKundenliste() {
//        return kontaktRepository.findAll();
//    }

    @PostMapping("api/kontakt_formular")
    public void save(@RequestBody Kontakt kontakt) {
      kontaktRepository.save(new Kontakt(kontakt.getName(), kontakt.getStrasse(), kontakt.getOrt(),
              kontakt.getEmail(), kontakt.getNachricht()));
    }

}
