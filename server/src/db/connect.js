const mongoose = require("mongoose");
// Middleware
const db = 'mongodb+srv://tharun:tharun18@nm.tkwrg.mongodb.net/grocerwebb?retryWrites=true&w=majority&appName=NM'


// Connect to MongoDB using the connection string
mongoose.connect(db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log(`Connection successful`);
}).catch((e) => {
  console.log(`No connection: ${e}`);
});

// mongodb://localhost:27017