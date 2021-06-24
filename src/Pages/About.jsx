import React from "react";
import PageLayout from "../Component/Layout/PageLayout";
import { useSpring, animated } from "react-spring";

const About = props => {
  const entryStyle = useSpring({
    from: { opacity: 0, transform: "translate3d(0px, 10rem, 0px)" },
    to: { opacity: 1, transform: "translate3d(0px, 0, 0px)" },
    config: { mass: 1, tension: 200, friction: 40 },
    delay: 100
  });
  const H1entryStyle = useSpring({
    from: { opacity: 0, transform: "translate3d(0px, 5rem, 0px)" },
    to: { opacity: 1, transform: "translate3d(0px, 0, 0px)" },
    config: { mass: 1, tension: 200, friction: 40 },
    delay: 0
  });
  return (
    <PageLayout>
      <animated.h2 style={H1entryStyle} className="text-center mb-5">
        Müşterimiz değil, Ailemiz olun!
      </animated.h2>
      <animated.div style={entryStyle}>
        <p className="text-center font-weight-light text-muted">
          Ayaz Araç Kiralama ailesi olarak, müşteri memnuniyeti bizim için her
          zaman en önemli unsurdur. Yerel olarak hizmet vermekte olmamıza
          rağmen, Türkiye genelinde de hizmet kalitesini arttırarak büyüme
          hedefindeyiz. Ayaz Araç Kiralama ayrıcalıklı olarak transfer ve taksi
          hizmetleri de vermektedir. Şimdilik sadece Kastamonu ilinde hizmet
          verilmektedir. Ayrıca sadece Türkiye vatandaşları değil, ilimize
          gezmeye gelen yabancılarda transfer hizmetinden faydalanabilir.
        </p>
        <p className="text-center font-weight-light text-muted">
          Müşteri puan sistemi, referanstan kazan, VİP üyelik gibi sektörede
          yenilikçi ve öncü olacak fikirleri hayata geçirecek vizyonda
          olduğumuzu biliyor ve bunun için durmadan çalışıyoruz .
        </p>
      </animated.div>
    </PageLayout>
  );
};

export default About;
