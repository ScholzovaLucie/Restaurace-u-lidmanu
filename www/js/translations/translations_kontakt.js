const translations = {
  en: {
    majitel_provozovatel: "Owner and operator:",
    placeHolder_name: "Name",
    placeHolder_email: "Email",
    placeHolder_subject: "Subject",
    placeHolder_message: "Message",
    btn_submit: "Submit",
    kraj_text:
      "The website was implemented with the financial support of the Hradec Králové Region",
  },
  cz: {
    majitel_provozovatel: "Majitel a provozovatel:",
    placeHolder_name: "Jméno",
    placeHolder_email: "Email",
    placeHolder_subject: "Předmět",
    placeHolder_message: "Zpráva",
    btn_submit: "Odeslat",
    kraj_text: "Webové stránky realitovány za finanční podpory Královéhradeckého kraje",
  },
  pl: {
    majitel_provozovatel: "Właściciel i operator:",
    placeHolder_name: "Imię",
    placeHolder_email: "Email",
    placeHolder_subject: "Temat",
    placeHolder_message: "Wiadomość",
    btn_submit: "Wyślij",
    kraj_text: "Strona internetowa została zrealizowana przy wsparciu finansowym regionu Hradec Králové",
  },
  de: {
    majitel_provozovatel: "Eigentümer und Betreiber:",
    placeHolder_name: "Name",
    placeHolder_email: "E-Mail",
    placeHolder_subject: "Betreff",
    placeHolder_message: "Nachricht",
    btn_submit: "Absenden",
    kraj_text:
      "Die Website wurde mit finanzieller Unterstützung der Region Hradec Králové realisiert",
  },
};

function changeLanguage(language) {
  document.getElementById("majitel_provozovatel").innerHTML =
    translations[language].majitel_provozovatel;
  document.getElementById("placeHolder_name").innerHTML =
    translations[language].placeHolder_name;
  document.getElementById("placeHolder_email").innerHTML =
    translations[language].placeHolder_email;
  document.getElementById("placeHolder_subject").innerHTML =
    translations[language].placeHolder_subject;
  document.getElementById("placeHolder_message").innerHTML =
    translations[language].placeHolder_message;
  document.getElementById("btn_submit").value =
    translations[language].btn_submit;
  document.getElementById("kraj_text").innerHTML =
    translations[language].kraj_text;
}
