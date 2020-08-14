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

export function windConverter(deg){
  const dictonary = {
    "С":348.75-11.25,
    "":11.25 - 33.75,
    NE:33.75 - 56.25,
    ENE:56.25 - 78.75,
    E:78.75 - 101.25,
    ESE:101.25 - 123.75,
    SE:123.75 - 146.25,
    SSE:146.25 - 168.75,
    S:168.75 - 191.25,
    SSW:191.25 - 213.75,
    SW:213.75 - 236.25,
    WSW:236.25 - 258.75,
    W:258.75 - 281.25,
    WNW:281.25 - 303.75,
    NW:303.75 - 326.25,
    NNW:326.25 - 348.75,
  }
}

