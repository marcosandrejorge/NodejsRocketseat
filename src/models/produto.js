const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ProdutoSchema = new mongoose.Schema({
    titulo:{
        type:String,
        require:true
    },
    descricao:{
        type:String,
        require:true
    },
    url:{
        type:String,
        require:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
});

ProdutoSchema.plugin(mongoosePaginate);

mongoose.model('Produto',ProdutoSchema);