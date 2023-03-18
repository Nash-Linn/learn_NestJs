
//类装饰器
const doc:ClassDecorator = (target:any)=>{
  console.log(target,'类装饰器')
  target.prototype.name = 'nash'
}

//属性装饰器
const Name :PropertyDecorator= (target:any,key:string|symbol)=>{
  console.log(target,'属性装饰器target')
  console.log(key,'属性装饰器key')
}


//方法装饰器
const GetName:MethodDecorator  = (target:any,key:string|symbol,descriptor:any)=>{
  console.log(target,'方法装饰器target')
  console.log(key,'方法装饰器key')
  console.log(descriptor,'方法装饰器descriptor')
}

//参数装饰器
const params:ParameterDecorator  = (target:any,key:string|symbol,index:any)=>{
  console.log(target,'参数装饰器target')
  console.log(key,'参数装饰器key')
  console.log(index,'参数装饰器index')
}

@doc
class Nash {
  @Name
  public name:string
  constructor(){
    this.name = 'nash'
  }

  @GetName
  getName(){
    return this.name
  }

  setName(@params name:string){
    this.name = name
  }
}

const nash:any = new Nash()

console.log(nash.name)