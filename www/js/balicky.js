var img = document.getElementById("balicekimg");

var balicek = document.getElementById("balicek");

var balicky = document.getElementById("balicky");


balicek1.addEventListener("click", (event) => {
  balicekclicked(event);
});

balicek2.addEventListener("click", (event) => {
  balicekclicked(event);
});

balicek3.addEventListener("click", (event) => {
  balicekclicked(event);
});

function balicekclicked(event) {
  var id = event.currentTarget.id;
  var rozbaleno;

  if (id == "balicek1") {
    rozbaleno = document.getElementById("balicek1Rozbaleno");
    close("balicek2", "balicek2Rozbaleno");
    close("balicek3", "balicek3Rozbaleno");
  } else if (id == "balicek2") {
    rozbaleno = document.getElementById("balicek2Rozbaleno");
    close("balicek1", "balicek1Rozbaleno");
    close("balicek3", "balicek3Rozbaleno");
  } else if (id == "balicek3") {
    rozbaleno = document.getElementById("balicek3Rozbaleno");
    close("balicek2", "balicek2Rozbaleno");
    close("balicek1", "balicek1Rozbaleno");
  }

  event.currentTarget.classList.add("active");

  document.getElementById("balicek1").classList.add("zmensen");
  document.getElementById("balicek2").classList.add("zmensen");
  document.getElementById("balicek3").classList.add("zmensen");

  updateElementContent('balicek1p', 'balicek1p', 'balicek1pmaly');
  updateElementContent('balicek2p', 'balicek1p', 'balicek2pmaly');
  updateElementContent('balicek3p', 'balicek1p', 'balicek3pmaly');

  document.getElementById("balicky_blok").classList.add("zmensen");

  rozbaleno.style.display = "grid";
  rozbaleno.style.opacity = "1";
  rozbaleno.classList.add("active");
}

function closeBalicek() {
  close("balicek1", "balicek1Rozbaleno");
  close("balicek2", "balicek2Rozbaleno");
  close("balicek3", "balicek3Rozbaleno");

  document.getElementById("balicky_blok").classList.remove("zmensen");

  updateElementContent('balicek1p', 'balicek1p', null);
  updateElementContent('balicek2p', 'balicek1p', null);
  updateElementContent('balicek3p', 'balicek1p', null);
}

function close(nameBalicek, nameRozbaleno) {
  if (nameBalicek) {
    document.getElementById(nameBalicek).classList.remove("zmensen");
    document.getElementById(nameBalicek).classList.remove("active");
  }
  if (nameRozbaleno) {
    document.getElementById(nameRozbaleno).style.display = "none";
    document.getElementById(nameRozbaleno).style.opacity = "0";
  }
}
