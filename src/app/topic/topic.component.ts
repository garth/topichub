import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { Store } from '../../overmind'

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
})
export class TopicComponent implements OnInit {
  constructor(private store: Store, private route: ActivatedRoute) {}

  topicId: string
  state = this.store.select()
  actions = this.store.actions

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      this.topicId = paramMap.get('topicId')
    })
  }

  nameChanged(name) {
    this.actions.updateTopic({ ...this.state.topics[this.topicId], name })
  }

  contentChanged(content) {
    this.actions.updateTopic({ ...this.state.topics[this.topicId], content })
  }
}
