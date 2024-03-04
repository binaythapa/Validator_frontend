export const returnKeyWithMinComp = (json_data) => {
  let arr_keys = [];
  let arr_len = [];

  Object.keys(json_data).map((key) => {
    arr_keys.push(key);
    arr_len.push(json_data[key].length);
  });

  let min_index = findMinValueIndexOfArray(arr_len);
  return arr_keys[min_index];
  //   [ { pepco_list: 2 }, { new_list: 4 } ]
};

const findMinValueIndexOfArray = (arr) => {
  let min_value = Math.min(...arr);
  let ind = arr.indexOf(min_value);
  return ind;
};
