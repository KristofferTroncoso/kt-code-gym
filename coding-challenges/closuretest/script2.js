debugger;

function outest() {
    var a = 'a';
    var x = 'x';
    function outer() {
        var b = 'b';
        var y = 'y';
        function inner() {
            var c = 'c';
            var z = 'z';
            return a + b + c;
        }
        return inner;
    }
    return outer;
}

var yo = outest();
var yoyo = yo();
var yoyoyo = yoyo();
console.log(yoyoyo);

/*
safari:
woah so this one has some differences with chrome. Safari doesn't 
garbage-collect the unused variables if its in scope. So it shows
what 'closure variables' is available to a certain function but
it shows even the useless ones. On the other hand... - 

chrome:
Chrome somehow sees which variables aren't going to be used and it
doesn't show up under closures. So a, b, and c show up but not x, and
y. 

*/
