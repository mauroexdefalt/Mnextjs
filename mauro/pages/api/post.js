import nc from 'next-connect'
import upload from '../../src/utils/upload'


const handler = nc()
.use(upload.single('file'))
.post((req,res)=>{

    const {title , atuthorName , authorAvatar , videoUrl} = req.body;
    res.json({hello : 'world post'})
})
.patch(async(req,res)=>{
    throw new Error('Aconteceu algo de errado')
})


export default handler