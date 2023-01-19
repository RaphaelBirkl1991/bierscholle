package com.example.backend.controller;

import com.example.backend.entity.Kunde;
import com.example.backend.repository.KundenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class KundenController {

    private final KundenRepository kundenRepository;

    @Autowired
    public KundenController(KundenRepository kundenRepository) {
        this.kundenRepository = kundenRepository;
    }

    @GetMapping("api/kunden_liste")
    public List<Kunde> showKunde() {
        return kundenRepository.findAll();
    }


}
