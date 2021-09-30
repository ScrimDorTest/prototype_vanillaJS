let defaultData = [
  { id: 0, name: '신발1', quan: 2 },
  { id: 1, name: '신발2', quan: 1 },
  { id: 2, name: '신발3', quan: 0 },
];

function reducer1(state = defaultData, action) {
  if (action.type === '장바구니') {
    let newArray = [...state];
    if (
      newArray.filter((v) => {
        return v.id === action.payload.id;
      }).length > 0
    ) {
      newArray[3].quan++;
      return newArray;
    } else {
      newArray.push(action.payload);
      return newArray;
    }
  } else if (action.type === '수량증가') {
    let newArray = [...state];
    action.임시.quan++;
    return newArray;
  } else if (action.type === '수량감소') {
    let newArray = [...state];
    if (action.임시.quan > 0) {
      action.임시.quan--;
    }
    return newArray;
  } else {
    return state;
  }
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
