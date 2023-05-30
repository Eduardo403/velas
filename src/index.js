import app from "./app.js";


app.get("/", (req, res) => {res.json("Hello World")});
app.put("/newProduct",(req, res) => {res.json("insert new product")});
app.patch("/updateProduct",(req, res) => {res.json("update product")});
app.delete("/deleteProduct",(req, res) => {res.json("delete product")});
app.listen(3000);
console.log("Server is running on port 3000");