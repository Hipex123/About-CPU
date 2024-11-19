export default function CPUDescription() {
    return (
        <main>
            <h1>CPU</h1>

            <section>
                <h2>Nadzorna enota (CU)</h2>
                <p className="bubbleP">
                    Nadzorna enota je koordinator centralnega procesorja in usmerja pretok informacij med 
                    centralnim procesorjem in drugimi sestavnimi deli sistema. Dekodira navodila, pridobljena 
                    iz pomnilnika, in določa zaporedje, v katerem je treba izvesti operacije. Enota CU zagotavlja 
                    pravilno in učinkovito izvajanje navodil ter upravlja komunikacijo med različnimi deli procesorja, 
                    kot so ALU in registri. To usklajevanje je bistvenega pomena za ohranjanje splošne zmogljivosti sistema.
                </p>
            </section>

            <section>
                <h2>Aritmična in logična enota (ALU – Arithmetic and Logic Unit)</h2>
                <p>
                    V aritmetični in logični enoti poteka vsa matematična in logična obdelava. Izvaja osnovne aritmetične 
                    operacije, kot so seštevanje, odštevanje, množenje in deljenje, ter logične operacije, kot so primerjave 
                    (večje od, manjše od, enako) in bitne funkcije (AND, OR, NOT, XOR). ALU je bistvenega pomena za izvajanje 
                    izračunov, ki so potrebni za delovanje programov, pa naj gre za reševanje enačb, obdelavo uporabniškega 
                    vnosa ali obdelavo podatkov iz senzorjev. Brez enote ALU procesor ne bi mogel učinkovito sprejemati 
                    odločitev ali izračunavati rezultatov.
                </p>
            </section>

            <section>
                <h2>Predpomnilnik (Cache)</h2>
                <p>
                    Predpomnilnik je specializirana vrsta hitrega pomnilnika, ki se nahaja v bližini procesorja. Deluje kot 
                    začasno območje za shranjevanje pogosto dostopnih podatkov in ukazov, kar bistveno skrajša čas, ki ga 
                    procesor potrebuje za pridobivanje podatkov iz počasnejšega glavnega pomnilnika (RAM). Običajno je več 
                    ravni predpomnilnika (L1, L2 in včasih L3), vsaka pa zagotavlja drugačno razmerje med hitrostjo in zmogljivostjo. 
                    Prisotnost predpomnilnika je ključnega pomena za povečanje zmogljivosti procesorja, saj omogoča hitrejše 
                    pridobivanje podatkov in s tem pospešuje celotno delovanje sistema.
                </p>
            </section>

            <section>
                <h2>Registri (Registers)</h2>
                <p>
                    Registri so majhna, hitra pomnilniška mesta, vgrajena neposredno v procesor. V njih so začasno shranjeni podatki, 
                    naslovi ali navodila, s katerimi procesor aktivno dela. Za razliko od običajnega pomnilnika so registri izjemno hitri, 
                    vendar omejeni po velikosti, zato so odlični za shranjevanje vrednosti, ki so takoj potrebne za izračune ali izvajanje ukazov. 
                    Procesor lahko na primer uporabi registre za shranjevanje rezultata seštevanja, preden ga prenese v glavni pomnilnik. 
                    Učinkovita uporaba registrov je ključna za optimizacijo delovanja procesorja, saj zmanjšuje potrebo po dostopu do 
                    počasnejših vrst pomnilnika.
                </p>
            </section>

            <section>
                <h2>Zaključek</h2>
                <p>
                    Struktura centralne procesne enote (CPU) je ključnega pomena za razumevanje učinkovitega izvajanja nalog računalnikov. 
                    Vsaka komponenta, od krmilne enote do enote ALU, registrov in predpomnilnika, ima ključno vlogo pri obdelavi ukazov in 
                    upravljanju podatkov. Te komponente skupaj zagotavljajo nemoteno izvajanje operacij, kar računalnikom omogoča hitro in 
                    zanesljivo izvajanje aplikacij, zapletenih izračunov ter vsakodnevnih opravil. Z raziskovanjem strukture teh delov 
                    bolje razumemo zapletenost procesorja in njegov pomen v sodobnem računalništvu.
                </p>
            </section>
        </main>
    );
}