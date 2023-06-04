import { gsap } from "gsap";
import { useLayoutEffect } from "react";


const HeaderComponent = () => {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // gsap.to("")
    });
  });

  return (
    <div className="flex min-h-screen flex-col justify-center items-center">
      <h1 className="text-9xl font-bold flex align-middle justify-center">Forst</h1>
      <h2 className="text-gray-500">By morishikaa</h2>
    </div>
  );
}

export default HeaderComponent;