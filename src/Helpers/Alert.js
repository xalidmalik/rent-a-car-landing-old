// import Swal from "sweetalert2";
import Swal from "sweetalert2/src/sweetalert2.js";

export const AlertSwal = (title, type) => {
  return Swal.fire({
    title: title,
    type: "success",
    showConfirmButton: false,
    timer: 1000
  });
};

export const AlertSwalDelete = resultCallBack => {
  return Swal.fire({
    title: "Silmek istediğinize emin misiniz?",
    text: "Bu işlem geri alınamaz!",
    type: "warning",
    showCancelButton: true,
    confirmButtonColor: "#e53e3e",
    cancelButtonColor: "",
    confirmButtonText: "Evet, eminim!",
    cancelButtonText: "Vazgeç"
  }).then(result => {
    resultCallBack(result.value);
  });
};
