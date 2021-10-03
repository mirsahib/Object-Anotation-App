import { SECRET,MONGODB_REAL_WEBHOOK} from "../config";
const uploadImage = async(uri)=>{
    // save image using cloudlinarly api
    let apiUrl = `https://api.cloudinary.com/v1_1/${SECRET}/image/upload`
    let base64Img = `data:image/jpg;base64,${uri}`
    let imageData = { file: base64Img, upload_preset: "annotationImage" }
    try{
        let result = await fetch(apiUrl,{
            method:"POST",
            body:JSON.stringify(imageData),
            headers:{'content-type': 'application/json'}
        })
        //console.log("result",result)
        return await result.json()
    }catch(err){
        console.log("from upload image",err)
    }
}

const create = async(data)=>{
    try {
        let response = await fetch(MONGODB_REAL_WEBHOOK,{
            method:"POST",
            body:JSON.stringify(data),
            headers:{'content-type': 'application/json'}
        })
        return response.json()
    } catch (error) {
        console.log(error)
    }
}

export  {uploadImage,create}