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
    //      Kunde kunde1 = new Kunde("Anton", "Horvat", "An der Mellibar", 12, 86598,"Wien", "blackbelts-austia-ev@gmail.com", "pass123");
//            Kunde kunde2 = new Kunde("Ochsensepp", "Josef", "Dorfplatz", 2, 98756, "Einöd", "rural-legend@gmx.to", "pass123");
//            Kunde kunde3 = new Kunde("Polizeiinspektion 14", "PHK Maier", "Sendlingerstraße", 27, 80335, "München", "landesbeschaffungsamt@bundeslandbayern.de", "pass123");
//
   //       kundenRepository.save(kunde1);
//            kundenRepository.save(kunde2);
//            kundenRepository.save(kunde3);
//
            Produkt testProdukt = new Produkt("Helles", 3.50, "schmeckt gut");
            produktRepository.save(testProdukt);
//
            Produkt klostergoldHell = new Produkt("Klostergold Hell", 19.80, "Kloster Scheyern ist heute" +
                    "in Bayern eine von wenigen authentischen Klosterbrauereien. Die Mönche leben dort – wie seit Jahrhunderten – " +
                   "in weltlicher Abgeschiedenheit. Hier haben die Scheyerner Klosterbiere ihre Wurzeln. Sie stehen auch für die " +
                    "Güte ihrer überregional angebotenen Biere der Marke Kloster Scheyern ein, die bei der Tucher Privatbrauerei nach speziellen " +
                    "Vorgaben und mit Gottes Segen in Lizenz produziert werden. Überlieferte Rezepturen und ausgewählte Zugaben bürgen für den authentischen " +
                    "Geschmack und höchste Qualität." );




            Produkt AugustinerEdelstoff = new Produkt("Augustiner Edelstoff", 22.10, "Der \"Edelstoff\" steht klar mit einem satten Gelb" +
                    " im Glas und ein Duft nach Honig und zitrusartigen Orangennoten erfreuen die Nase. Weich im Antrunk, entwickelt er seinen erfrischenden " +
                    "Charakter auf der Zunge mit fein säuerlichen Hopfennoten, die die grundlegende Malzaromatik sogar noch hervorheben, ohne dass das Export " +
                    "seinen Charakter verliert. Ein elegantes und würziges Export");

            Produkt JaegerbierFreising = new Produkt("Hofbrauhaus Freising Jägerbier", 18.60, "Ein sehr ausbalanciertes helles Exportbier auf Höchststufe." +
                    " Leuchtend gelb mit einer beeindruckenden Schaumkrone umspielt ein schöner Duft nach frischem Brot und süßem Honig die Nase. Im Geschmack liegt der " +
                    "Schwerpunkt deutlich auf einem wunderbar facettenreich gestaltetem Malzkörper. Das lebendige Finish ist elegant und wenig Hopfenbitter. ");

            Produkt AlpirsbacherKlosterDunkel = new Produkt("Alpirsbacher Kloster Dunkel", 23.00, "Etwas flüchtig zeigt sich der mittelporig und anhaftende Schaum." +
                    " Um so kräftiger strahlt das glanzfeine Kastanienbraun aus dem Glase. Deutliche Karamellnoten gepaart mit Röstaromen sowie Vanille und Schokolade." +
                    " Der Antrunk ruht in sich. Die Aromen von Karamell wiederholen sich mit nussigen Anklängen und einer Röstbittere, die auch den Nachtrunk dominiert. ");

            Produkt WeltenburgerKlosterHefe = new Produkt("Weltenburger Kloster Hefe", 20.00, "Die kompakte helle Schaumkrone und die hefetrübe goldgelbe Farbe" +
                    " erfreuen das Auge. Ein fruchtiger Geruch mit Noten von Banane und Gewürznelken kitzelt die Nase bevor das Bier in einem erfrischenden milden Antrunk mit Noten von Banane," +
                    " Zitrone und Gewürznelke die Zunge berührt. Malzigsüße und hefefruchtige Akzente von Banane, und Toastbrot werden zum Abgang unterlegt von einer zitronig-frischen Hopfennote.");

            Produkt SchorndorferTreibstoff = new Produkt("Schorndorfer Treibstoff", 21.50, "Mit seiner satten goldgelben Farbe, seiner naturbelassenen, unfiltrierten " +
                    "Optik und einem porigen, anhaftenden Schaum lädt der Schorndorfer Treibstoff zum Trinken ein. Dezente Malzaromen, unterlegt mit einer fruchtigen Note nach Quitte, steigen" +
                    " zusammen mit süßen Honigtönen in die Nase. Der Antrunk ist mild und fein moussierend und lässt den Aromen im Mund allen Platz, sich zu entfalten. Diese sind geprägt durch" +
                    " leicht süßliche Noten nach Blütenhonig sowie Töne nach frisch gebackenem Weißbrot. Eine hopfenbasierte Zitrusaromatik rundet das Bier ab, das mit einer sehr dezenten Bittere " +
                    "langsam ausklingt.");


            Produkt ZwiefalterKloster = new Produkt("Zwiefalter Klosterbräu Hefeweizen naturtrüb", 20.50, "Optisch imponiert das Weißbier mit einem schönen weißen Schaum," +
                    " der lange anhält. In der Nase spielen Aromen von frischer Hefe, Weissbrot, etwas Nelke und blumige Töne. Sehr spritzig und schlank macht es beim Trinken durch das CO2 einen leicht" +
                    " säuerlichen Eindruck, der schön durch milde getreidige und nelkenartige Noten ergänzt wird. Auch der Hopfen kommt schön zum Vorschein und gibt Struktur. Die typischen Fruchtaromen" +
                    " bleiben sehr dezent. ");


            Produkt Gansbraeu = new Produkt("Gansbräu Rotbier", 24.00, "Dieses Rotbier weist neben seiner schönen, klaren Kupferfarbe und dem feinporigen Schaum eine kräftige" +
                    " Malzaromatik nach Karamellbonbon und Zartbitterschokolade auf. Weich im Antrunk, verteilt sich dieses Rotbier cremig auf der Zunge und erfreut mit seinen herrlich schokoladigen Tönen," +
                    " abgerundet durch einen Strauß verschiedener Trocken- und Rumtopffrüchte und dem angenehmen Hauch von Kandiszucker. Auch die feine Röstbittere am Ende ist wahrnehmbar und bildet einen " +
                    "sehr guten Ausgleich zu der malzigen Süße.");


            Produkt AndechserBergbock = new Produkt("Andechser Bergbock Hell", 21.00, "Der helle Bergbock der Klosterbrauerei Andechs ist ein Bier, welches seinen Alkoholgehalt" +
                    " nicht versteckt. Goldgelb und klar leuchtete es im Glas. Der Schaum verschwindet schnell und kleine, feine Bläschen steigen auf. Orange, etwas Mandel und auch der Alkohol melden sich " +
                    "in der Nase und der erste Schluck ist Honigsüß. Getoastetes Brot, Heu und wieder eine deutliche Alkohlnote machen diesen Bock etwas kantig. Eine feine Perlage umspielt die Zunge und der " +
                    "kräftige Körper trägt die Restsüße wunderbar zum nächsten Schluck.");


            Produkt AktienLandbier = new Produkt("Aktien Landbier fränkisch Dunkel", 20.00,"Das Bayreuther Aktien Landbier Dunkel ist ein wunderbar klar braun leuchtendes " +
                    "Bier mit einer tollen, stabilen beigen Schaumkrone. Der Geruch ist röstig, nach dunklem Brot und etwas süß nach Karamell. Der Antrunk bestätigt die Nase nach Röstmalz, etwas süßem Karamell" +
                    " und dazu dunkle Schokolade. Der Eindruck ist mild und die Kohlensäure erfrischt und eine feine Bittere klingt etwas nach. " );

            Produkt Schoenbusch = new Produkt("Schönbusch Horst Hell", 21.50, "Spannender Name für ein Bier! Da ist man doch umso mehr gespannt, wie es schmeckt! Das helle Lagerbier " +
                    "der Schönbuch Braumanufaktur aus Böblingen hat eine glanzfeine, satte goldgelbe Farbe und bildet einen schneeweißen und feinporigen Schaum aus. Ganz dem Stil gerecht ist die Aromatik in der" +
                    " Nase sehr mild und besticht mit aromatischen Malznoten nach Getreide. Nach einem erfrischenden und moussierenden Antrunk findet sich ein milder, angenehmer Malzkörper mit frischen floralen " +
                    "Hopfenakzenten im Mund wieder und unterstützt den leichten Charakter des Bieres. Ausgewogen und mit einer dezenten Herbe klingt das Bier aus." );


            Produkt MayersBrauwerk = new Produkt("Mayers Brauwerk Schiller", 20.00, "Das Bier mit seinem hellen Bernsteinton wird im Licht mit goldenen Reflexen durchzogen. " +
                    "Es bildet sich cremefarbener Schaum, der sich an den leuchtenden Körper schmiegt. Karamellige Malznoten mit süßlich-weichen Komponenten nach Sahnekaramell und Kandiszucker eröffnen den" +
                    " Haupttrunk. Der vollmundige und sanfte Körper wirkt durch die feinperlige Kohlensäure erfrischend. Die Bittere ist gut eingebettet und klingt langsam bis zum Abgang aus. ");







              produktRepository.save(klostergoldHell);
            produktRepository.save(AugustinerEdelstoff);
            produktRepository.save(JaegerbierFreising);
            produktRepository.save(AlpirsbacherKlosterDunkel);
            produktRepository.save(WeltenburgerKlosterHefe);
            produktRepository.save(SchorndorferTreibstoff);
            produktRepository.save(ZwiefalterKloster);
            produktRepository.save(Gansbraeu);
            produktRepository.save(AndechserBergbock);
            produktRepository.save(AktienLandbier);
            produktRepository.save(Schoenbusch);
            produktRepository.save(MayersBrauwerk);
//
//
////             Dummy Warenkörbe
//
////            Warenkorb warenkorb1 = new Warenkorb(, 3, "gutes Bier", Versand.WENN_BIERFAHRER_NUECHTERN);
////
////            warenkorbRepository.save(warenkorb1);
//
//
        };
    }

//
//


}
