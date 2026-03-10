# MyShop - Produktsida

## Beskrivning

En enkel produktsida för en fiktiv webbutik. Projektet fokuserar på tillgänglighet (WCAG 2.1 AA) och prestandaoptimering (Core Web Vitals).

## Projektstruktur

```
├── index.html      # Huvudsida med produkter och nyhetsbrev
├── styles.css      # Stilmall med fokus på kontrast och fokusindikatorer
├── script.js       # JavaScript för kundvagn och formulär
└── images/         # Bilder i WebP-format
```



## Testverktyg

Sidan inkluderar två testskript som körs automatiskt:

- axe-core - testar tillgänglighet enligt WCAG 2.1 AA och visar resultat i konsolen
- web-vitals - mäter Core Web Vitals (LCP, FCP, CLS, FID, TTFB) och loggar till konsolen

Öppna webbläsarens utvecklarverktyg (F12) och gå till Console-fliken för att se resultaten.

## Krav

Ingen installation krävs. Öppna index.html i en webbläsare eller använd en lokal server som Live Server i VS Code.

## WCAG-efterlevnad

Sidan uppfyller WCAG 2.1 nivå AA med följande:

- Semantisk HTML-struktur (header, main, nav, footer, section)
- Korrekt rubrikhierarki (h1, h2, h3)
- Labels på alla formulärfält
- Tillräcklig färgkontrast (minst 4.5:1)
- Synliga fokusindikatorer för tangentbordsnavigering
- Alt-texter på alla bilder
- Språkattribut på html-elementet