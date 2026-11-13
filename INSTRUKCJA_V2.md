# Dodatki Margonki — instrukcja projektu

> **OBOWIĄZUJĄCA INSTRUKCJA: INSTRUKCJA_V2.md**
> Źródło aktualne: repo Truciaczek/Motyw, gałąź main, plik INSTRUKCJA_V2.md.
> Przed pracą pobierać aktualną wersję z GitHuba; lokalnie przechowywać kopię roboczą. Po każdej akceptacji użytkownika aktualizować ten plik w repo. W trakcie prac dokumentować zmiany i odrzucone próby, zachowując historię. INSTRUKCJA_PROJEKTU.md oraz wcześniejsze kopie w plikach ChatGPT są archiwalne. Dotychczasowe zapisy o zapisie instrukcji w plikach ChatGPT opisują stary sposób pracy.
> Aktualny zaakceptowany stan Motywu NI: **1.2.20**.


Data utworzenia: 2026-11-11

## Zasady nadrzędne

1. Nie cofać zmian zatwierdzonych przez użytkownika.
2. Każdą modyfikację ograniczać do uzgodnionego zakresu.
3. Rozdzielać motyw publiczny od dodatków prywatnych.
4. Nie utożsamiać wykonania próby z zaakceptowaniem poprawki.
5. Po zakończeniu lub rozwiązaniu zadania aktualizować dokumentację, zaznaczając stan potwierdzenia.
6. Na polecenie **„raportuj”** zestawić wszystkie zadania rozpoczęte w bieżącym dniu, ich status: **w trakcie / ukończony / odrzucony**, wykonane zmiany i otwarte problemy. Poprosić użytkownika o weryfikację, a następnie skorygować i utrwalić zatwierdzone statusy.
7. W instrukcjach testów konsolowych zawsze określać, czy motyw powinien być włączony czy wyłączony.
8. Przed modyfikacją sprawdzić aktualne pliki, nie zgadywać selektorów i kodu.
9. Prowadzić historię zmian i wersji, nie nadpisywać historii.
10. Stała zgoda użytkownika z 2026-11-11: po wykonaniu i sprawdzeniu uzgodnionych zmian automatycznie aktualizować właściwe własne repozytorium projektu, w tym publikować na main, bez każdorazowego pytania o zgodę. W razie problemu przygotować cofnięcie zmiany z zachowaniem historii. Zgoda nie oznacza automatycznej akceptacji efektu wizualnego i nie rozszerza zakresu prac na repozytorium Fireera.

## GitHub — obowiązkowy sposób pracy i podział repozytoriów

- **Publiczny Motyw NI:** `Truciaczek/Motyw` — https://github.com/Truciaczek/Motyw . Dostęp przez połączoną integrację GitHub został sprawdzony 2026-11-11: odczytano `README.md` i `dist/motyw.user.js`; wersja wówczas **0.1.76**. Aktualną wersję zawsze sprawdzać ponownie przed pracą.
- **Prywatne repozytorium dodatków:** `Truciaczek/Dodatki-Truciaka` — https://github.com/Truciaczek/Dodatki-Truciaka . Oddzielny projekt obejmujący m.in. automatyczną zmianę zestawów i „piorun”. Zweryfikowano w GitHubie 2026-11-11: repozytorium jest prywatne, gałąź `main`, dostęp odczytu i zapisu. Nie przenosić prywatnego kodu do publicznego motywu.
- **Repozytorium Fireera — Gogatki:** `KoniecDniaDziecka/Gogatki` — https://github.com/KoniecDniaDziecka/Gogatki . Fireer udzielił nam dostępu. Zweryfikowano w GitHubie 2026-11-11: repozytorium jest publiczne, gałąź `main`, połączone konto ma uprawnienia odczytu i zapisu (bez administracji). Pomimo uprawnień nie modyfikować tego repozytorium bez osobnego uzgodnienia; traktować jako referencję.
- Rozdzielenie publicznego motywu i prywatnych dodatków obowiązuje według wcześniejszych ustaleń od wersji **0.1.45**.

### Procedura przy każdej zmianie

1. **Najpierw GitHub**: wyszukać właściwe repozytorium i pobrać aktualne pliki/wersję z domyślnej gałęzi przez integrację. Nie prosić o ręczne przesłanie plików, zanim nie zostanie sprawdzony dostęp do repozytorium.
2. Przeczytać kod źródłowy, zależności, style i dotychczasowe poprawki. Nie opierać zmian na samym zrzucie ekranu ani na niezweryfikowanych selektorach.
3. Zmieniać wyłącznie właściwy projekt i uzgodniony zakres. Zachować działające mechanizmy (w tym aktualizację po F5, cache/fallback, konfigurację per postać, jeżeli występują).
4. Przed zapisem sprawdzić różnice i ryzyko regresji; przygotować wersję do testu. Nie uznawać zadania za zaakceptowane przed potwierdzeniem użytkownika.
5. Po potwierdzeniu aktualizować instrukcję, status i historię wersji. Nie wprowadzać zmian do repozytorium Fireera bez osobnego uzgodnienia; traktować je przede wszystkim jako źródło odniesienia.

## Motyw NI — dotychczasowe ustalenia do weryfikacji z aktualnym kodem

- Powierzchnie: `#171B20`, `#252B31`.
- Obramowania/ornamenty: `#668298`.
- Akcent: `#12C9BD`.
- Drewno: ciemny heban/grafit, wyłącznie górna i dolna listwa.
- Zachować ozdobne linie i ornamenty; utrzymać firusiowy styl.
- W późniejszych ustaleniach ikona litery „T” zamiast wcześniejszych wariantów; zweryfikować aktualną implementację.
- Prace obejmowały `window-frame.png`, `middle_graphics`, `quest_bar`, przyciski, ramki, kafelki i ikony.
- Historyczny problem: górna część niezidentyfikowanego przycisku; użytkownik 2026-11-11 zatwierdził zadanie jako ukończone. Niepotwierdzone powiązanie z wersją 0.1.76; nie zgadywać selektora ani szczegółów naprawy.
- Wcześniejsze wersje obejmowały m.in. 0.1.58 i 0.1.73; nie zakładać, że którakolwiek jest najnowsza bez sprawdzenia plików.

## Prywatne dodatki — ustalenia funkcjonalne

- Wykrywanie wrogów, poszukiwanych i opcjonalnie nieznajomych; wykluczenia: przyjaciele, klan i sojusznicy.
- Zasięg: **na sztywno 5 kratek w pionie/poziomie i 4 po skosie** — wymaganie użytkownika z 2026-11-10. Nie wracać do wcześniejszego konfigurowalnego wariantu 5/6. Działanie aktualnej implementacji nadal wymaga odrębnej weryfikacji.
- Automatyczny dobór zestawu według profesji przeciwnika.
- Osobny zestaw dla co najmniej dwóch przeciwników.
- Opcje niewykonywania zmiany w grupie, na mapach tytanów/kolosów i w przedsionkach.
- Działanie tylko na czerwonych mapach; preferowana identyfikacja po ID mapy.
- Konfiguracja per postać; zachowanie ustawień i stanu okien po F5.
- Panel ruchomych okien, ikony dodatków i kontrola ich położenia.
- Aktualizacje po F5, cache i fallback były przedmiotem prac; obecny stan wymaga weryfikacji.

## Rejestr prac — 2026-11-11

| Zadanie | Status roboczy | Potwierdzenie użytkownika | Uwagi |
|---|---|---|---|
| Uporządkowanie kolorystyki panelu i motywu | **ukończony** | **zatwierdzone 2026-11-11** | Zaakceptowana wersja 0.1.82 |
| Ujednolicenie wypełnień zakładek NI | **ukończony** | **zatwierdzone 2026-11-11** | Akceptacja 0.1.82; zachowane efekty i geometria |
| Utworzenie instrukcji projektu i procedury raportowania | **ukończony** | **zatwierdzone 2026-11-11** | Utworzono pierwszą wersję dokumentu |
| Odtworzenie historii zmian ze starego czatu | **ukończony** | **zatwierdzone 2026-11-11** | Użytkownik zatwierdził zakończenie zadania; zebrany materiał nie stanowi gwarancji odzyskania wszystkich szczegółów ani plików |
| Naprawa górnej części przycisku | **ukończony** (przeniesione) | **zatwierdzone 2026-11-11** | Użytkownik potwierdził ukończenie; szczegóły elementu i kodu nieudokumentowane |

## Procedura raportowania

Po komendzie „raportuj” przygotować raport dzienny:

| Zadanie | Co wykonano | Status proponowany | Czy wymaga potwierdzenia |
|---|---|---|---|

Uwzględniać wyłącznie zadania faktycznie rozpoczęte danego dnia; przeniesione z wcześniejszych dni oznaczać osobno. Po korekcie użytkownika aktualizować statusy i historię dokumentu. Wpisy zaakceptowane traktować jako obowiązujące, a odrzucone zachować w historii bez ponownego wdrażania.

## Historia dokumentu

- 2026-11-11: utworzono wersję początkową na podstawie dostępnych ustaleń; szczegóły historyczne wymagają weryfikacji na podstawie aktualnych plików i ewentualnego eksportu wcześniejszego czatu.

- 2026-11-11: użytkownik potwierdził status „w trakcie” dla odtwarzania historii; sprecyzowano, że nie zidentyfikowano jeszcze przycisku ani wersji 0.1.76.

- 2026-11-11: użytkownik zatwierdził raport dzienny: wszystkie trzy zadania mają status **ukończony**. Zatwierdzenie zastępuje wcześniejsze statusy robocze. Nie oznacza automatycznie, że posiadamy pełny zapis dawnego czatu lub dokładny kod poprawki przycisku.

## Nowe zadanie — 2026-11-11: ujednolicenie zakładek w NI

- **Status:** ukończony — zaakceptowane 2026-11-11 w wersji 0.1.82. Poniższy stan i następny krok opisują etap historyczny sprzed wdrożenia.
- **Zakres:** wspólny wygląd zakładek w panelu Gracze online, konfiguracji, rzemiośle i innych panelach używających tego samego komponentu.
- **Cel:** zastosować istniejący, zaakceptowany styl przycisków Motywu NI (paleta grafitowa i akcent turkusowy), zachowując aktywny/nieaktywny/hover, działanie i geometrię.
- **Stan:** jest zrzut zakładek; odczytano z GitHuba `dist/motyw.user.js` (wersja 0.1.76); selektory i konkretne reguły do ustalenia. Nie wykonano jeszcze modyfikacji kodu.
- **Następny krok:** przeanalizować pliki motywu pobrane z GitHuba i znaleźć właściwe selektory; przygotować selektywną poprawkę, przetestować w różnych panelach i uzyskać potwierdzenie użytkownika.

- 2026-11-11: dopisano obowiązek pracy bezpośrednio na połączonym GitHubie, publiczne repo Motywu NI, oddzielne prywatne repo dodatków oraz udzielony przez Fireera dostęp do jego repozytorium. Zweryfikowano odczyt publicznego repo i wersję 0.1.76.

- 2026-11-11: użytkownik podał dokładne nazwy dwóch pozostałych repozytoriów: `Truciaczek/Dodatki-Truciaka` (prywatne) i `KoniecDniaDziecka/Gogatki` (Fireera). Sprawdzono dostęp, widoczność i uprawnienia przez GitHub.

## Fundament kolorystyczny motywu interfejsu NI — ustalenie zatwierdzone 2026-11-11

**Zakres:** trzy barwy bazowe dotyczą motywu interfejsu NI. Nie upoważniają do zmiany czerwonych akcentów własnego panelu dodatków Truciaka na turkusowe. Korekta użytkownika 2026-11-11 ma pierwszeństwo przed wcześniejszym rozszerzeniem palety na panel.

**Trzy kolory źródłowe, od których rozpoczęto projekt (podstawowe i nadrzędne):**

| Rola | HEX | Znaczenie |
|---|---|---|
| Turkus firusiowy — akcent podstawowy | `#12C9BD` | Główny kolor wyróżnień i elementów interaktywnych |
| Grafit ciemny — tło podstawowe | `#171B20` | Główne ciemne tło motywu i dodatków |
| Grafit jaśniejszy — powierzchnia podstawowa | `#252B31` | Drugi główny kolor powierzchni, paneli i gradientów |

**Zasada projektowa:** tylko te trzy barwy stanowią oryginalną bazę kolorystyczną projektu. Wszystkie inne odcienie są **poboczne, wtórne**, powstałe na bazie tych trzech kolorów w toku rozwoju motywu. Nie przedstawiać barw pobocznych jako równorzędnych kolorów źródłowych. Przy projektowaniu nowych elementów zaczynać od tych trzech kolorów; odcienie pochodne stosować pomocniczo, dla kontrastu, ramek, gradientów i stanów interakcji.

**Dotychczas używane barwy pomocnicze (niepodstawowe):** `#668298` (niebieskoszary kontur), `#25494B` i `#142D30` (przygaszony gradient turkusowy), `#C7D0D9` (jasny tekst). Lista jest przykładowa, nie zastępuje trójkolorowego fundamentu.

**Historia:** 2026-11-11 — użytkownik jednoznacznie wskazał `#12C9BD`, `#171B20` i `#252B31` jako pierwotne, podstawowe kolory, a pozostałe jako poboczne wywodzące się z nich. Zapisano jako trwałą zasadę projektu.


## Mapa zastosowań kolorów — zatwierdzona hierarchia, stan 2026-11-11

**Kolory źródłowe (niezmienne jako punkt wyjścia):** `#12C9BD` — akcent firusiowy; `#171B20` — najciemniejsze główne tło; `#252B31` — jaśniejsze główne tło i powierzchnie. Pozostałe odcienie są pochodnymi lub technicznymi kolorami uzupełniającymi; ich użycie nie zmienia hierarchii.

| Kolor | Rola i dotychczasowe zastosowania | Uwagi |
|---|---|---|
| `#12C9BD` | Główny turkus: tekst/akcent aktywnych przycisków, obrysy elementów interaktywnych, hover, wybrane wskaźniki i paski postępu, akcent pól i kontrolek | **Podstawowy** |
| `#171B20` | Najciemniejsze tła okien, paneli, wnętrza ramek, dolna część gradientu grafitowego, przerwa między liniami wielowarstwowych obrysów | **Podstawowy** |
| `#252B31` | Jaśniejsze powierzchnie paneli i przycisków, górna część gradientu grafitowego, tła drugorzędne | **Podstawowy** |
| `#668298` | Niebieskoszare obramowania i linie oddzielające, kontury okien, dekoracje, uchwyty pasków przewijania | **Poboczny** |
| `#25494B` | Górna część przygaszonego turkusowego gradientu przycisków i pozycji menu | **Poboczny** |
| `#142D30` | Dolna część tego samego gradientu | **Poboczny** |
| `#C7D0D9` | Jasny, neutralny tekst treści w ciemnych panelach | **Poboczny, tekstowy** |
| `#203B40` | Wypełnienie wyróżnionych/aktywnych pozycji i elementów menu | **Poboczny, stan aktywny** |
| `#304149` | Rozjaśniony grafit z niebieskawą domieszką, użyty w odrzuconym teście zakładek | **Eksperymentalny, NIE zatwierdzony** |
| `#64E5DC` | Jaśniejszy turkus obramowania w stanie hover/pressed niektórych zielonych przycisków | **Poboczny, interakcja** |

**Zatwierdzone zestawienia używane w kodzie Motywu NI 0.1.76:** gradient grafitowy `#252B31 → #171B20`; gradient przygaszony turkusowy `#25494B → #142D30`; ramki przycisków mogą łączyć `#12C9BD` i wewnętrzny odstęp `#171B20`. Nie traktować jednak konkretnego stylu zakładek jako zatwierdzonego — użytkownik odrzucił próby skopiowania wyglądu rozwijanych przycisków. Projekt zakładek jest nadal otwarty i wymaga nowego kierunku.

**Reguła dalszej pracy:** przy każdej zmianie odróżniać (1) kolory bazowe, (2) pochodne i ich funkcje, (3) eksperymentalne propozycje. Nie zamieniać ról pobocznych odcieni bez wyraźnego uzgodnienia; nie uznawać testów konsolowych za zaakceptowany wygląd. Przy zmianie przeznaczenia koloru dopisać to do tej mapy i historii.

**Historia:** 2026-11-11 — uzupełniono zapis o konkretne zastosowania kolorów pomocniczych, w tym rozróżnienie stylów istniejących i odrzuconych eksperymentów.

## Audyt kolorystyki — 2026-11-11, Motyw NI 0.1.81

**Status zadania: w trakcie — audyt i uporządkowanie dokumentacji wykonane, do weryfikacji użytkownika.** Polecenie „uporządkowanie kolorystyki działaj nad tym” otwiera dalszą pracę nad tym zadaniem. Wcześniejszy raport oznaczał jako ukończone zapisanie zasad, nie ujednolicenie całej implementacji.

Źródła sprawdzone przez GitHub: `README.md`, `modules/ebony-theme.js` (blob `f67bc055cedeafebeb0c4ed7acdbdf263057a3f7`) i `dist/motyw.user.js` (blob `d0adda95c7e722e35dd2abb002cc851bc5c8606e`, wersja 0.1.81). Poniższy opis dokumentuje kod; nie stanowi zatwierdzenia nowych barw ani zmiany wyglądu. Nie przeprowadzono testu w działającej grze.

### Uporządkowana mapa ról

| Grupa | Kolory | Zastosowanie potwierdzone w kodzie |
|---|---|---|
| Baza nadrzędna | `#12C9BD`, `#171B20`, `#252B31` | Turkus akcentów; ciemne tło; jaśniejsze powierzchnie |
| Kontur pomocniczy | `#668298` | Ramki, podziały, uchwyty przewijania; także warianty alfa 55 i 66 w panelu |
| Gradient turkusowy | `#25494B → #142D30` | Tło kafelków paska, pozycji menu kontekstowego i opcji rozwijanych w stanie spoczynku |
| Gradient grafitowy | `#252B31 → #171B20` | Zwykłe przyciski oraz interakcja kafelków, menu kontekstowego i opcji rozwijanych |
| Podświetlenie pozycji | `#203B40` | Aktywne karty czatu/cards-header; hover starszego menu i odpowiedzi dialogowych |
| Jasne teksty | `#EDF3F7`, `#DCE6EE`, `#C7D0D9`, `#B1C0CB` | HUD/nagłówki, tekst ogólny, treść, opisy/status panelu |
| Detal zielonych przycisków NI | `#64E5DC`, `#101B20` | Jasny kontur i ciemny tekst przy turkusowym wypełnieniu hover/pressed w ogólnej regule .green; reguły paska nadpisują ją grafitem |
| Pasek doświadczenia | `#49DCD1 → #12C9BD → #0D7B76` | Trójstopniowy gradient postępu |
| Detal szybkich slotów | `#101419` | Zewnętrzny kontur slotów przedmiotów użytkowych |
| Drewno proceduralne | `#24292D`, `#111416`, `#1B2024`, `#70777D` | Gradient i słoje dekoracyjnego SVG; nie zastępować jednolitym tłem |
| Cień | `#000`, `#0009` | Cień tekstu HUD oraz panelu |
| Rubinowy akcent panelu | `#EF5350` | Tytuły dodatków, zaznaczenia checkboxów, fokus, przycisk zamknięcia, stopka, hover suwaka; także fokus kafelka Truciaka |
| Przyciski techniczne panelu | `#38566C`, `#6D879A` | Wypełnienie i obramowanie „Ponów pobieranie” oraz przycisku odświeżenia po zmianach |
| Komunikaty błędów | `#FFBD89` | Tekst błędu w panelu dodatków |

Wielkość liter w zapisie HEX nie zmienia koloru. Warianty z alfa opisują przezroczystość, nie nowy kolor bazowy. Określenie „pochodne” opisuje hierarchię projektu, nie dowodzi matematycznego wyprowadzenia każdej istniejącej barwy z trzech podstawowych. Rubinowy akcent i barwy komunikatów mają odrębne funkcje w aktualnej implementacji.

### Stany interakcji — doprecyzowanie wcześniejszej mapy

- Kafelki paska NI: spoczynek — gradient turkusowy; hover/otwarte/wciśnięte/aktywne — gradient grafitowy. Tekst i kontur pozostają turkusowe. Nie odwracać tej relacji.
- Menu kontekstowe i opcje list rozwijanych: analogicznie turkusowy spoczynek, grafitowa interakcja.
- `#203B40` nie jest uniwersalnym kolorem stanu aktywnego: dotyczy konkretnych kart i starszych selektorów menu/dialogu.
- W instalatorze 0.1.81 występują dodatkowe reguły `.tabs-nav > .card`: nieaktywna karta `#171B20`, aktywna `#252B31`. Nie występują one w odczytanym pliku modułu. To różnica między źródłem modułu a osadzoną paczką, wymagająca sprawdzenia procesu budowania przed edycją.
- Zakładki pozostają osobnym zadaniem bez potwierdzonego efektu. Odrzucony eksperyment `#304149` nie wraca do palety.

### Otwarte punkty

1. Potwierdzić, czy rubinowy akcent panelu Truciaka i niebieskie przyciski techniczne pozostają celowymi wyjątkami, czy użytkownik chce ich ujednolicenia z turkusem.
2. Przed refaktoryzacją do wspólnych zmiennych sprawdzić proces generowania runtime i instalatora, aby nie zgubić reguł obecnych wyłącznie w paczce.
3. Dalsze zmiany wyglądu wykonywać w uzgodnionym zakresie; nie traktować audytu jako zgody na usunięcie wyjątków, tekstur lub kolorów znaczeniowych.

**Historia:** 2026-11-11 — wznowiono zadanie na polecenie użytkownika, sprawdzono kod 0.1.81, rozszerzono mapę kolorów, doprecyzowano stany interakcji i odnotowano różnicę reguł zakładek między modułem a instalatorem. Kod repozytorium nie został zmieniony.



## Uporządkowanie kolorystyki — przygotowanie 0.1.82, 2026-11-11

**Status: w trakcie — kod ukończony lokalnie i sprawdzony automatycznie, publikacja zablokowana, wygląd oczekuje testu użytkownika.** Użytkownik poleceniem „zrob tak zeby bylo dobrze” zlecił wybór spójnego rozwiązania.

- Panel Truciaka: turkusowe akcenty #12C9BD, tła #171B20 i #252B31. Wspólna paleta w tools/panel-palette.css; przyciski techniczne otrzymały przygaszony turkusowy gradient i grafitowy hover/active. Końcowe reguły zastępują ich wcześniejszy niebieski wygląd. Fokus, tytuły dodatków i zaznaczenia są turkusowe, statusy stonowane. Kolor błędów #FFBD89 zachowany dla czytelności.
- Rubinowa ikona T wraz z ramką i grafiką zachowana. Fokus kafelka jest turkusowy, zgodny z pozostałymi kontrolkami.
- Doprecyzowanie audytu: runtime 0.1.81 miał błąd składni przy dodaniu zakładek — nieucieczone nowe wiersze wewnątrz literału JSON osadzonego modułu. node --check potwierdził błąd przy wierszu 387. Nie ustalono, czy to jedyna przyczyna zgłoszenia „nie działa”.
- Reguły zakładek umieszczono w modules/ebony-theme.js i przebudowano runtime oraz instalator. Zachowano zakres 0.1.81: wypełnienia kart ciemne nieaktywne i jaśniejsze aktywne, bez zmiany cieni, geometrii i pseudo-elementów. Wygląd nadal niezatwierdzony.
- Budowanie pobiera wersję z version.json zamiast przywracać na sztywno 0.1.76. Przed zapisaniem obu paczek sprawdza składnię JS. README, manifest, runtime i instalator mają wersję 0.1.82.
- Testy: 8/8 istniejących zestawów przeszło; dodatkowo składnia osadzonego modułu i paczek, zgodność fallbacku instalatora, deterministyczne przebudowanie oraz git diff --check. Bez testu w zalogowanej grze.
- Lokalny commit b2f0f28: v0.1.82: unify panel palette and rebuild valid tab runtime. Wysłanie na main zostało odrzucone przez automatyczną kontrolę zatwierdzania: brak wyraźnej zgody na zdalną publikację i niezweryfikowany stan własności/ochrony gałęzi. Nie opublikowano tego wydania; wymagana zgoda użytkownika przed ponowieniem.
- Po publikacji: F5 z włączonym motywem; sprawdzić panel T, kontrolki i zakładki. Starsza instalacja bez loadera wymaga aktualizacji userscriptu. Nie oznaczać zadania jako zaakceptowanego przed potwierdzeniem wyglądu.
- Zachowano filtry drewna, grafiki, wykluczenia launcherów i aktualizację/cache/fallback. Prywatne dodatki i repo Fireera bez zmian.

Historia: 2026-11-11 — przygotowano lokalnie 0.1.82, testy zaliczone, publikacja oczekuje zgody.


## Stała zgoda na aktualizacje — 2026-11-11

Użytkownik: „zawsze aktualizuj, masz moja zgode, jak cos bedziemy cofac zmiany”. Zgoda obejmuje publikację przygotowanej wersji 0.1.82 oraz dalsze publikowanie sprawdzonych zmian w uzgodnionym zakresie we własnych repozytoriach projektu, bez ponawiania pytania. Poprzednia blokada publikacji jest wpisem historycznym; zgoda została udzielona po jej zgłoszeniu.

**Publikacja zakończona:** 2026-11-11 — wersję 0.1.82 opublikowano przez integrację GitHub na main repozytorium Truciaczek/Motyw. Commit: 909a9688fe36cc462b645744d69ac5d00af604bb. Drzewo: 17c3600ceead6fc23f87d3220ddb83c6a31d9742. Publikacja autoryzowana stałą zgodą użytkownika; poprzednia blokada rozwiązana. Status zadania: w trakcie, oczekuje wyłącznie potwierdzenia efektu w grze, nie zgody na publikację.


## Akceptacja wersji 0.1.82 — 2026-11-11

Użytkownik po publikacji i instrukcji sprawdzenia panelu oraz zakładek odpowiedział „akceptuje”. **Uporządkowanie kolorystyki i ujednolicenie wypełnień zakładek: ukończone, zaakceptowane.** Wersja 0.1.82 stanowi zatwierdzony punkt odniesienia. Zachować turkusowe kontrolki i grafitowe tła panelu, rubinową ikonę T, kolory błędów oraz ciemne nieaktywne/jaśniejsze aktywne zakładki z zachowanymi efektami. Wcześniejsze wpisy o oczekiwaniu na potwierdzenie są historyczne i zostały zastąpione tą akceptacją. Nie przywracać odrzuconych wariantów.


## Uzupełnienie z rozmowy „Tworzenie dodatku Margonem” — przegląd 2026-11-11

Zakres dowodów: odnalezione fragmenty wcześniejszej rozmowy z 9–11 listopada 2026, porównane z instrukcją w wersji 14. Nie odzyskano pełnego eksportu rozmowy; poniższa lista nie gwarantuje kompletności. Same wymagania oraz deklaracje asystenta nie są dowodem działania.

### Historycznie potwierdzone działanie — chronić przed regresją

| Element | Odnalezione potwierdzenie | Uzupełnienie instrukcji |
|---|---|---|
| Widoczność ikony Maddonza przy włączonym motywie | 2026-11-10: użytkownik „Działa” po poprawce widoczności | Motyw nie może zasłaniać ani nadpisywać grafiki ikony. Historyczna poprawka obejmowała wyjątek dla jej tła i umieszczenie grafiki nad dekoracyjną warstwą kafelka. Wcześniej brakowało osobnego zapisu akceptacji tej naprawy. |
| Otwieranie menu przy ikonie | 2026-11-10: odnaleziono potwierdzenie „dziala” dla poprawki pozycjonowania; w tej rozmowie użytkownik wymagał zachowania jak u Firusia | Menu ma podążać za właściwym rogiem ikony/paska, otwierać się nad lub pod nią oraz odpowiednio w lewo/prawo. Ustalona geometria: odstęp 5 px od ikony i margines 8 px od ekranu. Chronić ten układ; sam zapis „panel ruchomy” nie wyjaśniał tej reguły. Nie przypisywać konkretnego numeru wydania bez dowodu. |
| Przywrócone działanie motywu | 2026-11-11: „dobra, motyw działa” w kontekście przywrócenia działającej wersji 0.1.78 | 0.1.78 to historyczny działający punkt odniesienia, nie wersja do automatycznego przywracania. Obecny zaakceptowany punkt odniesienia to 0.1.82. Zachowywać cieniowanie, glow i obramowania, a kolejne poprawki ograniczać do wskazanego elementu. |

### Wstępne testy prywatnego dodatku — ograniczony zakres potwierdzenia

2026-11-09 użytkownik napisał „wstępne testy poszły dobrze” w kontekście dodatku prywatnego. Odnaleziony kontekst obejmował zapis ustawień osobno dla postaci/świata i po F5 oraz blokady zmiany zestawu w grupie, na mapach bossów/przedsionków i zielonych/żółtych mapach. Uzupełnia to wcześniejsze ogólne ustalenia, ale **nie dowodzi osobnego przetestowania każdej blokady ani poprawności aktualnego kodu**. Zachować oznaczenie „wstępne testy pozytywne”, zamiast uznawać wszystkie te funkcje za w pełni zweryfikowane. Klucz konfiguracji powinien uwzględniać zarówno postać, jak i świat; nie mieszać zapisów między nimi.

### Dodatkowe decyzje i wymagania — bez dopisywania nieudowodnionego działania

- **Nazwa widoczna dodatku:** „Motyw - Stary ale jary” — ustalenie z 2026-11-10. Zachować dokładną nazwę, nie tylko ogólne określenie „Motyw NI” stosowane dla projektu/instalatora.
- **Dodatkowa tarczka:** odnaleziono zaakceptowane usunięcie dodatkowej tarczki z 2026-11-09. Nie przywracać tego dodatkowego elementu. Odnaleziony fragment nie identyfikuje jego selektora ani grafiki; nie utożsamiać go z ramką rubinowej ikony T.
- **Minimalizacja:** po F5 okno ma zachować stan minimalizacji. To wymaganie z 2026-11-09; brak odrębnego, jednoznacznego potwierdzenia działania w odnalezionych fragmentach.
- **Zasięg prywatnego dodatku:** 2026-11-10 doprecyzowano stałe 5 kratek pion/poziom i 4 po skosie. Poprawiono główny zapis instrukcji; nie jest to dowód aktualnej implementacji.
- **Aktualizacja samym F5:** wymaganie użytkownika z 2026-11-10. W historycznych fragmentach nie znaleziono osobnego potwierdzenia działania mechanizmu cache/fallback. Techniczne testy 0.1.82 opisane wcześniej pozostają odrębnym dowodem i nie są historyczną wypowiedzią użytkownika.
- **Instrukcje konsolowe:** 2026-11-10 użytkownik wymagał podawania, czy motyw ma być włączony czy wyłączony. Reguła była już zapisana — nie jest nową funkcją.

### Czego nie uznano za dodatkowo potwierdzone

Nie znaleziono wystarczająco jednoznacznych osobnych potwierdzeń użytkownika dla mapki PPM, współdziałania launcherów i zapisu ich miejsca, wszystkich etapów animowanej kuli życia/ostrzeżeń HP, usunięcia szwu drewna oraz pełnego działania aktualizacji/cache/fallback. Nie oznacza to, że nie działają: ich kod i dotychczasowe testy są odrębnym źródłem. Nie dopisano nieodnalezionych cytatów ani nie podniesiono samych deklaracji asystenta do rangi akceptacji.

Historia: 2026-11-11 — wykonano dodatkowy przegląd dostępnych fragmentów rozmowy „Tworzenie dodatku Margonem”. Uzupełniono brakujące historyczne potwierdzenia i decyzje, doprecyzowano stały zasięg oraz zapis per postać i świat. Nie zmieniano kodu ani numeru wydania motywu.


## Korekta podziału kolorystyki — 0.1.83, 2026-11-11

Użytkownik wskazał, że własne dodatki i menu miały czerwone akcenty, oraz polecił „Popraw to proszę cię”. Poprzednia zmiana na turkus w 0.1.82 wynikała ze zbyt szerokiej interpretacji porządkowania kolorów. **Nadrzędny podział: panel/menu/kontrolki własnych dodatków Truciaka — czerwone #EF5350; motyw interfejsu NI — grafitowo-turkusowy.** Zachować odrębność także przy dalszych pracach nad prywatnym dodatkiem i piorunem. Nie kopiować automatycznie palety NI do własnych dodatków.

W 0.1.83 przywrócono czerwone nazwy dodatków, zaznaczenia checkboxów, fokus, zamykanie, akcenty stopki i suwaków panelu oraz akcenty osadzonego paska dodatków. Przyciski panelu mają czerwone teksty/obrysy na grafitowym gradiencie; usunięto ich turkusowy gradient. Rubinowa ikona T zachowana. Kod osadzonego modułu NI (w tym zaakceptowane zakładki) pozostał bez zmian względem 0.1.82. Nie modyfikowano repozytorium prywatnego ani Fireera.

Weryfikacja: 8/8 zestawów testów zaliczone; dodatkowo sprawdzono brak turkusu w stylach panelu, czerwony fokus launchera, zachowany turkus i brak czerwieni w module NI, składnię wygenerowanych paczek i git diff --check. Bez testu w zalogowanej grze. Status: w trakcie — poprawka przygotowana i opublikowana, oczekuje potwierdzenia wizualnego użytkownika.

Wcześniejsza akceptacja 0.1.82 pozostaje historyczna: zatwierdzony wygląd NI zachowany, akceptację turkusowego panelu zastępuje powyższa korekta. Nie traktować wpisów opisujących turkusowy panel 0.1.82 jako obowiązującej zasady.

Publikacja 0.1.83: main Truciaczek/Motyw, commit 1a77974e3df590dbea0d737040c74ffbfff93600. Test użytkownika: F5 przy włączonym motywie, otworzyć panel T i sprawdzić czerwone akcenty panelu oraz zachowane turkusowe akcenty NI.


## Wyszukiwarka — grafika search.png, 0.1.84, 2026-11-11

Użytkownik potwierdził „Działa” dla czerwonych dodatków 0.1.83. Korekta czerwonego panelu ukończona i zaakceptowana.

W konsoli gry potwierdzono źródła: /img/gui/search.png jako border-image-source części .search-wrapper; w innych wariantach lupka pochodzi z buttony.png na pozycji -681px -162px. Przesłany i obejrzany search.png ma 356 × 29 px i zawiera już lupkę, kwadratową ramkę i kamienne tło pola. Nie rozdzielać mylnie tej konkretnej grafiki na lupkę i tło z różnych plików.

Polecenie użytkownika: najjaśniejszy szary poza lupką zamienić na #171B20, pozostałe odcienie odpowiednio przyciemnić, samą lupkę na podstawowy turkus #12C9BD; publikować bez pytania.

Przygotowano assets/search.svg: oryginalny PNG osadzony w samowystarczalnym SVG, z liniowym filtrem luminancji mapującym najjaśniejszy piksel poza lupką (luminancja 61.2074) na RGB 23,27,32. Zachowano fakturę, ramki, oryginalną alfę i rozmiar. 110 jaśniejszych pikseli kształtu lupki w obszarze x=8..24, y=7..22 zmapowano na turkus z zachowaniem jasności; najjaśniejsze na dokładne #12C9BD. To zasób o natywnych rozmiarach, nie wygenerowany nowy rysunek.

Integracja tools/search-background.js podmienia wyłącznie border-image-source elementów .search-wrapper, których aktualny plik ma ścieżkę /img/gui/search.png. Zachowuje border-image-slice, szerokości, geometrię i tekst; obserwuje nowo otwierane okna i przy wyłączeniu motywu przywraca poprzedni styl. Nie modyfikuje wariantów używających tylko buttony.png ani czerwonych paneli dodatków.

Wersja 0.1.84: zaktualizowano źródło, runtime, fallback instalatora i manifest. 8/8 istniejących zestawów testów przeszło; test modułu uzupełniono o nowe osadzone zasoby; git diff --check poprawny. Nie wykonano podglądu w przeglądarce ani testu w grze: lokalna przeglądarka nie uruchomiła się w dostępnym środowisku. Status wyszukiwarki: w trakcie — opublikowana do testu użytkownika, efekt niezatwierdzony.

Test: F5 przy włączonym motywie, otworzyć wyszukiwarkę z kamiennym tłem; sprawdzić ciemny grafit i turkusową lupkę.


## Zatwierdzony raport końcowy — 2026-11-11

Użytkownik wybrał: „Wyszukiwarka też działa — wszystko ukończone”. Potwierdzenie zamyka otwarte zadanie wyszukiwarki i zatwierdza statusy przedstawionego raportu.

| Zadanie | Status zatwierdzony | Uwagi |
|---|---|---|
| Instrukcja projektu i raportowanie | **ukończony** | Zasady i stała zgoda na publikowanie zmian zapisane |
| Odtworzenie historii projektu | **ukończony** | W zakresie odzyskanych ustaleń; bez gwarancji pełnego eksportu rozmowy |
| Weryfikacja repozytoriów | **ukończony** | Dostęp i podział projektów zapisane |
| Kolorystyka i zakładki NI | **ukończony** | Akceptacja 0.1.82; korekta czerwonego panelu obowiązuje od 0.1.83 |
| Przywrócenie czerwonych dodatków | **ukończony** | 0.1.83 potwierdzone jako działające |
| Dodatkowy przegląd starej rozmowy | **ukończony** | Uzupełnione odnalezione potwierdzenia i wymagania |
| Grafika wyszukiwarki | **ukończony** | 0.1.84 działa; zaakceptowana grafitowa faktura i turkusowa lupka |
| Turkusowa kolorystyka własnego panelu dodatków | **odrzucony** | Pozostaje wycofana; zatwierdzenie raportu nie przywraca tego wariantu |
| Naprawa górnej części przycisku — zadanie przeniesione | **ukończony** | Wcześniejsze zatwierdzenie zachowane |

**Obecny zaakceptowany punkt odniesienia: Motyw NI 0.1.84.** Zachować rozdzielenie czerwonych własnych dodatków i grafitowo-turkusowego NI oraz zaakceptowaną wyszukiwarkę. Wcześniejsze wpisy o oczekiwaniu wyszukiwarki na test opisują etap historyczny; zastępuje je niniejsze potwierdzenie. Brak otwartych zadań w zatwierdzonym raporcie.


## Próba ramki paska zakładek — 0.1.85, 2026-11-11

Użytkownik ponownie wyraźnie polecił kontynuować uzgodnione prace i publikować bez czekania na każdorazowe potwierdzenia; czekać dopiero na jego wyraźne polecenie. Nie mylić tego z automatyczną akceptacją efektu.

Odczyt z konsoli wskazał grafikę /img/gui/friend-header.png jako border-image-source warstwy .world-window__tabs.tabs-nav::before. To wspólna szara ramka całego paska, nie podwójne turkusowe obramowanie kafelków i nie osobne cienie zakładek.

Na polecenie użytkownika zastosowano próbnie jaśniejszy podstawowy grafit #252B31. tools/tab-frame.js pobiera aktualny plik wskazany w stylu warstwy ::before, mierzy najwyższą luminancję widocznych pikseli i tworzy osadzony SVG z liniowym filtrem mapującym ten szczyt na RGB 37,43,49. Pozostałe odcienie odpowiednio ciemniejsze. Alfa, wymiary, wycinki border-image i geometria zachowane. Podmieniany jest wyłącznie border-image-source warstwy ::before tych .tabs-nav, które używają friend-header.png; wypełnienia, teksty i cienie kart bez zmian. Obserwacja nowych okien, cache i cleanup po wyłączeniu motywu. Przy błędzie wczytania pozostaje oryginalna ramka.

Opublikowano 0.1.85 na main Truciaczek/Motyw. Przeszło 8/8 istniejących zestawów testów automatycznych, składnia paczek i git diff --check. Nie sprawdzono efektu wizualnego w grze. Status zadania: w trakcie — próba opublikowana, oczekuje oceny użytkownika. Zatwierdzonym punktem odniesienia pozostaje 0.1.84 do czasu akceptacji tej próby.

Test: F5 przy włączonym motywie; otworzyć Graczy online i sprawdzić szarą ramkę wokół całego paska zakładek.


## Akceptacja ramki zakładek — 0.1.85, 2026-11-11

Użytkownik odpowiedział „akceptuje” na opublikowaną próbę ramki. **Ramka paska zakładek friend-header.png w jaśniejszym graficie #252B31: ukończona i zaakceptowana.** Zachować jej kształt, alfę, cieniowanie i geometrię, a także niezależne wypełnienia i cienie kart. Wcześniejsze wpisy o próbie oczekującej oceny są historyczne. **Aktualny zatwierdzony punkt odniesienia: Motyw NI 0.1.85.**


## Sloty przedmiotów 1–8 przy kuli życia — zaakceptowane 2026-11-11

Użytkownik potwierdził: „to jak masz zapisane, to super, bo akceptuje jak to zrobiles”. **Obecny wygląd ośmiu dolnych slotów: ukończony i zaakceptowany.** Akceptacja dotyczy istniejącego wyglądu, nie nowej zmiany kodu.

Selektor: .bottom-panel .slots .usable-slot.interface-element-one-item-slot-2. Tło #171B20, ramka #252B31, zewnętrzny obrys #101419. Zachowane natywne cienie, wymiary, numeracja 1–8 i działanie slotów. Są to szybkie sloty przedmiotów użytkowych, osobne od ornamentów kuli i ramek przycisków paska. Wygląd realizowany przez CSS, nie wymaga podmiany osobnego obrazka.

Odnaleziony historyczny opis wiązał wprowadzenie grafitowej kolorystyki z wersją 0.1.66; bieżąca akceptacja użytkownika stanowi bezpośrednie potwierdzenie wyglądu. Zachować ten stan przy dalszych pracach. Wcześniej instrukcja wymieniała tylko zewnętrzny kontur #101419; teraz opis jest uzupełniony o cały zestaw i akceptację. Numer wydania pozostaje 0.1.85.


## Pominięte krawędzie ornamentów dolnego HUD — 0.1.86, 2026-11-11

Użytkownik wskazał dwa fragmenty bezpośrednio z assets/buttony.png i polecił znaleźć je oraz poprawić. Potwierdził, że stara kolorystyka dotyczy ornamentu, a wskaźnik pingu jest osobnym elementem do późniejszej pracy. Nie przypisywać usterki innemu plikowi bez dowodu.

Porównano atlas z oryginałem sprzed edycji (git f034339). W zewnętrznych ornamentach przy kuli, w prostokątach x=450..493 / x=612..652, y=905..951, odnaleziono 244 widoczne piksele pozostawione w oryginalnej kolorystyce. Przekolorowano wyłącznie te piksele, które pozostawały identyczne z oryginałem. Użyto istniejącego mapowania ornamentów: luminancja × [0.349020, 0.435294, 0.498039] + [37,43,49], z wygaszeniem ku czerni dla luminancji poniżej 32. Już przekolorowanych pikseli nie kolorowano ponownie.

Zmieniono faktyczny assets/buttony.png; zachowano rozmiar 902 × 1122 i identyczną alfę. Porównanie pikselowe potwierdziło brak zmian poza wskazaną maską, w centralnej części szkła kuli i arkuszu ikon pingu. Przebudowano runtime i fallback instalatora jako 0.1.86. Wszystkie 8 istniejących zestawów automatycznych testów kodu oraz git diff --check zaliczone. Bez potwierdzenia wizualnego w grze.

Status: w trakcie — poprawka opublikowana na main Truciaczek/Motyw do oceny użytkownika. Zatwierdzonym punktem odniesienia pozostaje 0.1.85. Test: F5 przy włączonym motywie, porównać boczne ornamenty kuli, szczególnie krawędź obok pingu. Samego wskaźnika pingu nie zmieniano.


## Akceptacja ornamentów 0.1.86 i identyfikacja ikon pingu — 2026-11-11

Użytkownik potwierdził „akceptuje” dla poprawki dwóch fragmentów ornamentów. **Ornamenty 0.1.86: ukończone i zaakceptowane. Aktualny zatwierdzony punkt odniesienia: 0.1.86.** Wcześniejszy status oczekiwania na ocenę zastąpiony akceptacją.

Następnie zlecono odnalezienie wycinków grafik pingu w buttony.png. Analiza kanału alfa arkusza 902 × 1122 wykazała sześć sąsiednich ikon: widoczne piksele y=190..215; zakresy x=590..605, 607..622, 624..639, 641..656, 658..673, 675..690. Krok poziomy 17 px, widoczny wycinek każdej ikony 16 × 26 px. Wspólny prostokąt całego zestawu x=590..690, y=190..215. Indeksy współrzędnych od zera. To położenie grafik w atlasie, nie potwierdzenie progów pingu ani klas poszczególnych stanów. Referencyjny CSS wskazuje .bottom-panel .lagmeter .lag. Dokładne background-position używane przez poszczególne klasy stanów wymagają odczytu CSS gry, zanim zmienimy ich logikę lub pozycje. Samych grafik pingu w tym kroku nie zmieniano.


## Kolorystyka sześciu stanów pingu — 0.1.87, 2026-11-11

Użytkownik wycofał potrzebę ustalania progów: zmieniamy tylko grafikę, logikę przełączania pozostawiamy grze. Poprawny opis oryginału według użytkownika: ciemna zieleń do jasnej zieleni, potem czerwony; puste pola szare. Nie opisywać jako żółtych.

Na polecenie użytkownika zmieniono sześć wycinków buttony.png: x=590+17k..605+17k, y=190..215, k=0..5. Szare części otrzymały istniejące niebieskoszare mapowanie ornamentów (skale [0.349020,0.435294,0.498039], offsety [37,43,49], wygaszenie cieni ku czerni poniżej luminancji 32). Wszystkie zielone piksele przeskalowano na turkus, względem globalnej najwyższej luminancji zieleni 178.4096: szczyt #12C9BD, ciemniejsze proporcjonalnie ciemniejsze. Zachowano różnice jasności między wariantami. Czerwone piksele pozostawiono bez zmian.

Weryfikacja pikselowa: 1675 pikseli neutralnych objętych maską mapowania, 543 zielone, 152 czerwone zachowane bitowo identycznie; alfa i cały obszar poza sześcioma wycinkami identyczne z 0.1.86. Sprawdzono obecność dokładnego #12C9BD. Nie zmieniano progów, klas, współrzędnych, rozmiarów, CSS ani logiki wskaźnika. 8/8 istniejących testów automatycznych i git diff --check zaliczone.

Opublikowano 0.1.87 na main Truciaczek/Motyw. Status: w trakcie — do oceny wizualnej użytkownika; zatwierdzony punkt odniesienia pozostaje 0.1.86. Test: F5 przy włączonym motywie, sprawdzić ping przy kuli; szare części dopasowane do ornamentu, zielone turkusowe, czerwone oryginalne.


## Akceptacja grafik pingu — 0.1.87, 2026-11-11

Użytkownik: „w kazdym razie w grze super, akceptuje wykonanie zadania”. **Kolorystyka sześciu grafik pingu: ukończona i zaakceptowana.** Zachować szare części dopasowane do naszych ornamentów, turkusowe odcienie zamiast zieleni z najwyższą jasnością #12C9BD oraz oryginalne czerwone piksele. Progi i logika przełączania pozostają natywne. Wcześniejszy status oczekiwania na ocenę jest historyczny. **Aktualny zatwierdzony punkt odniesienia: Motyw NI 0.1.87.**

W trakcie sprawdzania pliku użytkownik przesłał buttony (3).png: porównanie wykazało identyczność bajtową z atlasem 0.1.86 (blob 169e8444a49faf37005c09a98a2f953907ccb120), sprzed edycji pingu. Aktualny atlas 0.1.87 ma blob 12f47447d01bc186369db525e80fc11a9d24c1eb; różnica 2042 pikseli. Nie potwierdzono przyczyny otrzymania starszego pliku; nie przedstawiać cache jako ustalonej przyczyny. Działanie grafiki w grze użytkownik zaakceptował niezależnie od tej rozbieżności pobrania.


## Otoczenie oznaczenia mapy w górnym HUD — 0.1.88, 2026-11-11

Użytkownik wskazał nieprzekolorowane tło i ornament wokół czerwonego oznaczenia mapy i polecił poprawkę. W assets/buttony.png zlokalizowano pozostałość oryginalnych ciepłych/neutralnych pikseli na prawej stronie obramowania okrągłego znacznika oraz w jego otoczeniu. Obszar roboczy x=108..135, y=125..159. Porównano z atlasem sprzed edycji (f034339), zmieniając tylko nadal identyczne z oryginałem widoczne piksele o luminancji >16, z R>=G i R>=B-2. Zastosowano istniejące niebieskoszare mapowanie ornamentów (skale 0.349020/0.435294/0.498039, offsety 37/43/49), z wygaszeniem cieni poniżej luminancji 32. Usunięto pozostałości ciepłego koloru z rantu i jego tła. Już poprawione grafitowe powierzchnie zachowano.

Zmieniono 97 pikseli. Alfa i pozostałe obszary atlasu zachowane; czerwone grafiki znacznika i złote monety bez zmian. Przebudowano paczki do 0.1.88; wszystkie 8 istniejących zestawów automatycznych testów kodu przeszło. To nie jest test w działającej grze. Opublikowano na main Truciaczek/Motyw.

Status: w trakcie — poprawka do oceny użytkownika. Zatwierdzony punkt odniesienia pozostaje 0.1.87. Test: F5 przy włączonym motywie; sprawdzić tło i obwódkę wokół oznaczenia czerwonej mapy w górnym panelu.


## Cofnięcie poprawki górnego oznaczenia mapy — 0.1.89, 2026-11-11

Użytkownik polecił „cofnij” po wydaniu 0.1.88. **Poprawka tła i obramowania znacznika mapy z 0.1.88: odrzucona i cofnięta.** Przywrócono cały atlas assets/buttony.png identyczny z zaakceptowaną 0.1.87 (blob 12f47447d01bc186369db525e80fc11a9d24c1eb). Zachowano wszystkie zaakceptowane wcześniejsze zmiany, w tym ornamenty dolnego HUD i ping.

Opublikowano przywrócony wygląd jako nowszą wersję 0.1.89, aby mechanizm aktualizacji i cache nie odrzucił cofnięcia jako starszej wersji. Historia Git zachowana; bez resetowania gałęzi. Runtime i fallback instalatora przebudowane. 8/8 istniejących zestawów testów kodu zaliczone. Zadanie górnego oznaczenia mapy pozostaje nierozwiązane; nie ponawiać odrzuconej metody bez nowego ustalenia. Test przywrócenia: F5 przy włączonym motywie.


## Górny panel według wzoru użytkownika — 0.1.90, 2026-11-11

Po odrzuceniu 0.1.88 i niewdrożonych prób asystenta użytkownik sam poprawił panel w Paintcie i przesłał cały wzór image(20261111-173407).png. Zlecił analizę i przeniesienie do atlasu oraz podgląd. Następnie polecił usunąć pięć wystających pikseli dolnej lewej krawędzi; usunięto pięć widocznych pikseli wraz z dwoma bardzo słabymi pikselami antyaliasingu (y=173, x=137..143). Po podglądzie użytkownik polecił zaktualizować repozytorium i zapamiętać skalę kolorów. **Wzór użytkownika i jego przeniesienie do atlasu zaakceptowane do wdrożenia; efekt 0.1.90 w grze jeszcze niepotwierdzony.**

### Obowiązujący podział kolorów tego panelu

| Rola | Kolor / skala | Zasada |
|---|---|---|
| Ciemny kolor podstawowy | #171B20 = RGB 23,27,32 | Ciemne wnętrza pól panelu; zachować grafitowy charakter |
| Jaśniejszy kolor podstawowy | #252B31 = RGB 37,43,49 | Jaśniejsze powierzchnie i bazowy ciemny ton ornamentów |
| Tło pośrednie użyte przez użytkownika | **#21272C = RGB 33,39,44** | Główne tło wokół koła i pod złotem; odcień pomocniczy między dwoma podstawowymi grafitami, nie nowy kolor podstawowy |
| Okrągłe ciemne wnętrze | #0E0E0E w przeniesionym wzorze | Zachować zgodnie ze wzorem, nie rozjaśniać automatycznie na kolor ornamentu |
| Ornamenty | Niebieskoszara skala z zachowanymi jasnościami | Od ciemnych tonów opartych o #252B31 do jaśniejszych stalowych odcieni; nie jednolity turkus |
| Akcent podstawowy | #12C9BD | Pozostaje globalnym turkusowym akcentem NI; nie stosować do tła lub całej obwódki panelu bez uzgodnienia |

**Kluczowa reguła:** poza czarnym obrysem okrągłej części ornamentu oraz pod monetami ma być kolor **tła panelu**, nie kolor ornamentu. Zachować sam kształt ornamentu i czarną obwódkę, nie rzeźbić ich krawędzi na podstawie zgadywanego wielokąta. Monety, zielona ikona waluty i czerwone oznaczenie mapy zachowują własną kolorystykę.

Historyczna skala ornamentów stosowana w projekcie: dla luminancji Y w zakresie 0..255 kanały RGB = [0.349020,0.435294,0.498039] × Y + [37,43,49], z zachowaniem cieni i alfa. To opis istniejącego mapowania, nie polecenie ponownego filtrowania już pokolorowanych pikseli. **Bieżący panel przeniesiono bezpośrednio z ręcznego wzoru użytkownika; wzór ma pierwszeństwo przed ogólną formułą.**

### Wdrożenie i kontrola

Wzór 701 × 131 px dopasowano jako powiększenie 2×; próbki co drugi piksel odpowiadają prostokątowi atlasu x=82..432, y=108..173. Przeniesiono kolory na piksele o oryginalnej alfie 255, pomijając białe zewnętrzne tło zrzutu; oryginalne półprzezroczyste krawędzie zachowane. Wyjątek: świadomie usunięta wystająca końcówka. Zmieniło się 2049 pikseli: 2042 kolorystycznie oraz 7 alfa końcówki. Piksele poza prostokątem oraz cały ping identyczne z poprzednią wersją.

Do assets/buttony.png wdrożono dokładnie kopię buttony-user-panel-clean-preview.png, nie wcześniejsze odrzucone preview-v2. Podgląd izolowanego panelu miał dodatkowo ukryte sąsiednie fragmenty atlasu tylko dla prezentacji; tych osobnych ikon nie usuwano z właściwego arkusza.

Opublikowano 0.1.90, commit 7e8afc3cf0ebdf3e67444e039814b2c93139cb49, main Truciaczek/Motyw. Przebudowano runtime, fallback instalatora, manifest i README. 8/8 istniejących zestawów testów automatycznych zaliczone; dodatkowe porównanie sprawdziło zakres zmian, 7 świadomych zmian alfa i brak zmian pingu. Status: wdrożone, do potwierdzenia w grze po F5 przy włączonym motywie. Poprzednia akceptowana baza 0.1.87 i przywrócenie 0.1.89 pozostają w historii.


## Akceptacja górnego panelu — 0.1.90, 2026-11-11

Użytkownik po publikacji odpowiedział „akceptuje”. **Górny panel według ręcznego wzoru użytkownika, wraz z usunięciem wystającej końcówki: ukończony i zaakceptowany. Aktualny zatwierdzony punkt odniesienia: Motyw NI 0.1.90.** Zachować skalę grafitów #171B20 / pośredni #21272C / #252B31 i odrębną niebieskoszarą skalę ornamentów. Poza czarnym obrysem koła oraz pod monetami stosować tło panelu, nie kolor ornamentu. Wzór użytkownika i wdrożone piksele mają pierwszeństwo przed ponownym automatycznym przeliczaniem palety. Wcześniejsze wpisy o oczekiwaniu na test tej wersji opisują historię i zastępuje je niniejsza akceptacja.


## Obramowania czterech znaczników mapy — 0.1.91, 2026-11-11

W buttony.png zlokalizowano cztery kolorowe znaczniki: czerwony x=14..28, zielony x=30..44, żółty x=46..60, pomarańczowy x=62..76; wszystkie y=39..53 (15 × 15 px). To osobne grafiki od obramowania i tła górnego HUD.

Użytkownik polecił przekolorować szare części tak jak ornamenty i pokazać podgląd. Przedstawiono map-markers-comparison.png, po czym użytkownik odpowiedział „akceptuje, wdrażaj”. **Podgląd zaakceptowany i wdrożony jako 0.1.91.**

W każdym wycinku wybrano widoczne piksele neutralne: max(R,G,B)-min(R,G,B)<=24 i stosunek tej różnicy do max kanału <=0.18. Na ich luminancję zastosowano istniejącą skalę ornamentów: RGB = [0.349020,0.435294,0.498039] × Y + [37,43,49], z wygaszeniem ku czerni poniżej Y=32. Zmieniły się 152 piksele. Kolorowe części, alfa i wszystkie pozostałe piksele atlasu zachowane identycznie. Wdrożono dokładnie zaakceptowany plik podglądowy, bez ponownej interpretacji.

Opublikowano 0.1.91 na main Truciaczek/Motyw, commit 743f70fd7e670939b69cb00776511ad1c4231a16. Przebudowano runtime/fallback/manifest/README. Porównanie pikselowe zakresu i alfa poprawne; wszystkie 8 istniejących zestawów automatycznych testów zaliczone oraz git diff --check. Status: ukończony — podgląd zaakceptowany, wdrożenie zakończone; nie przypisywać osobnego testu w grze bez odpowiedzi użytkownika. Bieżący zaakceptowany wygląd obejmuje tę zmianę na bazie 0.1.90. F5 przy włączonym motywie pobiera wydanie 0.1.91.


## Podpięcie znacznika mapy do edytowanego atlasu — 0.1.92, 2026-11-11

Po wdrożeniu 0.1.91 użytkownik zauważył nadal oryginalny odcień przy znaczniku mapy. Odczyt konsoli potwierdził: .map_ball.red ma background-image z oryginalnego /img/gui/buttony.png, background-position -14px -38px; brak tła, cieni, filtrów i grafik pseudoelementów. Przyczyną jest brak podmiany osobnej warstwy znacznika, nie nowa nieznana nakładka.

W 0.1.92 dodano regułę .layer.interface-layer .positioner.top .hud-container .map_ball zmieniającą wyłącznie background-image na osadzony edytowany hudSprite. Wszystkie warianty kolorystyczne korzystają z naszego atlasu; ich background-position, klasy stanów, wielkości i zachowania pozostają natywne. Pikseli buttony.png w tym wydaniu nie zmieniano.

Opublikowano na main Truciaczek/Motyw; runtime i fallback przebudowane. 8/8 istniejących zestawów automatycznych testów kodu oraz git diff --check przeszło. Status: w trakcie — wymaga potwierdzenia efektu po F5 przy włączonym motywie. Nie traktować samej lokalizacji ikon w atlasie jako dowodu, że każdy element gry jest już podpięty do edytowanej grafiki.


## Akceptacja podpięcia znacznika mapy — 0.1.92, 2026-11-11

Użytkownik potwierdził „super, działa, akceptuje”. **Podpięcie .map_ball do naszego atlasu: ukończone i zaakceptowane w grze. Aktualny zatwierdzony punkt odniesienia: Motyw NI 0.1.92.** Zachować osobną regułę background-image dla znacznika mapy oraz natywne przesunięcia i klasy stanów. Wcześniejszy status oczekiwania na test zastępuje niniejsze potwierdzenie.


## Przezroczystość toru przewijania — 0.1.93, 2026-11-11

Użytkownik porównał panel Świat bez motywu i z motywem oraz wskazał, że oryginalny tor suwaka jest przezroczysty, a motyw błędnie dodaje pionowy kolorowy pas. Polecił poprawkę. Przyczyna: reguła .scroll-wrapper .scrollbar-wrapper .track miała background:#171b20!important.

W 0.1.93 zastąpiono ją background:transparent!important. Dotyczy wspólnego komponentu przewijania w Świecie i innych oknach. Reguły uchwytu .track .handle i jego hover zachowane bez zmian; nie ustawiano opacity:0 na rodzicu, co ukryłoby też uchwyt. Nie zmieniano wymiarów, geometrii ani przewijania. Zapis audytu przypisujący #171B20 torowi przewijania jest historyczny i został zastąpiony zasadą przezroczystego toru.

Opublikowano 0.1.93 na main Truciaczek/Motyw; runtime/fallback/manifest/README przebudowane. 8/8 istniejących zestawów automatycznych testów kodu oraz git diff --check zaliczone. Status: w trakcie — efekt w grze oczekuje potwierdzenia użytkownika. Test: F5 przy włączonym motywie, sprawdzić brak pionowego tła toru i widoczny działający uchwyt.


## Ramka paska danych Świata — 0.1.94, 2026-11-11

Użytkownik wskazał cienką ramkę wokół poziomego paska „Dane z…” i „Odśwież” i polecił ustawić ją w kolorze naszego suwaka. W aktualnym kodzie kolor spoczynkowy uchwytu to #668298. Dodano wyłącznie border-color:#668298!important dla .world-window__info. Zachowano szerokość/styl ramki, tło, tekst i przycisk. Nie zmieniano hover suwaka (#12C9BD) ani przezroczystości jego toru z 0.1.93.

Opublikowano 0.1.94 na main Truciaczek/Motyw; przebudowano runtime/fallback/manifest/README. 8/8 istniejących testów automatycznych i git diff --check zaliczone. Status ramki: w trakcie — do potwierdzenia wizualnego po F5 z włączonym motywem. Poprzednia poprawka przezroczystego toru 0.1.93 nadal bez osobnego potwierdzenia użytkownika.

## Akceptacja ramki paska danych — 0.1.94, 2026-11-11

Użytkownik po zmianie ramki .world-window__info na #668298 i sprawdzeniu jej zakresu odpowiedział „akceptuje, lecimy dalej”. **Ramka paska danych Świata: ukończona i zaakceptowana.** Zachować kolor uchwytu suwaka #668298 i dotychczasową grubość ramki. Akceptacja dotyczy ostatniego zadania ramki; nie stanowi osobnego potwierdzenia wcześniejszej przezroczystości toru suwaka 0.1.93. Wydanie 0.1.94 zawiera zaakceptowaną ramkę na dotychczasowej bazie; wcześniejszy zapis oczekiwania na ocenę tej ramki jest historyczny.



## Siatka graczy online i współdzielone tło — 0.1.95, 2026-11-11

Zlecenie: ramki komórek w kolorze uchwytu suwaka #668298; brązowe tło na najciemniejszy podstawowy #171B20, z uwzględnieniem wspólnych użyć. Konsola potwierdziła .players-online__item z border-color rgb(97,90,89), tłem przezroczystym oraz .world-window__bg.interface-element-middle-1-background z background-color rgb(29,18,16).

Wprowadzono border-color:#668298!important na wszystkie .players-online__item oraz background-color:#171B20!important na .world-window__bg i współdzieloną .interface-element-middle-1-background. Zmiana tej drugiej klasy obejmuje każde natywne okno, które jej używa, również inne niż Świat. Nie podmieniano border-image-source (middle_graphics.png), wycinków, geometrii ani hover/tekstów komórek. Nie dodawano globalnych reguł dla wszystkich tabel lub elementów o przypadkowo takim samym kolorze.

W repo i referencyjnych stylach znaleziono współdzielenie klasy tła .interface-element-middle-1-background; osobnego współdzielonego komponentu obramowania komórek poza .players-online__item nie potwierdzono. Nie dysponowano pełnym CSS gry, więc nie deklarować kompletnej listy nazw okien korzystających z klasy. Rodzeństwo klas middle-2/3/4 i wariant -stretch nie zostały objęte tym zleceniem, ponieważ sam wspólny plik ornamentu nie dowodzi identycznego tła.

Opublikowano 0.1.95 na main Truciaczek/Motyw, commit 04ee3361f3eb9de658d0d8ae6058883c7a98d63d. 8/8 istniejących zestawów testów automatycznych i git diff --check zaliczone. Status: w trakcie — efekt oczekuje oceny w grze. Test: F5 przy włączonym motywie, sprawdzić siatkę i tło Graczy online oraz pozostałe okna ze wspólną klasą tła.


## Akceptacja siatki i tła — 0.1.95, 2026-11-11

Użytkownik odpowiedział „akceptuje” na wydanie 0.1.95. **Siatka .players-online__item w kolorze #668298 oraz tło .world-window__bg / .interface-element-middle-1-background w kolorze #171B20: ukończone i zaakceptowane.** Chronić wspólny zakres klas, natywne grubości linii i ozdobne border-image. Wcześniejszy status oczekiwania na ocenę tej zmiany jest historyczny. Wydanie 0.1.95 zawiera zaakceptowany wygląd siatki i tła; nie przypisywać tej odpowiedzi jako osobnego potwierdzenia przezroczystości toru 0.1.93.


## Zatwierdzony raport dzienny i zamknięcie suwaka — 2026-11-11

Użytkownik wybrał opcję 1 raportu: „Zatwierdzam raport, suwak też działa — wszystkie aktywne zadania ukończone”. **Przezroczysty tor suwaka z 0.1.93: ukończony i zaakceptowany.** Zachować przezroczystość toru i widoczny uchwyt #668298 (hover #12C9BD). Wcześniejsze wpisy o braku osobnej akceptacji suwaka są historyczne.

Zatwierdzono status ukończony dla wszystkich 14 pozycji raportu: instrukcja/raportowanie/publikacja; repozytoria i dostępna historia; kolorystyka NI i zakładki; czerwone własne dodatki; wyszukiwarka; ramka zakładek; dokumentacja i akceptacja slotów 1–8; dolne ornamenty; ping; górny panel według wzoru użytkownika; obramowania i podpięcie znaczników mapy; przezroczysty tor suwaka; ramka „Dane z…”; siatka graczy i wspólne tło. Przeniesiona naprawa górnej części przycisku pozostaje ukończona.

Odrzucone warianty pozostają odrzucone: turkusowy panel własnych dodatków, poprawka górnego panelu 0.1.88 i niezaakceptowane wcześniejsze podglądy. Zatwierdzenie raportu ich nie przywraca. **Brak otwartych zadań w tym raporcie. Aktualny zatwierdzony punkt odniesienia: Motyw NI 0.1.95.**


## Skala turkusowych napisów menu — 0.1.96, 2026-11-11

Użytkownik polecił zmienić napisy w Świecie i innych menu, zachowując skalę jasności: czysta biel -> podstawowy firusiowy #12C9BD, ciemniejsze szarości -> proporcjonalnie ciemniejszy turkus.

Dodano tools/menu-text.js, osadzany przez build.py. Zakres: elementy z bezpośrednim tekstem wewnątrz .world-window, .tabs-nav, .cards-header-wrapper i .border-window .content (wspólna zawartość natywnych okien). Neutralność: max(R,G,B)-min(R,G,B)<=28. Współczynnik jasności = (0.2126R+0.7152G+0.0722B)/255; kolor wynikowy = zaokrąglone [18,201,189] × współczynnik, alfa zachowana. Przykłady: biel 255 -> #12C9BD, szarość 128 -> RGB 9,101,95; szarość 112 -> RGB 8,88,83. Używana jest jasność odczytana z obecnego stylu gry/motywu przed nałożeniem tej reguły; nie mapować ponownie już przyciemnionego wyniku.

Przy przeliczeniu wyłączana jest chwilowo wyłącznie własna reguła koloru; po zmianie klasy/tekstu/style, otwarciu nowego okna i hover kolory są odświeżane. Obserwacje grupowane przez requestAnimationFrame. Wyłączenie motywu usuwa style i odtwarza wcześniejsze atrybuty. Zachowano nieneutralne kolory znaczeniowe (czerwone, zielone, turkusowe), kolorystykę przycisków, popupów i tooltipów. Własne dodatki w Shadow DOM pozostają poza zakresem. Nie zmieniano grafik ani barw tła.

Opublikowano 0.1.96 na main Truciaczek/Motyw. 9/9 zestawów testów kodu zaliczone, w tym nowy test skali biel/szarość, zachowania alfa, pomijania kolorów znaczeniowych, odświeżania stanów i cleanup; git diff --check poprawny. Nie wykonano sprawdzenia wizualnego w zalogowanej grze. Status: w trakcie — do oceny po F5 przy włączonym motywie, szczególnie aktywne/przygaszone zakładki i napisy tabel. Ostatnia pełna zaakceptowana baza: 0.1.95.


## Etykiety, Od/Do i strzałka — 0.1.97, 2026-11-11

Użytkownik wybrał do wdrożenia wyłącznie punkty 1, 2 i 5 propozycji: „Filtruj poziom:” / „Rangi Graczy” #0FA79D; placeholdery „Od” i „Do” #0C867E; strzałka #12C9BD. Punkty 3 i 4 (wartość „Wszystkie” i pozycje listy) nie zostały objęte nową zmianą.

Reguły: .world-window .filter-label i .world-window .legend otrzymały color:#0FA79D; .world-window .start-lvl input::placeholder i .world-window .stop-lvl input::placeholder color:#0C867E i opacity:1. .world-window .menu-arrow oraz .border-window .menu-arrow mają filtr SVG truciak-menu-arrow-tint mapujący białą grafikę na #12C9BD z zachowaniem jasności i alfa. Filtr obejmuje sam element strzałki, nie cały przycisk; pozycje wycinków, rozmiar i obroty/stan rozwinięcia pozostają natywne. Grafiki buttony.png nie edytowano.

Opublikowano 0.1.97 na main Truciaczek/Motyw; runtime/fallback/manifest/README przebudowane. 9/9 istniejących zestawów testów kodu i git diff --check zaliczone. Status: w trakcie — do oceny po F5 przy włączonym motywie. Wcześniejsza skala napisów 0.1.96 nadal bez osobnego potwierdzenia użytkownika; nie traktować wyboru punktów propozycji jako pełnej akceptacji jej działania.


## Przyciemnienie etykiet Świata — 0.1.98, 2026-11-11

Na polecenie użytkownika przyciemniono „Filtruj poziom” i „Rangi Graczy” o około 30% względem #0FA79D. Nowy kolor #0B756E (RGB 11,117,110), uzyskany przez pomnożenie kanałów przez 0.7 i zaokrąglenie. Reguła dotyczy wyłącznie .world-window .filter-label i .world-window .legend. Placeholdery Od/Do #0C867E, strzałka #12C9BD oraz pozostałe napisy zachowane.

Opublikowano 0.1.98 na main Truciaczek/Motyw. Przebudowano runtime/fallback/manifest/README. 9/9 istniejących zestawów testów kodu i git diff --check zaliczone. Status: w trakcie — oczekuje oceny po F5 przy włączonym motywie. Kolor #0B756E zastępuje wcześniejszy #0FA79D dla tych dwóch etykiet; nie przenosić tej zmiany automatycznie na inne teksty.


## Przyciemnienie Od/Do — 0.1.99, 2026-11-11

Użytkownik polecił „od i do tez przyciemnij” w kontekście poprzedniego przyciemnienia etykiet o 30%. Placeholdery poziomu Od/Do zmieniono z #0C867E (12,134,126) na #085E58 (8,94,88), mnożąc kanały przez 0.7 i zaokrąglając. Zakres: .world-window .start-lvl input::placeholder oraz .world-window .stop-lvl input::placeholder. Zachowano opacity:1. Etykiety #0B756E i strzałka #12C9BD bez zmian; wpisywane wartości również bez zmian.

Opublikowano 0.1.99 na main Truciaczek/Motyw, runtime/fallback/manifest/README przebudowane. 9/9 testów automatycznych kodu i git diff --check zaliczone. Status: w trakcie — ocena po F5 przy włączonym motywie. Nie traktować kolejnego polecenia przyciemnienia jako zbiorczej akceptacji wcześniejszych etapów napisów.


## Wartości pól, kursor i krzyżyk czyszczenia — 0.1.100, 2026-11-11

Użytkownik wskazał, że po wpisaniu liczb w polach Od/Do wartości i migający kursor pozostają żółte, a krzyżyk czyszczenia biały. To odrębne warstwy od placeholderów. Zlecił odnalezienie wspólnych użyć i przeskalowanie do #12C9BD.

Wykorzystano wcześniej potwierdzone klasy: .ni-input input.default i .ni-input .clear-cross. Reguły obejmują .world-window oraz .border-window, a więc inne natywne okna używające tych samych pól; referencja CSS wskazuje też input.default w filtrach klanu. Nie potwierdzono kompletnej listy wszystkich okien w pełnym arkuszu gry.

Wpisywane wartości i caret-color ustawiono na #0D978E (RGB 13,151,142): przeskalowanie znanego beżu #CAC094, którego luminancja wynosi 190.9492/255, na kanały podstawowego turkusu [18,201,189]. To kolor referencyjny z wcześniejszych odczytów komponentu, nie nowy odczyt stylu wpisanej liczby. Krzyżyk ma ten sam filtr luminancji co strzałka: biel -> #12C9BD, ciemniejsze piksele proporcjonalnie ciemniejsze, alfa i pozycja grafiki zachowane. Placeholdery Od/Do nadal #085E58; etykiety #0B756E bez zmian.

Opublikowano 0.1.100 na main Truciaczek/Motyw; runtime/fallback/manifest/README przebudowane. 9/9 istniejących testów automatycznych kodu i git diff --check przeszło. Status: w trakcie — do oceny po F5 przy włączonym motywie. Test obejmuje wpisanie wartości, migający kursor, czyszczenie krzyżykiem i inne okna ze wspólnymi polami.


## Zbiorcza akceptacja napisów i kontrolek — 0.1.96–0.1.100, 2026-11-11

Użytkownik potwierdził: „wszystko co zrobiles od ostatniej akceptacji, akceptuje”. Ostatnia wcześniejsza akceptacja dotyczyła 0.1.95. **Wszystkie zadania z wydań 0.1.96, 0.1.97, 0.1.98, 0.1.99 i 0.1.100: ukończone i zaakceptowane.**

Obowiązujący wynik: neutralne napisy natywnych menu przeskalowane według jasności z bieli na #12C9BD; etykiety Filtruj poziom / Rangi Graczy #0B756E; placeholdery Od/Do #085E58; wpisywane wartości i kursor #0D978E; strzałki i krzyżyki czyszczenia z zachowaniem jasności grafiki, biel mapowana na #12C9BD. Zachować zakres współdzielonych komponentów, semantyczne kolory i czerwone własne dodatki. Wcześniejsze kolory pośrednich prób etykiet #0FA79D i placeholderów #0C867E pozostają historią, nie stanem docelowym.

Wcześniejsze wpisy o oczekiwaniu na ocenę wydań 0.1.96–0.1.100 zastępuje to potwierdzenie. **Aktualny zatwierdzony punkt odniesienia: Motyw NI 0.1.100. Brak otwartych zadań z tego pakietu.**


## Nowa numeracja wydań — 1.2.00, 2026-11-11

Użytkownik polecił: „i zamiast wersji 1.1.100 zrob po prostu 1.2.00, nie lec w wartosci 3cyfrowe”. Faktyczny poprzedni numer w repo wynosił 0.1.100; zgodnie z podanym numerem docelowym zmieniono go na **1.2.00**. To wyłącznie zmiana numeracji — wygląd i zachowanie zaakceptowanej 0.1.100 zachowane.

Obowiązujący schemat: 1.2.00, 1.2.01, 1.2.02 ... 1.2.99, następnie 1.3.00. Nie tworzyć końcówek trzycyfrowych, np. 1.2.100. Ostatni segment zapisywać dwucyfrowo. Historia wcześniejszych numerów pozostaje bez zmian.

Opublikowano 1.2.00 na main Truciaczek/Motyw; numer zsynchronizowany w version.json, README, runtime i fallbacku instalatora. Wszystkie 9 istniejących zestawów testów kodu przeszło, w tym porównywanie wersji i zgodność manifestu. **Aktualny zatwierdzony wygląd: 1.2.00, identyczny z zaakceptowaną 0.1.100.** Zadanie zmiany numeracji ukończone na polecenie użytkownika.


## Tytuły okien Świat, Konfiguracja itd. — 1.2.01, 2026-11-11

Użytkownik polecił objąć skalą firusiowego turkusu także napisy tytułów natywnych okien. Rozszerzono zakres tools/menu-text.js o .border-window:not(.tip-window) .header-label. Ta sama zasada luminancji: biel -> #12C9BD, ciemniejsze odcienie -> proporcjonalnie ciemniejszy turkus, alfa zachowana. Dla tytułów dodano obsługę jasnego beżu: R>=G>=B, R-B<=80, B>=100, który wcześniej nie przechodził filtru neutralnej szarości. Przykład #CAC094 -> RGB 13,151,142 (#0D978E). Kolory nasycone np. czerwone pozostają poza mapowaniem.

Zmiana dotyczy tylko tekstu, nie ornamentu, grafiki plakietki, cieni, fontu ani geometrii. Tooltipy i czerwony panel własnych dodatków poza zakresem. Rozszerzono test o beżowy tytuł oraz pominięcie czerwonego tytułu.

Opublikowano 1.2.01 na main Truciaczek/Motyw, zgodnie z numeracją dwucyfrowej końcówki. Runtime/fallback/manifest/README przebudowane. 9/9 zestawów testów kodu i git diff --check zaliczone. Status: w trakcie — do oceny po F5 przy włączonym motywie w Świecie, Konfiguracji i innych oknach. Ostatnia zaakceptowana baza: 1.2.00.


## Wspólna ikona informacji i — 1.2.02, 2026-11-11

Na polecenie użytkownika przekolorowano okrągłą ikonę i w stylu naszych ornamentów. Referencyjny CSS wskazuje .info-icon z pozycją -497px -199px w buttony.png; wcześniejsze odczyty gry potwierdzają użycie przy „Dane z…” (DIV.info-icon) i „Rangi Graczy” (SPAN.info-icon). Pełna lista ekranów nie została potwierdzona; wspólna klasa zapewnia jednak zastosowanie we wszystkich jej instancjach.

Edytowany obszar atlasu x=497..513, y=199..215. Widoczne piksele mapowano według luminancji Y: RGB=[0.349020,0.435294,0.498039]×Y+[37,43,49], z wygaszeniem ku czerni poniżej Y=32, identycznie jak w ostatnich poprawkach ornamentów. Zmieniono 149 pikseli; alfa i cały atlas poza ikoną identyczne z wcześniejszą wersją. Zachowane cieniowanie, ciemna litera i kształt.

Dodano scoped .info-icon {background-image: edytowany hudSprite!important}, aby wszystkie instancje korzystały z naszego atlasu, a nie oryginalnego pliku. Nie zmieniano pozycji wycinka, rozmiarów, obsługi podpowiedzi ani kliknięć.

Opublikowano 1.2.02 na main Truciaczek/Motyw; runtime/fallback/manifest/README przebudowane. 9/9 istniejących testów kodu i git diff --check zaliczone; kontrola pikselowa potwierdziła zakres i identyczność alfa. Status: w trakcie — do oceny po F5 przy włączonym motywie. Wcześniejsza zmiana tytułów 1.2.01 także nadal oczekuje potwierdzenia. Ostatnia zaakceptowana baza: 1.2.00.

## Przyciemnienie samej litery i — 1.2.03, 2026-11-11

Użytkownik zaakceptował pozostałe kolory ikony informacji i polecił przyciemnić wyłącznie literę i o 50%. W assets/buttony.png zmniejszono kanały RGB pikseli litery o połowę (z zaokrągleniem), zachowując alfa, okrągłe tło, obwódkę i resztę atlasu. Maska: x=504..506, y=203..211, piksele widoczne z G<96; obejmuje kropkę, trzon i wygładzenie litery.

Opublikowano 1.2.03 na main Truciaczek/Motyw, commit 28b72748f5e9587c6b2d1665aa999f523c01cbab. Przebudowano runtime, instalator, README i manifest. Wszystkie 9 istniejących zestawów testów kodu oraz git diff --check przeszło; kontrola pikselowa potwierdziła brak zmian poza maską i zachowanie alfa. Pozostała kolorystyka ikony z 1.2.02 zaakceptowana; nowe przyciemnienie litery oczekuje oceny w grze. Nie rozszerzać tej akceptacji na odrębne zadanie tytułów okien.

## Cofnięcie przyciemnienia litery i — 1.2.04, 2026-11-11

Użytkownik odrzucił efekt 1.2.03 i nakazał cofnięcie. Przywrócono assets/buttony.png dokładnie z zaakceptowaną kolorystyką ikony z 1.2.02 (commit c1258d40ae600683d393f38935d218052dcba255). Opublikowano 1.2.04 na main; przebudowano paczki. 9/9 testów kodu i git diff --check zaliczone. Przyciemnienie litery o 50% jest ODRZUCONE, nie wdrażać ponownie. Pozostałe zmiany zachowane. Pokazano aktualny atlas użytkownikowi.

## Ikona i według obrazu użytkownika — 1.2.05, 2026-11-11

Na bezpośrednie polecenie odczytano kolorystykę przesłanej grafiki image(20261111-190533).png i przeniesiono do assets/buttony.png. Obraz zawiera powiększenie 5x bez interpolacji: siatka 17x17 ma początek (24,26), próbki pobrano ze środków bloków 5x5. Docelowy wycinek atlasu (497,199), 17x17. Zachowano oryginalną alfę; dla półprzezroczystych brzegów usunięto wpływ białego tła referencji przy odtwarzaniu RGB. Zmieniono 43 piksele; cały atlas poza ikoną i wszystkie wartości alfa zachowane. To wierne przeniesienie wzoru użytkownika, a nie ponowienie odrzuconej prostokątnej maski 1.2.03.

Opublikowano 1.2.05 w Truciaczek/Motyw/main; paczki przebudowane, 9/9 testów kodu i git diff --check przeszło. Status: wykonane i opublikowane, oczekuje oceny efektu w grze.

## Zbiorcza akceptacja zmian do 1.2.05 — 2026-11-11

Użytkownik potwierdził: „akceptuje wszystkie zmiany od ostatniego razu”. Zatwierdzono końcowy stan Motywu NI 1.2.05: skalę turkusowych tytułów okien Świat/Konfiguracja i pozostałych wspólnych nagłówków (1.2.01), wspólną ikonę informacji z naszego buttony.png (1.2.02) oraz jej ostateczną kolorystykę odczytaną z obrazu użytkownika (1.2.05). Zadania ukończone i zaakceptowane; wcześniejsze wpisy oczekiwania na ocenę są historyczne.

Odrzucone przyciemnienie litery z 1.2.03 pozostaje odrzucone, zgodnie z cofnięciem 1.2.04. Zbiorcza akceptacja nie przywraca odrzuconych prób. Aktualny zatwierdzony punkt odniesienia: 1.2.05. Brak otwartych zadań z tego pakietu. Nie zmieniano kodu ani numeru wydania przy zapisie akceptacji.

## Ekwipunek i torby — próba 1.2.06, 2026-11-11

Użytkownik zlecił upodobnienie pól ekwipunku i torby do zaakceptowanych dolnych slotów 1–8. Odczyty z włączonym motywem: symbol butów .eq-cl, buttony.png -332px -1066px; jego rodzic .eq-slot.interface-element-one-item-slot-background-to-repeat używa oneItemSlotToRepeat.png. Duża siatka: .inventory-grid-bg.interface-element-grid-border ma tło #252B31 i border 0.8px #333131; scroll-pane/inner-grid/inventory-grid przezroczyste. Nawigacja toreb .bags-navigation-bg.interface-element-grid-border ma trzy cienie obrysu w starych kolorach.

W 1.2.06 zmieniono wspólne tło dużej siatki na #171B20, border #252B31 i outline-color #101419 bez zmiany grubości. Pola zakładanego ekwipunku: zastąpiono tło oneItemSlotToRepeat.png radialnym przyciemnieniem na #171B20, z wewnętrznymi konturami #252B31/#101419 (bez zmiany wymiarów). To odtworzone cieniowanie CSS, nie potwierdzone identyczne natywne cienie slotów 1–8. Symbole .eq-cl i przedmioty/rarity overlays nietknięte. Ramka nawigacji toreb zachowuje geometrię cieni 1/2/3px, zmieniono kolory na #252B31/#101419/#252B31 i tło #171B20. buttony.png bez zmian.

Opublikowano 1.2.06 w Truciaczek/Motyw/main. 9/9 istniejących zestawów testów kodu i git diff --check przeszło. Status: w trakcie, oczekuje wizualnej kontroli po F5. WAŻNE: odczyt dużej siatki nie ujawnił warstwy rysującej linie poszczególnych pustych komórek, dlatego nie deklarować ukończenia wszystkich ramek siatki. Jeżeli pozostaną brązowe linie, potrzeba odczytu potomków .inventory-grid-bg, gdyż klik trafia w przezroczystą warstwę scroll-pane. Ostatni zaakceptowany stan 1.2.05.

## Cofnięcie ekwipunku i toreb — 1.2.07, 2026-11-11

Użytkownik odrzucił wygląd 1.2.06: „kurwa, brzydko, cofamy”. Cofnięto cały pakiet 1.2.06: tła i radialne cieniowanie pól eq, kontury oraz tło nawigacji toreb i zmianę tła/ramki dużej siatki. Przywrócono modules/ebony-theme.js dokładnie z zaakceptowanego commitu 48e659cb6f155b668a834872c0e4d57ce38bed1e (1.2.05). Przebudowano wydanie 1.2.07 i opublikowano na main, commit ddf112c2fd3b7840eeb8e952d7444a33549356e9. 9/9 testów kodu i git diff --check przeszło. buttony.png bez zmian. Próba 1.2.06 ODRZUCONA, nie przywracać. Końcowy wygląd zgodny z zaakceptowaną 1.2.05; dalsze prace nad ekwipunkiem wymagają nowego kierunku użytkownika.

## Zaakceptowane tło pola ekwipunku — 1.2.08, 2026-11-11

Użytkownik dostarczył oryginalne oneItemSlotToRepeat.png (33x33) i zlecił najjaśniejszy piksel ustawić na jaśniejszy kolor podstawowy #252B31, resztę proporcjonalnie przeskalować. Wykonano mapowanie Y=0.2126R+0.7152G+0.0722B; RGBwynik=round([37,43,49]×Y/126.2074). Maksymalna luminancja oryginału 126.2074 (RGB 130,125,127); wszystkie wartości alfa zachowane. Zachowano oryginalny wzór, bez wymyślonego gradientu. Podgląd slot-background-comparison.png został przedstawiony i użytkownik zaakceptował „pięknie, wdrażaj”.

Wdrożono dokładne bajty zaakceptowanego assetu w assets/oneItemSlotToRepeat.png. Build osadza go jako data URL; reguła .equipment-wrapper .eq-slot.interface-element-one-item-slot-background-to-repeat podmienia wyłącznie background-image. Powtarzanie, pozycje, wymiary i osobne symbole .eq-cl pozostają natywne. Nie dotykano dużej siatki torby, ramek wyboru toreb ani buttony.png. Odrzucona próba 1.2.06 pozostaje cofnięta.

Opublikowano 1.2.08 na main Truciaczek/Motyw. Zaktualizowano build oraz istniejący test zgodności źródła z osadzonym modułem dla nowego assetu. 9/9 zestawów testów kodu i git diff --check przeszło. Podgląd zaakceptowany, wdrożenie ukończone; efekt w grze do sprawdzenia po F5.

## Rozjaśnienie tła pola ekwipunku o 30% — 1.2.09, 2026-11-11

Użytkownik ocenił efekt 1.2.08 w grze jako zbyt słaby („wygląda tragicznie”) i zlecił rozjaśnić każdy piksel o 30% oraz wdrożyć. W assets/oneItemSlotToRepeat.png pomnożono wszystkie kanały RGB przez 1.3 z zaokrągleniem; alfa i rozmiar 33x33 bez zmian. Maksymalne RGB wzrosło z [37,43,49] (#252B31) do [48,56,64] (#303840). Zachowano wzór i podmianę wyłącznie tła eq; symbole ubioru, torby i buttony.png bez zmian.

Opublikowano 1.2.09 na main Truciaczek/Motyw, przebudowano runtime i instalator. 9/9 testów kodu i git diff --check przeszło. Status: wdrożone, oczekuje oceny w grze. Akceptacja wcześniejszego podglądu 1.2.08 nie oznacza zaakceptowanego wyglądu w grze; dalszy punkt odniesienia tej próby to 1.2.09.

## Kolejne rozjaśnienie tła eq o 60% — 1.2.10, 2026-11-11

Na polecenie „rozjaśnij jeszcze o 60%” pomnożono kanały RGB aktualnej tekstury z 1.2.09 przez 1.6 z zaokrągleniem. To dodatkowe 60% względem poprzedniej wersji, po wcześniejszym +30% (łącznie około 2.08× względem podglądu 1.2.08, z zaokrągleniami). Najjaśniejszy piksel [77,90,102], #4D5A66. Alfa, wzór, rozmiar, ikony ubioru, torby i buttony.png bez zmian. Podmieniono wyłącznie assets/oneItemSlotToRepeat.png i przebudowane paczki/wersję.

Opublikowano 1.2.10 na main Truciaczek/Motyw. 9/9 zestawów testów kodu oraz git diff --check przeszło. Status: wdrożone, oczekuje wizualnej oceny w grze po F5; nie uznawać kolejnego zlecenia rozjaśnienia za akceptację poprzedniego wyglądu.

## Czarne symbole pustego ekwipunku — test 1.2.11, 2026-11-11

Użytkownik zlecił testowo ustawić każdy nietransparentny piksel symboli ekwipunku z buttony.png na czysto czarny. Zmieniono RGB na [0,0,0] dla 2232 pikseli o alfa>0 we wnętrzach 10 komórek atlasu: początki x=267,298,329,360,391; y=1034,1065, każde wnętrze 30x30. Linie rozdzielające atlas i cała reszta pliku bez zmian; alfa każdego piksela zachowana, w tym półprzezroczyste brzegi symboli. Dodano .equipment-wrapper .eq-cl background-image wskazujący nasz hudSprite, z natywnymi offsetami. Tło oneItemSlotToRepeat.png z 1.2.10 bez zmian.

Opublikowano 1.2.11 w Truciaczek/Motyw/main, przebudowano runtime i fallback. 9/9 istniejących zestawów testów kodu, git diff --check i kontrola zakresu pikseli przeszły. Status: eksperyment wdrożony, oczekuje oceny po F5; nie uznawać czarnych symboli ani jasności tła 1.2.10 za zaakceptowane bez potwierdzenia.

## Oryginalne symbole eq przyciemnione o 60% — test 1.2.12, 2026-11-11

Użytkownik zlecił zastąpić czarne symbole wariantem oryginału przyciemnionym o 60%, aby porównać i później wybrać. Pobrano buttony.png sprzed czarnych symboli (wersja 1.2.10); wyłącznie w tych samych 10 wnętrzach komórek z 1.2.11 ustawiono RGB=round(oryginalne RGB×0.4) dla 2232 pikseli o alfa>0. To przyciemnienie oryginału, nie przeliczenie czarnych pikseli. Zachowano alfę, pierwotne cieniowanie i szczegóły; reszta atlasu identyczna z 1.2.11. Tło pól z 1.2.10 bez zmian.

Opublikowano 1.2.12 na main Truciaczek/Motyw. 9/9 istniejących zestawów testów kodu, git diff --check i kontrola pikselowa zakresu/alfa przeszły. Status: eksperyment wdrożony do oceny. Wariant czarny 1.2.11 pozostaje opcją porównawczą w historii; żaden z obu wariantów symboli nie został jeszcze zaakceptowany jako ostateczny. Użytkownik zdecyduje po porównaniu.

## Zbiorcza akceptacja bieżącego stanu — 1.2.12, 2026-11-11

Użytkownik: „dobra, zostawmy na razie jak jest, załóżmy, że akceptuję wszystkie zmiany od ostatniej akceptacji”. Zapisano akceptację bieżącego końcowego stanu 1.2.12 na ten moment. Zadania tła pól zakładanego ekwipunku i symboli ubioru: ukończone i zaakceptowane w obecnym wariancie; można wrócić do nich na późniejsze polecenie, bez dalszych samowolnych poprawek.

Obowiązuje oryginalny wzór oneItemSlotToRepeat.png przeskalowany do #252B31 i następnie rozjaśniony kolejno o 30% oraz dodatkowe 60% (najjaśniejszy #4D5A66), oraz oryginalne symbole z buttony.png przyciemnione o 60% (RGB×0.4), z zachowaniem alfa i cieniowania. To stan 1.2.12; poprzednie wpisy o oczekiwaniu na ocenę zastąpione obecną akceptacją.

Zbiorcza akceptacja nie przywraca odrzuconej szerokiej próby 1.2.06, cofniętej w 1.2.07, ani czarnego wariantu symboli 1.2.11 zastąpionego przez 1.2.12. Duża siatka torby i ramka wyboru toreb pozostają sprzed odrzuconej próby; nie deklarować ich przekolorowania w bieżącym pakiecie. Aktualny zaakceptowany punkt odniesienia: 1.2.12. Przy zapisie akceptacji nie zmieniano kodu ani numeru wydania.

## Przezroczystość uchwytu suwaka — 1.2.13, 2026-11-11

Użytkownik wskazał, że oryginalny uchwyt suwaka jest półprzezroczysty, a nasz pełny; zezwolił zachować naszą zmianę koloru przy hover, lecz z identyczną przezroczystością. Odczyt przy wyłączonym motywie dla 26 uchwytów: background-color rgba(209,210,211,0.52), opacity 1. Oznacza to 52% krycia / 48% przezroczystości koloru tła, bez zmniejszania opacity całego elementu.

W .scroll-wrapper .scrollbar-wrapper .track .handle zmieniono background z #668298 na rgba(102,130,152,.52); w :hover z #12C9BD na rgba(18,201,189,.52). Nie zmieniano opacity, border-color, geometrii, działania ani przezroczystego toru. Dzięki alfa tła zachowano oryginalny sposób mieszania z podłożem w obu stanach.

Opublikowano 1.2.13 na main Truciaczek/Motyw; paczki przebudowane. 9/9 istniejących zestawów testów kodu i git diff --check przeszło. Status: wdrożone, oczekuje oceny po F5 przy włączonym motywie. Zaakceptowana baza 1.2.12 pozostaje bez innych zmian.

## Akceptacja przezroczystości suwaka — 1.2.13, 2026-11-11

Użytkownik odpowiedział „akceptuje” na wdrożenie 1.2.13. Zadanie przezroczystości uchwytu suwaka ukończone i zaakceptowane. Obowiązuje alfa tła 0.52 (52% krycia, 48% przezroczystości) zarówno dla #668298 w spoczynku, jak i #12C9BD po najechaniu. Opacity całego elementu pozostaje natywne; tor przezroczysty. Wcześniejszy wpis oczekiwania na ocenę jest historyczny. Aktualny zaakceptowany punkt odniesienia: 1.2.13. Nie zmieniano kodu ani numeru wydania przy zapisie akceptacji.

## Wspólne drewno table_header.png — 1.2.14, 2026-11-11

Użytkownik wskazał stary brązowy pasek „Ilość przyjaciół” w Społeczności. Szeroki odczyt potwierdził element .interface-element-header-1-background-stretch z border-image-source /img/gui/table_header.png. Rodzice .amound-wrapper i .bottom-friend-panel same nie miały źródła grafiki; wcześniejsza lista oparta na NI_BY_RAJDENS.txt była tylko referencyjna i nie potwierdzała bieżącego pliku. Drugi skan DOM wykazał tę samą klasę i plik pod .difficult-stars.wood-bar, .progress-points.wood-bar i .classification-match.wood-bar. Łącznie potwierdzono cztery konteksty w dwóch odczytach; nie deklarować kompletnej listy wszystkich okien gry ani pewnych nazw ekranów na podstawie samych klas.

Na polecenie przekolorowania jak wcześniejsze drewno dodano /img/gui/table_header.png do resources w tools/world-wood.js, border-image-source dla .interface-element-header-1-background-stretch. Wykorzystuje dokładnie istniejący filterDefinition drewna, ten sam co middle_graphics.png i quest_bar.png. Zachowano wymiary źródła, słoje, alfę, natywne border-image-slice/width/repeat i geometrię; filtr dotyczy obrazu, nie napisów/dzieci. Reguła wspólnej klasy obejmuje bieżące, ukryte i później otwierane okna. Aktualny wersjonowany URL pobierany z DOM, gdy dostępny, z istniejącym fallbackiem ścieżki.

Opublikowano 1.2.14 na main Truciaczek/Motyw. Test istniejącego mechanizmu zaktualizowano do pięciu współdzielonych plików i nowego selektora. 9/9 zestawów testów kodu oraz git diff --check przeszło. Status: wdrożone, oczekuje oceny po F5 przy włączonym motywie; nie wykonano wizualnego sprawdzenia w zalogowanej grze. Ostatnia zaakceptowana baza 1.2.13.

## Firusiowe napisy Społeczności — 1.2.15, 2026-11-11

Użytkownik wskazał żółte/beżowe napisy licznika przyjaciół, nicków, map i koordynatów w Społeczności; zlecił zmianę na firusiowy niebieski. Rozszerzono istniejącą skalę tools/menu-text.js o .friend-enemy-list i dopuszczono w tym zakresie jasny beż (R>=G>=B, R-B<=80, B>=100), analogicznie do tytułów. Przeliczenie RGB=round([18,201,189]×luminancja/255), alfa zachowana; biel odpowiada #12C9BD, ciemniejsze beże odpowiednio ciemniejszym odcieniom. Obejmuje także beżowe poziomy graczy i inne instancje wspólnego panelu. Odczyt bazuje na rzeczywistym kolorze w grze bez ponownego skalowania własnego wyniku. Kolory nasycone/statusy offline, przyciski, awatary, ikonki i tła nietknięte.

Opublikowano 1.2.15 na main Truciaczek/Motyw; paczki przebudowane. 9/9 istniejących zestawów testów kodu i git diff --check przeszło. Status: wdrożone, oczekuje oceny po F5 przy włączonym motywie. Drewno 1.2.14 widać na nowym screenie użytkownika, lecz nie udzielił osobnej formalnej akceptacji; zachować je i nie przypisywać nowemu poleceniu akceptacji całego wydania.

## Placeholder nicku przyjaciela — 1.2.16, 2026-11-11

Użytkownik wskazał dolne pole „nick przyjaciela” nadal w oryginalnej kolorystyce i zlecił kolor użyty dla Od/Do. Rozszerzono wspólną regułę placeholderów o .friend-enemy-list .bottom-friend-panel input::placeholder: color #085E58!important; opacity:1!important. To placeholder, nie nicki na liście ani wpisywana wartość; pozostałe napisy i kursor bez zmian. Zakres rodzica .bottom-friend-panel potwierdzony wcześniejszym odczytem DOM; warstwa placeholdera wynika z opisu użytkownika i wymaga oceny wizualnej.

Opublikowano 1.2.16 na main Truciaczek/Motyw; paczki przebudowane. 9/9 testów kodu i git diff --check przeszło. Status: wdrożone, do oceny po F5 przy włączonym motywie i pustym dolnym polu Społeczności. Wcześniejsze zmiany 1.2.14–1.2.15 nadal nie mają osobnej formalnej akceptacji.

## Całościowe tło regulowanych okien — 1.2.17, 2026-11-11

Użytkownik wskazał okna Gracze na mapie i przelogowania (prawdopodobnie także minutnik, podręczna mapa, sortownik i grupa) i zażądał zachowania grafitu na całej powierzchni z natywnym guzikiem przezroczystości. Potwierdzona klasa okna: .c-window.border-window.transparent.manage-size.whoishere-window. Nie deklarować pełnej listy komponentów bez odczytu. Przy wyłączonym motywie root/header/content przezroczyste. Warstwa .border-image przy 0% przezroczystości: rgb(0,0,0), opacity 1; po przejściu na 100%: rgba(0,0,0,0.7), opacity 0. Gra zmienia oba parametry. Poziomów pośrednich nie zakładano na podstawie przypuszczeń.

Przyczyny: ogólna .border-window .content wymuszała nieprzezroczysty grafit tylko na zawartości; resources zwykłego window-frame.png obejmowało też wariant .transparent. Zawężono tło .content do .border-window:not(.transparent) .content i podmianę zwykłej ramki do .border-window:not(.transparent). Natywna ramka wariantu transparent pozostaje; nie nakładano na nią grafiki zwykłego okna.

Dodano bindTruciakTransparentWindows w tools/menu-text.js (wspólnie osadzanym przez istniejący build). Dla .border-window.transparent .border-image odczytuje natywny background-color przy chwilowo wyłączonym własnym arkuszu, zachowuje alfę i ustawia tylko RGB [23,27,32] (#171B20). Nie ustawia opacity ani wymiarów, kliknięć, położenia czy zachowania kontrolek. Obejmuje pełną natywną warstwę tła wraz z nagłówkiem. Obserwuje class/style i nowe elementy, odświeża po kliknięciu, grupuje przez requestAnimationFrame. Cleanup usuwa arkusz/obserwację/listener i odtwarza atrybuty. Przy pełnym kryciu grafit #171B20; przy opacity 0 tło pozostaje całkowicie przezroczyste; pośrednie opacity i alfa zachowane.

Opublikowano 1.2.17 w Truciaczek/Motyw/main. 9/9 istniejących zestawów testów kodu przeszło; dodano w nich kontrolę alfa 1/0.7, zachowania opacity 0/0.4, cleanup oraz wykluczenia transparent ze zwykłej ramki. git diff --check poprawny. Status: wdrożone, oczekuje oceny po F5 przy włączonym motywie i przełączaniu guzika krycia. Bez deklaracji wizualnego testu w grze. Poprzednie 1.2.14–1.2.16 nadal czekają na formalną akceptację.


## Przejście na INSTRUKCJA_V2.md — 2026-11-11

Na polecenie użytkownika zapisano pełną instrukcję pod nazwą INSTRUKCJA_V2.md po błędach aktualizacji poprzedniego pliku. Po pomyślnym zapisie ten dokument jest obowiązującą instrukcją dalszej pracy. Zawiera całą dotychczasową historię i ustalenia oraz opis wdrożenia 1.2.17. Kolejne aktualizacje zapisywać w INSTRUKCJA_V2.md; INSTRUKCJA_PROJEKTU.md pozostaje starszą wersją archiwalną. Zmiany 1.2.14–1.2.17 nadal oczekują formalnej akceptacji efektu przez użytkownika.


## Zbiorcza akceptacja 1.2.14–1.2.17 i przeniesienie instrukcji na GitHuba — 2026-11-11

Użytkownik potwierdził: „akceptuję wszystkie zmiany od poprzedniej aktualizacji, zaakceptuj i wrzucaj V2 do repo”. Ostatnia wcześniejsza akceptacja dotyczyła 1.2.13. **Zadania z wydań 1.2.14, 1.2.15, 1.2.16 i 1.2.17 są ukończone i zaakceptowane.** Obowiązuje przekolorowane wspólne drewno table_header.png; firusiowa skala tekstów Społeczności; placeholder nicku przyjaciela #085E58 jak Od/Do; grafit #171B20 całej natywnej warstwy tła małych okien z zachowaniem regulacji opacity i alfa przez grę. Wpisy o oczekiwaniu na ocenę tych wydań są historyczne. Odrzucone i cofnięte eksperymenty pozostają odrzucone.

Na polecenie użytkownika pełna INSTRUKCJA_V2.md, zawierająca całą poprzednią instrukcję wraz z wpisem 1.2.17 i niniejszą akceptacją, staje się dokumentem obowiązującym w prywatnym repo Truciaczek/Dodatki-Truciaka na main. Prywatne repo wybrano ze względu na zawarte ustalenia prywatnych dodatków; publiczny motyw nadal rozwijany wyłącznie w Truciaczek/Motyw. Nie przenosić prywatnych ustaleń do publicznego repo. Lokalna kopia służy pracy; źródłem aktualnym jest GitHub. Po kolejnych akceptacjach aktualizować V2 w repo, bez zależności od usługi plików ChatGPT zwracającej Internal error.

Brak otwartych zadań z zaakceptowanego pakietu. Nie zmieniano kodu ani numeru wydania przy zapisie akceptacji i migracji dokumentu.


## Obowiązujące repo instrukcji: Truciaczek/Motyw — 2026-11-11

Użytkownik skorygował lokalizację: instrukcja ma być w repo motywu. Na jego polecenie przeniesiono pełną INSTRUKCJA_V2.md do Truciaczek/Motyw, main. To jest jedyne obowiązujące źródło tej instrukcji i miejsce kolejnych aktualizacji po akceptacjach. Wcześniejszy wybór repo Dodatki-Truciaka jest historyczny i został zastąpiony tą decyzją. Kopia w Dodatki-Truciaka pozostaje archiwalna. Nie zmieniono kodu ani zaakceptowanego wydania 1.2.17.


## Zatwierdzony raport dzienny — 2026-11-11, stan 1.2.17

Użytkownik wybrał opcję 1: „Zatwierdzam raport”. Potwierdzono status ukończony dla wszystkich 18 pozycji raportu: kolorystyka i zakładki NI z czerwonymi własnymi dodatkami; wyszukiwarka; ramka zakładek; dokumentacja i wygląd slotów 1–8; dolne ornamenty i ping; górny panel według wzoru użytkownika; znaczniki mapy; suwak z przezroczystym torem i 48% przezroczystości uchwytu także przy hover; ramki i wspólne tło Świata; napisy i pola menu; ikona informacji według grafiki użytkownika; tekstura pól zakładanego ekwipunku; oryginalne symbole ubioru przyciemnione o 60%; wspólne drewno table_header.png; napisy Społeczności i placeholder nicku; małe okna z natywną regulacją krycia; dokumentacja V2 w repo motywu; przegląd dostępnej historii i repozytoriów. Przeniesiona naprawa górnej części przycisku pozostaje ukończona.

Duża siatka torby i ramka wyboru toreb pozostają sprzed cofniętej próby 1.2.06; nie uznawać ich za przekolorowane. Odrzucone i zastąpione próby pozostają poza obowiązującym stanem: turkusowy panel własnych dodatków, pierwsza poprawka górnego panelu, nieudane przyciemnienie litery i, szeroka próba ekwipunku/toreb 1.2.06 oraz czarne symbole ubioru zastąpione wariantem 1.2.12. Akceptacja raportu ich nie przywraca.

Brak aktywnych zadań w trakcie. Aktualny zaakceptowany punkt odniesienia: Motyw NI 1.2.17. Obowiązująca instrukcja: Truciaczek/Motyw/main/INSTRUKCJA_V2.md. Nie zmieniano kodu ani numeru wydania przy zatwierdzeniu raportu.


## Kontury, linia i uchwyt małych okien — 1.2.18, 2026-11-11

Odczyt użytkownika potwierdził CSS: .border-window.transparent .border-image ma box-shadow RGB(1,1,1) 1px, #CCCCCC 2px, RGB(12,13,13) 3px oraz RGBA(12,13,13,.4) cień 2px 2px 3px 3px. Pozioma linia to border-top .search-wrapper, biel alfa .3; ukośne kreski to .window-resize-handle--corner i gradient 135deg, #CCCCCC alfa .8, granice 45/55/70/80%. Obwódka należy do warstwy regulowanego tła; linia i uchwyt są osobne i pozostają widoczne przy pełnej przezroczystości okna.

Na polecenie zamiany #CCCCCC na kolor suwaka #668298 przeskalowano odcienie luminancją względem 204: RGBwynik=round([102,130,152]×Y/204). #CCCCCC -> #668298; biel -> [128,163,190] (#80A3BE); RGB(12,13,13) -> [6,8,10]; RGB(1,1,1) pozostaje [1,1,1]. Zachowano wszystkie alfy .3/.4/.8, stopnie gradientu, geometrię i natywne opacity tła z guzika. Zakres trzech reguł ograniczony do .border-window.transparent, nie do wszystkich ramek aplikacji. Nie dodawano kolorów hover. buttony.png i pozostałe grafiki bez zmian.

Opublikowano 1.2.18 na main Truciaczek/Motyw, paczki przebudowane. 9/9 istniejących zestawów testów kodu i git diff --check zaliczone. Status: wdrożone, oczekuje oceny po F5 w małych oknach, przy 0% i 100% przezroczystości. Ostatnia zaakceptowana baza 1.2.17. Instrukcja aktualizowana w repo motywu zgodnie z obowiązującą procedurą.


## Ikony Graczy na mapie — 1.2.19, 2026-11-11

Użytkownik zlecił przeskalowanie oryginalnych grafik piksel po pikselu: biel referencyjna -> podstawowy firusiowy #12C9BD; ciemniejsze odcienie proporcjonalnie ciemniejsze. Odczyty przy wyłączonym motywie potwierdziły: .whoishere-window .increase-opacity korzysta z buttony.png na -726px -131px, 13x13; .manage-configuration-button.settings-button na -607px -117px, 13x13; .search-wrapper::before na -681px -162px, 16x16. X to .ie-icon.ie-icon-close, osobny SVG 20x20, viewBox 24x24, stroke #C6C6C6, width 2, path M18 6L6 18M6 6l12 12. Czarny drop-shadow 1px 1px 1px; hover brightness(1.5) i color biały, bez zmiany źródła SVG. Dla przezroczystości i zębatki odczyt samego elementu nie wykazał różnic hover; nie deklarować istnienia drugiego wycinka atlasu. Mechanizm zmiany rodzica/pseudoelementów nie został potwierdzony.

Wykorzystano istniejący filtr pikselowy truciak-menu-arrow-tint w sRGB, wyłącznie na tych czterech warstwach w .whoishere-window. Y=0.2126R+0.7152G+0.0722B; RGBwynik=[18,201,189]*Y/255, alfa bez zmian. To dokładne przeliczenie oryginalnych pikseli podczas renderowania, bez przerysowywania lub modyfikacji atlasu. Zachowano natywne źródła, przesunięcia i rozmiary. X: tint przed osobnym czarnym cieniem; hover najpierw brightness(1.5) oryginalnej grafiki, następnie tint, na końcu czarny cień. Dzięki kolejności szarość 198 daje około #0E9C93, hover biel daje #12C9BD. Nie rozjaśniać dopiero turkusowego wyniku, bo zmieni to proporcje koloru. Pozostałe okna i clear-cross poza nowym zakresem; buttony.png bez zmian.

Status: wdrożenie do oceny po F5 przy włączonym motywie. Ostatnia zaakceptowana baza 1.2.17; 1.2.18 nadal oczekuje osobnej oceny. Nie przypisywać niniejszemu poleceniu akceptacji poprzedniego wydania.

Weryfikacja wydania: 9/9 istniejących zestawów testów kodu zaliczone; składnia runtime i instalatora sprawdzona przez build, git diff origin/main --check poprawny. Próba renderu lokalną przeglądarką zablokowana przez ograniczenie socket() środowiska, więc nie deklarować wizualnego testu. Publikacja na main zgodnie ze stałą zgodą, efekt oczekuje oceny użytkownika.


## Napis Szukaj w Graczach na mapie — 1.2.20, 2026-11-11

Użytkownik zlecił tę samą skalę dla napisu Szukaj. Rozszerzono istniejący bindTruciakMenuText o .whoishere-window .search-wrapper (bezpośredni tekst) oraz input[placeholder] w tej wyszukiwarce. Dla placeholdera odczyt getComputedStyle(input, '::placeholder').color z chwilowo wyłączonym własnym arkuszem, bez zgadywania oryginalnego HEX. Wspólna reguła Y=0.2126R+0.7152G+0.0722B, RGB=round([18,201,189]*Y/255), zachowana alfa i natywna opacity placeholdera. Osobne reguły ::placeholder nie zmieniają wpisywanej wartości i kursora. Obsługa neutralnych i jasnobeżowych odcieni, odświeżanie i cleanup istniejącego mechanizmu; rzeczywisty typ napisu nie był potwierdzony odczytem DOM użytkownika, dlatego zakres obejmuje obie tekstowe postacie. Ikony 1.2.19 bez zmian.

Weryfikacja: rozszerzono istniejący test o placeholder bez węzła tekstowego, poprawny odczyt pseudo-elementu, skalę biel/szarość, alfę i zachowanie opacity oraz odświeżanie/cleanup. Status: opublikowane do oceny po F5 przy włączonym motywie i pustej wyszukiwarce. Nie oznacza akceptacji 1.2.18 ani 1.2.19; zaakceptowana baza nadal 1.2.17.


## Zbiorcza akceptacja 1.2.18–1.2.20 — 2026-11-11

Użytkownik potwierdził: „akceptuję wszystkie zmiany”. Ostatnia wcześniejsza akceptacja dotyczyła 1.2.17. Wszystkie zadania z wydań **1.2.18, 1.2.19 i 1.2.20 są ukończone i zaakceptowane**.

- 1.2.18: kontury małych okien, pozioma linia i ukośny uchwyt w skali koloru suwaka #668298, z zachowaniem alfa, geometrii i regulacji przezroczystości.
- 1.2.19: cztery ikony Graczy na mapie (przezroczystość, zębatka, X i lupka) w skali luminancji biel -> #12C9BD; zachowane kształty, alfa i rozjaśnienie X przy hover.
- 1.2.20: napis Szukaj w tym oknie w tej samej skali, z zachowaniem natywnej przezroczystości.

Wcześniejsze wpisy o oczekiwaniu na ocenę tych wydań są historyczne i zastępuje je niniejsza akceptacja. Odrzucone próby pozostają odrzucone. **Aktualny zaakceptowany punkt odniesienia: Motyw NI 1.2.20. Brak otwartych zadań z tego pakietu.** Przy zapisie akceptacji nie zmieniano kodu ani numeru wydania.


## Odwrócone stany aktywnej pinezki — 1.2.21, 2026-11-13

Odczyt użytkownika potwierdził wspólną bazę .button.small.green: pinezka .button.small.green.observe-toggle z .label .add-bck.observed (buttony.png, -516px -398px); Rozwiń .button.stats-expand.small.green z tekstową .label. Identyczne natywne tło i cień obu przycisków. Użytkownik wyjaśnił: zielona pinezka oznacza już włączone obserwowanie, czerwona oznacza możliwość włączenia. Zlecił dla pinezki paletę Rozwiń z odwróceniem stanów dla włączonej zielonej pinezki.

Oddzielono styl przez .button.observe-toggle, bez zmiany .stats-expand ani globalnych przycisków. Nieaktywna pinezka: jak Rozwiń — gradient turkusowy #25494B -> #142D30 w spoczynku, grafitowy #252B31 -> #171B20 podczas interakcji. Zielona .observe-toggle.green: odwrotnie — grafit w spoczynku, turkus przy hover/active/pressed/open. W obu wariantach obrys #12C9BD, wewnętrzny odstęp #171B20, zachowana geometria cieni 1px/3px. Reguły przedniej warstwy ::before zachowują turkusowy obrys bez natywnej nakładki tła. Wspólne wykluczenia disabled pozostają. Znak pinezki, atlas buttony.png, rozmiary, tooltipy i mechanizm obserwowania bez zmian. Nie modyfikowano grafiki symbolu pinezki.

Status: wdrożone do oceny użytkownika po F5 z włączonym motywem; sprawdzić nieaktywną/aktywną pinezkę i hover, porównać z Rozwiń. Ostatnia zaakceptowana baza 1.2.20. Nie uznawać polecenia zmiany za akceptację efektu.

Weryfikacja 1.2.21: 9/9 istniejących zestawów testów kodu, kontrola składni paczek podczas budowania oraz git diff origin/main --check zaliczone. Brak testu wizualnego w zalogowanej grze; wygląd do oceny użytkownika.


## Tło wierszy mobków minutnika — 1.2.22, 2026-11-13

Użytkownik zlecił jasny szary firusiowy dla tła wiersza z nazwą mobka i timerem. Wskazano #668298 (jak suwak i obramowania). Odczyt przy wyłączonym motywie potwierdził .row.tw-list-item.do-action-cursor.long wewnątrz .list.npc-list: background-color rgba(128,128,128,0.48), background-image none, border 0. Potomkowie .col, .name.cell.min i .name-val są przezroczyści; to tło wiersza, nie komórek lub napisów.

Na dodatkowe polecenie użytkownika „zachowj to dla wszystkich zmian przezroczystosci okienka” nie utrwalono alfa 0.48 na sztywno. Rozszerzono istniejący bindTruciakTransparentWindows w tools/menu-text.js o .npc-list > .row.tw-list-item: przy chwilowo wyłączonym własnym arkuszu odczytuje aktualne natywne background-color i zachowuje jego alfę, zmieniając wyłącznie RGB na [102,130,152] (#668298). Odczyt 0.48 jest tylko potwierdzonym stanem początkowym. Gra nadal steruje opacity wiersza i wszystkich rodziców; odświeżanie przy zmianach class/style, kliknięciach i nowych wierszach oraz cleanup wspólnego mechanizmu zachowane. Nie zmieniano nazwy, czasu, przycisków, plusa, ramek, grafiki ani mechanizmu odliczania. Zakres nie obejmuje wszystkich .row w grze.

Status: wdrożone do oceny po F5 przy włączonym motywie. Zmiana pinezki 1.2.21 nadal oczekuje akceptacji. Ostatni zaakceptowany punkt odniesienia 1.2.20.

Weryfikacja 1.2.22: rozszerzono istniejący test o wiersz minutnika, alfę 0.48 oraz dynamiczne wartości 0/0.2/0.7/1, zachowanie natywnego opacity i cleanup. 9/9 zestawów testów kodu oraz kontrola składni wygenerowanych paczek zaliczone; bez testu wizualnego w grze.


## Tło pola dodawania + w minutniku — 1.2.23, 2026-11-13

Użytkownik wskazał pominięte pole + ręcznego dodawania. Odczyt z Wklejony tekst(6).txt potwierdził .row.row-add.tw-list-item jako bezpośrednie dziecko .window-controlls w oknie .elite-timer, poza .npc-list. Natywne tło rgba(128,128,128,0.48), background-image none. Znak + znajduje się w .add.do-action-cursor > .btn-add. To wyjaśnia, dlaczego zakres 1.2.22 obejmujący jedynie wiersze .npc-list go pomijał.

Do timerRows w bindTruciakTransparentWindows dodano .elite-timer .window-controlls > .row.row-add.tw-list-item. Używa dokładnie tego samego mechanizmu co wiersze mobków: RGB tła #668298=[102,130,152], dynamiczna natywna alfa odczytywana bez własnego arkusza, nieutrwalona na 0.48; opacity elementu i rodziców bez zmian, wraz ze zmianami przezroczystości okna. Zachowane wymiary, plus, kliknięcie otwierające ręczne dodawanie oraz pozostałe kontrolki. Nie obejmuje osobnego .row-input ani innych okien.

Weryfikacja: przebudowano runtime i instalator; 9/9 istniejących zestawów testów kodu zaliczone, w tym dynamiczna alfa i cleanup wspólnego mechanizmu; składnia paczek poprawna. Brak testu wizualnego w zalogowanej grze. Status: wdrożone do oceny po F5 z włączonym motywem i przełączaniu przezroczystości minutnika. Wydania 1.2.21–1.2.22 nadal oczekują formalnej akceptacji. Ostatnia zaakceptowana baza 1.2.20.


## Okno umiejętności: tło, napisy i kamienne banery — 1.2.24, 2026-11-13

Zlecenie użytkownika: żółte tło prawego panelu na ciemny szary firusiowy, licznik 143/143, Lista umiejętności oraz tekst na żółtym tle w naszym kolorze napisów; kamienne banery kolorować jak pasek z lupką. Odczyt użytkownika przy wyłączonym motywie potwierdził: .middle-graphic.interface-element-middle-2-background z RGB(241,220,167) oraz border-image middle_graphics.png; oba banery .interface-element-active-card-background-stretch mają border-image width-card-button.png. Stara referencja .list-border/points-header-wrapper nie identyfikowała aktualnej warstwy grafiki. Tekst Lista umiejętności w .list-label-wrapper .label był czarny; .info1 i .info2 czarne; .skills-points, .skills_learnt i .skills_total beżowe RGB(241,216,163).

W module dodano tło #171B20 wyłącznie dla .skills-window .right-column .middle-graphic.interface-element-middle-2-background, z zachowaniem natywnego border-image. Jawny kolor #12C9BD dla .skills-window .list-label-wrapper .label oraz wymienionych klas licznika i .info1/.info2 w .right-column. To bezpośrednia podmiana koloru tekstu, nie luminancja czerni (która pozostawiłaby tekst czarny). Nie zmieniano liczników poszczególnych ikon ani ich kolorów znaczeniowych.

Rozszerzono tools/tab-frame.js o .skills-window .interface-element-active-card-background-stretch, wyłącznie gdy oryginalne źródło ma ścieżkę /img/gui/width-card-button.png. Mechanizm pobiera rzeczywisty wersjonowany URL, mierzy najwyższą luminancję widocznych pikseli Ymax i osadza oryginał w SVG: RGBwynik=[23,27,32]*Y/Ymax. Najjaśniejszy widoczny piksel -> #171B20, reszta proporcjonalnie ciemniejsza, jak ciemne tło wyszukiwarki. Zachowano fakturę, alfę, rozmiar, border-image-slice/width/repeat i geometrię. Filtr obejmuje tylko obraz, nie tekst/dzieci. Cache rozróżnia URL i kolor docelowy. Istniejąca ramka zakładek friend-header.png nadal mapuje szczyt do #252B31; nie zmieniono jej koloru. Cleanup i obsługa nowych okien zachowane; przy błędzie pobrania pozostaje oryginalna grafika.

Status: wdrożone do oceny po F5 z włączonym motywem. Sprawdzić oba banery, tło, Lista umiejętności, licznik i tekst wprowadzający. Nie deklarować sprawdzenia wszystkich opisów po wybraniu umiejętności — nie dostarczono ich aktualnego DOM. Wydania 1.2.21–1.2.23 nadal bez formalnej akceptacji, ostatnia zaakceptowana baza 1.2.20.

Weryfikacja 1.2.24: 9/9 zestawów testów kodu zaliczone. Rozszerzony test istniejącego mechanizmu sprawdza oba banery, ich wspólne pobieranie/cache, skalę docelową #171B20, zachowanie dotychczasowego #252B31 dla ramki zakładek i cleanup. Składnia paczek sprawdzona podczas budowania, git diff --check poprawny; brak wizualnego testu w zalogowanej grze.


## Jaśniejsze banery umiejętności — próba 1.2.25, 2026-11-13

Użytkownik zlecił próbnie oprzeć oba kamienne banery na jaśniejszym bazowym graficie. Zmieniono wyłącznie cel width-card-button.png w tools/tab-frame.js z [23,27,32] (#171B20) na [37,43,49] (#252B31). Formuła RGBwynik=[37,43,49]*Y/Ymax; najjaśniejszy widoczny piksel #252B31, reszta proporcjonalnie ciemniejsza. Faktura, alfa, wycinki i geometria zachowane. Tło prawego panelu #171B20 i turkusowe napisy z 1.2.24 bez zmian. To próba do oceny, nie akceptacja poprzedniego wydania.

Sprawdzenie zakresu: podmiana źródła ma jawny selektor .skills-window .interface-element-active-card-background-stretch i warunek ścieżki /img/gui/width-card-button.png. Obejmuje tylko instancje tej klasy wewnątrz okna umiejętności; inne użycia tego samego oryginalnego pliku w innych oknach nie zmieniły się ani w 1.2.24, ani w 1.2.25. Nie modyfikowano oryginalnego pliku gry. Kod repo i wyszukiwanie GitHub nie ujawniły dodatkowych odbiorców; brak pełnego aktualnego CSS/DOM gry nie pozwala stwierdzić, że ich nie ma, ani podać kompletnej listy.

Weryfikacja: 9/9 zestawów testów kodu, składnia paczek i git diff --check zaliczone. Test banerów dostosowany do nowego celu; wspólny cache i cleanup zachowane. Status: opublikowane do oceny po F5 przy włączonym motywie. Brak testu wizualnego w grze. Ostatnia zaakceptowana baza 1.2.20, wydania 1.2.21–1.2.24 nie mają jeszcze formalnej akceptacji.


## Wspólny zakres kamiennych banerów — 1.2.26, 2026-11-13

Użytkownik polecił usunąć ograniczenie podmiany do Umiejętności. Usunięto prefiks .skills-window z selektora width-card-button.png w tools/tab-frame.js. Podmiana obejmuje teraz wspólną .interface-element-active-card-background-stretch we wszystkich oknach, również otwieranych później, nadal z kontrolą rzeczywistej ścieżki /img/gui/width-card-button.png. Nie deklarować niepotwierdzonej listy nazw okien.

Skala z 1.2.25 zachowana: najjaśniejszy widoczny piksel #252B31, pozostałe proporcjonalnie według luminancji Y/Ymax; faktura, alfa, geometria i wycinki obrazu bez zmian. Ramka zakładek friend-header.png bez zmiany zakresu. Użytkownik zatwierdził rozszerzenie zakresu, nie udzielił jeszcze formalnej akceptacji wyglądu prób 1.2.21–1.2.25.

Weryfikacja: 9/9 istniejących zestawów testów kodu, składnia paczek i git diff --check zaliczone. Status: wdrożone do oceny po F5 przy włączonym motywie; ostatnia zaakceptowana baza 1.2.20.


## Przyciski X w Społeczności — 1.2.27, 2026-11-13

Użytkownik zlecił przyciskom X wygląd naszego guzika w stanie do kliknięcia. Odczyt DOM potwierdził .buttons.action-buttons.btns-spacing z trzema bezpośrednimi przyciskami: zaproszenie .button.small.green z .add-bck.invite-friend, czat .button.small.green z .add-bck.chat i usuwanie .button.small (bez green) z bezpośrednim dzieckiem .ie-icon.ie-icon-close.ie-icon--no-hover. To brak klasy green powodował odmienny wygląd spoczynkowy.

Dodano selektywną regułę .friend-enemy-list .action-buttons > .button:has(> .ie-icon-close). Spoczynek: gradient #25494B -> #142D30; hover/active/pressed/otwarte: #252B31 -> #171B20. Obrys #12C9BD, wewnętrzny odstęp #171B20; geometria cieni 1px/3px jak przy zwykłych naszych zielonych przyciskach. ::before bez osobnego tła, z turkusowym obrysem. Zachowano istniejące wykluczenia disabled. Zmiana dotyczy przycisku, nie podmienia grafiki SVG X ani działania usuwania. Nie zmieniano zapraszania i czatu ani innych X poza wspólnym panelem Społeczności.

Weryfikacja: 9/9 istniejących zestawów testów kodu, kontrola składni wygenerowanych paczek i git diff --check zaliczone. Brak wizualnego testu w grze. Status: opublikowane do oceny po F5 przy włączonym motywie. Poprzednie wydania 1.2.21–1.2.26 nadal oczekują formalnej akceptacji, zaakceptowana baza 1.2.20.


## Poprawa priorytetu spoczynkowego X Społeczności — 1.2.28, 2026-11-13

Użytkownik odrzucił stan spoczynkowy 1.2.27: tło i wewnętrzna ramka pozostały grafitowe, natomiast hover był poprawny. Analiza kaskady potwierdziła przyczynę: ogólna .button:not(.green):not(.red):not(.violet):not(.purple):not(.blink-violet) ma specyficzność 0,6,0 przed wspólnym wykluczeniem launcherów, a reguła Social z 1.2.27 miała tylko 0,4,0. Wszystkie deklaracje są important, więc ogólne background-image i box-shadow wygrywały mimo późniejszego położenia reguły Social. Hover miał dodatkową specyficzność i działał.

Wzmocniono selektor na podstawie potwierdzonego DOM do .friend-enemy-list .buttons.action-buttons > .button.small:not(.green):has(> .ie-icon-close) (0,7,0 przed tym samym wspólnym wykluczeniem launcherów). Dzięki temu kolorystyka spoczynku wygrywa z ogólną grafitową regułą: gradient #25494B -> #142D30 oraz turkusowe obramowanie #12C9BD z dotychczasowym wewnętrznym odstępem #171B20. Wartości deklaracji, grafika X, geometria i zaakceptowany przez użytkownika wygląd hover niezmienione. Poprawka nie obejmuje innych przycisków.

Status: wdrożone do oceny po F5 przy włączonym motywie; sprawdzić przede wszystkim X bez najechania. 1.2.27 była nieudaną próbą stanu spoczynkowego, zastąpioną niniejszą poprawką. Nie uznawać częściowego potwierdzenia hover za akceptację całego wydania.


## Faktyczna przyczyna niedziałającego stylu X Społeczności — 1.2.29, 2026-11-13

Odczyt użytkownika z włączonym motywem potwierdził w spoczynku ogólny grafitowy gradient #252B31 -> #171B20, obrys #668298 i natywny czerwony cień ::before rgba(218,97,97,.65), przy przezroczystych dzieciach .background/.label. Nasze reguły 1.2.28 nie były stosowane. Przyczyną był generator CSS: replaceAll('.button',...) dopisywał wykluczenia launcherów także wewnątrz klasy .buttons. Selektor z 1.2.28 zawierający .buttons.action-buttons stawał się niepoprawny. Wcześniejsza poprawa specyficzności nie usunęła tego błędu; 1.2.28 pozostaje nieudaną próbą.

Zastąpiono zamianę podciągu .button wyrażeniem dopasowującym wyłącznie pełną klasę: /\.button(?![\w-])/g. Wykluczenia dla rzeczywistych .button pozostają identyczne, a .buttons i .button-* nie są rozbijane. Potwierdzony selektor Social zachowany; stan spoczynkowy nadal ma gradient turkusowy #25494B -> #142D30, obrys #12C9BD i turkusowy cień ::before, hover nadal grafitowy. Znak X i jego działanie bez zmian.

Dodano kontrolę regresji na wygenerowanym CSS, a nie tylko źródle: trzy reguły Social zachowują prawidłową klasę .buttons.action-buttons, mają odpowiednie tła i turkusowe obramowania, w tym ::before. Weryfikacja: 9/9 zestawów testów kodu, składnia paczek i git diff --check zaliczone. Status: wdrożone do oceny po F5 przy włączonym motywie; brak wizualnego testu w grze.


## Akceptacja przycisków X w Społeczności — 1.2.29, 2026-11-13

Użytkownik potwierdził: „klasa, dziala”. Zadanie przycisków X w Społeczności ukończone i zaakceptowane w końcowej wersji 1.2.29: turkusowy gradient #25494B -> #142D30 i turkusowe ramki w spoczynku, grafitowy gradient #252B31 -> #171B20 podczas interakcji. Zachować naprawę generatora CSS dopasowującą pełną klasę .button bez uszkadzania .buttons oraz test regresji wygenerowanych selektorów.

Próby 1.2.27–1.2.28 pozostają historycznie nieudane, zastąpione działającą 1.2.29; nie przywracać ich błędów. Niniejsze potwierdzenie dotyczy zadania X w Społeczności, nie stanowi zbiorczej akceptacji wcześniejszych odrębnych prac 1.2.21–1.2.26. Ostatnia całościowo zaakceptowana baza pozostaje 1.2.20, z osobno zaakceptowanym zadaniem X w stanie 1.2.29. Przy zapisie akceptacji nie zmieniano kodu ani numeru wydania.



## Fioletowe przyciski w spoczynku i podgląd oryginalnej ikony i — 1.2.30, 2026-11-13

Użytkownik zlecił wszystkim fioletowym przyciskom (Umiejętności, Premium i inne wspólne użycia) wygląd Rozwiń w spoczynku, z zachowaniem prawidłowego hover. Dodano reguły .button oraz .widget-button dla .violet/.purple/.blink-violet, wyłącznie gdy nie są :hover/:active/.pressed/.active/.window-is-open ani aria-expanded/pressed=true. Spoczynek: gradient #25494B -> #142D30, tekst i obrys #12C9BD, wewnętrzny odstęp #171B20, cienie 1px/3px; ::before bez osobnego tła, turkusowy obrys. Interakcje są jawnie wyłączone z nowej reguły, pozostają pod dotychczasowymi stylami. Bez zmian działania płatności/resetowania, cen i ikon waluty. Status przycisków: wdrożone do oceny po F5 przy włączonym motywie.

Osobno użytkownik poprosił o oryginalną okrągłą ikonę i przekolorowaną jak ikonki przezroczystości, z obowiązkowym podglądem przed wdrożeniem. Oryginał pobrano z historycznego assets/buttony.png commitu f034339, sprzed naszych zmian; wycinek (497,199), 17x17. Pixelowe mapowanie Y=0.2126R+0.7152G+0.0722B; RGB=round([18,201,189]*Y/255); alfa każdego piksela identyczna z oryginałem. To skala biel -> #12C9BD bez normalizowania do szczytu samej ikony. Przygotowano info-icon-comparison.png: oryginał / obecna zaakceptowana ikona według wzoru użytkownika / nowa propozycja, każda 6x nearest-neighbor oraz 1x na #171B20. Historycznie użytkownik dostarczył powiększony 5x wzór image(20261111-190533).png, wdrożony w 1.2.05 i zaakceptowany.

NOWA IKONA NIE WDROŻONA. assets/buttony.png oraz obecna ikona pozostają identyczne; propozycja czeka na decyzję użytkownika. Nie uznawać zlecenia podglądu za zgodę na zmianę ikony w grze.

Weryfikacja 1.2.30: 9/9 istniejących zestawów testów kodu, składnia paczek i git diff --check zaliczone; alfa podglądu pikselowo zachowana. Brak wizualnego testu przycisków w grze. Ostatnia pełna zaakceptowana baza 1.2.20 z osobno zaakceptowanym zadaniem X Społeczności w stanie 1.2.29.


## Wdrożenie zaakceptowanego podglądu ikony i do atlasu — 1.2.31, 2026-11-13

Użytkownik polecił „wdrazaj ikone, tylko pamietaj ja nadpisac w naszych buttonach”. Akceptacja dotyczy propozycji pokazanej w info-icon-comparison.png: oryginalna ikona z commitu f034339, pikselowa skala biel -> #12C9BD, Y=0.2126R+0.7152G+0.0722B i RGB=round([18,201,189]*Y/255), alfa oryginalna. Wstawiono dokładne piksele pliku podglądowego /tmp/info-icon-proposed.png do assets/buttony.png, prostokąt x=497..513, y=199..215 (17x17). Nie wykonywano nowej interpretacji ani kolejnego przeliczania kolorów.

Nadpisano ikonę bezpośrednio w naszym atlasie, zamiast dodawać nowy filtr lub nakładkę CSS. Istniejąca wspólna .info-icon nadal korzysta z hudSprite i natywnych przesunięć; nowa grafika obejmuje wszystkie jej instancje. Przebudowano runtime i fallback instalatora. Wszystkie wartości alfa i piksele poza ikoną zachowane identycznie. Poprzednia kolorystyka według ręcznego wzoru 1.2.05 pozostaje historyczna i jest zastąpiona nową zaakceptowaną propozycją.

Status: podgląd zaakceptowany do wdrożenia, wdrożenie ukończone; efekt w grze do sprawdzenia po F5 przy włączonym motywie. Nie rozszerzać tej akceptacji na odrębne zadanie fioletowych przycisków z 1.2.30 ani pozostałe niezatwierdzone prace.

Weryfikacja 1.2.31: zmieniono 149 pikseli w wycinku ikony; cała alfa i pozostały atlas identyczne. 9/9 istniejących zestawów testów kodu, składnia wygenerowanych paczek i git diff --check zaliczone.
