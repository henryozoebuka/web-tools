import $ from "jquery";


function epochTimeRead(){
  var now = Math.floor(Date.now() / 1000);
  return $("#epoch-time").val(now);
}

setInterval(epochTimeRead, 1000);

epochTimeRead();

var time = Math.floor(Date.now() / 1000);

$(document).ready(()=>{

  
  $("#tth").on("click", () => {
    var timeConvert = $("#time-convert").val();
    var date = new Date(timeConvert * 1000); // Assuming timeConvert is in seconds
  
    var options = {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
      timeZoneName: 'short'
    };
  
    var formattedDate = date.toLocaleString('en-US', options);
    $("#human-date-converted").text(formattedDate);
    $("#human-date-converted").css("color", "white");
  });
  
  
});



//convertEpochTime();

  

function UnixStampConverter() {
    return (
      <div>
  
        <main className="main align-items-center" >
          <div className="secure"><p>Unix Stamp Converter</p></div>
          <div className="row mt-5 main-grid utc-1 mb-4">
            <div className="col-md-7 col-sm-12 col-12 d-flex justify-content-start"><p>The current Unix epoch time:</p></div>
            <div className="col-md-3 col-sm-6 col-12 d-flex justify-content-center mb-3"><input type="text" className="w-100" id="epoch-time"/></div>
            <div className="col-md-2 col-sm-6 col-12 d-flex justify-content-center"><a href="/" className="px-3 py-1 d-flex justify-content-center"><i className="bi bi-copy w-100"></i> Copy</a></div>
          </div>
          <div className="row mb-4 main-grid utc-2">
            <div className="col-md-7 col-sm-6 col-12 d-flex justify-content-center mb-3"><input type="text" className="w-100 h-100" defaultValue={time} id="time-convert"/></div>
            <div className="col-md-5 col-sm-6 col-12"><button className="py-1 d-flex justify-content-center" id="tth">Timestamp to Human date</button></div>
          </div>
          <div id="human-date-converted"></div>
          <div className="row my-4 main-grid utc-3">
            <div className="col-md-4 col-sm-6 col-12 d-flex justify-content-center mb-3 d-picker"><input type="date"  className="w-100 h-100" id="date-picker"/></div>
            <div className="col-md-3 col-sm-6 col-12 mb-3 unix-select-div">
                <select name="" id="unix-select" className="w-100 h-100">
                    <option value="">Local Time</option>
                    <option value="">GMT</option>
                </select>
            </div>
            <div className="col-md-5 col-12"><a href="/" className="d-flex justify-content-center py-1">Human date to Timestamp</a></div>
          </div>
        </main>      
  
      </div>
    );
  }
  
  export default UnixStampConverter;