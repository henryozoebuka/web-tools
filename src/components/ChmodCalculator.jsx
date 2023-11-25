import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import $ from 'jquery';

function ChmodCalculator() {
  useEffect(() => {
    // Your jQuery code goes here
    $(function(){
	
  
		function calculatePermissions() {
			var ownerRead;
			var ownerWrite;
			var ownerExecute;
	
			var groupRead;
			var groupWrite;
			var groupExecute;
	
			var othersRead;
			var othersWrite;
			var othersExecute;
		  // Calculate owner permissions
		  ownerRead = $("#owner-read").prop("checked") ? 4 : 0;
		  ownerWrite = $("#owner-write").prop("checked") ? 2 : 0;
		  ownerExecute = $("#owner-execute").prop("checked") ? 1 : 0;
	  
		  // Calculate group permissions
		  groupRead = $("#group-read").prop("checked") ? 4 : 0;
		  groupWrite = $("#group-write").prop("checked") ? 2 : 0;
		  groupExecute = $("#group-execute").prop("checked") ? 1 : 0;
	  
		  // Calculate others permissions
		  othersRead = $("#others-read").prop("checked") ? 4 : 0;
		  othersWrite = $("#others-write").prop("checked") ? 2 : 0;
		  othersExecute = $("#others-execute").prop("checked") ? 1 : 0;
	  
		  // Calculate the total permissions
		  var owner = ownerRead + ownerWrite + ownerExecute;
		  var group = groupRead + groupWrite + groupExecute;
		  var others = othersRead + othersWrite + othersExecute;
	  
		  var all = owner +""+ group +""+ others;
	  
		  // Update the displayed total permissions
		  $("#chmod-input-1").val(all); 
		}
	  
		// Event listeners for checkbox changes
		$(".checks input[type='checkbox']").change(function() {
		  calculatePermissions();
		});
	  
		// Initial calculation on page load
		calculatePermissions();
	
	
		
	  
		function writePermissions() {
			var ownerRead;
			var ownerWrite;
			var ownerExecute;
	
			var groupRead;
			var groupWrite;
			var groupExecute;
	
			var othersRead;
			var othersWrite;
			var othersExecute;
	
		  // Write owner permissions
		  ownerRead = $("#owner-read").prop("checked") ? "r" : "-";
		  ownerWrite = $("#owner-write").prop("checked") ? "w" : "-";
		  ownerExecute = $("#owner-execute").prop("checked") ? "x" : "-";
	  
		  // Write group permissions
		  groupRead = $("#group-read").prop("checked") ? "r" : "-";
		  groupWrite = $("#group-write").prop("checked") ? "w" : "-";
		  groupExecute = $("#group-execute").prop("checked") ? "x" : "-";
	  
		  // Write others permissions
		  othersRead = $("#others-read").prop("checked") ? "r" : "-";
		  othersWrite = $("#others-write").prop("checked") ? "w" : "-";
		  othersExecute = $("#others-execute").prop("checked") ? "x" : "-";
	  
		  // Write the total permissions
		  var owner = ownerRead + ownerWrite + ownerExecute;
		  var group = groupRead + groupWrite + groupExecute;
		  var others = othersRead + othersWrite + othersExecute;
	  
		  var all = owner + group + others;
	  
		  // Update the displayed total permissions
		  $("#chmod-input-2").val(all);
		}
	  
		// Event listeners for checkbox changes
		$(".checks input[type='checkbox']").change(function() {
		  writePermissions();
		});
	  
		// Initial permissions on page load
		writePermissions();
	
	  });
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <div>
		<main className='chmod-main-grid'>
			<div className="secure" bis_skin_checked="1"><p>Chmod Calculator</p></div>
  			
			<div className="d-flex cmg">
				<div className="checks mb-3 mt-5 cmg1">
					<p><strong>Owner</strong></p>
					<div className="mt-2 d-flex"><input type="checkbox" className="mr-2" name="owner1" id="owner-read" /> <label htmlFor="owner-read">Read</label></div>
					<div className="mt-3 d-flex"><input type="checkbox" className="mr-2" name="owner2" id="owner-write" /> <label htmlFor="owner-write">Write</label></div>
					<div className="mt-3 d-flex"><input type="checkbox" className="mr-2" name="owner4" id="owner-execute" /> <label htmlFor="owner-execute">Execute</label> </div>
				</div>
				<div className="checks mb-3 mt-5 cmg1">
					<p><strong>Group</strong></p>
					<div className="mt-2 d-flex"><input type="checkbox" className="mr-2" name="group1" id="group-read" /> <label htmlFor="group-read">Read</label> </div>
					<div className="mt-3 d-flex"><input type="checkbox" className="mr-2" name="group2" id="group-write" /> <label htmlFor="group-write">Write</label> </div>
					<div className="mt-3 d-flex"><input type="checkbox" className="mr-2" name="group4" id="group-execute" /> <label htmlFor="group-execute">Execute</label> </div>
				</div>
				<div className="checks mb-3 mt-5 cmg1">
					<p><strong>Others</strong></p>
					<div className="mt-2 d-flex"><input type="checkbox" className="mr-2" name="other1" id="others-read" /> <label htmlFor="others-read">Read</label></div>
					<div className="mt-3 d-flex"><input type="checkbox" className="mr-2" name="other2" id="others-write" /> <label htmlFor="others-write">Write</label></div>
					<div className="mt-3 d-flex"><input type="checkbox" className="mr-2" name="other4" id="others-execute" /> <label htmlFor="others-execute">Execute</label></div>
				</div>
        	</div>
        
			<div className="row chmod-input my-5 mx-auto">
				<div className="col-6"><input type="text" name = "t_total" placeholder="555" id="chmod-input-1" /></div>
				<div className="col-6"><input type="text" name = "sym_total" placeholder="rw-rw-rw-" id="chmod-input-2" /></div>
			</div>

      	</main>
	  </div>
  );
}

export default ChmodCalculator;
