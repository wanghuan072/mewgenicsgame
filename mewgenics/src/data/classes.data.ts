export default [



  {
    id: 1,
    slug: 'mewgenics-collarless-class-guide',
    title: 'Collarless',
    description: "It's a cat! The base class for all cats in Mewgenics before they are given collars, featuring unique basic actions and specific item synergies.",
    publishDate: '2026-03-09',
    imageUrl: '/images/classes/classes-01.webp',
    imageAlt: 'Mewgenics Collarless Class',
    seo: {
      title: 'Mewgenics Collarless Class Guide: Abilities, Stats & Strategies',
      description: 'Discover the Collarless class in Mewgenics. Learn about Melee, Short Shot, and Lobbed Shot basic attacks, mid-adventure cat mechanics, and skill synergies.',
      keywords: ['Mewgenics', 'Collarless Class', 'Cat Adventure', 'Mewgenics Guide', 'Mewgenics Abilities', 'Skill Share'],
    },
    stats: {
      buffs: [{ label: 'None', value: '0' }],
      debuffs: [{ label: 'None', value: '0' }],
      levelUp: [{ label: 'Any Stat', value: 'Any' }],
    },
    detailsHtml: `
      <h2>Collar</h2>
      <p>Collarless is the class all cats have before they are given collars.</p>

      <h2>Overview</h2>
      <p>Collarless cats receive no positive or negative stat changes, and only learn Collarless abilities, which are also offered to all other classes. Therefore Collarless cats have the smallest ability pool of all classes. Although it can be difficult for Collarless cats to fill a particular role, Collarless abilities serve a wide variety of purposes including offense, support, and utility, and typically interact with fundamental mechanics that are generally useful for all cats.</p>
      <p>The Collarless class is unique in that it can be "assigned" to cats without the use of a collar, allowing the player to depart with any number of Collarless cats. This is not possible for other classes unless the player buys a Blank Collar from Tracy or departs with a cat that already has a collar—possible if, for example, a cat is transformed into a kitten mid-adventure, allowing it to return home without being retired.</p>

      <h2>Basic Action</h2>
      <p>Collarless cats are unusual for having three different possible starting attacks:</p>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status Dealt</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Melee Attack</strong></td>
            <td>-</td>
            <td>Attack an adjacent unit (akin to the Fighter's Basic Attack).</td>
          </tr>
          <tr>
            <td><strong>Short Shot</strong></td>
            <td>5 + (Base - 5) / 2</td>
            <td>Shoot a unit in your line of sight. Interrupted by obstacles.</td>
          </tr>
          <tr>
            <td><strong>Short Lobbed Shot</strong></td>
            <td>5 + (Base - 5) / 2</td>
            <td>Lob a shot over units and obstacles in an arc.</td>
          </tr>
        </tbody>
      </table>

      <h2>Tips</h2>
      <ul>
        <li><strong>Stone Synergies:</strong> Collarless cats find it much easier to fill their spell slots with Collarless active abilities, which allow them to get the full benefit from <strong>Mind Stone</strong> and <strong>Steven Stone</strong>. Similarly, other classes don't get the mana reduction from <strong>Skill Stone</strong> on their Collarless abilities, but Collarless cats do.</li>
        <li><strong>Skill Sharing:</strong> Many Collarless passive abilities are useful on their own, but can be combined with <strong>Skill Share</strong> to share with all other adventuring cats, effectively giving each party member a third passive ability slot. The upgraded version of Skill Share is useful for breeding: it guarantees the other passive is inherited by all of the cat's children.</li>
        <li><strong>Class Synergies:</strong> The "Path of the [Class]" active abilities and the "[Class]'s Soul" passive abilities allow Collarless cats access to many valuable synergies that would be otherwise hard to come by.</li>
      </ul>

      <h2>Mid-Adventure Cats</h2>
      <p>While adventuring, your party may come across an additional cat who joins up with you. This cat will always be Collarless. If you already have four cats, this fifth cat will not receive level-ups and cannot be given items until a slot in your party opens up. If you have fewer cats than you started with, this additional cat is much more likely to show up, and will always have a <strong>Neverstone</strong>.</p>
      <p>"Mid-adventure" cats will always be Level 0, meaning they lack their first passive ability and their second active ability. Their first passive ability (gained at Level 1) will always be chosen for you, at random, but you get to choose their second active ability from a standard array of four. They also get the typical level-up stat bonus at Level 1, something your other cats did not get.</p>
      <p>"Mid-adventure" cats do not qualify for completion marks, nor for their corresponding unlocks. They will return to the House with the rest of your party, however, if you complete the adventure successfully.</p>

      <h2>Abilities</h2>
      <p>Other classes can have Collarless Abilities offered to them when leveling up. Roughly one-in-four options provided will be Collarless (lower Luck means more Collarless abilities).</p>
    `
  },

  {
    id: 2,
    slug: 'mewgenics-fighter-class-guide',
    title: 'Fighter',
    description: "Punch your way to victory! Fighters in Mewgenics excel at high-damage melee attacks and front-line combat with high Strength and Speed.",
    publishDate: '2026-03-09',
    imageUrl: '/images/classes/classes-02.webp',
    imageAlt: 'Mewgenics Fighter Class',
    seo: {
      title: 'Mewgenics Fighter Class Guide: Stats, Archetypes & Abilities',
      description: 'Master the Fighter class in Mewgenics. Learn about Strength-based builds, Low Intelligence archetypes (1D Chess, Dumb Muscle), and tanking strategies.',
      keywords: ['Mewgenics', 'Fighter Class', 'Mewgenics Guide', 'Melee Attack', 'Mewgenics Strategy', 'Hyper Offense'],
    },
    stats: {
      buffs: [{ label: 'Strength', value: '+2' }, { label: 'Speed', value: '+1' }],
      debuffs: [{ label: 'Intelligence', value: '-1' }],
      levelUp: [{ label: 'Stats', value: 'STR, CON, SPD' }],
    },
    detailsHtml: `
      <h2>Collar</h2>
      <p>The <strong>Fighter</strong> is a starting class in Mewgenics, unlocked via specific collars.</p>

      <h2>Overview</h2>
      <p>Fighters are designed to dominate the frontlines. They receive inherent buffs of <strong>+2 Strength</strong> and <strong>+1 Speed</strong>, offset by a <strong>-1 Intelligence</strong> penalty. During level-ups, they primarily focus on increasing Strength, Constitution, or Speed.</p>
      <p>Their gameplay revolves around high-impact damage. Their speed allows them to close gaps quickly, while their strength ensures their strikes are devastating. However, their lower Intelligence results in slower mana regeneration, meaning high-cost abilities must be used strategically.</p>

      <h2>Basic Action</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status Dealt</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Melee Attack</strong></td>
            <td>STR Damage</td>
            <td>Attack an adjacent unit. Deals damage equal to the user's Strength.</td>
          </tr>
        </tbody>
      </table>

      <h2>Archetypes</h2>
      <ul>
        <li><strong>Hyper Offense:</strong> Focuses on stacking buffs and active abilities to maximize single-target damage output.</li>
        <li><strong>Low Intelligence:</strong> A specialized build that lowers <strong>Intelligence</strong> as much as possible to exploit abilities like <em>1D Chess</em> and <em>Dumb Muscle</em>. Key components include the <em>Thick Skull</em> passive and mutations like <em>Down's Syndrome</em> or <em>Williams Syndrome</em>. Using <em>Stoopzerk</em> can instantly drop Intelligence to 0 for immediate synergy.</li>
        <li><strong>Tank Substitute / Counter-attacker:</strong> By prioritizing <strong>Constitution</strong>, <strong>Shield</strong>, and <strong>Brace</strong>, Fighters can mimic the Tank class. This build thrives on counter-attack abilities such as <em>Vengeful</em>, <em>Patellar Reflex</em>, and <em>Hit Me</em>.</li>
      </ul>

      <h2>Abilities</h2>
      <p>Fighter abilities are typically dedicated to physical destruction or enhancing the cat's raw combat efficacy. While they lack the utility of other classes, their sheer force is unmatched in close-quarters engagements.</p>
    `
  },

  {
    id: 3,
    slug: 'mewgenics-hunter-class-guide',
    title: 'Hunter',
    description: "Shoot things from afar! Hunters in Mewgenics are great at hitting things from a distance while staying out of danger themselves!",
    publishDate: '2026-03-09',
    imageUrl: '/images/classes/classes-03.webp',
    imageAlt: 'Mewgenics Hunter Class',
    seo: {
      title: 'Mewgenics Hunter Class Guide: Stats, Archetypes & Abilities',
      description: 'Master the Hunter class in Mewgenics. Learn about Dexterity-based builds, Lobbed Shot mechanics, and powerful archetypes like Marksman and Trapper.',
      keywords: ['Mewgenics', 'Hunter Class', 'Mewgenics Guide', 'Lobbed Shot', 'Mewgenics Strategy', 'Marksman Archetype'],
    },
    stats: {
      buffs: [{ label: 'Dexterity', value: '+3' }, { label: 'Luck', value: '+2' }],
      debuffs: [{ label: 'Constitution', value: '-1' }, { label: 'Speed', value: '-2' }],
      levelUp: [{ label: 'Stats', value: 'DEX, SPD, INT' }],
    },
    detailsHtml: `
      <h2>Collar</h2>
      <p>The <strong>Hunter</strong> is a starting class in Mewgenics.</p>

      <h2>Overview</h2>
      <p>Hunters get <strong>+3 Dexterity</strong> and <strong>+2 Luck</strong>, but <strong>-2 Speed</strong> and <strong>-1 Constitution</strong> as well. When leveling up, they can gain Dexterity, Speed, or Intelligence.</p>
      <p>Hunters are meant to attack from a distance. Most of their attacks take advantage of their high Dexterity and can be shot past obstacles and even allies, letting them stay safe behind cover while still fighting. Maintaining distance is especially important due to Hunters not being able to attack up close by default, as well as their compromised Constitution. If a Hunter needs to be moved, it must be done with caution, as their lowered Speed gives them limited movement options outside of abilities.</p>

      <h2>Basic Action</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status Dealt</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Lobbed Shot</strong></td>
            <td>3 + (DEX - 5) / 2</td>
            <td>Lob a shot over units and obstacles. It deals damage based on Dexterity (base damage of 4 at 4-6 DEX). It has long range but cannot be used on units that are too close.</td>
          </tr>
        </tbody>
      </table>

      <h2>Archetypes</h2>
      <ul>
        <li><strong>Familiars:</strong> Spawn familiars with actives like <em>Spawn Pooter Friend</em> and <em>Flea Shot</em>, then bolster them with <em>Brood Mother</em>, <em>Tainted Mother</em>, or <em>Slop the Pigs</em>.</li>
        <li><strong>Marksman:</strong> Use <em>Marked</em> or <em>Persistent Hunt</em> to ensure all attacks from allies deal extra damage and never miss, including the inaccurate <em>Heavy Shot</em>.</li>
        <li><strong>Trapper:</strong> Use abilities like <em>Web Trap</em> and <em>Bear Trap</em> to exploit enemy movement. These can be used with <em>Traps</em> to scale Dexterity quickly.</li>
        <li><strong>Diversion:</strong> Use <em>Diversion</em> and <em>Bait Trap</em> to force enemy movement from a distance.</li>
        <li><strong>Ranger:</strong> <em>Hazardous</em> enables the party to benefit from Tiles, which can be altered with <em>Bramble Shot</em> and <em>Shards</em>.</li>
        <li><strong>Sniper:</strong> With <em>Scout Me</em> and <em>Snipe</em>, a Hunter can punish enemies from a very safe distance while allies keep foes busy.</li>
      </ul>

      <h2>Tips</h2>
      <p>Even if nothing comes together through level-ups, Hunters can still pick up a wide array of damaging abilities and can spam them if enough Mana is stockpiled.</p>

      <h2>Abilities</h2>
      <p>The Hunter's ability pool is focused on maintaining range and utility. Their high Luck stat also makes them effective at triggering secondary effects and finding high-value loot during runs.</p>
    `
  },

  {
    id: 4,
    slug: 'mewgenics-mage-class-guide',
    title: 'Mage',
    description: "Blast your foes! Mages in Mewgenics are great at casting all sorts of crazy spells and dealing elemental damage!",
    publishDate: '2026-03-09',
    imageUrl: '/images/classes/classes-04.webp',
    imageAlt: 'Mewgenics Mage Class',
    seo: {
      title: 'Mewgenics Mage Class Guide: Abilities, Archetypes & Stats',
      description: 'Comprehensive guide to the Mage class in Mewgenics. Learn about Magic Dart, the Paw Missile passive, and elemental magic strategies.',
      keywords: ['Mewgenics', 'Mage Class', 'Mewgenics Guide', 'Magic Dart', 'Mewgenics Strategy', 'Elementalist Build'],
    },
    stats: {
      buffs: [{ label: 'Intelligence', value: '+2' }, { label: 'Charisma', value: '+2' }],
      debuffs: [{ label: 'Constitution', value: '-1' }, { label: 'Strength', value: '-1' }],
      levelUp: [{ label: 'Stats', value: 'INT, CHA, DEX' }],
    },
    detailsHtml: `
    <h2>Collar</h2>
    <p>The <strong>Mage</strong> is a starting class in Mewgenics.</p>

    <h2>Overview</h2>
    <p>Mages get <strong>+2 Intelligence</strong> and <strong>+2 Charisma</strong>, but <strong>-1 Constitution</strong> and <strong>-1 Strength</strong> as well. When leveling up, they can gain Intelligence, Charisma, or Dexterity.</p>
    <p>Mages learn a variety of magical abilities and often cast more spells than other classes due to their high Intelligence and Charisma. Their spells range from powerful attacks, including easy access to elemental effects, to robust support and utility options, including movement and bolstering the abilities of allies. Due to their lowered focus on Constitution, Mages can easily become 'glass cannons' as they get stronger.</p>

    <h2>Basic Action</h2>
    <p>A Mage's basic attack is <strong>Magic Dart</strong>. It deals physical and magical damage that scales with Dexterity to a unit within Range 3. It has a base damage (at 4-to-6 DEX) of 5. Being both physical and magical, Magic Dart is affected by stacks of Magic Damage Up while still benefiting from physical attack mechanics like Bruise and Critical Hits.</p>
    
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Status Dealt</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Magic Dart</strong></td>
          <td>5 + (DEX - 5) / 2</td>
          <td>Shoot a charged projectile within your line of sight. This attack counts as both magical and physical.</td>
        </tr>
        <tr>
          <td><strong>Magic Missile</strong></td>
          <td>3 + (INT - 5) / 2</td>
          <td>Shoot an infinite-range projectile that can't miss. Only obtainable by having the passive <strong>Paw Missile</strong>.</td>
        </tr>
      </tbody>
    </table>

    <h2>Archetypes</h2>
    <ul>
      <li><strong>Elementalist:</strong> Use fire, ice, electric, etc. attacks to inflict status effects and interact with the environment in unique ways.</li>
      <li><strong>Teleporter:</strong> Warp to distant tiles or even swap positions with allies to get around.</li>
      <li><strong>Mana Master:</strong> Boost allies' mana regeneration with <em>Magic Guru</em> or make their spells cost less with <em>Teach</em>.</li>
      <li><strong>Artillery:</strong> Expend large amounts of Mana to damage multiple foes from medium-to-long range.</li>
      <li><strong>Glass Cannon:</strong> Few utility and defensive abilities, instead focusing on damaging abilities like <em>Paw Missile</em>, <em>Long Cast</em>, and <em>Mega Blast</em>.</li>
    </ul>

    <h2>Abilities</h2>
    <p>The Mage's repertoire is highly focused on spellcasting efficiency. The <strong>Paw Missile</strong> passive is a notable transformation, replacing Magic Dart with an infinite-range version that scales with Intelligence rather than Dexterity, though at a lower base damage.</p>
  `
  },

  {
    id: 5,
    slug: 'mewgenics-tank-class-guide',
    title: 'Tank',
    description: "Get in the way! Tanks in Mewgenics are great at absorbing damage and pushing enemies around with high Constitution and knockback abilities.",
    publishDate: '2026-03-09',
    imageUrl: '/images/classes/classes-05.webp',
    imageAlt: 'Mewgenics Tank Class',
    seo: {
      title: 'Mewgenics Tank Class Guide: Stats, Archetypes & Abilities',
      description: 'Master the Tank class in Mewgenics. Learn about Push Attack mechanics, high Constitution builds, and archetypes like Damage Sponge and Earth Elementalist.',
      keywords: ['Mewgenics', 'Tank Class', 'Mewgenics Guide', 'Push Attack', 'Mewgenics Strategy', 'Damage Sponge Archetype'],
    },
    stats: {
      buffs: [{ label: 'Constitution', value: '+4' }],
      debuffs: [{ label: 'Dexterity', value: '-1' }, { label: 'Intelligence', value: '-1' }],
      levelUp: [{ label: 'Stats', value: 'CON, STR, SPD' }],
    },
    detailsHtml: `
      <h2>Collar</h2>
      <p>The <strong>Tank</strong> is a starting class in Mewgenics.</p>

      <h2>Overview</h2>
      <p>Tanks get <strong>+4 Constitution</strong>, but <strong>-1 Dexterity</strong> and <strong>-1 Intelligence</strong> as well. When leveling up, they can gain Constitution, Strength, or Speed.</p>
      <p>Tanks are designed for survivability and suppression. They have the largest Constitution modifier of any class in the game, making them ideal for blocking enemies. Their basic action doubles as a knockback tool, allowing them to push enemies away, prevent advances, and draw aggravation away from more vulnerable allies. While their Intelligence is lower, they utilize various cheap active abilities for movement and enemy setup.</p>

      <h2>Basic Action</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status Dealt</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Push Attack</strong></td>
            <td>STR Damage</td>
            <td>Dash forward one space, then melee attack with knockback. It moves the user forward one tile and pushes the target one tile in the direction the Tank is facing.</td>
          </tr>
        </tbody>
      </table>
      <p><em>Push Attack</em> utilizes both Range and Reach. Range determines how many tiles the user moves, while Reach determines how far away the Tank can hit a target after moving.</p>

      <h2>Archetypes</h2>
      <ul>
        <li><strong>Frontline Suppressor:</strong> Uses knockback-based abilities to force enemies away from the team.</li>
        <li><strong>Damage Sponge:</strong> High Constitution and Armor allow Tanks to endure heavy hits. Abilities like <em>Goad</em> force enemies to focus on the Tank, while <em>Body Guard</em> allows the Tank to teleport to allies to take damage in their stead.</li>
        <li><strong>Chain Reactions:</strong> Focused on repeated use of knockback to hit multiple enemies into each other or into environmental hazards.</li>
        <li><strong>Earth Elementalist:</strong> Spawns rocks that can be knocked into enemies, turned into <em>Pet Rocks</em>, or consumed with <em>Eat Rock</em>. This archetype also utilizes the <em>Petrify</em> status on priority targets.</li>
      </ul>

      <h2>Abilities</h2>
      <p>Tank abilities prioritize crowd control and defensive scaling. By combining high HP with displacement tools, they dictate the flow of the battlefield and protect high-damage "glass cannon" allies.</p>
    `
  },

  {
    id: 6,
    slug: 'mewgenics-cleric-class-guide',
    title: 'Cleric',
    description: "Be the best friend! Clerics in Mewgenics are great at keeping your team alive and helping them recover from taking hits with unique Holy healing mechanics.",
    publishDate: '2026-03-09',
    imageUrl: '/images/classes/classes-06.webp',
    imageAlt: 'Mewgenics Cleric Class',
    seo: {
      title: 'Mewgenics Cleric Class Guide: Unlock Method, Stats & Archetypes',
      description: 'Master the Cleric class in Mewgenics. Learn how to unlock the Cleric collar in The Alley, use Melee/Ranged Heal, and build Paladin or Hexer archetypes.',
      keywords: ['Mewgenics', 'Cleric Class', 'Mewgenics Guide', 'The Alley Unlock', 'Mewgenics Strategy', 'Paladin Archetype', 'Holy Damage'],
    },
    stats: {
      buffs: [{ label: 'Charisma', value: '+2' }, { label: 'Constitution', value: '+2' }],
      debuffs: [{ label: 'Dexterity', value: '-1' }, { label: 'Speed', value: '-1' }],
      levelUp: [{ label: 'Stats', value: 'CHA, INT, CON' }],
    },
    detailsHtml: `
    <h2>Collar</h2>
    <p>The <strong>Cleric</strong> is an unlockable class in Mewgenics. Its collar is obtained after beating <strong>The Alley</strong> for the first time and talking to <strong>Butch</strong>.</p>

    <h2>Overview</h2>
    <p>Clerics get <strong>+2 Charisma</strong> and <strong>+2 Constitution</strong>, but <strong>-1 Dexterity</strong> and <strong>-1 Speed</strong> as well. When leveling up, they can gain Charisma, Intelligence, and Constitution.</p>
    <p>Clerics are unique because their basic action changes depending on the context: it damages enemies but heals allies. This capability greatly boosts party survivability, though Clerics must rely on consumables or specific abilities to heal themselves. Because of their lower Speed, they are best positioned in the middle of the party to remain available to all allies in danger.</p>

    <h2>Basic Action</h2>
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Status Dealt</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Melee Attack / Heal</strong></td>
          <td>STR Holy Damage/Heal</td>
          <td>At melee range, it deals Holy damage to enemies and healing to allies equal to Strength. Note: Undead allies will take damage instead of healing.</td>
        </tr>
        <tr>
          <td><strong>Ranged Attack / Heal</strong></td>
          <td>5 + (DEX - 5) / 2</td>
          <td>Acts the same as the melee version but at range. Healing scales with Dexterity. Only obtainable via the <strong>Ranged Medic</strong> passive.</td>
        </tr>
      </tbody>
    </table>

    <h2>Archetypes</h2>
    <ul>
      <li><strong>White Mage:</strong> A generalist focusing on dispelling debuffs, buffing, and healing with abilities like <em>Revive</em> and <em>Holy Dash</em>.</li>
      <li><strong>Mass Healer:</strong> Focused on multi-target recovery using <em>Prayer</em>, <em>Healing Aura</em>, and <em>Benediction</em>.</li>
      <li><strong>Paladin:</strong> Supplement aggressive melee play with <em>Holy Shield</em> and <em>Crusade</em>.</li>
      <li><strong>Holy Damage:</strong> An offensive build utilizing <em>Wrath of God</em>, <em>Blessing of Holy Fire</em>, and <em>Holy Light</em>.</li>
      <li><strong>Hexer:</strong> Weakens and hinders enemies with <em>Heathens!</em>, <em>Heretic Mark</em>, and <em>Blinding Lights</em>.</li>
    </ul>

    <h2>Tips</h2>
    <p>Since healing is Holy element, be careful when targeting Undead allies. High Constitution allows the Cleric to act as a sturdy anchor for the team, provided they can manage their limited mobility.</p>
  `
  },

  {
    id: 7,
    slug: 'mewgenics-thief-class-guide',
    title: 'Thief',
    description: "Attack from the shadows! Thieves in Mewgenics are great at evading hits, collecting coins, and striking from behind with massive Speed.",
    publishDate: '2026-03-09',
    imageUrl: '/images/classes/classes-07.webp',
    imageAlt: 'Mewgenics Thief Class',
    seo: {
      title: 'Mewgenics Thief Class Guide: Unlock Method, Stats & Archetypes',
      description: 'Master the Thief class in Mewgenics. Learn how to unlock the Thief collar in The Sewers, use Nail Throw, and build Gambler or DOT archetypes.',
      keywords: ['Mewgenics', 'Thief Class', 'Mewgenics Guide', 'The Sewers Unlock', 'Mewgenics Strategy', 'Nail Throw', 'Shank'],
    },
    stats: {
      buffs: [{ label: 'Speed', value: '+4' }, { label: 'Luck', value: '+1' }],
      debuffs: [{ label: 'Strength', value: '-1' }, { label: 'Constitution', value: '-1' }],
      levelUp: [{ label: 'Stats', value: 'SPD, DEX, LCK' }],
    },
    detailsHtml: `
      <h2>Collar</h2>
      <p>The <strong>Thief</strong> is an unlockable class in Mewgenics. Its collar is obtained after beating <strong>The Sewers</strong> for the first time and talking to <strong>Butch</strong>.</p>

      <h2>Overview</h2>
      <p>Thieves get <strong>+4 Speed</strong> and <strong>+1 Luck</strong>, but <strong>-1 Strength</strong> and <strong>-1 Constitution</strong> as well. When leveling up, they can gain Speed, Dexterity, and Luck.</p>
      <p>On their own, Thieves have a solid ranged attack and great movement thanks to their massively increased Speed, but their capabilities are heavily bolstered by their abilities, which include more movement options, the ability to remain stealthy and avoid attacks, and modifiers to their basic action. Their decreased Strength tends not to get in the way of their occasional melee abilities, since they usually have more emphasis on secondary effects. Their decreased Constitution can get them in trouble however, so long as they don't keep distance.</p>

      <h2>Basic Action</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status Dealt</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Nail Throw</strong></td>
            <td>5 + (DEX - 5) / 2</td>
            <td>Attack a unit in a straight line within Range 3.</td>
          </tr>
          <tr>
            <td><strong>Shank</strong></td>
            <td>STR x2 or x3</td>
            <td>Attack the enemy 2 or 3 times. Only obtainable while being adjacent to an enemy with the <strong>Shank</strong> passive.</td>
          </tr>
        </tbody>
      </table>

      <h2>Archetypes</h2>
      <ul>
        <li><strong>DOT:</strong> Focused on "Damage Over Time" through modifiers to the basic action or unique ability attacks.</li>
        <li><strong>Money Hungry:</strong> Spawn more coins with <em>Cut Purse</em> or <em>Shake Down</em>, then utilize them with <em>Coin Toss</em> or <em>Swift Looter</em>.</li>
        <li><strong>Disruptor:</strong> Improve evasion for self or allies using abilities that inflict <strong>Blind</strong> or grant <strong>Backflip</strong>.</li>
        <li><strong>Lightning Quick:</strong> High Speed ensures the Thief moves first, making them invaluable for disrupting enemy turns. Enhanced by <em>Move Again</em> or <em>Quick Roll</em>.</li>
        <li><strong>Glass Cannon:</strong> Despite high speed, the Thief is defensively weak. Keep at a distance unless positioned for high-damage strikes like <em>Assassinate</em> or <em>Backstabber</em>.</li>
        <li><strong>Gambler:</strong> Relies on critical hits for offensive pressure. Synergizes with Luck increases and abilities like <em>Double Throw</em> or <em>Cheat</em>.</li>
      </ul>

      <h2>Abilities</h2>
      <p>Thief abilities prioritize mobility and high-risk, high-reward positioning. Their high Luck stat makes them excellent for crit-heavy builds and finding additional resources during a run.</p>
    `
  },

  {
    id: 8,
    slug: 'mewgenics-necromancer-class-guide',
    title: 'Necromancer',
    description: "Rise from the dead! Necromancers in Mewgenics excel at playing with corpses, leeching life from enemies, and fighting even after being downed.",
    publishDate: '2026-03-09',
    imageUrl: '/images/classes/classes-08.webp',
    imageAlt: 'Mewgenics Necromancer Class',
    seo: {
      title: 'Mewgenics Necromancer Class Guide: Unlock Method, Stats & Archetypes',
      description: 'Master the Necromancer class in Mewgenics. Learn how to unlock the Necromancer collar in The Boneyard, use Leech Shot, and build Martyr or Reanimator archetypes.',
      keywords: ['Mewgenics', 'Necromancer Class', 'Mewgenics Guide', 'The Boneyard Unlock', 'Mewgenics Strategy', 'Leech Shot', 'Reanimator Archetype'],
    },
    stats: {
      buffs: [{ label: 'Constitution', value: '+2' }, { label: 'Charisma', value: '+1' }],
      debuffs: [{ label: 'Strength', value: '-2' }],
      levelUp: [{ label: 'Stats', value: 'DEX, CHA, CON' }],
    },
    detailsHtml: `
      <h2>Collar</h2>
      <p>The <strong>Necromancer</strong> is an unlockable class in Mewgenics. Its collar is obtained by completing <strong>The Boneyard</strong> for the first time and talking to <strong>Butch</strong>.</p>

      <h2>Overview</h2>
      <p>Necromancers get <strong>+2 Constitution</strong> and <strong>+1 Charisma</strong>, but <strong>-2 Strength</strong> as well. When leveling up, they can gain Dexterity, Charisma, and Constitution.</p>
      <p>Necromancers all innately have the ability to steal health from other units. This, combined with their greater Constitution, lets them stay in the fight and take hits over their more frail allies. Leeches can stack an infinite number of times across all units, making lifesteal versatile for draining multiple units or single bosses. When up close, they can manipulate corpses or inflict status effects like <strong>Fear</strong> or <strong>Soul Link</strong>. Crucially, many Necromancer actives can still be used while the cat is downed, often becoming even stronger in that state.</p>

      <h2>Basic Action</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status Dealt</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Leech Shot</strong></td>
            <td>3 + (DEX - 5) / 2</td>
            <td>A lobbed attack that inflicts +1 <strong>Leech</strong>.</td>
          </tr>
          <tr>
            <td><strong>Haunt</strong></td>
            <td>5 Damage</td>
            <td>Damage any unit and inflict <strong>Fear</strong>. Castable while downed. Only obtainable by having the <strong>Torpor</strong> passive while downed.</td>
          </tr>
        </tbody>
      </table>

      <h2>Archetypes</h2>
      <ul>
        <li><strong>Leech Mother:</strong> Maximizes <strong>Leech</strong> and life-draining abilities. Uses <em>Spread Sorrow</em> and <em>Immortal Leeches</em>. Synergizes with items like <em>Jar of Leeches</em>.</li>
        <li><strong>Gravedigger:</strong> Manipulates corpses to travel and deal damage. Uses <em>Gravecrawl</em> and <em>Death Bloom</em>. Synergizes with the <em>Shovel</em>.</li>
        <li><strong>Martyr:</strong> Focuses on enhancing the team while the Necromancer is downed. Uses <em>Seppuku</em> and <em>Sacrificial Lamb</em>. Synergizes with <em>Death Shroud</em>.</li>
        <li><strong>Reanimator:</strong> Summons and controls familiars and the undead. Uses <em>Flesh Golem</em>, <em>Summon Bones</em>, and <em>Seance</em>.</li>
        <li><strong>Debuffer:</strong> Disrupts and weakens enemies using <em>Shriek</em>, <em>Weakness</em>, and <em>Spread Sorrow</em>.</li>
      </ul>

      <h2>Tips</h2>
      <p>Don't fear being downed; a Necromancer's utility often peaks when they are "dead." Positioning near corpses is vital for maximizing mobility and damage potential through specific class abilities.</p>
    `
  },

  {
    id: 9,
    slug: 'mewgenics-tinkerer-class-guide',
    title: 'Tinkerer',
    description: "A crafty inventor! Tinkerers in Mewgenics are great at crafting temporary weapons and using all sorts of crazy gadgets with high Intelligence.",
    publishDate: '2026-03-09',
    imageUrl: '/images/classes/classes-09.webp',
    imageAlt: 'Mewgenics Tinkerer Class',
    seo: {
      title: 'Mewgenics Tinkerer Class Guide: Unlock Method, Tech & Archetypes',
      description: 'Master the Tinkerer class in Mewgenics. Learn how to unlock the Tinkerer collar in The Bunker, manage Tech stacks, and build Robot Servant or Mech Pilot archetypes.',
      keywords: ['Mewgenics', 'Tinkerer Class', 'Mewgenics Guide', 'The Bunker Unlock', 'Mewgenics Strategy', 'Craft Weapon', 'Tech Status'],
    },
    stats: {
      buffs: [{ label: 'Intelligence', value: '+4' }],
      debuffs: [{ label: 'Luck', value: '-1' }, { label: 'Charisma', value: '-1' }],
      levelUp: [{ label: 'Stats', value: 'DEX, CHA, INT' }],
    },
    detailsHtml: `
      <h2>Collar</h2>
      <p>The <strong>Tinkerer</strong> is an unlockable class in Mewgenics. Its collar is obtained after beating <strong>The Bunker</strong> for the first time and talking to <strong>Butch</strong>.</p>

      <h2>Overview</h2>
      <p>Tinkerers get <strong>+4 Intelligence</strong>, but <strong>-1 Charisma</strong> and <strong>-1 Luck</strong> as well. When leveling up, they can gain Dexterity, Charisma, and Intelligence.</p>
      <p>Tinkerers often reach their full spell-casting potential every turn due to their massive Intelligence. Their ability list is highly varied, featuring stationary units, mobile utility familiars, and unconventional movement. Everything revolves around the <strong>Tech</strong> status effect. Tinkerers can hold up to three Tech stacks; these are consumed to improve crafted weapon damage or provide an <strong>All Stats Up</strong> buff to spawned familiars based on the amount of Tech held during creation.</p>

      <h2>Basic Action</h2>
      <p>A Tinkerer's basic action is conditional based on their weapon slot:</p>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status Dealt</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Craft Weapon</strong></td>
            <td>N/A</td>
            <td>When the weapon slot is empty, create a random weapon from a specific pool and equip it.</td>
          </tr>
          <tr>
            <td><strong>Throw Weapon</strong></td>
            <td>5 + (DEX - 5) / 2</td>
            <td>When a weapon is equipped, throw it at a target in range. This deals damage, activates weapon effects, and breaks the weapon (emptying the slot).</td>
          </tr>
        </tbody>
      </table>

      <h2>Archetypes</h2>
      <ul>
        <li><strong>Robot Servants:</strong> Spawn robots for combat or utility. These can be further boosted by electric damage.</li>
        <li><strong>Weapon Master:</strong> Uses abilities that allow reusing weapons or attacking without consuming the basic action.</li>
        <li><strong>Armorer:</strong> Creates unique Armor items that offer extra <strong>Shield</strong> and specialized bonuses.</li>
        <li><strong>Electric Power:</strong> Focuses on electric damage that can <strong>Stun</strong> and conduct through Water or Metal.</li>
        <li><strong>Demolitionist:</strong> Specializes in area-of-effect (AoE) damage using crafted bombs and explosives.</li>
        <li><strong>Craftsman:</strong> Increases the durability and overall effectiveness of equipped items.</li>
        <li><strong>Mech Pilot:</strong> Centered around the <em>Mech Suit</em> ability, which provides enough power to carry entire encounters.</li>
      </ul>

      <h2>Tips</h2>
      <p>Managing your <strong>Tech</strong> stacks is the difference between a flimsy gadget and a game-winning machine. Since Throw Weapon breaks the item, Tinkerers cycle through equipment rapidly, making them highly adaptable to changing battlefield conditions.</p>
    `
  },

  {
    id: 10,
    slug: 'mewgenics-butcher-class-guide',
    title: 'Butcher',
    description: "Meat Meat Meat Meat Meat! Butchers in Mewgenics are crimson powerhouses that excel at cleaving chunks of meat and hooking enemies into range.",
    publishDate: '2026-03-09',
    imageUrl: '/images/classes/classes-10.webp',
    imageAlt: 'Mewgenics Butcher Class',
    seo: {
      title: 'Mewgenics Butcher Class Guide: Unlock Method, Stats & Archetypes',
      description: 'Master the Butcher class in Mewgenics. Learn how to unlock the Butcher collar in The Core, use the Cleave basic attack, and build Hoggish or Unhygienic archetypes.',
      keywords: ['Mewgenics', 'Butcher Class', 'Mewgenics Guide', 'The Core Unlock', 'Mewgenics Strategy', 'Cleave Attack', 'Meat Hook'],
    },
    stats: {
      buffs: [{ label: 'Constitution', value: '+3' }, { label: 'Strength', value: '+2' }],
      debuffs: [{ label: 'Speed', value: '-2' }],
      levelUp: [{ label: 'Stats', value: 'CON, STR, LCK' }],
    },
    detailsHtml: `
      <h2>Collar</h2>
      <p>The <strong>Butcher</strong> is an unlockable class in Mewgenics. The collar is obtained after beating <strong>The Core</strong> for the first time and talking to <strong>Butch</strong>.</p>

      <h2>Overview</h2>
      <p>Butchers receive <strong>+3 Constitution</strong> and <strong>+2 Strength</strong>, but suffer a <strong>-2 Speed</strong> penalty. They are characterized by their crimson color and function as a hybrid between the Fighter and Tank classes.</p>
      <p>Butchers boast high melee damage and survivability, often exceeding Fighters in output due to Luck bonuses that increase critical hit rates. However, they are frequently the slowest units on the field. To compensate for their lack of Speed, they utilize the <strong>Meat Hook</strong> to pull enemies toward them. This class also features many "self-harming" abilities that trade Health or apply self-debuffs for powerful, high-utility effects.</p>

      <h2>Basic Action</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status Dealt</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Cleave</strong></td>
            <td>STR Damage</td>
            <td>Attack a unit adjacent or diagonally (3x3 area) with the Cleave property, hacking off HP for others to pick up.</td>
          </tr>
          <tr>
            <td><strong>Wide Cleave</strong></td>
            <td>STR Damage</td>
            <td>Attack a wide area with the Cleave property.</td>
          </tr>
          <tr>
            <td><strong>Spin Cleave</strong></td>
            <td>STR Damage</td>
            <td>Attack everything in a circle around the user with the Cleave property.</td>
          </tr>
        </tbody>
      </table>

      <h2>Archetypes</h2>
      <ul>
        <li><strong>Blood Thirsty:</strong> Combines high damage output with <em>Meat Hook</em> to chase down and finish off targets despite low natural movement.</li>
        <li><strong>Unhygienic:</strong> Utilizes flies and the <strong>Rot</strong> status. Abilities like <em>Duke of Flies</em>, <em>Burp</em>, and <em>Fire Fart</em> focus on disgusting bodily functions and familiar generation.</li>
        <li><strong>Hoggish:</strong> Consumes the meat cleaved from enemies to fuel spells. Abilities like <em>Hog Rush</em> and <em>Lunch Time</em> provide much-needed mobility by moving the Butcher toward meat.</li>
        <li><strong>Pocket Medic:</strong> Gains benefits from overhealing. Synergizes perfectly with a Cleric using <em>Booster</em> or <em>Top Off</em>, even when the Butcher has the <em>Never Full</em> passive.</li>
        <li><strong>Cook:</strong> High synergy with <strong>Fire-element</strong> abilities. Butchers can use <em>Grill</em> or <em>Roast</em> to manipulate Fire tiles and cook dropped Food items for better recovery.</li>
      </ul>

      <h2>Tips</h2>
      <p>Because the Butcher tends to move last in the turn order, positioning is key. Use your high Constitution to soak up hits, and save your Meat Hook for priority targets that try to stay out of reach. Don't be afraid of the self-harming mechanics; the survivability gains from cleaved meat usually outweigh the initial cost.</p>
    `
  },

  {
    id: 11,
    slug: 'mewgenics-druid-class-guide',
    title: 'Druid',
    description: "One with nature! Druids in Mewgenics are masters of support and summoning, accompanied by a permanent Crow familiar that mirrors their stats.",
    publishDate: '2026-03-09',
    imageUrl: '/images/classes/classes-11.webp',
    imageAlt: 'Mewgenics Druid Class',
    seo: {
      title: 'Mewgenics Druid Class Guide: Stats, Crow Familiar & Forms',
      description: 'Master the Druid class in Mewgenics. Learn about the Sing basic action, Crow familiar mechanics, Shapeshifting forms, and how to unlock the Druid collar.',
      keywords: ['Mewgenics', 'Druid Class', 'Mewgenics Guide', 'Crow Familiar', 'Mewgenics Strategy', 'Shapeshifter Build', 'The Crater Unlock'],
    },
    stats: {
      buffs: [{ label: 'Charisma', value: '+3' }, { label: 'Luck', value: '+1' }],
      debuffs: [{ label: 'Constitution', value: '-2' }],
      levelUp: [{ label: 'Stats', value: 'CHA, INT, STR' }],
    },
    detailsHtml: `
      <h2>Collar</h2>
      <p>The <strong>Druid</strong> is an unlockable class in Mewgenics. The collar is obtained after beating <strong>The Crater</strong> for the first time and talking to <strong>Butch</strong>.</p>

      <h2>Overview</h2>
      <p>The Druid features increased Charisma and Luck but suffers from reduced Constitution. Every Druid cat is accompanied by a <strong>permanent Crow familiar</strong> that copies the Druid's stats, effectively doubling your presence on the board.</p>
      <p>Druids primarily function through indirect influence, using area-of-effect (AoE) buffs and summons to control the battlefield. However, their low Constitution makes them vulnerable if they are caught without their animal protectors.</p>

      <h2>Basic Action</h2>
      <p>Druids utilize a unique, non-damaging basic attack called <strong>Sing</strong>. While it doesn't scale with stats, it impacts a wide 2-tile radius around the target. Caution is required with basic attack modifiers, as they can inadvertently cause your support songs to harm allies.</p>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status Dealt</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Sing</strong></td>
            <td>+1 Damage Up</td>
            <td>Heal and provide a temporary damage buff to units in a wide area. Elements: Holy and Music.</td>
          </tr>
          <tr>
            <td><strong>Sing (Versatile)</strong></td>
            <td>Varies</td>
            <td>Heals/buffs allies and damages/debuffs enemies in a wide area. Requires the <strong>Versatile Vocalist</strong> passive.</td>
          </tr>
        </tbody>
      </table>

      <h2>Archetypes</h2>
      <ul>
        <li><strong>Anti-Violence:</strong> Relies entirely on the Crow familiar or non-damaging tile modifiers like <em>Magic Seed</em> to win encounters.</li>
        <li><strong>One with the Earth:</strong> Battlefield control via elemental tiles. Uses <em>Song of Spring</em> to create Flowers or <em>Hydro Pump</em> for Water tiles.</li>
        <li><strong>Morale Support:</strong> Focuses on team-wide stat enhancements using <em>Cheerlead</em> and <em>Bloom</em>.</li>
        <li><strong>Area Healer:</strong> Combines <em>Sing</em> with items like the <em>Cleric's Mitre</em> for high-efficiency, zero-mana AoE healing.</li>
        <li><strong>Commander:</strong> Focuses on powerful summons like <em>Form of the Squirrel</em> or <em>Summon Bear</em> to handle combat.</li>
        <li><strong>Shapeshifter:</strong> Uses multiple "Form" abilities to stack stat boosts. Synergizes with <em>Wild Style</em> for extra turns during transformations.</li>
      </ul>

      <h2>Tips</h2>
      <ul>
        <li><strong>Transformation Stacking:</strong> You can use multiple transformation abilities in one battle. You retain the combined stat modifiers of all forms, though your basic attack will reflect the most recent transformation.</li>
        <li><strong>Crow Management:</strong> Be wary of the <em>Birdemic</em> weather event, which turns your Crow against you. Also, consider multiclassing with <strong>Hunter</strong> or <strong>Necromancer</strong> to bolster familiar-oriented passives.</li>
        <li><strong>Versatile Vocalist:</strong> This is a high-priority passive if you intend to use items that add debuffs to your basic attack, as it prevents you from accidentally debuffing your own team.</li>
      </ul>
    `
  },

  {
    id: 12,
    slug: 'mewgenics-psychic-class-guide',
    title: 'Psychic',
    description: "Clear your mind! Psychics in Mewgenics are purple-hued masters of gravity, manipulating objects and units from afar with infinite range.",
    publishDate: '2026-03-09',
    imageUrl: '/images/classes/classes-12.webp',
    imageAlt: 'Mewgenics Psychic Class',
    seo: {
      title: 'Mewgenics Psychic Class Guide: Unlock Method, Stats & Archetypes',
      description: 'Master the Psychic class in Mewgenics. Learn how to unlock the Psychic collar in The Moon, use the Psychic Pull basic attack, and build Puppet Master archetypes.',
      keywords: ['Mewgenics', 'Psychic Class', 'Mewgenics Guide', 'The Moon Unlock', 'Mewgenics Strategy', 'Psychic Pull', 'Gravity Element'],
    },
    stats: {
      buffs: [
        { label: 'Intelligence', value: '+1' },
        { label: 'Charisma', value: '+1' },
        { label: 'Speed', value: '+1' },
        { label: 'Starting Mana', value: '+5' }
      ],
      debuffs: [{ label: 'Constitution', value: '-1' }],
      levelUp: [{ label: 'Stats', value: 'INT, CHA, SPD' }],
    },
    detailsHtml: `
      <h2>Collar</h2>
      <p>The <strong>Psychic</strong> is an unlockable class in Mewgenics. The collar for Psychic is obtained after beating <strong>The Moon</strong> for the first time and talking to <strong>Butch</strong>.</p>

      <h2>Overview</h2>
      <p>Psychics are purple in color and receive a balanced spread of <strong>+1 Intelligence</strong>, <strong>+1 Charisma</strong>, and <strong>+1 Speed</strong>, offset by a <strong>-1 Constitution</strong> penalty. Their most notable trait is starting each encounter with <strong>+5 Mana</strong>, allowing for immediate high-impact spellcasting.</p>
      <p>Similar to the Mage, Psychics function as glass cannons with low initial survivability but immense scaling potential. While they have slightly better survivability than a Mage, their starting damage output is generally lower, requiring careful positioning and utilization of their unique gravity mechanics.</p>

      <h2>Basic Action</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status Dealt</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Psychic Pull</strong></td>
            <td>2 Gravity Damage</td>
            <td>A Magic Gravity-element attack with infinite range. Pulls the target 1 tile toward the user (1 Knockback). Deals additional damage if the target hits another unit.</td>
          </tr>
        </tbody>
      </table>
      <p><em>Note:</em> The movement happens after the damage. Units killed by the initial strike will not move, meaning they cannot trigger knockback damage on other units.</p>

      <h2>Archetypes</h2>
      <ul>
        <li><strong>Uber Long Ranger:</strong> Leverages infinite range on <em>Psychic Pull</em> and high line-of-sight abilities like <em>Become Entropy</em> or <em>Asteroid</em> to dominate from the edges of the map.</li>
        <li><strong>Puppet Master:</strong> Focuses on absolute battlefield control. Uses <em>Psychic Pull</em>, <em>Withdraw</em>, and <em>Reality Scramble</em> to reposition units, or <em>Mind Control</em> to take over foes entirely.</li>
        <li><strong>Enabler:</strong> A support-heavy build that uses powerful abilities like <em>Mind Meld</em> to let allies handle direct combat more effectively.</li>
      </ul>

      <h2>Tips</h2>
      <ul>
        <li><strong>Mana Synergy:</strong> The high starting Mana makes Psychics excellent candidates for multiclassing with Mage abilities like <em>Mega Blast</em> or <em>Meteor Storm</em>.</li>
        <li><strong>Line of Sight:</strong> Because vision is vital for their best skills, items like the <strong>Superhero Cape</strong> (which allows for ignoring obstacles) are top-tier choices for a Psychic.</li>
        <li><strong>Low Charisma Builds:</strong> Having low Charisma can actually be beneficial. Mutations like <strong>Savant Syndrome</strong> help the Psychic reach and maintain full mana, which triggers several class-specific ability bonuses.</li>
      </ul>
    `
  },

  {
    id: 13,
    slug: 'mewgenics-monk-class-guide',
    title: 'Monk',
    description: "A versatile combat master! Monks in Mewgenics can switch between ranged and melee stances and attack twice per turn using innate abilities.",
    publishDate: '2026-03-09',
    imageUrl: '/images/classes/classes-13.webp',
    imageAlt: 'Mewgenics Monk Class',
    seo: {
      title: 'Mewgenics Monk Class Guide: Unlock Method, Stances & Stats',
      description: 'Master the Monk class in Mewgenics. Learn how to unlock the Monk collar in The Lab, manage Stance Switcher mechanics, and build Ki-Fighter archetypes.',
      keywords: ['Mewgenics', 'Monk Class', 'Mewgenics Guide', 'The Lab Unlock', 'Mewgenics Strategy', 'Stance Switcher', 'Monk Fist'],
    },
    stats: {
      buffs: [{ label: 'Intelligence', value: '+2' }, { label: 'Charisma', value: '+2' }],
      debuffs: [{ label: 'Strength', value: '-1' }, { label: 'Dexterity', value: '-1' }],
      levelUp: [{ label: 'Stats', value: 'INT, STR, LCK' }],
    },
    detailsHtml: `
      <h2>Collar</h2>
      <p>The <strong>Monk</strong> is an unlockable class in Mewgenics. The collar for The Monk is obtained after beating <strong>The Lab</strong> for the first time and talking to <strong>Butch</strong>.</p>

      <h2>Overview</h2>
      <p>The Monk features increased <strong>+2 Intelligence</strong> and <strong>+2 Charisma</strong>, but suffers from reduced <strong>-1 Strength</strong> and <strong>-1 Dexterity</strong>. When leveling up, they can gain Intelligence, Strength, and Luck.</p>
      <p>The Monk is unique because it starts with two innate items that cannot be unequipped: the <strong>Stance Switcher</strong> and the <strong>Monk Fist</strong>. Because these occupy the Weapon and Trinket slots, Monks cannot use standard weapons, trinkets, or consumables unless provided by another cat via specific abilities like <em>Dealer</em> or <em>Survivalist</em>.</p>

      <h2>Basic Action & Unique Features</h2>
      <p>The Monk's combat style is defined by its innate equipment:</p>
      <ul>
        <li><strong>Monk Fist:</strong> Allows the Monk to use their basic attack action <strong>twice</strong> per turn.</li>
        <li><strong>Stance Switcher:</strong> Allows the Monk to switch between a ranged and melee stance once per turn.</li>
      </ul>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status Dealt</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Melee Attack</strong></td>
            <td>(STR + 1) / 2</td>
            <td>Attack an adjacent unit. Scales with Strength.</td>
          </tr>
          <tr>
            <td><strong>Lobbed Shot</strong></td>
            <td>(DEX + 5) / 4</td>
            <td>Lob a shot over units and obstacles (Range: 2-4 tiles). Scales with Dexterity.</td>
          </tr>
        </tbody>
      </table>

      <h2>Archetypes</h2>
      <ul>
        <li><strong>The Thick-Skinned:</strong> Accumulates high <strong>Shield</strong> values and converts them into extra damage using <em>Stone Fists</em>.</li>
        <li><strong>The Finisher:</strong> Focuses on performing as many actions as possible in a single turn, concluding with the <em>Finisher</em> ability for maximum impact.</li>
        <li><strong>The Ki-Fighter:</strong> Synergizes with <em>Mind Breaker</em> to destroy <strong>Magically-Weakened</strong> targets using <em>Kamehameha</em> and similar "spells."</li>
        <li><strong>Omae Wa Mou Shindeiru:</strong> Uses <em>One Punch</em> and <em>Five Point Palm Exploding Heart Technique</em> to delete standard foes or chip away at Bosses.</li>
      </ul>

      <h2>Tips</h2>
      <ul>
        <li><strong>Armor Management:</strong> Many Monk abilities are improved when the cat is equipped with <strong>fewer Armor items</strong>. This makes high base stats and mutations the primary way to scale. Cursed armor items can be particularly detrimental.</li>
        <li><strong>Innate Items:</strong> The Monk's unlockable items, such as the <strong>Head Brand</strong>, count as empty armor slots for the purposes of ability scaling.</li>
        <li><strong>Combo Potential:</strong> Monks excel at setting up powerful one-turn combos, especially when supported by other classes that can provide buffs or consumables.</li>
      </ul>
    `
  },

  {
    id: 14,
    slug: 'mewgenics-jester-class-guide',
    title: 'Jester',
    description: "You can be anything! Jesters in Mewgenics have no limits, acting as blank slates that can pull abilities from every other class in the game.",
    publishDate: '2026-03-09',
    imageUrl: '/images/classes/classes-14.webp',
    imageAlt: 'Mewgenics Jester Class',
    seo: {
      title: 'Mewgenics Jester Class Guide: Unlock Method, Stats & Strategies',
      description: 'Master the Jester class in Mewgenics. Learn how to unlock the Jester collar in The Rift, manage random basic actions, and utilize unlimited ability pools.',
      keywords: ['Mewgenics', 'Jester Class', 'Mewgenics Guide', 'The Rift Unlock', 'Mewgenics Strategy', 'Soahc Boss', 'Ability Rerolls'],
    },
    stats: {
      buffs: [{ label: 'Level Up Rerolls', value: '+1 extra' }],
      debuffs: [{ label: 'None', value: '0' }],
      levelUp: [{ label: 'Stats', value: 'Any Stat' }],
    },
    detailsHtml: `
      <h2>Collar</h2>
      <p>The <strong>Jester</strong> is an unlockable class in Mewgenics. It is unlocked by defeating <strong>Soahc</strong> and clearing <strong>The Rift</strong> for the first time, then talking to Butch.</p>

      <h2>Overview</h2>
      <p>The Jester is the ultimate "blank slate" class. It offers no direct stat modifiers but provides <strong>one extra reroll</strong> during level-ups. While the class itself only has 4 unique abilities, its potential ability pool is filled with active and passive skills from <strong>all other classes</strong> you have unlocked.</p>
      <p>Because Jesters can use any ability, cats with an evenly distributed stat pool often fare better. Unlike specialized classes, the Jester doesn't push you toward a specific playstyle, making mutations and careful selection of level-up bonuses the primary way to define your build.</p>

      <h2>Basic Action</h2>
      <p>A Jester's basic action is determined <strong>randomly</strong> the moment you lock in their Class Collar. This action will always be a basic attack pulled from another existing class (e.g., Melee Attack, Lobbed Shot, or Magic Dart).</p>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Status Dealt</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>Random Class Attack</strong></td>
            <td>Varies</td>
            <td>Determined randomly upon equipping the collar. Scales based on the specific attack rolled.</td>
          </tr>
        </tbody>
      </table>

      <h2>Archetypes</h2>
      <p>There is no single defining way to play a Jester. Their "archetype" is usually decided by the initial basic attack they roll and the early abilities offered during the run:</p>
      <ul>
        <li><strong>The Chameleon:</strong> Building around the random basic attack. If you roll a melee attack, you might pivot into <em>Fighter</em> or <em>Butcher</em> skills; if you roll a ranged attack, you might seek <em>Hunter</em> or <em>Mage</em> synergies.</li>
        <li><strong>Reroll Master:</strong> Utilizing items like the <em>Jester's Soul</em>, <em>Ninny Stick</em>, <em>D6</em>, or <em>Furry Dice</em> to aggressively cycle through abilities until a broken combo from multiple classes is formed.</li>
      </ul>

      <h2>Tips</h2>
      <ul>
        <li><strong>Early Pivot:</strong> It is often wise to base your entire build on your starting abilities. Since you have extra rerolls, you have a much higher chance of forcing a specific synergy than any other class.</li>
        <li><strong>Mutation Dependency:</strong> Because you lack inherent stat buffs, mutations are vital for providing the "edge" needed to survive late-game chapters.</li>
        <li><strong>Versatility:</strong> The Jester excels in teams that need a specific gap filled but lack the exact collar required. Their ability to pull from the entire game's skill list makes them the most adaptable unit in Mewgenics.</li>
      </ul>
    `
  },





  // {
  //   id: 1,
  //   slug: '',
  //   title: '',
  //   description: "",
  //   publishDate: '2026-03-09',
  //   imageUrl: '',
  //   imageAlt: '',
  //   seo: {
  //     title: '',
  //     description:'',
  //     keywords: [''],
  //   },
  //   stats: {
  //     buffs: [{label: '', value: ''}],
  //     debuffs: [{label: '', value: ''}],
  //     levelUp: [{label: '', value: ''}],
  //   },
  //   detailsHtml: ``
  // },
]

