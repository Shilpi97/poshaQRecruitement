var mongoose=require('mongoose');
var model=require('./model.js');
// Load the full build.
var _ = require('lodash');


const submission = async (client, dbName, collectionName, bucketSize) => { 

const connectionString = 'mongodb://'+client+'/'+dbName;

    (async () => {
        const client = await mongoose.connect(connectionString,{ useNewUrlParser: true });

        try {
          var res;
            model.findCategory().then((data)=>{
        let category = {}
        data.map(q => {
          category[q.category] = [...(category[q.category] || []), q._id]
        })
        Object.keys(category).map(p => {
            let cat = {
              category: p,
              id:category[p]
            }   
            console.log(cat.category);
            console.log(_.chunk(cat.id,bucketSize));
          
          })
        
            }).catch(err=>{
                console.log(err);
            })

                
                
        }
        finally {
            //client.close();
        }
    })() .catch(err => console.error(err));
}

exports.connection=submission;