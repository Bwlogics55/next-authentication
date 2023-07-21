import mongoose from "mongoose";

export async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URL!);
        const connection = mongoose.connection;

        // Connections
        connection.on('connected', ()=>{
            console.log('MongoDb is Connected Succesfully')
        })
        connection.on('error', (err)=>{
            console.log("MongoDB connection error. Please make sure MongoDB is running", + err)
            process.exit();
        })

    }catch (error){
        console.log("Something Went Wrong")
        console.log(error)
    }
}

export default connect;