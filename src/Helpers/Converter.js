export const StringGearType = typeId => {
  let type = null;
  switch (typeId) {
    case 1:
      type = "Manuel";
      break;
    case 0:
      type = "Otomatik";
      break;
  }
  return type;
};

export const StringGenderType = typeId => {
  let type = null;
  switch (typeId) {
    case 0:
      type = "Erkek";
      break;
    case 1:
      type = "Kadın";
      break;
  }
  return type;
};

export const StringBloodType = typeId => {
  let type = null;
  switch (typeId) {
    case 0:
      type = "AB Rh+";
      break;
    case 1:
      type = "AB Rh-";
      break;
    case 2:
      type = "A Rh+";
      break;
    case 3:
      type = "A Rh-";
      break;
    case 4:
      type = "B Rh+";
      break;
    case 5:
      type = "B Rh-";
      break;
    case 6:
      type = "O Rh+";
      break;
    case 7:
      type = "O Rh-";
      break;
  }
  return type;
};

export const StringFuelType = typeId => {
  let type = null;
  switch (typeId) {
    case 0:
      type = "Benzin";
      break;
    case 1:
      type = "Dizel";
      break;
    case 2:
      type = "Hibrid";
      break;
    case 3:
      type = "Elektrik";
      break;
  }
  return type;
};

export const StringCarClasses = classId => {
  let type = null;
  switch (classId) {
    case 0:
      type = "Eko";
      break;
    case 1:
      type = "Lüks";
      break;
  }
  return type;
};

export const StringReservationStatus = statusId => {
  let type = null;
  switch (statusId) {
    case 0:
      type = "Ön Rezerve";
      break;
    case 1:
      type = "Rezerve";
      break;
    case 2:
      type = "Aktif";
      break;
    case 3:
      type = "Bitmiş";
      break;
  }
  return type;
};
