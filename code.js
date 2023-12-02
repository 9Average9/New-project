

const classAction = {
  fighter: ['Action Surge', 'Second Wind', 'Extra Attack', 'Precision Attack ', 'Rally ', 'Menacing Attack ', 'Indomitable'],
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
  const selectedLevel = document.getElementById('level-selection').value;

  const characterAttributes = generateAttributes(selectedClass, selectedRace, selectedLevel);
  const characterActions = generateActions(selectedClass);

  displayCharacter(selectedRace, selectedClass, characterAttributes, characterActions);
}



function generateAttributes(characterClass, race, level) {
  let attributes = {
    AC: Math.floor(Math.random() * 5 + 14),
    strength: Math.floor(Math.random() * 8) + 10,
    dexterity: Math.floor(Math.random() * 8) + 10,
    intelligence: Math.floor(Math.random() * 8) + 10,
    constitution: Math.floor(Math.random() * 8) + 10,
    wisdom: Math.floor(Math.random() * 8) + 10,
    charisma: Math.floor(Math.random() * 8) + 10,
    weapon: '',
    spellsaveDC: '',
    spellhit: '',
  };

  const weapons = ['Sword', 'Bow', 'Staff', 'Dagger', 'Axe'];

  if (characterClass === 'fighter' || characterClass === 'ranger' || characterClass === 'barbarian' || characterClass === 'paladin') {
    attributes.strength = Math.floor(Math.random() * 10) + 10;
    attributes.weapon = weapons[Math.floor(Math.random() * weapons.length)];
  } else if (characterClass === 'rogue') {
    attributes.weapon = 'Dagger';
  } else {
    attributes.weapon = 'None';
  }

  if (characterClass === 'warlock' && race === 'dragonborn') {
    attributes.charisma = 18;
  }

  if (characterClass === 'warlock' || characterClass === 'wizard' || characterClass === 'sorcerer') {
    attributes.spellhit = 7 + Math.floor((level - 10) * 0.5); // Increment spellhit by 0.5 for each level above 10
    attributes.spellsaveDC = 13 + Math.floor((level - 10) * 0.25);
  } else {
    attributes.spellhit = '';
    attributes.spellsaveDC = '';
  }



  const levelModifier = Math.floor((level - 10) * 0.5); // 

  for (const attribute in attributes) {
    if (attributes.hasOwnProperty(attribute) && attribute !== 'weapon' && attribute !== 'spellhit') {
      attributes[attribute] += levelModifier;
      attributes[attribute] = Math.floor(attributes[attribute]);
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
  details += `<li>Weapon: ${attributes.weapon}</li>`
  details += `<li>Actions: ${actions.join(', ')}</li>`;
  details += `<li>Spell hit bonus: ${attributes.spellhit}</li>`
  details += `<li>Spell save DC: ${attributes.spellsaveDC}</li>`



  characterDetails.innerHTML = details;

  
}





function toggleMenu() {
  var menu = document.getElementById("menu");
  var bars = document.querySelectorAll('.container12 div');
  
  menu.style.display = (menu.style.display === "block") ? "none" : "block";
  
  bars.forEach(function(bar) {
    bar.classList.toggle('change');
  });
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
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

function godStats(){
  const characterDetails = document.getElementById('character-info');
  let details = '';
  

  details += `<li>Race: Angel </li>`;
  details += `<li>Class: Warrior </li>`;
  details += `<li>Armor Class: 30 </li>`;
  details += `<li>Strength: 25 </li>`;
  details += `<li>Dexterity: 25 </li>`;
  details += `<li>Intelligence: 25 </li>`;
  details += `<li>Constitution: 25 </li>`;
  details += `<li>Wisdom: 25 </li>`;
  details += `<li>Charisma: 25 </li>`;
  details += `<li>Weapon: 25 </li>`
  details += `<li>Actions: Divine Action</li>`;

  characterDetails.innerHTML = details;





}