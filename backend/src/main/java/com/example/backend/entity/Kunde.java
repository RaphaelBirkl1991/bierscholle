package com.example.backend.entity;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
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
    private String telefonnummer;


    public Kunde(String vorname, String nachname, String strasse, int hausnummer, int plz, String ort, String email, String telefonnummer) {
        this.vorname = vorname;
        this.nachname = nachname;
        this.strasse = strasse;
        this.hausnummer = hausnummer;
        this.plz = plz;
        this.ort = ort;
        this.email = email;
        this.telefonnummer = telefonnummer;
    }

    public Kunde() {
    }
}