function exo1(base,height){
  log = ""

  log = log + "<p>" + (base * height) / 2+"</p>";

  return log
}

function exo2(number){
  let result = 1;
  for (let i = 1;i <= number;i++) {
    result *= i;
  }
  return result;
}

function exo3(a,b,c){
  console.log("a : "+a+" b : "+b+" c : "+c)
  if (a > b && a > c) {
      return a;
  } else if (b > a && b > c) {
      return b;
  } else if (c > a && c > b) {
      return c;
  }
}

function exo4(tableau){
  return tableau[tableau.length - 1];
}

function exo5(str1,str2){
  return str1 + " | " + str2 ;
}

function exo6(str1, str2){
  if (str1.length === str2.length) {
    return "true";
  }
  return "false";
}

function exo7(number){
  if (number % 2 === 0) {
   return "pair";
 }
 return "impair";
}

function exo8(country){
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

function exo9(n1, n2, s1){
  log = ""

  switch(s1){
    case "add":log = log + n1 + " + " + n2 +" = "+(parseInt(n1)+parseInt(n2));break;
    case "sub":log = log + n1 + " - " + n2 +" = "+(n1-n2);break;
    case "mul":log = log + n1 + " x " + n2 +" = "+(n1*n2);break;
    case "div":log = log + n1 + " / " + n2 +" = "+(n2 == 0 ? "unknown" : (n1 / n2));
  }

  return log
}

function exo10(){
  log = ""

  return log
}


$(document).ready(function(){
  $("#formEx1").submit(function(e) {
    e.preventDefault();
    n1 = parseInt($("#formEx1").children("#n1").val())
    n2 = parseInt($("#formEx1").children("#n2").val())
    $('#exo1').empty();
    $("#exo1").append(exo1(n1,n2));
  });
  $("#formEx2").submit(function(e) {
    e.preventDefault();
    n1 = parseInt($("#formEx2").children("#n1").val())
    $('#exo2').empty();
    $("#exo2").append(exo2(n1));
  });
  $("#formEx3").submit(function(e) {
    e.preventDefault();
    n1 = parseInt($("#formEx3").children("#n1").val())
    n2 = parseInt($("#formEx3").children("#n2").val())
    n3 = parseInt($("#formEx3").children("#n3").val())
    $('#exo3').empty();
    $("#exo3").append(exo3(n1,n2,n3));
  });
  $("#formEx4").submit(function(e) {
    e.preventDefault();
    t1 = $("#formEx4").children("#t1").val()
    tab1 = t1.replace('[', '').replace(']', '').split(',')
    $('#exo4').empty();
    $("#exo4").append(exo4(tab1));
  });
  $("#formEx5").submit(function(e) {
    e.preventDefault();
    t1 = $("#formEx5").children("#t1").val()
    t2 = $("#formEx5").children("#t2").val()
    $('#exo5').empty();
    $("#exo5").append(exo5(t1,t2));
  });
  $("#formEx6").submit(function(e) {
    e.preventDefault();
    t1 = $("#formEx6").children("#t1").val()
    t2 = $("#formEx6").children("#t2").val()
    $('#exo6').empty();
    $("#exo6").append(exo6(t1,t2));
  });
  $("#formEx7").submit(function(e) {
    e.preventDefault();
    n1 = parseInt($("#formEx7").children("#n1").val())
    $('#exo7').empty();
    $("#exo7").append(exo7(n1));
  });
  $("#formEx8").submit(function(e) {
    e.preventDefault();
    t1 = $("#formEx8").children("#t1").val()
    $('#exo8').empty();
    $("#exo8").append(exo8(t1));
  });
  $("#formEx9").submit(function(e) {
    e.preventDefault();
    n1 = parseInt($("#formEx9").children("#n1").val());
    n2 = parseInt($("#formEx9").children("#n2").val());
    s1 = $("#formEx9").children("#s1").val();
    $('#exo9').empty();
    $("#exo9").append(exo9(n1,n2,s1));
  });
  $("#formEx10").submit(function(e) {
    e.preventDefault();
    t1 = $("#formEx10").children("#t1").val()
    $('#exo10').empty();
    $("#exo10").append(exo10(t1));
  });
})
