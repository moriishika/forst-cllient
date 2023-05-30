import { gsap } from "gsap";
import { useLayoutEffect } from "react";


const HeaderComponent = () => {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // gsap.to("")
    });
  });

  return (
    <>
      <h1 className="text-9xl font-bold flex align-middle justify-center">Forst</h1>
      <h2 className="text-gray-500">By morishikaa</h2>
    </>
  );
}

export default HeaderComponent;