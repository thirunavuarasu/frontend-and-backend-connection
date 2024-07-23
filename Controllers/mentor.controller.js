import mentormodel from "../Models/mentor.schema.js";
import student  from "../Models/student.schema.js"; 

export const creatementor = async (req, res) => {
  try {
      const mentor = new mentormodel(req.body)

     await mentor.save();

    res.status(200).json({ message: "Mentor created successfully", data:mentor});

  } catch (error) {
    console.log(error);
  }
};

export const getAllmentors =async(req, res)=>{

  try {
    const ment= await mentormodel.find()

    res.status(200).json({data:ment})

  } catch (error) {

    console.log(error);
  }

}

export const getassignedstudents =async(req, res)=>{

  try {
    const mentId=req.params.id;
    const ments= await mentormodel.findById(mentId).populate('studId');
    
   // console.log("ments",ments)
    res.status(200).json({ments:ments.firstName,student:ments.studId.map((item)=>item.firstName)});

  } catch (error) {

    console.log(error);
  }

}