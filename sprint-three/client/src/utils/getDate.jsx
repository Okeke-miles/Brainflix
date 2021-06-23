export function getDate (input){

    //PREVIOUS DATE FORMAT
    // let time = new Date (input)
      
    //     let day = time.getUTCDate();
    //     let month = time.getUTCMonth() + 1;
    //     let year = time.getUTCFullYear();
    //     let newTime = `${day}/${month}/${year}`
    // return newTime
    // }

        let seconds = Math.floor((new Date() - input) / 1000);
      
        var interval = seconds / 31536000;
      
        if (interval > 1) {
          return Math.floor(interval) + " years";
        }
        interval = seconds / 2592000;
        if (interval > 1) {
          return Math.floor(interval) + " months";
        }
        interval = seconds / 86400;
        if (interval > 1) {
          return Math.floor(interval) + " days";
        }
        interval = seconds / 3600;
        if (interval > 1) {
          return Math.floor(interval) + " hours";
        }
        interval = seconds / 60;
        if (interval > 1) {
          return Math.floor(interval) + " minutes";
        }
        return Math.floor(seconds) + " seconds";
      }
    
    export default getDate
    
    