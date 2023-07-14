import '../database/db'
import { Feedback } from '../database/feedbackSchema'
export default async function handler(req ,res){

    if(req.method === "POST"){
        try {
            const {name , email , subject , message} = req.body
            console.log(name , email)
           
                const data = await Feedback(req.body)
                await data.save()
                return res.json({message:"Data inserted"})
            
    
        } catch (error) {
            console.log(error.message)
        }
    }
}