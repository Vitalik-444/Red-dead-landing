import type { Character } from '../types'
import { img } from './image'

const slot = (id: string, name: string) => ({
  src: img(`characters/${id}.jpg`),
  alt: `Portrait of ${name}`,
})

export const characters: Character[] = [
  {
    id: 'arthur-morgan', number: '01', name: 'Arthur Morgan', role: 'Enforcer of the Van der Linde gang',
    bio: 'Taken in by Dutch and Hosea as a boy, Arthur is the gang’s most reliable hand: debt collector, hunter, the one who holds the camp together. He is a violent man who keeps a journal, and his choices decide what that violence is worth.',
    quote: 'A man can only be loyal so long before he must ask what it is he is loyal to.',
    image: slot('arthur-morgan', 'Arthur Morgan'),
  },
  {
    id: 'john-marston', number: '02', name: 'John Marston', role: 'Gunman, husband, reluctant father',
    bio: 'Raised by the gang, John carries the scars of a past he would rather forget. He wants a different life for his family, and the story asks whether the frontier will let anyone walk away from what made them.',
    quote: 'I never asked to be a part of this. But I never learned how to leave either.',
    image: slot('john-marston', 'John Marston'),
  },
  {
    id: 'dutch-van-der-linde', number: '03', name: 'Dutch van der Linde', role: 'Leader and founder of the gang',
    bio: 'Charismatic, well read and always sure of the next plan. Dutch speaks about freedom, loyalty and a world without masters — and slowly lets desperation turn those ideals into excuses.',
    quote: 'There is always another plan. There has to be. Otherwise, what are we?',
    image: slot('dutch-van-der-linde', 'Dutch van der Linde'),
  },
  {
    id: 'sadie-adler', number: '04', name: 'Sadie Adler', role: 'Widow turned outlaw',
    bio: 'Left with nothing after a brutal attack on her homestead, Sadie finds a place among the gang and, little by little, a purpose of her own. Hard, funny and stubborn, she grows into one of the country’s most formidable survivors.',
    quote: 'Grief is just a debt. Eventually somebody has to collect.',
    image: slot('sadie-adler', 'Sadie Adler'),
  },
  {
    id: 'hosea-matthews', number: '05', name: 'Hosea Matthews', role: 'Co-founder, schemer, voice of reason',
    bio: 'A con man with a patient smile, Hosea built the gang beside Dutch and mostly keeps its worst impulses in check. He believes in the long game — and quietly fears that the game has already ended.',
    quote: 'Every scheme has an exit. Wise men plan for it before they need it.',
    image: slot('hosea-matthews', 'Hosea Matthews'),
  },
  {
    id: 'charles-smith', number: '06', name: 'Charles Smith', role: 'Tracker, hunter, quiet conscience',
    bio: 'Steady, observant and slow to anger, Charles is the gang’s best outdoorsman. He sees the cracks in the family earlier than most, and holds on to his own decency when others let go of theirs.',
    quote: 'Some people take the road. Some people let it take them.',
    image: slot('charles-smith', 'Charles Smith'),
  },
]
