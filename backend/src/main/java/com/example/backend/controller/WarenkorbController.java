package com.example.backend.controller;


import com.example.backend.entity.Warenkorb;
import com.example.backend.repository.WarenkorbRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class WarenkorbController {

    private final WarenkorbRepository warenkorbRepository;

    @Autowired
    public WarenkorbController(WarenkorbRepository warenkorbRepository) {this.warenkorbRepository = warenkorbRepository;}

    @GetMapping("api/warenkorb")
    public List<Warenkorb> showWarenkorb() { return warenkorbRepository.findAll();}

    @PostMapping("api/warenkorb_einfuegen")
    public void save(@RequestBody Warenkorb warenkorb){
        warenkorbRepository.save(new Warenkorb(warenkorb.getProduktbezeichnung(), warenkorb.getPreis()));
    }


}