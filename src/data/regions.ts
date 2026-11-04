import type { Region } from '../types'
import { img } from './image'

const slot = (id: string, alt: string, scene: Region['image']['scene'], tone: Region['image']['tone'], seed: number) => ({
  src: img(`regions/${id}.jpg`), alt, scene, tone, seed,
})

export const regions: Region[] = [
  {
    id: 'ambarino', name: 'Ambarino', tagline: 'The white north',
    description: 'A cold wilderness of pine forests, glaciers and high passes. Settlements are few, the weather is merciless, and the silence is only broken by wolves and the crack of ice.',
    terrain: 'Mountains, forests, tundra', climate: 'Alpine, heavy snow', places: ['Colter', 'Grizzlies', 'Cumberland Forest'],
    shape: '0,0 250,0 270,60 190,95 90,85 0,70', label: { x: 120, y: 42 },
    image: slot('ambarino', 'Snow-covered mountain ridges', 'ridges', 'snow', 21),
  },
  {
    id: 'new-hanover', name: 'New Hanover', tagline: 'Heartland of the frontier',
    description: 'Rolling grassland, railroad towns and the first sign of heavy industry. Cattle ranches share the horizon with smokestacks, and the law arrives by train.',
    terrain: 'Plains, hills, rivers', climate: 'Temperate', places: ['Valentine', 'Heartlands', 'Annesburg'],
    shape: '250,0 400,0 400,130 300,150 230,140 190,95 270,60', label: { x: 320, y: 70 },
    image: slot('new-hanover', 'Open prairie at dawn', 'plains', 'dawn', 22),
  },
  {
    id: 'west-elizabeth', name: 'West Elizabeth', tagline: 'Where the country opens',
    description: 'Wide valleys, tall pines and the big river that feeds Blackwater. Wealth and wilderness live side by side, and trouble finds you in either.',
    terrain: 'Valleys, forest, lakes', climate: 'Mild, misty mornings', places: ['Blackwater', 'Big Valley', 'Great Plains'],
    shape: '0,70 90,85 190,95 230,140 210,200 120,215 0,190', label: { x: 115, y: 150 },
    image: slot('west-elizabeth', 'Misty pine forest in a valley', 'forest', 'noon', 23),
  },
  {
    id: 'lemoyne', name: 'Lemoyne', tagline: 'The humid south',
    description: 'Bayous, cypress trees and old money. Plantation houses stand over a land of heat, insects and long memory, and the city of Saint Denis hums with trade and trouble.',
    terrain: 'Swamp, bayou, farmland', climate: 'Hot, humid', places: ['Saint Denis', 'Bayou Nwa', 'Rhodes'],
    shape: '230,140 300,150 400,130 400,300 260,300 240,230 210,200', label: { x: 320, y: 220 },
    image: slot('lemoyne', 'Misty cypress swamp', 'swamp', 'swamp', 24),
  },
  {
    id: 'new-austin', name: 'New Austin', tagline: 'Dust, mesas and sun',
    description: 'A dry southwestern country of canyons, cacti and half-forgotten border towns. It opens to the player only late in the story, and feels like a place the century has already left behind.',
    terrain: 'Desert, mesas, canyons', climate: 'Arid, scorching days', places: ['Armadillo', 'Tumbleweed', 'Gaptooth Ridge'],
    shape: '0,190 120,215 210,200 240,230 260,300 0,300', label: { x: 120, y: 262 },
    image: slot('new-austin', 'Desert mesa at sunset', 'desert', 'desert', 25),
  },
]
