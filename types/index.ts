/*
 * Socket Types
 */

export type Participant =  {
  id: string
  direction: string
};

export type Session = {
  id: string
  state: string
  question: string | null
  participants: Participant[]
  value: number 
}



