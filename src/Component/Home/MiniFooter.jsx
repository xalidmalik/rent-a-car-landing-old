import React from "react";

const MiniFooter = () => {
  return (
    <>
      <div className="col-36 d-none d-sm-none d-md-block">
        <p
          className="text-center font-weight-light mt-3 text-muted"
          style={{ lineHeight: "1.2" }}
        >
          Ayaz Araç Kiralama ailesi olarak, müşteri memnuniyeti bizim için her
          zaman en önemli unsurdur. Yerel olarak hizmet vermekte olmamıza
          rağmen, Türkiye genelinde de hizmet kalitesini arttırarak büyüme
          hedefindeyiz. Ayaz Araç Kiralama ayrıcalıklı olarak transfer ve taksi
          hizmetleri de vermektedir. Şimdilik sadece Kastamonu ilinde hizmet
          verilmektedir. Ayrıca sadece Türkiye vatandaşları değil, ilimize
          gezmeye gelen yabancılarda transfer hizmetinden faydalanabilir.
        </p>
      </div>
      <div className="col-36 d-flex justify-content-center search-mobile">
        <p className="text center font-weight-light text-muted">
          Bütün Hakları Saklıdır 2019 | <strong>Ayaz Araç Kiralama</strong>
        </p>
      </div>
    </>
  );
};

export default MiniFooter;
