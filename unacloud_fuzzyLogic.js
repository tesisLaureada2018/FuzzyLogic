let fuzzylogic = require('fuzzylogic');

function threatCalc (threat) {
    var cpu_low = fuzzylogic.triangle(threat, 0, 20, 40);
    var cpu_N  = fuzzylogic.trapezoid(threat, 20, 30, 90, 100);
    var cpu_high = fuzzylogic.grade(threat, 90, 100);
    
    console.log('Threat: ' + threat);
    console.log('no attack: '       + probabNoAttack);
    console.log('normal attack: '   + probabNormalAttack);
    console.log('enraged attack: '  + probabEnragedAttack);
};

threatCalc(10);
console.log("\n");
threatCalc(20);
console.log("\n");
threatCalc(30);
console.log("\n");
threatCalc(40);
console.log("\n");
threatCalc(50);
console.log("\n");
threatCalc(60);
console.log("\n");
threatCalc(70);
console.log("\n");
threatCalc(80);
console.log("\n");
threatCalc(91);
console.log("\n");
threatCalc(100);
