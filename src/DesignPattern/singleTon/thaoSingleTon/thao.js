/**
 * Create an example of a JavaScript Singleton.
 * After the first object is created, it will return additional 
 * references to itself
 */

let obj = (function() {
    let objInstance; //private variable
    function create() { //private function to create methods and properties
        let _isRunning = false;
        let start = function() {
            _isRunning = true;
        }

        let stop = function() {
            _isRunning: false;
        }
        let currentState = function() {
            return _isRunning;
        }
        return {
            start: start,
            sopt: stop,
            currentState: currentState,
        }
    }
    return {
        getInstance: function() {
            if (!objInstance) {
                console.log
                objInstance = create();
            }
            return objInstance;
        }
    };
})();


let obj1 = obj.getInstance();
let obj2 = obj.getInstance();
obj1.start();
console.log(obj1.currentState());
console.log(obj2.currentState());
console.log("compare", obj1 === obj2);