package com.example.backend;


import com.example.backend.entity.Kunde;
import com.example.backend.entity.Produkt;
import com.example.backend.repository.KundenRepository;
import com.example.backend.repository.ProduktRepository;
import com.example.backend.repository.WarenkorbRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class BackendApplication {

    @Autowired
    KundenRepository kundenRepository;
    @Autowired
    private ProduktRepository produktRepository;

    @Autowired
    private WarenkorbRepository warenkorbRepository;

    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }

    @Bean
    CommandLineRunner runner() {
        return args -> {

            // Dummy Kundenobjekte
            Kunde kunde1 = new Kunde("Anton", "Horvat", "An der Mellibar", 12, 86598,"Wien", "blackbelts-austia-ev@gmail.com", "pass123");
            Kunde kunde2 = new Kunde("Ochsensepp", "Josef", "Dorfplatz", 2, 98756, "Einöd", "rural-legend@gmx.to", "pass123");
            Kunde kunde3 = new Kunde("Polizeiinspektion 14", "PHK Maier", "Sendlingerstraße", 27, 80335, "München", "landesbeschaffungsamt@bundeslandbayern.de", "pass123");

            kundenRepository.save(kunde1);
            kundenRepository.save(kunde2);
            kundenRepository.save(kunde3);

            // Dummy Produktobjekte
            Produkt produkt1 = new Produkt("Augustiner Hell", 2.09, "Munich Kindl´s choice" );
            Produkt produkt2 = new Produkt("Astra", 3.25, "Das selbstgebraute Craft");
            Produkt produkt3 = new Produkt("Hamburger Plörri", 0.99, "Straight outta Altster");

            produktRepository.save(produkt1);
            produktRepository.save(produkt2);
            produktRepository.save(produkt3);

//             Dummy Warenkörbe

//            Warenkorb warenkorb1 = new Warenkorb(, 3, "gutes Bier", Versand.WENN_BIERFAHRER_NUECHTERN);
//
//            warenkorbRepository.save(warenkorb1);


        };
    }





}
