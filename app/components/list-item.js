import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ListItemComponent extends Component {
    @tracked isCompleted = false;

    @action toggleToDoCompletion() {
      this.isCompleted = !this.isCompleted;
    }
}