function receivesAFunction(callback) {

    if(typeof callback === 'function') {
        callback();
    }
}

function returnsANamedFunction() {

    return function namedFunction() {

    };
}

function returnsAnAnonymousFunction() {
    return function() {
        // Implementation of the anonymous function
    };
}