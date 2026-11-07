import type { ImageSlot, StoryBeat } from '../types'
import { img } from './image'

export const storyIntro =
  'In the summer of 1899 the frontier is closing. Railroads, telegraph wires and men in clean collars have no room for the likes of Dutch van der Linde — a preacher of freedom with a gang of thieves, drifters and runaways who believe the country still owes them a living.'

export const storyBeats: StoryBeat[] = [
  { year: '1899', title: 'The Van der Linde gang', text: 'A found family of outlaws led by Dutch van der Linde and Hosea Matthews, living by an ideal of freedom that grows harder to defend every season.' },
  { year: 'Blackwater', title: 'The failed robbery', text: 'A ferry job in the booming town of Blackwater collapses into gunfire. The gang flees with almost nothing and lives with the consequences for the rest of the story.' },
  { year: 'Winter', title: 'The pursuit', text: 'Pinkerton agents and bounty hunters follow the trail from the snowbound mountains to the swamps of the south. Every camp is one more camp they have to abandon.' },
  { year: 'The end', title: 'A decline foretold', text: 'Law, industry and paperwork are swallowing the open country. The outlaw era is not ending with a bang, but with loyalty, doubt and the slow cost of everything done to survive.' },
]

export const storyImages: { a: ImageSlot; b: ImageSlot } = {
  a: { src: img('story/blackwater.jpg'), alt: 'A frontier town street in the 1890s' },
  b: { src: img('story/camp-1899.jpg'), alt: 'Outlaw camp at the edge of the mountains' },
}
