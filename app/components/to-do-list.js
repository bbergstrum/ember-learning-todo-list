import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { v4 as uuidv4 } from 'uuid';

export default class ToDoListComponent extends Component {

    description = '';
    dueDate = '';

    @tracked toDoListItems = [
        {
            id: uuidv4(),
            description: 'Complete Ember Tutorial',
            dueDate: '11/01/2021'
        },
        {
            id: uuidv4(),
            description: 'Continue Learning React',
            dueDate: '20/01/2021'
        },
        {
            id: uuidv4(),
            description: 'Build a To-do-List-App with Ember',
            dueDate: '09/01/2021'
        },
    ];

    @action deleteListItem(itemId) {
        const newToDoList = this.toDoListItems.filter(listItem => listItem.id !== itemId);
        this.toDoListItems = newToDoList;
    };

    @action addListItem() {
        if(this.description.length > 1 && this.dueDate.length > 1) {
            const newToDo = {
                id: uuidv4(),
                description: this.description,
                dueDate: this.dueDate
            }
            const newToDoList = [...this.toDoListItems, newToDo];
            this.toDoListItems = newToDoList;
        }
    };
}