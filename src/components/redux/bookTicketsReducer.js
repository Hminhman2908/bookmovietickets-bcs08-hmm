import { chairArr } from "../data";

const initialState = {
  chairArr: chairArr,
};

export let bookTicketsReducer = (state = initialState, { type, payload }) => {
  let cloneChairArr = [...state.chairArr];
  let selectedSeatNumber = payload;
  switch (type) {
    case "SELECT":
      var locateSeat = findSeatInMap(cloneChairArr, selectedSeatNumber);
      if (locateSeat.found) {
        let seat =
          cloneChairArr[locateSeat.rowIndex].danhSachGhe[locateSeat.seatIndex];
        if (!seat.daDat) {
          seat.daChon = !seat.daChon;
        }
      }
      return { ...state, chairArr: cloneChairArr };
    case "CANCEL":
      var locateSeat1 = findSeatInMap(cloneChairArr, selectedSeatNumber);
      if (locateSeat1.found) {
        cloneChairArr[locateSeat1.rowIndex].danhSachGhe[
          locateSeat1.seatIndex
        ].daChon = false;
      }
      return { ...state, chairArr: cloneChairArr };
    default:
      return state;
  }
};

const findSeatInMap = (theaterMap, selectedSeatNumber) => {
  var rowIndex;
  var seatIndex;
  var found = true;
  var selectedRow = selectedSeatNumber.slice(0, 1);
  var index = theaterMap.findIndex((item) => {
    return item.hang === selectedRow;
  });
  if (index < 0) {
    console.log("Không tìm thấy hàng này:", selectedRow);
    found = false;
  } else {
    var danhSachGhe = theaterMap[index].danhSachGhe;
    var indexSelectedSeat = danhSachGhe.findIndex((item) => {
      return item.soGhe === selectedSeatNumber;
    });
    if (indexSelectedSeat < 0) {
      console.log("Không tìm thấy ghế này:", selectedSeatNumber);
      found = false;
    } else {
      rowIndex = index;
      seatIndex = indexSelectedSeat;
    }
  }
  return {
    found,
    rowIndex,
    seatIndex,
  };
};
