export default [
  {
    id: 1,
    slug: 'stat-visualizer',
    title: 'Mewgenics Data Visualizer: Hidden Genes & Mutation Odds',
    description: 'The definitive data tool for Mewgenics. Reveal hidden genetic markers, precise mutation percentages, and detailed combat scaling that the vanilla game hides.',
    publishDate: '2026-03-05',
    imageUrl: '/images/mods/mod-01.webp', 
    imageAlt: 'Screenshot of the Mewgenics breeding UI with hidden recessive genes revealed by the Data Visualizer mod',
    sourceUrl: 'https://www.nexusmods.com/mewgenics/mods/1',
    isNow: false,
    seo: {
      title: 'Mewgenics Data Visualizer Mod - Reveal Hidden Stats & Genetics',
      description: 'Stop guessing your breeding outcomes. The Data Visualizer mod for Mewgenics provides raw data for genetics, mutations, and combat math.',
      keywords: ['mewgenics data visualizer', 'mewgenics hidden genes', 'mewgenics mutation rates', 'mewgenics breeding helper', 'mewtator mods download'],
    },
    detailsHtml: `
      <p>In the vanilla version of <strong>Mewgenics</strong>, breeding often feels like an expensive shot in the dark. While the game provides flavor text to hint at a cat's potential, much of the critical data—like recessive genes and exact mutation math—remains hidden. The <strong>Mewgenics Data Visualizer</strong> changes this by providing a clean, data-rich overlay that pulls hidden variables directly into your UI.</p>
  
      <h2>Why This Mod is Essential</h2>
      <p>This modification does not alter game balance or grant free items. Instead, it functions as an <strong>Information Overhaul</strong>. It is designed for min-maxers who want to understand the complex RNG (Random Number Generation) behind every kitten born and every tactical decision made in the field.</p>
  
      <h3>1. Comprehensive Genetics Dashboard</h3>
      <p>Every cat in Mewgenics carries a complex genetic string. This mod adds a "Genetics" tab to the cat profile, revealing:</p>
      <ul>
        <li><strong>Dominant Genes:</strong> The traits currently active and visible.</li>
        <li><strong>Recessive 1 & 2:</strong> The hidden traits that have a percentage chance to appear in future generations. This is vital for tracking rare mutations like "Bioluminescence" or "Elasticity."</li>
        <li><strong>Inbreeding Coefficient:</strong> A precise percentage showing how "pure" (or dangerously inbred) a bloodline is, helping you avoid accidental defects.</li>
      </ul>
  
      <h3>2. Breeding Forecast & Mutation Math</h3>
      <p>When you place two cats in the breeding room, a new "Forecast" panel appears. It calculates the potential outcomes of the union before you commit resources:</p>
      <ul>
        <li><strong>Mutation Probability:</strong> Shows the exact % boost provided by your house furniture (Appeal/Stimulation) and current items.</li>
        <li><strong>Stat Ranges:</strong> Displays the possible Min/Max spreads for Health, Damage, and Luck in the next litter.</li>
      </ul>
  
      <h3>3. Combat Math Transparency</h3>
      <p>Combat tooltips in the base game are often vague (e.g., "Deals high damage"). This mod rewrites them to show raw calculations. You will see <em>"14 Physical Damage (10 Base + 0.4x Strength Scaling)"</em>. It also provides accurate range indicators for complex boss abilities, such as those used by <strong>The Throbbing King</strong> or <strong>Pyrophina</strong>.</p>
  
      <h2>Download and Installation</h2>
      <p>To use the Data Visualizer, you must have the <strong>Mewtator</strong> framework installed. You can download the latest version of the mod from the community repository below:</p>
  
      <h2>Technical Notes</h2>
      <ul>
        <li><strong>Achievement Status:</strong> Using any script-based mod like this will flag your current save and disable Steam Achievements.</li>
        <li><strong>Save Safety:</strong> This mod only reads data and does not modify your save file. It is safe to toggle on and off between game sessions.</li>
      </ul>
  
      <p>Looking for more ways to customize your cattery? Browse our full <a href="/mods">Mewgenics Mod Directory</a> for more QoL tools, UI tweaks, and community creations!</p>
    `,
  },

  {
    id: 2,
    slug: 'chronos-save-manager',
    title: 'Chronos Save Manager: Anti-Steven Protection & Save Backup Tool',
    description: 'Protect your legendary bloodlines from permanent death. Chronos Save Manager automates backups and allows you to bypass the "Steven" penalty in Mewgenics.',
    publishDate: '2026-03-07',
    imageUrl: '/images/mods/mod-02.webp', 
    imageAlt: 'Chronos Save Manager interface for Mewgenics showing a list of timestamped save backups',
    sourceUrl: 'https://github.com/mewgenics-community/chronos-save-manager/releases',
    isNow: false,
    seo: {
      title: 'Mewgenics Chronos Save Manager - Anti-Death & Save Scum Tool',
      description: 'Never lose a cat again. The Chronos Save Manager for Mewgenics creates automatic backups to help you bypass Steven and recover from bad RNG.',
      keywords: ['mewgenics save manager', 'mewgenics anti steven mod', 'mewgenics save scumming', 'mewgenics backup tool', 'mewgenics permadeath fix'],
    },
    detailsHtml: `
      <p>In the unforgiving world of <strong>Mewgenics</strong>, a single misclick or a streak of bad RNG in a boss fight can end a genetic lineage you have spent dozens of hours perfecting. While Edmund McMillen designed the game to be a punishing permadeath experience, the <strong>Chronos Save Manager</strong> provides a much-needed safety net for players who want to experiment with high-risk strategies.</p>
  
      <h2>Beating the "Steven" Penalty</h2>
      <p>Mewgenics includes a notorious anti-cheat mechanic: if you force-close the game (ALT+F4) during a battle to avoid a cat's death, a terrifying entity named <strong>Steven</strong> will appear in your next session to curse your cattery and permanently delete the cat that died. Chronos Save Manager solves this by managing your save files externally, allowing you to restore a backup from before the death occurred, effectively "rewinding time" without triggering the Steven flag.</p>
  
      <h2>Mddain Features</h2>
      <p>Chronos is a standalone utility that runs alongside your game. It provides specialized tools for managing your cat archives and backup timelines.</p>
  
      <h3>1. Automated Snapshot System</h3>
      <p>The manager can be configured to take a "Snapshot" of your save every time you enter a new room in a dungeon or whenever a new kitten is born. If a disaster occurs, you can browse a list of timestamped backups and restore the exact state you want.</p>
  
      <h3>2. "Infinite" Cattery Slots</h3>
      <p>By default, Mewgenics limits your active saves. Chronos allows you to archive entire catteries into separate profiles. This is perfect for players who want to maintain a "Main" bloodline while starting a separate, high-mutation "Science" run on the side.</p>
  
      <h3>3. Data Corruption Protection</h3>
      <p>Because Mewgenics saves frequently, a power outage or a game crash can sometimes lead to a corrupted save file. Chronos maintains a rotating library of your last 50 save states, ensuring you never lose more than a few minutes of progress due to technical errors.</p>
  
      <h2>Download and Setup</h2>
      <p>This is an external application and does not require the Mewtator framework, though it works perfectly alongside it. Simply run the executable and point it to your Steam save folder (typically located in AppData/LocalLow).</p>
      
      <h2>Expert Advice</h2>
      <ul>
        <li><strong>Achievement Safety:</strong> Since this tool manages files externally and does not inject code into the game process, it is currently the safest way to "save scum" without disabling Steam Achievements.</li>
        <li><strong>Manual Backups:</strong> We recommend taking a manual snapshot before entering high-tier areas like <strong>The Infinite</strong> or the <strong>Throbbing Domain</strong>.</li>
      </ul>
  
      <p>Looking for more ways to customize your experience? Head over to our full <a href="/mods">Mewgenics Mod Directory</a> to explore more UI tweaks and gameplay enhancements!</p>
    `,
  },

  {
    id: 3,
    slug: 'enhanced-battle-tooltips',
    title: 'Enhanced Battle Tooltips: Predict Enemy Moves & Damage',
    description: 'Never miscalculate a turn again. This Mewgenics mod overlays enemy attack ranges, cooldowns, and precise status effect durations directly onto the battlefield UI.',
    publishDate: '2026-03-08',
    imageUrl: '/images/mods/mod-03.webp', 
    imageAlt: 'Mewgenics battle screen showing highlighted enemy threat zones and detailed status effect countdowns',
    sourceUrl: 'https://www.nexusmods.com/mewgenics/mods/3',
    isNow: false,
    seo: {
      title: 'Mewgenics Enhanced Battle Tooltips Mod - Combat UI Overhaul',
      description: 'Master the tactical grid in Mewgenics. Download the Enhanced Battle Tooltips mod to see enemy range, intent, and hidden combat math.',
      keywords: ['mewgenics battle mod', 'mewgenics enemy range mod', 'mewgenics combat tooltips', 'mewgenics boss mechanics helper', 'mewtator ui mods'],
    },
    detailsHtml: `
      <p>Success in <strong>Mewgenics</strong>' grid-based combat depends on positioning. However, the vanilla UI often leaves players guessing about an enemy's exact reach or when a lethal debuff will expire. The <strong>Enhanced Battle Tooltips</strong> mod is a comprehensive UI overhaul that provides the tactical clarity needed for high-stakes encounters in Act 2 and beyond.</p>
  
      <h2>Strategic Combat Intelligence</h2>
      <p>This mod doesn't play the game for you, but it gives you the data that experienced players often have to memorize or look up on a wiki. It integrates seamlessly into the existing art style while adding layers of critical information.</p>
  
      <h3>1. Dynamic Threat Zones</h3>
      <p>When you select an enemy or hover over their portrait, the mod highlights their <strong>Maximum Attack Range</strong> on the grid. This includes multi-tile attacks and "cleave" patterns, helping you position your glass-cannon cats just outside the danger zone. It is especially useful for bosses like <strong>The Throbbing King</strong>, whose "Orders" can be difficult to visualize.</p>
  
      <h3>2. Intent & Cooldown Tracking</h3>
      <p>Ever wondered if a boss is about to use their ultimate move next turn? This mod adds small icons above enemy sprites to indicate:</p>
      <ul>
        <li><strong>Skill Cooldowns:</strong> See exactly how many rounds are left before an elite enemy can use their signature ability again.</li>
        <li><strong>Mana/Energy Levels:</strong> For casters, this reveals if they have enough resources to cast high-tier spells on their next turn.</li>
      </ul>
  
      <h3>3. Detailed Status Effect Overlays</h3>
      <p>Vanilla tooltips for "Burn," "Wet," or "Entangled" can be vague. This mod adds a numerical countdown to every status icon on the field. You will know exactly when a <strong>Wet</strong> status will wear off, allowing you to time your lightning or ice attacks with 100% certainty.</p>
  
      <h2>Installation and Compatibility</h2>
      <p>This is a script-based mod that requires the <strong>Mewtator</strong> framework to function correctly. Ensure your loader is up to date before installing.</p>
      
      <h2>Compatibility Notes</h2>
      <ul>
        <li><strong>Mod Conflicts:</strong> Compatible with <em>Data Visualizer</em>. However, it may conflict with other mods that heavily alter the combat UI or camera angles.</li>
        <li><strong>Steam Achievements:</strong> Like most Mewtator-dependent mods, enabling this will disable official Steam Achievements for your current run.</li>
        <li><strong>Controller Support:</strong> Fully optimized for both Mouse/Keyboard and Steam Deck controller inputs.</li>
      </ul>
  
      <p>Ready to master the battlefield? Check out our full <a href="/mods">Mewgenics Mod Directory</a> for more gameplay enhancements and utility tools!</p>
    `,
  },

  {
    id: 4,
    slug: 'tink-automation',
    title: "Tink's Bulk Exchange: Fast Kitten Hand-ins & UI Tweak",
    description: 'Skip the repetitive dialogue. This mod adds a "Bulk Give" button to Tink\'s interface, allowing you to hand over all eligible kittens at once and view reward progress instantly.',
    publishDate: '2026-03-09',
    imageUrl: '/images/mods/mod-04.webp', 
    imageAlt: 'Tink\'s NPC interface in Mewgenics showing the new Bulk Exchange button and a level progress bar',
    sourceUrl: 'https://www.nexusmods.com/mewgenics/mods/4',
    isNow: false,
    seo: {
      title: "Mewgenics Tink Automation Mod - Fast Kitten Exchange",
      description: "Tired of the grind? Use the Tink's Bulk Exchange mod for Mewgenics to speed up kitten hand-ins and track your NPC rewards efficiently.",
      keywords: ['mewgenics tink mod', 'mewgenics kitten exchange', 'mewgenics fast rewards', 'mewgenics npc automation', 'mewgenics tink rewards list'],
    },
    detailsHtml: `
      <p>As any dedicated breeder knows, <strong>Ferguson Rodney Tinkles (Tink)</strong> is one of the most important NPCs in <strong>Mewgenics</strong>. However, his requirement for 10 Kittens per level—combined with his eccentric, unskippable dialogue—can make the hand-in process feel like a chore during the mid-game. The <strong>Tink's Bulk Exchange</strong> mod streamlines this interaction, letting you focus on the breeding and combat you love.</p>
  
      <h2>Streamlining the Cattery Grind</h2>
      <p>This mod is a "Quality of Life" essential that doesn't change the game's economy or balance. It simply respects the player's time by adding modern UI features to one of the game's oldest NPCs.</p>
  
      <h3>1. The "Give All" Button</h3>
      <p>A new button is added to Tink's interaction menu. Clicking this will automatically hand over every 1-day-old kitten in your current inventory that meets Tink's criteria. It filters out any kittens you have "Favorited" or marked for keep, ensuring you never accidentally give away a high-stat project.</p>
  
      <h3>2. Level & Reward Progress Bar</h3>
      <p>In the vanilla game, you often have to check the wiki to know how many more cats you need for the next unlock (like the <strong>Gaydar</strong> or <strong>Lineage Indicator</strong>). This mod adds a subtle progress bar to Tink's UI, showing exactly how many cats are left until your next milestone and what the reward will be.</p>
  
      <h3>3. Skip Interaction Fluff</h3>
      <p>Tink's "eccentric" personality is part of the game's charm, but after 50 hours, his comments on your "uggos" can get repetitive. This mod includes an optional toggle to skip his introductory and exit dialogue, cutting the interaction time down to seconds.</p>
  
      <h2>Download and Technical Details</h2>
      <p>This mod requires the <strong>Mewtator</strong> framework. It is safe to use on any save file and can be toggled on/off at any time without risking save corruption.</p>
      
      <h2>Compatibility Notes</h2>
      <ul>
        <li><strong>Mod Conflicts:</strong> Compatible with all major UI mods including <em>Data Visualizer</em> and <em>Enhanced Battle Tooltips</em>.</li>
        <li><strong>Steam Achievements:</strong> Using this script-based modification will disable Steam Achievements for the current game session.</li>
        <li><strong>Game Version:</strong> Updated for the latest Mewgenics build (v1.0.5).</li>
      </ul>
  
      <p>Looking for more ways to optimize your cattery? Browse our full <a href="/mods">Mewgenics Mod Directory</a> for more NPC tweaks, genetic tools, and combat enhancements!</p>
    `,
  },

  {
    id: 5,
    slug: 'deja-vu-nerf',
    title: 'Deja Vu Nerf: Softer Disorder Effects for Save-Scum Runs',
    description:
      'Reworks Deja Vu and Severe Deja Vu to be less punishing: a flat stat penalty instead of random action cancels, and severe form blocks healing instead of handing control to Steven.',
    publishDate: '2026-03-30',
    imageUrl: '/images/mods/mod-05.png',
    imageAlt: 'Nexus Mods thumbnail for the Deja Vu Nerf Mewgenics gameplay mod',
    sourceUrl: 'https://www.nexusmods.com/mewgenics/mods/229',
    author: 'YourMomWasTaken',
    sourceLabel: 'Nexus Mods',
    isNow: false,
    seo: {
      title: 'Mewgenics Deja Vu Nerf Mod - Disorder Rebalance (Nexus 229)',
      description:
        'Download Deja Vu Nerf for Mewgenics: replaces harsh vanilla Deja Vu RNG with -1 all stats, and Severe Deja Vu with permanent-damage (no healing) instead of Steven. Requires Mewtator.',
      keywords: [
        'mewgenics deja vu mod',
        'mewgenics severe deja vu',
        'mewgenics disorder nerf',
        'mewgenics save scum mod',
        'mewtator gameplay mod',
        'nexus mewgenics 229',
      ],
    },
    detailsHtml: `
      <p>The vanilla <strong>Deja Vu</strong> disorders in <strong>Mewgenics</strong> can feel brutally unfair: cancelled actions and, at severe levels, losing control to <strong>Steven</strong>. <strong>Deja Vu Nerf</strong> by <strong>YourMomWasTaken</strong> is a gameplay rebalance that keeps tension high without the same “game over your run” spikes—positioning save-scumming as a deliberate tactic rather than something other mods simply delete.</p>

      <h2>What Changes</h2>
      <p>The author reworks both stages of the disorder so runs stay challenging but more readable:</p>
      <ul>
        <li><strong>Deja Vu:</strong> Now applies <strong>-1 to all stats</strong> instead of a <strong>10% chance to cancel actions</strong>.</li>
        <li><strong>Severe Deja Vu:</strong> Now <strong>disables all forms of healing</strong>, so damage is permanent—replacing the vanilla line where <strong>Steven has control of you</strong>.</li>
      </ul>

      <h2>Design Intent</h2>
      <p>Unlike many community tweaks that remove Steven outright, this mod tries to preserve a risk/reward loop around risky play: you still pay a price for stacking disorders, but the penalty is systemic (stats and sustain) rather than sudden hard fails.</p>

      <h2>Requirements &amp; Install</h2>
      <p>This is a <strong>Mewtator</strong> script/content mod. Extract the folder into your <strong>Mewtator &gt; mods</strong> directory. The author notes it is <strong>incompatible with other mods that edit the DejaVu disorder</strong>.</p>
      <p>Technically, the mod overwrites the <code>DejaVu</code> entry in <code>data/passives/disorders.gon</code> (as packaged on Nexus).</p>

      <h2>Compatibility &amp; Achievements</h2>
      <ul>
        <li><strong>Mewtator required:</strong> Listed as a Nexus dependency on the same loader family as other script mods.</li>
        <li><strong>Achievements:</strong> Like most injected mods, expect Steam achievements to be affected while mods are active—check current game/mod docs for your build.</li>
      </ul>

      <p>Grab the latest file from <a href="https://www.nexusmods.com/mewgenics/mods/229" target="_blank" rel="noopener noreferrer">Nexus Mods (mod 229)</a> or browse our full <a href="/mods">Mewgenics Mod Directory</a> for more gameplay tweaks.</p>
    `,
  },


]
