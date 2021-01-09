import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
    async model() {
        return [
            {
                description: 'Complete Ember Tutorial',
                dueDate: '11/01/2021'
            },
            {
                description: 'Continue Learning React',
                dueDate: '20/01/2021'
            },
            {
                description: 'Build a To-do-List-App with Ember',
                dueDate: '09/01/2021'
            },
        ]
    }
}