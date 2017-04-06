var MongoClient = require('mongodb').MongoClient
var url = 'mongodb://localhost:27017/learnyoumongo'
var fn = process.argv[2]
var ln = process.argv[3]
var documents = {
  firstName: fn,
  lastName: ln
}

MongoClient.connect(url, function (err, db) {
  var docs = db.collection('docs')
  if (err) throw err
  // inserting document
  // { a : 2 }
  docs.insert(documents, function (err, data) {
    // handle error
    if (err) {
      console.error(err)
      throw err
    }
    else {
      // other operations
      console.log(JSON.stringify(documents))
      db.close()
    }
  })
})

// var mongo = require('mongodb').MongoClient
//
//     var firstName = process.argv[2]
//     var lastName = process.argv[3]
//     var doc = {
//       firstName: firstName
//     , lastName: lastName
//     }
//
//     var url = 'mongodb://localhost:27017/learnyoumongo'
//     mongo.connect(url, function(err, db) {
//       if (err) throw err
//
//       var collection = db.collection('docs')
//       collection.insert(doc, function(err, data) {
//         if (err) throw err
//         console.log(JSON.stringify(doc))
//         db.close()
//       })
//     })
