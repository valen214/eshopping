


export function mapToString<V>(map: Map<string, V>){
  let out = {};
  for(let [k, v] of map){
    if(v instanceof Map){
      out[k] = mapToString(v);
    } else if(typeof v === "object"){
      out[k] = JSON.stringify(v);
    } else{
      out[k] = v;
    }
  }
  return JSON.stringify(out);
}

export function stringToMap(json: string){
  let obj = JSON.parse(json);
  let out = new Map(Object.entries(obj));
  return out;
}

export function randomstring(length: number,
    dict="abcdefghijklmnopqrstuvwxyz" +
         "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"){
  return crypto.getRandomValues(
      new Uint8Array(length)
    ).reduce((l, r) => (
      l + dict[ Math.trunc(r * dict.length / 256) ]
    ), ""
  );
  // String.prototype.charAt() works too as it also takes non-int
};