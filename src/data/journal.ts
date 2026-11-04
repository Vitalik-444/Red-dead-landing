import type { Article } from '../types'
import { img } from './image'

const s = (id: string, alt: string, scene: Article['image']['scene'], tone: Article['image']['tone'], seed: number) => ({
  src: img(`journal/${id}.jpg`), alt, scene, tone, seed,
})

export const articles: Article[] = [
  {
    id: 'camp-life', category: 'Camp life', title: 'What the fire remembers', span: 4, ratio: 'wide',
    excerpt: 'Evenings at camp are the quietest, most human hours of the journey.',
    body: [
      'When the day’s work is done, the gang gathers around the fire. Someone plays a guitar, someone burns the supper, someone is arguing about whose turn it is to fetch water. It is easy to forget these are wanted people.',
      'These small scenes are the reason the finale hurts. You learn each voice, each habit, each joke, and so you notice exactly which voices go missing as the story goes on.',
    ],
    image: s('camp-life', 'A camp fire with tents in the dark', 'camp', 'night', 41),
  },
  {
    id: 'wildlife', category: 'Wildlife & hunting', title: 'Reading tracks in the snow', span: 2, ratio: 'tall',
    excerpt: 'Every animal is a lesson in patience, and a chance to eat.',
    body: [
      'The frontier is crowded with life: deer in the pines, herons in the marsh, bison on the plains and predators that regard you as a meal. Hunting is part livelihood, part ritual.',
      'A clean shot with the right weapon preserves the pelt and the meat. Rush it, and you leave the best part of the animal in the dirt.',
    ],
    image: s('wildlife', 'A snowy forest ridge at dawn', 'forest', 'snow', 42),
  },
  {
    id: 'weapons', category: 'Weapons', title: 'Iron and powder', span: 2, ratio: 'tall',
    excerpt: 'Revolvers, repeaters and rifles: tools of the trade.',
    body: [
      'The era is one of transition. Cattleman revolvers sit beside repeaters and bolt-action rifles, each with its own weight and sound. Every gunfight leaves a little more residue on the barrel.',
      'Cleaning and maintaining your guns is a small act of care, and a reminder that these are objects of daily use, not trophies.',
    ],
    image: s('weapons', 'A saloon street at dusk', 'town', 'dusk', 43),
  },
  {
    id: 'horses', category: 'Horses', title: 'A rider and his animal', span: 2, ratio: 'square',
    excerpt: 'The bond between horse and rider is built mile by mile.',
    body: [
      'A horse is not a vehicle: it has moods, fears and favourites. Feed it, brush it, speak calmly, and in return it will carry you through gunfire.',
      'Long trips build a quiet understanding. Ask anyone who has lost a horse, and they will tell you what the animal was worth.',
    ],
    image: s('horses', 'A rider on a ridge at sunset', 'rider', 'dusk', 44),
  },
  {
    id: 'exploration', category: 'Exploration', title: 'Beyond the last road', span: 2, ratio: 'square',
    excerpt: 'The best stories begin where the map ends.',
    body: [
      'Follow a trail past the last fence and you find abandoned cabins, rusting wagons, lonely graves. Each one hints at a life that ended out here, long before you arrived.',
      'Exploration rewards patience. The land does not give itself away at first glance, only to those who return.',
    ],
    image: s('exploration', 'A canyon trail in the desert', 'desert', 'desert', 45),
  },
  {
    id: 'hidden-details', category: 'Hidden details', title: 'Small things worth noticing', span: 3, ratio: 'wide',
    excerpt: 'Letters, sketches, scraps of overheard talk: the margins matter.',
    body: [
      'Some of the best storytelling happens in the margins. A scribbled note in a journal, a half-finished letter, a mark on a map: none of it is required, and all of it adds weight.',
      'Look twice at the world. Behind the spectacle there is a second, quieter layer written for those who stop to read it.',
    ],
    image: s('hidden-details', 'A plains horizon at morning', 'plains', 'dawn', 46),
  },
  {
    id: 'encounters', category: 'Random encounters', title: 'Strangers on the road', span: 3, ratio: 'wide',
    excerpt: 'Every mile can bring a plea for help, or a trap.',
    body: [
      'A man calling from a ditch, a wagon with a broken wheel, a stranger with a story that doesn’t quite add up. Out here you decide quickly whether to help, trade, ignore or draw.',
      'These small unscripted moments make the world feel inhabited. They also tend to follow you home, in a way the main plot never could.',
    ],
    image: s('encounters', 'A bayou at dusk', 'swamp', 'swamp', 47),
  },
]
