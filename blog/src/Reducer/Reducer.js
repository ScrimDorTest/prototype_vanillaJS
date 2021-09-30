let defaultData = [
  { id: 0, name: '신발1', quan: 2 },
  { id: 1, name: '신발2', quan: 1 },
  { id: 2, name: '신발3', quan: 0 },
];

function reducer1(state = defaultData, action) {
  let newArray = [...state];
  switch (action.type) {
    case '장바구니':
      let filtered = newArray.findIndex((v) => {
        return v.id === action.payload.id;
      }); // array.findIndex(array => { return 조건~~~~}); === 조건에 부합하는 객체를 찾아서 몇 번째에 있는지 출력해준다.
      if (filtered >= 0) {
        newArray[filtered].quan++;
        return newArray;
      } else {
        newArray.push(action.payload);
        return newArray;
      }
    case '수량증가':
      action.임시.quan++;
      return newArray;
    case '수량감소':
      if (action.임시.quan > 0) {
        action.임시.quan--;
      }
      return newArray;
    default:
      return state;
  }

  // if (action.type === '장바구니') {
  //   let newArray = [...state];
  //   let filtered = newArray.findIndex((v) => {
  //     return v.id === action.payload.id;
  //   }); // array.findIndex(array => { return 조건~~~~}); === 조건에 부합하는 객체를 찾아서 몇 번째에 있는지 출력해준다.
  //   if (filtered >= 0) {
  //     newArray[filtered].quan++;
  //     return newArray;
  //   } else {
  //     newArray.push(action.payload);
  //     return newArray;
  //   }
  // } else if (action.type === '수량증가') {
  //   let newArray = [...state];
  //   action.임시.quan++;
  //   return newArray;
  // } else if (action.type === '수량감소') {
  //   let newArray = [...state];
  //   if (action.임시.quan > 0) {
  //     action.임시.quan--;
  //   }
  //   return newArray;
  // } else {
  //   return state;
  // }
}

function reducer2(state = true, action) {
  if (action.type === '닫기') {
    return false;
  } else {
    return state;
  }
}

let Reducer = { reducer1, reducer2 };

export default Reducer;
