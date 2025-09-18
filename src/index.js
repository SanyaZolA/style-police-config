
let man = 'Jedi';
function trainJedi(jediWarrion) {
  if (jediWarrion.name === 'Yoda') {
    man = 'Master';
  }
  man = 'Padawan';
}

trainJedi({ name: 'Yoda', designation: 'padawan' });

console.log(man);
