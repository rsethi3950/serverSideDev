const mongoose = require('mongoose');
const Dishes = require('./dishes');
 
const url = 'mongodb://localhost:27017/conFusion';

const connect = mongoose.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true } );
connect.then((db) => {
    console.log('Connected correctly to server');
    Dishes.create({
        name: 'Uthappizza',
        description: 'test'
    })
    //newDish.save()
        .then((dish) => {
            console.log(dish);

            return Dishes.findByIdAndUpdate(dish._id, {
                $set: {description: 'updated test'}
            },{
                new: true
            })
            .exec();
        })
        .then((dish) => {
            console.log(dish);
                dish.comments.push({
                    rating: 5,
                    comment: 'i\'m getting sinking feel!',
                    author: 'riya'
                });
            return dish.save();
        })
        .then((dishes) => {
            console.log('dishes log ')
            console.log(dishes);

            return Dishes.remove({});
        })
        .then(() => {
            return mongoose.connection.close();
        })
        .catch((err) => {
            console.log(err);
        });
});