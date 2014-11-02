/// <reference path='../../references.ts' />

module uniweb {
	/**
     * Services that persists and retrieves tasks from localStorage.
     */

	export interface ITaskRepository {
		get (): Array<ToDoTask>;
		put(tasks: Array<ToDoTask>);
	}

    export class TaskRepository implements ITaskRepository {

    	constructor() {
            localStorage.removeItem(this.STORAGE_ID);
    	}
        STORAGE_ID = 'uniweb-gondek-angularjs-typescript';

        get (): Array<ToDoTask> {
            return JSON.parse(localStorage.getItem(this.STORAGE_ID) || '[]');
        }

        put(tasks: Array<ToDoTask>) {
            localStorage.removeItem(this.STORAGE_ID);

            //Goddamnit js is so fucking retarded
            for(var i=0; i<tasks.length;i++) {
                tasks[i].content = tasks[i].content.toString();
            }

            var a = JSON.stringify(tasks);
            localStorage.setItem(this.STORAGE_ID, a);
        }
    }
}