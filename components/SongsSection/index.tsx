import PageIndicator from "../PageIndicator";

const SongsSection = () => {
  return (
    <>
    <div className="flex  justify-center items-center">
      <div className="bg-red-500">
        <h1>Songs</h1>
        <div>
          <div>
            <div>
              <div className="w-[300px] h-[300px] bg-zinc-500">
                <img></img>
              </div>
              <div></div>
            </div>
            <div>
            </div>
          </div>
          <div >
            <h3>The immortal night of thoughts</h3>
            <div>
              <button>Prev</button>
              <button>Play/Pause</button>
              <button>Next</button>
            </div>
          </div>
        </div>
      </div>
        <div className="bg-blue-300">
          <div className="vynl-tracker w-[300px] h-[300px] bg-pink-100"></div>
          <div>
            <div>Bar</div>
            <div>4/13</div>
          </div>
        </div>
      </div>
      <PageIndicator pageTitle="Forest of Songs"></PageIndicator>
    </>
  )
}

export default SongsSection;