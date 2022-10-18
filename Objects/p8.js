let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

let newObj = copyObj(objToCopy);
console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);       // => { foo: 1, qux: 3 }

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);       // => { bar: 2 }



function copyObj(obj, keys){
  let output = {}
  if (keys) {
    for(let i = 0; i < keys.length; i+=1){
      key = keys[i];
      val = obj[key];
      output[key] = val;
    }
    return output;
  } else {
    return Object.assign(output,obj);
  }
} 