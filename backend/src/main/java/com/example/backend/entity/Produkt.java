package com.example.backend.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter

@Table(name = "Produktübersicht")
public class Produkt {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private int anzahl;
    private String bezeichnung;
    private double preis;
    private double alkoholgehalt;
    private String brautyp;
    private double fuellmenge;
    private String geschmack;
    private String bittere;
    private String anlass;
    private String zutaten;
    @Lob @Column(name = "beschreibung", columnDefinition = "CLOB")
    private String beschreibung;

    @ManyToOne(cascade = { CascadeType.PERSIST, CascadeType.REFRESH }, fetch = FetchType.LAZY)
    private Warenkorb warenkorb;



    public Produkt(String bezeichnung, double preis, double alkoholgehalt, String brautyp, double fuellmenge, String geschmack, String bittere, String anlass, String zutaten, String beschreibung) {
        this.bezeichnung = bezeichnung;
        this.preis = preis;
        this.alkoholgehalt = alkoholgehalt;
        this.brautyp = brautyp;
        this.fuellmenge = fuellmenge;
        this.geschmack = geschmack;
        this.bittere = bittere;
        this.anlass = anlass;
        this.zutaten = zutaten;
        this.beschreibung = beschreibung;
        this.warenkorb = warenkorb;
    }

    public Produkt() {

    }
}
