


## Lessons learned

Typescript makes you a better programmer in a way. You're made aware of what data you're passing into components.
Also made aware of where things may go wrong. For example I was just passing a single "todos" prop to my
TodoList component. There I'm hoping "todos" is an array of objects; and each object has the correct data with
the correct types. This definitely could have gone wrong in production. So in TypeScript, i have to specifically
specify the types I'm expecting. In "TodoList" case, i was expecting an array of Todo objects. The Todo object had
3 pieces of data with specified types.