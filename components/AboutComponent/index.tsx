import Image from "next/image";
import PageIndicator from "../PageIndicator";

const AboutComponent = () => {

  return (
    <>
      <div className="flex min-h-screen w-full justify-center">
        <div className="m-auto">
          <div className="prose h-auto">
          <h1>Hello</h1>
          <h2>My name is Morii Shikaa</h2>
          <p>
            The Creator of the forest full of pages
            filled with the outpouring of hearts and thoughts
          </p>
          <p>
            {`The pages that have been provided in this forest are 
          intended for everyone who just wants to visit, relax 
          and just want to know what's on the mind of a loner at night.
          `}
          </p>
          <p>
            I hope you like this forest and visit this place
            anew in whatever condition your heart is in.
            Nice to know you, hope you like forst and thank you
            for visiting or even intend to come back.
          </p>
          </div>
        </div>
      </div>
      <PageIndicator pageTitle="warm welcome from the forest"></PageIndicator>
    </>
  )
}

export default AboutComponent;