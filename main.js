var mongoose= require('mongoose');
var schema=require('./schema');

mongoose.connect('mongodb://localhost:27017/test');

var Product=mongoose.model('Product',schema,'product');

var product= new Product({
    code: 'product 1',
    description:'examen unidad 2',
    name:'esponjaslocochonas',
    price:9,
    quantity:25
});

product.save(function (error){
    if(error){
        console.log(error);
        process.exit(1);
    }

    console.log('exito  XD');
});