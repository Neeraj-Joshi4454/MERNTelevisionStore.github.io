const mongoose = require('mongoose');


mongoose.connect('mongodb://127.0.0.1:27017/Television')
.then(() => {
    console.log('Great Connected to DB.... :)');
}).catch((error) => {

    console.log("Failed to connect DB ", error);
})

