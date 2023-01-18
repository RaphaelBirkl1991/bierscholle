package com.example.backend.DTO;




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
}
