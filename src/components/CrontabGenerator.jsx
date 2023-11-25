import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';

function CrontabGenerator() {
  useEffect(() => {
    // Your jQuery code goes here
    $(document).ready(() =>{
      var ceToggle = $(".ce-toggle");
      var ceExamples = $(".ce-examples");
      ceToggle.on("click", () =>{
          ceExamples.toggle();
      });
  
      // For Minutes
      $("#select-minutes").on("click", () =>{
          $(".minutes-div").toggle();
      });
  
      
  
  
      $("#minutes-close").on("click", () =>{
        $(".minutes-div").hide();
      });
  
      $(document).on("mouseup", function (e) { 
        if ($(e.target).closest(".minutes-div").length === 0) {
          $(".minutes-div").hide();
        } 
      });
  
  
      $('#check-all-minutes').click(function() {
        var minutesCheckboxes = $('.minutes-checkboxes input');
        if ($(this).is(':checked')) {
          minutesCheckboxes.prop('checked', true).trigger('change');
        } else {
          minutesCheckboxes.prop('checked', false).trigger('change');
        }
      });
    
    
      // Event listener for the change event of checkboxes
      $('.minutes-checkboxes > div input').change(function() {
        var selectedCheckboxes = $('.minutes-checkboxes > div input:checked');
        var select = $("#select-minutes");
  
        if (selectedCheckboxes.length === 0) {
            // No checkboxes are selected, set the label to "custom period"
            select.text('Custom period');
        } else if (selectedCheckboxes.length <= 3) {
            // Set the label's text to a comma-separated list of selected checkboxes' IDs
            var selectedIDs = selectedCheckboxes.map(function() {
                return $(this).attr('id');
            }).get().join(', ');
  
            select.text(selectedIDs);
        } else {
            // Set the label's text to display the number of selected items
            select.text(selectedCheckboxes.length + ' items selected');
        }
      });
  
  
  
  
      // For Hours
      $("#select-hours").on("click", () =>{
        $(".hours-div").toggle();
      });
  
      $("#hours-close").on("click", () =>{
        $(".hours-div").toggle();
      });
  
      $(document).mouseup(function (e) { 
        if ($(e.target).closest(".hours-div").length === 0) {
          $(".hours-div").hide();
        } 
      });
  
      $('#check-all-hours').click(function() {
        var hoursCheckboxes = $('.hours-checkboxes input');
        if ($(this).is(':checked')) {
          hoursCheckboxes.prop('checked', true).trigger('change');
        } else {
          hoursCheckboxes.prop('checked', false).trigger('change');
        }
      });
    
    
      // Event listener for the change event of checkboxes
      $('.hours-checkboxes > div input').change(function() {
        var selectedCheckboxes = $('.hours-checkboxes > div input:checked');
        var select = $("#select-hours");
  
        if (selectedCheckboxes.length === 0) {
            // No checkboxes are selected, set the label to "custom period"
            select.text('Custom period');
        } else if (selectedCheckboxes.length <= 3) {
            // Set the label's text to a comma-separated list of selected checkboxes' IDs
            var selectedIDs = selectedCheckboxes.map(function() {
                return $(this).attr('id');
            }).get().join(', ');
  
            select.text(selectedIDs);
        } else {
            // Set the label's text to display the number of selected items
            select.text(selectedCheckboxes.length + ' items selected');
        }
      });
  
  
  
      // For Days
      $("#select-days").on("click", () =>{
        $(".days-div").toggle();
      });
  
      $("#days-close").on("click", () =>{
        $(".days-div").toggle();
      });
  
      $(document).mouseup(function (e) { 
        if ($(e.target).closest(".days-div").length === 0) {
          $(".days-div").hide();
        } 
      });
  
      $('#check-all-days').click(function() {
        var daysCheckboxes = $('.days-checkboxes input');
        if ($(this).is(':checked')) {
          daysCheckboxes.prop('checked', true).trigger('change');
        } else {
          daysCheckboxes.prop('checked', false).trigger('change');
        }
      });
    
    
      // Event listener for the change event of checkboxes
      $('.days-checkboxes > div input').change(function() {
        var selectedCheckboxes = $('.days-checkboxes > div input:checked');
        var select = $("#select-days");
  
        if (selectedCheckboxes.length === 0) {
            // No checkboxes are selected, set the label to "custom period"
            select.text('Custom period');
        } else if (selectedCheckboxes.length <= 3) {
            // Set the label's text to a comma-separated list of selected checkboxes' IDs
            var selectedIDs = selectedCheckboxes.map(function() {
                return $(this).attr('id');
            }).get().join(', ');
  
            select.text(selectedIDs);
        } else {
            // Set the label's text to display the number of selected items
            select.text(selectedCheckboxes.length + ' items selected');
        }
      });
  
  
  
      // For Months
      $("#select-months").on("click", () =>{
        $(".months-div").toggle();
      });
  
      $("#months-close").on("click", () =>{
        $(".months-div").toggle();
      });
  
      $(document).mouseup(function (e) { 
        if ($(e.target).closest(".months-div").length === 0) {
          $(".months-div").hide();
        } 
      });
  
      $('#check-all-months').click(function() {
        var monthsCheckboxes = $('.months-checkboxes input');
        if ($(this).is(':checked')) {
          monthsCheckboxes.prop('checked', true).trigger('change');
        } else {
          monthsCheckboxes.prop('checked', false).trigger('change');
        }
      });
    
    
      // Event listener for the change event of checkboxes
      $('.months-checkboxes > div input').change(function() {
        var selectedCheckboxes = $('.months-checkboxes > div input:checked');
        var select = $("#select-months");
  
        if (selectedCheckboxes.length === 0) {
            // No checkboxes are selected, set the label to "custom period"
            select.text('Custom period');
        } else if (selectedCheckboxes.length <= 3) {
            // Set the label's text to a comma-separated list of selected checkboxes' IDs
            var selectedIDs = selectedCheckboxes.map(function() {
                return $(this).attr('id');
            }).get().join(', ');
  
            select.text(selectedIDs);
        } else {
            // Set the label's text to display the number of selected items
            select.text(selectedCheckboxes.length + ' items selected');
        }
      });
  
  
  
          // For Weekday
          $("#select-weekday").on("click", () =>{
            $(".weekday-div").toggle();
          });
  
          $("#weekday-close").on("click", () =>{
            $(".weekday-div").toggle();
          });
  
          $(document).mouseup(function (e) { 
        if ($(e.target).closest(".weekday-div").length === 0) {
          $(".weekday-div").hide();
        } 
      });
      
          $('#check-all-weekday').click(function() {
            var weekdayCheckboxes = $('.weekday-checkboxes input');
            if ($(this).is(':checked')) {
              weekdayCheckboxes.prop('checked', true).trigger('change');
            } else {
              weekdayCheckboxes.prop('checked', false).trigger('change');
            }
          });
        
        
          // Event listener for the change event of checkboxes
          $('.weekday-checkboxes > div input').change(function() {
            var selectedCheckboxes = $('.weekday-checkboxes > div input:checked');
            var select = $("#select-weekday");
      
            if (selectedCheckboxes.length === 0) {
                // No checkboxes are selected, set the label to "custom period"
                select.text('Custom period');
            } else if (selectedCheckboxes.length <= 3) {
                // Set the label's text to a comma-separated list of selected checkboxes' IDs
                var selectedIDs = selectedCheckboxes.map(function() {
                    return $(this).attr('id');
                }).get().join(', ');
      
                select.text(selectedIDs);
            } else {
                // Set the label's text to display the number of selected items
                select.text(selectedCheckboxes.length + ' items selected');
            }
          });      
  });
  
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div>
  
        <main className="main-cron mb-5" >
          <div className="secure"><p>Crontab Generator</p></div>
  
          <div className="row mt-5 d-flex mx-3">
              <div className="d-flex flex-column col-12 col-sm-6 col-md-4 mb-5">
                  <p className="checks"><strong>Minutes</strong></p>
                  <div className="mt-2"><input type="radio" name="crontab-minutes" id="every-minute" /> <label htmlFor="every-minute">Every Minute</label></div>
                  <div className="mt-2"><input type="radio" name="crontab-minutes" id="even-minutes" /> <label htmlFor="even-minutes">Even Minutes</label></div>
                  <div className="mt-2"><input type="radio" name="crontab-minutes" id="odd-minutes" /> <label htmlFor="odd-minutes">Odd Minutes</label></div>
                  <div className="mt-2"><input type="radio" name="crontab-minutes" id="every-5-minutes" /> <label htmlFor="every-5-minutes">Every 5 Minutes</label></div>
                  <div className="mt-2"><input type="radio" name="crontab-minutes" id="every-15-minutes" /> <label htmlFor="every-15-minutes">Every 15 Minutes</label></div>
                  <div className="mt-2"><input type="radio" name="crontab-minutes" id="every-30-minutes" /> <label htmlFor="every-30-minutes">Every 30 Minutes</label></div>
                  <div className="mt-2"><input type="radio" name="crontab-minutes" id="every-30-minutes" /> <label htmlFor="every-30-minutes">Every 30 Minutes</label></div>
                  <div className="mt-2"><input type="radio" name="crontab-minutes" id="every-30-minutes" /> <label htmlFor="every-30-minutes">Every 30 Minutes</label></div>
                  <div className="mt-2 check-div"><input type="radio" name="crontab-minutes" id="select-minutes-radio" /> <label htmlFor="select-minutes-radio" id="select-minutes" className="d-flex justify-content-between px-2">Custom period <i className="bi bi-chevron-down"></i></label>
                    <div className="check-div-child minutes-div">
                      <div className="checkboxes-all">
                        <input type="checkbox" name="" id="check-all-minutes" />
                        <i className="bi bi-x" id="minutes-close"></i>
                      </div>
                      <div className="checkboxes minutes-checkboxes">
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="0" className="mr-2" /><label htmlFor="0">0</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="1" className="mr-2" /><label htmlFor="1">1</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="2" className="mr-2" /><label htmlFor="2">2</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="3" className="mr-2" /><label htmlFor="3">3</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="4" className="mr-2" /><label htmlFor="4">4</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="5" className="mr-2" /><label htmlFor="5">5</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="6" className="mr-2" /><label htmlFor="6">6</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="7" className="mr-2" /><label htmlFor="7">7</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="8" className="mr-2" /><label htmlFor="8">8</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="9" className="mr-2" /><label htmlFor="9">9</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="10" className="mr-2" /><label htmlFor="10">10</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="11" className="mr-2" /><label htmlFor="11">11</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="12" className="mr-2" /><label htmlFor="12">12</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="13" className="mr-2" /><label htmlFor="13">13</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="14" className="mr-2" /><label htmlFor="14">14</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="15" className="mr-2" /><label htmlFor="15">15</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="16" className="mr-2" /><label htmlFor="16">16</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="17" className="mr-2" /><label htmlFor="17">17</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="18" className="mr-2" /><label htmlFor="18">18</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="19" className="mr-2" /><label htmlFor="19">19</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="20" className="mr-2" /><label htmlFor="20">20</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="21" className="mr-2" /><label htmlFor="21">21</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="22" className="mr-2" /><label htmlFor="22">22</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="23" className="mr-2" /><label htmlFor="23">23</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="24" className="mr-2" /><label htmlFor="24">24</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="25" className="mr-2" /><label htmlFor="25">25</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="26" className="mr-2" /><label htmlFor="26">26</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="27" className="mr-2" /><label htmlFor="27">27</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="28" className="mr-2" /><label htmlFor="28">28</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="29" className="mr-2" /><label htmlFor="29">29</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="30" className="mr-2" /><label htmlFor="30">30</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="31" className="mr-2" /><label htmlFor="31">31</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="32" className="mr-2" /><label htmlFor="32">32</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="33" className="mr-2" /><label htmlFor="33">33</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="34" className="mr-2" /><label htmlFor="34">34</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="35" className="mr-2" /><label htmlFor="35">35</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="36" className="mr-2" /><label htmlFor="36">36</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="37" className="mr-2" /><label htmlFor="37">37</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="38" className="mr-2" /><label htmlFor="38">38</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="39" className="mr-2" /><label htmlFor="39">39</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="40" className="mr-2" /><label htmlFor="40">40</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="41" className="mr-2" /><label htmlFor="41">41</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="42" className="mr-2" /><label htmlFor="42">42</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="43" className="mr-2" /><label htmlFor="43">43</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="44" className="mr-2" /><label htmlFor="44">44</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="45" className="mr-2" /><label htmlFor="45">45</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="46" className="mr-2" /><label htmlFor="46">46</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="47" className="mr-2" /><label htmlFor="47">47</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="48" className="mr-2" /><label htmlFor="48">48</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="49" className="mr-2" /><label htmlFor="49">49</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="50" className="mr-2" /><label htmlFor="50">50</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="51" className="mr-2" /><label htmlFor="51">51</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="52" className="mr-2" /><label htmlFor="52">52</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="53" className="mr-2" /><label htmlFor="53">53</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="54" className="mr-2" /><label htmlFor="54">54</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="55" className="mr-2" /><label htmlFor="55">55</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="56" className="mr-2" /><label htmlFor="56">56</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="57" className="mr-2" /><label htmlFor="57">57</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="58" className="mr-2" /><label htmlFor="58">58</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="59" className="mr-2" /><label htmlFor="59">59</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="60" className="mr-2" /><label htmlFor="60">60</label><span></span></div>
                      </div>
                    </div>
                  </div>
              </div>


              <div className="d-flex flex-column col-12 col-sm-6 col-md-4 mb-5">
              <p className="checks"><strong>Hours</strong></p>
                  <div className="mt-2"><input type="radio" name="crontab-hours" id="every-hour" /> <label htmlFor="every-hour">Every Hour</label></div>
                  <div className="mt-2"><input type="radio" name="crontab-hours" id="even-hours" /> <label htmlFor="even-hours">Even Hours</label></div>
                  <div className="mt-2"><input type="radio" name="crontab-hours" id="odd-hours" /> <label htmlFor="odd-hours">Odd Hours</label></div>
                  <div className="mt-2"><input type="radio" name="crontab-hours" id="every-3-hours" /> <label htmlFor="every-3-hours">Every 3 Hours</label></div>
                  <div className="mt-2"><input type="radio" name="crontab-hours" id="every-6-hours" /> <label htmlFor="every-6-hours">Every 6 Hours</label></div>
                  <div className="mt-2"><input type="radio" name="crontab-hours" id="every-12-hours" /> <label htmlFor="every-12-hours">Every 12 Hours</label></div>
                  <div className="mt-2 check-div"><input type="radio" name="crontab-hours" id="select-hours-radio" /> <label htmlFor="select-hours-radio" id="select-hours" className="d-flex justify-content-between px-2">Custom period <i className="bi bi-chevron-down"></i></label>
                    <div className="check-div-child hours-div">
                      <div className="checkboxes-all">
                        <input type="checkbox" name="" id="check-all-hours" />
                        <i className="bi bi-x d-flex justify-content-center align-items-center" id="hours-close"></i>
                      </div>
                      <div className="checkboxes hours-checkboxes">                      
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="Midnight" className="mr-2" /><label htmlFor="Midnight">Midnight</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="1am" className="mr-2" /><label htmlFor="1am">1am</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="2am" className="mr-2" /><label htmlFor="2am">2am</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="3am" className="mr-2" /><label htmlFor="3am">3am</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="4am" className="mr-2" /><label htmlFor="4am">4am</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="5am" className="mr-2" /><label htmlFor="5am">5am</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="6am" className="mr-2" /><label htmlFor="6am">6am</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="7am" className="mr-2" /><label htmlFor="7am">7am</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="8am" className="mr-2" /><label htmlFor="8am">8am</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="9am" className="mr-2" /><label htmlFor="9am">9am</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="10am" className="mr-2" /><label htmlFor="10am">10am</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="11am" className="mr-2" /><label htmlFor="11am">11am</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="Noon" className="mr-2" /><label htmlFor="Noon">Noon</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="1pm" className="mr-2" /><label htmlFor="1pm">1pm</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="2pm" className="mr-2" /><label htmlFor="2pm">2pm</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="3pm" className="mr-2" /><label htmlFor="3pm">3pm</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="4pm" className="mr-2" /><label htmlFor="4pm">4pm</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="5pm" className="mr-2" /><label htmlFor="5pm">5pm</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="6pm" className="mr-2" /><label htmlFor="6pm">6pm</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="7pm" className="mr-2" /><label htmlFor="7pm">7pm</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="8pm" className="mr-2" /><label htmlFor="8pm">8pm</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="9pm" className="mr-2" /><label htmlFor="9pm">9pm</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="10pm" className="mr-2" /><label htmlFor="10pm">10pm</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="11pm" className="mr-2" /><label htmlFor="11pm">11pm</label><span></span></div>                        
                      </div>
                    </div>
                  </div>
              </div>
              <div className="d-flex flex-column col-12 col-sm-6 col-md-4 mb-5">
              <p className="checks"><strong>Days</strong></p>
                  <div className="mt-2"><input type="radio" name="crontab-days" id="every-day" /> <label htmlFor="every-day">Every Day</label></div>
                  <div className="mt-2"><input type="radio" name="crontab-days" id="even-days" /> <label htmlFor="even-days">Even Days</label></div>
                  <div className="mt-2"><input type="radio" name="crontab-days" id="odd-days" /> <label htmlFor="odd-days">Odd Days</label></div>
                  <div className="mt-2"><input type="radio" name="crontab-days" id="every-5-days" /> <label htmlFor="every-5-days">Every 5 Days</label></div>
                  <div className="mt-2"><input type="radio" name="crontab-days" id="every-10-days" /> <label htmlFor="every-10-days">Every 10 Days</label></div>
                  <div className="mt-2"><input type="radio" name="crontab-days" id="every-half-month" /> <label htmlFor="every-half-month">Every Half Month</label></div>
                  <div className="mt-2 check-div"><input type="radio" name="crontab-days" id="select-days-radio" /> <label htmlFor="select-days-radio" id="select-days" className="d-flex justify-content-between px-2">Custom period <i className="bi bi-chevron-down"></i></label>
                    <div className="check-div-child days-div">
                      <div className="checkboxes-all">
                        <input type="checkbox" name="" id="check-all-days" />
                        <i className="bi bi-x" id="days-close"></i>
                      </div>
                      <div className="checkboxes days-checkboxes">                                              
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="1" className="mr-2" /><label htmlFor="1">1</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="2" className="mr-2" /><label htmlFor="2">2</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="3" className="mr-2" /><label htmlFor="3">3</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="4" className="mr-2" /><label htmlFor="4">4</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="5" className="mr-2" /><label htmlFor="5">5</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="6" className="mr-2" /><label htmlFor="6">6</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="7" className="mr-2" /><label htmlFor="7">7</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="8" className="mr-2" /><label htmlFor="8">8</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="9" className="mr-2" /><label htmlFor="9">9</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="10" className="mr-2" /><label htmlFor="10">10</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="11" className="mr-2" /><label htmlFor="11">11</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="12" className="mr-2" /><label htmlFor="12">12</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="13" className="mr-2" /><label htmlFor="13">13</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="14" className="mr-2" /><label htmlFor="14">14</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="15" className="mr-2" /><label htmlFor="15">15</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="16" className="mr-2" /><label htmlFor="16">16</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="17" className="mr-2" /><label htmlFor="17">17</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="18" className="mr-2" /><label htmlFor="18">18</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="19" className="mr-2" /><label htmlFor="19">19</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="20" className="mr-2" /><label htmlFor="20">20</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="21" className="mr-2" /><label htmlFor="21">21</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="22" className="mr-2" /><label htmlFor="22">22</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="23" className="mr-2" /><label htmlFor="23">23</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="24" className="mr-2" /><label htmlFor="24">24</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="25" className="mr-2" /><label htmlFor="25">25</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="26" className="mr-2" /><label htmlFor="26">26</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="27" className="mr-2" /><label htmlFor="27">27</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="28" className="mr-2" /><label htmlFor="28">28</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="29" className="mr-2" /><label htmlFor="29">29</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="30" className="mr-2" /><label htmlFor="30">30</label><span></span></div>                        
                      </div>
                    </div>
                  </div>
              </div>
              <div className="d-flex flex-column col-12 col-sm-6 col-md-4 mb-5">
              <p className="checks"><strong>Months</strong></p>
                  <div className="mt-2"><input type="radio" name="crontab-months" id="every-month" /> <label htmlFor="every-month">Every Month</label></div>
                  <div className="mt-2"><input type="radio" name="crontab-months" id="even-months" /> <label htmlFor="even-months">Even Months</label></div>
                  <div className="mt-2"><input type="radio" name="crontab-months" id="odd-months" /> <label htmlFor="odd-months">Odd Months</label></div>
                  <div className="mt-2"><input type="radio" name="crontab-months" id="every-4-months" /> <label htmlFor="every-4-months">Every 4 Months</label></div>
                  <div className="mt-2"><input type="radio" name="crontab-months" id="every-half-year" /> <label htmlFor="every-half-year">Every Half year</label></div>
                  <div className="mt-2 check-div"><input type="radio" name="crontab-months" id="select-months-radio" /> <label htmlFor="select-months-radio" id="select-months" className="d-flex justify-content-between px-2">Custom period <i className="bi bi-chevron-down"></i></label>
                    <div className="check-div-child months-div">
                      <div className="checkboxes-all">
                        <input type="checkbox" name="" id="check-all-months" />
                        <i className="bi bi-x" id="months-close"></i>
                      </div>
                      <div className="checkboxes months-checkboxes">                      
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="January" className="mr-2" /><label htmlFor="January">January</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="February" className="mr-2" /><label htmlFor="February">February</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="March" className="mr-2" /><label htmlFor="March">March</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="April" className="mr-2" /><label htmlFor="April">April</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="May" className="mr-2" /><label htmlFor="May">May</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="June" className="mr-2" /><label htmlFor="June">June</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="July" className="mr-2" /><label htmlFor="July">July</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="August" className="mr-2" /><label htmlFor="August">August</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="September" className="mr-2" /><label htmlFor="September">September</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="October" className="mr-2" /><label htmlFor="October">October</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="November" className="mr-2" /><label htmlFor="November">November</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="December" className="mr-2" /><label htmlFor="December">December</label><span></span></div>                        
                      </div>
                    </div>
                  </div>
              </div>
              <div className="d-flex flex-column col-12 col-sm-6 col-md-4 mb-5">
                  <p className="checks"><strong>Weekday</strong></p>
                  <div className="mt-2"><input type="radio" name="crontab-weekday" id="every-weekday" /> <label htmlFor="every-weekday">Every Weekday</label></div>
                  <div className="mt-2"><input type="radio" name="crontab-weekday" id="monday-friday" /> <label htmlFor="monday-friday">Monday-Friday</label></div>
                  <div className="mt-2"><input type="radio" name="crontab-weekday" id="weekend-days" /> <label htmlFor="weekend-days">Weekend Days</label></div>
                  <div className="mt-2 check-div"><input type="radio" name="crontab-weekday" id="select-weekday-radio" /> <label htmlFor="select-weekday-radio" id="select-weekday" className="d-flex justify-content-between px-2">Custom period <i className="bi bi-chevron-down"></i></label>
                    <div className="check-div-child weekday-div">
                      <div className="checkboxes-all">
                        <input type="checkbox" name="" id="check-all-weekday" />
                        <i className="bi bi-x" id="weekday-close"></i>
                      </div>
                      <div className="checkboxes weekday-checkboxes">     
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="Sunday" className="mr-2" /><label htmlFor="Sunday">Sunday</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="Monday" className="mr-2" /><label htmlFor="Monday">Monday</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="Tuesday" className="mr-2" /><label htmlFor="Tuesday">Tuesday</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="Wednesday" className="mr-2" /><label htmlFor="Wednesday">Wednesday</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="Thursday" className="mr-2" /><label htmlFor="Thursday">Thursday</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="Friday" className="mr-2" /><label htmlFor="Friday">Friday</label><span></span></div>
                        <div className="d-flex checkboxes-div" tabIndex="0"><input type="checkbox" id="Saturday" className="mr-2" /><label htmlFor="Saturday">Saturday</label><span></span></div>                        
                      </div>
                    </div>
                  </div>
              </div>
          </div>

          

          
          <div className="cte mx-auto mb-1"><strong><p>Command To Execute</p></strong></div>
          <div className="cte mx-auto mb-3"><input type="text" placeholder="rw-rw-rw-" /></div>
        

          <div className="row mx-auto ce mb-3">
              <div className="col-12 ce-div ce-toggle"><p>Command Examples:</p></div>
              <div className="col-12 ce-div ce-examples">
                <p>Execute PHP script:</p>
                <p className="cep">/usr/bin/php /var/www/app/cron.php</p>
                <p>Execute Artisan Command:</p>
                <p className="cep">/usr/bin/php /var/www/laravel/artisan schedule:run</p>
                <p>Access URL:</p>
                <p className="cep">/usr/bin/wget --spider "http://site.com/cron.php"</p>
              </div>
          </div>

          

          <div className="handle mx-auto">
            <div className="mb-3"><strong>How to Handle Execution Output</strong></div>
            <div className="mb-3"><input type="radio" name="handle" id="mute" /><label htmlFor="mute">Mute the execution (Don't save or send output)</label></div>
            <div className="row mx-0 save">
                <div className="col-12 col-md-3 d-flex p-0 mb-3"><input type="radio" name="handle" id="save" /><label htmlFor="save">Save output to file:</label></div>
                <div className="col-12 col-md-5 p-0 mb-3"><input type="text" /></div>
            </div>
            <div className="row mx-0 send">
                <div className="col-12 col-md-3 d-flex p-0 mb-3"><input type="radio" name="handle" id="send" /><label htmlFor="send">Send output to email:</label></div>
                <div className="col-12 col-md-5 d-flex p-0 mb-3"><input type="text" /></div>
            </div>
            <div className="my-5"><a href="/" className="px-4 py-2">Generate Crontab Line</a></div>
            
          </div>
        </main>
  .

      </div>
  );
}

export default CrontabGenerator;
