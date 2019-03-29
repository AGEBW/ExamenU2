var mongoose= require('mongoose');
var schema=require('./schema');

mongoose.connect('mongodb://localhost:27017/test');

var Product=mongoose.model('Product',schema,'product');

var product= new Product({
    code: 'product 2',
    description:'examen unidad 2',
    name:'esponjaslocochonas2',
    price:9,
    quantity:0
});

product.save(function (error){
    if(error){
        console.log(error);
        process.exit(1);
    }
    if(product.quantity >0){
        console.log("guardado producto 1");
    }
    console.log('checa TwT');
});