let Numberkm = parseInt(prompt("Quanti chilometri vuole fare?"));
document.getElementById("distance").innerHTML = Numberkm; 

let UserAge = parseInt(prompt("Quanti anni ha?"));
document.getElementById("age").innerHTML = UserAge; 

let CostXkm = (0.21);

let cost = (CostXkm * Numberkm);
if (UserAge < 18) {
    cost = (cost - (((CostXkm * Numberkm) / 100) * 20));
}else if (UserAge >= 65) {
    cost = (cost - (((CostXkm * Numberkm) / 100) * 40));
}
cost = cost.toFixed(2);
document.getElementById("cost").innerHTML = cost;