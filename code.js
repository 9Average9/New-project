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
var SP;
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
 if(characterClass === 'sorcerer'){
   SP = level 
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
  details += `<li><div class="health-buttons-container"><button id="minusHealth" class="health-button" onclick="updateTemporaryHealth('subtract')"><i class="fas fa-heart-broken"></i></button>
  <button id="addHealth" class="health-button" onclick="updateTemporaryHealth('add')"><i class="fas fa-heart"></i></button></div></li>`;
  details += `</ul>`;
  details += `</div>`;
  //next column
  details += `<div class="column">`;
  details += `<ul>`;
  details += `<li>Proficiency Bonus:+${proficiencyBonus}`
  details += `<li>Armor Class: ${attributes.AC}</li>`;
  details += `<li>Weapon: ${attributes.weapon}</li>`;
  details += `<li>Actions: <button id="actionInfo" onclick="actionDescription()"><i class="fas fa-info-circle"></i>
  </button>`;
  details += `<select id="actionsSelect">`;
  actions.forEach((action) => {
    details += `<option value="${action}">${action}</option>`;
  });
  details += `</select></li>`;
  details += `<li>${spellSlotsLabel} ${spellSlots}</li>`;
  details += `<li><div id="rage-container">
  <button onclick="minusRage()" id="rageToggle" ><i class="fas fa-minus"></i></button>
  <button onclick="plusRage()" id="rageToggle"><i class="fas fa-plus"></i></button></div></li>`;
  details += `</ul>`;
  details += `</div>`;
  details += `</div>`;
}

else if(characterClass === 'rogue'){
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
  details += `<li><div class="health-buttons-container"><button id="minusHealth" class="health-button" onclick="updateTemporaryHealth('subtract')"><i class="fas fa-heart-broken"></i></button>
  <button id="addHealth" class="health-button" onclick="updateTemporaryHealth('add')"><i class="fas fa-heart"></i></button></div></li>`;
  details += `</ul>`;
  details += `</div>`;
  //next column
  details += `<div class="column">`;
  details += `<ul>`;
  details += `<li>Proficiency Bonus:+${proficiencyBonus}`
  details += `<li>Armor Class: ${attributes.AC}</li>`;
  details += `<li>Weapon: ${attributes.weapon}</li>`;
  details += `<li>Actions: <button id="actionInfo" onclick="actionDescription()"><i class="fas fa-info-circle"></i>
  </button>`;
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
  details += `<li><div class="health-buttons-container"><button id="minusHealth" class="health-button" onclick="updateTemporaryHealth('subtract')"><i class="fas fa-heart-broken"></i></button>
  <button id="addHealth" class="health-button" onclick="updateTemporaryHealth('add')"><i class="fas fa-heart"></i></button></div></li>`;
  details += `</ul>`;
  details += `</div>`;
  //next column
  details += `<div class="column">`;
  details += `<ul>`;
  details += `<li>Proficiency Bonus:+${proficiencyBonus}`
  details += `<li>Armor Class: ${attributes.AC}</li>`;
  details += `<li>Weapon: ${attributes.weapon}</li>`;
  details += `<li>Actions: <button id="actionInfo" onclick="actionDescription()"><i class="fas fa-info-circle"></i>
  </button>`;
  details += `<select id="actionsSelect">`;
  actions.forEach((action) => {
    details += `<option value="${action}">${action}</option>`;
  });
  details += `</select></li>`;
  details += `<li>Spell hit bonus: ${attributes.spellhit}</li>`;
  details += `<li>Spell save DC: ${attributes.spellsaveDC}</li>`;
  details += `<li>${spellSlotsLabel} ${spellSlots}</li>`;
  details += `<li><div id="rage-container">
  <button onclick="minusRage()" id="rageToggle" ><i class="fas fa-minus"></i></button>
  <button onclick="plusRage()" id="rageToggle"><i class="fas fa-plus"></i></button></div></li>`;
  details += `</ul>`;
  details += `</div>`;
  details += `</div>`;
}

else if(characterClass === 'sorcerer'){
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
  details += `<li><div class="health-buttons-container"><button id="minusHealth" class="health-button" onclick="updateTemporaryHealth('subtract')"><i class="fas fa-heart-broken"></i></button>
  <button id="addHealth" class="health-button" onclick="updateTemporaryHealth('add')"><i class="fas fa-heart"></i></button></div></li>`;
  details += `</ul>`;
  details += `</div>`;
  //next column
  details += `<div class="column">`;
  details += `<ul>`;
  details += `<li>Proficiency Bonus:+${proficiencyBonus}`
  details += `<li>Armor Class: ${attributes.AC}</li>`;
  details += `<li>Weapon: ${attributes.weapon}</li>`;
  details += `<li>Actions: <button id="actionInfo" onclick="actionDescription()"><i class="fas fa-info-circle"></i>
  </button>`;
  details += `<select id="actionsSelect">`;
  actions.forEach((action) => {
    details += `<option value="${action}">${action}</option>`;
  });
  details += `</select></li>`;
  details += `<li>Spell hit bonus: ${attributes.spellhit}</li>`;
  details += `<li>Spell save DC: ${attributes.spellsaveDC}</li>`;
  details += `<li>${spellSlotsLabel} ${spellSlots}</li>`;
  details += `<li>Sorcery Points: <span id="rageNumber">${SP}</span></li>`;
  details += `<li><div id="rage-container">
  <button onclick="minusRage()" id="rageToggle" ><i class="fas fa-minus"></i></button>
  <button onclick="plusRage()" id="rageToggle"><i class="fas fa-plus"></i></button></div></li>`;
  details += `</ul>`;
  details += `</div>`;
  details += `</div>`;

}
else{

 
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
  details += `<li><div class="health-buttons-container"><button id="minusHealth" class="health-button" onclick="updateTemporaryHealth('subtract')"><i class="fas fa-heart-broken"></i></button>
  <button id="addHealth" class="health-button" onclick="updateTemporaryHealth('add')"><i class="fas fa-heart"></i></button></div></li>`;
  details += `</ul>`;
  details += `</div>`;
  //next column
  details += `<div class="column">`;
  details += `<ul>`;
  details += `<li>Proficiency Bonus:+${proficiencyBonus}`
  details += `<li>Armor Class: ${attributes.AC}</li>`;
  details += `<li>Weapon: ${attributes.weapon}</li>`;
  details += `<li>Actions: <button id="actionInfo" onclick="actionDescription()"><i class="fas fa-info-circle"></i>
  </button>`;
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


function actionDescription() {
  
  const selectedAction = document.getElementById('actionsSelect').value;


  const actionDescriptions = {
    'Action Surge': 'Take an additional action on your turn.',
    'Second Wind': 'Heal yourself by using a bonus action. (2-d4s)',
    "Extra Attack" :"Make additional attacks during your Attack action.", 
    "Precision Attack" :"Add superiority dice to your attack rolls.", 
    "Rally " :"On your turn, you can use a bonus action and expend one superiority die to bolster the resolve of one of your companions. When you do so, choose a friendly creature who can see or hear you. That creature gains temporary hit points equal to the superiority die roll + your Charisma modifier.", 
    "Menacing Attack " :"When you hit a creature with a weapon attack, you can expend one superiority die to attempt to frighten the target. You add the superiority die to the attack's damage roll, and the target must make a Wisdom saving throw. On a failed save, it is frightened of you until the end of your next turn.", 
    "Indomitable" :"Reroll a failed saving throw.", 
    "Eldritch Knight Spellcasting" :"Eldritch Knights, a Fighter archetype, can cast spells from the wizard spell list. These can range from offensive spells like Fireball to utility spells like Mage Armor.", 
    "Disarming Attack" :"A Fighter can use this maneuver to attempt to disarm an opponent, forcing them to make a Strength saving throw or drop an item they're holding.", 
    "Riposte" :"When a creature misses you with a melee attack, you can use your reaction and a superiority die to make a melee weapon attack against that creature if it's within your reach.", 
    "Defensive Duelist" :"Fighters can use their reaction to add their proficiency bonus to their AC when they're hit by an attack, potentially turning a hit into a miss.", 
    "Fireball" :`(Level 3) A bright streak flashes from your pointing finger to a point you choose within range and then blossoms with a low roar into an explosion of flame. Each creature in a 20-foot-radius sphere centered on that point must make a Dexterity saving throw. A target takes 8d6 fire damage on a failed save, or half as much damage on a successful one. The fire spreads around corners. It ignites flammable objects in the area that aren’t being worn or carried.
    At Higher Levels: When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd.`, 
    "Mage Armor" :"(Level 1) You touch a willing creature who isn’t wearing armor, and a protective magical force surrounds it until the spell ends. The target’s base AC becomes 13 + its Dexterity modifier. The spell ends if the target dons armor or if you dismiss the spell as an action.", 
    "Shield" :"(Level 1) An invisible barrier of magical force appears and protects you. Until the start of your next turn, you have a +5 bonus to AC, including against the triggering attack, and you take no damage from magic missile.", 
    "Magic Missile" :`(Level 1) You create three glowing darts of magical force. Each dart hits a creature of your choice that you can see within range. A dart deals 1d4 + 1 force damage to its target. The darts all strike simultaneously, and you can direct them to hit one creature or several.
    At Higher Levels: When you cast this spell using a spell slot of 2nd level or higher, the spell creates one more dart for each slot above 1st.`, 
    "Counterspell" :`(Level 3) You attempt to interrupt a creature in the process of casting a spell. If the creature is casting a spell of 3rd level or lower, its spell fails and has no effect. If it is casting a spell of 4th level or higher, make an ability check using your spellcasting ability. The DC equals 10 + the spell’s level. On a success, the creature’s spell fails and has no effect.
    At Higher Levels. When you cast this spell using a spell slot of 4th level or higher, the interrupted spell has no effect if its level is less than or equal to the level of the spell slot you used.`, 
    "Blight" :`(Level 4) Necromantic energy washes over a creature of your choice that you can see within range, draining moisture and vitality from it. The target must make a Constitution saving throw. The target takes 8d8 necrotic damage on a failed save, or half as much damage on a successful one. This spell has no effect on undead or constructs.

    If you target a plant creature or a magical plant, it makes the saving throw with disadvantage, and the spell deals maximum damage to it. If you target a nonmagical plant that isn’t a creature, such as a tree or shrub, it doesn’t make a saving throw; it simply withers and dies.
    
    At Higher Levels. When you cast this spell using a spell slot of 5th level or higher, the damage increases by 1d8 for each slot level above 4th.`, 
    "Vampiric Touch" :`(Level 3) The touch of your shadow-wreathed hand can siphon force from others to heal your wounds. Make a melee spell attack against a creature within your reach. On a hit, the target takes 3d6 necrotic damage, and you regain hit points equal to half the amount of necrotic damage dealt. Until the spell ends, you can make the attack again on each of your turns as an action.

    At Higher Levels. When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd.`, 
    "Cloudkill" :`(Level 5) You create a 20-foot-radius sphere of poisonous, yellow-green fog centered on a point you choose within range. The fog spreads around corners and lasts for the duration. It deals poison damage to creatures inside.`, 
    "Cone of Cold" :`(Level 5) A blast of cold air erupts from your hands. Each creature in a 60-foot cone must make a Constitution saving throw, taking 8d8 cold damage on a failed save, or half as much on a successful one. If cast using a spell slot of 6th level or higher, the damage increases by 1d8 for each slot level above 5th.`, 
    "Witch Bolt" :`(Level 1) A beam of crackling blue energy lances out toward a creature within range, forming a sustained arc of lightning. Make a ranged spell attack, dealing 1d12 lightning damage initially. On each of your turns for the duration, you can use your action to deal 1d12 lightning damage to the target automatically. If cast using a spell slot of 2nd level or higher, the initial damage and subsequent damage increase by 1d12 for each slot level above 1st.`, 
    "Immolation" :`(Level 5) Flames wreathe one creature you can see within range. The target must make a Dexterity saving throw, taking 8d6 fire damage on a failed save or half as much on a successful one. If cast using a spell slot of 6th level or higher, the damage increases by 1d6 for each slot level above 5th.`, 
    "Fire Shield" :`(Level 4) Thin and wispy flames wreathe your body for the duration, shedding bright light in a 10-foot radius and dim light for an additional 10 feet. Creatures attacking you take 2d8 fire or cold damage (your choice) when they hit with a melee attack. If cast using a spell slot of 5th level or higher, the damage increases by 1d8 for each slot level above 4th.`, 
    "Ice Storm" :`(Level 4) You create a hail of rock-hard ice that pounds to the ground in a 20-foot-radius, dealing 2d8 bludgeoning damage and 4d6 cold damage to creatures in the area.`, 
    "Call Lightning" :`(Level 3) A storm cloud appears in the shape of a cylinder that is 10 feet tall with a 60-foot radius. Each creature within 5 feet of the point you choose within range must make a Dexterity saving throw, taking 3d10 lightning damage on a failed save. If cast using a spell slot of 4th level or higher, the damage increases by 1d10 for each slot level above 3rd.`, 
    "Melf's Meteors" :`(Level 6) You create six tiny meteors within range, hurling them at creatures within 120 feet. Each creature hit takes 2d6 fire damage. If cast using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd.`, 
    "Blade Barrier" :`(Level 6) You create a wall of spinning blades made of magical energy. Any creature that starts its turn within the wall or enters it must make a Dexterity saving throw, taking 6d10 slashing damage on a failed save. If cast using a spell slot of 5th level or higher, the damage increases by 1d10 for each slot level above 4th.`, 
    "Flame Strike" :`(Level 5) A vertical column of divine fire roars down from the heavens in a location you specify. Each creature in a 10-foot-radius, 40-foot-high cylinder must make a Dexterity saving throw, taking 4d6 fire damage and 4d6 radiant damage on a failed save, or half as much on a successful one. If cast using a spell slot of 6th level or higher, the damage increases by 1d6 for each damage type for each slot level above 5th.`, 
    "Insect Plague" :`(Level 5) Swarming, biting locusts fill a 20-foot-radius sphere centered on a point you choose within range. Each creature in the area must make a Constitution saving throw, taking 4d10 piercing damage on a failed save or half as much on a successful one. If cast using a spell slot of 6th level or higher, the damage increases by 1d10 for each slot level above 5th.`, 
    "Ice Storm" :`(Level 4) You create a hail of rock-hard ice that pounds to the ground in a 20-foot-radius, dealing 2d8 bludgeoning damage and 4d6 cold damage to creatures in the area. If cast using a spell slot of 5th level or higher, the bludgeoning damage increases by 1d8 for each slot level above 4th, and the cold damage by 1d6 for each slot level above 4th.`, 
    "Moonbeam" :`(Level 2) A silvery beam of pale light shines down in a 5-foot radius, 40-foot-high cylinder centered on a point within range. When a creature enters the spell’s area for the first time on a turn or starts its turn there, it takes 2d10 radiant damage. If cast using a spell slot of 3rd level or higher, the damage increases by 1d10 for each slot level above 2nd.`, 
    "Flaming Sphere" :`(Level 2) You create a 5-foot-diameter sphere of fire, and you can ram it into creatures within 30 feet. Each creature in its area must make a Dexterity saving throw, taking 2d6 fire damage on a failed save. If cast using a spell slot of 3rd level or higher, the damage increases by 1d6 for each slot level above 2nd.`, 
    "Vitriolic Sphere" :`(Level 4) You conjure a sphere of acid energy at a point you can see within range. Each creature in a 20-foot-radius sphere centered on that point must make a Dexterity saving throw, taking 10d4 acid damage on a failed save, or half as much on a successful one. At the end of each of its turns for the duration, the acid deals an additional 5d4 acid damage to the target. If cast using a spell slot of 5th level or higher, the initial damage increases by 2d4 for each slot level above 4th, and the additional damage at the end of turns increases by 1d4 for each slot level above 4th.`, 
    "Erupting Earth" :`(Level 3)You cause a fountain of churned earth and stone to erupt in a 20-foot cube within range. Each creature in that area must make a Dexterity saving throw, taking 3d12 bludgeoning damage on a failed save, or half as much on a successful one. Additionally, the ground becomes difficult terrain until cleared. If cast using a spell slot of 4th level or higher, the damage increases by 1d12 for each slot level above 3rd.`, 
    "Thunderclap" :`(Cantrip)You create a burst of thunderous sound that can be heard up to 100 feet away. Each creature within 5 feet of you must make a Constitution saving throw, taking 1d6 thunder damage on a failed save.`, 
    "Whispers" :`(Level 1)You whisper a discordant melody that only one creature within range can hear, forcing it to make a Wisdom saving throw. On a failed save, it takes 3d6 psychic damage and must immediately use its reaction, moving as far as its speed allows away from you. If cast using a spell slot of 2nd level or higher, the damage increases by 1d6 for each slot level above 1st.`, 
    "Thunderwave" :`(Level 1) A wave of thunderous force sweeps out from you. Each creature in a 15-foot cube originating from you must make a Constitution saving throw, taking 2d8 thunder damage on a failed save and being pushed 10 feet away from you. If cast using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st.`, 
    "Shatter" :`(Level 2) A sudden loud ringing noise, painfully intense, erupts from a point of your choice within range. Each creature in a 10-foot-radius sphere centered on that point must make a Constitution saving throw, taking 3d8 thunder damage on a failed save, or half as much on a successful one. If cast using a spell slot of 3rd level or higher, the damage increases by 1d8 for each slot level above 2nd.`, 
    "Crown of Madness" :`(Level 2) You crown one humanoid within range with a twisting mass of thorny vines, forcing it to make a Wisdom saving throw. On a failed save, it takes 2d6 psychic damage at the start of each of its turns and must use its action before moving on each of its turns to make a melee attack against a creature other than itself that you mentally choose. If cast using a spell slot of 3rd level or higher, the damage increases by 1d6 for each slot level above 2nd.`, 
    "Hypnotic Pattern" :`(Level 3) You create a twisting pattern of colors that weaves through the air inside a 30-foot cube within range, forcing creatures to make a Wisdom saving throw. On a failed save, they become charmed and incapacitated, taking no actions and having a speed of 0. If cast using a spell slot of 4th level or higher, the duration increases by 1 round for each slot level above 3rd.`, 
    "Thunder Step" :`(Level 3) You teleport yourself to an unoccupied space you can see within range. Each creature within 10 feet of the space you left and your destination must make a Constitution saving throw, taking 3d10 thunder damage on a failed save. If cast using a spell slot of 4th level or higher, the damage increases by 1d10 for each slot level above 3rd.`, 
    "Blight" :`(Level 4) You target a creature that you can see within range, causing it to make a Constitution saving throw. On a failed save, it takes 8d8 necrotic damage. If cast using a spell slot of 5th level or higher, the damage increases by 1d8 for each slot level above 4th.`, 
    "Evard's Tentacles" :`(Level 4) Squirming, ebony tentacles fill a 20-foot square on the ground that you can see within range. When a creature enters the affected area for the first time on a turn or starts its turn there, it must succeed on a Dexterity saving throw or take 3d6 bludgeoning damage and be restrained. If cast using a spell slot of 5th level or higher, the damage increases by 1d6 for each slot level above 4th.`, 
    "Destructive Wave" :`(Level 5) You strike the ground, creating a burst of divine energy. Each creature you choose within 30 feet must make a Constitution saving throw, taking 5d6 thunder damage and 5d6 radiant or necrotic damage (your choice) on a failed save, or half as much on a successful one. If cast using a spell slot of 6th level or higher, the damage increases by 1d6 for each damage type for each slot level above 5th.`, 
    "Synaptic Static" :`(Level 5) You choose a point within range, causing psychic energy to explode there. Each creature in a 20-foot-radius sphere centered on that point must make an Intelligence saving throw, taking 8d6 psychic damage on a failed save, or half as much on a successful one. Additionally, the target has muddled thoughts for 1 minute, allowing it to roll a d6 and subtract the number rolled from all its attack rolls and ability checks, as well as Constitution saving throws to maintain concentration. If cast using a spell slot of 6th level or higher, the damage increases by 1d6 for each slot level above 5th.`, 
    "Unarmed Strike" :`Monks can make an unarmed strike as part of the Attack action. At 1st level, this strike deals 1d4 damage plus the Monk's Dexterity modifier. This damage increases to 1d6 at 5th level, 1d8 at 11th level, and 1d10 at 17th level.`, 
    "Flurry of Blows" :`Spending 1 ki point, a Monk can make two additional unarmed strikes as a bonus action after taking the Attack action. The damage for each strike is based on the Monk's unarmed strike progression.`, 
    "Patient Defense" :`For 1 ki point as a bonus action, a Monk can take the Dodge action until the start of their next turn, giving attackers disadvantage on attack rolls against the Monk.`, 
    "Step of the Wind" :`By spending 1 ki point, a Monk can use the Dash or Disengage action as a bonus action, along with doubling their jump distance for the turn.`, 
    "Deflect Missiles" :`Monks can use their reaction and spend 1 ki point to reduce damage from a ranged weapon attack they can see by 1d10 + Dexterity modifier + Monk level. The Monk's level is also added to the damage they can throw back if they reduce the damage to 0.`, 
    "Stunning Strike" :`When a Monk hits with a melee attack, they can spend 1 ki point to attempt to stun the target. The target must succeed on a Constitution saving throw or be stunned until the end of the Monk's next turn.`, 
    "Shadow Step" :`Monks of the Way of Shadow can spend 2 ki points to cast the Pass Without Trace spell and teleport between shadows as a bonus action.`, 
    "Step of the Wind" :`Monks of the Way of the Open Hand can use 1 ki point to Disengage or Dash as a bonus action, doubling their jump distance for the turn.`, 
    "Empty Body" :`At 18th level, a Monk can spend 4 ki points to become invisible for 1 minute, gaining resistance to all damage except force and becoming immune to all conditions.`, 
    "Wholeness of Body" :`By spending 2 ki points, a Monk can heal themselves for an amount equal to three times their Monk level.`, 
    "Quivering Palm" :`At 17th level, Monks can spend 3 ki points and use an action to attempt to deliver an attack that could potentially kill a creature, as described previously. The damage inflicted remains constant, but the Monk's level affects their ability to attempt the lethal strike.`, 
    "Sacred Flame" :`(Cantrip)Clerics call down radiant energy in a 60-foot range. The target must succeed on a Dexterity saving throw or take 1d8 radiant damage. This damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8).`, 
    "Guiding Bolt" :`(Level 1) A cleric releases a shimmering projectile towards a target within range, making a ranged spell attack. On a hit, the target takes 4d6 radiant damage. Higher-level casting allows increased damage; for each slot level above 1st, the damage increases by 1d6.`, 
    "Healing Word" :`(Level 1)A cleric can heal an ally within range for 1d4 + spellcasting ability modifier hit points. Using a spell slot of 2nd level or higher increases the healing; for each slot level above 1st, the healing increases by 1d4.`, 
    "Cure Wounds" :`(Level 1) The cleric touches a creature, healing it for 1d8 + spellcasting ability modifier hit points. Using a spell slot of 2nd level or higher increases the healing; for each slot level above 1st, the healing increases by 1d8.`, 
    "Spiritual Weapon" :`(Level 2) This spell creates a floating spectral weapon within 60 feet of the cleric. As a bonus action, the caster can make a melee spell attack using their spellcasting ability modifier, dealing force damage on a hit. Using a spell slot of 3rd level or higher increases the damage; for each slot level above 2nd, the damage increases by 1d8.`, 
    "Mass Healing Word" :`(Level 3) Clerics can heal multiple allies within a 60-foot range for 1d4 + spellcasting ability modifier hit points. Using a spell slot of 4th level or higher increases the healing; for each slot level above 3rd, the healing increases by 1d4.`, 
    "Divine Strike" :`(Varies) At 8th level, some Clerics gain the ability to infuse their weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 radiant damage.`, 
    "Preserve Life" :`(Level 2) At 2nd level, a cleric can use Channel Divinity to heal allies. The cleric can restore up to 5 times their cleric level in hit points. Higher-level clerics can heal for more hit points as they advance in levels.`, 
    "Shield of Faith" :`(Level 1) A cleric can grant a creature within range a +2 bonus to AC for the duration. Using a spell slot of 2nd level or higher increases the duration; for each slot level above 1st, the duration increases by 10 minutes.`, 
    "Bless" :`(Level 1) A cleric blesses up to three creatures within range, granting them a +1d4 bonus to attack rolls and saving throws. Using a spell slot of 2nd level or higher increases the number of creatures affected; for each slot level above 1st, one additional creature can be affected.`, 
    "Inflict Wounds" :`(Level 1) Make a melee spell attack against a creature you can reach. On a hit, the target takes 3d10 necrotic damage. Using a spell slot of 2nd level or higher increases the damage; for each slot level above 1st, the damage increases by 1d10.`, 
    "Rage" :`A Barbarian can enter a rage as a bonus action, granting them advantages in combat. While raging, they gain bonus damage on melee weapon attacks, resistance to certain types of damage, and advantage on Strength checks and saving throws.`, 
    "Reckless Attack" :`Barbarians can choose to attack recklessly, gaining advantage on melee weapon attack rolls during their turn but granting advantage to enemies attacking them until the start of their next turn.`, 
    "Banishing Smite" :`(Level 5) A Paladin's weapon attacks deal an extra 5d10 force damage on a hit, and if the target has 50 hit points or fewer after taking this damage, it must succeed on a Charisma saving throw or be banished. Using a spell slot of 6th level or higher increases the force damage; for each slot level above 5th, the force damage increases by 1d10.`, 
    "Divine Smite" :`(Varies) When a Paladin hits with a melee weapon attack, they can expend a spell slot to deal radiant damage to the target in addition to the weapon's damage. The damage scales with the spell slot's level, adding 1d8 radiant damage for a 1st-level spell slot and an additional 1d8 for each higher-level slot.`, 
    "Lay on Hands" :`(Varies) Paladins can heal wounds by touching a creature and spending points from their pool. At 10th level, they can heal up to 50 hit points per long rest using this feature.`, 
    "Bless" :`(Level 1) Paladins can bless up to three creatures within range, granting them a +1d4 bonus to attack rolls and saving throws. Using a spell slot of 2nd level or higher increases the number of creatures affected; for each slot level above 1st, one additional creature can be affected.`, 
    "Wrathful Smite" :`(Level 1) A Paladin's weapon attacks deal extra psychic damage on a hit and force the target to make a Wisdom saving throw or become frightened. Using a spell slot of 2nd level or higher increases the damage; for each slot level above 1st, the damage increases by 1d6.`, 
    "Shield of Faith" :`(Level 1) A Paladin can grant a creature within range a +2 bonus to AC for the duration. Using a spell slot of 2nd level or higher increases the duration; for each slot level above 1st, the duration increases by 10 minutes.`, 
    "Divine Favor" :`(Level 1) Paladins can imbue their weapon with radiant energy, granting them additional damage on their weapon attacks. Using a spell slot of 2nd level or higher increases the damage; for each slot level above 1st, the damage increases by 1d4.`, 
    "Thunderous Smite" :`(Level 1) A Paladin's weapon attacks deal extra thunder damage on a hit, and the target must succeed on a Strength saving throw or be pushed 10 feet away and knocked prone. Using a spell slot of 2nd level or higher increases the damage; for each slot level above 1st, the damage increases by 2d6.`, 
    "Blade Warding" :`(Level 1) At 7th level, a Paladin can use their Channel Divinity to gain resistance to bludgeoning, piercing, and slashing damage from weapon attacks for 1 minute.`, 
    "Retributive Strike" :`(Level 11) Paladins of the Oath of Vengeance can use their reaction to make a melee weapon attack against a creature that damaged them when they are not incapacitated.`, 
    "Vow of Enmity" :`(Level 1) Paladins of the Oath of Vengeance can use a bonus action to choose a creature within 10 feet and gain advantage on attack rolls against that creature for 1 minute or until it drops to 0 hit points or falls unconscious.`, 
    "Sneak Attack" :`A Rogue can deal extra damage when they have advantage on an attack roll or when an ally is within 5 feet of the target. The damage increases with Rogue levels, starting at 5d6 at level 10 and increasing to 6d6 at level 13, 7d6 at level 16, and 8d6 at level 19.`, 
    "Chaos Bolt" :`(Level 1) You hurl an undulating, warbling mass of chaotic energy at a creature you can see within range. Make a ranged spell attack against the target. On a hit, the target takes 2d8 damage. Choose one of the d8s. The number rolled on that die determines the type of damage dealt. When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st.`, 
    "Scorching Ray" :`(Level 2) You create three rays of fire and hurl them at targets within range. You can hurl them at one target or several. Make a ranged spell attack for each ray. On a hit, the target takes 2d6 fire damage. When you cast this spell using a spell slot of 3rd level or higher, you create one additional ray for each slot level above 2nd`, 
    "Lightning Bolt" :`(Level 3) A stroke of lightning blasts from your hand in a line 100 feet long and 5 feet wide. Each creature in the line must make a Dexterity saving throw. A creature takes 8d6 lightning damage on a failed save, or half as much damage on a successful one. When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd.`, 
    "Haste" :`(Level 3) Choose a willing creature that you can see within range. Until the spell ends, the target’s speed is doubled, it gains a +2 bonus to AC, it has advantage on Dexterity saving throws, and it gains an additional action on each of its turns. When you cast this spell using a spell slot of 4th level or higher, you can target one additional creature for each slot level above 3rd.`, 
    "Sleet Storm" :`(Level 3) Until the spell ends, freezing rain and sleet fall in a 20-foot-tall cylinder with a 40-foot radius centered on a point you choose within range. The area is heavily obscured, and exposed flames are extinguished. When you cast this spell using a spell slot of 4th level or higher, the area increases by 20 feet in radius for each slot level above 3rd.`, 
    "Wall of Fire" :`(Level 4) You create a wall of fire on a solid surface within range. The wall is up to 60 feet long, 20 feet high, and 1 foot thick. Any creature within the wall's area must make a Dexterity saving throw. A creature takes 5d8 fire damage on a failed save, or half as much damage on a successful one. When you cast this spell using a spell slot of 5th level or higher, the damage increases by 1d8 for each slot level above 4th.`, 
    "Healing Word" :`(Level 1) A creature of your choice that you can see within range regains hit points equal to 1d4 + your spellcasting ability modifier. When you cast this spell using a spell slot of 2nd level or higher, the healing increases by 1d4 for each slot level above 2nd.`, 
    "Cure Wounds" :`(Level 1) A creature you touch regains a number of hit points equal to 1d8 + your spellcasting ability modifier. When you cast this spell using a spell slot of 2nd level or higher, the healing increases by 1d8 for each slot level above 1st.`, 
    "Eldritch Blast" :`(Level 1) A beam of crackling energy streaks toward a creature within range. Make a ranged spell attack. On a hit, the target takes 1d10 force damage. The spell creates more than one beam when you reach higher levels: two beams at 5th level, three beams at 11th level, and four beams at 17th level. You can direct the beams at the same target or different ones.`, 
    "Hex" :`(Level 1) You place a curse on a creature that you can see within range, dealing an extra 1d6 necrotic damage to the target whenever you hit it with an attack. When you cast this spell using a spell slot of 2nd level or higher, the spell lasts for a longer duration. If you use a spell slot of 3rd level or higher, the damage increases by 1d6 for each slot level above 1st.`, 
    "Hunger of Hadar" :`(Level 3) You open a gateway to the dark between the stars, a region infested with unknown horrors. The void creates a warp in the fabric of space, and the area is heavily obscured. Any creature that starts its turn in the area takes 2d6 cold damage. When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for each slot level above 3rd.`, 
    "Shadow of Moil" :`(Level 4) Flames wreathe you until the spell ends, providing you with a dim light and causing you to become heavily obscured to others. The spell ends if you cast it again or if you dispel the magic. Any creature that hits you with a melee attack while within 5 feet of you takes 2d8 fire damage. When you cast this spell using a spell slot of 5th level or higher, the fire damage increases by 1d8 for each slot level above 4th.`, 
    "Hurl Through Hell" :`(Level 7) You banish a creature you can see within 60 feet to the depths of the Nine Hells. The target takes 10d10 psychic damage. At the end of your next turn, the target returns to the space it previously occupied, or the nearest unoccupied space. When you cast this spell using a spell slot of 7th level or higher, the damage increases by 1d10 for each slot level above 6th.`, 
    "Investiture of Flame" :`(Level 6) Flames race across your body, shedding bright light in a 30-foot radius and dim light for an additional 30 feet. The flames don’t harm you, and they shed bright light for 30 feet. Any creature takes 1d10 fire damage if it touches or hits you with a melee attack. When you cast this spell using a spell slot of 7th level or higher, the fire damage increases by 1d10 for each slot above 7th.`, 
    "Healing Elixir" :`(Varies) You create a healing elixir in a flask that shimmers with a silver glow. As an action, a creature can drink it to regain 2d4 + 2 hit points. When you cast this spell using a spell slot of 3rd level or higher, the healing increases by 1d4 for each slot level above 2nd.`, 
    "Life Transference" :`(Level 3) You sacrifice some of your health to mend another creature’s injuries. You take 4d8 necrotic damage, and a creature you touch regains a number of hit points equal to twice the necrotic damage you took. When you cast this spell using a spell slot of 4th level or higher, the damage you take increases by 1d8 for each slot level above 3rd.`,
 
  };
  const actionDescription = actionDescriptions[selectedAction] || 'No description available.';

  // Display the description in an alert box (you can customize this part)
  alert(`Action: ${selectedAction}\nDescription: ${actionDescription}`);
}
