const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      const newCollection = (collection instanceof Array) ? [...collection] : Object.values(collection)
      for(const i of newCollection){ callback(i)}
      return collection
    },

    map: function(collection, callback) {
      const newCollection = (collection instanceof Array) ? [...collection] : Object.values(collection)
      for(let i = 0; i < newCollection.length; i++){
        newCollection[i] = callback(newCollection[i])
      }
      return newCollection
    },

    reduce: function(collection, callback, acc) {
      let newCollection = [...collection]
      let pointer = (acc) ? acc : newCollection.shift();
      for(let i = 0; i < newCollection.length; i++){
        pointer = callback(pointer, newCollection[i])
      }
      return pointer
    },

    find: function(collection, predicate){
      let returnTrue = function(i){
        if i === predicate{
          return i
        }
      }
      collection.each(collection, returnTrue)
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
