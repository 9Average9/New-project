/* =====================================================================
   ARCANUM — D&D Character Forge
   A premium, data-driven character generator.
   Everything (races, classes, spells/actions, art, game math) lives in
   one place so the picker, the character sheet and the compendium all
   read from the same source of truth.
   ===================================================================== */

'use strict';

/* ------------------------------------------------------------------ */
/*  ART                                                               */
/*  One deduped map of every race/class portrait. raceThumb() and     */
/*  classThumb() derive the picker art from it so file extensions      */
/*  (human_fighter.png, dragonborn_cleric.webp) are handled in one     */
/*  spot.                                                              */
/* ------------------------------------------------------------------ */
const IMAGES = {
  human:      { warlock:'img/human_warlock.jpg', wizard:'img/human_wizard.jpg', barbarian:'img/human_barbarian.jpg', bard:'img/human_bard.jpg', cleric:'img/human_cleric.jpg', rogue:'img/human_rogue.jpg', paladin:'img/human_paladin.jpg', monk:'img/human_monk.jpg', druid:'img/human_druid.jpg', sorcerer:'img/human_sorcerer.jpg', ranger:'img/human_ranger.jpg', fighter:'img/human_fighter.png' },
  elf:        { warlock:'img/elf_warlock.jpg', wizard:'img/elf_wizard.jpg', barbarian:'img/elf_barbarian.jpg', bard:'img/elf_bard.jpg', cleric:'img/elf_cleric.jpg', rogue:'img/elf_rogue.jpg', paladin:'img/elf_paladin.jpg', monk:'img/elf_monk.jpg', druid:'img/elf_druid.jpg', sorcerer:'img/elf_sorcerer.jpg', ranger:'img/elf_ranger.jpg', fighter:'img/elf_fighter.jpg' },
  dragonborn: { warlock:'img/dragonborn_warlock.jpg', wizard:'img/dragonborn_wizard.jpg', barbarian:'img/dragonborn_barbarian.jpg', bard:'img/dragonborn_bard.jpg', cleric:'img/dragonborn_cleric.webp', rogue:'img/dragonborn_rogue.jpg', paladin:'img/dragonborn_paladin.jpg', monk:'img/dragonborn_monk.jpg', druid:'img/dragonborn_druid.jpg', sorcerer:'img/dragonborn_sorcerer.jpg', ranger:'img/dragonborn_ranger.jpg', fighter:'img/dragonborn_fighter.jpg' },
  dwarf:      { warlock:'img/dwarf_warlock.jpg', wizard:'img/dwarf_wizard.jpg', barbarian:'img/dwarf_barbarian.jpg', bard:'img/dwarf_bard.jpg', cleric:'img/dwarf_cleric.jpg', rogue:'img/dwarf_rogue.jpg', paladin:'img/dwarf_paladin.jpg', monk:'img/dwarf_monk.jpg', druid:'img/dwarf_druid.jpg', sorcerer:'img/dwarf_sorcerer.jpg', ranger:'img/dwarf_ranger.jpg', fighter:'img/dwarf_fighter.jpg' },
  tiefling:   { warlock:'img/tiefling_warlock.jpg', wizard:'img/tiefling_wizard.jpg', barbarian:'img/tiefling_barbarian.jpg', bard:'img/tiefling_bard.jpg', cleric:'img/tiefling_cleric.jpg', rogue:'img/tiefling_rogue.jpg', paladin:'img/tiefling_paladin.jpg', monk:'img/tiefling_monk.jpg', druid:'img/tiefling_druid.jpg', sorcerer:'img/tiefling_sorcerer.jpg', ranger:'img/tiefling_ranger.jpg', fighter:'img/tiefling_fighter.jpg' },
  half_elf:   { warlock:'img/half_elf_warlock.jpg', wizard:'img/half_elf_wizard.jpg', barbarian:'img/half_elf_barbarian.jpg', bard:'img/half_elf_bard.jpg', cleric:'img/half_elf_cleric.jpg', rogue:'img/half_elf_rogue.jpg', paladin:'img/half_elf_paladin.jpg', monk:'img/half_elf_monk.jpg', druid:'img/half_elf_druid.jpg', sorcerer:'img/half_elf_sorcerer.jpg', ranger:'img/half_elf_ranger.jpg', fighter:'img/half_elf_fighter.jpg' },
  gnome:      { warlock:'img/gnome_warlock.jpg', wizard:'img/gnome_wizard.jpg', barbarian:'img/gnome_barbarian.jpg', bard:'img/gnome_bard.jpg', cleric:'img/gnome_cleric.jpg', rogue:'img/gnome_rogue.jpg', paladin:'img/gnome_paladin.jpg', monk:'img/gnome_monk.jpg', druid:'img/gnome_druid.jpg', sorcerer:'img/gnome_sorcerer.jpg', ranger:'img/gnome_ranger.jpg', fighter:'img/gnome_fighter.jpg' },
  halfling:   { warlock:'img/halfling_warlock.jpg', wizard:'img/halfling_wizard.jpg', barbarian:'img/halfling_barbarian.jpg', bard:'img/halfling_bard.jpg', cleric:'img/halfling_cleric.jpg', rogue:'img/halfling_rogue.jpg', paladin:'img/halfling_paladin.jpg', monk:'img/halfling_monk.jpg', druid:'img/halfling_druid.jpg', sorcerer:'img/halfling_sorcerer.jpg', ranger:'img/halfling_ranger.jpg', fighter:'img/halfling_fighter.jpg' },
  half_orc:   { warlock:'img/half_orc_warlock.jpg', wizard:'img/half_orc_wizard.jpg', barbarian:'img/half_orc_barbarian.jpg', bard:'img/half_orc_bard.jpg', cleric:'img/half_orc_cleric.jpg', rogue:'img/half_orc_rogue.jpg', paladin:'img/half_orc_paladin.jpg', monk:'img/half_orc_monk.jpg', druid:'img/half_orc_druid.jpg', sorcerer:'img/half_orc_sorcerer.jpg', ranger:'img/half_orc_ranger.jpg', fighter:'img/half_orc_fighter.jpg' },
};

// A race's picker card uses its Fighter portrait; a class's card uses the Human portrait.
const raceThumb  = (race) => IMAGES[race].fighter;
const classThumb = (cls)  => IMAGES.human[cls];
const portrait   = (race, cls) => (IMAGES[race] && IMAGES[race][cls]) || '';

/* ------------------------------------------------------------------ */
/*  RACES                                                             */
/*  bonuses: flat ability-score increases. `flex` = pick N +1s among   */
/*  remaining abilities (Half-Elf).                                    */
/* ------------------------------------------------------------------ */
const ABILITIES = ['strength', 'dexterity', 'constitution', 'intelligence', 'wisdom', 'charisma'];
const ABBR = { strength:'STR', dexterity:'DEX', constitution:'CON', intelligence:'INT', wisdom:'WIS', charisma:'CHA' };

const RACES = [
  { id:'human', name:'Human', speed:30, blurb:'Ambitious and adaptable, humans bend every discipline to their will.',
    bonuses:{ strength:1, dexterity:1, constitution:1, intelligence:1, wisdom:1, charisma:1 },
    traits:['+1 to every ability', 'Extra skill & language', 'Boundless versatility'] },
  { id:'elf', name:'Elf', speed:30, blurb:'Graceful and long-lived, elves move like a whisper through the world.',
    bonuses:{ dexterity:2 }, traits:['Darkvision', 'Fey Ancestry', 'Trance — no need to sleep'] },
  { id:'dragonborn', name:'Dragonborn', speed:30, blurb:'Proud descendants of dragons, wreathed in elemental breath.',
    bonuses:{ strength:2, charisma:1 }, traits:['Breath Weapon', 'Damage Resistance', 'Draconic heritage'] },
  { id:'dwarf', name:'Dwarf', speed:25, blurb:'Stone-hard and steadfast, dwarves outlast mountains and grudges alike.',
    bonuses:{ constitution:2 }, traits:['Darkvision', 'Dwarven Resilience (poison)', 'Stonecunning'] },
  { id:'tiefling', name:'Tiefling', speed:30, blurb:'Marked by an infernal bloodline, charismatic and quietly feared.',
    bonuses:{ intelligence:1, charisma:2 }, traits:['Darkvision', 'Hellish Resistance (fire)', 'Innate infernal magic'] },
  { id:'half_elf', name:'Half-Elf', speed:30, blurb:'Walkers between worlds, at home everywhere and belonging nowhere.',
    bonuses:{ charisma:2 }, flex:{ count:2, amount:1, exclude:['charisma'] },
    traits:['Darkvision', 'Fey Ancestry', '+1 to two chosen abilities'] },
  { id:'gnome', name:'Gnome', speed:25, blurb:'Bright-eyed tinkerers brimming with curiosity and clever magic.',
    bonuses:{ intelligence:2 }, traits:['Darkvision', 'Gnome Cunning (mental saves)', 'Artificer’s spark'] },
  { id:'halfling', name:'Halfling', speed:25, blurb:'Small, nimble and impossibly lucky when it matters most.',
    bonuses:{ dexterity:2 }, traits:['Lucky — reroll natural 1s', 'Brave', 'Nimbleness'] },
  { id:'half_orc', name:'Half-Orc', speed:30, blurb:'Fierce and relentless, they refuse to fall while the fight remains.',
    bonuses:{ strength:2, constitution:1 }, traits:['Darkvision', 'Relentless Endurance', 'Savage Attacks'] },
];

/* ------------------------------------------------------------------ */
/*  CLASSES                                                           */
/*  caster:  'full' | 'half' | 'pact' | null                          */
/*  resource: label shown for the class' signature pool               */
/* ------------------------------------------------------------------ */
const CLASSES = [
  { id:'barbarian', name:'Barbarian', role:'Martial · Melee', primary:'strength',  save:null,          hitDie:12, caster:null,   resource:'Rages',
    blurb:'A whirlwind of primal fury who trades caution for devastating strength.' },
  { id:'bard', name:'Bard', role:'Support Caster', primary:'charisma', save:'charisma', hitDie:8, caster:'full', resource:'Spell Slots',
    blurb:'A silver-tongued virtuoso weaving magic through music and mockery.' },
  { id:'cleric', name:'Cleric', role:'Divine Caster', primary:'wisdom', save:'wisdom', hitDie:8, caster:'full', resource:'Spell Slots',
    blurb:'A conduit of divine power, healing allies and smiting the wicked.' },
  { id:'druid', name:'Druid', role:'Nature Caster', primary:'wisdom', save:'wisdom', hitDie:8, caster:'full', resource:'Spell Slots',
    blurb:'A guardian of the wilds who calls storms, beasts and blossoming decay.' },
  { id:'fighter', name:'Fighter', role:'Martial · Versatile', primary:'strength', save:null, hitDie:10, caster:null, resource:'Superiority Dice',
    blurb:'A master of every weapon and maneuver, unmatched in sustained combat.' },
  { id:'monk', name:'Monk', role:'Martial · Agile', primary:'dexterity', save:null, hitDie:8, caster:null, resource:'Ki Points',
    blurb:'A disciplined martial artist channeling ki into blinding flurries.' },
  { id:'paladin', name:'Paladin', role:'Holy Warrior', primary:'strength', save:'charisma', hitDie:10, caster:'half', resource:'Spell Slots',
    blurb:'An oathbound crusader whose blade burns with radiant conviction.' },
  { id:'ranger', name:'Ranger', role:'Hunter', primary:'dexterity', save:'wisdom', hitDie:10, caster:'half', resource:'Spell Slots',
    blurb:'A peerless tracker and marksman, deadly at the edge of the wild.' },
  { id:'rogue', name:'Rogue', role:'Skirmisher', primary:'dexterity', save:null, hitDie:8, caster:null, resource:'Sneak Attack',
    blurb:'A cunning opportunist who turns a single opening into a lethal blow.' },
  { id:'sorcerer', name:'Sorcerer', role:'Arcane Caster', primary:'charisma', save:'charisma', hitDie:6, caster:'full', resource:'Spell Slots',
    blurb:'A wellspring of innate magic, bending spells with raw force of will.' },
  { id:'warlock', name:'Warlock', role:'Pact Caster', primary:'charisma', save:'charisma', hitDie:8, caster:'pact', resource:'Pact Slots',
    blurb:'A seeker of forbidden power, bound to an otherworldly patron’s pact.' },
  { id:'wizard', name:'Wizard', role:'Arcane Caster', primary:'intelligence', save:'intelligence', hitDie:6, caster:'full', resource:'Spell Slots',
    blurb:'A scholar of the arcane whose spellbook holds answers to everything.' },
];

const raceById  = (id) => RACES.find(r => r.id === id);
const classById = (id) => CLASSES.find(c => c.id === id);

/* ------------------------------------------------------------------ */
/*  ACTIONS & SPELLS                                                  */
/*  Every class has a real repertoire of D&D moves with descriptions.  */
/*  tag = level / feature label shown as a chip.                       */
/* ------------------------------------------------------------------ */
const ACTIONS = {
  fighter: [
    { name:'Action Surge', tag:'Feature', desc:'On your turn, take one additional action on top of your regular action. You regain this on a short or long rest.' },
    { name:'Second Wind', tag:'Bonus Action', desc:'Regain 1d10 + your fighter level hit points as a bonus action, once per short or long rest.' },
    { name:'Extra Attack', tag:'Feature', desc:'Whenever you take the Attack action on your turn, you can attack twice (three times at 11th level, four at 20th) instead of once.' },
    { name:'Precision Attack', tag:'Maneuver', desc:'When you make a weapon attack, expend one superiority die and add it to the roll. You can use this before or after the roll, but before effects are applied.' },
    { name:'Menacing Attack', tag:'Maneuver', desc:'On a hit, expend one superiority die and add it to the damage. The target must make a Wisdom save or be frightened of you until the end of your next turn.' },
    { name:'Riposte', tag:'Reaction', desc:'When a creature misses you with a melee attack, use your reaction and expend a superiority die to make a melee weapon attack against it.' },
    { name:'Disarming Attack', tag:'Maneuver', desc:'On a hit, expend one superiority die, add it to the damage, and force a Strength save or the target drops one item of your choice.' },
    { name:'Rally', tag:'Maneuver', desc:'On your turn, use a bonus action and expend one superiority die to grant an ally who can see or hear you temporary hit points equal to the die roll + your Charisma modifier.' },
    { name:'Indomitable', tag:'Feature', desc:'When you fail a saving throw, you can reroll it and must use the new roll. Once per long rest (twice at 13th, three times at 17th).' },
    { name:'Eldritch Knight Spellcasting', tag:'Subclass', desc:'You learn spells from the wizard list, from cantrips like Fire Bolt to staples like Shield, Mage Armor and Fireball, fueled by Intelligence.' },
  ],
  wizard: [
    { name:'Fire Bolt', tag:'Cantrip', desc:'Hurl a mote of fire at a creature or object. On a ranged spell attack hit, it takes 1d10 fire damage, scaling to 4d10 at higher levels. Ignites unattended flammables.' },
    { name:'Magic Missile', tag:'Level 1', desc:'Create three glowing darts, each dealing 1d4 + 1 force damage to a target you can see — the darts never miss. Creates one extra dart per slot level above 1st.' },
    { name:'Shield', tag:'Level 1 · Reaction', desc:'An invisible barrier grants +5 AC until the start of your next turn, including against the triggering attack, and negates Magic Missile.' },
    { name:'Mage Armor', tag:'Level 1', desc:'Touch a willing unarmored creature; its base AC becomes 13 + its Dexterity modifier for 8 hours.' },
    { name:'Counterspell', tag:'Level 3 · Reaction', desc:'Interrupt a creature casting a spell. A spell of 3rd level or lower automatically fails; higher requires an ability check (DC 10 + the spell’s level).' },
    { name:'Fireball', tag:'Level 3', desc:'A streak blossoms into a 20-foot-radius explosion. Each creature there makes a Dexterity save, taking 8d6 fire damage on a fail (half on success). +1d6 per slot above 3rd.' },
    { name:'Ice Storm', tag:'Level 4', desc:'Hail pounds a 20-foot-radius cylinder for 2d8 bludgeoning + 4d6 cold damage, and the ground becomes difficult terrain.' },
    { name:'Cone of Cold', tag:'Level 5', desc:'A blast of frigid air fills a 60-foot cone. Each creature makes a Constitution save, taking 8d8 cold damage on a fail (half on success). +1d8 per slot above 5th.' },
    { name:'Cloudkill', tag:'Level 5', desc:'A 20-foot-radius sphere of poisonous fog deals 5d8 poison damage (Con save for half) to creatures inside and drifts 10 feet away from you each turn.' },
    { name:'Fire Shield', tag:'Level 4', desc:'Flames wreathe you, granting resistance to cold or fire; attackers who hit you in melee take 2d8 damage of the chosen type.' },
  ],
  sorcerer: [
    { name:'Magic Missile', tag:'Level 1', desc:'Three unerring darts of force each deal 1d4 + 1 damage to targets you can see. Twinned or empowered beautifully with Metamagic.' },
    { name:'Chaos Bolt', tag:'Level 1', desc:'Hurl chaotic energy for 2d8 + 1d6 damage of a random type. If both d8s match, it leaps to a new target — potentially forever.' },
    { name:'Scorching Ray', tag:'Level 2', desc:'Loose three rays of fire; make a ranged spell attack for each, dealing 2d6 fire damage per hit. One extra ray per slot above 2nd.' },
    { name:'Fireball', tag:'Level 3', desc:'A 20-foot-radius burst of flame deals 8d6 fire damage (Dex save for half). The sorcerer’s go-to boom. +1d6 per slot above 3rd.' },
    { name:'Lightning Bolt', tag:'Level 3', desc:'A 100-foot line of lightning deals 8d6 lightning damage (Dex save for half) to everything caught in it.' },
    { name:'Haste', tag:'Level 3 · Concentration', desc:'A willing creature gains doubled speed, +2 AC, advantage on Dexterity saves and one extra limited action each turn.' },
    { name:'Blight', tag:'Level 4', desc:'Necromantic energy drains a creature for 8d8 necrotic damage (Con save for half). Plants have disadvantage and take maximum damage.' },
    { name:'Wall of Fire', tag:'Level 4 · Concentration', desc:'Raise a wall of flame up to 60 feet long. Creatures on the searing side take 5d8 fire damage (Dex save for half) when it appears or ends their turn near it.' },
    { name:'Cure Wounds', tag:'Level 1', desc:'A creature you touch regains 1d8 + your spellcasting modifier hit points. +1d8 per slot above 1st.' },
    { name:'Healing Word', tag:'Level 1 · Bonus Action', desc:'A creature you can see regains 1d4 + your spellcasting modifier hit points at range, as a bonus action.' },
  ],
  bard: [
    { name:'Vicious Mockery', tag:'Cantrip', desc:'Unleash a string of insults laced with enchantment. The target takes 1d4 psychic damage (Wis save) and has disadvantage on its next attack roll. Scales with level.' },
    { name:'Dissonant Whispers', tag:'Level 1', desc:'A discordant melody only the target hears deals 3d6 psychic damage (Wis save for half) and forces it to flee on a failed save.' },
    { name:'Thunderwave', tag:'Level 1', desc:'A wave of force in a 15-foot cube deals 2d8 thunder damage (Con save for half) and pushes failed targets 10 feet away.' },
    { name:'Shatter', tag:'Level 2', desc:'A painful ringing erupts in a 10-foot-radius sphere, dealing 3d8 thunder damage (Con save for half). +1d8 per slot above 2nd.' },
    { name:'Crown of Madness', tag:'Level 2 · Concentration', desc:'A charmed humanoid takes 2d6 psychic damage each turn and is compelled to attack creatures you designate.' },
    { name:'Hypnotic Pattern', tag:'Level 3 · Concentration', desc:'A twisting pattern of colors charms and incapacitates creatures in a 30-foot cube (Wis save), leaving them unable to act.' },
    { name:'Thunder Step', tag:'Level 3', desc:'Teleport up to 90 feet; a thunderclap deals 3d10 thunder damage (Con save for half) to creatures near the space you left.' },
    { name:'Evard’s Black Tentacles', tag:'Level 4 · Concentration', desc:'Tentacles fill a 20-foot square, restraining creatures and dealing 3d6 bludgeoning damage (Dex save to avoid) each turn.' },
    { name:'Synaptic Static', tag:'Level 5', desc:'Psychic energy bursts in a 20-foot radius for 8d6 psychic damage (Int save for half) and muddles minds, imposing a d6 penalty for a minute.' },
    { name:'Healing Word', tag:'Level 1 · Bonus Action', desc:'Restore 1d4 + your spellcasting modifier hit points to a creature you can see, from across the battlefield.' },
  ],
  cleric: [
    { name:'Sacred Flame', tag:'Cantrip', desc:'Radiant flame descends on a target (Dex save). On a fail it takes 1d8 radiant damage, ignoring cover. Scales to 4d8 at 17th level.' },
    { name:'Guiding Bolt', tag:'Level 1', desc:'A shimmering bolt deals 4d6 radiant damage on a ranged spell attack hit, and the next attacker against the target has advantage.' },
    { name:'Bless', tag:'Level 1 · Concentration', desc:'Up to three creatures add 1d4 to their attack rolls and saving throws for the duration.' },
    { name:'Healing Word', tag:'Level 1 · Bonus Action', desc:'A creature you can see regains 1d4 + your spellcasting modifier hit points — the classic clutch heal.' },
    { name:'Cure Wounds', tag:'Level 1', desc:'Touch a creature to restore 1d8 + your spellcasting modifier hit points. +1d8 per slot above 1st.' },
    { name:'Spiritual Weapon', tag:'Level 2 · Bonus Action', desc:'Conjure a floating spectral weapon; as a bonus action each turn it makes a melee spell attack for 1d8 + your modifier force damage.' },
    { name:'Inflict Wounds', tag:'Level 1', desc:'On a melee spell attack hit, necrotic energy deals 3d10 damage. +1d10 per slot above 1st.' },
    { name:'Mass Healing Word', tag:'Level 3 · Bonus Action', desc:'Up to six creatures you can see each regain 1d4 + your spellcasting modifier hit points as a bonus action.' },
    { name:'Preserve Life', tag:'Channel Divinity', desc:'Restore hit points equal to five times your cleric level, divided among creatures within 30 feet (up to half their maximum each).' },
    { name:'Divine Strike', tag:'Feature', desc:'Once per turn, infuse a weapon hit with an extra 1d8 radiant (or elemental) damage, rising to 2d8 at 14th level.' },
  ],
  druid: [
    { name:'Produce Flame', tag:'Cantrip', desc:'A flickering flame lights your hand and can be hurled for 1d8 fire damage on a ranged spell attack. Scales with level.' },
    { name:'Moonbeam', tag:'Level 2 · Concentration', desc:'A silvery beam fills a 5-foot-radius cylinder; creatures entering or starting there take 2d10 radiant damage (Con save for half). Move it each turn.' },
    { name:'Flaming Sphere', tag:'Level 2 · Concentration', desc:'A rolling sphere of fire deals 2d6 fire damage (Dex save for half) and can be moved 30 feet as a bonus action to ram foes.' },
    { name:'Call Lightning', tag:'Level 3 · Concentration', desc:'Summon a storm cloud; each turn call a bolt for 3d10 lightning damage (Dex save for half) in a 5-foot radius — doubled outdoors in a storm.' },
    { name:'Erupting Earth', tag:'Level 3', desc:'Stone erupts in a 20-foot cube for 3d12 bludgeoning damage (Dex save for half), leaving difficult terrain behind.' },
    { name:'Ice Storm', tag:'Level 4', desc:'Rock-hard hail pounds a 20-foot radius for 2d8 bludgeoning + 4d6 cold damage (Dex save for half).' },
    { name:'Vitriolic Sphere', tag:'Level 4', desc:'A sphere of acid bursts for 10d4 acid damage (Dex save for half), with an additional 5d4 at the end of the target’s next turn.' },
    { name:'Flame Strike', tag:'Level 5', desc:'A column of divine fire deals 4d6 fire + 4d6 radiant damage (Dex save for half) in a 10-foot-radius cylinder.' },
    { name:'Insect Plague', tag:'Level 5 · Concentration', desc:'A 20-foot-radius swarm of locusts deals 4d10 piercing damage (Con save for half) and is difficult terrain that lingers.' },
    { name:'Blade Barrier', tag:'Level 6 · Concentration', desc:'A wall of whirling blades deals 6d10 slashing damage (Dex save for half) to any creature that enters or starts its turn within it.' },
  ],
  monk: [
    { name:'Martial Arts (Unarmed Strike)', tag:'Feature', desc:'Strike with fists or monk weapons using Dexterity, dealing 1d4 that scales to 1d10 by 17th level, plus a free bonus-action strike when you attack.' },
    { name:'Flurry of Blows', tag:'1 Ki · Bonus Action', desc:'After the Attack action, spend 1 ki to make two additional unarmed strikes as a bonus action.' },
    { name:'Patient Defense', tag:'1 Ki · Bonus Action', desc:'Spend 1 ki to take the Dodge action as a bonus action, imposing disadvantage on attacks against you.' },
    { name:'Step of the Wind', tag:'1 Ki · Bonus Action', desc:'Spend 1 ki to Dash or Disengage as a bonus action and double your jump distance this turn.' },
    { name:'Stunning Strike', tag:'1 Ki', desc:'On a melee hit, spend 1 ki to force a Constitution save or the target is stunned until the end of your next turn.' },
    { name:'Deflect Missiles', tag:'Reaction', desc:'Reduce ranged weapon damage by 1d10 + your Dexterity modifier + monk level; reduce it to 0 to catch and hurl the missile back for 1 ki.' },
    { name:'Shadow Step', tag:'Subclass · Bonus Action', desc:'Way of Shadow monks teleport up to 60 feet between dim light or darkness, gaining advantage on their next melee attack.' },
    { name:'Wholeness of Body', tag:'Subclass', desc:'Way of the Open Hand monks can heal themselves for three times their monk level as an action, once per long rest.' },
    { name:'Quivering Palm', tag:'3 Ki', desc:'On an unarmed hit, set up lethal vibrations. Later you can end them, forcing a Constitution save or the target drops to 0 hit points.' },
    { name:'Empty Body', tag:'4 Ki', desc:'Spend 4 ki to become invisible for 1 minute, gaining resistance to all damage except force.' },
  ],
  barbarian: [
    { name:'Rage', tag:'Bonus Action', desc:'Enter a fury for up to 1 minute: bonus melee damage, advantage on Strength checks and saves, and resistance to bludgeoning, piercing and slashing damage.' },
    { name:'Reckless Attack', tag:'Feature', desc:'Gain advantage on your Strength-based melee attacks this turn — but attacks against you have advantage until your next turn.' },
    { name:'Frenzy', tag:'Subclass', desc:'Berserkers can make a single melee attack as a bonus action on each of their turns while raging.' },
    { name:'Brutal Critical', tag:'Feature', desc:'Roll one extra weapon damage die on a critical hit (two at 13th level, three at 17th).' },
    { name:'Relentless Rage', tag:'Feature', desc:'When raging and dropped to 0 hit points, make a DC 10 Constitution save (rising each use) to stay standing at 1 hit point instead.' },
    { name:'Extra Attack', tag:'Feature', desc:'When you take the Attack action, attack twice instead of once.' },
    { name:'Feral Instinct', tag:'Feature', desc:'Advantage on initiative, and you can act normally on a surprise round as long as you rage first.' },
  ],
  paladin: [
    { name:'Divine Smite', tag:'Feature', desc:'On a melee hit, expend a spell slot to sear the target with 2d8 radiant damage (3d8+ at higher slots), +1d8 against undead and fiends.' },
    { name:'Lay on Hands', tag:'Feature', desc:'Draw from a pool of healing equal to five times your paladin level to restore hit points or cure a disease or poison by touch.' },
    { name:'Divine Favor', tag:'Level 1 · Concentration · Bonus Action', desc:'Your weapon strikes deal an extra 1d4 radiant damage for the duration.' },
    { name:'Bless', tag:'Level 1 · Concentration', desc:'Up to three allies add 1d4 to attack rolls and saving throws.' },
    { name:'Wrathful Smite', tag:'Level 1 · Concentration', desc:'Your next hit deals an extra 1d6 psychic damage and can frighten the target on a failed Wisdom save.' },
    { name:'Thunderous Smite', tag:'Level 1 · Concentration', desc:'Your next hit deals an extra 2d6 thunder damage and can push and knock the target prone (Strength save).' },
    { name:'Shield of Faith', tag:'Level 1 · Concentration · Bonus Action', desc:'Grant a creature within range +2 AC for up to 10 minutes.' },
    { name:'Banishing Smite', tag:'Level 5 · Concentration', desc:'Your next hit deals an extra 5d10 force damage and can banish a target reduced to 50 hit points or fewer.' },
    { name:'Vow of Enmity', tag:'Subclass · Bonus Action', desc:'Oath of Vengeance paladins gain advantage on attacks against a chosen foe for 1 minute.' },
    { name:'Aura of Protection', tag:'Feature', desc:'You and allies within 10 feet add your Charisma modifier to all saving throws.' },
  ],
  ranger: [
    { name:'Hunter’s Mark', tag:'Level 1 · Concentration · Bonus Action', desc:'Mark a target as your quarry; deal an extra 1d6 damage whenever you hit it, and gain advantage to track and find it.' },
    { name:'Ranged Weapon Attack', tag:'Attack', desc:'Loose an arrow or bolt using Dexterity for the attack and damage — the ranger’s bread and butter at range.' },
    { name:'Two-Weapon Fighting', tag:'Bonus Action', desc:'Attack with a light weapon in your off hand as a bonus action, adding your ability modifier to its damage with the right style.' },
    { name:'Colossus Slayer', tag:'Subclass', desc:'Hunters deal an extra 1d8 damage once per turn to any creature below its hit point maximum.' },
    { name:'Multiattack (Volley)', tag:'Subclass', desc:'Make a ranged attack against any number of creatures within 10 feet of a point you can see.' },
    { name:'Whirlwind Attack', tag:'Subclass', desc:'Make a melee attack against every creature within 5 feet of you at once.' },
    { name:'Escape the Horde', tag:'Feature', desc:'Opportunity attacks against you are made with disadvantage, letting you slip free of a crowd.' },
    { name:'Ambuscade (Dread Ambusher)', tag:'Subclass', desc:'Gloom Stalkers add their Wisdom modifier to initiative and make an extra attack on the first turn of combat.' },
    { name:'Evasion', tag:'Feature', desc:'On a Dexterity save against area damage, take no damage on a success and only half on a failure.' },
    { name:'Foe Slayer', tag:'Feature', desc:'Once per turn add your Wisdom modifier to an attack or damage roll against a creature.' },
  ],
  rogue: [
    { name:'Sneak Attack', tag:'Feature', desc:'Once per turn, deal extra damage to a target you have advantage against (or one next to another enemy). Scales from 5d6 at 9th level to 10d6 at 19th.' },
    { name:'Cunning Action', tag:'Bonus Action', desc:'Dash, Disengage or Hide as a bonus action every turn — the engine behind the rogue’s slippery mobility.' },
    { name:'Uncanny Dodge', tag:'Reaction', desc:'When an attacker you can see hits you, use your reaction to halve the damage.' },
    { name:'Evasion', tag:'Feature', desc:'On a Dexterity save against area damage, take no damage on a success and only half on a failure.' },
    { name:'Two-Weapon Fighting', tag:'Bonus Action', desc:'Attack with a light off-hand weapon as a bonus action — a reliable way to land Sneak Attack.' },
    { name:'Assassinate', tag:'Subclass', desc:'Assassins have advantage against any creature that hasn’t acted yet, and any hit on a surprised creature is a critical hit.' },
    { name:'Death Strike', tag:'Subclass', desc:'When you hit a surprised creature, it must make a Constitution save or take double damage from the attack.' },
    { name:'Shadow Step', tag:'Subclass · Bonus Action', desc:'Arcane Tricksters and Shadow rogues teleport between shadows, gaining advantage on the next melee attack.' },
    { name:'Stroke of Luck', tag:'Feature', desc:'Once per short rest, turn a missed attack into a hit or a failed ability check into a natural 20.' },
  ],
  warlock: [
    { name:'Eldritch Blast', tag:'Cantrip', desc:'Streaking beams of force deal 1d10 each on ranged spell attacks — two beams at 5th level, three at 11th, four at 17th. The warlock’s signature.' },
    { name:'Hex', tag:'Level 1 · Concentration · Bonus Action', desc:'Curse a creature to take an extra 1d6 necrotic damage from your hits and grant disadvantage on an ability of your choice.' },
    { name:'Hunger of Hadar', tag:'Level 3 · Concentration', desc:'Open a void of clutching darkness; creatures take 2d6 cold damage on entry and 2d6 acid damage if they start their turn inside.' },
    { name:'Blight', tag:'Level 4', desc:'Drain a creature of vitality for 8d8 necrotic damage (Con save for half). Plants suffer disadvantage and maximum damage.' },
    { name:'Shadow of Moil', tag:'Level 4 · Concentration', desc:'Shadows cloak you, heavily obscuring you; attackers who hit you in melee take 2d8 necrotic damage.' },
    { name:'Hurl Through Hell', tag:'Subclass', desc:'The Fiend’s capstone flings a target through the Nine Hells for 10d10 psychic damage before it reappears, shaken to the core.' },
    { name:'Investiture of Flame', tag:'Level 6 · Concentration', desc:'Wreathe yourself in fire: gain fire resistance, deal 1d10 fire damage to adjacent foes, and shoot a fiery line for 4d6.' },
    { name:'Healing Elixir', tag:'Level 1', desc:'Conjure a shimmering elixir; a creature can drink it to regain 2d4 + 2 hit points.' },
    { name:'Life Transference', tag:'Level 3', desc:'Sacrifice your vitality — take 4d8 necrotic damage to heal another creature for twice that amount.' },
  ],
};

/* ------------------------------------------------------------------ */
/*  WEAPONS (compendium)                                              */
/* ------------------------------------------------------------------ */
const WEAPONS = [
  { name:'Greatsword +1 / +2 / +3', dmg:'2d6 slashing (+bonus)', note:'A heavy blade with a magical bonus to attack and damage rolls.' },
  { name:'Greataxe +1 / +2 / +3', dmg:'1d12 slashing (+bonus)', note:'Brutal and enchanted; crits hit especially hard for Barbarians.' },
  { name:'Glaive', dmg:'1d10 slashing', note:'Reach weapon — strike enemies up to 10 feet away.' },
  { name:'Halberd', dmg:'1d10 slashing', note:'Reach weapon that pairs with Polearm Master maneuvers.' },
  { name:'Heavy Crossbow', dmg:'1d10 piercing', note:'Hard-hitting ranged option with the loading property.' },
  { name:'Lance', dmg:'1d12 piercing', note:'Reach weapon that shines when wielded from a mount.' },
  { name:'Dagger', dmg:'1d4 piercing', note:'Light, finesse and throwable — the caster’s trusty sidearm.' },
  { name:'Stormcaller Bow', dmg:'1d8 piercing + 1d4 lightning', note:'Carved from a thunderstruck tree; may briefly stun struck foes.' },
  { name:'Astral Lance', dmg:'1d10 piercing', note:'Pierces magical defenses — deadly against ethereal and incorporeal foes.' },
  { name:'Echoing Hammer', dmg:'1d10 bludgeoning', note:'Spend charges to add 1d6 thunder damage to nearby enemies.' },
];
const MARTIAL_WEAPONS = ['Greatsword +1','Greatsword +2','Greatsword +3','Greataxe +1','Greataxe +2','Greataxe +3','Glaive','Halberd','Heavy Crossbow','Lance','Stormcaller Bow','Astral Lance','Echoing Hammer'];

/* ------------------------------------------------------------------ */
/*  GAME MATH                                                         */
/* ------------------------------------------------------------------ */
const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const abilityMod = (score) => Math.floor((score - 10) / 2);
const signed = (n) => (n >= 0 ? `+${n}` : `${n}`);

function proficiencyBonus(level) {
  if (level >= 17) return 6;
  if (level >= 13) return 5;
  return 4; // 10-12 in this app's supported range
}

function maxHitPoints(cls, level) {
  const over = level - 10;
  switch (cls) {
    case 'wizard': case 'sorcerer':                      return 50 + over * 3;
    case 'bard':                                         return 58 + over * 4;
    case 'rogue': case 'cleric': case 'warlock':
    case 'druid': case 'monk':                           return 70 + over * 4;
    case 'ranger': case 'fighter': case 'paladin':       return 89 + over * 5;
    case 'barbarian':                                    return 120 + over * 6;
    default:                                             return 60 + over * 4;
  }
}

// Full caster (bard, cleric, druid, sorcerer, wizard), levels 10-20.
// Each entry is [L1, L2, ...] counts.
const FULL_CASTER = {
  10:[4,3,3,3,2], 11:[4,3,3,3,2,1], 12:[4,3,3,3,2,1], 13:[4,3,3,3,2,1,1], 14:[4,3,3,3,2,1,1],
  15:[4,3,3,3,2,1,1,1], 16:[4,3,3,3,2,1,1,1], 17:[4,3,3,3,2,1,1,1,1], 18:[4,3,3,3,3,1,1,1,1],
  19:[4,3,3,3,3,2,1,1,1], 20:[4,3,3,3,3,2,2,1,1],
};
// Half caster (paladin, ranger), levels 10-20.
const HALF_CASTER = {
  10:[4,3,2], 11:[4,3,3], 12:[4,3,3], 13:[4,3,3,1], 14:[4,3,3,1], 15:[4,3,3,2],
  16:[4,3,3,2], 17:[4,3,3,3,1], 18:[4,3,3,3,1], 19:[4,3,3,3,2], 20:[4,3,3,3,2],
};
// Warlock pact slots, levels 10-20 (all slots are cast at the same level).
const PACT = {
  10:{count:2, slot:5}, 11:{count:3, slot:5}, 12:{count:3, slot:5}, 13:{count:3, slot:5}, 14:{count:3, slot:5},
  15:{count:3, slot:5}, 16:{count:3, slot:5}, 17:{count:4, slot:5}, 18:{count:4, slot:5}, 19:{count:4, slot:5}, 20:{count:4, slot:5},
};

// Returns spell slots as [{level, total}] for the given class/level, or null.
function spellSlots(cls, level) {
  const c = classById(cls);
  if (!c) return null;
  if (c.caster === 'full') return (FULL_CASTER[level] || []).map((n, i) => ({ level: i + 1, total: n }));
  if (c.caster === 'half') return (HALF_CASTER[level] || []).map((n, i) => ({ level: i + 1, total: n }));
  if (c.caster === 'pact') { const p = PACT[level]; return p ? [{ level: p.slot, total: p.count }] : []; }
  return null;
}

// Non-spell resource pools (rage, ki, superiority dice, sneak-attack die label).
function classResource(cls, level) {
  switch (cls) {
    case 'barbarian': {
      const rages = level >= 20 ? 99 : level >= 17 ? 6 : level >= 12 ? 5 : 4;
      return { label:'Rages', kind:'pips', total:rages, unlimited: level >= 20, note:`Rage damage ${signed(level >= 16 ? 4 : 3)}` };
    }
    case 'monk':
      return { label:'Ki Points', kind:'pips', total:level, note:`Martial Arts die ${level >= 17 ? '1d10' : level >= 11 ? '1d8' : '1d6'}` };
    case 'fighter':
      return { label:'Superiority Dice', kind:'pips', total: level >= 16 ? 6 : 5, note:'d8 · Battle Master maneuvers' };
    case 'rogue': {
      const d = { 10:5, 11:6, 12:6, 13:7, 14:7, 15:8, 16:8, 17:9, 18:9, 19:10, 20:10 }[level];
      return { label:'Sneak Attack', kind:'text', text:`${d}d6`, note:'Once per turn' };
    }
    default: return null;
  }
}

// Base armor class before Dexterity, by class archetype.
function armorClass(cls) {
  const heavy = ['fighter','paladin'];
  const medium = ['barbarian','ranger','cleric','druid'];
  if (heavy.includes(cls)) return rand(18, 20);
  if (medium.includes(cls)) return rand(15, 17);
  return rand(13, 16);
}

/* ------------------------------------------------------------------ */
/*  ABILITY SCORE GENERATION                                          */
/*  Roll scores, apply racial bonuses, then high-level ability score   */
/*  improvements to the primary stat. Returns scores + modifiers.      */
/* ------------------------------------------------------------------ */
function rollAbilities(cls, race, level) {
  const c = classById(cls);
  const r = raceById(race);
  const scores = {};
  ABILITIES.forEach(a => { scores[a] = rand(10, 14); });

  // Primary ability starts strong.
  if (c && c.primary) scores[c.primary] = rand(15, 17);

  // Racial ability score increases (applied to scores).
  if (r) {
    Object.entries(r.bonuses || {}).forEach(([a, v]) => { scores[a] += v; });
    if (r.flex) {
      const pool = ABILITIES.filter(a => !(r.flex.exclude || []).includes(a));
      shuffle(pool);
      for (let i = 0; i < r.flex.count; i++) scores[pool[i]] += r.flex.amount;
    }
  }

  // High-level Ability Score Improvements, funneled into the primary stat (cap 20).
  let asi = 0;
  if (level >= 12) asi += 2;
  if (level >= 16) asi += 2;
  if (level >= 19) asi += 2;
  if (c && c.primary) scores[c.primary] = Math.min(20, scores[c.primary] + asi);

  const mods = {};
  ABILITIES.forEach(a => { mods[a] = abilityMod(scores[a]); });
  return { scores, mods };
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function pickWeapon(cls) {
  const martial = ['fighter','ranger','barbarian','paladin','rogue'];
  return martial.includes(cls) ? MARTIAL_WEAPONS[rand(0, MARTIAL_WEAPONS.length - 1)] : 'Dagger';
}

/* ================================================================== */
/*  INLINE SVG ICONS                                                  */
/* ================================================================== */
const ICONS = {
  heart: '<path d="M12 21s-7.5-4.9-10-9.2C.4 8.6 1.9 5 5.2 5c2 0 3.3 1.2 3.9 2.2C9.7 6.2 11 5 13 5c3.3 0 4.8 3.6 3.2 6.8C19.5 16.1 12 21 12 21z"/>',
  shield: '<path d="M12 2l8 3v6c0 5-3.4 8.6-8 11-4.6-2.4-8-6-8-11V5l8-3z"/>',
  dice: '<rect x="4" y="4" width="16" height="16" rx="3"/><circle cx="9" cy="9" r="1.3" fill="#14101f"/><circle cx="15" cy="15" r="1.3" fill="#14101f"/><circle cx="15" cy="9" r="1.3" fill="#14101f"/><circle cx="9" cy="15" r="1.3" fill="#14101f"/>',
  bolt: '<path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z"/>',
  book: '<path d="M4 4c2-1 6-1 8 .5C14 3 18 3 20 4v15c-2-1-6-1-8 .5C10 18 6 18 4 19V4z"/>',
  sparkles: '<path d="M12 3l1.8 4.9L19 9.7l-5.2 1.8L12 16l-1.8-4.5L5 9.7l5.2-1.8L12 3z"/><path d="M18 14l.9 2.3L21 17l-2.1.7L18 20l-.9-2.3L15 17l2.1-.7L18 14z"/>',
  chevron: '<path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>',
  check: '<path d="M5 13l4 4L19 7" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>',
  close: '<path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"/>',
  refresh: '<path d="M20 11a8 8 0 10-1.6 5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"/><path d="M20 4v5h-5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>',
  plus: '<path d="M12 5v14M5 12h14" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/>',
  minus: '<path d="M5 12h14" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round"/>',
  sword: '<path d="M14.5 3H21v6.5L10 20.5l-2.5-2.5L18.5 7V3zM4 15l3 3-2 3H2v-3l2-3z"/>',
  scroll: '<path d="M6 4h11a2 2 0 012 2v11a3 3 0 01-3 3H7a3 3 0 01-3-3V6a2 2 0 012-2z"/><path d="M8 8h8M8 12h8M8 16h5" fill="none" stroke="#f6ecd3" stroke-width="1.4" stroke-linecap="round"/>',
  arrow: '<path d="M4 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>',
  save: '<path d="M5 3h11l3 3v13a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2z"/><path d="M8 3v5h7V3M8 21v-6h8v6" fill="none" stroke="#f6ecd3" stroke-width="1.5" stroke-linejoin="round"/>',
};
function icon(name, cls = '') {
  return `<svg class="ico ${cls}" viewBox="0 0 24 24" aria-hidden="true">${ICONS[name] || ''}</svg>`;
}

/* ================================================================== */
/*  STATE                                                             */
/* ================================================================== */
const state = {
  race: null,
  cls: null,
  level: 10,
  character: null, // the forged character object
};

/* ================================================================== */
/*  PICKER RENDERING                                                  */
/* ================================================================== */
function bonusLabel(r) {
  const parts = Object.entries(r.bonuses || {}).map(([a, v]) => `${signed(v)} ${ABBR[a]}`);
  if (r.flex) parts.push(`${signed(r.flex.amount)} ×${r.flex.count}`);
  return parts.join(' · ');
}

function renderRaceGrid() {
  const grid = document.getElementById('race-grid');
  grid.innerHTML = RACES.map(r => `
    <button class="pick-card" data-race="${r.id}" aria-pressed="false">
      <span class="pick-art" style="--art:url('${raceThumb(r.id)}')"></span>
      <span class="pick-check">${icon('check')}</span>
      <span class="pick-label">
        <span class="pick-name">${r.name}</span>
        <span class="pick-sub">${bonusLabel(r)}</span>
      </span>
    </button>`).join('');
  grid.querySelectorAll('[data-race]').forEach(el =>
    el.addEventListener('click', () => selectRace(el.dataset.race)));
}

function renderClassGrid() {
  const grid = document.getElementById('class-grid');
  grid.innerHTML = CLASSES.map(c => `
    <button class="pick-card" data-class="${c.id}" aria-pressed="false">
      <span class="pick-art" style="--art:url('${classThumb(c.id)}')"></span>
      <span class="pick-check">${icon('check')}</span>
      <span class="pick-label">
        <span class="pick-name">${c.name}</span>
        <span class="pick-sub">${c.role}</span>
      </span>
    </button>`).join('');
  grid.querySelectorAll('[data-class]').forEach(el =>
    el.addEventListener('click', () => selectClass(el.dataset.class)));
}

function selectRace(id) {
  state.race = id;
  document.querySelectorAll('[data-race]').forEach(el => {
    const on = el.dataset.race === id;
    el.classList.toggle('selected', on);
    el.setAttribute('aria-pressed', on);
  });
  const r = raceById(id);
  document.getElementById('race-pick').textContent = r ? r.name : '';
  refreshForgeButton();
}

function selectClass(id) {
  state.cls = id;
  document.querySelectorAll('[data-class]').forEach(el => {
    const on = el.dataset.class === id;
    el.classList.toggle('selected', on);
    el.setAttribute('aria-pressed', on);
  });
  const c = classById(id);
  document.getElementById('class-pick').textContent = c ? c.name : '';
  refreshForgeButton();
}

/* ----- Level stepper (no native select) --------------------------- */
const LEVEL_MIN = 10, LEVEL_MAX = 20;
function changeLevel(delta) {
  state.level = Math.min(LEVEL_MAX, Math.max(LEVEL_MIN, state.level + delta));
  document.getElementById('level-value').textContent = state.level;
  document.getElementById('level-minus').disabled = state.level <= LEVEL_MIN;
  document.getElementById('level-plus').disabled = state.level >= LEVEL_MAX;
  // If a character is already on screen, keep it in sync live.
  if (state.character) forgeCharacter(true);
}

function refreshForgeButton() {
  const btn = document.getElementById('forge-btn');
  const ready = state.race && state.cls;
  btn.disabled = !ready;
  btn.classList.toggle('ready', !!ready);
}

/* ================================================================== */
/*  FORGE — build the character object                                */
/* ================================================================== */
function forgeCharacter(keepAbilities = false) {
  if (!state.race || !state.cls) return;
  const race = state.race, cls = state.cls, level = state.level;
  const c = classById(cls), r = raceById(race);

  // Reroll abilities on a fresh forge; on a live level change, keep them.
  const ability = (keepAbilities && state.character) ? state.character.ability : rollAbilities(cls, race, level);

  const prof = proficiencyBonus(level);
  const spellMod = c.save ? ability.mods[c.save] : 0;
  const character = {
    race, cls, level,
    name: (keepAbilities && state.character) ? state.character.name : '',
    savedId: (keepAbilities && state.character) ? state.character.savedId : null,
    ability,
    prof,
    ac: (keepAbilities && state.character) ? state.character.ac : armorClass(cls),
    speed: r.speed,
    initiative: ability.mods.dexterity,
    weapon: (keepAbilities && state.character) ? state.character.weapon : pickWeapon(cls),
    maxHp: maxHitPoints(cls, level),
    spellHit: c.save ? prof + spellMod : null,
    spellDC: c.save ? 8 + prof + spellMod : null,
    slots: spellSlots(cls, level),
    resource: classResource(cls, level),
    sorceryPoints: cls === 'sorcerer' ? level : null,
    portrait: portrait(race, cls),
  };
  character.curHp = character.maxHp;

  state.character = character;
  renderSheet();
  if (!keepAbilities) {
    document.getElementById('sheet').scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

/* ================================================================== */
/*  CHARACTER SHEET RENDERING                                          */
/* ================================================================== */
function renderSheet() {
  const ch = state.character;
  if (!ch) return;
  const c = classById(ch.cls), r = raceById(ch.race);
  const sheet = document.getElementById('sheet');
  sheet.classList.remove('hidden');

  sheet.innerHTML = `
    <div class="sheet-grid">
      <aside class="sheet-portrait">
        <div class="portrait-frame" onclick="openLightbox()">
          <img src="${ch.portrait}" alt="${r.name} ${c.name}">
          <span class="portrait-zoom">${icon('sparkles')} View</span>
        </div>
        <div class="portrait-title">
          <h2>${ch.name ? escapeHtml(ch.name) : r.name + ' ' + c.name}</h2>
          ${ch.name ? `<p class="portrait-sub">${r.name} ${c.name}</p>` : ''}
          <p class="portrait-role">Level ${ch.level} · ${c.role}</p>
        </div>
        <div class="race-traits">
          ${r.traits.map(t => `<span class="trait-chip">${t}</span>`).join('')}
        </div>
        <button class="btn-reforge" onclick="forgeCharacter()">${icon('refresh')} Reroll stats</button>
        <div class="save-row">
          <input id="hero-name" class="hero-name-input" type="text" maxlength="40"
                 placeholder="Name your hero…" value="${ch.name ? escapeAttr(ch.name) : ''}"
                 onkeydown="if(event.key==='Enter')saveHero()">
          <button class="btn-save ${ch.savedId ? 'saved' : ''}" onclick="saveHero()">${icon('save')} Save</button>
        </div>
      </aside>

      <div class="sheet-main">
        <section class="panel">
          <h3 class="panel-title">Ability Scores</h3>
          <div class="ability-row">
            ${ABILITIES.map(a => abilityStone(a, ch.ability)).join('')}
          </div>
        </section>

        <section class="panel">
          <h3 class="panel-title">Combat</h3>
          <div class="combat-grid">
            ${statTile(icon('shield','gold'), 'Armor Class', ch.ac)}
            ${statTile(icon('dice','gold'), 'Proficiency', signed(ch.prof))}
            ${statTile(icon('bolt','gold'), 'Initiative', signed(ch.initiative))}
            ${statTile(icon('sword','gold'), 'Speed', ch.speed + ' ft')}
            ${ch.spellHit !== null ? statTile(icon('sparkles','gold'), 'Spell Attack', signed(ch.spellHit)) : ''}
            ${ch.spellDC !== null ? statTile(icon('scroll','gold'), 'Spell Save DC', ch.spellDC) : ''}
          </div>
          <div class="weapon-line">${icon('sword','gold')} <span>Weapon</span> <strong>${ch.weapon}</strong></div>
          ${hpBlock(ch)}
        </section>

        ${resourceBlock(ch)}

        <section class="panel">
          <h3 class="panel-title">Actions &amp; Spells <span class="panel-count">${(ACTIONS[ch.cls]||[]).length}</span></h3>
          <div class="action-list">
            ${(ACTIONS[ch.cls] || []).map(actionCard).join('')}
          </div>
        </section>
      </div>
    </div>`;

  wireSheetInteractions();
}

function abilityStone(key, ability) {
  const primary = classById(state.character.cls).primary === key;
  return `
    <div class="ability-stone ${primary ? 'primary' : ''}">
      <span class="ability-abbr">${ABBR[key]}</span>
      <span class="ability-mod">${signed(ability.mods[key])}</span>
      <span class="ability-score">${ability.scores[key]}</span>
    </div>`;
}

function statTile(ic, label, value) {
  return `<div class="stat-tile">${ic}<span class="stat-label">${label}</span><span class="stat-value">${value}</span></div>`;
}

function hpBlock(ch) {
  const pct = Math.max(0, Math.min(100, Math.round((ch.curHp / ch.maxHp) * 100)));
  return `
    <div class="hp-block">
      <div class="hp-head">
        <span>${icon('heart','ember')} Hit Points</span>
        <span class="hp-num"><span id="hp-current">${ch.curHp}</span> / ${ch.maxHp}</span>
      </div>
      <div class="hp-bar"><div class="hp-fill" id="hp-fill" style="width:${pct}%"></div></div>
      <div class="hp-controls">
        <button class="hp-btn dmg" onclick="adjustHp('damage')">${icon('minus')} Damage</button>
        <button class="hp-btn heal" onclick="adjustHp('heal')">${icon('plus')} Heal</button>
        <button class="hp-btn rest" onclick="adjustHp('full')">${icon('refresh')} Full</button>
      </div>
    </div>`;
}

function resourceBlock(ch) {
  const blocks = [];

  // Spell / pact slots
  if (ch.slots && ch.slots.length) {
    const label = ch.cls === 'warlock' ? 'Pact Magic' : 'Spell Slots';
    const rows = ch.slots.map(s => `
      <div class="slot-row">
        <span class="slot-label">Level ${s.level}</span>
        <span class="pips" data-pips="slot-${s.level}">
          ${pipDots(s.total)}
        </span>
      </div>`).join('');
    blocks.push(`<section class="panel"><h3 class="panel-title">${label}</h3><div class="slot-list">${rows}</div>
      <p class="panel-hint">Tap a rune to expend a slot; tap again to recover it.</p></section>`);
  }

  // Sorcery points
  if (ch.sorceryPoints !== null) {
    blocks.push(`<section class="panel"><h3 class="panel-title">Sorcery Points</h3>
      <div class="slot-row"><span class="slot-label">Font of Magic</span>
      <span class="pips" data-pips="sorcery">${pipDots(ch.sorceryPoints)}</span></div>
      <p class="panel-hint">Convert into extra slots or fuel Metamagic.</p></section>`);
  }

  // Martial resource (rage / ki / superiority dice / sneak attack)
  if (ch.resource) {
    const res = ch.resource;
    let body;
    if (res.kind === 'pips') {
      body = res.unlimited
        ? `<div class="slot-row"><span class="slot-label">${res.note}</span><span class="unlimited-tag">${icon('sparkles')} Unlimited</span></div>`
        : `<div class="slot-row"><span class="slot-label">${res.note || ''}</span><span class="pips" data-pips="resource">${pipDots(res.total)}</span></div>`;
    } else {
      body = `<div class="slot-row"><span class="slot-label">${res.note || ''}</span><span class="big-value">${res.text}</span></div>`;
    }
    blocks.push(`<section class="panel"><h3 class="panel-title">${res.label}</h3>${body}</section>`);
  }

  return blocks.join('');
}

function pipDots(n) {
  let out = '';
  for (let i = 0; i < n; i++) out += `<button class="pip" aria-label="resource point" data-i="${i}"></button>`;
  return out;
}

function actionCard(a) {
  return `
    <div class="action-card">
      <button class="action-head" aria-expanded="false">
        <span class="action-name">${a.name}</span>
        <span class="action-tag">${a.tag}</span>
        <span class="action-caret">${icon('chevron')}</span>
      </button>
      <div class="action-body"><p>${a.desc}</p></div>
    </div>`;
}

/* ================================================================== */
/*  SHEET INTERACTIONS                                                */
/* ================================================================== */
function wireSheetInteractions() {
  // Accordion action cards
  document.querySelectorAll('.action-head').forEach(head => {
    head.addEventListener('click', () => {
      const open = head.getAttribute('aria-expanded') === 'true';
      head.setAttribute('aria-expanded', String(!open));
      head.closest('.action-card').classList.toggle('open', !open);
    });
  });

  // Pip trackers (slots, sorcery, rage, ki, superiority dice)
  document.querySelectorAll('.pips').forEach(group => {
    group.querySelectorAll('.pip').forEach(pip => {
      pip.addEventListener('click', () => pip.classList.toggle('spent'));
    });
  });
}

// Hit-point adjustments via a themed inline prompt.
function adjustHp(kind) {
  const ch = state.character;
  if (!ch) return;
  if (kind === 'full') {
    ch.curHp = ch.maxHp;
  } else {
    const amtRaw = prompt(kind === 'damage' ? 'Damage taken:' : 'Hit points restored:', '');
    const amt = parseInt(amtRaw, 10);
    if (isNaN(amt)) return;
    ch.curHp = kind === 'damage' ? ch.curHp - amt : Math.min(ch.maxHp, ch.curHp + amt);
  }
  const cur = document.getElementById('hp-current');
  const fill = document.getElementById('hp-fill');
  cur.textContent = ch.curHp;
  const pct = Math.max(0, Math.min(100, Math.round((ch.curHp / ch.maxHp) * 100)));
  fill.style.width = pct + '%';
  fill.classList.toggle('critical', pct <= 25 && ch.curHp > 0);
  fill.classList.toggle('downed', ch.curHp <= 0);
}

/* ================================================================== */
/*  PORTRAIT LIGHTBOX                                                 */
/* ================================================================== */
function openLightbox() {
  const ch = state.character;
  if (!ch) return;
  const lb = document.getElementById('lightbox');
  document.getElementById('lightbox-img').src = ch.portrait;
  lb.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  document.getElementById('lightbox').classList.remove('open');
  document.body.style.overflow = '';
}

/* ================================================================== */
/*  COMPENDIUM DRAWER                                                 */
/* ================================================================== */
function buildCompendium() {
  // Spells & actions grouped by class
  const spells = CLASSES.map(c => `
    <div class="comp-group">
      <h4 class="comp-class">${c.name}</h4>
      ${(ACTIONS[c.id] || []).map(a => `
        <div class="comp-entry">
          <div class="comp-entry-head"><strong>${a.name}</strong><span class="action-tag">${a.tag}</span></div>
          <p>${a.desc}</p>
        </div>`).join('')}
    </div>`).join('');

  const weapons = WEAPONS.map(w => `
    <div class="comp-entry">
      <div class="comp-entry-head"><strong>${w.name}</strong><span class="action-tag">${w.dmg}</span></div>
      <p>${w.note}</p>
    </div>`).join('');

  document.getElementById('comp-spells').innerHTML = spells;
  document.getElementById('comp-weapons').innerHTML = weapons;
}

function showScrim(on) { document.getElementById('scrim').classList.toggle('show', on); }

function openDrawer(id) {
  const el = document.getElementById(id);
  const wasOpen = el.classList.contains('open');
  closeAllDrawers();
  if (!wasOpen) {
    el.classList.add('open');
    showScrim(true);
    document.body.style.overflow = 'hidden';
  }
}
function closeAllDrawers() {
  document.getElementById('heroes').classList.remove('open');
  document.getElementById('compendium').classList.remove('open');
  showScrim(false);
  document.body.style.overflow = '';
}
function toggleCompendium() { openDrawer('compendium'); }
function closeCompendium() { closeAllDrawers(); }
function toggleHeroes() { renderHeroes(); openDrawer('heroes'); }
function closeHeroes() { closeAllDrawers(); }

function showCompTab(tab) {
  document.querySelectorAll('.comp-tab').forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
  document.getElementById('comp-spells').classList.toggle('hidden', tab !== 'spells');
  document.getElementById('comp-weapons').classList.toggle('hidden', tab !== 'weapons');
}

/* ================================================================== */
/*  SAVED HEROES (localStorage)                                        */
/* ================================================================== */
const HERO_KEY = 'arcanum:heroes';

function loadHeroes() {
  try { return JSON.parse(localStorage.getItem(HERO_KEY)) || []; }
  catch (e) { return []; }
}
function persistHeroes(list) {
  try { localStorage.setItem(HERO_KEY, JSON.stringify(list)); }
  catch (e) { /* storage unavailable (private mode / file://) — ignore */ }
}

function saveHero() {
  const ch = state.character;
  if (!ch) return;
  const input = document.getElementById('hero-name');
  const typed = input ? input.value.trim() : '';
  ch.name = typed || `${raceById(ch.race).name} ${classById(ch.cls).name}`;
  if (!ch.savedId) ch.savedId = 'h' + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);

  const heroes = loadHeroes();
  const record = Object.assign({}, ch, { id: ch.savedId, savedAt: Date.now() });
  const idx = heroes.findIndex(h => h.id === ch.savedId);
  if (idx >= 0) heroes[idx] = record; else heroes.unshift(record);
  persistHeroes(heroes);

  renderHeroes();
  renderSheet();
  toast(idx >= 0 ? 'Hero updated in your roster' : 'Hero saved to your roster');
}

function loadHero(id) {
  const rec = loadHeroes().find(h => h.id === id);
  if (!rec) return;
  const ch = Object.assign({}, rec);
  ch.savedId = rec.id;
  state.character = ch;
  state.race = ch.race; state.cls = ch.cls; state.level = ch.level;

  selectRace(ch.race);
  selectClass(ch.cls);
  document.getElementById('level-value').textContent = ch.level;
  document.getElementById('level-minus').disabled = ch.level <= LEVEL_MIN;
  document.getElementById('level-plus').disabled = ch.level >= LEVEL_MAX;

  renderSheet();
  closeAllDrawers();
  document.getElementById('sheet').scrollIntoView({ behavior: 'smooth', block: 'start' });
  toast(`Summoned ${ch.name}`);
}

function deleteHero(id) {
  persistHeroes(loadHeroes().filter(h => h.id !== id));
  if (state.character && state.character.savedId === id) state.character.savedId = null;
  renderHeroes();
}

function renderHeroes() {
  const heroes = loadHeroes();
  const badge = document.getElementById('heroes-badge');
  if (badge) {
    badge.textContent = heroes.length ? heroes.length : '';
    badge.classList.toggle('zero', heroes.length === 0);
  }
  const list = document.getElementById('hero-list');
  if (!list) return;
  if (!heroes.length) {
    list.innerHTML = `<p class="hero-empty">No heroes saved yet.<br>Forge one and press Save.</p>`;
    return;
  }
  list.innerHTML = heroes.map(h => `
    <div class="hero-card">
      <img class="hero-thumb" src="${h.portrait}" alt="">
      <div class="hero-meta">
        <strong>${escapeHtml(h.name)}</strong>
        <span>${raceById(h.race).name} ${classById(h.cls).name} · Level ${h.level}</span>
      </div>
      <div class="hero-actions">
        <button class="hero-btn load" title="Summon this hero" onclick="loadHero('${h.id}')">${icon('arrow')}</button>
        <button class="hero-btn del" title="Delete" onclick="deleteHero('${h.id}')">${icon('close')}</button>
      </div>
    </div>`).join('');
}

/* ================================================================== */
/*  SMALL HELPERS                                                      */
/* ================================================================== */
let toastTimer;
function toast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2200);
}
function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
}
function escapeAttr(s) { return escapeHtml(s); }

/* ================================================================== */
/*  INIT                                                              */
/* ================================================================== */
document.addEventListener('DOMContentLoaded', () => {
  renderRaceGrid();
  renderClassGrid();
  buildCompendium();
  renderHeroes();
  document.getElementById('level-value').textContent = state.level;
  document.getElementById('level-minus').disabled = state.level <= LEVEL_MIN;

  // Close overlays with Escape.
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') { closeLightbox(); closeAllDrawers(); }
  });
});

// Register the service worker for offline / installable PWA support.
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js').catch(() => { /* unsupported context (e.g. file://) */ });
  });
}
