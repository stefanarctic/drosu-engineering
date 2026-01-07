# Ghid Indexare Google - DROSU Engineering

## 🔴 Problema Actuală
- **0 pagini indexate**
- **5 pagini neindexate**
- Site-ul este un SPA React (Single Page Application)

## ✅ Pași Imediați pentru Indexare

### 1. Request Indexing Manual în Google Search Console

**Pentru fiecare pagină importantă:**

1. Mergi la **"Verificarea adresei URL"** (URL Inspection) în Search Console
2. Introdu URL-ul paginii (ex: `https://www.drosuengineering.com/`)
3. Click pe **"Solicită indexarea"** (Request Indexing)
4. Repetă pentru:
   - `https://www.drosuengineering.com/`
   - `https://www.drosuengineering.com/piese`
   - `https://www.drosuengineering.com/piese/kit-admisie`
   - `https://www.drosuengineering.com/servicii/modificari-hardware`
   - `https://www.drosuengineering.com/blog/ce-modificari-pot-face`

### 2. Verificare Sitemap în Search Console

1. Mergi la **"Sitemaps"** în meniul stâng
2. Verifică că sitemap-ul `https://www.drosuengineering.com/sitemap.xml` este trimis
3. Dacă nu este, adaugă-l manual
4. Verifică dacă există erori

### 3. Verificare Probleme de Indexare

În Search Console, mergi la **"Indexare" > "Pagini"** și verifică:

- **De ce nu sunt indexate paginile?**
  - Verifică mesajele de eroare
  - Verifică dacă există blocaje în robots.txt
  - Verifică dacă există meta tags "noindex"

### 4. Optimizări pentru SPA React

**Problema:** Google poate avea dificultăți să indexeze aplicații React fără server-side rendering.

**Soluții:**

#### Opțiunea A: Pre-rendering Static (Recomandat pentru început)
- Generare HTML static pentru paginile importante
- Poate fi făcut cu `react-snap` sau `prerender-spa-plugin`

#### Opțiunea B: Server-Side Rendering (SSR)
- Migrare la Next.js sau Remix
- Mai complex, dar ideal pentru SEO

#### Opțiunea C: Verificare Manuală Googlebot
- Folosește **"Verificarea adresei URL"** în Search Console
- Verifică dacă Googlebot vede conținutul corect

### 5. Verificare Accesibilitate Site

Testează dacă site-ul este accesibil:

```bash
# Test cu curl (simulează Googlebot)
curl -A "Googlebot" https://www.drosuengineering.com/
```

Ar trebui să vezi HTML-ul complet, nu doar `<div id="root"></div>`.

### 6. Adăugare Pre-rendering (Opțional dar Recomandat)

Pentru indexare mai bună, poți adăuga pre-rendering:

```bash
npm install --save-dev react-snap
```

Apoi adaugă în `package.json`:
```json
{
  "scripts": {
    "postbuild": "react-snap"
  },
  "reactSnap": {
    "include": [
      "/",
      "/piese",
      "/piese/kit-admisie",
      "/servicii/modificari-hardware",
      "/blog/ce-modificari-pot-face"
    ]
  }
}
```

## 📋 Checklist Indexare

- [ ] Request indexing pentru homepage în Search Console
- [ ] Request indexing pentru `/piese` în Search Console
- [ ] Request indexing pentru `/piese/kit-admisie` în Search Console
- [ ] Request indexing pentru `/servicii/modificari-hardware` în Search Console
- [ ] Request indexing pentru `/blog/ce-modificari-pot-face` în Search Console
- [ ] Verificare sitemap trimis corect
- [ ] Verificare erori în secțiunea "Indexare"
- [ ] Testare accesibilitate site pentru Googlebot
- [ ] (Opțional) Adăugare pre-rendering pentru indexare mai bună

## ⏱️ Timeline Așteptat

- **Request indexing manual**: 1-7 zile pentru indexare
- **Indexare automată**: 1-4 săptămâni după request-uri
- **Vizibilitate în căutări**: 2-8 săptămâni după indexare

## 🚨 Probleme Comune

1. **Site-ul nu se încarcă pentru Googlebot**
   - Verifică hosting și accesibilitate
   - Verifică firewall-uri care blochează Googlebot

2. **Conținutul nu este vizibil pentru Googlebot**
   - SPA React necesită JavaScript pentru rendering
   - Googlebot execută JavaScript, dar poate avea limitări
   - Consideră pre-rendering sau SSR

3. **Robots.txt blochează indexarea**
   - Verifică că nu există `Disallow: /` în robots.txt
   - Verifică că sitemap-ul este accesibil

4. **Meta tags "noindex"**
   - Verifică că nu există `<meta name="robots" content="noindex">` pe pagini importante

## 📞 Următorii Pași

1. **ACUM**: Request indexing manual pentru toate paginile importante
2. **ACESTA SĂPTĂMÂNĂ**: Monitorizează indexarea în Search Console
3. **LUNEA VIITOARE**: Dacă nu sunt indexate, consideră pre-rendering sau SSR
