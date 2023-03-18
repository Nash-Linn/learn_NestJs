import axios from "axios";


const GET = (url:string)=>{
  return (target:any,key:any,descriptor:PropertyDescriptor)=>{
    const fnc = descriptor.value
    axios.get(url).then(res=>{
      fnc(res,{
        status:200,
        success:true
      })
    }).catch(e=>{
      fnc(e,{
        status:500,
        success:false
      })
    })
  }
}


class controller{
  constructor(){

  }
  @GET('http://localhost:8080/girl/getGirls')
  getList(res:any,status:any){
    console.log('res',res.data)
    console.log('status',status)
  }
}