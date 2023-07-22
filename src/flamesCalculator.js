const calculateFlames = (yourName, partnerName) => {
    const yourNameLower = yourName.toLowerCase().replace(/\s/g, '');
    const partnerNameLower = partnerName.toLowerCase().replace(/\s/g, '');
    const combinedNames = yourNameLower + partnerNameLower;
  
   if(yourNameLower ==='nishma' || partnerNameLower==='nishma'){
    return 'Manakenduku bangaram  you are my Wife anthe';
   }
    
  
    const flamesSequence = 'flames';
    let remainingLetters = combinedNames.split('');
  
    for (const letter of flamesSequence) {
      const index = remainingLetters.indexOf(letter);
      if (index !== -1) {
        remainingLetters.splice(index, 1);
      }
    }
  
    const result = remainingLetters.length % flamesSequence.length;
    const flamesMeaning = {
      0: 'Friendship',
      1: 'Love',
      2: 'Affection',
      3: 'Marriage',
      4: 'Enemy',
      5: 'Sibling',
    };
  
    return flamesMeaning[result];
  };
  
  export default calculateFlames;
  
  