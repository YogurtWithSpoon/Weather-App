export function timeConverter(time){
  let date = new Date(time*1000);
  let minutes = date.getMinutes()>10 ? date.getMinutes() : "0"+date.getMinutes()
  let hours = date.getHours();
  return hours+":"+minutes;
}

export function pressureConverter(pressure){
  return Math.floor(pressure/1.33);
}

export function dateConverter(time){
  return new Date(time*1000).getDate()+"/"+ (new Date(time*1000).getMonth()+1);
}

export function dayConverter(time){
  return new Date(time*1000).getDay();
}

