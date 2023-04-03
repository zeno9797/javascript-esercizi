// ceo => 2200
// manager => 1800
// cto => 1800
// developer => 1500
// default => 1000



const ceoSalary = calculateSalary('ceo');
const managerSalary = calculateSalary('manager');
const ctoSalary = calculateSalary('cto');
const developerSalary = calculateSalary('developer');
const otherSalary = calculateSalary('other');



function calculateSalary(role) {
  switch (role) {
   case 'ceo':
     return 2200;
   break;

   case 'manager': 
   return 1800;
   break;

   case 'cto':
    return 1800 ;
    break;

    case 'developer':
      return 1500;
      break;

    default: 'other'
    return 1000

  }
}



console.log(ceoSalary);
console.log(managerSalary);
console.log(ctoSalary);
console.log(developerSalary);
console.log(otherSalary);