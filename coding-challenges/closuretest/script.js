debugger;

function outest() {
    var a = 'a';
    function outer() {
        var b = 'b';
        function inner() {
            var c = 'c';
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
slightly expected behavior. going through the steps, basically lists
the outer scopes under the Scopes tab and then its own tab as Closure 
Variables (outest) [for example]. When inside the `outer` fn, it also
lists the `a` variable as a closure variable under `outest` even tho
its not being used. we'll see if its the same behavior in chrome.
Then within inner, it lists outer fn and outest fn as separate Closure
Variables tabs.

chrome:
ya same as safari, just the wording of the tabs is not Closure Variables
but just 'Closure'. 

*/
