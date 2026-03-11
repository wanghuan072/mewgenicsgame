/**
 * NPCs data source: https://mewgenics.wiki.gg/wiki/Non-playable_characters
 * Data only. UI logic lives in views.
 */
export default [
  {
      id: 1,
      slug: 'mewgenics-dr-beanies-npc-guide',
      name: 'Dr. Beanies',
      description: 'Thomas A. Beanies is the first NPC in Mewgenics, a scientist who manages Side Quest items and utilizes mutated cats for his mysterious experiments.',
      publishDate: '2026-03-09',
      imageUrl: '/images/npcs/npc-01.svg',
      imageAlt: 'Dr. Beanies Mewgenics NPC',
      stats: {
        species: 'Human',
        gender: 'Male',
        aliases: 'The Doc, Beanies',
        role: 'Item Unlocks, Story Progression',
        cats: 'Mutations, Birth Defects, Disorders, or Parasites',
        unlock: 'Beat The Caves and The Boneyard',
      },
      seo: {
        title: 'Dr. Beanies Guide: Side Quests & Lore - Mewgenics Wiki', 
        description: 'Learn about Dr. Beanies in Mewgenics. Discover his side quest items, reward mechanics, and his role in the game’s timeline.', 
        keywords: ['Dr. Beanies', 'Thomas A. Beanies', 'Mewgenics NPC', 'Side Quests', 'Persuasion Device'],
      },
      isPage: true,
      detailsHtml: `
        <p><strong>Dr. Beanies</strong> (Thomas A. Beanies) is the first character the player interacts with and the one who brought them back to life. He provides the player with <strong>Side Quest Items</strong> that alter adventure rules and grant unique rewards upon completion.</p>
    
        <h2>Side Quests & Rewards</h2>
        <p>After completing the initial <strong>Persuasion Device</strong> quest, Dr. Beanies will offer a random Side Quest item for every <strong>5 cats</strong> you send him. These quests act as challenge runs and must be completed in Chapter 3 or Chapter 4.</p>
    
        <ul>
          <li><strong>Rewards:</strong> Completing a quest grants a unique reward item and 200–500 Coins.</li>
          <li><strong>Inventory:</strong> You can hold up to 5 Side Quest items. If full, you must finish or discard one to get another.</li>
          <li><strong>Loss:</strong> If the cat carrying a Side Quest item dies, the item is lost and must be re-earned.</li>
          <li><strong>Repetition:</strong> Once all unique items are unlocked, he will offer quests at random.</li>
        </ul>
    
        <h2>Background & Story</h2>
        <p>Dr. Beanies has conducted extensive testing on various creatures, often dumping his scientific byproducts down a chute leading into <strong>The Core</strong>. This behavior is implied to be a major cause of the anomalies found in Act 2. <strong>Butch</strong> eventually discovers evidence of Beanies performing extreme surgeries, such as the separation of conjoined twins.</p>
    
        <p>Throughout the game, Beanies displays a "grumpy streak" and a profound lack of moral sanctity. His actions range from federal crimes like sanding serial numbers off firearms to harvesting grease from unwanted cats. He frequently shifts blame onto the player for his own lab failures.</p>
    
        <p>The finale of his arc reveals a tragic motivation: <strong>The Creator</strong> took the soul of his beloved cat, <strong>Stacy</strong>. His subsequent obsession with time travel and reality-warping technology is a desperate attempt to bring her back, eventually culminating in a quest to build a nuke capable of destroying reality itself.</p>
    
        <h2>Quotes</h2>
        <ul>
          <li>"Do not take revenge, my dear friends, but leave room for God's wrath."</li>
          <li>"I brought you back to life... you owe me some data."</li>
          <li>"Don't worry about where the grease comes from."</li>
        </ul>
    
        <h2>Trivia</h2>
        <ul>
          <li>He resurrected the player character at the start of the game using a defibrillator.</li>
          <li>Beanies is shown to be capable of hiding his grumpy nature at a moment's notice when it suits his goals.</li>
          <li>The <strong>Persuasion Device</strong> is guaranteed to be the first Side Quest item received.</li>
          <li>He often refers to himself simply as "The Doc."</li>
        </ul>
      `,
    },

    {
      id: 2,
      slug: 'mewgenics-butch-npc-guide',
      name: 'Butch',
      description: 'Butch is the primary combat instructor and logistical coordinator in Mewgenics. He manages storage upgrades, class unlocks, and provides veteran commentary on your progress through the game.',
      publishDate: '2026-03-09',
      imageUrl: '/images/npcs/npc-02.svg',
      imageAlt: 'Butch Mewgenics NPC',
      stats: {
        species: 'Human',
        gender: 'Male',
        aliases: 'Jimmy Necktie, Hogwire Mahoney, Knuckles Magoo',
        role: 'Combat Instructor, Storage Upgrades',
        cats: 'Retired cats with specific adventure milestones',
        unlock: 'Meet Frank (Tutorial Completion)',
      },
      seo: {
        title: 'Butch Guide: Storage Upgrades & Class Collars - Mewgenics Wiki', 
        description: 'Learn how to unlock Butch in Mewgenics, upgrade your cat storage, and collect Class Collars from this veteran combat instructor.', 
        keywords: ['Butch Mewgenics', 'Storage Upgrades', 'Class Collars', 'Retired Cats', 'Mewgenics NPC Guide'],
      },
      isPage: true,
      detailsHtml: `
        <p><strong>Butch</strong> is a core non-playable character who serves as the player's primary contact for logistical growth. A rough-around-the-edges veteran, he is unlocked immediately after the tutorial and resides in the main hub area.</p>
    
        <h2>Gameplay & Leveling</h2>
        <p>Butch's primary function is to <strong>expand your storage space</strong>. To earn these upgrades, you must trade in retired cats that have reached specific milestones in their adventures. As your facility grows, Butch’s standards become increasingly strict.</p>
    
        <h3>Requirements & Scaling</h3>
        <p>Butch requires cats that have cleared specific chapters. A cat that has surpassed a requirement (e.g., a cat that cleared <strong>The Moon</strong> when Butch only requires <strong>The Caves</strong>) will always satisfy the trade.</p>
        
        <ul>
          <li><strong>Early Game:</strong> Requires cats that have simply survived their first adventure or cleared Act 1.</li>
          <li><strong>Mid Game:</strong> Requires cats with higher level caps and successful runs through Act 2 zones like <strong>The Core</strong>.</li>
          <li><strong>Late Game:</strong> Demands veterans of <strong>The Future</strong> or <strong>The Infinite</strong>.</li>
        </ul>
    
        <h2>Class Collars</h2>
        <p>Butch is the keeper of the <strong>Class Collars</strong>. Once you meet the specific achievement requirements to unlock a new class (such as the Mage, Fighter, or Necromancer), Butch will be the one to officially hand over the collar, allowing you to assign that class to your future kittens.</p>
    
        <h2>Role in the Story</h2>
        <p>Beyond logistics, Butch provides essential commentary on your progress. He is often the first to notify the player when a <strong>House Boss</strong> is approaching or when a new chapter has been discovered. He maintains a rivalry/partnership with Dr. Beanies, often providing a more grounded, combat-focused perspective compared to the Doc's clinical obsession.</p>
    
        <h2>Trivia</h2>
        <ul>
          <li>Butch has an array of colorful aliases, including <strong>Jimmy Necktie</strong> and <strong>Knuckles Magoo</strong>, hinting at a checkered past before joining the lab.</li>
          <li>He is the character who introduces the player to the concept of "Retiring" cats properly.</li>
          <li>His dialogue often includes "tough love" encouragement for the player's combat performance.</li>
          <li>Butch is present during the game's tutorial, helping the player understand the basic UI and combat flow.</li>
        </ul>
      `,
    },

    {
      id: 3,
      slug: 'mewgenics-frank-npc-guide',
      name: 'Frank',
      description: 'Frank is the eccentric architect living in the sewers who manages house expansions. While appearing child-like and physically unwell, his true nature is one of the deepest mysteries in Mewgenics.',
      publishDate: '2026-03-09',
      imageUrl: '/images/npcs/npc-03.svg',
      imageAlt: 'Frank Mewgenics NPC',
      stats: {
        species: 'Unknown',
        gender: 'Male',
        aliases: 'Fank, The sweaty sick thing in the sewers',
        role: 'House Expansion',
        cats: 'Retired Cats',
        unlock: 'Complete the Tutorial',
      },
      seo: {
        title: 'Frank Guide: House Upgrades & Lore - Mewgenics Wiki', 
        description: 'Unlock more rooms in Mewgenics with Frank. Discover the costs of house upgrades and the dark secrets behind Frank’s "Bean."', 
        keywords: ['Frank Mewgenics', 'House Upgrades', 'Retired Cats', 'Mewgenics Lore', 'Dr. Beanies Frank'],
      },
      isPage: true,
      detailsHtml: `
        <p><strong>Frank</strong> is an architect residing in <strong>The Sewers</strong>. He is the individual responsible for building the player's house and provides structural expansions in exchange for the company of <strong>Retired Cats</strong>. Frank refers to himself as "retired" and possesses a child-like, literal-minded personality.</p>
    
        <h2>House Upgrades</h2>
        <p>Frank offers four primary structural upgrades. Each tier increases the number of available rooms and storage slots for your cats.</p>
    
        <ul>
          <li><strong>Upgrade 1:</strong> Adds a second room. (Cost: 1 Retired Cat)</li>
          <li><strong>Upgrade 2:</strong> Adds a third room and expands the attic. (Cost: 25 Additional Cats)</li>
          <li><strong>Upgrade 3:</strong> Adds two more rooms (one boarded). (Cost: 50 Additional Cats)</li>
          <li><strong>Upgrade 4:</strong> Opens the final boarded room. (Cost: 100 Additional Cats)</li>
          <li><strong>Endless Reward:</strong> After all upgrades, Frank provides random <strong>Parasite Items</strong> for further cat contributions.</li>
        </ul>
    
        <h2>Background & Story</h2>
        <p>Frank exhibits disturbing physical symptoms, including constant sweating, panting, and an unhealthy complexion. He is often seen chasing cats or expressing a fascination with bodily functions. He suffers from severe abandonment issues, frequently mentioning his "Mom" who he believes is "up in space."</p>
    
        <h3>The Mystery of "The Bean"</h3>
        <p>A strange growth on Frank's hunchback, known as <strong>"Frank's Bean,"</strong> appears to be sentient, mirroring Frank's facial expressions. Frank often refers to himself as a plurality ("we"), hinting that the Bean and the host are separate entities. He has mentioned "building a new Frank" in the past, suggesting his current body is merely a vessel.</p>
    
        <h3>The True Identity (Endgame Spoilers)</h3>
        <p>The final ending of the game reveals Frank's parasitic nature. Upon Frank's death, the "Bean" detaches and locates the body of <strong>Dr. Beanies</strong>. It burrows into the doctor's back, reanimating him. The resurrected Beanies adopts Frank's speech patterns and physical tics, calling the player "Mommy," effectively confirming that "Frank" is a parasitic entity that hops between hosts to maintain the cycle.</p>
    
        <h2>Trivia</h2>
        <ul>
          <li>Frank is the only NPC who does not understand metaphors, taking every "tip" offered as a literal physical object.</li>
          <li>He wrote "Mom Come Home" on a rocket in <strong>The Desert</strong>, a tragic foreshadowing of his connection to the cosmic events of the game.</li>
          <li>His house icons transition from standard blueprints to increasingly erratic sketches as the upgrades progress.</li>
          <li>He claims his new body in <strong>The Caves</strong> isn't as fast as his old one, implying he has changed hosts at least once before the game begins.</li>
        </ul>
      `,
    },

    {
      id: 4,
      slug: 'mewgenics-tink-npc-guide',
      name: 'Tink',
      description: 'Ferguson Rodney Tinkles is the local cat breeder and pageant enthusiast in Mewgenics. He manages social indicators, lineage tracking, and breeding logistics in exchange for newborn kittens.',
      publishDate: '2026-03-09',
      imageUrl: '/images/npcs/npc-04.svg',
      imageAlt: 'Tink Mewgenics NPC',
      stats: {
        species: 'Human',
        gender: 'Male',
        aliases: 'Mr. Tinkles, Ferguson Rodney Tinkles',
        role: 'Cat Breeder, Social Indicators',
        cats: 'Kittens (1 day old)',
        unlock: 'Complete the Tutorial / Meet Frank',
      },
      seo: {
        title: 'Tink Guide: Breeding Indicators & Lineage - Mewgenics Wiki', 
        description: 'Unlock the Family Tree, Gaydar, and Aggression indicators with Tink in Mewgenics. Learn the requirements for breeding rewards.', 
        keywords: ['Tink Mewgenics', 'Cat Breeder', 'Mewgenics Lineage', 'Kittens', 'Mewgenics NPC'],
      },
      isPage: true,
      detailsHtml: `
        <p><strong>Ferguson Rodney Tinkles</strong>, better known as <strong>Tink</strong>, is an eccentric NPC specializing in the aesthetic and social aspects of cat breeding. He runs the local beauty pageants and provides essential UI upgrades that reveal hidden cat statistics and social dynamics.</p>
    
        <h2>Gameplay & Breeding Requirements</h2>
        <p>Tink has very specific tastes: he only accepts <strong>Kittens</strong> that are exactly 1 day old (born on the same day they are given to him). Despite his "no uggos" catchphrase, he will accept any kitten regardless of birth defects, mutations, or inbreeding status.</p>
    
        <h3>Upgrade Path</h3>
        <p>After the initial reward, Tink requires <strong>10 Kittens</strong> per level to unlock the next milestone.</p>
        <ul>
          <li><strong><a href="/wiki/items/mewgenics-fancy-bow">Fancy Bow</a>:</strong> A secret cosmetic reward for the first kitten provided.</li>
          <li><strong>Base Stats:</strong> Unlocks the ability to view a cat's base stats and modifications separately.</li>
          <li><strong>Lineage & Inbreeding:</strong> Adds a family tree view and an icon indicating a cat's inbreeding level.</li>
          <li><strong>Gaydar & Libido:</strong> Displays a cat's sexuality (via flag) and a libido icon.</li>
          <li><strong>Custom Symbols:</strong> Allows the player to manually add symbols to a cat's name for organization.</li>
          <li><strong>Aggression Indicator:</strong> Reveals how aggressive a cat is, affecting social interactions.</li>
          <li><strong>Relationship Indicator:</strong> Adds icons showing who a cat loves or hates.</li>
          <li><strong>Endless Reward:</strong> After all milestones, Tink provides 25 coins ("Hush Money") for every 10 kittens.</li>
        </ul>
    
        <h2>Background & Lore</h2>
        <p>Tink is a flamboyant character who takes pride in his photography and pageant management. However, deeper interactions reveal a more serious side. He eventually reveals a scar on his cheek, which heavily implies a tragic connection to <strong>Butch</strong>. Lore hints suggest they may be the conjoined twins mentioned in <strong>Dr. Beanies'</strong> history—twins separated at the cheek, with one potentially being the "discarded" byproduct of the other.</p>
    
        <p>This connection is further solidified in <strong>The Rift</strong>, where Tink and Butch appear as a single combined enemy entity, representing their original state.</p>
    
        <h2>Trivia</h2>
        <ul>
          <li>Tink's shirt is dynamic and changes symbols every time the player visits him. Notable symbols include "67," "HBIC," "Prince," and "SPOILED."</li>
          <li>The name "Tink" is likely a play on the LGBTQ+ slang term "twink," reflecting his character design and aesthetic.</li>
          <li>He is the only NPC that requires cats of a specific age (1 day old).</li>
          <li>His obsession with "pageant-ready" cats contrasts sharply with the gritty, survivalist nature of Butch.</li>
        </ul>
      `,
    },

    {
      id: 5,
      slug: 'mewgenics-tracy-npc-guide',
      name: 'Tracy',
      description: 'Tracy Newkirk is the disgruntled clerk of P-Mart and adventure shops. A staunch animal rights activist who ironically works in the pet trade, she manages food supplies, furniture idols, and essential house items.',
      publishDate: '2026-03-09',
      imageUrl: '/images/npcs/npc-05.svg',
      imageAlt: 'Tracy Mewgenics NPC',
      stats: {
        species: 'Human',
        gender: 'Female',
        aliases: 'No.',
        role: 'P-Mart Vendor, Shopkeeper',
        cats: 'Cats aged 5 days or older',
        unlock: 'Visit P-Mart after the tutorial',
      },
      seo: {
        title: 'Tracy Guide: P-Mart Upgrades & Food Storage - Mewgenics Wiki', 
        description: 'Unlock more food storage and mysterious idols with Tracy in Mewgenics. Learn about her favor levels and shop mechanics.', 
        keywords: ['Tracy Mewgenics', 'P-Mart', 'Food Storage Upgrade', 'Blank Collar', 'Mewgenics Shop', 'Tracy Newkirk'],
      },
      isPage: true,
      detailsHtml: `
        <p><strong>Tracy Newkirk</strong> is the primary vendor for <strong>P-Mart</strong> and the recurring shopkeeper found during adventures. Despite her role, she harbors a deep-seated resentment toward pet owners and the commercialization of animals, often greeting the player with vitriol and insults.</p>
    
        <h2>P-Mart Unlocks & Favor</h2>
        <p>Tracy accepts older cats (aged 5 days or more) into her care—or rather, into the store's "system." Increasing your favor level with Tracy expands the inventory of P-Mart and increases your total food capacity.</p>
    
        <h3>Upgrade Path</h3>
        <p>Every 10 cats provided (after the first level) unlocks a new item in her stock rotation. Notable rewards include:</p>
        <ul>
          <li><strong>Food Storage Upgrades:</strong> Each upgrade increases your maximum food capacity by 40 units (starting from 140 up to 500).</li>
          <li><strong>Blank Collars:</strong> Essential for assigning classes to cats that don't have them.</li>
          <li><strong>Mysterious Idols:</strong> Random furniture items that provide various house bonuses.</li>
          <li><strong>Endless Reward:</strong> At maximum favor, Tracy will occasionally stock a <strong>Rare Item at half price</strong> for every 10 additional cats.</li>
        </ul>
    
        <h2>Shop Mechanics</h2>
        <p>Wares unlocked via favor are added to a special "P-Mart Shop Slot" in the bottom right of the interface. 
        <ul>
          <li><strong>Pricing:</strong> Food boxes typically cost <strong>100 Coins</strong>, while Furniture Idols and the first Blank Collar cost <strong>150 Coins</strong>.</li>
          <li><strong>Adventure Shops:</strong> Tracy appears in various chapters to sell items. In <strong>The Desert</strong>, she is known to price-guage for Water Bottles, and in <strong>The Bunker</strong>, she surprisingly gets along with the cultists.</li>
        </ul>
    
        <h2>Character & Lore</h2>
        <p>Tracy is a complex and often contradictory character. She believes herself to be the only person who truly cares about animals, yet she works as a clerk in a store that treats them as commodities. Her behavior is consistently miserable; she has a "faked" happy persona that lasts for mere seconds before she reverts to wishing the player would die in a meat locker.</p>
    
        <p>Interestingly, she doesn't seem to regard the player character as a friend even at high favor levels. She justifies her help as "doing it for the cats," such as reserving popular Furniture Idols or stocking better food, while simultaneously cussing out the player for their consumerism.</p>
    
        <h2>Trivia</h2>
        <ul>
          <li>Not to be confused with <strong>Tracy (Enemy)</strong>, a separate entity found in the Rift.</li>
          <li>She maintains a tip jar at her shops despite her outward hatred for the player's business.</li>
          <li>Tracy is one of the few characters who seems unfazed by the weirdness of Act 2, dismissing the Bunker cultists as simply "neurodivergent."</li>
          <li>Her signature response to most inquiries is a blunt "No."</li>
        </ul>
      `,
    },

    {
      id: 6,
      slug: 'mewgenics-baby-jack-npc-guide',
      name: 'Baby Jack',
      description: 'Jackie Dustin Nickel, better known as Baby Jack, is the specialized furniture vendor in Mewgenics. He manages home decor and structural furniture items, trading his inventory expansions for cats with physical injuries.',
      publishDate: '2026-03-09',
      imageUrl: '/images/npcs/npc-06.svg',
      imageAlt: 'Baby Jack Mewgenics NPC',
      stats: {
        species: 'Human',
        gender: 'Male',
        aliases: 'BJ, Jackie, Jackie Dustin Nickel',
        role: 'Furniture Vendor',
        cats: 'Cats with Injuries (Scars, Missing Limbs, etc.)',
        unlock: 'Obtain your first piece of Furniture',
      },
      seo: {
        title: 'Baby Jack Guide: Furniture Shop & Injury Trades - Mewgenics Wiki', 
        description: 'Learn how to expand your furniture options with Baby Jack in Mewgenics. Discover his restock schedule and the requirements for upgrading his shop.', 
        keywords: ['Baby Jack Mewgenics', 'Furniture Vendor', 'Mewgenics NPC', 'Jackie Dustin Nickel', 'Mewgenics Injuries'],
      },
      isPage: true,
      detailsHtml: `
        <p><strong>Baby Jack</strong> (Jackie Dustin Nickel) is the primary source for home customization in <em>Mewgenics</em>. Operating out of a cluttered storefront, he provides the player with furniture that can grant passive house bonuses or simply improve the aesthetic of your cat rooms.</p>
    
        <h2>Furniture Shop Mechanics</h2>
        <p>Baby Jack operates on a specific weekly schedule. Unlike other vendors who may restock after every adventure, Jack’s inventory is more deliberate.</p>
        
        <ul>
          <li><strong>Initial Stock:</strong> By default, he offers 2 pieces of furniture at a time.</li>
          <li><strong>Restock Schedule:</strong> New items are added every <strong>Sunday</strong> (in-game time).</li>
          <li><strong>Upgrade Requirement:</strong> To increase the variety and quality of his wares, Baby Jack requires cats with <strong>Injuries</strong>. This includes cats with permanent scars, missing eyes, or lost limbs sustained during combat or accidents.</li>
        </ul>
    
        <h2>Gameplay & Leveling</h2>
        <p>Providing injured cats to Baby Jack represents his interest in "fixing things up" or perhaps his sympathy for the weathered veterans of your adventures. Each level of favor increases the number of slots available in his shop, eventually allowing for rare <strong>End-Game Furniture</strong> to appear in the rotation.</p>
    
        <h2>Character & Background</h2>
        <p>Baby Jack is often seen tinkering with broken chairs or polishing wooden frames. His alias "BJ" is used by his closer associates, though he officially goes by Jackie. He maintains a professional, if somewhat eccentric, demeanor focused entirely on the craftsmanship of his items.</p>
    
        <h2>Tips for Players</h2>
        <ul>
          <li><strong>Save Your Scars:</strong> Don't immediately retire or trade away cats with minor injuries to other NPCs. Save them for Baby Jack to quickly unlock larger shop inventories.</li>
          <li><strong>Sunday Shopping:</strong> Always check Jack’s shop on Sundays before heading out on a major adventure to ensure you don't miss out on high-tier furniture items that might be replaced by the next restock.</li>
          <li><strong>Furniture Stacking:</strong> Some furniture items provide stackable bonuses; check the descriptions carefully to see how they interact with your current house setup.</li>
        </ul>
    
        <h2>Trivia</h2>
        <ul>
          <li>He is one of the few NPCs whose shop is tied to a specific day of the week rather than player actions.</li>
          <li>His middle name, "Dustin," is a nod to his profession, as he is constantly dealing with dusty old antiques.</li>
          <li>Baby Jack is the only character who explicitly seeks out cats with physical disabilities/injuries, viewing them as symbols of "character" rather than defects.</li>
        </ul>
      `
    },

    {
      id: 7,
      slug: 'mewgenics-organ-grinder-npc-guide',
      name: 'Organ Grinder',
      description: 'The Organ Grinder, also known as the Mystery Man, is a spectral NPC who salvages items, coins, and food from failed adventure runs. He possesses the unique trait of assuming the player\'s actual username as his own.',
      publishDate: '2026-03-09',
      imageUrl: '/images/npcs/npc-07.svg',
      imageAlt: 'Organ Grinder Mewgenics NPC',
      stats: {
        species: 'Undead / Zombie',
        gender: 'Unknown',
        aliases: "The Player's Username, Mystery Man",
        role: 'Failed Adventure Compensation',
        cats: 'Dead Cats (Automatically collected)',
        unlock: 'Lose a run (Excluding House Bosses)',
      },
      seo: {
        title: 'Organ Grinder Guide: Run Recovery & Lore - Mewgenics Wiki', 
        description: 'Discover how the Organ Grinder saves your items in Mewgenics. Strategy for failed runs, Mystery Man upgrades, and the secret behind his name.', 
        keywords: ['Organ Grinder Mewgenics', 'Mystery Man', 'Failed Run Recovery', 'Mewgenics Lore', 'Mewgenics NPC'],
      },
      isPage: true,
      detailsHtml: `
        <p>The <strong>Organ Grinder</strong> (referred to in achievements as the <strong>Mystery Man</strong>) acts as a safety net for players. When a run ends in failure, he appears to retrieve a portion of your lost assets. His presence is fundamentally tied to the player's own identity, as he assumes your current platform username as his own.</p>
    
        <h2>Recovery Mechanics</h2>
        <p>When you lose a run, the Organ Grinder offers a choice. At base level, he recovers:
        <ul>
          <li>A portion of collected <strong>Coins</strong>.</li>
          <li>A portion of collected <strong>Food</strong>.</li>
          <li>One <strong>Item</strong> from your inventory.</li>
        </ul>
        <strong>Note:</strong> You may only choose <strong>one</strong> of these three categories to keep.</p>
    
        <h3>Upgrades & Favor</h3>
        <p>The Organ Grinder automatically collects the "Dead Cats" from your failed runs. As he accumulates more bodies, his recovery abilities improve, allowing him to salvage a higher percentage of loot.</p>
        <ul>
          <li><strong>Mystery Man Upgrades 1-7:</strong> Successive tiers increase the amount of food, coins, and the rarity/quantity of items salvaged.</li>
          <li><strong>Endless Reward:</strong> After reaching maximum favor, every 10 additional dead cats provide a <strong>Consumable Disorder Syringe</strong>.</li>
        </ul>
    
        <h2>Strategy & Tips</h2>
        <ul>
          <li><strong>Item Prioritization:</strong> The Organ Grinder prioritizes unequipped items. If you are carrying high-value loot like a <strong>Furniture Box</strong> or a <strong>Money Bag</strong>, it is often safer to keep them in your inventory rather than equipping them, ensuring they show up in the recovery pool if the run goes south.</li>
          <li><strong>The "No Fail" Credit Secret:</strong> If you manage to complete the first two acts without a single failure, the Organ Grinder will appear as "???" in the credits, as the player character has technically never met him.</li>
        </ul>
    
        <h2>Background & Story</h2>
        <p>The Organ Grinder is a tragic figure with fragmented memories. He was once a resident of <strong>The Throbbing Domain</strong> but betrayed the <strong>Throbbing King</strong> by walling him off in the Boneyard, leading to the King's "buried" status. He claims to be held together and animated entirely by <strong>maggots</strong> and worms filling his dead muscle tissue—a lore detail that explains the nature of the Undead in the Mewgenics universe.</p>
        
        <p>Disturbingly, he has vague memories of <strong>Stacy</strong> (Dr. Beanies' cat) and suggests he may have consumed her original physical form. His primary "memory" is a childhood warning from his mother about pulling out his fingernails.</p>
    
        <h2>Trivia</h2>
        <ul>
          <li>His design is a direct homage to <strong>Ash</strong>, the protagonist of Edmund McMillen’s 2017 game <em>The End Is Nigh</em>.</li>
          <li>The name "Organ Grinder" is never spoken in-game; it is found in the game's internal code and early developer blog posts.</li>
          <li>If you change your Steam/platform name, a special cutscene triggers where the Organ Grinder acknowledges and adopts the new name.</li>
          <li>He jokingly claims all zombies are weak to "hot fudge" and "long walks on the beach."</li>
        </ul>
      `,
    },

    {
      id: 8,
      slug: 'mewgenics-steven-npc-guide',
      name: 'Steven',
      description: 'Steven is the meta-fictional anti-cheat warden of Mewgenics. Originating from Time Fcuk, he monitors "save scumming" behavior and manages difficulty settings and boss resummoning from the player’s home.',
      publishDate: '2026-03-09',
      imageUrl: '/images/npcs/npc-08.svg',
      imageAlt: 'Steven Mewgenics NPC',
      stats: {
        species: 'Unknown (Meta-Entity)',
        gender: 'Male',
        aliases: 'That Mr. Resetti guy, Fank (mistakenly)',
        role: 'Anti-cheat mechanism, Difficulty Manager',
        cats: 'N/A',
        unlock: 'Unlock the Ice Age chapter',
      },
      seo: {
        title: 'Steven Guide: Save Scumming Penalties & Difficulty - Mewgenics Wiki', 
        description: 'Learn how Steven prevents cheating in Mewgenics. Detailed guide on Deja Vu disorders, house boss resummoning, and scouting loopholes.', 
        keywords: ['Steven Mewgenics', 'Save Scumming', 'Deja Vu Disorder', 'Time Fcuk', 'Mewgenics Difficulty', 'Mewgenics Anti-cheat'],
      },
      isPage: true,
      detailsHtml: `
        <p><strong>Steven</strong> is a recurring character in Edmund McMillen's universe, serving as the meta-aware enforcer of <em>Mewgenics</em>. He exists primarily to prevent "save scumming"—the act of exiting the game mid-battle to reset unfavorable outcomes.</p>
    
        <h2>Anti-Cheat Mechanics: Save Scumming</h2>
        <p>Steven tracks how many times you exit mid-combat during a single adventure. Penalties scale with each offense:</p>
        <ul>
          <li><strong>1st Reset:</strong> No penalty. Steven provides a stern warning.</li>
          <li><strong>2nd Reset:</strong> One cat receives the <strong>Deja Vu</strong> disorder (10% chance for any action to fail).</li>
          <li><strong>3rd Reset:</strong> All cats in the party receive the <strong>Deja Vu</strong> disorder.</li>
          <li><strong>4th Reset:</strong> "The gloves come off." All cats receive <strong>Severe Deja Vu</strong>, turning them into AI-controlled units for the remainder of the battle.</li>
        </ul>
        <p><em>Note: Completing an adventure resets this counter. Returning home removes the Deja Vu disorders.</em></p>
    
        <h3>The Scouting Loophole</h3>
        <p>Steven's detection only triggers after a player has performed an action (moving, attacking, or using an item) in battle. You can "scout" an enemy's layout and immediately close the game <strong>before</strong> taking a turn to reload and adjust your strategy without penalty.</p>
    
        <h2>NPC Services & Home Interaction</h2>
        <p>Once you repair Dr. Beanies' time machine and reach the <strong>Ice Age</strong>, Steven relocates to your home base to offer administrative services:</p>
    
        <ul>
          <li><strong>Resummoning House Bosses:</strong> Steven can make previously defeated House Bosses reappear with a 3-day countdown. This is essential for farming items on higher difficulties or refilling food supplies (e.g., refighting <strong>Guillotina</strong>).</li>
          <li><strong>Difficulty Management:</strong> Steven is the curator of the game's difficulty tiers. Speaking to him allows you to unlock and toggle higher difficulty settings for your runs.</li>
        </ul>
    
        <h2>Dialogue: The First Warning</h2>
        <blockquote>
          “ Oh Hey!, It's Me, Steven! You May Know Me From Such Games As TimeFcuk, The End Is Nigh Or The Binding Of Isaac! ... I'm Here Because I Can See You're FCUKING With The Game Save! ... If you Try And Mess With The Save During Combat Each Run You Get One Pass! ONE CHANCE! ”
        </blockquote>
    
        <h2>Trivia</h2>
        <ul>
          <li>Steven is a direct reference to the character from <em>Time Fcuk</em>, and he explicitly mentions his appearances in other McMillen titles.</li>
          <li>His role as an anti-cheat warden is a parody of <strong>Mr. Resetti</strong> from the <em>Animal Crossing</em> series.</li>
          <li>Because cats have a limit of two syndromes, players can theoretically use Steven's <strong>Deja Vu</strong> penalty to "push out" a more permanent, worse disorder.</li>
          <li>Steven has a rare chance to appear on the save selection screen, momentarily replacing Dr. Beanies' icon.</li>
          <li>He refers to his punishments as "IRL curses," humorously threatening the player's parents or home to emphasize the "meta" nature of his character.</li>
        </ul>
      `,
    }


    



    // {
    //   id: 1,
    //   slug: '',
    //   name: '',
    //   description: '',
    //   publishDate: '2026-03-05',
    //   imageUrl: '/images/npcs/npc-01.webp',
    //   imageAlt: '',
    //   stats: {
    //     species: '',
    //     gender: '',
    //     aliases: '',
    //     role: '',
    //     cats: '',
    //     unlock: '',
    //   },
    //   seo: {
    //     title: '', 
    //     description: '', 
    //     keywords: [''],
    //   },
    //   isPage: true,
    //   detailsHtml: ``,
    // },
]
