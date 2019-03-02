debugger;

function outest() {
    var a = 'a';
    var x = 'x';
    function outer() {
        var b = 'b';
        var y = 'y';
        console.log(x);
        function inner() {
            var c = 'c';
            var z = 'z';
            console.log(a);
            console.log(b);
        }
        inner();
    }
    outer();
}

outest();

/*
Ok so safari is pretty straightforward now. It's just really showing the scope chain.
When it says 'Closure Variables', its defining closures as the other function scopes
that inner ones enclose over. So nothing about returning functions or executing
outside lexical scope.
So chrome is not unlike Safari at all (its very similar). It also defines closure in
a similar way. As in: its enclosed by an inner function. The only difference is
chrome doesn't really show what's not necessary. So if its not needed by an inner function,
as in it has no variables it's using, then it doesnt show it under the Scope tab at all. It
may mean it's garbage collecting it or maybe its just how it shows in devtools.
*/
