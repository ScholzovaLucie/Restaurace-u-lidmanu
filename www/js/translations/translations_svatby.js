const translations = {
    en: {
        'psvat': 'Our restaurant is the ideal place to organize your wedding, not only because of the romantic surroundings, but also because of the design of our premises.',
        'radek1': 'Large social hall - wedding table for up to 70 people',
        'radek2': 'The total wedding capacity is up to 90 people',
        'radek3': 'Wedding menu, banquet according to your ideas and requirements',
        'radek4': 'For smaller weddings, we offer a restaurant lounge with a capacity of 20 people',
        },
    cz: {
        'psvat': 'Naše restaurace je ideální k uspořádání Vaší svatby a to nejen z důvodu romantické okolní krajiny, ale i díky uspořádání našich prostor.',
        'radek1': 'Velký společenský sál – svatební tabule až pro 70 osob',
        'radek2': 'Celková kapacita svatby až 90 osob',
        'radek3': 'Svatební menu, raut dle Vašich představ a požadavků',
        'radek4': 'Pro menší svatby nabízíme salónek restaurace s kapacitou 20 osob',
        },
    pl: {
        'psvat': 'Nasza restauracja to idealne miejsce na zorganizowanie Waszego wesela, nie tylko ze względu na nastrojowe otoczenie, ale również ze względu na wystrój naszego lokalu.',
        'radek1': 'Duża sala towarzyska - stół weselny do 70 osób',
        'radek2': 'Całkowita pojemność weselna to do 90 osób',
        'radek3': 'Menu weselne, bankietowe według Państwa pomysłów i wymagań',
        'radek4': 'Na mniejsze wesela oferujemy salę restauracyjną mogącą pomieścić 20 osób',
        },
    de: {
        'psvat': 'Unser Restaurant ist nicht nur wegen der romantischen Umgebung, sondern auch wegen der Gestaltung unserer Räumlichkeiten, ein perfekter Ort für die Organisation Ihrer Hochzeit.',
        'radek1': 'Großer Gesellschaftssaal - Hochzeitstafel für bis zu 70 Personen',
        'radek2': 'Gesamthochzeitskapazität bis zu 90 Personen',
        'radek3': 'Hochzeitsmenü, Bankett nach Ihren Vorstellungen und Wünschen',
        'radek4': 'Für kleinere Hochzeiten bieten wir eine Restaurant-Lounge mit einer Kapazität von 20 Personen an',
        }
  };
  
  
  function changeLanguage(language) {
    document.getElementById('psvat').innerHTML = translations[language].psvat;
    document.getElementById('radek1').innerHTML = translations[language].radek1;
    document.getElementById('radek2').innerHTML = translations[language].radek2;
    document.getElementById('radek3').innerHTML = translations[language].radek3;
    document.getElementById('radek4').innerHTML = translations[language].radek4;
  }