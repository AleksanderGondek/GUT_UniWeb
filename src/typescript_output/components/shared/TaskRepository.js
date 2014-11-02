var uniweb;
(function (uniweb) {
    

    var TaskRepository = (function () {
        function TaskRepository() {
            this.STORAGE_ID = 'uniweb-gondek-angularjs-typescript';
        }
        TaskRepository.prototype.get = function () {
            return JSON.parse(localStorage.getItem(this.STORAGE_ID) || '[]');
        };

        TaskRepository.prototype.put = function (tasks) {
            localStorage.setItem(this.STORAGE_ID, JSON.stringify(tasks));
        };
        return TaskRepository;
    })();
    uniweb.TaskRepository = TaskRepository;
})(uniweb || (uniweb = {}));
//# sourceMappingURL=TaskRepository.js.map
