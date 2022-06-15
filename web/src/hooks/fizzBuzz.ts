import { reactive } from "vue";

export const fizzBuzz = (count?: number) => {
  const result = reactive({ 
    count: count || 0,
    fizzBuzz: ""
  })

  const getFizzBuzz = () =>{
    result.count += 1
    result.fizzBuzz = ""
    
    if( result.count % 15 === 0 ) {
      result.fizzBuzz = "FizzBuzz"
    } else if (result.count % 3 === 0 ){
      result.fizzBuzz = "Fizz"
    } else if (result.count % 5 === 0 ){
      result.fizzBuzz = "Buzz"
    }
  }

  return {
    result,
    getFizzBuzz,
  }
};