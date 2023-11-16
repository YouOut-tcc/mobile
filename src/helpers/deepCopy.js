function deepCopyArray(structure) {
  let functions = [];
  let deepCopy;
  // no momento so salva uma function
  structure.forEach((element, index1) => {
    let obj = Object.entries(element);
    obj.forEach((element, index2) => {
      if (typeof element[1] == 'object') {
        functions[index1] = {index: index1, key: element[0], function: element[1]};
        structure[index1][element[0]] = undefined;
      }
    });
  });
  deepCopy = JSON.parse(JSON.stringify(structure));
  deepCopy.forEach((element, index) => {
    if(functions[index]){
      let functionOBJ = functions[index].function;
      let keyOBJ = functions[index].key;

      deepCopy[index][keyOBJ] = functionOBJ;
    }
    
  });
  return deepCopy;
}

export {deepCopyArray};
