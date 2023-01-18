package com.example.backend;

import jakarta.persistence.*;

@Entity
@Table(name = "Produktübersicht")
public class Produkt {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    private int anzahl;
    private String bezeichnung;
    private double preis;
    private String beschreibung;

    @ManyToOne(cascade = { CascadeType.PERSIST, CascadeType.REFRESH }, fetch = FetchType.LAZY)
    private Warenkorb warenkorb;

    public Produkt() {
    }

    public Produkt(String bezeichnung, double preis, String beschreibung) {
        this.bezeichnung = bezeichnung;
        this.preis = preis;
        this.beschreibung = beschreibung;
    }

    public String getBezeichnung() {
        return bezeichnung;
    }

    public void setBezeichnung(String bezeichnung) {
        this.bezeichnung = bezeichnung;
    }

    public double getPreis() {
        return preis;
    }

    public void setPreis(double preis) {
        this.preis = preis;
    }

    public String getBeschreibung() {
        return beschreibung;
    }

    public void setBeschreibung(String beschreibung) {
        this.beschreibung = beschreibung;
    }

    public int getAnzahl() {
        return anzahl;
    }

    public void setAnzahl(int anzahl) {
        this.anzahl = anzahl;
    }

    public Warenkorb getWarenkorb() {
        return warenkorb;
    }

    public void setWarenkorb(Warenkorb warenkorb) {
        this.warenkorb = warenkorb;
    }
}
