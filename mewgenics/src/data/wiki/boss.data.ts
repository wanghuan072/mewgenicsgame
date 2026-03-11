export default [
  {
      id: 1,
      slug: 'mewgenics-pebbles-boss-guide',
      name: 'Pebbles',
      description: "Pebbles is the Boss of The Path. He was trained by Butch, and he resembles a Collarless cat.",
      publishDate: '2026-03-09',
      imageUrl: '/images/boss/boss-01.webp',
      imageAlt: 'Mewgenics Pebbles Boss',
      seo: {
        title: 'Mewgenics Pebbles Boss Guide: Attacks, Stats & Strategy',
        description: 'Learn how to defeat Pebbles, the boss of The Path in Mewgenics. Detailed guide on his Push, Rock Toss, and Boulder Drop attacks.',
        keywords: ['Mewgenics', 'Pebbles Boss', 'The Path', 'Mewgenics Guide', 'Mewgenics Strategy', 'Boulder Drop'],
      },
      stats: {Health: '50', Damage: '2', Movement: '4', Luck: '3'},
      isPage: true,
      detailsHtml: `
        <blockquote>
          “ You're gonna get rocked! ” — Pebbles
        </blockquote>

        <p>Pebbles is the Boss of <strong>The Path</strong>. He was trained by Butch, and he resembles a Collarless cat.</p>

        <h2>Behavior & Attacks</h2>
        <ul>
          <li><strong>Push:</strong> A two-tile melee attack that moves Pebbles forward one tile and applies knockback to whatever he hits. Same as the Tank's default attack, though unlike the Tank, he can also attack diagonally. Pebbles will try to push rocks into the player's cats or push them into each other.</li>
          <li><strong>Rock Toss:</strong> Pebbles throws a rock at a cat in range, at a distance of 3-5 tiles. This attack also leaves a rock on the battlefield.</li>
          <li><strong>Boulder Drop:</strong> If Pebbles is at low HP and both of the player's cats are still alive, he will drop a boulder on the one with the lowest health, dealing 999 damage and instantly downing them, while also prompting Butch's tutorial on injuries. This leaves a boulder on the battlefield. This attack targets a 3-tile radius with a 1-turn warning when used by the robotic variant of Pebbles.</li>
        </ul>

        <h2>Strategy</h2>
        <p>This fight will always have the same outcome. One of the player's cats is downed, but they win the fight. If the battle lasts for more than 9 rounds, Pebbles will run away.</p>

        <h2>Trivia</h2>
        <ul>
          <li>Main Theme: <strong>Kat Fight</strong></li>
          <li>Champion Variant: Its melee attack knocks units backwards and can throw rocks.</li>
        </ul>
      `,
    },

    {
      id: 2,
      slug: 'mewgenics-radical-rat-boss-guide',
      name: 'Radical Rat',
      description: "Radical Rat is a giant, sunglasses-wearing boss found in The Alley. He specializes in long-range demolition, throwing bombs that detonate in a massive cross pattern.",
      publishDate: '2026-03-09',
      imageUrl: '/images/boss/boss-02.webp',
      imageAlt: 'Mewgenics Radical Rat Boss',
      seo: {
        title: 'Mewgenics Radical Rat Boss Guide: Bomb Mechanics & Strategy',
        description: 'Learn how to defeat Radical Rat in Mewgenics. Guide covers Rat Bomb patterns, the Turtle defensive state, and how weather affects the fight.',
        keywords: ['Mewgenics', 'Radical Rat', 'The Alley', 'Mewgenics Boss', 'Rat Bomb', 'Mewgenics Strategy'],
      },
      stats: {Health: '67', Damage: '0', Movement: '5', Luck: '5'},
      isPage: true,
      detailsHtml: `
        <blockquote>
          “ Boom goes the dynamite! ” — Radical Rat
        </blockquote>
    
        <p>Radical Rat is a boss encountered in <strong>The Alley</strong>. He is a giant rat wearing sunglasses that avoids direct confrontation, preferring to throw explosives at the player from a distance.</p>
    
        <h2>Behavior & Attacks</h2>
        <ul>
          <li><strong>Throw Bomb:</strong> On each bonus turn, Radical Rat tosses a <strong>Rat Bomb</strong> near the player's cats. At the end of the turn, active bombs explode in a 10-tile cross pattern. Under rain, this attack targets cats directly for 5 damage and spawns a defused bomb.</li>
          <li><strong>Turtle:</strong> On his last turn of the round, Radical Rat hides inside a trash can, becoming invulnerable to all damage. This state ends with a knockback effect.</li>
        </ul>
    
        <h2>Tips & Strategy</h2>
        <ul>
          <li><strong>Bomb Disposal:</strong> Rat Bombs have 1 HP. Attacking a defused bomb destroys it completely. If a bomb lands in a water tile, it is defused immediately.</li>
          <li><strong>Fire Hazard:</strong> Avoid using fire-based abilities or the Cleric's <em>Blessing of Holy Fire</em>. Fire causes bombs to detonate instantly, which can trigger deadly chain reactions.</li>
          <li><strong>AI Manipulation:</strong> The AI tries to hit at least two cats with a single explosion. You can bait bomb placement by moving cats in pairs, allowing one to defuse the threat while the other attacks.</li>
          <li><strong>Melee Vulnerability:</strong> Radical Rat has no melee attack. High-damage melee classes like the <strong>Fighter</strong> can deal significant damage once they close the gap between his bomb throws.</li>
        </ul>
    
        <h2>Trivia</h2>
        <ul>
          <li>Found in: <strong>The Alley</strong></li>
          <li>Champion Variant: Tosses bombs that explode at the end of the round.</li>
        </ul>
      `,
    },

    {
      id: 3,
      slug: 'mewgenics-queen-hippo-boss-guide',
      name: 'Queen Hippo',
      description: "Queen Hippo is the second boss of The Alley. Despite her high damage and chain knockback abilities, her poor heart health serves as a unique mechanical weakness.",
      publishDate: '2026-03-09',
      imageUrl: '/images/boss/boss-03.webp',
      imageAlt: 'Mewgenics Queen Hippo Boss',
      seo: {
        title: 'Mewgenics Queen Hippo Boss Guide: Strategy & Heart Attack Mechanic',
        description: 'Master the Queen Hippo boss fight in Mewgenics. Learn how to exploit her Brace stacks and heart problems to win the fight quickly.',
        keywords: ['Mewgenics', 'Queen Hippo', 'The Alley Boss', 'Mewgenics Strategy', 'Brace Mechanic', 'Mewgenics Guide'],
      },
      stats: {Health: '80', Damage: '4', Movement: '1', Luck: '5'},
      isPage: true,
      detailsHtml: `
        <blockquote>
          “ Hey! Get your paw outta my bellybutton! ” — Queen Hippo
        </blockquote>
    
        <p>Queen Hippo is the second boss of <strong>The Alley</strong>. She is a slow but heavy-hitting opponent who relies on physical displacement and sheer bulk.</p>
    
        <h2>Behavior & Unique Mechanics</h2>
        <ul>
          <li><strong>Brace & Heart Attack:</strong> Queen Hippo always starts with <strong>Brace 4</strong> and two bonus turns. At the end of each round, she loses -1 Brace and gains +1 Movement Up. If she loses all stacks of Brace, she immediately dies of a heart attack, ending the fight instantly.</li>
          <li><strong>Natural Aggression:</strong> In her Champion variant, she will automatically uppercut any adjacent units at the start of her turn.</li>
        </ul>
    
        <h2>Attacks</h2>
        <ul>
          <li><strong>Jab:</strong> Deals damage and inflicts chain knockback with a range of 10 tiles. This attack can also apply <strong>Bruise</strong> to the target.</li>
          <li><strong>Uppercut:</strong> Deals damage and knocks a unit into the air. The unit will then knock back anything it lands on.</li>
        </ul>
    
        <h2>Tips & Strategy</h2>
        <ul>
          <li><strong>The "One-Turn" Kill:</strong> You can defeat Queen Hippo in a single turn by using abilities or items that remove buffs, such as <em>Bloodletting</em> or a <em>Grenade</em>, to strip all 4 stacks of Brace immediately.</li>
          <li><strong>Kiting:</strong> Due to her extremely low Movement (1) and short-range attacks, she is easily kited by ranged classes like the <strong>Hunter</strong> or <strong>Mage</strong>.</li>
          <li><strong>Survival:</strong> If you cannot remove her Brace quickly, focus on staying out of her melee range and wait for her internal timer to run out, as she will naturally defeat herself after 4 rounds.</li>
        </ul>
    
        <h2>Trivia</h2>
        <ul>
          <li>Main Theme: <strong>Eatin' Rats</strong></li>
          <li>Champion Variant: Her Jab deals Chain Knockback and she auto-uppercuts adjacent units.</li>
        </ul>
      `,
    },

    {
      id: 4,
      slug: 'mewgenics-boris-boss-guide',
      name: 'Boris',
      description: "Boris is the boss of The Sewers. A grotesquely bloated fetus with permanent Trample, he relentlessly pursues anyone who dares to damage him.",
      publishDate: '2026-03-09',
      imageUrl: '/images/boss/boss-04.webp',
      imageAlt: 'Mewgenics Boris Boss',
      seo: {
        title: 'Mewgenics Boris Boss Guide: Trample Mechanics & Strategy',
        description: 'Learn how to defeat Boris in Mewgenics. Master his movement triggers, Trample Dash attacks, and the best class matchups for The Sewers.',
        keywords: ['Mewgenics', 'Boris Boss', 'The Sewers', 'Mewgenics Guide', 'Trample Dash', 'Mewgenics Strategy'],
      },
      stats: {Health: '200', Damage: '0', Movement: '2', Luck: '5'},
      isPage: true,
      detailsHtml: `
        <blockquote>
          “ Blub blub ” — Boris
        </blockquote>
    
        <p>Boris is the boss of <strong>The Sewers</strong>. He is characterized by his massive health pool and his unique reactionary movement mechanic.</p>
    
        <h2>Behavior & Mechanics</h2>
        <ul>
          <li><strong>Reactionary Movement:</strong> Boris automatically moves 1 tile towards whatever unit last damaged him.</li>
          <li><strong>Permanent Trample:</strong> Boris permanently has the <strong>Trample</strong> property, dealing damage to any unit he moves through.</li>
          <li><strong>Turn Structure:</strong> Boris takes four turns per round. He will attempt to trample towards a target on his first three turns. On his last turn, he will use <strong>Trample Dash</strong> if a target is in range; otherwise, he ends his turn after a standard move.</li>
        </ul>
    
        <h2>Attacks</h2>
        <ul>
          <li><strong>Trample Dash:</strong> Boris charges in a cardinal direction until he hits a wall or static object, inflicting damage and knockback on any units in his path.</li>
        </ul>
    
        <h2>Tips & Strategy</h2>
        <ul>
          <li><strong>Distance Management:</strong> Because Boris moves toward his last attacker, use long-range classes like the <strong>Hunter</strong> or <strong>Thief</strong> to kite him. <strong>Thieves</strong> excel here due to their high Speed and ranged basic attack.</li>
          <li><strong>Status Effects:</strong> <strong>Immobilize</strong> is extremely potent as it disables all of Boris's actions except his dash. <strong>Stun</strong> and <strong>Sleep</strong> will also prevent his reactionary movement when damaged.</li>
          <li><strong>Damage Over Time (DOT):</strong> Effects like Poison or Burn are highly effective because they deal damage without triggering his 1-tile movement reaction.</li>
          <li><strong>Class Matchups:</strong> <strong>Tanks</strong> are recommended for their high Constitution to survive accidental hits. Avoid using <strong>Fighters</strong>, as their low range and lower defensive stats make them highly vulnerable to being trampled.</li>
        </ul>
    
        <h2>Trivia</h2>
        <ul>
          <li>Main Theme: <strong>Flush</strong></li>
          <li>Champion Variant: Boris will always attempt to Charge on his last turn of the round.</li>
        </ul>
      `,
    },

    {
      id: 5,
      slug: 'mewgenics-chubs-nubs-boss-guide',
      name: "Chubs & Nubs",
      description: "Chubs and Nubs are a pair of blind, headless dog bosses in Mewgenics. Fought together in The Junkyard, they react violently to damage with random, high-impact attacks.",
      publishDate: '2026-03-09',
      imageUrl: '/images/boss/boss-05.webp',
      imageAlt: "Mewgenics Chubs 'n' Nubs Bosses",
      seo: {
        title: "Chubs & Nubs Boss Guide: The Junkyard Strategy",
        description: "Master the Chubs 'n' Nubs boss fight in Mewgenics. Learn how to handle their blind movement, poison spit reactions, and enrage mechanics.",
        keywords: ['Mewgenics', 'Chubs and Nubs', 'The Junkyard Boss', 'Mewgenics Strategy', 'Chubs Stats', 'Mewgenics Guide'],
      },
      stats: {Health: '140', Damage: '5', Movement: '3', Luck: '5'},
      isPage: true,
      detailsHtml: `
        <blockquote>
          “ RoooF Blurp! Gurgle... ” — Chubs 'n' Nubs
        </blockquote>
    
        <p><strong>Chubs & Nubs</strong> are a pair of bosses encountered in <strong>The Junkyard</strong>. These headless dogs are completely blind, causing their movement and standard attacks to be randomized. However, they possess deadly reactive behaviors when harmed.</p>
    
        <h2>Core Mechanics</h2>
        <ul>
          <li><strong>Blindness:</strong> Due to their lack of sight, where they move and attack is largely random.</li>
          <li><strong>Reactionary Spit:</strong> When damaged, Chubs spits "neck juice" from his stump, hitting everything in a 3-tile line in front of him. This attack applies <strong>2 Poison</strong>.</li>
          <li><strong>Enrage:</strong> When one of the pair is killed, the survivor will whimper and then enter a permanent <strong>Enraged</strong> state, enhancing their abilities for the rest of the fight.</li>
        </ul>
    
        <h2>Attacks</h2>
        <ul>
          <li><strong>Chub Spin:</strong> Chubs spins in a circle, swinging his arm and hitting all adjacent units.</li>
          <li><strong>Enraged Chub Spin:</strong> After Nubs dies, Chubs performs the spin attack twice in a single action.</li>
          <li><strong>Enraged Neck Juice:</strong> After Nubs dies, the range of his poison spit reaction becomes infinite until it hits a target or obstacle.</li>
        </ul>
    
        <h2>Tips & Strategy</h2>
        <ul>
          <li><strong>Positioning:</strong> Avoid ending turns directly in front of Chubs. Since his spit reaction is triggered by <em>any</em> damage, even long-range attacks will cause him to fire a poison line in the direction he is currently facing.</li>
          <li><strong>Focus Fire:</strong> It is generally better to whittle both bosses down simultaneously before finishing one off. This minimizes the time you have to spend dealing with the significantly more dangerous Enraged version of the survivor.</li>
          <li><strong>Melee Caution:</strong> Classes like the <strong>Fighter</strong> or <strong>Butcher</strong> must be careful; getting caught in a <em>Chub Spin</em> can deal heavy damage, especially if the double-spin is active.</li>
        </ul>
    
        <h2>Trivia</h2>
        <ul>
          <li>Main Theme: <strong>Chumbucket Kitty</strong></li>
          <li>Found in: <strong>The Junkyard</strong></li>
          <li>The duo represents a "twin boss" archetype where the battle's difficulty shifts dramatically once the "link" is broken.</li>
        </ul>
      `,
    },

    {
      id: 6,
      slug: 'mewgenics-spinnerette-boss-guide',
      name: 'Spinnerette',
      description: "Spinnerette is an Adventure Boss in The Caves. A giant four-eyed spider, she overwhelms players by dropping from the ceiling and swarming the board with her children.",
      publishDate: '2026-03-09',
      imageUrl: '/images/boss/boss-06.webp',
      imageAlt: 'Mewgenics Spinnerette Boss',
      seo: {
        title: 'Mewgenics Spinnerette Boss Guide: The Caves Strategy',
        description: 'Learn how to defeat Spinnerette in Mewgenics. Master the fake-out opening, manage the Webbed status, and counter her Spiderling swarms.',
        keywords: ['Mewgenics', 'Spinnerette', 'The Caves Boss', 'Mewgenics Strategy', 'Spider Kitten', 'Webbed Status'],
      },
      stats: {Health: '250', Damage: '10', Movement: '3', Luck: '5'},
      isPage: true,
      detailsHtml: `
        <blockquote>
          “ Pwease don't hurt me! ” — "One Baby Spider"
        </blockquote>
    
        <p>Spinnerette is a boss encountered in <strong>The Caves</strong>. The encounter features a "fake-out" beginning where the player initially faces a single Spider Kitten before the true threat descends.</p>
    
        <h2>Behavior & Mechanics</h2>
        <ul>
          <li><strong>The Descent:</strong> The fight starts with a "Spider Kitten." Spinnerette descends from the ceiling either after one round passes or immediately upon the death of the kitten.</li>
          <li><strong>Web Manipulation:</strong> Spinnerette and her offspring focus on inflicting the <strong>Webbed</strong> status, which prevents movement and forces the unit to use a "Break Free" action.</li>
          <li><strong>Enraged State:</strong> If attacked from behind, Spinnerette becomes Enraged. This increases her damage and speed but prevents her from retreating to the ceiling to spawn more kittens.</li>
          <li><strong>Swarm Tactics:</strong> She frequently spawns <strong>Spiderlings</strong> and <strong>Spider Kittens</strong>. These units prioritize attacking webbed targets and can permanently kill downed cats.</li>
        </ul>
    
        <h2>Attacks</h2>
        <ul>
          <li><strong>Bite:</strong> A heavy melee attack affecting a 2x1 radius in front of her. If this attack downs a cat, it instantly destroys the body.</li>
          <li><strong>Web/Spider Lob:</strong> Throws webs or spiders in a cross pattern across the battlefield to restrict player movement.</li>
        </ul>
    
        <h2>Tips & Strategy</h2>
        <ul>
          <li><strong>Fire Counter:</strong> Fire is the ultimate counter to Spinnerette. Units with <strong>Burn</strong> stacks or <strong>Fire Aspect</strong> are immune to being webbed. Fire attacks also turn web tiles into fire tiles, clearing the path.</li>
          <li><strong>Freedom of Movement:</strong> Abilities with <strong>Knockback</strong> will automatically free a webbed unit without them needing to waste a turn using "Break Free."</li>
          <li><strong>Farming Resources:</strong> Because she spawns many low-HP Spiderlings, cats with "on-kill" effects (like <em>Soul Reap</em>) can use them to farm Mana or health throughout the fight.</li>
          <li><strong>Free Buffing:</strong> You can spend the first turn buffing your cats for free as long as you do not kill the initial Spider Kitten, though she will descend eventually regardless.</li>
        </ul>
    
        <h2>Trivia</h2>
        <ul>
          <li>Found in: <strong>The Caves</strong></li>
          <li>Champion Variant: Her bite attack deals significant damage and she can spawn larger <strong>Spider Cats</strong>.</li>
        </ul>
      `,
    },

    {
      id: 7,
      slug: 'mewgenics-dybbuk-boss-guide',
      name: 'Dybbuk',
      description: "Dybbuk is a boss encountered in The Boneyard. An elusive undead spirit that avoids direct damage through backflips and possesses your cats upon 'death'.",
      publishDate: '2026-03-09',
      imageUrl: '/images/boss/boss-07.webp',
      imageAlt: 'Mewgenics Dybbuk Boss',
      seo: {
        title: 'Mewgenics Dybbuk Boss Guide: Possession & Backflip Counters',
        description: 'Learn how to defeat Dybbuk in Mewgenics. Strategy guide for countering his Backflip, managing the Possession phase, and using Holy damage.',
        keywords: ['Mewgenics', 'Dybbuk Boss', 'The Boneyard', 'Mewgenics Strategy', 'Possession Mechanic', 'Backflip Counter'],
      },
      stats: {Health: '85', Damage: '5', Movement: '3', Luck: '5'},
      isPage: true,
      detailsHtml: `
        <blockquote>
          “ Not even Death can catch me! ” — Dybbuk
        </blockquote>
    
        <p>Dybbuk is a spectral boss found in <strong>The Boneyard</strong>. He is one of the most mechanically complex early bosses, requiring players to account for his high evasion and a mandatory second phase involving mind control.</p>
    
        <h2>Behavior & Mechanics</h2>
        <ul>
          <li><strong>Backflip Evasion:</strong> Dybbuk will <strong>Backflip</strong> away from most damage sources, moving one tile to an unoccupied adjacent space.</li>
          <li><strong>Possession (Phase 2):</strong> When Dybbuk reaches 0 HP, he instead drops to 1 HP and possesses the unit that dealt the blow. The possessed cat will attack its allies until downed. Dybbuk then exits the body and can be killed normally.</li>
          <li><strong>Undead Nature:</strong> As an Undead unit, Dybbuk is weak to <strong>Holy</strong> element abilities like <em>Holy Light</em> or <em>Prayer</em>.</li>
        </ul>
    
        <h2>Attacks</h2>
        <ul>
          <li><strong>Lick:</strong> An adjacent melee attack that deals damage and drains the target's <strong>Mana</strong>.</li>
          <li><strong>Summon Wisps:</strong> Dybbuk summons two <strong>Wisps</strong> to clutter the battlefield and distract the player.</li>
        </ul>
    
        <h2>Tips & Strategy</h2>
        <h3>Countering Evasion</h3>
        <ul>
          <li><strong>Cornering:</strong> Dybbuk cannot backflip if all adjacent tiles are occupied. Use summons from <strong>Hunters</strong> or <strong>Druids</strong> to trap him against walls or obstacles.</li>
          <li><strong>Status Effects:</strong> He cannot dodge while <strong>Immobile</strong> (Bear Traps, <em>Grapple</em>) or <strong>Stunned</strong>. Damage-over-time effects (Bleed, Poison, Burn, Leeches) and <strong>Thorns</strong> damage also cannot be dodged.</li>
          <li><strong>AoE Spells:</strong> Large area spells can still hit him if his 1-tile backflip doesn't take him out of the total blast zone.</li>
        </ul>
    
        <h3>Managing Possession</h3>
        <ul>
          <li><strong>Selective Possession:</strong> Try to land the "killing" blow with your weakest cat. If Dybbuk possesses your strongest damage-dealer, he can wipe your remaining party.</li>
          <li><strong>Phase Skip:</strong> The <em>Reap</em> ability can potentially execute Dybbuk, skipping the possession phase entirely.</li>
          <li><strong>Doomed Synergy:</strong> If a cat possesses the <em>Death's Scythe</em> or other self-inflicting <strong>Doomed</strong> mechanics, Dybbuk may trigger them on himself while controlling the cat.</li>
        </ul>
    
        <h2>Trivia</h2>
        <ul>
          <li>Main Theme: <strong>Them Kitty Bones</strong></li>
          <li>Found in: <strong>The Boneyard</strong></li>
          <li>If killed by a "Shadow" (like <em>After Image</em>), Dybbuk will possess the shadow and reappear the moment it expires.</li>
        </ul>
      `,
    },

    {
      id: 8,
      slug: 'mewgenics-gambit-boss-guide',
      name: 'Gambit',
      description: "Gambit is the high-stakes boss of The Desert. A gambling-themed opponent whose power fluctuates based on the roll of a giant d6 die on the battlefield.",
      publishDate: '2026-03-09',
      imageUrl: '/images/boss/boss-08.webp',
      imageAlt: 'Mewgenics Gambit Boss',
      seo: {
        title: 'Mewgenics Gambit Boss Guide: Dice Mechanics & RNG Strategy',
        description: 'Master the Gambit boss fight in Mewgenics. Learn how to manipulate the d6 rolls, counter his Wrath and Storm attacks, and use Confusion to your advantage.',
        keywords: ['Mewgenics', 'Gambit Boss', 'The Desert', 'Mewgenics Strategy', 'D6 Mechanic', 'Lonesome Road'],
      },
      stats: {Health: '110', Damage: '4', Movement: '4', Luck: '10'},
      isPage: true,
      detailsHtml: `
        <blockquote>
          “ You can prepare all you want, but if you never roll the dice, you’ll never be a winner! ” — Gambit
        </blockquote>
    
        <p>Gambit is the second boss encountered in <strong>The Desert</strong>. The entire fight revolves around a physical <strong>D6</strong> object that Gambit interacts with to determine his special attacks.</p>
    
        <h2>Behavior & Turn Structure</h2>
        <ul>
          <li><strong>Turn 1 & 2:</strong> Gambit attempts to throw the D6 onto the field if it's missing. If the D6 is present and shows a <strong>3 or less</strong>, Gambit will attack the die to reroll it. If it shows a <strong>4 or more</strong>, he will attack a player's cat instead.</li>
          <li><strong>Final Turn:</strong> Gambit jumps to the D6, consumes it, and triggers a special move based on the number shown. If the D6 is destroyed or missing, the attack fails and Gambit damages himself.</li>
        </ul>
    
        <h2>Dice Effects (The Roll)</h2>
        <ul>
          <li><strong>1 — Confusion:</strong> Gambit inflicts <strong>Confusion</strong> on himself.</li>
          <li><strong>2 — Poop:</strong> Spawns a poop obstacle.</li>
          <li><strong>3 — Lazer:</strong> Fires a 5-damage laser in a straight line.</li>
          <li><strong>4 — Quake:</strong> Hits all diagonal directions for 5 damage, knockback, and <strong>Bruise 1</strong>.</li>
          <li><strong>5 — Storm:</strong> 5x5 diamond AoE dealing heavy electricity damage and <strong>Stun</strong>.</li>
          <li><strong>6 — Wrath:</strong> Random explosions across the entire board (10 damage each).</li>
        </ul>
    
        <h2>Tips & Strategy</h2>
        <ul>
          <li><strong>Die Manipulation:</strong> Your goal is to force the D6 to a low number (1-3) before Gambit's final turn. Cats moving <em>after</em> Gambit's second turn are best suited for "fixing" the die.</li>
          <li><strong>Confusion Tech:</strong> Inflicting <strong>Confusion</strong> on Gambit can prevent him from correctly targeting the D6, causing his final phase to fail and deal self-damage.</li>
          <li><strong>Destruction:</strong> Abilities that destroy inanimate objects can remove the D6 entirely. Wait until after his second turn to do this so he cannot throw a replacement.</li>
          <li><strong>Crowding:</strong> You can surround the D6 with allies or rocks to prevent Gambit from reaching it to reroll a low number you want to keep.</li>
        </ul>
    
        <h2>Trivia</h2>
        <ul>
          <li>Main Theme: <strong>Lonesome Road</strong></li>
          <li>Found in: <strong>The Desert</strong></li>
          <li>Champion Variant: Higher numbers on the dice are significantly more deadly and have increased range.</li>
        </ul>
      `,
    },

    {
      id: 9,
      slug: 'mewgenics-zodiac-boss-guide',
      name: 'Zodiac',
      description: "Zodiac is a crazed gunman boss found in The Desert. A deadly marksman who punishes movement, he forces players to use cover and tactical positioning to survive his six-shooter.",
      publishDate: '2026-03-09',
      imageUrl: '/images/boss/boss-09.webp',
      imageAlt: 'Mewgenics Zodiac Boss',
      seo: {
        title: 'Mewgenics Zodiac Boss Guide: Movement & Ammo Strategy',
        description: 'Learn how to defeat Zodiac in Mewgenics. Master his reactive shooting mechanics, bait out his limited ammo, and find the best cover in The Desert.',
        keywords: ['Mewgenics', 'Zodiac Boss', 'The Desert', 'Mewgenics Strategy', 'Ammo Management', 'Lonesome Road'],
      },
      stats: {Health: '75', Damage: '6', Movement: '5', Luck: '5'},
      isPage: true,
      detailsHtml: `
        <blockquote>
          “ I want you to print this cipher on your tombstone! ” — Zodiac
        </blockquote>
    
        <p>Zodiac is a boss encountered in <strong>The Desert</strong>. He acts as a high-precision glass cannon that specializes in "Overwatch" style mechanics, punishing any unit that changes its position on the battlefield.</p>
    
        <h2>Behavior & Mechanics</h2>
        <ul>
          <li><strong>Reactive Shot:</strong> Zodiac will automatically fire his revolver in the direction of any unit or object that moves to a different tile. He does <em>not</em> react to actions that are performed while standing still.</li>
          <li><strong>Ammo Management:</strong> Zodiac has a six-shot capacity. Once he attempts a seventh shot, he becomes confused and must spend his turn reloading.</li>
          <li><strong>Turn Pattern:</strong> During his active turn, Zodiac moves to a random tile and may fire a standard shot. If he is empty, he will spend the turn reloading his gun.</li>
        </ul>
    
        <h2>Tips & Strategy</h2>
        <ul>
          <li><strong>Stationary Combat:</strong> Classes with ranged basic attacks, such as the <strong>Hunter</strong> or <strong>Mage</strong>, are incredibly effective because they can deal damage without triggering a reactive shot.</li>
          <li><strong>Baiting Ammo:</strong> You can waste Zodiac's bullets by moving inanimate objects or spawning familiars. Using <em>Dump</em> to create obstacles and then moving them is a safe way to empty his cylinder.</li>
          <li><strong>Infinite Cover:</strong> Look for <strong>Tires</strong> on the map; they have infinite durability and can be used to block his shots indefinitely.</li>
          <li><strong>Tanking:</strong> High-Constitution classes like the <strong>Tank</strong> or <strong>Cleric</strong> can intentionally trigger and absorb shots to clear a path for more fragile allies.</li>
          <li><strong>Reload Manipulation:</strong> Since Zodiac only reloads on his own turn when empty, try to bait him into firing his last bullet <em>during</em> your cats' movement phase. This guarantees he will waste his next actual turn reloading.</li>
        </ul>
    
        <h2>Trivia</h2>
        <ul>
          <li>Main Theme: <strong>Lonesome Road</strong></li>
          <li>Found in: <strong>The Desert</strong></li>
          <li>Champion Variant: He will shoot at absolutely anything that moves and possesses a higher damage ceiling.</li>
        </ul>
      `,
    },

    {
      id: 10,
      slug: 'mewgenics-johnny-boss-guide',
      name: 'Johnny',
      description: "Johnny is the psychic powerhouse of The Bunker. A massive, immobile mutant who relies on a dedicated group of Cultist Lackeys to 'wash' him so he can unleash his devastating telekinetic spells.",
      publishDate: '2026-03-09',
      imageUrl: '/images/boss/boss-10.webp',
      imageAlt: 'Mewgenics Johnny Boss',
      seo: {
        title: 'Mewgenics Johnny Boss Guide: Cultist Mechanics & Psychic Attacks',
        description: 'Master the Johnny boss fight in Mewgenics. Learn how to disrupt his Cultist Lackeys, avoid Mind Control, and exploit his immobility in The Bunker.',
        keywords: ['Mewgenics', 'Johnny Boss', 'The Bunker', 'Mewgenics Strategy', 'Cultist Lackey', 'Psychic Mutant'],
      },
      stats: {Health: '250', Damage: '0', Movement: '0', Luck: '5'},
      isPage: true,
      detailsHtml: `
        <blockquote>
          “ Someone bring me a damp rag! ” — Johnny
        </blockquote>
    
        <p>Johnny is a large, 4-tile boss encountered in <strong>The Bunker</strong>. Unlike most bosses, he is completely immobile and his offensive capabilities are entirely dependent on his minions.</p>
    
        <h2>Behavior & Mechanics</h2>
        <ul>
          <li><strong>The Washing Mechanic:</strong> Johnny can only use his powerful psychic spells if a <strong>Cultist Lackey</strong> is adjacent and "washing" him. If no lackeys are washing him, he is restricted to summoning more cultists or granting them bonus turns.</li>
          <li><strong>Immobility:</strong> Johnny cannot move or be affected by knockback. He always spawns in the center of the board.</li>
          <li><strong>Zealot Transformation:</strong> If Johnny is defeated while Cultist Lackeys are still alive, they immediately transform into more dangerous <strong>Cultist Zealots</strong>.</li>
        </ul>
    
        <h2>Attacks</h2>
        <ul>
          <li><strong>Mind Control:</strong> Inflicts the <strong>Charmed</strong> status on an allied unit, turning them against you.</li>
          <li><strong>Super Mind Blast:</strong> A board-wide attack that deals heavy damage and knocks back all units.</li>
          <li><strong>Telekinesis:</strong> Forcefully moves a unit in any direction until it collides with an obstacle.</li>
          <li><strong>Summon/Reanimate:</strong> If not being washed, Johnny will summon a new lackey from the board edge or reanimate a downed one adjacent to him.</li>
        </ul>
    
        <h2>Tips & Strategy</h2>
        <ul>
          <li><strong>Disrupt the Washers:</strong> Your primary goal is to keep the Cultist Lackeys away from Johnny. Use summons, obstacles, or knockback to create a "no-wash zone" around the boss.</li>
          <li><strong>Backstab Advantage:</strong> Since Johnny never turns or moves, he is permanently vulnerable to backstabs. High-damage classes like the <strong>Butcher</strong> or <strong>Fighter</strong> can exploit this for massive critical damage.</li>
          <li><strong>Friendly Fire:</strong> Ironically, Johnny’s own <em>Mind Blast</em> and <em>Super Mind Blast</em> will knock back his own cultists. Use these moments of forced separation to move in and deal damage while he is temporarily "unwashed" and unable to cast.</li>
          <li><strong>Summon Saturation:</strong> Spawning your own familiars can "dilute" the target pool for <em>Mind Control</em>, making it less likely that your main cats will be turned against you.</li>
        </ul>
    
        <h2>Trivia</h2>
        <ul>
          <li>Main Theme: <strong>Alone in the Dark</strong></li>
          <li>Found in: <strong>The Bunker</strong></li>
          <li>Champion Variant: He calls in more frequent Cultist reinforcements and his psychic spells have increased potency.</li>
        </ul>
      `,
    },

    {
      id: 11,
      slug: 'mewgenics-crater-maker-boss-guide',
      name: 'Crater Maker',
      description: "Crater Maker is a massive 3x3 boss encountered in The Crater. A cosmic horror with a cycling attack pattern that shifts every time she takes damage.",
      publishDate: '2026-03-09',
      imageUrl: '/images/boss/boss-11.webp',
      imageAlt: 'Mewgenics Crater Maker Boss',
      seo: {
        title: 'Mewgenics Crater Maker Boss Guide: Attack Cycling & Strategy',
        description: 'Master the Crater Maker boss fight in Mewgenics. Learn how to manipulate her primed attacks, avoid the instant-kill Consume, and counter her side-shots.',
        keywords: ['Mewgenics', 'Crater Maker Boss', 'The Crater', 'Mewgenics Strategy', 'Pukewave', 'Crater Howl'],
      },
      stats: {Health: '280', Damage: '9', Movement: '2', Luck: '5'},
      isPage: true,
      detailsHtml: `
        <blockquote>
          “ OoOoOoOoOoOoOoOoOoOoOo!!! ” — Crater Maker
        </blockquote>
    
        <p>Crater Maker is a colossal boss found in <strong>The Crater</strong>. She occupies a 3x3 grid and possesses the <strong>Trample</strong> ability. The fight is a tactical puzzle centered around "cycling" her next move through damage.</p>
    
        <h2>Behavior & Mechanics</h2>
        <ul>
          <li><strong>Primed Attacks:</strong> On her first turn, she moves toward the player and "primes" one of four attacks. This attack triggers on her second turn.</li>
          <li><strong>Damage Cycling:</strong> Every time the player deals direct damage to Crater Maker, she cycles to the next attack in her queue. Damage-over-time (DOT) effects like <strong>Poison</strong> or <strong>Burn</strong> do <em>not</em> trigger this cycle.</li>
          <li><strong>Side-Counter:</strong> In her Champion variant (and base behavior when damaged), she automatically shoots projectiles from her sides.</li>
        </ul>
    
        <h2>The Attack Cycle</h2>
        <ol>
          <li><strong>Crater Howl!:</strong> Damages all other units and inflicts <strong>Stun</strong> or <strong>Immobile</strong>.</li>
          <li><strong>Consume!:</strong> Targets the single tile directly in front of her mouth. <strong>Any cat caught in this tile is instantly killed.</strong></li>
          <li><strong>Pukewave!:</strong> A 2x2 diagonal pattern that covers tiles in creep.</li>
          <li><strong>Rampage!:</strong> A back-and-forth charge that tramples everything in her path, ending at her original location but facing the opposite direction.</li>
        </ol>
    
        <h2>Tips & Strategy</h2>
        <ul>
          <li><strong>Attack Manipulation:</strong> Carefully count your hits. You can intentionally attack her to "skip" a dangerous <em>Crater Howl!</em> or <em>Rampage!</em> to land on <em>Consume!</em>. If your cats are positioned behind or away from her mouth, <em>Consume!</em> becomes a wasted turn for the boss.</li>
          <li><strong>Stun Lock:</strong> Stunning Crater Maker on her second turn cancels her primed attack entirely and resets her cycle. Furthermore, while stunned, she will not counter-attack from her sides.</li>
          <li><strong>Positioning:</strong> Never end a turn directly to her sides to avoid the reactive side-shots. Melee attackers should focus on her rear to stay safe while manipulating her attack cycle.</li>
          <li><strong>Familiar Management:</strong> Be cautious with automated familiars. Their uncontrolled attacks can accidentally cycle the boss into a devastating <em>Rampage!</em> or <em>Crater Howl!</em> at the end of your turn.</li>
        </ul>
    
        <h2>Trivia</h2>
        <ul>
          <li>Main Theme: <strong>Feline Invader</strong></li>
          <li>Found in: <strong>The Crater</strong></li>
          <li>She is one of the few bosses that can permanently remove a cat from your run via her <em>Consume!</em> ability.</li>
        </ul>
      `,
    },
    
    {
      id: 12,
      slug: 'mewgenics-the-coven-boss-guide',
      name: 'The Coven',
      description: "The Coven is a high-stakes ritual boss found in The Core. They act as a precursor to the Tormentor, performing a dark ceremony involving candles and sacrificial bodies.",
      publishDate: '2026-03-09',
      imageUrl: '/images/boss/boss-12.svg',
      imageAlt: 'Mewgenics The Coven Boss',
      seo: {
        title: 'Mewgenics The Coven Boss Guide: Ritual Mechanics & Tormentor Prep',
        description: 'Learn how to defeat The Coven in Mewgenics. Master the candle mechanics to weaken the Tormentor and stop the dark ritual in The Core.',
        keywords: ['Mewgenics', 'The Coven', 'The Core Boss', 'Tormentor', 'Mewgenics Strategy', 'Down With The Devil'],
      },
      stats: {Health: '300', Damage: '5', Movement: '0', Luck: '5'},
      isPage: true,
      detailsHtml: `
        <blockquote>
          “ He will feast on your flesh and bathe in your blood! ” — The Coven
        </blockquote>
    
        <p>The Coven is a stationary boss encountered in <strong>The Core</strong>. The fight takes place in an arena featuring an inverted pentagram with five 50-HP <strong>Candles</strong> at its points. The primary goal is to either kill the Coven quickly or prepare for the arrival of the Tormentor by managing the ritual environment.</p>
    
        <h2>Behavior & Ritual Phases</h2>
        <ul>
          <li><strong>Rising Bodies:</strong> Each turn, one of the Coven's four bodies rises, granting the boss <strong>+1 Brace</strong> per active body.</li>
          <li><strong>Ritual Actions:</strong> Starting from the second turn, the Coven cycles through the following thematic attacks:
            <ul>
              <li><strong>Pestilence:</strong> Summons <strong>Poison Frogs</strong> to clutter the field.</li>
              <li><strong>Famine:</strong> Surrounds enemies with swarms of flies.</li>
              <li><strong>War:</strong> Scatters projectiles that create <strong>Lava tiles</strong> across the arena.</li>
              <li><strong>Death:</strong> The final phase where the Tormentor appears to devour the Coven.</li>
            </ul>
          </li>
          <li><strong>Candle Management:</strong> Candles can be extinguished using <strong>Water</strong> or <strong>Wind</strong> element attacks. The Coven will attempt to reignite one extinguished candle each turn.</li>
        </ul>
    
        <h2>The Tormentor Connection</h2>
        <p>If the ritual completes (all 4 bodies rise), the Tormentor is summoned. The Tormentor's strength is directly tied to the candles: it gains <strong>additional abilities</strong> for every candle that remains lit or intact. However, if you kill the Coven before the ritual ends, the Tormentor is never summoned, and the fight ends immediately.</p>
    
        <h2>Tips & Strategy</h2>
        <ul>
          <li><strong>The Speed Run:</strong> If your party has high single-target DPS (like a <strong>Butcher</strong> or <strong>Fighter</strong>), focus all damage on the Coven. Killing it before the fourth body rises skips the much harder Tormentor phase entirely.</li>
          <li><strong>Environmental Control:</strong> If you cannot kill the Coven in time, focus on destroying or extinguishing the candles. Reducing the number of active candles is the only way to make the subsequent Tormentor fight manageable.</li>
          <li><strong>Brace Mitigation:</strong> Because the Coven gains <strong>Brace</strong> as bodies rise, armor-piercing or status-heavy builds (Poison/Bleed) are effective at bypassing its increasing defenses.</li>
        </ul>
    
        <h2>Trivia</h2>
        <ul>
          <li>Main Theme: <strong>Down With The Devil</strong></li>
          <li>Found in: <strong>The Core</strong></li>
          <li>The Coven's HP has no impact on the Tormentor's health; the two are separate entities in the game's logic.</li>
        </ul>
      `,
    },

    {
      id: 13,
      slug: 'mewgenics-man-in-the-moon-boss-guide',
      name: 'The Man in the Moon',
      description: "The Man in the Moon is the colossal final boss of The Moon chapter. A multi-stage encounter involving a massive face and two separate hands that must be manipulated to break his defenses.",
      publishDate: '2026-03-09',
      imageUrl: '/images/boss/boss-13.svg',
      imageAlt: 'Mewgenics Man in the Moon Boss',
      seo: {
        title: 'Mewgenics Man in the Moon Boss Guide: Break Brace & Hand Strategy',
        description: 'Master the Man in the Moon boss fight in Mewgenics. Learn how to use "Stop Hitting Yourself," manage the Moon Hands, and break the +10 Brace buff.',
        keywords: ['Mewgenics', 'Man in the Moon', 'The Moon Boss', 'Mewgenics Strategy', 'Moon Hand', 'So High'],
      },
      stats: {Health: '400', Damage: '0', Movement: '0', Luck: '5'},
      isPage: true,
      detailsHtml: `
        <blockquote>
          “ They will be punished with everlasting destruction! ” — The Man in the Moon
        </blockquote>
    
        <p>The Man in the Moon is a stationary, large-scale boss in <strong>The Moon</strong>. He is accompanied by two <strong>Moon Hands</strong> that act as separate entities. The core puzzle of the fight is bypassing his massive <strong>+10 Brace</strong> buff by forcing his own hands to attack his face.</p>
    
        <h2>Behavior & Moon Hands</h2>
        <ul>
          <li><strong>Consistent Breath:</strong> Every turn, he charges a breath attack that pushes all units (except hands) back 10 tiles. This can be interrupted if he is forced to eat a unit.</li>
          <li><strong>Moon Hands (100 HP):</strong> These hands only take 1 damage per hit. Hitting them from the side turns them; hitting them from behind (the eye) forces them to dash forward or release a captured unit.</li>
          <li><strong>The Grab:</strong> Hands will grab any unit that ends its movement directly in front of them.</li>
        </ul>
    
        <h2>The "Stop Hitting Yourself" Mechanic</h2>
        <p>If a cat ends its movement in the center tile directly in front of the boss's mouth, they are swallowed. Inside the mouth, the cat has two options:</p>
        <ul>
          <li><strong>Flail:</strong> A 25% chance to break free and escape.</li>
          <li><strong>"Stop Hitting Yourself" (10 Mana):</strong> Commands both Moon Hands to dash-attack the face. <strong>This is the primary way to remove the +10 Brace buff.</strong></li>
        </ul>
    
        <h2>Tips & Strategy</h2>
        <ul>
          <li><strong>Brace Breaking:</strong> Once the Brace is removed via a hand dash, any further hand dashes into the face that turn deal a flat 20 damage. Higher quantity of attacks is better than high-damage single hits for positioning hands.</li>
          <li><strong>Tanking the Mouth:</strong> High-Constitution classes like <strong>Butcher</strong> or <strong>Tank</strong> (especially with <strong>Thorns</strong>) are ideal for being swallowed. While the boss chews on them, they can force the hands to attack and deal contact damage back to the boss.</li>
          <li><strong>Status Immunity:</strong> Moon Hands are immune to almost all status effects (except <strong>Leeches</strong>). Do not waste <strong>Stun</strong> on the hands, as it prevents them from dashing into the boss to break his Brace.</li>
          <li><strong>Avoid AI Summons:</strong> Units like Mini-Me's or aggressive familiars can be detrimental, as they often hit the hands from the wrong side and ruin your positioning for a dash.</li>
          <li><strong>The "Amoeba" Skip:</strong> If an <strong>Amoeba</strong> is present and takes the Man in the Moon, using <strong>Reap</strong> will result in an instant kill.</li>
        </ul>
    
        <h2>Trivia</h2>
        <ul>
          <li>Main Theme: <strong>So High</strong></li>
          <li>If a cat is downed while inside the mouth, they are instantly killed and swallowed.</li>
          <li>The Hands automatically die when the Man in the Moon is defeated.</li>
        </ul>
      `,
    },

    {
      id: 14,
      slug: 'mewgenics-stacy-boss-guide',
      name: 'Stacy',
      description: "Stacy is a highly customizable boss found in The Lab. As a mutant clone of Dr. Beanies's cat, her stats, elemental affinities, and special abilities are determined by player choices made leading up to the fight.",
      publishDate: '2026-03-09',
      imageUrl: '/images/boss/boss-14.webp',
      imageAlt: 'Mewgenics Stacy Boss',
      seo: {
        title: 'Mewgenics Stacy Boss Guide: Lab Customization & Strategies',
        description: 'Learn how to handle the Stacy boss fight in Mewgenics. A complete guide to her body, element, and head mutations to build a fight your team can win.',
        keywords: ['Mewgenics', 'Stacy Boss', 'The Lab', 'Mewgenics Strategy', 'Stacy Mutant', 'Dr. Beanies'],
      },
      stats: {Health: '100', Damage: '5', Movement: '4', Luck: '5'},
      isPage: true,
      detailsHtml: `
        <blockquote>
          “ Meeow!? ” — Stacy Mutant
        </blockquote>
    
        <p>Stacy is a unique boss encountered in <strong>The Lab</strong>. Unlike other bosses with fixed patterns, the player "builds" Stacy through a series of four choices, allowing you to tailor the challenge to your party's strengths.</p>
    
        <h2>Customization Options</h2>
        <h3>1. Body (Defensive Buffs)</h3>
        <ul>
          <li><strong>Thorns:</strong> Stacy gains +3 Thorns.</li>
          <li><strong>Brace:</strong> Stacy gains +3 Brace.</li>
          <li><strong>Holy Shield:</strong> Stacy starts with +7 Holy Shield.</li>
          <li><em>No Thanks:</em> Stacy receives a random <strong>Disorder</strong> and <strong>Poison 3</strong>.</li>
        </ul>
    
        <h3>2. Element (Offense & Immunities)</h3>
        <ul>
          <li><strong>Fire:</strong> Gains <em>Spit Lava</em> (Burn/Lava tiles) and Fire immunity. Lowest raw damage output but creates hazards.</li>
          <li><strong>Ice:</strong> Gains <em>Ice Breath</em> (Knockback/Freeze) and Ice immunity. Can potentially stunlock melee units.</li>
          <li><strong>Electric:</strong> Gains <em>Lightning Dash</em> and Electric immunity. High mobility and a 10% Stun chance.</li>
          <li><em>No Thanks:</em> Stacy uses <em>Magic Missile</em> and a basic punch, but gains a random <strong>Disorder</strong> and <strong>Parasite</strong>.</li>
        </ul>
    
        <h3>3. Stats (Tuning)</h3>
        <ul>
          <li><strong>Health Up/Speed Down:</strong> +25 Health, -2 Damage.</li>
          <li><strong>Damage Up/Health Down:</strong> +2 Damage, -25 Health.</li>
          <li><strong>Speed Up/Damage Down:</strong> +6 Speed, -1 Damage.</li>
          <li><em>No Thanks:</em> Stacy receives all 7 basic <strong>Injuries</strong> (All Stats Down).</li>
        </ul>
    
        <h3>4. Head (Unique Traits)</h3>
        <ul>
          <li><strong>Double Head:</strong> Grants Stacy an <strong>Extra Turn</strong> each round.</li>
          <li><strong>Third Paw:</strong> Stacy <strong>Counters</strong> attacks and inflicts <strong>Bleed</strong> on hit.</li>
          <li><strong>Mirror Shine:</strong> Reflects Projectiles and emits 1 <strong>Sparkle</strong> each turn.</li>
          <li><em>No Thanks:</em> Stacy gets a random <strong>Disorder</strong>, plus <strong>No Health/Mana Regen</strong> for the fight.</li>
        </ul>
    
        <h2>Tips & Strategy</h2>
        <ul>
          <li><strong>Strategic Sabotage:</strong> If your team has high sustain but low burst, choosing "No Thanks" on the Body or Head can weaken her significantly at the cost of giving her minor debuffs that don't help you much.</li>
          <li><strong>Elemental Hard-Counters:</strong> Never pick an element that your main damage-dealer relies on (e.g., don't pick Fire if your main cat is a Fire Mage), as she will be completely immune.</li>
          <li><strong>The Ice Trap:</strong> Ice Stacy is dangerous for melee-heavy teams due to the <strong>Freeze</strong> chance. If you choose Ice, ensure you have a <strong>Hunter</strong> or other ranged units to avoid being stunlocked.</li>
          <li><strong>The Simple Path:</strong> Choosing "No Element" makes her moveset very predictable (Magic Missile), which is often easier to manage than the elemental hazards, even with the random Disorder she gains.</li>
        </ul>
    
        <h2>Trivia</h2>
        <ul>
          <li>Main Theme: <strong>Endless Misery</strong></li>
          <li>Stacy is one of the many clones created by <strong>Dr. Beanies</strong>, explaining her unstable and modular genetic makeup.</li>
        </ul>
      `,
    },

    {
      id: 15,
      slug: 'mewgenics-spewer-boss-guide',
      name: 'Spewer',
      description: "Spewer is a final boss of The Lab. A pill-obsessed mutant that evolves his attacks based on the chemical compounds he consumes, using a powerful vacuum-like inhale to displace enemies.",
      publishDate: '2026-03-09',
      imageUrl: '/images/boss/boss-15.webp',
      imageAlt: 'Mewgenics Spewer Boss',
      seo: {
        title: 'Mewgenics Spewer Boss Guide: Pill Effects & Inhale Strategy',
        description: 'Defeat Spewer in Mewgenics. Detailed guide on Creep, Tar, and Lava pill buffs, plus how to escape his inhale and avoid infinite Kinetic Spike loops.',
        keywords: ['Mewgenics', 'Spewer Boss', 'The Lab', 'Mewgenics Strategy', 'Pill Mechanics', 'Endless Misery'],
      },
      stats: {Health: '125', Damage: '2', Movement: '3', Luck: '5'},
      isPage: true,
      detailsHtml: `
        <blockquote>
          “ Pills pills pills!!! ” — Spewer
        </blockquote>
    
        <p>Spewer is one of the potential final encounters in <strong>The Lab</strong>. The fight is highly dynamic, as the boss's projectiles and stats change based on the random pills that spawn throughout the arena.</p>
    
        <h2>Behavior & Pill Evolution</h2>
        <p>Spewer intermittently inhales pills within a 3-tile line. Each pill heals him and grants a permanent stackable buff and a new projectile property:</p>
        <ul>
          <li><strong>Creep Pill:</strong> Grants <strong>+1 Damage Up</strong>. Projectiles leave <strong>Creep</strong> tiles and inflict <strong>Poison</strong>.</li>
          <li><strong>Tar Pill:</strong> Grants <strong>+1 Brace</strong>. Projectiles leave <strong>Tar</strong> tiles and inflict 2 stacks of <strong>Tarred</strong>.</li>
          <li><strong>Lava Pill:</strong> Grants <strong>+1 Speed Up</strong>. Projectiles leave <strong>Lava</strong> tiles and inflict 4 stacks of <strong>Burn</strong>.</li>
        </ul>
    
        <h2>The Inhale & Spit Mechanic</h2>
        <ul>
          <li><strong>Retaliation:</strong> If damaged by a unit in a straight line, Spewer reacts by inhaling the closest unit. </li>
          <li><strong>Capture:</strong> While a unit is inside him, Spewer gains <strong>Trample</strong>. The unit can be freed if Spewer is attacked by another ally or by using their own "Thrash" ability.</li>
          <li><strong>The Spit:</strong> On his next turn, Spewer launches the inhaled unit. They travel until they hit an object, taking damage and receiving a status effect (Poison/Burn/Tar) based on the last pill Spewer ate.</li>
        </ul>
    
        <h2>Tips & Strategy</h2>
        <ul>
          <li><strong>Diagonal Dominance:</strong> Spewer's inhale only triggers in cardinal directions. Attacking from a diagonal position allows you to deal damage safely without being sucked in. He also struggles to target units within 2 tiles diagonally.</li>
          <li><strong>Pill Denial:</strong> Prioritize destroying pills before Spewer can reach them. If the fight drags on and he consumes multiple pills, his scaling damage and speed will eventually overwhelm your team.</li>
          <li><strong>The Kinetic Spike Trap:</strong> Avoid using <strong>Kinetic Spikes</strong> or similar infinite-range counterattacks. If a cat with this effect is spat out, the damage may trigger a reactionary inhale, trapping the cat in an endless loop of being sucked in and spat out.</li>
          <li><strong>Thrash to Escape:</strong> If a cat is inhaled, using a spell to damage Spewer first unlocks the <strong>Thrash</strong> ability, which is a guaranteed way to break free while dealing damage.</li>
        </ul>
    
        <h2>Trivia</h2>
        <ul>
          <li>Main Theme: <strong>Endless Misery</strong></li>
          <li>Spewer can accidentally inhale neutral objects like rocks or crates if he is knocked back into them.</li>
          <li>Champion Variant: He starts with a random pill effect already active and has increased health.</li>
        </ul>
      `,
    },

    {
      id: 16,
      slug: 'mewgenics-lord-bunga-boss-guide',
      name: 'Lord Bunga',
      description: "Lord Bunga is the primitive ruler of the Ice Age. Seated upon a throne of bones, he enters a bloodthirsty craze once provoked, capable of consuming adjacent units and retaliating with concussive blows.",
      publishDate: '2026-03-09',
      imageUrl: '/images/boss/boss-16.webp',
      imageAlt: 'Mewgenics Lord Bunga Boss',
      seo: {
        title: 'Mewgenics Lord Bunga Boss Guide: Ice Age Strategy',
        description: 'Learn how to defeat Lord Bunga in Mewgenics. Master the two-phase ritual, avoid the baby-eating frenzy, and counter his concussive Bone Club Slam.',
        keywords: ['Mewgenics', 'Lord Bunga', 'Ice Age Boss', 'Mewgenics Strategy', 'Bunga Champions', 'Bone Club Slam'],
      },
      stats: {Health: '300', Damage: '6', Movement: '2', Luck: '5'},
      isPage: true,
      detailsHtml: `
        <blockquote>
          “ Eetoo thrag kats! Yum yom! ” — Lord Bunga
        </blockquote>

        <p>Lord Bunga is an Adventure Boss encountered in the <strong>Ice Age</strong>. He begins the fight passively on his throne, protected by his Champions, before transforming into a high-threat melee powerhouse.</p>

        <h2>Behavior & Phases</h2>
        <ul>
          <li><strong>Phase 1: The Throne:</strong> Bunga sits passively while two <strong>Bunga's Champions</strong> attack the player. This phase ends when both Champions are defeated or Bunga drops below 150 HP.</li>
          <li><strong>Phase 2: The Craze:</strong> Bunga devours the baby on his head and joins the fray. In this state, he automatically <strong>consumes any unit adjacent to him</strong> at the start of his turn and counterattacks every time he is hit from the front.</li>
          <li><strong>Blind Spot:</strong> Bunga is "blind" to units directly behind him; he cannot devour units or retaliate against attacks coming from his rear.</li>
        </ul>

        <h2>Attacks</h2>
        <ul>
          <li><strong>Bone Club Slam:</strong> A 2x2 AoE attack with knockback. Any cat hit receives a <strong>permanent concussion</strong>. This is his primary counterattack move.</li>
          <li><strong>Jump:</strong> A leaping move with <strong>Trample</strong> damage upon landing.</li>
          <li><strong>Yell:</strong> A vocal blast that inflicts the <strong>Slow</strong> status on players.</li>
          <li><strong>Reactive Frontal Attack:</strong> Deals 4 damage and heavy knockback to anyone attacking him from the front while he is standing.</li>
        </ul>

        <h2>Tips & Strategy</h2>
        <ul>
          <li><strong>Rear Assault:</strong> Melee units must end their turns behind Bunga to avoid being consumed at the start of his turn. Attacking from the back also prevents his deadly concussive counters.</li>
          <li><strong>Burst Management:</strong> Try to weaken the Champions and Bunga simultaneously. Bringing Bunga to exactly 151 HP before unleashing a burst of damage can minimize the time spent in his dangerous second phase.</li>
          <li><strong>Concussion Prevention:</strong> The <strong>Bulletproof Vest</strong> item is highly recommended for this fight, as it grants immunity to the concussions caused by his Club Slam.</li>
          <li><strong>Mobility is Key:</strong> Ensure your team has movement abilities to reposition cats if the Champions' spears push them into Bunga's "consume" range.</li>
        </ul>

        <h2>Trivia</h2>
        <ul>
          <li>Main Theme: <strong>Mom I Really Hate You</strong></li>
          <li>If recruited via <strong>Eternal Servitude</strong>, Bunga performs his transformation animation at the start of every fight. While he will ground-pound the area, he will no longer eat your allied cats.</li>
          <li>He is the leader of the Cavemen tribe found throughout the Ice Age.</li>
        </ul>
      `,
    },

    {
      id: 17,
      slug: 'mewgenics-hitler-ii-boss-guide',
      name: 'Hitler II',
      description: "Hitler II is a cybernetic boss encountered in The Future. This two-phase fight begins with his disembodied head in a jar commanding a growing army of clones before he transitions into a massive mech suit.",
      publishDate: '2026-03-09',
      imageUrl: '/images/boss/boss-17.webp',
      imageAlt: 'Mewgenics Hitler II Boss',
      seo: {
        title: 'Mewgenics Hitler II Boss Guide: Phase 1 Strategy & Clone Mechanics',
        description: 'Master the Hitler II boss fight in Mewgenics. Learn how to manage Führerfötuses and counter the Grow mechanic in The Future.',
        keywords: ['Mewgenics', 'Hitler II', 'The Future Boss', 'Mewgenics Strategy', 'Führerclones', 'HUMANICIDE'],
      },
      stats: {Health: '200', Damage: '0', Movement: '2', Luck: '5'},
      isPage: true,
      detailsHtml: `
        <blockquote>
          “ AUFWACHEN, HIER SIND WIEDER KATZEN! ” — Hitler II
        </blockquote>

        <p>Hitler II is an Adventure Boss found in <strong>The Future</strong>. He acts as a high-tech commander, forcing the player to deal with a rapidly multiplying army of clones before the fight escalates into its second phase.</p>

        <h2>Behavior & Phase 1 Mechanics</h2>
        <ul>
          <li><strong>Clone Commander:</strong> Hitler II starts at the far end of the arena, surrounded by several <strong>Führerfötuses</strong>. </li>
          <li><strong>Passive Aggression:</strong> During this phase, Hitler II does not attack directly. Instead, he focuses entirely on battlefield management and unit evolution.</li>
          <li><strong>Army Growth:</strong> He utilizes his unique <em>Grow</em> ability to mature his fetuses into fully combat-ready <strong>Führerclones</strong>, which possess multi-hit combo attacks.</li>
        </ul>

        <h2>Attacks (Phase 1)</h2>
        <ul>
          <li><strong>Grow:</strong> Hitler II selects two Führerfötuses and causes them to instantly grow into Führerclones. This action also heals the targeted units to full HP (33 HP).</li>
        </ul>

        <h2>Strategies</h2>
        <ul>
          <li><strong>Fetus Control:</strong> Focus on destroying the Führerfötuses before Hitler II can use <em>Grow</em> on them. It is much easier to eliminate the stationary fetuses than to deal with the mobile, high-damage clones.</li>
          <li><strong>Area of Effect:</strong> Since the fetuses are often clustered around the arena, using AoE spells from the <strong>Mage</strong> or <strong>Necromancer</strong> can clear multiple potential threats in a single turn.</li>
          <li><strong>Bypass the Army:</strong> If your team has high mobility, you can attempt to rush Hitler II directly to force the transition to Phase 2 (Mech Hitler II), though you will still have to deal with any clones already on the board.</li>
        </ul>

        <h2>Trivia</h2>
        <ul>
          <li>Main Theme: <strong>HUMANICIDE</strong></li>
          <li>Found in: <strong>The Future</strong></li>
          <li>His design is a cybernetically enhanced head inside a life-support jar, a staple trope of futuristic dystopian settings.</li>
        </ul>
      `,
    },

    {
      id: 18,
      slug: 'mewgenics-dreadnoughtus-boss-guide',
      name: 'Dreadnoughtus',
      description: "Dreadnoughtus is the colossal titan of The Jurassic. A sauropod so massive that only its four legs fit on screen, requiring players to topple the beast to expose its vulnerable head.",
      publishDate: '2026-03-09',
      imageUrl: '/images/boss/boss-18.webp',
      imageAlt: 'Mewgenics Dreadnoughtus Boss',
      seo: {
        title: 'Mewgenics Dreadnoughtus Boss Guide: Leg & Head Mechanics',
        description: 'Learn how to defeat the massive Dreadnoughtus in Mewgenics. Strategy guide for toppling the legs and maximizing damage during the Head phase.',
        keywords: ['Mewgenics', 'Dreadnoughtus', 'The Jurassic Boss', 'Mewgenics Strategy', 'Sauropod Boss', 'Tuff Theme'],
      },
      stats: {Health: '550', Damage: '0', Movement: '0', Luck: '5'},
      isPage: true,
      detailsHtml: `
        <blockquote>
          “ I think I stepped in something... ” — Dreadnoughtus
        </blockquote>
    
        <p>Dreadnoughtus is the apex encounter of <strong>The Jurassic</strong>. Due to its sheer scale, the fight is divided into two distinct components: the four massive legs that dominate the arena and the head, which only becomes accessible once the beast is staggered.</p>
    
        <h2>Behavior & Phase Mechanics</h2>
        <ul>
          <li><strong>The Four Pillars:</strong> The fight begins with Dreadnoughtus's four legs acting as separate targets. Attacks against any leg that has been "lifted" or retracted will always miss.</li>
          <li><strong>The Topple:</strong> Once the player successfully lifts two of the four legs, the dinosaur loses its balance. All remaining legs retract, and the <strong>Head</strong> crashes onto the battlefield, dealing 100 self-damage and creating a massive shockwave.</li>
          <li><strong>Vulnerability Window:</strong> When the head is down, it gains <strong>1 Stun</strong> and is completely vulnerable. This is the only time players can deal direct damage to the main HP pool effectively. Note that the head is immune to additional stun effects during this window.</li>
          <li><strong>Recovery:</strong> At the start of the next round after being toppled, the Dreadnoughtus will stand back up, and the leg phase restarts.</li>
        </ul>
    
        <h2>Attacks</h2>
        <ul>
          <li><strong>Leg Stomp:</strong> Each active leg can perform a heavy stomp, dealing massive physical damage and knockback to any cat in the immediate vicinity.</li>
          <li><strong>Head Sweep:</strong> At the end of each round while standing, the head (off-screen) performs a unique area-of-effect attack that can displace or damage the entire party.</li>
          <li><strong>Crash Shockwave:</strong> When the head falls, it creates a 360-degree shockwave that deals minor damage and pushes units away from the impact zone.</li>
        </ul>
    
        <h2>Strategies</h2>
        <ul>
          <li><strong>Focus Fire:</strong> Do not spread damage across all four legs. Focus on two legs specifically to trigger the "Topple" as quickly as possible.</li>
          <li><strong>Save Your Cooldowns:</strong> The legs are merely obstacles. Save your highest damage-per-turn abilities (like a Fighter's burst or a Mage's heavy spells) for the moment the head hits the ground.</li>
          <li><strong>Positioning:</strong> Stay mindful of the shockwave impact zone. Position your cats so they aren't thrown into hazards or corners when the head falls, allowing them to close the distance and attack the head immediately.</li>
        </ul>
    
        <h2>Trivia</h2>
        <ul>
          <li>Main Theme: <strong>Tuff</strong></li>
          <li><strong>Dino Nerd Fact:</strong> <em>Dreadnoughtus schrani</em> was one of the largest terrestrial vertebrates to ever walk the Earth. Its name literally translates to "fears nothing," reflecting its immunity to predators due to its size—a trait mirrored in its high HP and "off-screen" scale.</li>
          <li>The shockwave mechanic is a nod to the "ground-shaking" presence often depicted in classic dinosaur media like <em>Jurassic Park</em>.</li>
        </ul>
      `,
    },

    {
      id: 19,
      slug: 'mewgenics-the-mother-boss-guide',
      name: 'The Mother',
      description: "The Mother is the final, agonizing encounter of The End. A massive 3x3 horror that slowly consumes the arena with biological segments, she seeks to reclaim her children by absorbing them into her mass.",
      publishDate: '2026-03-09',
      imageUrl: '/images/boss/boss-19.webp',
      imageAlt: 'Mewgenics The Mother Boss',
      seo: {
        title: 'Mewgenics The Mother Boss Guide: Segment Propagation & Crowd Control',
        description: 'Master The Mother boss fight in Mewgenics. Detailed strategies for managing segment growth, freeing incapacitated cats, and using on-kill effects in The End.',
        keywords: ['Mewgenics', 'The Mother Boss', 'The End', 'Mewgenics Strategy', 'Segment Growth', 'We\'re Dead Theme'],
      },
      stats: {Health: '450', Damage: '3', Movement: '0', Luck: '5'},
      isPage: true,
      detailsHtml: `
        <blockquote>
          “ Look what has become of me... ” — The Mother
        </blockquote>
    
        <p>The Mother is the climactic boss of <strong>The End</strong>. This is a fight against exponential growth; if left unchecked, her biological mass will eventually occupy every tile in the arena, suffocating and devouring your party.</p>
    
        <h2>Behavior & Mechanics</h2>
        <ul>
          <li><strong>Segment Propagation:</strong> Every turn, The Mother expands via 5-HP segments. These segments gain <strong>+1 Constitution</strong> over time if not destroyed. If a segment is disconnected from the main body, it dies instantly.</li>
          <li><strong>Incapacitation:</strong> If a segment grows onto a tile occupied by a unit, that unit is incapacitated. If not freed by attacking the segment, the unit will eventually be devoured.</li>
          <li><strong>Pillars & Heralds:</strong> She spawns pillars under cats that deal damage and pull them toward her. If these pillars survive, she can use <strong>Birth</strong> to transform them into dangerous <strong>Heralds</strong>.</li>
          <li><strong>Dual Turns:</strong> The Mother takes 2 turns per round, doubling the speed of her expansion.</li>
        </ul>
    
        <h2>Tips & Strategy</h2>
        <ul>
          <li><strong>Crowd Control is King:</strong> Because every segment counts as a separate unit, <strong>On-Kill</strong> effects (like <em>Blood Frenzy</em>) are incredibly potent. High-damage area attacks like <em>Spin to Win</em> or <em>Mega Blast</em> can clear massive sections of the board at once.</li>
          <li><strong>Ranged Rescue:</strong> Keep a ranged unit (like a <strong>Hunter</strong> or <strong>Mage</strong>) in a safe corner. They are essential for sniping segments that have incapacitated your melee fighters without getting caught themselves.</li>
          <li><strong>Debuff Scaling:</strong> Since her main body is a 3x3 unit, items like <strong>Leech Brood</strong> apply debuffs to all 9 tiles she occupies, providing massive healing and damage reduction.</li>
          <li><strong>Automatic Escapes:</strong> Units with high contact damage (e.g., wearing the <strong>Bear Trap Mask</strong>) will automatically destroy segments that try to grow onto them, granting them immunity to incapacitation.</li>
          <li><strong>The "Weird Egg" Tech:</strong> Summoning <strong>Brain Drain</strong> familiars can actually prevent her from growing segments via their <em>Counterspell</em>, drastically simplifying the fight.</li>
        </ul>
    
        <h2>Trivia</h2>
        <ul>
          <li>Main Theme: <strong>We're Dead</strong></li>
          <li>Found in: <strong>The End</strong></li>
          <li>The Mother's design and mechanics emphasize the theme of "reclaiming" life, as seen in her ability to absorb and "birth" units.</li>
          <li>She is one of the few bosses where <strong>Knockback</strong> is completely useless, as she is biologically rooted to the arena.</li>
        </ul>
      `,
    },

    {
      id: 20,
      slug: 'mewgenics-guillotina-boss-guide',
      name: 'Guillotina',
      description: "Guillotina is the first 'House Boss' in Mewgenics. A morbidly obese, cannibalistic stray with a bottomless stomach, she launches a direct assault on your home that requires a 7-day preparation period to survive.",
      publishDate: '2026-03-09',
      imageUrl: '/images/boss/boss-20.webp',
      imageAlt: 'Mewgenics Guillotina Boss',
      seo: {
        title: 'Mewgenics Guillotina Boss Guide: House Defense & Phase Strategy',
        description: 'Survive the Guillotina boss fight in Mewgenics. Learn how to manage her inhale mechanics, survive the Phase 2 enrage, and defend your house.',
        keywords: ['Mewgenics', 'Guillotina Boss', 'House Boss', 'Mewgenics Strategy', 'Defend Mechanic', 'V.S. Guillotina'],
      },
      stats: {Health: '400', Damage: '5', Movement: '3', Luck: '5'},
      isPage: true,
      detailsHtml: `
        <blockquote>
          “ Much to my amazement, there seems to be... a large, feline apparition making a beeline towards that house on the hill! ” — WMEW 99.9
        </blockquote>
    
        <p>Guillotina is a unique <strong>House Boss</strong>. Unlike adventure bosses, she comes to you. After completing <strong>The Boneyard</strong>, a 7-day countdown begins. When it ends, you must select your best cats to <strong>Defend</strong> your home in a dedicated arena.</p>
    
        <h2>Behavior & Phases</h2>
        <ul>
          <li><strong>Phase 1: The Glutton:</strong> Guillotina uses her 2x2 size and <strong>Trample</strong> to reposition. She primarily tries to <strong>Inhale</strong> cats from up to 10 tiles away, holding them in her mouth to disable them.</li>
          <li><strong>Phase 2: Enraged Hunger:</strong> Upon reaching 50% HP, she cleanses all debuffs, heals 50 HP, and gains 100 Max HP. In this phase, she can <strong>Swallow</strong> cats into her stomach, eventually using <strong>Digest</strong> to instantly kill them and heal herself.</li>
        </ul>
    
        <h2>Attacks</h2>
        <h3>Phase 1</h3>
        <ul>
          <li><strong>Toss:</strong> Throws an adjacent unit diagonally until it hits a solid object.</li>
          <li><strong>Inhale/Spit:</strong> Pulls a distant unit into her mouth. Damaging her has a chance to force her to spit the unit out early.</li>
          <li><strong>Leap:</strong> A 1-tile jump that inflicts damage and knockback.</li>
        </ul>
        <h3>Phase 2 (Added Moves)</h3>
        <ul>
          <li><strong>Swipe:</strong> A melee strike with massive (10 tiles) knockback.</li>
          <li><strong>Belly Pound:</strong> Deals 5 damage to any unit currently swallowed in her stomach.</li>
          <li><strong>Digest:</strong> An execution move that kills a swallowed unit to restore 25 HP to Guillotina.</li>
        </ul>
    
        <h2>Strategy & Tips</h2>
        <ul>
          <li><strong>Mobility is Mandatory:</strong> Guillotina’s knockback and spits can throw your cats across the entire arena. Ensure your defenders have at least 10+ Speed or cheap movement skills to return to the fray quickly.</li>
          <li><strong>Poison Utility:</strong> <strong>Poison</strong> is highly recommended. It ticks 3 times per round and can effectively halve the bonus HP she gains during her Phase 2 transition.</li>
          <li><strong>Summon Bait:</strong> While weak summons are prone to being eaten, having a high volume of them (Sextuplets, etc.) significantly lowers the statistical chance that Guillotina will target and swallow one of your actual cats.</li>
          <li><strong>The "Losing" Strategy:</strong> If you aren't ready when the 7 days are up, you can send 1-4 "sacrifice" strays to intentionally lose. This resets the 7-day timer, giving you another week to train your main team.</li>
          <li><strong>Environmental Hazards:</strong> Avoid <strong>Fire</strong> skills. The arena is full of grass, and a spreading fire is more likely to kill your cats than the boss. <strong>Ice</strong> is safer for crowd control.</li>
        </ul>
    
        <h2>Rewards</h2>
        <ul>
          <li><strong>Throbbing Gristle:</strong> A quest item used at the <strong>Wall of Flesh</strong> in <strong>The Caves</strong>.</li>
          <li><strong>Difficulty Unlocks:</strong> Tina's Belly Button (Hard), Steven's Mustache (Crazy), and Steven Trinket (Impossible).</li>
        </ul>
      `,
    },

    {
      id: 21,
      slug: 'mewgenics-guillotina-2-boss-guide',
      name: 'Guillotina 2',
      description: "Guillotina 2 is the second 'House Boss' encounter. Now a resurrected, decapitated horror, the head and body act as separate but coordinated entities in a chaotic battle for home defense.",
      publishDate: '2026-03-09',
      imageUrl: '/images/boss/boss-21.webp',
      imageAlt: 'Mewgenics Guillotina 2 Boss',
      seo: {
        title: 'Mewgenics Guillotina 2 Boss Guide: Head and Body Phase Strategy',
        description: 'Defeat the resurrected Guillotina 2 in Mewgenics. Master the mechanics of the separated Head and Body, and learn how to handle the Enraged second phase.',
        keywords: ['Mewgenics', 'Guillotina 2', 'House Boss', 'Mewgenics Strategy', 'Head and Body Boss', 'V.S. Guillotina'],
      },
      stats: {
        Health: '250',
        Damage: '4',
        Movement: '5',
        Luck: '5',
      },
      isPage: true,
      detailsHtml: `
        <blockquote>
          “ Not meaning to alarm you here folks, but there is a decapitated monster cat wandering around town. ” — WMEW 99.9
        </blockquote>
    
        <p>Guillotina 2 returns for a second <strong>House Defense</strong> mission after her initial defeat. Seven days after the warning cutscene, you must deploy your cats to stop both her 1-tile <strong>Head</strong> and her 4-tile <strong>Body</strong> from reclaiming your home.</p>
    
        <h2>Behavior & Coordination</h2>
        <ul>
          <li><strong>Dual Entities:</strong> The Head and Body operate independently. The Head is highly mobile (5 Movement, 3 actions per round), while the Body is a slow but heavy hitter (1 Movement, 1 action per round).</li>
          <li><strong>Synergy:</strong> The Head attempts to "set up" the Body by pulling cats in with <em>Gasp</em> or using <em>Toss</em> to throw them directly onto the Body's tiles.</li>
          <li><strong>Enrage Mechanic:</strong> When one part dies, the survivor instantly heals 100 HP, gains an extra turn per round, and unlocks a powerful new "Solo" ability.</li>
        </ul>
    
        <h2>Attacks</h2>
        <h3>First Phase (Combined)</h3>
        <ul>
          <li><strong>Gasp (Head):</strong> Sucks in air along a 3-tile wide line, pulling cats toward the Head.</li>
          <li><strong>Toss (Head):</strong> Bites an adjacent unit and throws it onto the Body. This deals damage to <strong>both</strong> the thrown unit and the Body itself.</li>
          <li><strong>Piercing Lunge (Head):</strong> A 4-tile long linear melee attack.</li>
          <li><strong>Body Slam (Body):</strong> A heavy hit with a high chance to <strong>Stun</strong>.</li>
        </ul>
        <h3>Second Phase (Solo)</h3>
        <ul>
          <li><strong>Call (Head Only):</strong> If the Body is dead, the Head calls the corpse to slide toward it, damaging and displacing everything in the path.</li>
          <li><strong>Tantrum (Body Only):</strong> If the Head is dead, the Body spawns junk items across the arena to clutter movement.</li>
        </ul>
    
        <h2>Tips & Strategy</h2>
        <ul>
          <li><strong>Focus the Head:</strong> The Head is generally the higher threat due to its three actions and displacement abilities. Additionally, since the Head can accidentally damage the Body by throwing cats at it, focusing the Head often results in "free" damage on the Body.</li>
          <li><strong>Safe Positioning:</strong> Because Guillotina 2 lacks her predecessor's "Swallow" ability, you no longer need to fear instant-death from digestion. You can safely stay at a distance and use the Head's own <em>Toss</em> momentum to reposition if needed.</li>
          <li><strong>Body Baiting:</strong> The Body always takes its turn last. Since it only has 1 Movement, it is very easy to kite. Keep your cats just outside its reach while focusing your primary DPS on the Head.</li>
          <li><strong>Cleanup:</strong> If the Head dies first, the Body becomes a "Tantrum" machine. Having a cat with <strong>item-destruction</strong> or high movement is helpful to navigate the junk-cluttered arena in the final stretch.</li>
        </ul>
    
        <h2>Rewards</h2>
        <ul>
          <li><strong>Putrid Leech:</strong> A quest item used at the <strong>Throbbing Artery</strong> in <strong>The Boneyard</strong>.</li>
        </ul>
    
        <h2>Trivia</h2>
        <ul>
          <li>Main Theme: <strong>V.S. Guillotina</strong></li>
          <li>The WMEW 99.9 announcer notes the absurdity of the head and body chasing each other around town.</li>
          <li>The "unidentified internal organ" used for the Head's piercing attack is likely a mutated esophagus or tongue.</li>
        </ul>
      `,
    },

    {
      id: 22,
      slug: 'mewgenics-guillotina-3-boss-guide',
      name: 'Guillotina 3',
      description: "Guillotina 3 is the final House Boss encounter. Now a rotting, maggot-infested skeletal remains, the Head and Body perform a morbid game of catch that culminates in the birth of a Mama Maggot.",
      publishDate: '2026-03-09',
      imageUrl: '/images/boss/boss-22.webp',
      imageAlt: 'Mewgenics Guillotina 3 Boss',
      seo: {
        title: 'Mewgenics Guillotina 3 Boss Guide: Final Phase & Mama Maggot Strategy',
        description: 'Master the final Guillotina fight in Mewgenics. Strategies for managing the Head-to-Body connection, clearing maggot swarms, and defeating the Phase 2 Mama Maggot.',
        keywords: ['Mewgenics', 'Guillotina 3', 'House Boss', 'Mewgenics Strategy', 'Mama Maggot', 'Final Guillotina'],
      },
      stats: {
        Health: '200',
        Damage: '5',
        Movement: '0',
        Luck: '5',
      },
      isPage: true,
      detailsHtml: `
        <blockquote>
          “ Good News, bad news, folks. This dead cat has... apparently risen from the grave. ” — WMEW 99.9
        </blockquote>
    
        <p>Guillotina 3 is the third and final <strong>House Defense</strong> encounter. The morbidly obese stray has finally succumbed to her wounds, returning as a skeletal, maggot-ridden corpse. This fight is a test of attrition and crowd control.</p>
    
        <h2>Behavior & Mechanics</h2>
        <ul>
          <li><strong>The Fetch Mechanic:</strong> The Head and Body are separate. Attacking the Head knocks it away; the Head then shrieks, causing the Body to <strong>Trample</strong> toward it. If the Body reaches the Head, it picks it up and casts <strong>Shriek</strong> (AoE Poison/Hex) before tossing the Head at a random unit (inflicting <strong>Bruise</strong>).</li>
          <li><strong>Maggot Spawning:</strong> The Body intermittently shakes to dispel its own debuffs and spawn maggot enemies.</li>
          <li><strong>Phase 2 Transition:</strong> When the Body falls below 250 HP, it deals 130 damage to itself to spawn a <strong>Mama Maggot</strong> (125 HP). Note: The Body cannot transition to Phase 2 while holding its head.</li>
        </ul>
    
        <h2>Attacks & Phases</h2>
        <h3>Phase 1</h3>
        <ul>
          <li><strong>Tumor Prison (Head):</strong> The Head spits a prison around a unit, immobilizing them.</li>
          <li><strong>Shriek (Combined):</strong> Inflicts 1 stack of <strong>Poison</strong> and 1 stack of <strong>Hex</strong> on the entire party.</li>
          <li><strong>Trample (Body):</strong> Deals contact damage and displaces units while moving toward the Head.</li>
        </ul>
        <h3>Phase 2</h3>
        <ul>
          <li><strong>Mama Maggot:</strong> A high-threat miniboss joins the fray. Guillotina (the Body) is considered a "maggot" and will benefit from the Mama Maggot's <strong>Rally</strong> ability, gaining extra turns.</li>
        </ul>
    
        <h2>Tips & Strategy</h2>
        <ul>
          <li><strong>Crowd Control:</strong> You <em>must</em> bring a cat capable of clearing swarms (e.g., <strong>Mage</strong> with AoE or <strong>Butcher</strong> with <em>Blood Frenzy</em>). The maggot spawns in Phase 2 will quickly overwhelm a single-target team.</li>
          <li><strong>Interrupt the Cycle:</strong> Use knockback abilities to push the Head away from the Body. If the Body never reaches the Head, it cannot trigger the devastating board-wide <strong>Hex</strong> and <strong>Poison</strong> debuffs.</li>
          <li><strong>Focus Priority:</strong> Once the <strong>Mama Maggot</strong> appears, it becomes the primary threat. Kill it quickly to prevent it from buffing the rest of the maggot swarm and granting Guillotina extra turns.</li>
          <li><strong>The Kill Window:</strong> Because the Body cannot phase-shift while holding the Head, you can technically bypass the difficult Phase 2 transition by dealing enough burst damage to kill the Body while it is carrying the Head.</li>
          <li><strong>Non-Undead:</strong> Despite her appearance, Guillotina 3 is <strong>not</strong> an Undead unit. <strong>Holy</strong> spells will not deal bonus damage; treat her as a Maggot type for elemental considerations.</li>
        </ul>
    
        <h2>Rewards</h2>
        <ul>
          <li><strong>Guillotina's Head:</strong> A key quest item used at the meat altar in <strong>The Throbbing Domain</strong>.</li>
        </ul>
    
        <h2>Trivia</h2>
        <ul>
          <li>Main Theme: <strong>V.S. Guillotina</strong></li>
          <li>The WMEW 99.9 announcer mentions the "maggots oozing out of her disgusting skeletal remains," which hints at her new unit classification.</li>
          <li>This fight serves as a gatekeeper to the late-game <strong>Throbbing Domain</strong>.</li>
        </ul>
      `,
    },

    {
      id: 23,
      slug: 'mewgenics-pyrophina-boss-guide',
      name: 'Pyrophina',
      description: "Pyrophina is a colossal Kaiju-class House Boss encountered in Act 2. A reddish-pink 'thunder lizard' baptized in hellfire, she turns the home defense arena into a literal inferno that only the most prepared water-based teams can survive.",
      publishDate: '2026-03-09',
      imageUrl: '/images/boss/boss-23.webp',
      imageAlt: 'Mewgenics Pyrophina Boss',
      seo: {
        title: 'Mewgenics Pyrophina Boss Guide: Fire Kaiju Strategy & Water Counters',
        description: 'Defeat the Pyrophina House Boss in Mewgenics. Learn how to manage the Burn status, use water-based items effectively, and survive her massive roar.',
        keywords: ['Mewgenics', 'Pyrophina', 'House Boss', 'Mewgenics Strategy', 'Fire Kaiju', 'Scalding Orb'],
      },
      stats: {
        Health: '600',
        'Health (vs Zaratana)': '1000',
        Damage: '5',
        Movement: '4',
        Luck: '5'
      },
      isPage: true,
      detailsHtml: `
        <blockquote>
          “ Looks like there's some sort of horrific thunder lizard breathing fire all over buildings downtown... So um, go back to bed! ” — WMEW 99.9
        </blockquote>
    
        <p>Pyrophina is one of the two Act 2 <strong>House Bosses</strong>. Triggered by completing <strong>The Core</strong>, she gives the player a 7-day warning before laying waste to your home. The fight is a battle against environmental hazards as much as it is against the beast herself.</p>
    
        <h2>Behavior & Mechanics</h2>
        <ul>
          <li><strong>Scale & Movement:</strong> Despite her massive appearance, Pyrophina occupies a 2x2 space. She uses <strong>Trample</strong> to crash through your formation.</li>
          <li><strong>The Roar:</strong> At the end of every round, Pyrophina performs a board-wide roar that knocks every unit to the very edge of the map.</li>
          <li><strong>Self-Purge:</strong> The roar also acts as a complete cleanse, removing all debuffs (Poison, Bleed, etc.) from Pyrophina at the end of each round.</li>
          <li><strong>Inferno:</strong> Almost all of her attacks leave <strong>Lava</strong> or fire tiles. Without intervention, the entire arena will be covered in flames within a few rounds.</li>
        </ul>
    
        <h2>Preparation & Strategy</h2>
        <p>Success against Pyrophina is entirely dependent on your ability to manage the <strong>Burn</strong> status and extinguish the arena.</p>
        
        <h3>Essential Water Utility</h3>
        <ul>
          <li><strong>The Old Hose:</strong> An MVP item for this fight; use it every turn to create safe water tiles and extinguish allies.</li>
          <li><strong>Incontinence & Water Feeder:</strong> These passive effects keep your cats <strong>Wet</strong>, providing a natural defense against the 100% burn rate of the arena.</li>
          <li><strong>Forbidden Flood:</strong> While risky, flooding the map is the most effective way to reset the arena if Pyrophina has created too many lava tiles.</li>
          <li><strong>Control Water:</strong> Excellent for both environmental management and sustaining the team with heals.</li>
        </ul>
    
        <h3>Tactical Advice</h3>
        <ul>
          <li><strong>Don't Rely on DOTs:</strong> Since she cleanses herself every round, high-stacking Poison or Bleed builds are less effective here than in other boss fights. Focus on high "front-loaded" raw damage.</li>
          <li><strong>Corner Management:</strong> Anticipate the end-of-round roar. Position your cats so they aren't knocked into existing lava tiles at the edge of the map.</li>
          <li><strong>Wet Synergy:</strong> Use the <strong>Like a Fish</strong> trait to turn the mandatory water-heavy strategy into a stat advantage for your defenders.</li>
        </ul>
    
        <h2>Rewards</h2>
        <ul>
          <li><strong>Scalding Orb:</strong> A powerful quest item that can be used to <strong>instantly kill The Man in the Moon</strong>, significantly simplifying the final boss of the Moon chapter.</li>
        </ul>
    
        <h2>Trivia</h2>
        <ul>
          <li>Main Theme: <strong>Brush Your Teeth</strong></li>
          <li>Her design is a direct homage to classic Kaiju cinema (like Godzilla), specifically the "Burning" variants.</li>
          <li>She has a unique interaction if she encounters <strong>Zaratana</strong>, significantly increasing her health pool for the clash of titans.</li>
        </ul>
      `,
    },

    {
      id: 24,
      slug: 'mewgenics-zaratana-boss-guide',
      name: 'Zaratana',
      description: "Zaratana is a lunar Kaiju-class House Boss encountered in Act 2. A massive, asteroid-like turtle beast, she weaponizes the environment by raining down space debris and manipulating rocks with galactic energy.",
      publishDate: '2026-03-09',
      imageUrl: '/images/boss/boss-24.webp',
      imageAlt: 'Mewgenics Zaratana Boss',
      seo: {
        title: 'Mewgenics Zaratana Boss Guide: Rock Manipulation & Kaiju Counters',
        description: 'Defeat the Zaratana House Boss in Mewgenics. Learn how to manage Meteor Bombardment, exploit her rock-type weaknesses, and earn the Black Shard.',
        keywords: ['Mewgenics', 'Zaratana Boss', 'House Boss', 'Mewgenics Strategy', 'Rock Beast', 'Black Shard'],
      },
      stats: {Health: '600', Damage: '4', Movement: '3', Luck: '5'},
      isPage: true,
      detailsHtml: `
        <blockquote>
          “ Oh dear.. Some sort of turtle-y moon beast seems to have made her way onto the scene... she looks to be made of rocks and is shooting rocks! ” — WMEW 99.9
        </blockquote>
    
        <p>Zaratana is the second Act 2 <strong>House Boss</strong>, appearing after the player successfully completes <strong>The Moon</strong>. Like Pyrophina, she provides a 7-day preparation window before assaulting your home with celestial force.</p>
    
        <h2>Behavior & Mechanics</h2>
        <ul>
          <li><strong>Trample & Movement:</strong> Zaratana occupies a 2x2 space and uses <strong>Trample</strong> to crush through defenders and obstacles alike.</li>
          <li><strong>Galactic Roar:</strong> At the end of each round, Zaratana performs a roar that applies <strong>Levitation</strong> to all rocks on the battlefield, similar to the <em>Rock Song</em> ability. This turns stationary debris into floating hazards or projectiles.</li>
          <li><strong>Environmental Clutter:</strong> The fight quickly becomes crowded with meteorites, which Zaratana uses for both cover and offense.</li>
        </ul>
    
        <h2>Attacks</h2>
        <ul>
          <li><strong>Meteor Bombardment:</strong> Zaratana launches several large rocks into the air, scattering them randomly across the arena. These can deal impact damage if they land on a unit and provide the fuel for her roar mechanics.</li>
        </ul>
    
        <h2>Tips & Strategy</h2>
        <ul>
          <li><strong>Exploit the "Rock" Tag:</strong> Because Zaratana is literally a "moon beast made of rocks," abilities that interact with stones are incredibly powerful. The <strong>Eat Rock</strong> ability allows a cat to deal 5 direct damage to her while gaining auxiliary buffs.</li>
          <li><strong>Clear the Board:</strong> A <strong>Butcher</strong> is a top-tier pick for this fight. Their ability to instantly destroy rocks allows them to clear Zaratana's entire <em>Meteor Bombardment</em> in a single turn, neutralizing her roar potential.</li>
          <li><strong>Collision Hazards:</strong> Be mindful of where rocks land. Since Zaratana uses <strong>Trample</strong>, she can push you into her own meteors for additional collision damage. Keep the center of the arena as clear as possible.</li>
          <li><strong>Levitation Defense:</strong> When rocks begin to levitate, they may block line-of-sight for ranged cats. Reposition your <strong>Hunters</strong> and <strong>Mages</strong> frequently to maintain a clear shot at the boss.</li>
        </ul>
    
        <h2>Rewards</h2>
        <ul>
          <li><strong>Black Shard:</strong> A vital quest item that must be transformed into the <strong>Glowing Black Shard</strong>. This empowered version can be used to <strong>instantly kill The Coven</strong>, bypassing one of the most dangerous ritual fights in the game.</li>
        </ul>
    
        <h2>Trivia</h2>
        <ul>
          <li>Main Theme: <strong>Brush Your Teeth</strong> (Shared with Pyrophina).</li>
          <li>Her design is inspired by "World Turtle" myths combined with lunar asteroid aesthetics.</li>
          <li>WMEW 99.9's announcer seems particularly flustered by her appearance, even apologizing for the absurdity of a rock-shooting turtle.</li>
        </ul>
      `,
    },

    {
      id: 25,
      slug: 'mewgenics-pyrophina-vs-zaratana-boss-guide',
      name: 'Pyrophina vs. Zaratana',
      description: "The ultimate Kaiju clash in Mewgenics. This Act 2 House Boss encounter features a cataclysmic battle between the Fire Lizard and the Moon Turtle, with your home as the unfortunate battlefield.",
      publishDate: '2026-03-09',
      imageUrl: '/images/boss/boss-25.webp',
      imageAlt: 'Mewgenics Pyrophina vs Zaratana Boss Fight',
      seo: {
        title: 'Mewgenics Pyrophina vs Zaratana Guide: Kaiju Clash Strategy',
        description: 'Survive the epic Pyrophina vs Zaratana boss fight in Mewgenics. Strategy for managing environmental chaos, lava, and meteor storms in this Act 2 finale.',
        keywords: ['Mewgenics', 'Pyrophina vs Zaratana', 'Kaiju Fight', 'House Boss', 'Mewgenics Strategy', 'Firestorm', 'Meteornado'],
      },
      stats: {
        Health: '1000',
        Damage: '5',
        Movement: '4',
        Luck: '5',
      },
      isPage: true,
      detailsHtml: `
        <blockquote>
          “ OH GOD THE THUNDER LIZARD IS FIGHTING THE SPACE TURTLE. EVERYONE IS DYING JUST GET OUT OF HERE..! ” — WMEW 99.9
        </blockquote>
    
        <p>Pyrophina vs. Zaratana is the final Act 2 <strong>House Boss</strong> encounter. After defeating both separately, they return simultaneously, locked in a vicious duel. The player's goal isn't necessarily to slay them both, but to survive the literal apocalypse unfolding on their doorstep.</p>
    
        <h2>Behavior & Environment</h2>
        <ul>
          <li><strong>Mutual Hostility:</strong> The two Kaiju primarily target each other, ignoring your cats unless they are in the way. They deal massive damage to one another through <strong>Headbutts</strong> and <strong>Tramples</strong>.</li>
          <li><strong>The Win Condition:</strong> The fight ends the moment <em>either</em> Kaiju dies. The survivor will celebrate and leave the arena.</li>
          <li><strong>Environmental Hazard:</strong> The real threat is the crossfire. Between Pyrophina’s lava and Zaratana’s exploding meteors, the arena becomes nearly uninhabitable within a few rounds.</li>
        </ul>
    
        <h2>Kaiju Abilities</h2>
        <h3>Pyrophina (The Fire)</h3>
        <ul>
          <li><strong>Fire Breath:</strong> Creates 2x2 lava tiles and inflicts <strong>Burn</strong> in a wide cone.</li>
          <li><strong>Firestorm (Half HP):</strong> A persistent map effect that inflicts +1 <strong>Burn</strong> to everyone every round.</li>
          <li><strong>Volcano Stomp:</strong> Ignites the entire edge of the map and grants Pyrophina <strong>+1 Strength</strong>.</li>
        </ul>
        <h3>Zaratana (The Earth)</h3>
        <ul>
          <li><strong>Meteor Bombardment:</strong> Exploding space rocks that deal heavy damage and leave fire.</li>
          <li><strong>Meteornado (Half HP):</strong> A map-wide storm that deals damage every round and drops random meteors on tiles.</li>
          <li><strong>Turtle:</strong> Zaratana retreats into her shell, gaining <strong>10 Brace</strong> and cleansing all debuffs.</li>
        </ul>
    
        <h2>Tips & Strategy</h2>
        <ul>
          <li><strong>Pick a Side:</strong> Don't split your damage. Focus all attacks on whichever Kaiju you find easier to hit (usually Pyrophina, as she doesn't use the high-Brace <em>Turtle</em> move). Ending the fight quickly is the best way to preserve your cats.</li>
          <li><strong>Lava Rescue:</strong> Pyrophina's <em>Toss</em> often lands cats directly into lava tiles. Keep movement skills or <strong>Water</strong> items (<em>Old Hose</em>, <em>Incontinence</em>) ready to extinguish and reposition immediately.</li>
          <li><strong>Tank Up:</strong> Because the damage is largely AoE and environmental, bring cats with high <strong>Brace</strong> and <strong>Constitution</strong>. <strong>Butchers</strong> are excellent here for clearing out Zaratana's rocks before they explode or levitate.</li>
          <li><strong>Outlive the Chaos:</strong> If your team is struggling to deal damage, focus entirely on healing and cleansing. The Kaiju deal massive damage to each other; often, simply surviving for 6-8 rounds is enough for one of them to finish the other.</li>
        </ul>
    
        <h2>Trivia</h2>
        <ul>
          <li>Main Theme: <strong>Brush Your Teeth</strong></li>
          <li>This encounter is a direct homage to the "Crossover" films of the Kaiju genre, such as <em>Godzilla vs. Kong</em>.</li>
          <li>The WMEW 99.9 announcer's panic suggests this event is considered a city-wide catastrophe, not just a house pest.</li>
        </ul>
      `,
    },

    {
      id: 26,
      slug: 'mewgenics-c-800-boss-guide',
      name: 'C-800',
      description: "C-800 is a relentless cybernetic House Boss from Act 3. A movie-inspired killing machine that teleports into your home after you've cleared The Future, he utilizes a deadly arsenal of firearms and a massive layer of ablative Brace armor.",
      publishDate: '2026-03-09',
      imageUrl: '/images/boss/boss-26.webp',
      imageAlt: 'Mewgenics C-800 Boss',
      seo: {
        title: 'Mewgenics C-800 Boss Guide: Weapon Cycling & Brace Removal',
        description: 'Defeat the C-800 House Boss in Mewgenics. Learn how to survive the Shotgun, Sniper, and Machine Gun cycle while stripping away his 50 stacks of Brace.',
        keywords: ['Mewgenics', 'C-800 Boss', 'House Boss', 'Mewgenics Strategy', 'The Future', 'Taser Paws'],
      },
      stats: {Health: '250', Damage: '10', Movement: '4', Luck: '7'},
      isPage: true,
      detailsHtml: `
        <blockquote>
          “ I'm getting word of a robotic cat who seems who seems to have teleported here... revenge seems to be on his mind! ” — WMEW 99.9
        </blockquote>
    
        <p>C-800 is an Act 3 <strong>House Boss</strong> that targets your home after you complete <strong>The Future</strong>. He is an endurance-based predator that requires high-frequency hits to strip his defenses before he can be truly damaged.</p>
    
        <h2>Behavior & Weapon Cycle</h2>
        <ul>
          <li><strong>Ablative Armor:</strong> C-800 starts with <strong>50 stacks of Brace</strong>. Each hit reduces this by 1. As the stacks drop, his skin peels away to reveal the robotic endoskeleton beneath.</li>
          <li><strong>Firearm Mastery:</strong> Each turn, he cycles to a random weapon and fires it at the start of his next turn:
            <ul>
              <li><strong>Shotgun:</strong> A 3-tile expanding cone. Deals more damage the closer you are.</li>
              <li><strong>Sniper Rifle:</strong> A massive, single-target shot with infinite line-of-sight.</li>
              <li><strong>Machine Gun:</strong> A flurry of consecutive low-damage bullets.</li>
            </ul>
          </li>
          <li><strong>Grenades:</strong> Every round begins with two grenades that explode in a 2-tile radius at the round's end, stripping buffs from your cats.</li>
          <li><strong>Reactive Pursuit:</strong> Every time you cast a spell, C-800 moves one tile toward the caster. If he reaches you, he performs a stunning melee strike or a lethal multi-hit execution.</li>
        </ul>
    
        <h2>Tips & Strategy</h2>
        <ul>
          <li><strong>The "Multi-Hit" Counter:</strong> Since his 50 Brace stacks only drop by 1 per hit regardless of damage, abilities that hit many times (like <em>Fury Swipes</em> or <em>Poison</em> ticks) are better than single heavy hits. <strong>Bloodletting</strong> is a specialized counter that can strip all 50 stacks instantly.</li>
          <li><strong>Use Reflect & Thorns:</strong> These buffs are incredibly powerful here. <strong>Reflect</strong> sends his bullets back at him, stripping his own Brace, while <strong>Thorns</strong> punishes his multi-hit melee combo by removing a stack for every hit he lands on you.</li>
          <li><strong>Spell Discipline:</strong> Do not spam low-impact spells. Every cast brings him closer to a melee-range execution. Use spells only when you have the movement to get away or when you are ready to finish him.</li>
          <li><strong>Hit and Run:</strong> Use <strong>Bull Rush</strong> (Fighter) or <strong>Goad</strong> (Tank) to strike and immediately put distance between your cat and the boss. This forces him to waste turns walking instead of grabbing your units.</li>
          <li><strong>Grenade Manipulation:</strong> If you have knockback abilities, you can push C-800 into his own grenades to strip his Brace or force him to move out of optimal firing position.</li>
        </ul>
    
        <h2>Rewards</h2>
        <ul>
          <li><strong>Receiver Antenna:</strong> A quest item taken to <strong>Dr. Beanies</strong> and subsequently used at the volcano in <strong>The Jurassic</strong>.</li>
        </ul>
    
        <h2>Trivia</h2>
        <ul>
          <li>Main Theme: <strong>Taser Paws</strong></li>
          <li>The C-800 is a direct parody of the <strong>T-800 Terminator</strong>, from his "clothes and boots" theft to his skeletal transformation.</li>
          <li>His "Precision Sniper" mode is a nod to the cold, calculating nature of robotic antagonists in sci-fi.</li>
        </ul>
      `,
    },

    {
      id: 27,
      slug: 'mewgenics-c-1000-boss-guide',
      name: 'C-1000',
      description: "C-1000 is the advanced liquid-metal House Boss from Act 3. A shapeshifting predator that punishes player movement and copies your own cats' statistics to use against you.",
      publishDate: '2026-03-09',
      imageUrl: '/images/boss/boss-27.webp',
      imageAlt: 'Mewgenics C-1000 Boss',
      seo: {
        title: 'Mewgenics C-1000 Boss Guide: Copy Mechanics & Dodge Counters',
        description: 'Learn how to defeat the C-1000 House Boss in Mewgenics. Strategies for handling 100% dodge, forcing weak copies, and using Singleton cheese.',
        keywords: ['Mewgenics', 'C-1000 Boss', 'House Boss', 'Mewgenics Strategy', 'Liquid Metal Cat', 'Shapeshifter'],
      },
      stats: {
        Health: '500',
        Damage: '10',
        Movement: '1',
        Luck: '5'
      },
      isPage: true,
      detailsHtml: `
        <blockquote>
          “ New follow-up on my previous robotic cat bulletin... there's another one, it's kinda liquidy and shapeshifty... things aren't looking good... ” — WMEW 99.9
        </blockquote>
    
        <p>C-1000 is the second Act 3 <strong>House Boss</strong>, appearing after the <strong>C-800</strong> is decommissioned. Unlike its predecessor's reliance on raw armor and firepower, the C-1000 uses evasion and identity theft to dismantle your team.</p>
    
        <h2>Behavior & Shapeshifting</h2>
        <ul>
          <li><strong>Liquid Evasion:</strong> C-1000 starts the fight with <strong>100% Dodge Chance</strong>. Every time an attack misses, it teleports to a random nearby tile and loses 10% of this dodge.</li>
          <li><strong>Reactive Movement:</strong> Every time your cats use a move action, C-1000 moves toward them. Each move reduces its dodge chance by 10% but grants it <strong>+1 Speed</strong>.</li>
          <li><strong>The Mimicry:</strong> Once adjacent to a cat, C-1000 will copy that cat on its next turn. It inherits all base stats (excluding Constitution), though it does not gain the cat's items or active abilities. After one turn as a copy, it reverts to its original form, resetting its dodge to 100% and its speed to base.</li>
          <li><strong>Elemental Interactions:</strong> Can be <strong>Frozen</strong> to halt movement, but becomes <strong>Energized</strong> if hit with Electric damage.</li>
        </ul>
    
        <h2>Tips & Strategy</h2>
        <h3>The "Bait" Method</h3>
        <p>Since C-1000 copies the first cat it reaches, send a weak "bait" stray cat forward while keeping your primary damage-dealers back. High-Constitution, low-damage cats are perfect bait; C-1000 will inherit their low damage but keep its own Health pool, making its turn as a copy harmless.</p>
    
        <h3>Guaranteed Hits</h3>
        <ul>
          <li><strong>Marked Status:</strong> Applying <strong>Marked</strong> is the most reliable way to bypass its 100% dodge, as marked targets cannot be missed by physical attacks.</li>
          <li><strong>Fear:</strong> Forcing C-1000 into a <strong>Fear</strong> state prevents it from using its attack/transform actions, as it is forced to move away from your cats instead.</li>
        </ul>
    
        <h3>Cheese Strategies (The "Identity Crisis")</h3>
        <ul>
          <li><strong>The Singleton Trap:</strong> If C-1000 copies a cat with the <strong>Singleton</strong> trait, its health will be set to 1 HP when it reverts to its original form.</li>
          <li><strong>DNA Multiplier + Invert:</strong> A stray cat with the <em>Invert</em> ability and a <em>DNA Multiplier</em> item can often one-shot the boss by flipping its high stats against it.</li>
          <li><strong>Death's Scythe:</strong> If the copied cat has <em>Death's Scythe</em>, C-1000 will trigger the item's execution effect and die at the end of the round.</li>
          <li><strong>Backflip Lava Loop:</strong> Use a cat with the <em>Backflip</em> ability to dodge the copy attempt while kiting the boss through <strong>Lava</strong>. The C-1000 will accumulate burn stacks without ever successfully transforming.</li>
        </ul>
    
        <h2>Rewards</h2>
        <ul>
          <li><strong>Transmitter Antenna:</strong> A quest item taken to <strong>Dr. Beanies</strong>, used later at the glowing orb in <strong>The End</strong>.</li>
        </ul>
    
        <h2>Trivia</h2>
        <ul>
          <li>Main Theme: <strong>Taser Paws</strong> (Remix).</li>
          <li>The C-1000 is a direct parody of the <strong>T-1000</strong> from <em>Terminator 2: Judgment Day</em>, featuring its signature finger-stab attack and liquid-metal movement.</li>
          <li>The WMEW 99.9 announcer’s distress highlights that even within the chaotic world of Mewgenics, a shapeshifting liquid-metal cat is considered a high-level threat.</li>
        </ul>
      `,
    },

    {
      id: 28,
      slug: 'mewgenics-hitler-iii-boss-guide',
      name: 'Hitler III',
      description: "Hitler III is the final House Boss of Mewgenics. Arriving in a mechanical saucer from the future to avenge his fallen clones, he forces the player through a grueling boss gauntlet before engaging in personal combat.",
      publishDate: '2026-03-09',
      imageUrl: '/images/boss/boss-28.webp',
      imageAlt: 'Mewgenics Hitler III Boss',
      seo: {
        title: 'Mewgenics Hitler III Boss Guide: Robo-Cat Gauntlet Strategy',
        description: 'Defeat Hitler III, the final House Boss in Mewgenics. Master the three-phase fight, including the 14 Robo-Cat gauntlet and the final execution phase.',
        keywords: ['Mewgenics', 'Hitler III', 'House Boss', 'Robo-Cats', 'Final Boss Strategy', 'The Crack of Doom'],
      },
      stats: {
        Health: '100',
        Damage: '6',
        Movement: '4',
        Luck: '5'
      },
      isPage: true,
      detailsHtml: `
        <blockquote>
          “ Hitler is back and surprise, surprise, he wants to kill everyone so... you probably shouldn't take the train today... ” — WMEW 99.9
        </blockquote>
    
        <p>Hitler III is the absolute final <strong>House Boss</strong>. Having traveled back from a ravaged future, he acts as a gatekeeper to the endgame, testing the player's knowledge of every class mechanic in the game.</p>
    
        <h2>Behavior & Three-Phase Battle</h2>
        <ul>
          <li><strong>Phase 1: The Robo-Gauntlet:</strong> Hitler III exits the map and becomes untargetable. He summons 14 robotic versions of every class miniboss (and Pebbles) one after another. You must defeat all 14 Robo-Cats to proceed.</li>
          <li><strong>Phase 2: The Saucer Duel:</strong> Hitler III enters the field in his mechanical saucer. He teleports frequently and uses a sidearm for ranged attacks. He possesses a deadly <strong>Counter-Attack</strong> for adjacent units and can <strong>instantly kill</strong> any cat that ends its turn in melee range.</li>
          <li><strong>Phase 3: The Execution:</strong> After his saucer is destroyed, Hitler III's head falls to the ground. He is completely defenseless. During this final stretch, all your cats are granted <strong>Adrenaline</strong> to finish him off.</li>
        </ul>
    
        <h2>Tips & Strategy</h2>
        <ul>
          <li><strong>Manage the Gauntlet:</strong> The 14 Robo-Cats (Robo-Pebbles, Robo-Magnus, Robo-Lucy, etc.) inherit the mechanics of their respective classes. Use the downtime between spawns to heal and reposition. Since Hitler III only appears once the 14th robot dies, you can leave one weak robot alive to "reset" your team's cooldowns.</li>
          <li><strong>Armor Piercing:</strong> Both the robots and Hitler III possess significant <strong>Armor</strong>. Abilities like <strong>Crushinator</strong> or <strong>Acid Spells</strong> that bypass or shred armor are essential for maintaining momentum.</li>
          <li><strong>Melee Avoidance:</strong> During Phase 2, never end a turn adjacent to Hitler III. His melee execution is absolute and will bypass most defensive stats. Use "Hit and Run" tactics or long-range sniping.</li>
          <li><strong>Teleport Prediction:</strong> Hitler III tends to teleport away from the last cat that damaged him. Position your team in a cross-formation to ensure someone always has line-of-sight after he blinks.</li>
        </ul>
    
        <h2>Trivia</h2>
        <ul>
          <li>Main Theme: <strong>The Crack of Doom</strong> (Changes during Phase 3).</li>
          <li>Hitler III's speech in the background of the WMEW 99.9 broadcast is a direct reference to his role as the ultimate antagonist of the clone lineage.</li>
          <li>The 14 Robo-Cats represent every playable class in the game, serving as a "final exam" of the player's combat knowledge.</li>
          <li>This is the only House Boss that forces a multi-man gauntlet before the actual boss can be targeted.</li>
        </ul>
      `,
    },

    {
      id: 29,
      slug: 'mewgenics-dust-devil-boss-guide',
      name: 'Dust Devil',
      description: "Dust Devil is a chaotic roaming boss found across several early-game environments. A vacuum-wielding menace that manipulates the battlefield with erratic tornadoes and sudden teleports.",
      publishDate: '2026-03-09',
      imageUrl: '/images/boss/boss-29.webp',
      imageAlt: 'Mewgenics Dust Devil Boss',
      seo: {
        title: 'Mewgenics Dust Devil Boss Guide: Tornado Mechanics & Event Tips',
        description: 'Learn how to defeat or recruit the Dust Devil in Mewgenics. Strategy for dodging tornadoes and managing his high-mobility teleportation.',
        keywords: ['Mewgenics', 'Dust Devil', 'The Alley', 'The Boneyard', 'The Desert', 'Mewgenics Event'],
      },
      stats: {Health: '100', Damage: '4', Movement: '1', Luck: '5'},
      isPage: true,
      detailsHtml: `
        <blockquote>
          “ Come on baby, and do the twist! ” — Dust Devil
        </blockquote>
    
        <p>The Dust Devil is a roaming boss encountered in <strong>The Alley</strong>, <strong>The Boneyard</strong>, and <strong>The Desert</strong>. While he primarily appears as an NPC in a specific event, failing that encounter forces a combat scenario where his erratic movement becomes a major threat.</p>
    
        <h2>Behavior & Combat</h2>
        <ul>
          <li><strong>Chaotic Displacement:</strong> Dust Devil focuses heavily on repositioning both himself and your cats. He rarely stays in one spot long enough for a stationary melee unit to land multiple hits.</li>
          <li><strong>Tornado Logic:</strong> His signature move leaves behind a persistent hazard. The tornado acts as a seeking projectile that clears the board of units and objects alike.</li>
        </ul>
    
        <h2>Attacks</h2>
        <ul>
          <li><strong>Bite:</strong> A standard melee attack used only if a unit ends their turn directly adjacent to him.</li>
          <li><strong>Tornado:</strong> Dust Devil dashes across the map, leaving a tornado at his starting tile. If he hits a unit during the dash, he spins, throwing all adjacent units 3 tiles in random directions. The tornado itself persists for 3 rounds, moving at 3 Speed toward the nearest unit.</li>
          <li><strong>Teleport:</strong> A high-utility move allowing him to blink to any empty tile within an 8-tile radius, making him extremely difficult to corner.</li>
        </ul>
    
        <h2>Tips & Strategy</h2>
        <ul>
          <li><strong>Avoid the "Twist":</strong> Keep your cats spread out. If the Dust Devil dashes into a clustered group, his spin can scatter your entire team into hazards or out of range of your healers.</li>
          <li><strong>Tornado Kiting:</strong> Since the tornado paths toward the *closest* unit, you can use a summon (like a squirrel or crow) to bait the tornado away from your main damage dealers.</li>
          <li><strong>Burst Damage:</strong> With only 100 HP, Dust Devil is a "glass cannon" boss. Rather than a battle of attrition, focus on heavy burst damage during the turns he is visible and within range before he can teleport away again.</li>
          <li><strong>Wait for the Event:</strong> Remember that you don't *have* to fight him. Successful completion of the <strong>Dust Devil (Event)</strong> allows him to join your party as a familiar, providing his vacuum powers for your own use.</li>
        </ul>
    
        <h2>Notes</h2>
        <ul>
          <li>Dust Devil is one of the few bosses that can transition from an enemy to an ally.</li>
          <li>In <strong>The Desert</strong>, the tornadoes can be harder to see against the sand-colored floor; pay close attention to the wind animation.</li>
        </ul>
    
        <h2>Trivia</h2>
        <ul>
          <li>His tagline "He's got the power of an upright in his goddamn hand!" is a humorous reference to upright vacuum cleaners.</li>
          <li>Despite having a Movement stat of 1, his effective mobility is among the highest in Act 1 due to his Dash and Teleport abilities.</li>
        </ul>
      `,
    },

    {
      id: 30,
      slug: 'mewgenics-throbbing-king-boss-guide',
      name: 'Throbbing King',
      description: "The Throbbing King is the grotesque ruler of the Throbbing Domain and the final boss of Act 1. A fetus-like tyrant fused to a pulsating sack, he commands the battlefield through a lethal 'Simon Says' style order mechanic.",
      publishDate: '2026-03-09',
      imageUrl: '/images/boss/boss-30.svg',
      imageAlt: 'Mewgenics Throbbing King Boss',
      seo: {
        title: 'Mewgenics Throbbing King Boss Guide: Phase 1 Orders & Strategy',
        description: 'Master the Throbbing King fight in Mewgenics. Learn how to survive the Roulette, Kneel, Spread Out, and Go Away orders in the final Act 1 encounter.',
        keywords: ['Mewgenics', 'Throbbing King', 'The Throbbing Domain', 'Act 1 Final Boss', 'Mewgenics Strategy', 'Simon Says Boss'],
      },
      stats: {Health: '460', Damage: '5', Movement: '3', Luck: '5'},
      isPage: true,
      detailsHtml: `
        <blockquote>
          “ HAIL TO THE KING! ” — Throbbing King
        </blockquote>
    
        <p>The Throbbing King is the climactic encounter of <strong>The Throbbing Domain</strong>. This fight is a high-stakes coordination test. The King rarely attacks directly, instead using his four turns per round to manipulate your positioning before unleashing board-wiping environmental strikes.</p>
    
        <h2>Phase One: The King's Commands</h2>
        <ul>
          <li><strong>Turn Economy:</strong> The King takes four turns every round. While he has 3 <strong>Trample</strong>, his primary focus is status infliction and arena clutter.</li>
          <li><strong>Order Mechanic:</strong> On his final turn each round, he issues a telegraph (an "Order"). This highlights specific tiles. You have exactly one turn with each cat to reach a safe zone before <strong>Tentacles</strong> deal 16 damage to all marked tiles.</li>
          <li><strong>Stun Immunity:</strong> The King cannot be stunned while an Order is active. Crucially, he <strong>never</strong> targets the tiles he is currently standing on, often making the area adjacent to him a temporary safe haven.</li>
        </ul>
    
        <h2>Attacks (Phase One)</h2>
        <ul>
          <li><strong>Entangle:</strong> Throws a flesh-ball that deals damage and applies 2 <strong>Slow</strong> and the <strong>Entangled</strong> (Webbed) status. This is his most dangerous move, as it prevents cats from reaching safe tiles during an Order.</li>
          <li><strong>Vomit Rain:</strong> Scatters a mix of <strong>Clots</strong>, <strong>Dips</strong>, rocks, and food across the board. While it provides potential healing, it also clutters paths and introduces poison hazards.</li>
        </ul>
    
        <h3>The Four Orders</h3>
        <table>
          <tr>
            <th>Order</th>
            <th>Visual Cue</th>
            <th>Safe Zone</th>
          </tr>
          <tr>
            <td><strong>Roulette</strong></td>
            <td>Raises fists, looks up</td>
            <td>A few randomly selected tiles. You must hunt for the un-highlighted spots.</td>
          </tr>
          <tr>
            <td><strong>Kneel</strong></td>
            <td>Smiles, points down</td>
            <td>The 8 tiles immediately surrounding the King.</td>
          </tr>
          <tr>
            <td><strong>Spread Out</strong></td>
            <td>Smiles, crosses arms</td>
            <td>Stay away from other cats! The tiles <em>under</em> your cats are safe, but the 2-tile radius around them is targeted.</td>
          </tr>
          <tr>
            <td><strong>Go Away</strong></td>
            <td>Frowns, points out</td>
            <td>The tiles along the very edge (perimeter) of the map.</td>
          </tr>
        </table>
    
        <h2>Strategy & Tips</h2>
        <ul>
          <li><strong>Prioritize Mobility:</strong> Because the "Spread Out" and "Go Away" orders require significant travel, cats with teleportation or high base movement are essential. Always clear the <strong>Entangled</strong> status immediately using a <strong>Cleric</strong> or items.</li>
          <li><strong>The King is Cover:</strong> Since the King never targets his own tiles, positioning your melee units directly adjacent to him is often safer than trying to run to the edges of the map, especially during "Kneel."</li>
          <li><strong>Summon Management:</strong> While familiars don't trigger "Spread Out" targeting, they can block your path to safe tiles. Keep your summons positioned where they won't body-block your main cats.</li>
          <li><strong>Phase Transition:</strong> Be prepared—once his health is depleted, the King will not die, but will instead transition into a much more aggressive Phase Two where the "Orders" mechanic becomes even more chaotic.</li>
        </ul>
    
        <h2>Trivia</h2>
        <ul>
          <li>Main Theme: <strong>Throbbing King (Song)</strong></li>
          <li>The " Simon Says" nature of the fight is a recurring trope in Edmund McMillen's game designs, emphasizing player reaction and movement over raw DPS.</li>
          <li>The King's design—a fetus attached to a sack—mirrors the "rebirth" themes found throughout the Throbbing Domain.</li>
        </ul>
      `,
    },

    {
      id: 31,
      slug: 'mewgenics-chaos-boss-guide',
      name: 'Chaos!',
      description: "Chaos! is the mind-bending final encounter of Act 2, located within The Rift. The battle begins with a distorted duo—a lethal Organ Grinder and a warped Steven—before culminating in a fight against the cosmic monstrosity Soahc.",
      publishDate: '2026-03-09',
      imageUrl: '/images/boss/boss-31.webp',
      imageAlt: 'Mewgenics Chaos Boss Fight',
      seo: {
        title: 'Mewgenics Chaos! Boss Guide: Organ Grinder & Soahc Strategy',
        description: 'Master the two-phase Chaos! fight in Mewgenics. Learn how to manage the Organ Grinder, recruit the Gun familiar, and survive the Rift transition.',
        keywords: ['Mewgenics', 'Chaos!', 'The Rift', 'Organ Grinder', 'Gun Familiar', 'Soahc', 'Act 2 Final Boss'],
      },
      stats: {
        Health: '80',
        Damage: '7',
        Movement: '6',
        Luck: '5',
      },
      isPage: true,
      detailsHtml: `
        <blockquote>
          “ Embrace chaos ! soahc ecarbmE ” — Chaos! Intro
        </blockquote>
    
        <p>Chaos! represents the breakdown of reality within <strong>The Rift</strong>. The first phase pits you against two corrupted versions of familiar NPCs, while the second phase introduces a titan that defies standard combat logic.</p>
    
        <h2>Phase 1: The Corrupted Duo</h2>
        <p>In this phase, you face the <strong>Organ Grinder</strong> and <strong>Steven</strong> simultaneously. The arena is plagued by glitch tiles that randomize effects, making positioning unpredictable.</p>
    
        <h3>Organ Grinder (Phase 1)</h3>
        <ul>
          <li><strong>Reactionary Fire:</strong> Much like the <em>Zodiac</em> encounter, the Organ Grinder uses a cat as a firearm. He will fire once on his turn and immediately shoot any unit that performs a movement action within his line of sight.</li>
          <li><strong>Ammo Constraint:</strong> While he has limited ammo, the "rounds" are incredibly high-damage (7 Damage). </li>
          <li><strong>The "Gun" Drop:</strong> Upon death, the Organ Grinder explodes, leaving behind 4 maggots and his weapon—a living cat literally named <strong>Gun</strong>.</li>
        </ul>
    
        <h4>Familiar: Gun</h4>
        <p>Once freed, <strong>Gun</strong> becomes a controllable familiar for the remainder of the fight.
          <ul>
            <li><strong>Stats:</strong> 4 in all categories. If the Organ Grinder was an Elite, Gun takes 2 turns per round.</li>
            <li><strong>Unique Mechanics:</strong> Attacks have inherent <strong>Knockback</strong>. As a "non-cat" entity, Gun is ignored by <em>Spread Out</em> targeting and is immune to the negative effects of <em>Glitch Tiles</em>.</li>
            <li><strong>Constraints:</strong> Gun cannot consume pickups or food.</li>
          </ul>
        </p>
    
        <h2>Attacks (Organ Grinder)</h2>
        <ul>
          <li><strong>Suppressing Fire:</strong> A long-range shot that targets the nearest cat.</li>
          <li><strong>Overwatch:</strong> A passive state where he shoots at the first unit to move during the player's turn.</li>
          <li><strong>Buttstroke:</strong> A melee knockback used if a cat ends its turn adjacent to him.</li>
        </ul>
    
        <h2>Strategies & Tips</h2>
        <ul>
          <li><strong>Bait the Overwatch:</strong> Use <strong>Gun</strong> or other summons (Squirrels/Crows) to trigger the Organ Grinder's reaction shot. Since Gun is resilient to the Rift's environmental hazards, he is the perfect candidate to soak up the Grinder's "Overwatch" fire.</li>
          <li><strong>Prioritize the Grinder:</strong> Because the Organ Grinder restricts your movement, he should be eliminated first. Gaining <strong>Gun</strong> as a familiar early in the fight provides a significant DPS boost for the fight against Steven and the eventual transition to Soahc.</li>
          <li><strong>Glitch Management:</strong> Use the <strong>Tinkerer</strong> or <strong>Psychic</strong> to manipulate the board. Since the Rift's tiles are chaotic, having a way to "Stabilize" or teleport cats out of dangerous zones is vital.</li>
          <li><strong>On-Kill Prep:</strong> Save your big "On-Kill" abilities for the 4 maggots that spawn after the Organ Grinder's death to trigger heals or buffs just before Soahc appears.</li>
        </ul>
    
        <h2>Trivia</h2>
        <ul>
          <li>Main Themes: <strong>Crazy Days</strong> (Phase 1) and <strong>Bolt Of Lightning</strong> (Phase 2).</li>
          <li>The name <strong>Soahc</strong> is simply "Chaos" spelled backwards, mirroring the mirrored text in the boss's introduction quote.</li>
          <li>The Organ Grinder using a cat as a gun is a dark reflection of the player's own relationship with their cats as "tools" for progression.</li>
        </ul>
      `,
    },

    {
      id: 32,
      slug: 'mewgenics-the-creator-boss-guide',
      name: 'The Creator',
      description: "The Creator is the ultimate Adventure Boss of Mewgenics, presiding over The Infinite. Serving as the final arbiter of the game, this fetal deity forces players to confront their own mirrors before escalating into a multi-phase battle of cosmic destruction.",
      publishDate: '2026-03-09',
      imageUrl: '/images/boss/boss-32.webp',
      imageAlt: 'Mewgenics The Creator Final Boss',
      seo: {
        title: 'Mewgenics The Creator Boss Guide: Final Boss Phases & Clone Strategy',
        description: 'Master the final battle of Mewgenics. Strategies for defeating The Creator, surviving The Destroyer, and the ultimate encounter with The Child in The Infinite.',
        keywords: ['Mewgenics', 'The Creator', 'The Infinite', 'Final Boss', 'Mewgenics Strategy', 'The Destroyer', 'Dig Your Own Grave'],
      },
      stats: {Health: '999', Damage: '0', Movement: '0', Luck: '5'},
      isPage: true,
      detailsHtml: `
        <div style="border: 2px solid #f00; padding: 10px; margin-bottom: 20px; background: #200;">
          <strong>Spoiler Warning:</strong> This page contains endgame content for <em>Mewgenics</em>.
        </div>
    
        <blockquote>
          “ Do not take revenge, my dear friends, but leave room for God's wrath. ” — The Creator
        </blockquote>
    
        <p>The Creator is the final encounter of <strong>The Infinite</strong>. The fight is a philosophical and mechanical gauntlet where the game's mechanics are turned against the player. It consists of three primary forms: The Creator, The Destroyer (Two Phases), and The Child.</p>
    
        <h2>Phase 1: The Creator (The Mirror)</h2>
        <ul>
          <li><strong>Immunity:</strong> In this form, The Creator sits upon a golden throne and is immune to all damage and status effects.</li>
          <li><strong>The Clones:</strong> It summons exact duplicates of your current party. 
            <ul>
              <li><strong>Normal Mode:</strong> Clones have your stats and abilities but <em>not</em> your items. They always act after the player's cats.</li>
              <li><strong>Hard/Impossible:</strong> Clones inherit all items and can gain <strong>Elite</strong> buffs, potentially acting before your party.</li>
            </ul>
          </li>
          <li><strong>Repulsion Pulse:</strong> If you attempt to attack The Creator directly, it releases a screen-wide shockwave that knocks all units 1 tile back, dealing no damage but disrupting positioning.</li>
        </ul>
    
        <h2>Phase 2 & 3: The Destroyer</h2>
        <p>Once the clones are slain, the golden throne shatters. The Creator reveals its true, terrifying nature as <strong>The Destroyer</strong>—a massive, multi-segmented cosmic horror.</p>
        <ul>
          <li><strong>Phase 2 (The Void):</strong> The Destroyer uses <strong>Void Beams</strong> and <strong>Reality Rips</strong>. It focuses on erasing tiles from the map, permanently shrinking the arena.</li>
          <li><strong>Phase 3 (The Maw):</strong> The boss begins to devour parts of the UI (such as hiding your ability bar or health numbers) while dealing massive physical damage to any cat that remains stationary.</li>
        </ul>
    
        <h2>Final Phase: The Child</h2>
        <p>In its final moments, the horror fades, leaving only a vulnerable fetal cat. 
          <ul>
            <li><strong>Behavior:</strong> The Child does not attack. It slowly crawls toward the center of the arena.</li>
            <li><strong>The Choice:</strong> The player must decide the fate of the "Mewgenic" cycle, leading to the game's various endings.</li>
          </ul>
        </p>
    
        <h2>Strategies & Tips</h2>
        <ul>
          <li><strong>Clone Sabotage:</strong> Since the clones copy your current stats, avoid entering the fight with temporary "glass cannon" buffs that might fade from you but persist on them. If playing on Hard, be wary of your own powerful trinkets being used against you.</li>
          <li><strong>Don't Waste Resources:</strong> Save your strongest active abilities and consumables for the transition to <strong>The Destroyer</strong>. The first phase is a test of attrition against your own builds; the second is a race against arena erasure.</li>
          <li><strong>Positioning in The Infinite:</strong> During Phase 2, stay near the center of the map. If you are on the edges when a <strong>Reality Rip</strong> occurs, your cat may be deleted along with the tile.</li>
          <li><strong>Crowd Control:</strong> Even though The Creator is immune to CC, the clones are not. Use <strong>Stun</strong>, <strong>Fear</strong>, or <strong>Freeze</strong> on your duplicates to prevent them from using your own high-damage combos.</li>
        </ul>
    
        <h2>Trivia</h2>
        <ul>
          <li>Main Theme: <strong>Dig Your Own Grave</strong>.</li>
          <li><strong>Nosce te Ipsum:</strong> The flavor text is Latin for "Know Thyself," a reference to the clone phase where you must defeat your own creations.</li>
          <li>The Creator’s fetal form is a recurring motif in Edmund McMillen’s work, representing both the beginning and the end of a biological cycle.</li>
          <li>Defeating The Creator on <em>Impossible</em> difficulty unlocks the <strong>"Alpha & Omega"</strong> skin for all starting cats.</li>
        </ul>
      `,
    },


    // {
    //   id: 1,
    //   slug: '',
    //   name: '',
    //   description: '',
    //   publishDate: '',
    //   imageUrl: '',
    //   imageAlt: '',
    //   seo: {
    //     title: '', 
    //     description: '', 
    //     keywords: [''],
    //   },
    //   stats: {Health: '', Damage: '', Movement: '', Luck: ''},
    //   isPage: true,
    //   detailsHtml: '',
    // },
]
