package com.example.backend.entity;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;


@Entity
@Getter @Setter
public class Warenkorb {

    // Properties

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

//    @OneToMany(mappedBy = "warenkorb")
//    private List<Produkt> produkte;
   // private int menge;

    //@JoinColumn
    private String produktbezeichnung;
    private double preis;



//    // TODO ER zu Versand
//    @Enumerated(EnumType.STRING)
//    private Versand versand;

    public Warenkorb() {
    }


    public Warenkorb(String produktbezeichnung, double preis) {
        this.produktbezeichnung = produktbezeichnung;
        this.preis = preis;
    }
}
