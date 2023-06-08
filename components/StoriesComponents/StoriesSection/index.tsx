import PageIndicator from "../../PageIndicator";

const ColumnIndicator = () => {
  return (
    <div>
      <button>Prev</button>
      <h2>1/2</h2>
      <button>Next</button>
    </div>
  )
}

const StoryBox = () => {
  return (
    <div className="p-4 bg-purple-200 flex flex-col justify-center align-middle w-auto h-auto rounded-lg">
      <img src="/example.jpg" width={300} className="m-auto"></img>
      <h2>Aesther and Edelweis</h2>
    </div>
  )
}

const StoriesSection = () => {
  return (
    <div className="flex flex-col space-y-5">
      <div className="m-auto space-y-5">
        <div className="prose">
          <h1>Stories</h1>
        </div>
        <div className="prose flex space-x-5 items-center">
          <StoryBox></StoryBox>
          <StoryBox></StoryBox>
          <ColumnIndicator></ColumnIndicator>
        </div>
      </div>
      <PageIndicator pageTitle="Forest of Story"></PageIndicator>
    </div>
  )
}

export default StoriesSection;
