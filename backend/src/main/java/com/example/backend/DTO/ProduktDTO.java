package com.example.backend.DTO;


import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class ProduktDTO {

    public String bezeichnung;
    public double preis;
    public String beschreibung;

    public ProduktDTO() {
    }

    public ProduktDTO(String bezeichnung, double preis, String beschreibung) {
        this.bezeichnung = bezeichnung;
        this.preis = preis;
        this.beschreibung = beschreibung;
    }


}
