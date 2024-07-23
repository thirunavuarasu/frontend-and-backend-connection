
import studentModel  from "../Models/student.schema.js";

export const createStudent =async(req,res)=>{

  try {
    const student = new studentModel (req.body)//document creation

    await student.save();//document save

    res.status(200).json({message:'student created',data:student})

  } catch (error) {
    console.log(error);
  }

}

export const getAllStudents =async(req, res)=>{

  try {
    const stud= await studentModel.find();

    res.status(200).json({data:stud})

  } catch (error) {

    console.log(error);
  }

}
export const getStudentById = async (req, res) => {
  try {
    const studentId = req.params.id;
    const student = await studentModel.findById(studentId);
    if (!student) {
      return res.status(404).json({ message: "Student not found" });
    }
    return res.status(200).json({ data: student });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
