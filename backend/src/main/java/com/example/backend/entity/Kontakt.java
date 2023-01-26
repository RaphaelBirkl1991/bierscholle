package com.example.backend.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter
@Entity @Table(name="Feedback")
public class Kontakt {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String name;
    private String strasse;
    private String ort;
    private String email;
    private  String nachrricht;

    public Kontakt() {
    }

    public Kontakt(String name, String strasse, String ort, String email, String nachrricht) {
        this.name = name;
        this.strasse = strasse;
        this.ort = ort;
        this.email = email;
        this.nachrricht = nachrricht;
    }
}



