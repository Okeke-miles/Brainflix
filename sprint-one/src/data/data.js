export function getDate (input){

let time = new Date (input)
  
    let day = time.getUTCDate();
    let month = time.getUTCMonth() + 1;
    let year = time.getUTCFullYear();
    let newTime = `${day}/${month}/${year}`
return newTime
}

export default getDate

