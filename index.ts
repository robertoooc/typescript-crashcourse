const obj = {
  date: new Date(),
  weather: 'sunny'
}

// const logWeather = (obj:{date:Date,weather:string}):void=>{
//   console.log(obj.date)
//   console.log(obj.weather)
// }

// destructuring an object
const logWeather = ({date,weather}:{date:Date,weather:string}):void=>{
  console.log(date)
  console.log(weather)
}
logWeather(obj)


const profile = {
  name : 'anon',
  age: 10,
  coords:{
    lat: 40,
    lng:0
  },
  setAge(age:number):void {
    this.age = age
  }
}
// need to list out structure of profile and property needed
const {age}: {age:number}= profile
const { coords: {lat,lng} }:{coords:{lat:number,lng:number}}= profile
console.log({lat,lng})

// const tuple:(string | number | boolean)[] = ['one',2,false]
const tuple:[string,number,boolean] = ['one',2,false]
// tuple lets us know in what order the different stored values should be in an array   


class Student{
  constructor (public name: string, public id:number, public score:number=0){
  }
  answered(option:number):void{
    console.log(option)
  }
}
const newStudent = new Student('henry',0)
console.log(newStudent)
newStudent.answered(4)