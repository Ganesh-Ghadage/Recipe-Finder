import './loaderStyle.css'

function Loader() {
  return (
    <div id='loader-body'>
        <h1 id='title'>Cooking something for you</h1>
        <div id="cooking">
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div className="bubble"></div>
            <div id="area">
                <div id="sides">
                <div id="pan"></div>
                <div id="handle"></div>
                </div>
                <div id="pancake">
                <div id="pastry"></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Loader