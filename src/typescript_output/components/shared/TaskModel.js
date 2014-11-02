var uniweb;
(function (uniweb) {
    'use strict';

    var SingleTask = (function () {
        function SingleTask(Title, Details) {
            this.Title = Title;
            this.Details = Details;
        }
        return SingleTask;
    })();
    uniweb.SingleTask = SingleTask;

    var ToDoTask = (function () {
        function ToDoTask(title, comments, tasks, score) {
            this.title = title;
            this.comments = comments;
            this.tasks = tasks;
            this.score = score;
        }
        return ToDoTask;
    })();
    uniweb.ToDoTask = ToDoTask;
})(uniweb || (uniweb = {}));
//# sourceMappingURL=TaskModel.js.map
