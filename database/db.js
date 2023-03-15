import mongoose from "mongoose";


export const Connection =async (username,password) => {
    try {
        const URL = `mongodb+srv://${username}:${password}@cluster0.3lyulmy.mongodb.net/?retryWrites=true&w=majority`
      await  mongoose.connect(URL,{useUnifiedTopology :true,useNewUrlParser:true})
        console.log('Database connected');
        
    } catch (error) {
        console.log(error);
    }
}
export default Connection;
// codeforinterview
//52:17 paused