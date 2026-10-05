import Smrati from "../models/SmratiSchema.js"

const contact = (req,res) =>{
    try{
        res.render('contact')

    }catch(error){
        console.log(error.message)
    }
}

const userContact = async(req,res) =>{
    try{
        const user = await Smrati({
            name:req.body.name,
            email:req.body.email,
            subject:req.body.subject,
            message:req.body.message
        });
        if(user){
            await user.save();
            console.log("Contact saved")
        }else{
            console.log("Contact data not saved!")
        }
        console.log(req.body)
        res.redirect('/contact')

    }catch(error){
        console.log(error.message)
    }
}

export {contact,userContact}