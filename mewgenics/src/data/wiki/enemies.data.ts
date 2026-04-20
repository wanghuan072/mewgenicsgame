/**
 * Enemies — hierarchical data from https://mewgenics.wiki.gg/wiki/Enemies (CC BY-SA).
 * Shape: groups[] → chapters[] → optional areas[] → entries (enemy cards).
 * Optional fields on cards: description, enemyType, spawn, tags.
 * Regenerate: `npm run enemies:data`. Images: `npm run enemies:images` then regenerate.
 */
export default {
  "groups": [
    {
      "id": "summons",
      "title": "Summons",
      "chapters": [
        {
          "id": "summons-list",
          "title": "",
          "entries": [
            {
              "slug": "spiderling",
              "name": "Spiderling",
              "publishDate": "2026-04-20",
              "imageUrl": "/images/enemies/spiderling.png",
              "imageAlt": "Mewgenics enemy Spiderling",
              "isPage": false,
              "detailsHtml": "",
              "seo": {},
              "enemyType": "Summon",
              "id": 1
            },
            {
              "slug": "flea",
              "name": "Flea",
              "publishDate": "2026-04-20",
              "imageUrl": "/images/enemies/flea.png",
              "imageAlt": "Mewgenics enemy Flea",
              "isPage": false,
              "detailsHtml": "",
              "seo": {},
              "enemyType": "Summon",
              "id": 2
            },
            {
              "slug": "maggot",
              "name": "Maggot",
              "publishDate": "2026-04-20",
              "imageUrl": "/images/enemies/maggot.png",
              "imageAlt": "Mewgenics enemy Maggot",
              "isPage": false,
              "detailsHtml": "",
              "seo": {},
              "enemyType": "Summon",
              "id": 3
            },
            {
              "slug": "rot-fly",
              "name": "Rot Fly",
              "publishDate": "2026-04-20",
              "imageUrl": "/images/enemies/rot-fly.png",
              "imageAlt": "Mewgenics enemy Rot Fly",
              "isPage": false,
              "detailsHtml": "",
              "seo": {},
              "enemyType": "Summon",
              "id": 4
            },
            {
              "slug": "steel-fly",
              "name": "Steel Fly",
              "publishDate": "2026-04-20",
              "imageUrl": "/images/enemies/steel-fly.png",
              "imageAlt": "Mewgenics enemy Steel Fly",
              "isPage": false,
              "detailsHtml": "",
              "seo": {},
              "enemyType": "Summon",
              "id": 5
            },
            {
              "slug": "tiny-tumor",
              "name": "Tiny Tumor",
              "publishDate": "2026-04-20",
              "imageUrl": "/images/enemies/tiny-tumor.png",
              "imageAlt": "Mewgenics enemy Tiny Tumor",
              "isPage": false,
              "detailsHtml": "",
              "seo": {},
              "enemyType": "Summon",
              "id": 6
            },
            {
              "slug": "bounty-hunter-enemy",
              "name": "Bounty Hunter",
              "publishDate": "2026-04-20",
              "imageUrl": "/images/enemies/bounty-hunter-enemy.png",
              "imageAlt": "Mewgenics enemy Bounty Hunter",
              "isPage": false,
              "detailsHtml": "",
              "seo": {},
              "enemyType": "Summon",
              "id": 7
            },
            {
              "slug": "pooter",
              "name": "Pooter",
              "publishDate": "2026-04-20",
              "imageUrl": "/images/enemies/pooter.png",
              "imageAlt": "Mewgenics enemy Pooter",
              "isPage": false,
              "detailsHtml": "",
              "seo": {},
              "enemyType": "Summon",
              "id": 8
            },
            {
              "slug": "tom-tom",
              "name": "Tom Tom",
              "publishDate": "2026-04-20",
              "imageUrl": "/images/enemies/tom-tom.png",
              "imageAlt": "Mewgenics enemy Tom Tom",
              "isPage": false,
              "detailsHtml": "",
              "seo": {},
              "enemyType": "Summon",
              "id": 9
            },
            {
              "slug": "pet-boulder",
              "name": "Pet Boulder",
              "publishDate": "2026-04-20",
              "imageUrl": "/images/enemies/pet-boulder.png",
              "imageAlt": "Mewgenics enemy Pet Boulder",
              "isPage": false,
              "detailsHtml": "",
              "seo": {},
              "enemyType": "Summon",
              "id": 10
            },
            {
              "slug": "pet-rock-summon",
              "name": "Pet Rock",
              "publishDate": "2026-04-20",
              "imageUrl": "/images/enemies/pet-rock-summon.png",
              "imageAlt": "Mewgenics enemy Pet Rock",
              "isPage": false,
              "detailsHtml": "",
              "seo": {},
              "enemyType": "Summon",
              "id": 11
            },
            {
              "slug": "leech-familiar",
              "name": "Leech",
              "publishDate": "2026-04-20",
              "imageUrl": "/images/enemies/leech-familiar.svg",
              "imageAlt": "Mewgenics enemy Leech",
              "isPage": false,
              "detailsHtml": "",
              "seo": {},
              "enemyType": "Summon",
              "id": 12
            },
            {
              "slug": "bear",
              "name": "Bear",
              "publishDate": "2026-04-20",
              "imageUrl": "/images/enemies/bear.png",
              "imageAlt": "Mewgenics enemy Bear",
              "isPage": false,
              "detailsHtml": "",
              "seo": {},
              "enemyType": "Summon",
              "id": 13
            },
            {
              "slug": "caterpillar",
              "name": "Caterpillar",
              "publishDate": "2026-04-20",
              "imageUrl": "/images/enemies/caterpillar.png",
              "imageAlt": "Mewgenics enemy Caterpillar",
              "isPage": false,
              "detailsHtml": "",
              "seo": {},
              "enemyType": "Summon",
              "id": 14
            },
            {
              "slug": "druids-crow",
              "name": "Druid's Crow",
              "publishDate": "2026-04-20",
              "imageUrl": "/images/enemies/druids-crow.svg",
              "imageAlt": "Mewgenics enemy Druid's Crow",
              "isPage": false,
              "detailsHtml": "",
              "seo": {},
              "enemyType": "Summon",
              "id": 15
            },
            {
              "slug": "frog",
              "name": "Frog",
              "publishDate": "2026-04-20",
              "imageUrl": "/images/enemies/frog.png",
              "imageAlt": "Mewgenics enemy Frog",
              "isPage": false,
              "detailsHtml": "",
              "seo": {},
              "enemyType": "Summon",
              "id": 16
            },
            {
              "slug": "snake",
              "name": "Snake",
              "publishDate": "2026-04-20",
              "imageUrl": "/images/enemies/snake.png",
              "imageAlt": "Mewgenics enemy Snake",
              "isPage": false,
              "detailsHtml": "",
              "seo": {},
              "enemyType": "Summon",
              "id": 17
            },
            {
              "slug": "squirrel",
              "name": "Squirrel",
              "publishDate": "2026-04-20",
              "imageUrl": "/images/enemies/squirrel.png",
              "imageAlt": "Mewgenics enemy Squirrel",
              "isPage": false,
              "detailsHtml": "",
              "seo": {},
              "enemyType": "Summon",
              "id": 18
            },
            {
              "slug": "turtle",
              "name": "Turtle",
              "publishDate": "2026-04-20",
              "imageUrl": "/images/enemies/turtle.png",
              "imageAlt": "Mewgenics enemy Turtle",
              "isPage": false,
              "detailsHtml": "",
              "seo": {},
              "enemyType": "Summon",
              "id": 19
            },
            {
              "slug": "bombchu-familiar",
              "name": "Bombchu",
              "publishDate": "2026-04-20",
              "imageUrl": "/images/enemies/bombchu-familiar.png",
              "imageAlt": "Mewgenics enemy Bombchu",
              "isPage": false,
              "detailsHtml": "",
              "seo": {},
              "enemyType": "Summon",
              "id": 20
            },
            {
              "slug": "mech-suit-familiar",
              "name": "Mech Suit",
              "publishDate": "2026-04-20",
              "imageUrl": "/images/enemies/mech-suit-familiar.png",
              "imageAlt": "Mewgenics enemy Mech Suit",
              "isPage": false,
              "detailsHtml": "",
              "seo": {},
              "enemyType": "Summon",
              "id": 21
            },
            {
              "slug": "catbot-familiar",
              "name": "Catbot",
              "publishDate": "2026-04-20",
              "imageUrl": "/images/enemies/catbot-familiar.png",
              "imageAlt": "Mewgenics enemy Catbot",
              "isPage": false,
              "detailsHtml": "",
              "seo": {},
              "enemyType": "Summon",
              "id": 22
            },
            {
              "slug": "turret",
              "name": "Turret",
              "publishDate": "2026-04-20",
              "imageUrl": "/images/enemies/turret.png",
              "imageAlt": "Mewgenics enemy Turret",
              "isPage": false,
              "detailsHtml": "",
              "seo": {},
              "enemyType": "Summon",
              "id": 23
            },
            {
              "slug": "nurse-bot-familiar",
              "name": "Nurse Bot",
              "publishDate": "2026-04-20",
              "imageUrl": "/images/enemies/enemy-placeholder.svg",
              "imageAlt": "Mewgenics enemy Nurse Bot",
              "isPage": false,
              "detailsHtml": "",
              "seo": {},
              "enemyType": "Summon",
              "id": 24
            },
            {
              "slug": "rubber-fist-bot",
              "name": "Rubber Fist Bot",
              "publishDate": "2026-04-20",
              "imageUrl": "/images/enemies/enemy-placeholder.svg",
              "imageAlt": "Mewgenics enemy Rubber Fist Bot",
              "isPage": false,
              "detailsHtml": "",
              "seo": {},
              "enemyType": "Summon",
              "id": 25
            },
            {
              "slug": "robo-vac-familiar",
              "name": "Robo-Vac",
              "publishDate": "2026-04-20",
              "imageUrl": "/images/enemies/robo-vac-familiar.png",
              "imageAlt": "Mewgenics enemy Robo-Vac",
              "isPage": false,
              "detailsHtml": "",
              "seo": {},
              "enemyType": "Summon",
              "id": 26
            }
          ]
        }
      ]
    },
    {
      "id": "events",
      "title": "Events",
      "chapters": [
        {
          "id": "events-weather",
          "title": "Event / weather pools",
          "entries": [
            {
              "slug": "bounty-hunter-event",
              "name": "Bounty Hunter (Event)",
              "publishDate": "2026-04-20",
              "imageUrl": "/images/enemies/bounty-hunter-event.png",
              "imageAlt": "Mewgenics enemy Bounty Hunter (Event)",
              "isPage": false,
              "detailsHtml": "",
              "seo": {},
              "enemyType": "Event",
              "id": 27
            },
            {
              "slug": "death-event",
              "name": "Death!",
              "publishDate": "2026-04-20",
              "imageUrl": "/images/enemies/enemy-placeholder.svg",
              "imageAlt": "Mewgenics enemy Death!",
              "isPage": false,
              "detailsHtml": "",
              "seo": {},
              "enemyType": "Event",
              "id": 28
            },
            {
              "slug": "twister",
              "name": "Twister",
              "publishDate": "2026-04-20",
              "imageUrl": "/images/enemies/twister.png",
              "imageAlt": "Mewgenics enemy Twister",
              "isPage": false,
              "detailsHtml": "",
              "seo": {},
              "enemyType": "Event",
              "id": 29
            }
          ]
        }
      ]
    },
    {
      "id": "all",
      "title": "All",
      "chapters": [
        {
          "id": "bonus-birds",
          "title": "Bonus birds",
          "entries": [
            {
              "slug": "black-bird",
              "name": "Black Bird",
              "publishDate": "2026-04-20",
              "imageUrl": "/images/enemies/black-bird.png",
              "imageAlt": "Mewgenics enemy Black Bird",
              "isPage": false,
              "detailsHtml": "",
              "seo": {},
              "enemyType": "Bonus bird",
              "tags": [
                "Small",
                "Common"
              ],
              "id": 30
            },
            {
              "slug": "dove",
              "name": "Dove",
              "publishDate": "2026-04-20",
              "imageUrl": "/images/enemies/dove.png",
              "imageAlt": "Mewgenics enemy Dove",
              "isPage": false,
              "detailsHtml": "",
              "seo": {},
              "enemyType": "Bonus bird",
              "tags": [
                "Small",
                "Uncommon"
              ],
              "id": 31
            },
            {
              "slug": "hummingbird",
              "name": "Hummingbird",
              "publishDate": "2026-04-20",
              "imageUrl": "/images/enemies/hummingbird.png",
              "imageAlt": "Mewgenics enemy Hummingbird",
              "isPage": false,
              "detailsHtml": "",
              "seo": {},
              "enemyType": "Bonus bird",
              "tags": [
                "Small",
                "Rare"
              ],
              "id": 32
            },
            {
              "slug": "cherub",
              "name": "Cherub",
              "publishDate": "2026-04-20",
              "imageUrl": "/images/enemies/cherub.png",
              "imageAlt": "Mewgenics enemy Cherub",
              "isPage": false,
              "detailsHtml": "",
              "seo": {},
              "enemyType": "Bonus bird",
              "tags": [
                "Small",
                "Ultra Rare"
              ],
              "id": 33
            },
            {
              "slug": "pigeon",
              "name": "Pigeon",
              "publishDate": "2026-04-20",
              "imageUrl": "/images/enemies/pigeon.png",
              "imageAlt": "Mewgenics enemy Pigeon",
              "isPage": false,
              "detailsHtml": "",
              "seo": {},
              "enemyType": "Bonus bird",
              "tags": [
                "Medium",
                "Common"
              ],
              "id": 34
            },
            {
              "slug": "seagull",
              "name": "Seagull",
              "publishDate": "2026-04-20",
              "imageUrl": "/images/enemies/seagull.png",
              "imageAlt": "Mewgenics enemy Seagull",
              "isPage": false,
              "detailsHtml": "",
              "seo": {},
              "enemyType": "Bonus bird",
              "tags": [
                "Medium",
                "Uncommon"
              ],
              "id": 35
            },
            {
              "slug": "raven",
              "name": "Raven",
              "publishDate": "2026-04-20",
              "imageUrl": "/images/enemies/raven.png",
              "imageAlt": "Mewgenics enemy Raven",
              "isPage": false,
              "detailsHtml": "",
              "seo": {},
              "enemyType": "Bonus bird",
              "tags": [
                "Medium",
                "Rare"
              ],
              "id": 36
            },
            {
              "slug": "mutant",
              "name": "Mutant",
              "publishDate": "2026-04-20",
              "imageUrl": "/images/enemies/mutant.png",
              "imageAlt": "Mewgenics enemy Mutant",
              "isPage": false,
              "detailsHtml": "",
              "seo": {},
              "enemyType": "Bonus bird",
              "tags": [
                "Medium",
                "Ultra Rare"
              ],
              "id": 37
            },
            {
              "slug": "chicken",
              "name": "Chicken",
              "publishDate": "2026-04-20",
              "imageUrl": "/images/enemies/chicken.png",
              "imageAlt": "Mewgenics enemy Chicken",
              "isPage": false,
              "detailsHtml": "",
              "seo": {},
              "enemyType": "Bonus bird",
              "tags": [
                "Large",
                "Common"
              ],
              "id": 38
            },
            {
              "slug": "turkey",
              "name": "Turkey",
              "publishDate": "2026-04-20",
              "imageUrl": "/images/enemies/turkey.png",
              "imageAlt": "Mewgenics enemy Turkey",
              "isPage": false,
              "detailsHtml": "",
              "seo": {},
              "enemyType": "Bonus bird",
              "tags": [
                "Large",
                "Uncommon"
              ],
              "id": 39
            },
            {
              "slug": "eagle",
              "name": "Eagle",
              "publishDate": "2026-04-20",
              "imageUrl": "/images/enemies/eagle.png",
              "imageAlt": "Mewgenics enemy Eagle",
              "isPage": false,
              "detailsHtml": "",
              "seo": {},
              "enemyType": "Bonus bird",
              "tags": [
                "Large",
                "Rare"
              ],
              "id": 40
            },
            {
              "slug": "harpy",
              "name": "Harpy",
              "publishDate": "2026-04-20",
              "imageUrl": "/images/enemies/harpy.png",
              "imageAlt": "Mewgenics enemy Harpy",
              "isPage": false,
              "detailsHtml": "",
              "seo": {},
              "enemyType": "Bonus bird",
              "tags": [
                "Large",
                "Ultra Rare"
              ],
              "id": 41
            }
          ]
        }
      ]
    },
    {
      "id": "act-1",
      "title": "Act 1",
      "actLabel": "Act 1",
      "chapters": [
        {
          "id": "act-1-ch-1",
          "title": "Chapter 1",
          "areas": [
            {
              "id": "act-1-ch-1-alley",
              "title": "Alley",
              "entries": [
                {
                  "slug": "alley-cat-caller",
                  "name": "Cat Caller",
                  "publishDate": "2026-04-20",
                  "imageUrl": "/images/enemies/alley-cat-caller.png",
                  "imageAlt": "Mewgenics enemy Cat Caller",
                  "isPage": false,
                  "detailsHtml": "",
                  "seo": {},
                  "enemyType": "Standard",
                  "id": 42
                },
                {
                  "slug": "alley-fly",
                  "name": "Fly",
                  "publishDate": "2026-04-20",
                  "imageUrl": "/images/enemies/alley-fly.png",
                  "imageAlt": "Mewgenics enemy Fly",
                  "isPage": false,
                  "detailsHtml": "",
                  "seo": {},
                  "enemyType": "Standard",
                  "id": 43
                },
                {
                  "slug": "alley-kitten",
                  "name": "Kitten",
                  "publishDate": "2026-04-20",
                  "imageUrl": "/images/enemies/alley-kitten.png",
                  "imageAlt": "Mewgenics enemy Kitten",
                  "isPage": false,
                  "detailsHtml": "",
                  "seo": {},
                  "enemyType": "Standard",
                  "id": 44
                },
                {
                  "slug": "alley-leaper",
                  "name": "Leaper",
                  "publishDate": "2026-04-20",
                  "imageUrl": "/images/enemies/alley-leaper.png",
                  "imageAlt": "Mewgenics enemy Leaper",
                  "isPage": false,
                  "detailsHtml": "",
                  "seo": {},
                  "enemyType": "Standard",
                  "id": 45
                },
                {
                  "slug": "alley-lil-rat",
                  "name": "Lil' Rat",
                  "publishDate": "2026-04-20",
                  "imageUrl": "/images/enemies/alley-lil-rat.png",
                  "imageAlt": "Mewgenics enemy Lil' Rat",
                  "isPage": false,
                  "detailsHtml": "",
                  "seo": {},
                  "enemyType": "Standard",
                  "id": 46
                },
                {
                  "slug": "alley-lumpy",
                  "name": "Lumpy",
                  "publishDate": "2026-04-20",
                  "imageUrl": "/images/enemies/alley-lumpy.png",
                  "imageAlt": "Mewgenics enemy Lumpy",
                  "isPage": false,
                  "detailsHtml": "",
                  "seo": {},
                  "enemyType": "Standard",
                  "id": 47
                },
                {
                  "slug": "alley-mangy",
                  "name": "Mangy",
                  "publishDate": "2026-04-20",
                  "imageUrl": "/images/enemies/alley-mangy.png",
                  "imageAlt": "Mewgenics enemy Mangy",
                  "isPage": false,
                  "detailsHtml": "",
                  "seo": {},
                  "enemyType": "Standard",
                  "id": 48
                },
                {
                  "slug": "alley-pinky",
                  "name": "Pinky",
                  "publishDate": "2026-04-20",
                  "imageUrl": "/images/enemies/alley-pinky.png",
                  "imageAlt": "Mewgenics enemy Pinky",
                  "isPage": false,
                  "detailsHtml": "",
                  "seo": {},
                  "enemyType": "Standard",
                  "id": 49
                },
                {
                  "slug": "alley-water-kitten",
                  "name": "Water Kitten",
                  "publishDate": "2026-04-20",
                  "imageUrl": "/images/enemies/alley-water-kitten.png",
                  "imageAlt": "Mewgenics enemy Water Kitten",
                  "isPage": false,
                  "detailsHtml": "",
                  "seo": {},
                  "enemyType": "Standard",
                  "id": 50
                }
              ]
            }
          ]
        },
        {
          "id": "act-1-ch-2",
          "title": "Chapter 2",
          "areas": [
            {
              "id": "act-1-ch-2-sewers",
              "title": "Sewers",
              "entries": [
                {
                  "slug": "sewers-baby-shark",
                  "name": "Baby Shark",
                  "publishDate": "2026-04-20",
                  "imageUrl": "/images/enemies/sewers-baby-shark.png",
                  "imageAlt": "Mewgenics enemy Baby Shark",
                  "isPage": false,
                  "detailsHtml": "",
                  "seo": {},
                  "enemyType": "Standard",
                  "id": 51
                },
                {
                  "slug": "sewers-boomer",
                  "name": "Boomer",
                  "publishDate": "2026-04-20",
                  "imageUrl": "/images/enemies/sewers-boomer.png",
                  "imageAlt": "Mewgenics enemy Boomer",
                  "isPage": false,
                  "detailsHtml": "",
                  "seo": {},
                  "enemyType": "Standard",
                  "id": 52
                },
                {
                  "slug": "sewers-daddy-shark",
                  "name": "Daddy Shark",
                  "publishDate": "2026-04-20",
                  "imageUrl": "/images/enemies/sewers-daddy-shark.png",
                  "imageAlt": "Mewgenics enemy Daddy Shark",
                  "isPage": false,
                  "detailsHtml": "",
                  "seo": {},
                  "enemyType": "Standard",
                  "id": 53
                },
                {
                  "slug": "sewers-dip",
                  "name": "Dip",
                  "publishDate": "2026-04-20",
                  "imageUrl": "/images/enemies/sewers-dip.png",
                  "imageAlt": "Mewgenics enemy Dip",
                  "isPage": false,
                  "detailsHtml": "",
                  "seo": {},
                  "enemyType": "Standard",
                  "id": 54
                },
                {
                  "slug": "sewers-fetus",
                  "name": "Fetus",
                  "publishDate": "2026-04-20",
                  "imageUrl": "/images/enemies/sewers-fetus.png",
                  "imageAlt": "Mewgenics enemy Fetus",
                  "isPage": false,
                  "detailsHtml": "",
                  "seo": {},
                  "enemyType": "Standard",
                  "id": 55
                },
                {
                  "slug": "sewers-floater",
                  "name": "Floater",
                  "publishDate": "2026-04-20",
                  "imageUrl": "/images/enemies/sewers-floater.png",
                  "imageAlt": "Mewgenics enemy Floater",
                  "isPage": false,
                  "detailsHtml": "",
                  "seo": {},
                  "enemyType": "Standard",
                  "id": 56
                },
                {
                  "slug": "sewers-sharky",
                  "name": "Sharky",
                  "publishDate": "2026-04-20",
                  "imageUrl": "/images/enemies/sewers-sharky.png",
                  "imageAlt": "Mewgenics enemy Sharky",
                  "isPage": false,
                  "detailsHtml": "",
                  "seo": {},
                  "enemyType": "Standard",
                  "id": 57
                },
                {
                  "slug": "sewers-water-leech",
                  "name": "Water Leech",
                  "publishDate": "2026-04-20",
                  "imageUrl": "/images/enemies/sewers-water-leech.png",
                  "imageAlt": "Mewgenics enemy Water Leech",
                  "isPage": false,
                  "detailsHtml": "",
                  "seo": {},
                  "enemyType": "Standard",
                  "id": 58
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}
