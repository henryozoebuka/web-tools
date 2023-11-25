/* eslint-disable no-unused-vars */
import $ from 'jquery';

$(document).ready(() => {
  let progressBar = $("#progress-bar");
  let slider = $("#slider");
  slider.val(16);
  progressBar.css("width", (slider.val()/45)*100 + "%");

  // Add an event handler to adjust the progress-bar width when the slider value changes
  slider.on('input', function () {
    progressBar.css("width", (slider.val()/45)*100 + "%");
  });
});

// Password generation section

function generatePassword() {
  const length = $('#slider').val();
  const includeNumbers = $('#include-numbers').is(':checked');
  const includeUppercase = $('#include-uppercase').is(':checked');
  const includeLowercase = $('#include-lowercase').is(':checked');
  const excludeSimilar = $('#exclude-similar').is(':checked');

  let charset = '';
  let password = '';

  if (includeNumbers) charset += '0123456789';
  if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  if (includeLowercase) charset += 'abcdefghijklmnopqrstuvwxyz';

  if (excludeSimilar) {
    charset = charset.replace(/[iloIO]/g, ''); // Excluding similar characters
  }

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset.charAt(randomIndex);
  }

  $('#generated-password').val(password);
}

$(document).ready(function() {
  $('#slider').on('input', function() {
    $('#slider-value').text($(this).val());
  });

  $('#generate-password').on('click', function() {
    generatePassword();
  });
});




function PasswordGenerator() {
  return (
    <div>
      <main className="main align-items-center" >
        <div className="secure"><p>Secure Password Generator</p></div>
        <div className="row container" id="main-content">
          <div className="col-12 col-sm-12 col-md-8 d-flex align-items-center mt-5"><input type="text" id="generated-password"/></div>
          <div className="col-12 col-sm-6 col-md-2 my-2"><button className="mt-md-5 mt-2 row" id="copy-password"><i className="bi bi-copy col-1 p-0"></i><p className="col-11">copy</p></button></div>
          <div className="col-12 col-sm-6 col-md-2 my-2"><button className="mt-md-5 mt-2 row" id="generate-password"><i className="bi bi-arrow-clockwise col-1 p-0"></i> <p className="col-11">Generate</p></button></div>
        </div>

        <div className="row container mt-4">
          <div className="col-12 p-slider">
          <div id="current-level">Password Length:&nbsp;<span id="slider-value">16</span></div>
            <input id="slider" type="range" min="0" max="45" className="mt-3" />
            <div id="progress-bar"></div>
            <div id="selector">
              <div id="selector-btn"></div>
            </div>
          </div>
          
        </div>

        <div className="row container mt-5 d-ib-main">
          <div className="col-sm-3 check-text d-ib d-flex mb-3"><input type="checkbox" className="mr-2" /> Singles</div>
          <div className="col-sm-3 check-text d-ib d-flex mb-3"><input type="checkbox" className="mr-2" id="include-numbers"/> Numbers</div>
          <div className="col-sm-3 check-text d-ib d-flex mb-3"><input type="checkbox" className="mr-2" id="include-uppercase"/> Uppercase</div>
          <div className="col-sm-3 check-text d-ib d-flex mb-3"><input type="checkbox" className="mr-2" id="include-lowercase"/> Lowercase</div>
        </div>

        <div className="row container check-text mt-4 mb-5 d-ib-main">
          <div className="col-12 d-flex"><input type="checkbox" className="mr-2" id="exclude-similar"/> Exclude Similar Characters</div>
        </div>
      </main>
    
    </div>
  );
}

export default PasswordGenerator;

