import type { GangTopic, ImageSlot } from '../types'
import { img } from './image'

export const gangImage: ImageSlot = {
  src: img('gang/campfire.jpg'), alt: 'Outlaws gathered around a campfire at night',
}

export const gangTopics: GangTopic[] = [
  { id: 'identity', label: 'Identity', title: 'A family of the unwanted', text: [
    'The Van der Linde gang is part crew, part congregation. Thieves, runaways, former slaves and veterans share a camp and a creed: take from those who have too much, answer to nobody.',
    'The gang is as much a promise as a roster. Its members stay because Dutch gave them a story about themselves that the rest of the country would not.',
  ] },
  { id: 'history', label: 'History', title: 'Twenty years on the run', text: [
    'Dutch and Hosea began with small cons in the 1870s and gathered strays along the way. Arthur and John grew up inside that circle, and for years the gang stayed one step ahead of a spreading law.',
    'By 1899 the margin is gone. Every robbery is bigger, every escape narrower, and old victories have turned into debts that are coming due.',
  ] },
  { id: 'philosophy', label: 'Philosophy', title: 'Freedom, with conditions', text: [
    'Dutch preaches against civilisation: banks, railroads and governments that crush the individual. It is a persuasive creed and, for a while, a generous one.',
    'But the same words can justify very different things. As pressure mounts, the line between resisting the system and simply taking what you want blurs for everyone.',
  ] },
  { id: 'camp', label: 'Camp life', title: 'Fires, songs and chores', text: [
    'Camp is the gang’s heart: stew on the fire, a guitar after dark, arguments over money and washing. Members contribute what they can, and the mood of the camp tells you how the gang is really doing.',
    'It moves often, from mountain hollows to riverbanks, but the rituals stay the same. Those quiet evenings are where the characters become people.',
  ] },
  { id: 'relationships', label: 'Relationships', title: 'Bonds under strain', text: [
    'Arthur treats Dutch as a father and John as a stubborn younger brother. Hosea plays peacemaker between them. Sadie, Charles and others form alliances of their own, quieter and often stronger.',
    'As the money runs out and trust frays, each bond is tested: who is loyal to Dutch, who is loyal to each other, and who is loyal to what the gang once stood for.',
  ] },
]
