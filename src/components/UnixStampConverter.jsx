import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';

function UnixStampConverter() {
  var time = Math.floor(Date.now() / 1000);
  useEffect(() => {
    function epochTimeRead(){
      var now = Math.floor(Date.now() / 1000);
      return $("#epoch-time").val(now);
    }
    
    setInterval(epochTimeRead, 1000);
    
    epochTimeRead();

    
    $(document).ready(()=>{
      

    $('#copy-epoch-time').on('click', function() {
      // Select the text input field
      var epochTimeInput = $('#epoch-time');
      
      // Select the text inside the input field
      epochTimeInput.select();
      
      // Copy the selected text to the clipboard
      document.execCommand('copy');
    });

      
      
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
    
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div>
  
        <main className="main align-items-center" >
          <div className="secure"><p>Unix Stamp Converter</p></div>
          <div className="row mt-5 main-grid utc-1 mb-4">
            <div className="col-md-7 col-sm-12 col-12 d-flex justify-content-start align-items-left"><p className='p-0'>The current Unix epoch time:</p></div>
            <div className="col-md-3 col-sm-6 col-12 d-flex justify-content-center align-items-center unix-input"><input type="text" className="w-100 d-flex align-items-center" id="epoch-time"/></div>
            <div className="col-md-2 col-sm-6 col-12 d-flex justify-content-center align-items-center"><button className="row" id="copy-epoch-time"><i className="bi bi-copy col-1 p-0"></i><p className="col-11">copy</p></button></div>
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
