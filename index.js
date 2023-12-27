const express = require('express');
const { connectToMongoDB } = require('./connect');
const URL = require('./models/url')
const urlRoute = require('./routes/url');
require('dotenv').config({ path: './config.env' });
const path = require('path')
const staticRoute = require('./routes/staticRouter')

const app = express();
const PORT = 8001;
connectToMongoDB(process.env.MONGODB_URI).then(() =>
  console.log("Mongodb connected")
);

// EJS engine
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

app.use(express.json());
app.use(express.urlencoded({extended: false}));


app.use('/url', urlRoute);

app.use('/', staticRoute);


app.get("/url/:shortId", async (req, res) => {
  const shortId = req.params.shortId;
  const entry = await URL.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );

  try {
    // Database query and redirect code here
    res.redirect(entry.redirectURL);
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }

});

/*

I added a check for !entry to handle the case where the document with the
specified shortId is not found.If entry is null, it means
the URL was not found, and a 404 response is sent.

If the document is found, it proceeds to update the visit
history and then redirects to the specified URL.

*/ 

// app.get("/:shortId", async (req, res) => {
//   const shortId = req.params.shortId;

//   try {
//     // Use findOne to get the document without modifying it
//     const entry = await URL.findOne({ shortId });

//     if (!entry) {
//       // Handle the case where no document is found
//       return res.status(404).send("URL not found");
//     }

//     // Update the visit history
//     await URL.findOneAndUpdate(
//       { shortId },
//       {
//         $push: {
//           visitHistory: {
//             timestamp: Date.now(),
//           },
//         },
//       }
//     );

//     // Redirect to the specified URL
//     res.redirect(entry.redirectURL);
//   } catch (error) {
//     console.error(error);
//     res.status(500).send("Internal Server Error");
//   }
// });


app.listen(PORT, () => console.log(`Server started at ${PORT}`))
