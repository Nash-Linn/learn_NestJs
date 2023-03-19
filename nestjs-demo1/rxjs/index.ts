import {of,Observable,interval,take, fromEvent} from 'rxjs'

import { map,filter,findIndex,reduce, retry } from 'rxjs/operators'

// const observable = new Observable(subscribe=>{
//   subscribe.next(1)
//   subscribe.next(2)
//   subscribe.next(3)

//   setTimeout(() => {
//     subscribe.next(4)
//     subscribe.complete()
//   }, 3000);
// })

// observable.subscribe({
//   next:(num)=>{
//     console.log('num',num)
//   }
// })

const click$ = fromEvent(document,'click') //监听dom元素的 click 事件

click$.subscribe(e=>{
  console.log('e',e)
})

//retry(3) 如果失败 尝试3次
const subs =  of(1,2,3,4,5,6).pipe(retry(3), map(v=>({num:v})),filter(v=>v.num %2 == 0)).subscribe(e=>{
  console.log(e)
  if(e.num  === 10){
    subs.unsubscribe()
  }
})