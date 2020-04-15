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
      const newCollection = (collection instanceof Array) ? [...collection] : Object.values(collection)
      let value
      for(let i = 0; i < newCollection.length; i++){
        if(predicate(newCollection[i])){
          value = newCollection[i]
          break;
        }
      }
      return value
    },

    filter: function(collection, predicate){
      const newCollection = (collection instanceof Array) ? [...collection] : Object.values(collection)
      let value = []
      for(let i = 0; i < newCollection.length; i++){
        if(predicate(newCollection[i])){
          value.push(newCollection[i])
        }
      }
      return value
    },

    size: function(collection){
      const newCollection = (collection instanceof Array) ? [...collection] : Object.values(collection)
      let value = 0;
      for(const i of newCollection){ value++}
      return value
    },

    first: function(collection, number){
      const newCollection = (collection instanceof Array) ? [...collection] : Object.values(collection)
      if(number){
        return newCollection.slice(0, number)
      }
      else {
        return newCollection[0]
      }
    },

    last: function(collection, number){
      const newCollection = (collection instanceof Array) ? [...collection] : Object.values(collection)
      if(number){
        return newCollection.slice(-number)
      }
      else {
        return newCollection.slice(-1)[0]
      }
    },

    compact: function(array){
      let noFalse = []
      for(const i of array){
        if(Boolean(i)){
          noFalse.push(i)
        }
      }
      return noFalse
    },

    sortBy: function(array, callback){
      let newArr = [...array];
      return newArr.sort(function(a,b) {return callback(a)- callback(b)})
    },

    flatten: function(array, shallow, newArr=[]){
      const newCollection = (array instanceof Array) ? [...array] : Object.values(array)
      if(shallow){
        newArr = [].concat.apply([], newCollection)
      } else {
        for(let i in array){
          i.flatten(i, false, newArr)
        }
      }
      return newArr
    },

    functions: function() {

    },


  }
})()

fi.libraryMethod()
