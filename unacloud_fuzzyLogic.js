let fuzzylogic = require('fuzzylogic');

function threatCalc (machine) {
    const diskRisk = fuzzylogic.trapezoid(machine.unacloudDisk.percent, 20, 90, 100, 101);
    const cpuRisk = fuzzylogic.trapezoid(machine.cpu, 0, 90, 100, 101);
    const ramRisk = fuzzylogic.grade(machine.ram.percent, 0, 100) - 0.3;

    console.log('disk: ' + diskRisk);
    console.log('cpu: '  + cpuRisk);
    console.log('ram: '  + ramRisk);
    return Math.max(cpuRisk, Math.max(diskRisk, ramRisk));
};
let machine = {
    unacloudDisk : { percent: 70},
    cpu: 50,
    ram : { percent: 70 }
}
console.log(threatCalc(machine));
