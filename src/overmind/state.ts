import { IState } from 'overmind'
import { Derive } from '.'

export interface Topic {
  id: string
  name: string
  content: string
}

export interface State extends IState {
  topics: {
    [id: string]: Topic
  }
  topicList: Derive<State, Topic[]>
  topicCount: Derive<State, number>
}

export const state: State = {
  topics: {},
  topicList: state => Object.values(state.topics).sort((a, b) => a.name.localeCompare(b.name)),
  topicCount: state => Object.keys(state.topics).length,
}
