

function myFunction() {
  const element = document.getElementById("id01");
  element.innerHTML = "New Heading";
}

function myColorChange() {
  const element = document.getElementById("id01");
  element.style.color = "red";
}

const przesylka = {
  name: "",
  ulica: "",
};

const przesylka2 = {
  name: "",
  ulica: "",
};

przesylka2.waga = 20;
przesylka.name = "List";
przesylka2.name = "Paczka";


function mojaFunkcja1() {

  const element = document.getElementById("id01");
  informacja = "Typ twojej przesylki to: " + przesylka.name;
  element.innerHTML = informacja;

  const element2 = document.getElementById("id02");
  informacja = "Przesyłka nie posiada wagi";
  element2.innerHTML = informacja;

}

function mojaFunkcja2() {

  const element = document.getElementById("id01");
  informacja = "Typ twojej przesylki to: " + przesylka2.name;
  element.innerHTML = informacja;

  const element2 = document.getElementById("id02");
  informacja = "Waga twojej przesylki to: " + przesylka2.waga + " kg";
  element2.innerHTML = informacja;

}