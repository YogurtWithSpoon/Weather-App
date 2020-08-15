export function timeConverter(time) {
  let date = new Date(time * 1000);
  let minutes = date.getMinutes() > 10 ? date.getMinutes() : "0" + date.getMinutes()
  let hours = date.getHours();
  return hours + ":" + minutes;
}

export function pressureConverter(pressure) {
  return Math.floor(pressure / 1.33);
}

export function dateConverter(time) {
  return new Date(time * 1000).getDate() + "/" + (new Date(time * 1000).getMonth() + 1);
}

export function dayConverter(time) {
  return new Date(time * 1000).getDay();
}

export function windConverter(deg) {
  const dic = {
    'С-СВ': [11.25,33.75],
    'С-В': [33.75,56.25],
    'В-СВ': [56.25,78.75],
    'В': [78.75,101.25],
    'В-ЮВ': [101.25,123.75],
    'ЮВ': [123.75,146.25],
    'Ю-ЮВ': [146.25,168.75],
    'Ю': [168.75,191.25],
    'Ю-ЮЗ': [191.25,213.75],
    'ЮЗ': [213.75,236.25],
    'З-ЮЗ': [236.25,258.75],
    'З': [258.75,281.25],
    'З-СЗ': [281.25,303.75],
    'СЗ': [303.75,326.25],
    'С-СЗ': [326.25,348.75],
    // 'C': [348.75 - 11.25],
  }
  for(let direction in dic){
    if(deg > dic[direction][0] && deg < dic[direction][1]){
      return direction
    }
  }
  return "C";
}

