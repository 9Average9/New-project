const classAction = {
  fighter: ['Action Surge', 'Second Wind', 'Extra Attack', 'Precision Attack', 'Rally ', 'Menacing Attack ', 'Indomitable',/*added actions*/'Eldritch Knight Spellcasting', 'Defensive Duelist','Riposte','Disarming Attack',],
  wizard: ['Fireball', 'Mage Armor', 'Shield', 'Magic Missile', 'Counterspell', 'Blight', 'Vampiric Touch'/*added actions*/,'Cloudkill','Cone of Cold','Witch Bolt','Immolation','Fire Shield','Ice Storm'],
  druid: [/*added actions*/'Call Lightning', "Melf's Minute Meteors", 'Blade Barrier', 'Flame Strike', 'Insect Plague','Ice Storm','Moonbeam','Flaming Sphere','Vitriolic Sphere','Erupting Earth'],
  bard: [/*added actions*/'Thunderclap','Dissonant Whispers','Thunderwave','Shatter','Crown of Madness','Hypnotic Pattern','Thunder Step','Blight',"Evard's Black Tentacles",'Destructive Wave','Synaptic Static'],
  monk: [/*added actions*/'Unarmed Strike','Flurry of Blows','Patient Defense','Step of the Wind','Deflect Missiles','Stunning Strike','Shadow Step','Step of the Wind','Empty Body','Wholeness of Body','Quivering Palm'],
  cleric: ['Sacred Flame','Guiding Bolt','Healing Word','Cure Wounds','Spiritual Weapon','Mass Healing Word','Divine Strike','Preserve Life','Shield of Faith','Bless','Inflict Wounds'],
  barbarian: [/*added actions*/'Rage','Reckless Attack'],
  paladin: [/*added actions*/'Divine Smite','Lay on Hands','Bless','Wrathful Smite','Shield of Faith','Divine Favor','Thunderous Smite','Banishing Smite','Blade Warding','Retributive Strike','Vow of Enmity'],
  rogue: [/*added actions*/'See List'],
  ranger: [/*added actions*/'See List'],
  sorcerer: [/*added actions*/'Magic Missile','Chaos Bolt','Scorching Ray','Fireball','Blight','Lightning Bolt','Haste','Sleet Storm','Wall of Fire','Healing Word','Cure Wounds'],
  warlock: [/*added actions*/'Eldritch Blast','Hex','Hunger of Hadar','Blight','Shadow of Moil','Hurl Through Hell','Investiture of Flame','Healing Elixir','Life Transference',],
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

  if (characterClass === 'wizard' || characterClass === 'sorcerer' || characterClass === 'bard' || characterClass === 'cleric' || characterClass === 'druid') {
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
      return `<h1 id="rages"><span id="rageNumber">4</span>, Damage:+3</h1>`; 
    } else if (level === 11) {
      return `<h1 id="rages"><span id="rageNumber">4</span>, Damage:+3</h1>`; 
    } else if (level === 12) {
      return `<h1 id="rages"><span id="rageNumber">5</span>, Damage:+3</h1>`; 
    } else if (level === 13) {
      return `<h1 id="rages"><span id="rageNumber">5</span>, Damage:+3</h1>`; 
    } else if (level === 14) {
      return `<h1 id="rages"><span id="rageNumber">5</span>, Damage:+3</h1>`; 
    } else if (level === 15) {
      return `<h1 id="rages"><span id="rageNumber">5</span>, Damage:+3</h1>`; 
    } else if (level === 16) {
      return `<h1 id="rages"><span id="rageNumber">5</span>, Damage:+3</h1>`; 
    } else if (level === 17) {
      return `<h1 id="rages"><span id="rageNumber">6</span>, Damage:+3</h1>`; 
    } else if (level === 18) {
      return `<h1 id="rages"><span id="rageNumber">6</span>, Damage:+3</h1>`; 
    } else if (level === 19) {
      return`<h1 id="rages"><span id="rageNumber">6</span>, Damage:+3</h1>`; 
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
    return `<h1 id="rages"><span id="rageNumber">10</span></h1> Martial arts 1d6`; 
  } else if (level === 11) {
    return `<h1 id="rages"><span id="rageNumber">11</span></h1> Martial arts 1d8`; 
  } else if (level === 12) {
    return  `<h1 id="rages"><span id="rageNumber">12</span></h1> Martial arts 1d8`; 
  } else if (level === 13) {
    return  `<h1 id="rages"><span id="rageNumber">13</span></h1> Martial arts 1d8`;  
  } else if (level === 14) {
    return `<h1 id="rages"><span id="rageNumber">14</span></h1> Martial arts 1d8`; 
  } else if (level === 15) {
    return  `<h1 id="rages"><span id="rageNumber">15</span></h1> Martial arts 1d8`; 
  } else if (level === 16) {
    return  `<h1 id="rages"><span id="rageNumber">16</span></h1> Martial arts 1d8`; 
  } else if (level === 17) {
    return  `<h1 id="rages"><span id="rageNumber">17</span></h1> Martial arts 1d10`;  
  } else if (level === 18) {
    return `<h1 id="rages"><span id="rageNumber">18</span></h1> Martial arts 1d10`;  
  } else if (level === 19) {
    return `<h1 id="rages"><span id="rageNumber">19</span></h1> Martial arts 1d10`;  
  } else if (level === 20) {
    return`<h1 id="rages"><span id="rageNumber">20</span></h1> Martial arts 1d10`;  
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
  else if(characterClass === 'fighter'){if (level === 10) {
    return `<h1 id="rages"><span id="rageNumber">5</span> (d8)</h1>`; 
  } else if (level === 11) {
    return `<h1 id="rages"><span id="rageNumber">5</span> (d8)</h1>`; 
  } else if (level === 12) {
    return `<h1 id="rages"><span id="rageNumber">5</span> (d8)</h1>`; 
  } else if (level === 13) {
    return `<h1 id="rages"><span id="rageNumber">5</span> (d8)</h1>`; 
  } else if (level === 14) {
    return `<h1 id="rages"><span id="rageNumber">5</span> (d8)</h1>`; 
  } else if (level === 15) {
    return `<h1 id="rages"><span id="rageNumber">5</span> (d8)</h1>`; 
  } else if (level === 16) {
    return `<h1 id="rages"><span id="rageNumber">6</span> (d8)</h1>`; 
  } else if (level === 17) {
    return `<h1 id="rages"><span id="rageNumber">6</span> (d8)</h1>`; 
  } else if (level === 18) {
    return `<h1 id="rages"><span id="rageNumber">6</span> (d8)</h1>`; 
  } else if (level === 19) {
    return `<h1 id="rages"><span id="rageNumber">6</span> (d8)</h1>`; 
  } else if (level === 20) {
    return `<h1 id="rages"><span id="rageNumber">6</span> (d8)</h1>`; 
  } 
  }
else if(characterClass === 'warlock'){
if(level === 10){
  return  `
  <h1 id="rages">Spell Slots<br><span id="rageNumber">2</span>: level 5</h1>`
;
}
else if(level === 11){
  return  `
  <h1 id="rages">Spell Slots<br><span id="rageNumber">3</span>: level 5</h1>`
;
}else if(level === 12){
  return  `
  <h1 id="rages">Spell Slots<br><span id="rageNumber">3</span>: level 5</h1>`
;
}else if(level === 13){
  return  `
  <h1 id="rages">Spell Slots<br><span id="rageNumber">3</span>: level 5</h1>`
;
}else if(level === 14){
  return  `
  <h1 id="rages">Spell Slots<br><span id="rageNumber">3</span>: level 5</h1>`
;
}else if(level === 15){
  return `
  <h1 id="rages">Spell Slots<br><span id="rageNumber">3</span>: level 5</h1>`
;
}else if(level === 16){
  return `
  <h1 id="rages">Spell Slots<br><span id="rageNumber">3</span>: level 5</h1>`
;
}else if(level === 17){
  return `
  <h1 id="rages">Spell Slots<br><span id="rageNumber">4</span>: level 5</h1>`
;
}else if(level === 18){
  return `
  <h1 id="rages">Spell Slots<br><span id="rageNumber">4</span>: level 5</h1>`
;
}else if(level === 19){
  return `
  <h1 id="rages">Spell Slots<br><span id="rageNumber">4</span>: level 5</h1>`
;
}else if(level === 20){
  return `
  <h1 id="rages">Spell Slots<br><span id="rageNumber">4</span>: level 5</h1>`
;
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
    proficiencyBonus: '',
  };


  const preferredAttributes = {
    sorcerer: 'charisma',
    bard: 'charisma',
    warlock: 'charisma',
    rogue: 'dexterity',
    monk: 'dexterity',
    wizard: 'intelligence',
    druid: 'wisdom',
    cleric: 'wisdom',
    fighter: 'strength',
    ranger: 'strength',
    barbarian: 'strength',
    paladin: 'strength',
  };

  // Assign the highest modifier to the preferred attribute
  if (preferredAttributes[characterClass]) {
    const preferredAttr = preferredAttributes[characterClass];
    attributes[preferredAttr] = Math.floor(Math.random() * 3) + 16;
  }

  // Calculate modifiers
  const calculateModifier = (value) => Math.floor((value - 10) / 2);

  // Assign modifiers to attributes
  Object.keys(attributes).forEach((key) => {
    if (key !== 'AC' && key !== 'weapon' && key !== 'spellsaveDC' && key !== 'spellhit' && key !== 'health') {
      attributes[`${key}Mod`] = calculateModifier(attributes[key]);
      attributes[key] = attributes[`${key}Mod`];
    }
  });


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
  };if (race === 'half_elf') {
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
  };if(race === 'half_orc'){
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
    attributes.weapon = weapons[Math.floor(Math.random() * weapons.length)];
  }  else {
    attributes.weapon = 'Dagger';
  }

//AC
if (characterClass === 'fighter' || characterClass === 'ranger' || characterClass === 'barbarian' || characterClass === 'paladin') {
  
  attributes.AC = Math.floor(Math.random() * 5 + 18)
}

if(level >= 10 && level <=12  ){
  proficiencyBonus = 4;
 }else if(level >= 13 && level <=16 ){
  proficiencyBonus = 5;
 }else if(level >= 17 && level <=20 ){
  proficiencyBonus = 6;
 }


 


  
  


  const levelModifier = Math.floor((level - 10) * 0.2);  

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

   



//spell hit and DC code
switch (characterClass) {
  case 'warlock':
  case 'sorcerer':
  case 'bard':
  case 'paladin':
    attributes.spellhit = proficiencyBonus + attributes.charisma;
    attributes.spellsaveDC = proficiencyBonus + 8 + attributes.charisma;
    break;
  case 'ranger':
  case 'cleric':
  case 'druid':
    attributes.spellhit = proficiencyBonus + attributes.wisdom;
    attributes.spellsaveDC = proficiencyBonus + 8 + attributes.wisdom;
    break;
  case 'wizard':
    attributes.spellhit = proficiencyBonus + attributes.intelligence;
    attributes.spellsaveDC = proficiencyBonus + 8 + attributes.intelligence;
    break;
  // Add more cases as needed
  default:
    attributes.spellhit = 0;
    attributes.spellsaveDC = 0;
    break;
}


  return attributes;
}

function generateActions(characterClass) {
  const actionsPool = classAction[characterClass];
  let numActionsToSelect = 4; // Default number of actions to select

  // Special handling for Ranger, Rogue, and Barbarian classes
  if (['ranger', 'rogue', 'barbarian'].includes(characterClass.toLowerCase())) {
    numActionsToSelect = Math.min(actionsPool.length, numActionsToSelect);
    // Limit the number of actions to the available actions for these classes
  }

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

  const usesSpellSlots = ['wizard', 'sorcerer', 'bard', 'cleric', 'druid','paladin','ranger'].includes(characterClass.toLowerCase());

  if (usesSpellSlots) {
    // Show the "Use Spell Slot" button
    document.getElementById('useSpellSlotBtn').style.display = 'block';
  } else {
    // Hide the "Use Spell Slot" button
    document.getElementById('useSpellSlotBtn').style.display = 'none';
  }
  
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
    spellSlotsLabel = 'Superiority Dice';
   attributes.spellsaveDC = 0;
  }
  if (characterClass.toLowerCase() === 'warlock') {
    spellSlotsLabel = ``;

  }
  

  const imageSources = {
    human: {
      warlock: 'img/human_warlock.jpg',
      wizard: 'img/human_wizard.jpg',
      barbarian: 'img/human_barbarian.jpg',
      bard: 'img/human_bard.jpg',
      cleric: 'img/human_cleric.jpg',
      rogue: 'img/human_rogue.jpg',
      paladin: 'img/human_paladin.jpg',
      monk: 'img/human_monk.jpg',
      druid: 'img/human_druid.jpg',
      sorcerer: 'img/human_sorcerer.jpg',
      ranger: 'img/human_ranger.jpg',
      fighter: 'img/human_fighter.png',
    },
    elf: {
      warlock: 'img/elf_warlock.jpg',
      wizard: 'img/elf_wizard.jpg',
      barbarian: 'img/elf_barbarian.jpg',
      bard: 'img/elf_bard.jpg',
      cleric: 'img/elf_cleric.jpg',
      rogue: 'img/elf_rogue.jpg',
      paladin: 'img/elf_paladin.jpg',
      monk: 'img/elf_monk.jpg',
      druid: 'img/elf_druid.jpg',
      sorcerer: 'img/elf_sorcerer.jpg',
      ranger: 'img/elf_ranger.jpg',
      fighter: 'img/elf_fighter.jpg',
    },
    dragonborn:{
      warlock: 'img/dragonborn_warlock.jpg',
      wizard: 'img/dragonborn_wizard.jpg',
      barbarian: 'img/dragonborn_barbarian.jpg',
      bard: 'img/dragonborn_bard.jpg',
      cleric: 'img/dragonborn_cleric.webp',
      rogue: 'img/dragonborn_rogue.jpg',
      paladin: 'img/dragonborn_paladin.jpg',
      monk: 'img/dragonborn_monk.jpg',
      druid: 'img/dragonborn_druid.jpg',
      sorcerer: 'img/dragonborn_sorcerer.jpg',
      ranger: 'img/dragonborn_ranger.jpg',
      fighter: 'img/dragonborn_fighter.jpg',
    },
    dwarf:{
      warlock: 'img/dwarf_warlock.jpg',
      wizard: 'img/dwarf_wizard.jpg',
      barbarian: 'img/dwarf_barbarian.jpg',
      bard: 'img/dwarf_bard.jpg',
      cleric: 'img/dwarf_cleric.jpg',
      rogue: 'img/dwarf_rogue.jpg',
      paladin: 'img/dwarf_paladin.jpg',
      monk: 'img/dwarf_monk.jpg',
      druid: 'img/dwarf_druid.jpg',
      sorcerer: 'img/dwarf_sorcerer.jpg',
      ranger: 'img/dwarf_ranger.jpg',
      fighter: 'img/dwarf_fighter.jpg',
    },
    tiefling:{
      warlock: 'img/tiefling_warlock.jpg',
      wizard: 'img/tiefling_wizard.jpg',
      barbarian: 'img/tiefling_barbarian.jpg',
      bard: 'img/tiefling_bard.jpg',
      cleric: 'img/tiefling_cleric.jpg',
      rogue: 'img/tiefling_rogue.jpg',
      paladin: 'img/tiefling_paladin.jpg',
      monk: 'img/tiefling_monk.jpg',
      druid: 'img/tiefling_druid.jpg',
      sorcerer: 'img/tiefling_sorcerer.jpg',
      ranger: 'img/tiefling_ranger.jpg',
      fighter: 'img/tiefling_fighter.jpg',
    },
   half_elf:{
    warlock: 'img/half_elf_warlock.jpg',
    wizard: 'img/half_elf_wizard.jpg',
    barbarian: 'img/half_elf_barbarian.jpg',
    bard: 'img/half_elf_bard.jpg',
    cleric: 'img/half_elf_cleric.jpg',
    rogue: 'img/half_elf_rogue.jpg',
    paladin: 'img/half_elf_paladin.jpg',
    monk: 'img/half_elf_monk.jpg',
    druid: 'img/half_elf_druid.jpg',
    sorcerer: 'img/half_elf_sorcerer.jpg',
    ranger: 'img/half_elf_ranger.jpg',
    fighter: 'img/half_elf_fighter.jpg',
   },
   gnome:{
    warlock: 'img/gnome_warlock.jpg',
    wizard: 'img/gnome_wizard.jpg',
    barbarian: 'img/gnome_barbarian.jpg',
    bard: 'img/gnome_bard.jpg',
    cleric: 'img/gnome_cleric.jpg',
    rogue: 'img/gnome_rogue.jpg',
    paladin: 'img/gnome_paladin.jpg',
    monk: 'img/gnome_monk.jpg',
    druid: 'img/gnome_druid.jpg',
    sorcerer: 'img/gnome_sorcerer.jpg',
    ranger: 'img/gnome_ranger.jpg',
    fighter: 'img/gnome_fighter.jpg',
   },
   halfling:{
    warlock: 'img/halfling_warlock.jpg',
    wizard: 'img/halfling_wizard.jpg',
    barbarian: 'img/halfling_barbarian.jpg',
    bard: 'img/halfling_bard.jpg',
    cleric: 'img/halfling_cleric.jpg',
    rogue: 'img/halfling_rogue.jpg',
    paladin: 'img/halfling_paladin.jpg',
    monk: 'img/halfling_monk.jpg',
    druid: 'img/halfling_druid.jpg',
    sorcerer: 'img/halfling_sorcerer.jpg',
    ranger: 'img/halfling_ranger.jpg',
    fighter: 'img/halfling_fighter.jpg',
   },
   half_orc:{
    warlock: 'img/half_orc_warlock.jpg',
    wizard: 'img/half_orc_wizard.jpg',
    barbarian: 'img/half_orc_barbarian.jpg',
    bard: 'img/half_orc_bard.jpg',
    cleric: 'img/half_orc_cleric.jpg',
    rogue: 'img/half_orc_rogue.jpg',
    paladin: 'img/half_orc_paladin.jpg',
    monk: 'img/half_orc_monk.jpg',
    druid: 'img/half_orc_druid.jpg',
    sorcerer: 'img/half_orc_sorcerer.jpg',
    ranger: 'img/half_orc_ranger.jpg',
    fighter: 'img/half_orc_fighter.jpg',
   },
  };


  if (imageSources[race] && imageSources[race][characterClass]) {
    const imageElement = document.getElementById('characterImage');
    if (imageElement) {
      const imagePath = imageSources[race][characterClass];
      imageElement.src = imagePath;
      imageElement.classList.add('larger-image');
    }
  }


 
  



if(characterClass === 'barbarian' || characterClass === 'fighter'|| characterClass === 'monk'){

  let rageButtons = document.getElementById("rage-container");
   rageButtons.style.display = `block`;

  details += `<h2 style="text-align: center;">Your Character</h2>`
  details += `<div class="columns">`;
  details += `<div class="column">`;
  details += `<ul>`;
  
  
  details += `<li>Strength: +${attributes.strength}</li>`;
  details += `<li>Dexterity: +${attributes.dexterity}</li>`;
  details += `<li>Intelligence: +${attributes.intelligence}</li>`;
  details += `<li>Constitution: +${attributes.constitution}</li>`;
  details += `<li>Wisdom: +${attributes.wisdom}</li>`;
  details += `<li>Charisma: +${attributes.charisma}</li>`;
  details += `<li>Max Health: ${attributes.health}</li>`;
  details += `<li>Temporary Health: <span id="editHealth">${attributes.health}</span></li>`;

  details += `</ul>`;
  details += `</div>`;
  //next column
  details += `<div class="column">`;
  details += `<ul>`;
  details += `<li>Proficiency Bonus:+${proficiencyBonus}`
  details += `<li>Armor Class: ${attributes.AC}</li>`;
  details += `<li>Weapon: ${attributes.weapon}</li>`;
  details += `<li>Actions: `;
  details += `<select id="actionsSelect">`;
  actions.forEach((action) => {
    details += `<option value="${action}">${action}</option>`;
  });
  details += `</select></li>`;
  details += `<li>${spellSlotsLabel} ${spellSlots}</li>`;
  details += `</ul>`;
  details += `</div>`;
  details += `</div>`;
}

else if(characterClass === 'rogue'){
  let rageButtons = document.getElementById("rage-container");
  rageButtons.style.display = `none`;
  details += `<h2 style="text-align: center;">Your Character</h2>`
  details += `<div class="columns">`;
  details += `<div class="column">`;
  details += `<ul>`;
  
  
  details += `<li>Strength: +${attributes.strength}</li>`;
  details += `<li>Dexterity: +${attributes.dexterity}</li>`;
  details += `<li>Intelligence: +${attributes.intelligence}</li>`;
  details += `<li>Constitution: +${attributes.constitution}</li>`;
  details += `<li>Wisdom: +${attributes.wisdom}</li>`;
  details += `<li>Charisma: +${attributes.charisma}</li>`;
  details += `<li>Max Health: ${attributes.health}</li>`;
  details += `<li>Temporary Health: <span id="editHealth">${attributes.health}</span></li>`;

  details += `</ul>`;
  details += `</div>`;
  //next column
  details += `<div class="column">`;
  details += `<ul>`;
  details += `<li>Proficiency Bonus:+${proficiencyBonus}`
  details += `<li>Armor Class: ${attributes.AC}</li>`;
  details += `<li>Weapon: ${attributes.weapon}</li>`;
  details += `<li>Actions: `;
  details += `<select id="actionsSelect">`;
  actions.forEach((action) => {
    details += `<option value="${action}">${action}</option>`;
  });
  details += `</select></li>`;
  details += `<li>${spellSlotsLabel} ${spellSlots}</li>`;
  details += `</ul>`;
  details += `</div>`;
  details += `</div>`;
}
 else if( characterClass === 'warlock'){
  let rageButtons = document.getElementById("rage-container");
  rageButtons.style.display = `block`;
  details += `<h2 style="text-align: center;">Your Character</h2>`
  details += `<div class="columns">`;
  details += `<div class="column">`;
  details += `<ul>`;
  
  
  details += `<li>Strength: +${attributes.strength}</li>`;
  details += `<li>Dexterity: +${attributes.dexterity}</li>`;
  details += `<li>Intelligence: +${attributes.intelligence}</li>`;
  details += `<li>Constitution: +${attributes.constitution}</li>`;
  details += `<li>Wisdom: +${attributes.wisdom}</li>`;
  details += `<li>Charisma: +${attributes.charisma}</li>`;
  details += `<li>Max Health: ${attributes.health}</li>`;
  details += `<li>Temporary Health: <span id="editHealth">${attributes.health}</span></li>`;

  details += `</ul>`;
  details += `</div>`;
  //next column
  details += `<div class="column">`;
  details += `<ul>`;
  details += `<li>Proficiency Bonus:+${proficiencyBonus}`
  details += `<li>Armor Class: ${attributes.AC}</li>`;
  details += `<li>Weapon: ${attributes.weapon}</li>`;
  details += `<li>Actions: `;
  details += `<select id="actionsSelect">`;
  actions.forEach((action) => {
    details += `<option value="${action}">${action}</option>`;
  });
  details += `</select></li>`;
  details += `<li>Spell hit bonus: ${attributes.spellhit}</li>`;
  details += `<li>Spell save DC: ${attributes.spellsaveDC}</li>`;
  details += `<li>${spellSlotsLabel} ${spellSlots}</li>`;
  
  details += `</ul>`;
  details += `</div>`;
  details += `</div>`;
}

else{

  let rageButtons = document.getElementById("rage-container");
  rageButtons.style.display = `none`;
  details += `<h2 style="text-align: center;">Your Character</h2>`
  details += `<div class="columns">`;
  details += `<div class="column">`;
  details += `<ul>`;
  
  
  details += `<li>Strength: +${attributes.strength}</li>`;
  details += `<li>Dexterity: +${attributes.dexterity}</li>`;
  details += `<li>Intelligence: +${attributes.intelligence}</li>`;
  details += `<li>Constitution: +${attributes.constitution}</li>`;
  details += `<li>Wisdom: +${attributes.wisdom}</li>`;
  details += `<li>Charisma: +${attributes.charisma}</li>`;
  details += `<li>Max Health: ${attributes.health}</li>`;
  details += `<li>Temporary Health: <span id="editHealth">${attributes.health}</span></li>`;

  details += `</ul>`;
  details += `</div>`;
  //next column
  details += `<div class="column">`;
  details += `<ul>`;
  details += `<li>Proficiency Bonus:+${proficiencyBonus}`
  details += `<li>Armor Class: ${attributes.AC}</li>`;
  details += `<li>Weapon: ${attributes.weapon}</li>`;
  details += `<li>Actions: `;
  details += `<select id="actionsSelect">`;
  actions.forEach((action) => {
    details += `<option value="${action}">${action}</option>`;
  });
  details += `</select></li>`;
  details += `<li>Spell hit bonus: ${attributes.spellhit}</li>`;
  details += `<li>Spell save DC: ${attributes.spellsaveDC}</li>`;
  details += `<li>${spellSlotsLabel} ${spellSlots}</li>`;
  
  details += `</ul>`;
  details += `</div>`;
  details += `</div>`;
}
  characterDetails.innerHTML = details;

  let addHealthButton = document.getElementById('addHealth');
  let minusHealthButton = document.getElementById('minusHealth');

  // Change display style to block
  addHealthButton.style.display = 'block';
  minusHealthButton.style.display = 'block';
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

  const imageSources = {
    human: {
      warlock: 'img/human_warlock.jpg',
      wizard: 'img/human_wizard.jpg',
      barbarian: 'img/human_barbarian.jpg',
      bard: 'img/human_bard.jpg',
      cleric: 'img/human_cleric.jpg',
      rogue: 'img/human_rogue.jpg',
      paladin: 'img/human_paladin.jpg',
      monk: 'img/human_monk.jpg',
      druid: 'img/human_druid.jpg',
      sorcerer: 'img/human_sorcerer.jpg',
      ranger: 'img/human_ranger.jpg',
      fighter: 'img/human_fighter.png',
    },
    elf: {
      warlock: 'img/elf_warlock.jpg',
      wizard: 'img/elf_wizard.jpg',
      barbarian: 'img/elf_barbarian.jpg',
      bard: 'img/elf_bard.jpg',
      cleric: 'img/elf_cleric.jpg',
      rogue: 'img/elf_rogue.jpg',
      paladin: 'img/elf_paladin.jpg',
      monk: 'img/elf_monk.jpg',
      druid: 'img/elf_druid.jpg',
      sorcerer: 'img/elf_sorcerer.jpg',
      ranger: 'img/elf_ranger.jpg',
      fighter: 'img/elf_fighter.jpg',
    },
    dragonborn:{
      warlock: 'img/dragonborn_warlock.jpg',
      wizard: 'img/dragonborn_wizard.jpg',
      barbarian: 'img/dragonborn_barbarian.jpg',
      bard: 'img/dragonborn_bard.jpg',
      cleric: 'img/dragonborn_cleric.webp',
      rogue: 'img/dragonborn_rogue.jpg',
      paladin: 'img/dragonborn_paladin.jpg',
      monk: 'img/dragonborn_monk.jpg',
      druid: 'img/dragonborn_druid.jpg',
      sorcerer: 'img/dragonborn_sorcerer.jpg',
      ranger: 'img/dragonborn_ranger.jpg',
      fighter: 'img/dragonborn_fighter.jpg',
    },
    dwarf:{
      warlock: 'img/dwarf_warlock.jpg',
      wizard: 'img/dwarf_wizard.jpg',
      barbarian: 'img/dwarf_barbarian.jpg',
      bard: 'img/dwarf_bard.jpg',
      cleric: 'img/dwarf_cleric.jpg',
      rogue: 'img/dwarf_rogue.jpg',
      paladin: 'img/dwarf_paladin.jpg',
      monk: 'img/dwarf_monk.jpg',
      druid: 'img/dwarf_druid.jpg',
      sorcerer: 'img/dwarf_sorcerer.jpg',
      ranger: 'img/dwarf_ranger.jpg',
      fighter: 'img/dwarf_fighter.jpg',
    },
    tiefling:{
      warlock: 'img/tiefling_warlock.jpg',
      wizard: 'img/tiefling_wizard.jpg',
      barbarian: 'img/tiefling_barbarian.jpg',
      bard: 'img/tiefling_bard.jpg',
      cleric: 'img/tiefling_cleric.jpg',
      rogue: 'img/tiefling_rogue.jpg',
      paladin: 'img/tiefling_paladin.jpg',
      monk: 'img/tiefling_monk.jpg',
      druid: 'img/tiefling_druid.jpg',
      sorcerer: 'img/tiefling_sorcerer.jpg',
      ranger: 'img/tiefling_ranger.jpg',
      fighter: 'img/tiefling_fighter.jpg',
    },
   half_elf:{
    warlock: 'img/half_elf_warlock.jpg',
    wizard: 'img/half_elf_wizard.jpg',
    barbarian: 'img/half_elf_barbarian.jpg',
    bard: 'img/half_elf_bard.jpg',
    cleric: 'img/half_elf_cleric.jpg',
    rogue: 'img/half_elf_rogue.jpg',
    paladin: 'img/half_elf_paladin.jpg',
    monk: 'img/half_elf_monk.jpg',
    druid: 'img/half_elf_druid.jpg',
    sorcerer: 'img/half_elf_sorcerer.jpg',
    ranger: 'img/half_elf_ranger.jpg',
    fighter: 'img/half_elf_fighter.jpg',
   },
   gnome:{
    warlock: 'img/gnome_warlock.jpg',
    wizard: 'img/gnome_wizard.jpg',
    barbarian: 'img/gnome_barbarian.jpg',
    bard: 'img/gnome_bard.jpg',
    cleric: 'img/gnome_cleric.jpg',
    rogue: 'img/gnome_rogue.jpg',
    paladin: 'img/gnome_paladin.jpg',
    monk: 'img/gnome_monk.jpg',
    druid: 'img/gnome_druid.jpg',
    sorcerer: 'img/gnome_sorcerer.jpg',
    ranger: 'img/gnome_ranger.jpg',
    fighter: 'img/gnome_fighter.jpg',
   },
   halfling:{
    warlock: 'img/halfling_warlock.jpg',
    wizard: 'img/halfling_wizard.jpg',
    barbarian: 'img/halfling_barbarian.jpg',
    bard: 'img/halfling_bard.jpg',
    cleric: 'img/halfling_cleric.jpg',
    rogue: 'img/halfling_rogue.jpg',
    paladin: 'img/halfling_paladin.jpg',
    monk: 'img/halfling_monk.jpg',
    druid: 'img/halfling_druid.jpg',
    sorcerer: 'img/halfling_sorcerer.jpg',
    ranger: 'img/halfling_ranger.jpg',
    fighter: 'img/halfling_fighter.jpg',
   },
   half_orc:{
    warlock: 'img/half_orc_warlock.jpg',
    wizard: 'img/half_orc_wizard.jpg',
    barbarian: 'img/half_orc_barbarian.jpg',
    bard: 'img/half_orc_bard.jpg',
    cleric: 'img/half_orc_cleric.jpg',
    rogue: 'img/half_orc_rogue.jpg',
    paladin: 'img/half_orc_paladin.jpg',
    monk: 'img/half_orc_monk.jpg',
    druid: 'img/half_orc_druid.jpg',
    sorcerer: 'img/half_orc_sorcerer.jpg',
    ranger: 'img/half_orc_ranger.jpg',
    fighter: 'img/half_orc_fighter.jpg',
   },
  };





  if (imageSources[race] && imageSources[race][characterClass]) {
    const imageElement = document.getElementById('characterImage');
    if (imageElement) {
      const imagePath = imageSources[race][characterClass];
      imageElement.src = imagePath;
      imageElement.classList.add('larger-image');
    }
  }




  details += `<div class="columns">`;
  details += `<div class="column">`;
  details += `<ul>`;
 
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
</select>`;
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



function addActionToSelect(action) {
  const actionsSelect = document.getElementById('actionsSelect');
  if (actionsSelect) {
    const optionElement = document.createElement('option');
    optionElement.value = action;
    optionElement.textContent = action;
    actionsSelect.appendChild(optionElement);
  } else {
    console.error('Actions Select not found');
  }
}



function addAction(actionToAdd) {
  handleAddAction(actionToAdd);
}

// Function to handle user input and add actions
function handleAddAction(actionToAdd) {
  const actionsSelect = document.getElementById('actionsSelect');
  if (actionsSelect) {
    const optionElement = document.createElement('option');
    optionElement.value = actionToAdd;
    optionElement.textContent = actionToAdd;
    actionsSelect.appendChild(optionElement);
  } else {
    console.error('Actions Select not found');
  }
}



function toggleMenu() {
  var menu = document.getElementById("menu");
  var ndMenuIMG = document.getElementById("ndmenuIMG");
  var menuIMG = document.getElementById("menuIMG");

  menu.style.display = (menu.style.display === "block") ? "none" : "block";

  if (menu.style.display === "block") {
    // Apply specific styles only to menuIMG
    menuIMG.style.position = 'absolute';
    menuIMG.style.bottom = '3%';
    menuIMG.style.left = '50px';
    menuIMG.style.padding = '0px';
    menuIMG.style.borderRadius = '50%';
    menuIMG.style.transform = 'translateX(-50%)';
    menuIMG.style.width = '75px';

    // Show ndmenuIMG and set its position similar to menuIMG without rotation
    ndMenuIMG.style.position = 'absolute';
    ndMenuIMG.style.bottom = '3%';
    ndMenuIMG.style.left = '50px';
    ndMenuIMG.style.padding = '0px';
    ndMenuIMG.style.borderRadius = '50%';
    ndMenuIMG.style.transform = 'translateX(-50%)';
    ndMenuIMG.style.width = '15%';
    ndMenuIMG.style.width = '75px'; 

    ndMenuIMG.classList.remove('hidden'); // Show ndmenuIMG when menu is displayed
  } else {
    // Reset styles for both images when menu is hidden
    menuIMG.style = '';
    ndMenuIMG.style = '';
    ndMenuIMG.classList.add('hidden'); // Hide ndmenuIMG when menu is hidden
  }
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


let characterImage = document.getElementById('characterImage');
let largerImageContainer = document.querySelector('.larger-image-container');
let isEnlarged = false;

// Function to set up image after it's loaded
function setupImage() {
  characterImage = document.getElementById('characterImage');
  largerImageContainer = document.querySelector('.larger-image-container');
  if (characterImage) {
    characterImage.addEventListener('load', function() {
      // Perform operations when the image is loaded
      characterImage.style.transition = 'transform 0.3s ease';
    });
  }

  document.body.addEventListener('click', function(event) {
    // Check if the image is enlarged and if the click is outside the larger image container
    if (isEnlarged && event.target !== largerImageContainer && !largerImageContainer.contains(event.target)) {
      toggleImageSize(); // Shrink the image back to its original size
    }
  });
}



// Function to toggle image size and container scaling
function toggleImageSize() {
  if (characterImage && largerImageContainer) {
    if (!isEnlarged) {
      document.body.style.overflow = 'hidden'; // Hide vertical scrollbar when image is enlarged
      document.body.style.height = '100vh'; // Set body to full viewport height

      if (characterImage.naturalWidth < characterImage.naturalHeight) {
        characterImage.style.transform = 'scale(2.8)'; // If vertical, scale by 3
      } else {
        characterImage.style.transform = 'scale(2)'; // If horizontal, scale by 2.3
        
      }
      
      characterImage.style.opacity = '1';
      characterImage.style.position = 'fixed';
      characterImage.style.top = '5%';
      characterImage.style.left = '50%';
      characterImage.style.transformOrigin = 'top center';
      characterImage.style.transition = 'transform 0.3s ease';
      characterImage.style.marginLeft = `-${characterImage.width / 2}px`; // Center horizontally
      
      isEnlarged = true;
    } else {
      document.body.style.overflow = 'auto'; // Restore vertical scrollbar
      characterImage.style.transform = 'scale(1)';
      characterImage.style.position = 'static';
      characterImage.style.bottom = 'auto';
      characterImage.style.left = 'auto';
      characterImage.style.marginLeft = '0'; // Reset margin
      characterImage.style.opacity = '0';
      isEnlarged = false;
    }
  }
}

// Call setupImage when the document is ready
document.addEventListener('DOMContentLoaded', setupImage);



function minusRage(){
  let rages = document.getElementById("rageNumber");
  
  if(rages.textContent >=1){
  rages.textContent -= 1;
  return rages.textContent;}else{
    rages.textContent = 0;
  }
}

function plusRage(){
  let rages = document.getElementById("rageNumber");
  
  rages.textContent = parseInt(rages.textContent)+ 1;
  return rages.textContent;
   
}

function openSpellSlotModal() {
  document.getElementById('spellSlotModal').style.display = 'block';
}

function closeSpellSlotModal() {
  document.getElementById('spellSlotModal').style.display = 'none';
}

function useSpellSlot(level) {
  let spellSlotElement = document.querySelector(`#spellSLOTS option:nth-child(${level})`);

  if (spellSlotElement) {
    let count = parseInt(spellSlotElement.textContent.split(':')[0]);

    if (count > 0) {
      spellSlotElement.textContent = `${count - 1}: level ${level}`;
    } else {
      alert(`No more available spell slots for level ${level}!`);
    }
  } else {
    alert(`No spell slot option found for level ${level}!`);
  }
}

function updateTemporaryHealth(action) {
  let tempHealthSpan = document.getElementById('editHealth');

  if (action === 'subtract') {
    let healthLost = prompt('Enter the amount of health lost:', '');

    if (healthLost !== null && !isNaN(healthLost) && healthLost !== '') {
      healthLost = parseInt(healthLost);

      let currentHealth = parseInt(tempHealthSpan.textContent);
      let remainingHealth = currentHealth - healthLost;

      tempHealthSpan.textContent = remainingHealth;
    }
  } else if (action === 'add') {
    let healthToAdd = prompt('Enter the amount of health to add:', '');

    if (healthToAdd !== null && !isNaN(healthToAdd) && healthToAdd !== '') {
      healthToAdd = parseInt(healthToAdd);

      let currentHealth = parseInt(tempHealthSpan.textContent);
      let updatedHealth = currentHealth + healthToAdd;

      tempHealthSpan.textContent = updatedHealth;
    }
  }
}
