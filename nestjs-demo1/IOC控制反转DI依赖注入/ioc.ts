
// 如将 A 类的name改为传入，那么 B 类和 C 类都需要修改
// class A{
//   name:string
//   constructor(name:string){
//     this.name = name
//   }
// }

// class B{
//   a:any
//   constructor(){
//     this.a = new A().name
//   }
// }


// class C{
//   a:any
//   constructor(){
//     this.a = new A().name
//   }
// }



class A{
  name:string
  constructor(name:string){
    this.name = name
  }
}

class C{
  name:string
  constructor(name:string){
    this.name = name
  }
}

class Container {
  module:any
  constructor(){
    this.module = {}
  }

  provide (key:string,module:any){
    this.module[key] = module
  }

  get(key:string){
    return this.module[key]
  }
}

const module = new Container()

module.provide('a',new A('我是A'))

module.provide('c',new C('我是C'))

class B {
  a:any
  c:any
  constructor(mo:Container){
    this.a = mo.get('a')

    this.c = mo.get('c')
  }
}

const bb = new B(module)

bb.a
bb.c