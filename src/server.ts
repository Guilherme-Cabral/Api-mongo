import express from "express";
import mongoose from "mongoose";
import routes from "./routes/routes";


mongoose.connect('mongodb://localhost/api')

const app = express();

app.use(express.json())
app.use(routes);

app.listen(3000, () => {
    console.log('Server is Listening on http://localhost:3000')
})