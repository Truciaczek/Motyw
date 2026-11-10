# Dodatki Truciaka — Motyw

Publiczna wersja panelu z dodatkiem **Motyw - Stary ale jary** dla Nowego Interfejsu Margonem.

## Instalacja

**[Zainstaluj dodatek w Tampermonkey](https://github.com/Truciaczek/Motyw/raw/refs/heads/main/dist/motyw.user.js)**

1. Zainstaluj Tampermonkey w przeglądarce.
2. Otwórz link powyżej i potwierdź instalację. Jeśli przeglądarka pobierze plik, zaimportuj go w Tampermonkey.
3. Odśwież Margonem. Kliknij rubinową ikonę T i włącz „Motyw - Stary ale jary”.
4. Motyw można też przełączać prawym przyciskiem myszy na skrócie z mapką.

Do pobrania nie potrzeba konta GitHub. Skrypt zawiera panel, dock, motyw i grafiki w jednym pliku. Po wejściu do gry i co 30 minut sprawdza mały plik version.json. Jeśli istnieje nowsza wersja, pokazuje okienko „Aktualizuj / Później”. „Aktualizuj” otwiera instalator Tampermonkey; po potwierdzeniu odśwież grę. „Później” ukrywa informację o tej wersji na 24 godziny; kolejne wydanie może pojawić się wcześniej. Problemy z połączeniem nie przerywają gry. Nowy kod nie jest pobierany ani uruchamiany bez instalacji.

Wersja 0.1.45 może działać obok aktualnej prywatnej wersji panelu Truciaka (0.1.45 lub nowszej). Panele mają osobne kafelki, okna i paski skrótów. Starsze prywatne wersje należy najpierw zaktualizować. Panel Firusia i Maddonz również mogą działać obok.

Dalszy rozwój motywu odbywa się wyłącznie w tym publicznym repozytorium.

## Zawartość

- Panel z rubinową literą T, pozycją zapisywaną w układzie NI i menu przy właściwym rogu ikony.
- Przełączany motyw: ciemne drewno, grafitowe powierzchnie, turkusowe akcenty i animowana kula życia.
- Skrót z mapką do przełączania motywu.

## Budowanie

Wymagany Python 3 oraz Node.js do testów:

```sh
python tools/build.py
node --check dist/motyw.user.js
node tests/public-release.cjs
node tests/update-notice.cjs
node tests/theme.cjs
node tests/theme-shortcut.cjs
node tests/menu-position.cjs
```

Plik `dist/motyw.user.js` jest gotowym instalatorem. Źródła motywu znajdują się w `modules/ebony-theme.js`, a edytowany arkusz w `assets/buttony.png`.

## Autorzy

Panel i dock zaadaptowano z [Gogatki Firusia / KoniecDniaDziecka](https://github.com/KoniecDniaDziecka/Gogatki). Własne zmiany panelu i motyw: Truciak. Oryginalne grafiki interfejsu pochodzą z Margonem/Garmory.


## Dolne ornamenty (0.1.47)

Edytowany `assets/buttony.png` zawiera przekolorowane ornamenty kuli i ramki paska EXP. Podmiana obejmuje wyłącznie elementy dolnego HUD, które w oryginale korzystają z `buttony.png`, również w pseudoelementach. Nie zmienia rozmiarów ani pozycji tła i nie obejmuje innych grafik wskaźników. Po wyłączeniu motywu znaczniki podmiany są usuwane. Geometria i kanał alfa arkusza są zachowane.


## Obręcz kuli (0.1.48)

Skorygowano jasne fragmenty dolnej metalowej obręczy, które poprzednio objęła maska chroniąca wnętrze kuli. Zmieniono wyłącznie jasne neutralne piksele w wąskich bocznych pasach; środek kuli i jej animacja pozostają bez zmian.


## Czubek obręczy (0.1.49)

Uzupełniono pominięty wiersz 872 arkusza buttony.png na czubku obręczy kuli. Wypełnienie, kanał alfa i warstwa szkła pozostają bez zmian.


## Turkusowe stany HP (0.1.50)

W `assets/hpStateSprite.png` zmieniono czerwień RGB (206,0,0) na #12C9BD. Wszystkie klatki, wymiary 611×72 i kanał alfa pozostały identyczne. Motyw podmienia wyłącznie obraz `.blood-frame`: gra nadal steruje miganiem, pozycją klatki i przezroczystością ostrzeżeń niskiego HP/śmierci.
