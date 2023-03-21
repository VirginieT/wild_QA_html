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



