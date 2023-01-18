package com.example.backend;


import jakarta.persistence.*;

import java.util.List;

@Entity
public class Warenkorb {

    // Properties

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @OneToMany(mappedBy = "")
    private List<Produkt> produkte;
    private int menge;

    @JoinColumn
    private String produktbezeichnung;

    // TODO ER zu Versand
    @Enumerated(EnumType.STRING)
    private Versand versand;

    public Warenkorb() {
    }

    public Warenkorb(List<Produkt> produkte, int menge, String produktbezeichnung, Versand versand) {
        this.produkte = produkte;
        this.menge = menge;
        this.produktbezeichnung = produktbezeichnung;
        this.versand = versand;
    }



    public List<Produkt> getProdukte() {
        return produkte;
    }

    public void setProdukte(List<Produkt> produkte) {
        this.produkte = produkte;
    }

    public String getProduktbezeichnung() {
        return produktbezeichnung;
    }

    public void setProduktbezeichnung(String produktbezeichnung) {
        this.produktbezeichnung = produktbezeichnung;
    }

    public Versand getVersand() {
        return versand;
    }

    public void setVersand(Versand versand) {
        this.versand = versand;
    }

    public int getMenge() {
        return menge;
    }

    public void setMenge(int menge) {
        this.menge = menge;
    }


}
