# About this repo:
It contains an index.html page and separate index.js files to test on each browser (mostly chrome and safari).
In devtools, you will see that chrome and safari behaves differently with closures.



# Different definitions of closures.

English
* Merriam Webster: means of enclosing. to close in/surround.
    *   https://www.merriam-webster.com/dictionary/closure
* Google: the act or process of closing something.
    * the act or process of closing something,

Closure programming
* Wikipedia: A technique. AND, Operationally, the function + environment.
* Eric Elliott: https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-closure-b2f0d2152b36
    * function + references to its surrounding state. closures are created everytime a function is created.
* Udemy-Colt Advanced. Elie Schoppik: A closure is a function that makes use of variables defined in outer
    functions that have previously return



## my own definitions so far...
1. A closure is the function plus the environment.
2. A closure is an enclosure of an inner function over its outer functions.
3. It's a technique of utilizing closure. It's good to just skip to practical uses of closure.
   1. which are private variables
   2. and function factories.