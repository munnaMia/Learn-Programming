//in post req we send a json obj to the database to save the Data.

// When client send a data in express the data is store into a req.body() object.
app.use(express.json()); // use this middle ware to receive the json data


//In memory
const book = [
    {
      id: 0,
      name: "book name 0",
      price: 600,
    },
    {
      id: 1,
      name: "book name 1",
      price: 6030,
    },
    {
      id: 2,
      name: "book name 3",
      price: 340,
    },
  ];


//post method.
app.post("/About", (req, res) => {
    const newBook = req.body // here the user posted data received
    book.push(newBook)
    res.json(book)
  });

  
  /**
   * Open postmen 
   * create new workspace
   * go to the body
   * select raw and send data type to json
   * create a data
   * and post it
   * receive from data from your local storage.
   */