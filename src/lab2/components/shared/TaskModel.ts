/// <reference path='../../references.ts' />

module uniweb {
    'use strict';

    export class ToDoTask {
        constructor(
            public title: string,
            public content: string,
            public score: number
            ) {}
    }
}