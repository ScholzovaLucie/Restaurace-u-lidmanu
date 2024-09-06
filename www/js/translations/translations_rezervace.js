const translations = {
    en: {
            'placeHolder_name': 'Name',
            'placeHolder_email': 'Email',
            'placeHolder_telefon': 'Phone',
            'placeHolder_date': 'Date',
            'placeHolder_package': 'Package stay',
            'placeHolder_subject': 'Subject',
            'placeHolder_message': 'Message',
            'btn_submit': 'Submit',
            'value1': 'A long weekend in Stolové hory',
            'value2': 'Five-day hiking and sightseeing stay in Machov region',
            'value3': 'Week-long vacation in the Broumov region',
        },
    cz: {
        'placeHolder_name': 'Jméno',
        'placeHolder_email': 'Email',
        'placeHolder_telefon': 'Telefon',
        'placeHolder_date': 'Datum',
        'placeHolder_package': 'Pobytový balíček',
        'placeHolder_subject': 'Předmět',
        'placeHolder_message': 'Zpráva',
        'btn_submit': 'Odeslat',
        'value1': 'Prodloužený víkend ve Stolových horáchslat',
        'value2': 'Pětidenní turisticko-poznávací pobyt na Machovsku',
        'value3': 'Týdenní dovolená na Broumovsku',
        },
    pl: {
        'placeHolder_name': 'Imię',
        'placeHolder_email': 'Email',
        'placeHolder_telefon': 'Telefon',
        'placeHolder_date': 'Data',
        'placeHolder_package': 'Pakiet pobytowy',
        'placeHolder_subject': 'Temat',
        'placeHolder_message': 'Wiadomość',
        'btn_submit': 'Wyślij',
        'value1': 'Przedłużony weekend w Górach Stołowych',
        'value2': 'Pięciodniowy pobyt turystyczno-poznawczy w Machovie',
        'value3': 'Tygodniowe wakacje w regionie Broumov',
    },
    de: {
        'placeHolder_name': 'Name',
        'placeHolder_email': 'E-Mail',
        'placeHolder_telefon': 'Telefon',
        'placeHolder_date': 'Datum',
        'placeHolder_package': 'Aufenthaltspaket',
        'placeHolder_subject': 'Betreff',
        'placeHolder_message': 'Nachricht',
        'btn_submit': 'Absenden',
        'value1': 'Verlängertes Wochenende in den Tafelbergen',
        'value2': 'Fünftägiger Wander- und Erkundungsaufenthalt in der Region Machov',
        'value3': 'Wöchiger Urlaub in der Region Broumov',
    }
  };
  
  
  function changeLanguage(language) {
    document.getElementById('placeHolder_name').innerHTML = translations[language].placeHolder_name;
    document.getElementById('placeHolder_email').innerHTML = translations[language].placeHolder_email;
    document.getElementById('placeHolder_telefon').innerHTML = translations[language].placeHolder_telefon;
    document.getElementById('placeHolder_date').innerHTML = translations[language].placeHolder_date;
    document.getElementById('placeHolder_package').innerHTML = translations[language].placeHolder_package;
    document.getElementById('placeHolder_subject').innerHTML = translations[language].placeHolder_subject;
    document.getElementById('placeHolder_message').innerHTML = translations[language].placeHolder_message;
    document.getElementById('btn_submit').value = translations[language].btn_submit;
    document.getElementById('value1').innerHTML = translations[language].value1;
    document.getElementById('value2').innerHTML = translations[language].value2;
    document.getElementById('value3').innerHTML = translations[language].value3;
  }