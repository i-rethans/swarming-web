/*
 * Socket Types
 */

export type Participant =  {
  id: string
  direction: string
  admin: boolean
};

export type Session = {
  id: string
  state: string
  question: string | null
  participants: Participant[]
  value: number 
  swarming_time: number 
  range_max: number | null
}



