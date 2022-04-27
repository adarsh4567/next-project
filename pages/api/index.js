// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
   if(req.method === 'POST'){
    // res.status(200).json({message:'success'})
    const {title,body,userId} = req.body;
    const newItem = {
      title,
      body,
      userId
    }
    res.send(newItem);
    // alert('success')
  }
  
  


}
