import PageIndicator from "../../PageIndicator";

const ColumnIndicator = ( ) => {
  return (
    <div>
      <button>Prev</button>
      <h2>1/2</h2>
      <button>Next</button>
    </div>
  )
}

const StoriesSection = () => {
  return(
    <>
      <div>
        <h1>Stories</h1>
      </div>
      <div>
        <div>Story 1 Box</div>
        <div>Story 2 Box</div>
        <ColumnIndicator></ColumnIndicator>
      </div>
      <PageIndicator pageTitle="Forest of Story"></PageIndicator>
    </> 
  )
}

export default StoriesSection;
