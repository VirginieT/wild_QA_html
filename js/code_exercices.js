// exo 1
function triangleSurface(base,height) {

  return (base*height) / 2;
}

console.log(triangleSurface(10,5));


// exo 2
function factor(number) {
      let result = 1;
      for (let i = 1;  
        i <= number;  
        i++) {
        result *= i;
      }
      return result;
  }

console.log(factor ( 5 ));


// exo 3
function highestNumber(a,b,c) {
      if (a > b && a > c) {
          return a;
      } else if (b > a && b > c) {
          return b;
      } else if (c > a && c > b) {
          return c;
      }
  }

console.log(highestNumber(1,2,3));


// exo 4
function lastElement(tableau) {
      return tableau[tableau . length - 1];
  }

console.log(lastElement([1,2,3,4,5]));


// exo 5
function concat(str1,str2) {
    return str1 + " | " + str2 ;
  }

console.log(concat("Left","Right"));


// exo 6
function compare(str1,str2) {
  if (str1.length === str2.length) {
    return true;
  }
  return false;
}

console.log(compare("Hello","World"));


// exo 7
function pairOrOdd(number) {
  if (number % 2 === 0) {
    return "pair";
  }
  return "impair";
}

console.log(pairOrOdd(4));


// exo 8
function capital(country) {
  switch (country) {
    case "France":
      return "Paris";
    case "Allemagne":
      return "Berlin";
    case "Italie":
      return "Rome";
    case "Maroc":
      return "Rabat";
    case "Espagne":
      return "Madrid";
    case "Portugal":
      return "Lisbonne";
    case "Angleterre":
      return "Londres";
    default:
      return "Inconnu";
  }
}

console.log(capital("France"));


// exo 9
function calculator() {
  let num1 = parseFloat(prompt("Entrez un premier nombre "));
  let num2 = parseFloat(prompt("Entrez un deuxième nombre "));
  let operation = prompt("Entrez une opération (+, -, *, /) ");
  let resultat;

  switch (operation) {
    case "+":
      resultat = num1 + num2;
      break;
    case "-":
      resultat = num1 - num2;
      break;
    case "*":
      resultat = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        resultat = "unknown";
      } else {
        resultat = num1 / num2;
      }
      break;
    default:
      resultat = "opération non valide";
  }

  if (resultat !== "unknown") {
    console.log(num1 + " " + operation + " " + num2 + " = " + resultat);
  } else {
    console.log("Le résultat est inconnu car vous avez divisé par zéro.");
  }
}

let resultat = calculator();



// exo 10
function countV(string) {
  let v = ["a", "e", "i", "o", "u", "y"];
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (v.includes(string[i])) {
      count++;
    }
  }
  return count;
}

console.log(countV("we are the champions"));


// PARTIE SAMUEL 

// EXERCICE 1
let surfaceTriangle = function(base, height) {
  return (base * height) / 2
};

console.log(surfaceTriangle(2, 4))

// EXERCICE 2
let factorize = function(number) {
  if (number <= 1) return 1;
  else return number * factorize(number-1);
};

console.log(factorize(5));

// EXERCICE 3

let greatest = function(int1, int2, int3){
  if (int1 !== int2 && int2 !== int3 && int1 !== int3){
    if (int1 > int2 && int1 > int3){
      return console.log("L'entier le plus grand est : " + int1);
    } else if (int2 > int1 && int2 > int3){
      return console.log("L'entier le plus grand est : " + int2);
    } else {
      return console.log("L'entier le plus grand est : " + int3);      
    }
  } else {
    console.log("Certains entiers sont égaux");
  }
};

greatest(312, 4544, 10);

// EXERCICE 4

let lastItem = function(table) {
  return console.log(table[table.length-1])
}

lastItem(["chien", "chat", "poule", "coq"])

// EXERCICE 5

let concatenate = function(string1, string2){
  return console.log(`${string1}|${string2}`)
}

concatenate("Mars", "Neptune")

// EXERCICE 6

let equal = function(str1, str2){
  if (str1.length === str2.length) {
    return true;
  } else {
    return false;
  }
}

console.log(equal("Avril", "Avril"))


// EXERCICE 7

let evenOdd = function(num) {
  if (num % 2 === 0){
    return console.log(`L'entier ${num} est pair`)
  } else {
    return console.log(`L'entier ${num} est impair`)
  }
}

evenOdd(50431231231321)


// EXERCICE 8

const capital = function(country) {
  switch(country){
    case "France":
      console.log("Capitale : Paris");
      break;
    case "Allemagne":
      console.log("Capitale : Berlin");
      break;
    case "Italie":
      console.log("Capitale : Rome");
      break;
    case "Maroc":
      console.log("Capitale : Rabat");
      break;
    case "Espagne":
      console.log("Capitale : Madrid");
      break;
    case "Portugal":
      console.log("Capitale : Lisbonne");
      break;
    case "Angleterre":
      console.log("Capitale : Londres");
      break;
    default:
      console.log("Capitale : Inconnue");
      break;
  }
};

capital("France");

// EXERCICE 9

let calcul = function(){
  let n1 = parseFloat(prompt("Nombre 1"));
  let n2 = parseFloat(prompt("Nombre 2"));
  let operator = prompt("Quel est le signe de l'opération ?");
  switch(operator){
    case "+": 
      return n1+n2;
      break;
    case '-':
      return n1-n2;
      break;
    case '*':
      return n1*n2;
      break;
    case '/': 
      return n2 == 0 ? "INTERDIT" : (n1 / n2);
    default:
      return "Opérateur inconnu"
  }
}

console.log(calcul())

// EXERCICE 10

let numberOfVoyelles = function(mot){
  let voyelles = ["a", "e", "i", "o", "u", "y"]
  let n = 0
  for (let i = 0; i < mot.length; i++) {
    let char = mot.charAt(i);
    if (voyelles.includes(char)){
      n ++
    }
  };
  return n
};

console.log(numberOfVoyelles("manifestations"))
