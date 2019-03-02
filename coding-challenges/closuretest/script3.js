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
            return a + c;
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
so the only thing i really changed from script2 is that i made `outer` fn
useless. The variables in it are not used at all. So safari still shows
that function plus all the variables in the entire scope of the inner fn.
Chrome however only shows what that inner function needs. so it omits the
useless variables in outest and outer and just omits the outer fn completely
in the Scope tab.
I can see that safari's focus is basically just showing you the scope of
the inner function. So it shows all outer functions it shares scope with as
well as all the variables defined in those functions. It makes sense that
the main tab on safari is called 'Scope Chain'.
*/
