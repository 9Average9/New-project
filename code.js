const classAction = {
  fighter: ['Bash', 'Power Strike', 'Defensive Stance', 'slash', 'assess'],
  wizard: ['Fireball', 'Ice Spear', 'Teleport', 'Thunderbolt', 'melt'],
  druid: ['beast speech', 'camo', 'elemental arrow', 'change', 'wings'],
  bard: ['stuff1','stuff2','stuff3','stuff4','stuff5'],
  monk: ['stuff1','stuff2','stuff3','stuff4','stuff5'],
  cleric: ['stuff1','stuff2','stuff3','stuff4','stuff5'],
  barbarian: ['stuff1','stuff2','stuff3','stuff4','stuff5'],
  paladin: ['stuff1','stuff2','stuff3','stuff4','stuff5'],
  rogue: ['stuff1','stuff2','stuff3','stuff4','stuff5'],
  ranger: ['stuff1','stuff2','stuff3','stuff4','stuff5'],
  sorcerer: ['stuff1','stuff2','stuff3','stuff4','stuff5'],
  warlock: ['stuff1','stuff2','stuff3','stuff4','stuff5'],
};

function generateCharacter() {
  const selectedRace = document.getElementById('race-selection').value;
  const selectedClass = document.getElementById('class-selection').value;

  const characterAttributes = generateAttributes(selectedClass, selectedRace);
  const characterActions = generateActions(selectedClass);

  displayCharacter(selectedRace, selectedClass, characterAttributes, characterActions);
}



function generateAttributes(characterClass, race) {
  let attributes = {
    AC: Math.floor(Math.random()* 5 + 14),
    strength: Math.floor(Math.random() * 8) + 10,
    dexterity: Math.floor(Math.random() * 8) + 10,
    intelligence: Math.floor(Math.random() * 8) + 10,
    constitution: Math.floor(Math.random() * 8) + 10,
    wisdom: Math.floor(Math.random() * 8) + 10,
    charisma: Math.floor(Math.random() * 8) + 10,
  };

  // Make adjustments based on specific classes add specifications for races
  if (characterClass === 'fighter' || characterClass === 'ranger' || characterClass === 'barbarian' || characterClass === 'paladin') {
    attributes.strength = Math.floor(Math.random() * 10) + 10;
  }/*add other specifications here  */

  // Dragonborn warlock gets an extra charisma boost
  if (characterClass === 'warlock' && race === 'dragonborn') {
    attributes.charisma = 18;
  }

  // Add more conditional adjustments for other classes or races as needed...
if (characterClass === 'cleric' && race === 'gnome'){
  attributes.AC = 20; 
  attributes.charisma =20;
  attributes.constitution =20;
  attributes.dexterity =20;
  attributes.intelligence =20;
  attributes.intelligence =20;
  attributes.strength =20;
  attributes.wisdom =20;
  
}


  return attributes;
}

function generateActions(characterClass) {
  const actionsPool = classAction[characterClass];
  const numActionsToSelect = 3; // Number of actions to randomly select for each character
  const selectedActions = [];

  while (selectedActions.length < numActionsToSelect) {
    const randomIndex = Math.floor(Math.random() * actionsPool.length);
    const action = actionsPool[randomIndex];

    if (!selectedActions.includes(action)) {
      selectedActions.push(action);
    }
  }

  return selectedActions;
}

function displayCharacter(race, characterClass, attributes, actions) {
  const characterDetails = document.getElementById('character-info');
  let details = '';
  


  details += `<li>Race: ${race}</li>`;
  details += `<li>Class: ${characterClass}</li>`;
  details += `<li>Armor Class: ${attributes.AC}</li>`;
  details += `<li>Strength: ${attributes.strength}</li>`;
  details += `<li>Dexterity: ${attributes.dexterity}</li>`;
  details += `<li>Intelligence: ${attributes.intelligence}</li>`;
  details += `<li>Constitution: ${attributes.constitution}</li>`;
  details += `<li>Wisdom: ${attributes.wisdom}</li>`;
  details += `<li>Charisma: ${attributes.charisma}</li>`;
  if (characterClass === 'cleric' && race === 'gnome'){
    details += `<li>Actions: Power of God</li>`;
  }else{details += `<li>Actions: ${actions.join(', ')}</li>`;}


  characterDetails.innerHTML = details;

  
}



// Update selected option text based on user selection
document.getElementById('race-selection').addEventListener('change', function() {
  let selectedOption = this.options[this.selectedIndex].text;
  document.querySelector('.selected-option').textContent = selectedOption;
});


