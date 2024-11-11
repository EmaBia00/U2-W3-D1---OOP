const form = document.querySelector("form");
const petName = document.getElementById("petName");
const ownerName = document.getElementById("ownerName");
const species = document.getElementById("species");
const breed = document.getElementById("breed");
const petList = document.getElementById("petList");

let pets = [];

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  sameOwner(anotherPet) {
    return this.ownerName === anotherPet.ownerName ? true : false;
  }
}

const petListFunc = function () {
  petList.innerHTML = "";
  pets.forEach((pet) => {
    const list = document.createElement("li");
    if (pet.species !== "" || pet.breed !== "") {
      if (pet.species !== "") {
        list.innerText = "Nome: " + pet.petName + ", Proprietario: " + pet.ownerName + ", Specie: " + pet.species;
      }
      if (pet.breed !== "") {
        list.innerText = "Nome: " + pet.petName + ", Proprietario: " + pet.ownerName + ", Razza: " + pet.breed;
      }
      if (pet.species !== "" && pet.breed !== "") {
        list.innerText = "Nome: " + pet.petName + ", Proprietario: " + pet.ownerName + ", Specie: " + pet.species + ", Razza: " + pet.breed;
      }
    } else {
      list.innerText = "Nome: " + pet.petName + ", Proprietario: " + pet.ownerName;
    }
    petList.appendChild(list);
  });
};

form.onsubmit = function (event) {
  event.preventDefault();

  let newPet = new Pet(petName.value, ownerName.value, species.value, breed.value);
  pets.push(newPet);
  petListFunc();
  petName.value = "";
  ownerName.value = "";
  species.value = "";
  breed.value = "";
};
