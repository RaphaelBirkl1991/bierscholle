package com.example.backend.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;


@Getter @Setter
@Entity @Table(name = "Stellenangebote")
public class Stellenangebot {

    @Id @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    private String stellenbezeichnung;

    @Lob @Column(name = "beschreibung", columnDefinition = "CLOB")
    private String stellenbeschreibung;

    private String anforderungen;
    private String benefits;
    private String eintrittsdatum;
    private int bruttojahresgehalt;

    private String zusatzinformationen;

    private String einsatzort;


    public Stellenangebot() {
    }

    public Stellenangebot(String stellenbezeichnung, String stellenbeschreibung, String anforderungen, String benefits, String eintrittsdatum, int bruttojahresgehalt, String zusatzinformationen, String einsatzort) {
        this.stellenbezeichnung = stellenbezeichnung;
        this.stellenbeschreibung = stellenbeschreibung;
        this.anforderungen = anforderungen;
        this.benefits = benefits;
        this.eintrittsdatum = eintrittsdatum;
        this.bruttojahresgehalt = bruttojahresgehalt;
        this.zusatzinformationen = zusatzinformationen;
        this.einsatzort = einsatzort;
    }
}
