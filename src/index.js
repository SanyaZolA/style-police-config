let person = {
  name: 'Yoda',
  designation: 'Jedi Master ',
};

let man = '';

function trainJedi(jediWarrion) {
  if (jediWarrion.name === 'Yoda') {
    man = 'Master';
  }
  man = 'Padawan';
}

trainJedi({ name: 'Yoda', designation: 'padawan' });
console.log(man);
console.log('asd');
