import { Action } from '.'
import * as id from 'nanoid'
import { Topic } from './state'

export const crateTopic: Action<void, Topic> = ({ state }) => {
  const topic: Topic = {
    id: id(),
    name: 'New Topic',
    content: 'Add some details here',
  }
  state.topics[topic.id] = topic
  return topic
}

export const updateTopic: Action<Topic, void> = ({ state }, topic) => {
  state.topics[topic.id] = topic
}
