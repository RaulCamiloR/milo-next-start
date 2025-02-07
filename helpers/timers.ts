export const waitAsync = ()=>{
    return new Promise((resolve)=>{
      setTimeout(()=>{
        resolve(true)
      }, 3000)
    })
  }