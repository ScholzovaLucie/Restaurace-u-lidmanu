const translations = {
    en: {
        'hlavni_nadpis_prvni': 'Where you will arrive',
        'hlavni_nadpis_druhy': 'Where you will sleep',
        'hlavni_nadpis_treti': 'Where you will eat',
        'hlavni_nadpis_ctvrty': 'When you say "YES" at our place',
        'hlavni_nadpis_paty': 'The Apple Tree at the Lidmans'
    },
    cz: {
        'hlavni_nadpis_prvni': 'Kam přijedete',
        'hlavni_nadpis_druhy': 'Kde se vyspíte',
        'hlavni_nadpis_treti': 'Kde se najíte',
        'hlavni_nadpis_ctvrty': 'Když si u nás řeknete "ANO"',
        'hlavni_nadpis_paty': 'Jabloň u Lidmanů',
        },
    pl: {
        'hlavni_nadpis_prvni': 'Gdzie przyjedziesz',
        'hlavni_nadpis_druhy': 'Gdzie będziesz spać',
        'hlavni_nadpis_treti': 'Gdzie będziesz jeść',
        'hlavni_nadpis_ctvrty': 'Kiedy u nas powiesz "TAK"',
        'hlavni_nadpis_paty': 'Jabłoń u Lidmanów'
    },
    de: {
        'hlavni_nadpis_prvni': 'Wohin Sie kommen werden',
        'hlavni_nadpis_druhy': 'Wo Sie schlafen werden',
        'hlavni_nadpis_treti': 'Wo Sie essen werden',
        'hlavni_nadpis_ctvrty': 'Wenn Sie bei uns "Ja" sagen',
        'hlavni_nadpis_paty': 'Der Apfelbaum bei den Lidmans'
    }
  };
  
  
  function changeLanguage(language) {
    document.getElementById('hlavni_nadpis_prvni').innerHTML = translations[language].hlavni_nadpis_prvni;
    document.getElementById('hlavni_nadpis_druhy').innerHTML = translations[language].hlavni_nadpis_druhy;
    document.getElementById('hlavni_nadpis_treti').innerHTML = translations[language].hlavni_nadpis_treti;
    document.getElementById('hlavni_nadpis_ctvrty').innerHTML = translations[language].hlavni_nadpis_ctvrty;
    document.getElementById('hlavni_nadpis_paty').innerHTML = translations[language].hlavni_nadpis_paty;
  }