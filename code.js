

const classAction = {
  fighter: ['Action Surge', 'Second Wind', 'Extra Attack', 'Precision Attack', 'Rally ', 'Menacing Attack ', 'Indomitable'],
  wizard: ['Fireball', 'Mage Armor', 'Shield', 'Magic Missile', 'Counterspell', 'Blight', 'Vampiric Touch'],
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
  const selectedLevel = parseInt(document.getElementById('level-selection').value);

  const characterAttributes = generateAttributes(selectedClass, selectedRace, selectedLevel);
  const characterActions = generateActions(selectedClass);
  const spellSlots = calculateSpellSlots(selectedClass, selectedLevel);

  displayCharacter(selectedRace, selectedClass, characterAttributes, characterActions, spellSlots);


  const addedActionsContainer = document.getElementById('addedActions');
  if (addedActionsContainer) {
    const addedDivs = addedActionsContainer.querySelectorAll('.added-div');
    addedDivs.forEach(div => {
      addedActionsContainer.removeChild(div); 
    });
  } else {
    console.error('Container not found');
  }
}
 
//Toggle Editing
function toggleEdit() {
  const selectedRace = document.getElementById('race-selection').value;
  const selectedClass = document.getElementById('class-selection').value;
  const selectedLevel = parseInt(document.getElementById('level-selection').value);

  const characterAttributes = generateAttributes(selectedClass, selectedRace, selectedLevel);
  const characterActions = generateActions(selectedClass);
  const spellSlots = calculateSpellSlots(selectedClass, selectedLevel);

  allowEdit(selectedRace, selectedClass, characterAttributes, characterActions, spellSlots);


  const addedActionsContainer = document.getElementById('addedActions');
  if (addedActionsContainer) {
    const addedDivs = addedActionsContainer.querySelectorAll('.added-div');
    addedDivs.forEach(div => {
      addedActionsContainer.removeChild(div); 
    });
  } else {
    console.error('Container not found');
  }
}




function calculateSpellSlots(characterClass, level, ) {

  if (characterClass === 'wizard' || characterClass === 'sorcerer' || characterClass === 'warlock' ||  characterClass === 'bard' || characterClass === 'cleric' || characterClass === 'druid') {
    if (level === 10) {
    
      return ` <select id="spellSLOTS">
      <option >4: level 1</option>
      <option >3: level 2</option>
      <option >3: level 3</option>
      <option >3: level 4</option>
      <option >2: level 5</option>
    </select>`; 
    } else if (level === 11) {
      return ` <select id="spellSLOTS">
      <option >4: level 1</option>
      <option >3: level 2</option>
      <option >3: level 3</option>
      <option >3: level 4</option>
      <option >2: level 5</option>
      <option >1: level 6</option>
    </select>`; 
    } else if (level === 12) {
      return ` <select id="spellSLOTS">
      <option >4: level 1</option>
      <option >3: level 2</option>
      <option >3: level 3</option>
      <option >3: level 4</option>
      <option >2: level 5</option>
      <option >1: level 6</option>
    </select>`; 
    } else if (level === 13) {
      return ` <select id="spellSLOTS">
      <option >4: level 1</option>
      <option >3: level 2</option>
      <option >3: level 3</option>
      <option >3: level 4</option>
      <option >2: level 5</option>
      <option >1: level 6</option>
      <option >1: level 7</option>
    </select>`; 
    } else if (level === 14) {
      return ` <select id="spellSLOTS">
      <option >4: level 1</option>
      <option >3: level 2</option>
      <option >3: level 3</option>
      <option >3: level 4</option>
      <option >2: level 5</option>
      <option >1: level 6</option>
      <option >1: level 7</option>
    </select>`; 
    } else if (level === 15) {
      return ` <select id="spellSLOTS">
      <option >4: level 1</option>
      <option >3: level 2</option>
      <option >3: level 3</option>
      <option >3: level 4</option>
      <option >2: level 5</option>
      <option >1: level 6</option>
      <option >1: level 7</option>
      <option >1: level 8</option>
    </select>`; 
    } else if (level === 16) {
      return ` <select id="spellSLOTS">
      <option >4: level 1</option>
      <option >3: level 2</option>
      <option >3: level 3</option>
      <option >3: level 4</option>
      <option >2: level 5</option>
      <option >1: level 6</option>
      <option >1: level 7</option>
      <option >1: level 8</option>
    </select>`; 
    } else if (level === 17) {
      return ` <select id="spellSLOTS">
      <option >4: level 1</option>
      <option >3: level 2</option>
      <option >3: level 3</option>
      <option >3: level 4</option>
      <option >2: level 5</option>
      <option >1: level 6</option>
      <option >1: level 7</option>
      <option >1: level 8</option>
      <option >1: level 9</option>
    </select>`; 
    } else if (level === 18) {
      return ` <select id="spellSLOTS">
      <option >4: level 1</option>
      <option >3: level 2</option>
      <option >3: level 3</option>
      <option >3: level 4</option>
      <option >3: level 5</option>
      <option >1: level 6</option>
      <option >1: level 7</option>
      <option >1: level 8</option>
      <option >1: level 9</option>
    </select>`; 
    } else if (level === 19) {
      return ` <select id="spellSLOTS">
      <option >4: level 1</option>
      <option >3: level 2</option>
      <option >3: level 3</option>
      <option >3: level 4</option>
      <option >3: level 5</option>
      <option >2: level 6</option>
      <option >1: level 7</option>
      <option >1: level 8</option>
      <option >1: level 9</option>
    </select>`; 
    } else if (level === 20) {
      return ` <select id="spellSLOTS">
      <option >4: level 1</option>
      <option >3: level 2</option>
      <option >3: level 3</option>
      <option >3: level 4</option>
      <option >3: level 5</option>
      <option >2: level 6</option>
      <option >2: level 7</option>
      <option >1: level 8</option>
      <option >1: level 9</option>
    </select>`; 
    } 
    // Add other level calculations as needed
  }else if(characterClass === 'barbarian'){
    
    if (level === 10) {
      return `4 Damage:+3`; 
    } else if (level === 11) {
      return ` 4 Damage:+3`; 
    } else if (level === 12) {
      return ` 5 Damage:+3`; 
    } else if (level === 13) {
      return ` 5 Damage:+3`; 
    } else if (level === 14) {
      return ` 5 Damage:+3`; 
    } else if (level === 15) {
      return `5 Damage:+3`; 
    } else if (level === 16) {
      return `5 Damage:+4`; 
    } else if (level === 17) {
      return ` 6 Damage:+4`; 
    } else if (level === 18) {
      return `6 Damage:+4`; 
    } else if (level === 19) {
      return `6 Damage:+4`; 
    } else if (level === 20) {
      return `Unlimited Damage:+4`; 
    } 


  }else if(characterClass === 'paladin' || characterClass === 'ranger'){if (level === 10) {
    return ` <select id="spellSLOTS">
    <option >4: level 1</option>
    <option >3: level 2</option>
    <option >2: level 3</option>
  </select>`; 
  } else if (level === 11) {
    return ` <select id="spellSLOTS">
    <option >4: level 1</option>
    <option >3: level 2</option>
    <option >3: level 3</option>
  </select>`; 
  } else if (level === 12) {
    return ` <select id="spellSLOTS">
    <option >4: level 1</option>
    <option >3: level 2</option>
    <option >3: level 3</option>
  </select>`; 
  } else if (level === 13) {
    return ` <select id="spellSLOTS">
    <option >4: level 1</option>
    <option >3: level 2</option>
    <option >3: level 3</option>
    <option >1: level 4</option>
   
  </select>`; 
  } else if (level === 14) {
    return ` <select id="spellSLOTS">
    <option >4: level 1</option>
    <option >3: level 2</option>
    <option >3: level 3</option>
    <option >1: level 4</option>
  </select>`; 
  } else if (level === 15) {
    return ` <select id="spellSLOTS">
    <option >4: level 1</option>
    <option >3: level 2</option>
    <option >3: level 3</option>
    <option >2: level 4</option>
   
  </select>`; 
  } else if (level === 16) {
    return ` <select id="spellSLOTS">
    <option >4: level 1</option>
    <option >3: level 2</option>
    <option >3: level 3</option>
    <option >2: level 4</option>
   
  </select>`; 
  } else if (level === 17) {
    return ` <select id="spellSLOTS">
    <option >4: level 1</option>
    <option >3: level 2</option>
    <option >3: level 3</option>
    <option >3: level 4</option>
    <option >1: level 5</option>
  </select>`; 
  } else if (level === 18) {
    return ` <select id="spellSLOTS">
    <option >4: level 1</option>
    <option >3: level 2</option>
    <option >3: level 3</option>
    <option >3: level 4</option>
    <option >1: level 5</option>
  </select>`; 
  } else if (level === 19) {
    return ` <select id="spellSLOTS">
    <option >4: level 1</option>
    <option >3: level 2</option>
    <option >3: level 3</option>
    <option >3: level 4</option>
    <option >2: level 5</option>
  </select>`; 
  } else if (level === 20) {
    return ` <select id="spellSLOTS">
    <option >4: level 1</option>
    <option >3: level 2</option>
    <option >3: level 3</option>
    <option >3: level 4</option>
    <option >2: level 5</option>
  </select>`; 
  } 

  } else if(characterClass === 'monk'){if (level === 10) {
    return `10, Martial arts 1d6`; 
  } else if (level === 11) {
    return `11, Martial arts 1d8`; ; 
  } else if (level === 12) {
    return `12, Martial arts 1d8`; ; 
  } else if (level === 13) {
    return `13, Martial arts 1d8`; ; 
  } else if (level === 14) {
    return `14, Martial arts 1d8`; ; 
  } else if (level === 15) {
    return `15, Martial arts 1d8`; ; 
  } else if (level === 16) {
    return `16, Martial arts 1d8`; ; 
  } else if (level === 17) {
    return `17, Martial arts 1d10`; ; 
  } else if (level === 18) {
    return `18, Martial arts 1d10`; ; 
  } else if (level === 19) {
    return `19, Martial arts 1d10`; ; 
  } else if (level === 20) {
    return `20, Martial arts 1d10`; ; 
  } 
  }else if(characterClass === 'rogue'){if (level === 10) {
    return `5d6`; 
  } else if (level === 11) {
    return `6d6`; 
  } else if (level === 12) {
    return `6d6`; 
  } else if (level === 13) {
    return `7d6`; 
  } else if (level === 14) {
    return `7d6`; 
  } else if (level === 15) {
    return `8d6`; 
  } else if (level === 16) {
    return `8d6`;  
  } else if (level === 17) {
    return `9d6`; 
  } else if (level === 18) {
    return `9d6`; 
  } else if (level === 19) {
    return `10d6`; 
  } else if (level === 20) {
    return `10d6`;  
  } 
  }


  return 'None'; 
}







function generateAttributes(characterClass, race, level) {
  let attributes = {
    AC: Math.floor(Math.random() * 5 + 13),
    strength: Math.floor(Math.random() * 8) + 10,
    dexterity: Math.floor(Math.random() * 8) + 10,
    intelligence: Math.floor(Math.random() * 8) + 10,
    constitution: Math.floor(Math.random() * 8) + 10,
    wisdom: Math.floor(Math.random() * 8) + 10,
    charisma: Math.floor(Math.random() * 8) + 10,
    weapon: '',
    spellsaveDC: '',
    spellhit: '',
    health: '',
  };

  if(race === 'dragonborn'){
    attributes.strength += 2;
    attributes.charisma += 1;
  };
  if(race === 'dwarf'){
    attributes.constitution += 2;
  };if(race === 'elf'){
    attributes.dexterity += 2;
  };if(race === 'gnome'){
    attributes.intelligence += 2;
  };if (race === 'half-elf') {
    attributes.charisma += 2;
    const attributesToIncrease = ['strength', 'dexterity', 'intelligence', 'constitution', 'wisdom', 'charisma']; 
    for (let i = attributesToIncrease.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [attributesToIncrease[i], attributesToIncrease[j]] = [attributesToIncrease[j], attributesToIncrease[i]];
    }
    attributes[attributesToIncrease[0]] += 1;
    attributes[attributesToIncrease[1]] += 1;
}
  if(race === 'halfling'){
    attributes.dexterity += 2;
  };if(race === 'half-orc'){
    attributes.strength += 2;
    attributes.constitution += 1;
  };if(race === 'human'){
    attributes.strength += 1;
    attributes.charisma += 1;
    attributes.dexterity += 1;
    attributes.intelligence += 1;
    attributes.constitution += 1;
    attributes.wisdom += 1;
  };if(race === 'tiefling'){
    attributes.intelligence += 1;
    attributes.charisma += 2;
  };




  const weapons = [`Greatsword +3`, 'Glaive', 'Halberd','Greatsword +1','Greatsword +2','Greataxe +1','Greataxe +2','Greataxe +3','Heavy Crossbow','Lance','Stormcaller Bow','Astral Lance','Echoing Hammer'];

  if (characterClass === 'fighter' || characterClass === 'ranger' || characterClass === 'barbarian' || characterClass === 'paladin' || characterClass === 'rogue') {
    attributes.strength = Math.floor(Math.random() * 10) + 10;
    attributes.weapon = weapons[Math.floor(Math.random() * weapons.length)];
  }  else {
    attributes.weapon = 'Dagger';
  }

//AC
if (characterClass === 'fighter' || characterClass === 'ranger' || characterClass === 'barbarian' || characterClass === 'paladin') {
  attributes.strength = Math.floor(Math.random() * 10) + 10;
  attributes.AC = Math.floor(Math.random() * 5 + 16)
}





//spell hit and DC code
  if (characterClass === 'warlock' || characterClass === 'wizard' || characterClass === 'sorcerer' ||characterClass === 'druid' || characterClass === 'cleric' || characterClass === 'bard') {
    attributes.charisma =  Math.floor(Math.random() * 10) + 10;
    attributes.spellhit = 7 + Math.floor((level - 10) * 0.5); 
    attributes.spellsaveDC = 13 + Math.floor((level - 10) * 0.25);
    
  }else if(characterClass === 'ranger' || characterClass === 'paladin'){
    attributes.spellhit = 3 + Math.floor((level - 10) * 0.5); 
    attributes.spellsaveDC = 7 + Math.floor((level - 10) * 0.25);
  } 
  
  else {
    attributes.spellhit = 0;
    attributes.spellsaveDC = 0;
  }



  const levelModifier = Math.floor((level - 10) * 0.5);  

  for (const attribute in attributes) {
    if (attributes.hasOwnProperty(attribute) && attribute !== 'weapon' && attribute !== 'spellhit') {
      attributes[attribute] += levelModifier;
      attributes[attribute] = Math.floor(attributes[attribute]);
    }
  }

  if(characterClass === 'wizard' || characterClass === 'sorcerer'){ 
    if (level >= 10) {
      attributes.health = 50 +(level - 10)*3;
   }
   }
   else if(characterClass === 'rogue' || characterClass === 'cleric' || characterClass === 'warlock' || characterClass === 'druid'){ 
    if (level >= 10) {
      attributes.health = 70 +(level - 10)*4;
   }
   }else if(characterClass === 'ranger' || characterClass === 'fighter' || characterClass === 'paladin'){ 
    if (level >= 10) {
      attributes.health = 89 +(level - 10)*5;
   }
   }else if(characterClass === 'monk'){ 
    if (level >= 10) {
      attributes.health = 70 +(level - 10)*4;
   }
   }else if(characterClass === 'bard'){ 
    if (level >= 10) {
      attributes.health = 58 +(level - 10)*4;
   }
   }else if(characterClass === 'barbarian'){ 
    if (level >= 10) {
      attributes.health = 120 +(level - 10)*6;
   }
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

function displayCharacter(race, characterClass, attributes, actions, spellSlots) {
  const characterDetails = document.getElementById('character-info');
  let details = '';

  let spellSlotsLabel = 'Spell Slots';

  if (characterClass.toLowerCase() === 'barbarian') {
    spellSlotsLabel = 'Rages';
    attributes.spellsaveDC = 0;
  }

  if (characterClass.toLowerCase() === 'monk') {
    spellSlotsLabel = 'Ki points';
    attributes.spellsaveDC = 0;
  }

  if (characterClass.toLowerCase() === 'rogue') {
    spellSlotsLabel = 'Sneak attack';
    attributes.spellsaveDC = 0;
  }

  if (characterClass.toLowerCase() === 'fighter') {
   attributes.spellsaveDC = 0;
  }

  details += `<h2 style="text-align: center;">Your Character</h2>`
  details += `<div class="columns">`;
  details += `<div class="column">`;
  details += `<ul>`;
  details += `<li>Race: ${race}</li>`;
  details += `<li>Class: ${characterClass}</li>`;
 
  details += `<li>Weapon: ${attributes.weapon}</li>`;
  details += `<li>Actions: ${actions.join(', ')}</li>`;
  details += `<li>Spell hit bonus: ${attributes.spellhit}</li>`;
  details += `<li>Spell save DC: ${attributes.spellsaveDC}</li>`;
  details += `<li>${spellSlotsLabel}: ${spellSlots}</li>`; 
  details += `</ul>`;
  details += `</div>`;
  
  details += `<div class="column">`;
  details += `<ul>`;
  details += `<li>Armor Class: ${attributes.AC}</li>`;
  details += `<li>Strength: ${attributes.strength}</li>`;
  details += `<li>Dexterity: ${attributes.dexterity}</li>`;
  details += `<li>Intelligence: ${attributes.intelligence}</li>`;
  details += `<li>Constitution: ${attributes.constitution}</li>`;
  details += `<li>Wisdom: ${attributes.wisdom}</li>`;
  details += `<li>Charisma: ${attributes.charisma}</li>`;
  details += `<li>Health: <input id="HEALTH" placeholder="${attributes.health}"></li>`
  
  details += `</ul>`;
  details += `</div>`;
  details += `</div>`;

  characterDetails.innerHTML = details;
}


//editable attributes
function allowEdit(race, characterClass, attributes, actions, spellSlots) {
  const characterDetails = document.getElementById('character-info');
  let details = '';

  let spellSlotsLabel = 'Spell Slots';

  if (characterClass.toLowerCase() === 'barbarian') {
    spellSlotsLabel = 'Rages';
    attributes.spellsaveDC = 0;
  }

  if (characterClass.toLowerCase() === 'monk') {
    spellSlotsLabel = 'Ki points';
    attributes.spellsaveDC = 0;
  }

  if (characterClass.toLowerCase() === 'rogue') {
    spellSlotsLabel = 'Sneak attack';
    attributes.spellsaveDC = 0;
  }

  if (characterClass.toLowerCase() === 'fighter') {
   attributes.spellsaveDC = 0;
  }

  details += `<div class="columns">`;
  details += `<div class="column">`;
  details += `<ul>`;
  details += `<li>Race: ${race}</li>`;
  details += `<li>Class: ${characterClass}</li>`;
 
  details += `<li>Weapon: <select id="selectAction">
  <option >Greatsword +1</option>
  <option >Greatsword +2</option>
  <option >Greatsword +3</option>
  <option >Glaive</option>
  <option >Halberd</option>
  <option >Greataxe +1</option>
  <option >Greataxe +2</option>
  <option >Greataxe +3</option>
  <option >Heavy Crossbow</option>
  <option >Lance</option>
  <option >Stormcaller Bow</option>
  <option >Astral Lance</option>
  <option >Echoing Hammer</option>
</select></li>`;
  details += `<li>Actions:<select id="selectAction">
  <option >Action Surge</option>
  <option >Second Wind</option>
  <option >Extra Attack</option>
  <option >Precision Attack</option>
  <option >Menacing Attack</option>
  <option >Indomitable</option>
  <option >Rally </option>
  <option >Fireball</option>
  <option >Blight</option>
  <option >Vampiric Touch</option>
  <option >Mage Armor</option>
  <option >Shield</option>
  <option >Magic Missile</option>
  <option >Counterspell</option>
  <option >camo</option>
  <option >elemental arrow</option>
  <option >change</option>
  <option >wings</option>
  <option>beast speech</option>
</select>
<select id="selectAction">
  <option >Action Surge</option>
  <option >Second Wind</option>
  <option >Extra Attack</option>
  <option >Precision Attack</option>
  <option >Menacing Attack</option>
  <option >Indomitable</option>
  <option >Rally </option>
  <option >Fireball</option>
  <option >Blight</option>
  <option >Vampiric Touch</option>
  <option >Mage Armor</option>
  <option >Shield</option>
  <option >Magic Missile</option>
  <option >Counterspell</option>
  <option >camo</option>
  <option >elemental arrow</option>
  <option >change</option>
  <option >wings</option>
  <option>beast speech</option>
</select><select id="selectAction">
<option >Action Surge</option>
<option >Second Wind</option>
<option >Extra Attack</option>
<option >Precision Attack</option>
<option >Menacing Attack</option>
<option >Indomitable</option>
<option >Rally </option>
<option >Fireball</option>
<option >Blight</option>
<option >Vampiric Touch</option>
<option >Mage Armor</option>
<option >Shield</option>
<option >Magic Missile</option>
<option >Counterspell</option>
<option >camo</option>
<option >elemental arrow</option>
<option >change</option>
<option >wings</option>
<option>beast speech</option>
</select>
</li>`;
  details += `<li>Spell hit bonus: <input id="HEALTH" placeholder="0"></li>`;
  details += `<li>Spell save DC: <input id="HEALTH" placeholder="0"></li>`;
  details += `<li>${spellSlotsLabel}: ${spellSlots}</li>`; 
  details += `</ul>`;
  details += `</div>`;
  
  details += `<div class="column">`;
  details += `<ul>`;
  details += `<li>Armor Class: <input id="HEALTH" placeholder="0"></li>`;
  details += `<li>Strength: <input id="HEALTH" placeholder="0"></li>`;
  details += `<li>Dexterity: <input id="HEALTH" placeholder="0"></li>`;
  details += `<li>Intelligence: <input id="HEALTH" placeholder="0"></li>`;
  details += `<li>Constitution: <input id="HEALTH" placeholder="0"></li>`;
  details += `<li>Wisdom: <input id="HEALTH" placeholder="0"></li>`;
  details += `<li>Charisma: <input id="HEALTH" placeholder="0"></li>`;
  details += `<li>Health: <input id="HEALTH" placeholder="0"></li>`
  
  details += `</ul>`;
  details += `</div>`;
  details += `</div>`;

  characterDetails.innerHTML = details;
}

let counter = 1;

function addAction(textToAdd) {
  const newDiv = document.createElement('div');
  newDiv.textContent = textToAdd;
  newDiv.id = `newAction_${counter++}`; 
  newDiv.classList.add('added-div'); 
  document.body.appendChild(newDiv);

  const addedActionsContainer = document.getElementById('addedActions');
  if (addedActionsContainer) {
    addedActionsContainer.appendChild(newDiv);
  } else {
    console.error('Container not found');
  }

}

function toggleMenu() {
  var menu = document.getElementById("menu");
  var containers = document.querySelectorAll('.container12');
  var bars = document.querySelectorAll('.container12 div');
  var menuBar = document.getElementById("menuBar");

  
  menu.style.display = (menu.style.display === "block") ? "none" : "block";

  
  bars.forEach(function(bar) {
    bar.classList.toggle('change');
  });

 
  if (menu.style.display === "block") {
    containers.forEach(function(container) {
      container.style.backgroundColor = 'white';
      container.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)'; 
    });
  } else {
    containers.forEach(function(container) {
      container.style.backgroundColor = '';
      container.style.boxShadow = 'none'; 
    });
  }
  

  
  menuBar.style.display = (menu.style.display === "block") ? "block" : "none";
}


function showContent(tabNumber) {
  var tabs = document.querySelectorAll('.tab');
  var contents = document.querySelectorAll('.content');

  tabs.forEach(function(tab, index) {
    tab.classList.remove('active');
    contents[index].style.display = 'none';
  });

  tabs[tabNumber - 1].classList.add('active');
  contents[tabNumber - 1].style.display = 'block';
}

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    var isActive = this.classList.contains("active");

 
    for (var j = 0; j < coll.length; j++) {
      coll[j].classList.remove("active");
      coll[j].nextElementSibling.style.display = "none";
    }

  
    if (!isActive) {
      this.classList.toggle("active");
      var content = this.nextElementSibling;
      content.style.display = "block";
    }
  });
}




