import { Component, ChangeDetectionStrategy } from '@angular/core'
import { Store } from '../../overmind'
import { Router } from '@angular/router'

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopicsComponent {
  constructor(private store: Store, private router: Router) {}

  state = this.store.select()
  actions = this.store.actions
}
