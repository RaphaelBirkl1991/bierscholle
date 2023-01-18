package com.example.backend;

import jakarta.persistence.*;

@Entity
@Table(name= "Kundenverzeichnis")
public class Kunde {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @OrderColumn()
    private String vorname;
    private String nachname;
    private String strasse;
    private int hausnummer;
    @Column(length = 5)
    private int plz;
    private String ort;
    @Column(unique = true)
    private String email;

    public Kunde() {
    }

    public Kunde(String vorname, String nachname, String strasse, int hausnummer, int plz, String ort, String email) {
        this.vorname = vorname;
        this.nachname = nachname;
        this.strasse = strasse;
        this.hausnummer = hausnummer;
        this.plz = plz;
        this.ort = ort;
        this.email = email;
    }

    public String getVorname() {
        return vorname;
    }

    public void setVorname(String vorname) {
        this.vorname = vorname;
    }

    public String getNachname() {
        return nachname;
    }

    public void setNachname(String nachname) {
        this.nachname = nachname;
    }

    public String getStrasse() {
        return strasse;
    }

    public void setStrasse(String strasse) {
        this.strasse = strasse;
    }

    public int getHausnummer() {
        return hausnummer;
    }

    public void setHausnummer(int hausnummer) {
        this.hausnummer = hausnummer;
    }

    public int getPlz() {
        return plz;
    }

    public void setPlz(int plz) {
        this.plz = plz;
    }

    public String getOrt() {
        return ort;
    }

    public void setOrt(String ort) {
        this.ort = ort;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}