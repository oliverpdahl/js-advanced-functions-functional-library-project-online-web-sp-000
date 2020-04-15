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

    map: function() {
      const newCollection = (collection instanceof Array) ? [...collection] : Object.values(collection)
      for(const i of newCollection){ i = callback(i) }
    },

    reduce: function() {

    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
