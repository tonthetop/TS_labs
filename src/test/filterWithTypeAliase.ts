type Filter<T> = {
  (array: T[], f: (item: T) => boolean): T[]
  }
  let filter: Filter<number> = (array:number[], f: (item: number) => boolean) =>{
    const result :number[] =[];
    for (let i = 0; i < array.length; i++)
    if (f(array[i])) result.push(array[i]);
    return result
  }
  console.log(filter([1,2,3],(item: number)=>{return item>=2}))
   
