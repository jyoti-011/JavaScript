// Immediately Invoked Function Expressions (IIFE)


(function user(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Alex')