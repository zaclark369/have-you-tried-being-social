const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/have-you-tried-being-social', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.set('debug', true);

module.exports = mongoose.connection;