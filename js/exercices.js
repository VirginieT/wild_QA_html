function exo1(base,height){
  log = ""

  log = log + "<p>" + (base * height) / 2+"</p>";

  return log
}

function exo2(n1){
  log = ""

  return log
}

function exo3(n1,n2,n3){
  log = ""

  return log
}

function exo4(){
  log = ""

  return log
}

function exo5(){
  log = ""

  return log
}

function exo6(){
  log = ""

  return log
}

function exo7(){
  log = ""

  return log
}

function exo8(){
  log = ""

  return log
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
    n1 = $("#formEx1").children("#n1").val()
    n2 = $("#formEx1").children("#n2").val()
    $('#exo1').empty();
    $("#exo1").append(exo1(n1,n2));
  });
  $("#formEx2").submit(function(e) {
    e.preventDefault();
    n1 = $("#formEx2").children("#n1").val()
    $('#exo2').empty();
    $("#exo2").append(exo2(n1));
  });
  $("#formEx3").submit(function(e) {
    e.preventDefault();
    n1 = $("#formEx3").children("#n1").val()
    n2 = $("#formEx3").children("#n2").val()
    n3 = $("#formEx3").children("#n3").val()
    $('#exo3').empty();
    $("#exo3").append(exo3(n1,n2,n3));
  });
  $("#formEx4").submit(function(e) {
    e.preventDefault();
    t1 = $("#formEx4").children("#t1").val()
    $('#exo4').empty();
    $("#exo4").append(exo4(t1));
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
    n1 = $("#formEx7").children("#n1").val()
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
    n1 = $("#formEx9").children("#n1").val();
    n2 = $("#formEx9").children("#n2").val();
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
