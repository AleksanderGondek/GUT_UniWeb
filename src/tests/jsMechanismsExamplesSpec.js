describe("Tests of javascript mechanism examples", function() {
    it("Task object - test enclosure mechanism", function() {
        var test = new Task('a', 'b', 'c');
        expect(test).toBeDefined();
        expect(test.name).toBeUndefined();
        expect(test.start).toBeUndefined();
        expect(test.length).toBeUndefined();
    });

    it("Task object - test isRunning method ", function() {
        var test = new Task('a', '2014-10-0', 1);
        expect(test).toBeDefined();
        expect(test.isRunning('2014-10-0')).toBeTruthy();
        expect(test.isRunning('2014-10-1')).toBeFalsy();
        expect(test.isRunning('2014-10-1')).toBeFalsy();
    });

    it("Task object - test getDescription method", function() {
     	var test = new Task('a', '2014-10-0', 1);
        expect(test).toBeDefined();
        expect(test.getDescription()).toEqual('2014-10-0a1');
    });

    it("SecondTask object - test enclosure mechanism", function() {
        var test = new SecondTask('a', 'b', 'c');
        expect(test).toBeDefined();
        expect(test.name).toBeDefined();
        expect(test.start).toBeDefined();
        expect(test.length).toBeDefined();
    });

    it("SecondTask object - test isRunning method ", function() {
        var test = new SecondTask('a', '2014-10-0', 1);
        expect(test).toBeDefined();
        expect(test.isRunning('2014-10-0')).toBeTruthy();
        expect(test.isRunning('2014-10-1')).toBeFalsy();
        expect(test.isRunning('2014-10-1')).toBeFalsy();
    });

    it("SecondTask object - test getDescription method", function() {
     	var test = new SecondTask('a', '2014-10-0', 1);
        expect(test).toBeDefined();
        expect(test.getDescription()).toEqual('2014-10-0a1');
    });

   it("Cost object - test enclosure mechanism", function() {
        var test = new Cost('a', 'b', 'c');
        expect(test).toBeDefined();
        expect(test.name).toBeDefined();
        expect(test.start).toBeDefined();
        expect(test.length).toBeDefined();
    });

    it("Cost object - test isRunning method ", function() {
        var test = new Cost('a', '2014-10-0', 1);
        expect(test).toBeDefined();
        expect(test.isRunning('2014-10-0')).toBeTruthy();
        expect(test.isRunning('2014-10-1')).toBeFalsy();
        expect(test.isRunning('2014-10-1')).toBeFalsy();
    });

    it("Cost object - test getDescription method", function() {
     	var test = new Cost('a', '2014-10-0', 1);
        expect(test).toBeDefined();
        expect(test.getDescription()).toEqual('1a2014-10-0');
    });
});