import { Button, VStack } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ContactInfo from "../components/ContactInfo";

import Paragraph from "../components/Paragraph";
import { Link } from "react-router-dom";

export default function TermsPage() {
  const handleScrollToTop = () => {
    // const rootDiv = document.getElementById("body");
    const rootDiv = document.body;
    if (rootDiv) {
      rootDiv.scrollTo({
        top: 0,
      });
    }
  };
  return (
    <>
      <div className="smlBackground"></div>

      <VStack spacing="90px" className="pageContainer">
        <Navbar selectedTag="" />
        <VStack spacing={"30px"}>
          <Paragraph
            title="Utleiebetingelser"
            text="1. Tilbud har gyldighet i 14 dager fra tilbudsdato. Bindende leieavtale trer i kraft når
leietaker bekrefter tilbud fra Ekte Lyd AS. Avtalen kan bare endres eller sies opp med Ekte Lyd
AS skriftlige samtykke."
          />
          <Paragraph
            text="2. Alle priser er eksklusive merverdiavgift. Noen arrangementer er ved totalproduksjon
(Ekte Lyd AS leverer alt av mannskap) mva-unntatt og mva påløper i disse tilfeller ikke. Dette
kommer fram i tilbud og på faktura. Det tas forbehold om feil i Ekte Lyd AS sine prislister."
          />
          <Paragraph
            text="3. All utleie utleveres fritt fra Ekte Lyd AS sitt lager på avtalt lokasjon. Ekte Lyd AS kan
sørge for transport mot vederlag. Dersom det ikke er enkel varelevering på stedet, men
utstyr skal inn i bygninger, opp i heis, trapper og lignende, må dette informeres om i god tid,
og Ekte Lyd AS vil beregne nødvendig bemanning til oppgaven. Arrangør/leietaker skal stille
med nødvendig bærehjelp fra bil til der utstyret skal benyttes/lagres dersom ikke annet er
avtalt. Der hvor bygningsmessige forhold gjør det nødvendig å bruke ekstra mannskap
og/eller redskap ved levering, skjer dette for leietakers regning og risiko."
          />
          <Paragraph
            text="4. Leietaker må være fylt 18 år. Ved dryhire må leietaker medbringe legitimasjon ved
avhenting."
          />
          <Paragraph
            text="5. Ved utleie til bedrift med norsk organisasjonsnummer bekrefter kontaktperson med
avtaleinngåelse at han/hun har bestillingsrett på vegne av bedriften. Dersom det viser seg at
denne har utført en uautorisert avtaleinngåelse står bestiller personlig ansvarlig for at
leiebeløpet blir innbetalt i sin helhet."
          />
          <Paragraph
            text="6. Ved utleie til organisasjoner, lag, foreninger og lignende vil person(er) som bekrefter
disse betingelsene stå ansvarlig for hele det økonomiske ansvaret; herunder leiebeløp og
eventuelt tilleggsfakturaer uavhengig om person(er) har gyldig signatur på vegne av
foreningen."
          />
          <Paragraph
            text="7. Faktura utsendes vanligvis 1-30 dager etter ferdig arrangement. Forfallsfrist er 10
dager etter fakturadato."
          />
          <Paragraph
            text="8. Dersom leieavtalen ønskes kansellert må dette gjøres minimum 42 dager (6 uker) før
arrangementets opprinnelige oppstartsdato (kl.00.00). Dersom avtalen avbrytes mindre enn
42 dager før betales 50% av kontraktsummen. Dersom avtalen avbrytes mindre enn 10 dager
før betales 100% av kontraktsummen. Ved Force Majeure dekker arrangør utgifter som Ekte
Lyd AS lider, men er ellers fritatt for å betale for leie av utstyr. Eksempel på Force Majeure
kan være naturkatastrofer, pandemi eller andre offisielle pålegg som hindrer arrangement."
          />
          <Paragraph
            text="9. Leietaker har ansvar for å ta best mulig vare på utstyret, og leietaker har
forsikringsansvar for alt utleid utstyr fra henting til levering. Leietaker er ansvarlig for skade og tap som måtte oppstå på utstyr, uansett skadetyper og årsak. Alt utstyr er forsikret fra
Ekte Lyd As sin side, men leietager er ansvarlig for eventuelle skader/mangler dersom dette
skulle forekomme som følge av uforsiktig håndtering eller manglende vakthold i
utleieperioden. Dette gjelder alle former for skader, og/eller tapt utstyr som følge av uvøren
håndtering eller utilstrekkelig vakthold. Dette gjelder blant annet skader forårsaket av feil
bruk, vann, brann, tyveri, naturhendelser eller lignende. Utstyr er forsikret mot tyveri, brann
osv. Leietaker er fritatt for ansvar ved skade som er dekket av forsikring. Ved skadetilfeller
som er dekket av forsikring er leietaker ansvarlig for å dekke egenandel."
          />
          <Paragraph
            text="10. Utstyr som har blitt skadet under utleie skal ikke repareres av kunde, men
tilbakeleveres til Ekte Lyd AS og Ekte Lyd AS skal orienteres om skaden. Ekte Lyd AS sørger for
reparasjon hos autorisert instans, og utgifter til dette dekkes av kunden. Ekte Lyd AS har rett
til å kondemnere defekt utleieutstyr, dette selges til leietaker for veiledende nypris."
          />
          <Paragraph
            text="11. Ekte Lyd AS har ikke ansvar for noen form for tap leietaker har hatt pga. feil som har
oppstått på gjenstanden mens disse har vært i leietakers varetekt. Om det skulle være feil på
utstyr ved leieperiodens start skal Ekte Lyd AS gis tid til å skaffe erstatningsprodukt. Leietaker
kan ikke kreve refundering av leiebeløp utover den forholdsmessige del av leiesummen."
          />
          <Paragraph
            text="12. Ved utleie som ikke er full-produksjon (altså; alt mannskap er ikke levert av Ekte Lyd
AS) plikter leietaker å pakke alt utstyr i sine respektive transportkasser, flighter og bagger
som utstyret ble utlevert i. Alle kabler skal kveiles minst like fint som de var ved utlevering.
Dårlig kveilet kabler fører til ødelagte kabler og til mye ekstra tidsbruk på neste oppdrag eller
på lager. Nødvendig opprydding og om-kveiling på lager faktureres med kr 500+ mva pr
påstartede time."
          />
          <Paragraph
            text="13. Leietaker har plikt til å stille med den strøm som kreves til å gjennomføre leveransen.
Ved feil på strømnettet, f.eks. feil spenning eller lignende, kan leietaker stilles økonomisk
ansvarlig for skade som oppstår på utstyret som følge av dette. Ekte Lyd AS tar ikke ansvar for
forsinkelser eller avlysning grunnet mangler eller feil på strømnettet."
          />
          <Paragraph
            text="14. Der det er avtalt bære/riggehjelp fra kunde skal de stille til avtalt tid og sted.
Riggehjelp skal være voksen personer i god fysisk helse, uten problemer med fysisk arbeid
eller tunge løft. Riggehjelp skal ikke være påvirket av rusmidler, hverken på opprigg eller
nedrigg. Ved avvik fra dette vil leietaker etterfaktureres kr 650,- pr time, og minimum 4 timer,
pr manglende person i henhold til det som er avtalt. Ekte Lyd AS er ikke ansvarlig for
eventuelle forsinkelser grunnet fravær av riggehjelp. Ekte Lyd AS er ikke ansvarlig for skade
på riggehjelp. Det anbefales at riggehjelp stiller i vernesko og arbeidshansker."
          />
          <Paragraph
            text="15. Leietaker holder kost og losji for Ekte Lyd AS sitt mannskap herunder fritt mineralvann
til en hver tid fra innlast, under hele arrangementet, og til utlast er ferdig og avreise. Alle
utlegg av denne sort vil bli fakturert med 20% påslag."
          />
          <Paragraph
            text="16. Leietaker må sørge for at det er mulig å komme fram til produksjonsstedet med den
type bil som blir benyttet i produksjonen, vanligvis varebil. Ekte Lyd AS står ikke ansvarlig for
eventuelle tap som følge av at Ekte Lyd AS ikke kommer fram til produksjonsstedet
(eksempelvis kan noe så enkelt som en våt gressplen føre til fastkjøring uten
spesialtransport). Dette gjelder også havari på Ekte Lyd AS sine kjøretøy. Leietaker må sørge
for fri parkering for Ekte Lyd AS sine kjøretøy som følger med produksjonen i direkte nærhet
til produksjonsstedet."
          />
          <Paragraph
            text="17. Leietager må sørge for parkering for Ekte Lyd AS sine biler. Om dette ikke er mulig
viderefaktureres parkeringsutlegg."
          />
          <Paragraph
            text="18. Produksjonsstedet må være ryddet og klart når Ekte Lyd AS ankommer stedet.
Arrangementsansvarlig skal være på plassen når Ekte Lyd AS ankommer."
          />
          <Paragraph
            text="19. Ekte Lyd AS er ikke ansvarlig for skader på andres utstyr eller personer i og rundt
produksjons området under opp- og nedrigg."
          />
          <Paragraph
            title="Avvik"
            text="1. Alle avvik fra denne kontrakten og dens betingelser skal kun avtales skriftlig med Ekte Lyd AS"
          />
          <Paragraph text="2. Ved eventuell tvist avgjør Ekte Lyd AS om verneting som skal benyttes." />
          <Link to="/">
            <Button
              type="submit"
              fontFamily={"'Roboto', sans-serif"}
              fontWeight={500}
              fontStyle={"normal"}
              fontSize={"19px"}
              bgColor={"#0a0a0a"}
              color={"#f9f9f9"}
              borderWidth={"1px"}
              borderColor={"#f9f9f9"}
              onClick={handleScrollToTop}
              h={"49px"}
              sx={{
                _hover: {
                  bg: "#303030",
                },
              }}
            >
              Tilbake
            </Button>
          </Link>
        </VStack>
        <ContactInfo />
        <Footer />
      </VStack>
    </>
  );
}
