/**
 *  Load dependencies
 */
var constants  = require('../constants');
	
	
/**
 * Returns an array of options corresponding to the question, in ascending
 * order of weight. Usage will generally be: cvwocodem_getoptions('question')
 *
 * @param {String} question
 * 		The question text (identifier), must be unique
 * @param {Callback} next
 *
 * @return
 *   ARRAY if succeeds, 0 if fails
 */
exports.codem_getoptions = function(question){
	//for we are going to use this but need to fetch it from database
	switch(question) {
  		case constants.CMQ_COMPANY_TYPE:
			return {
	        	"0": "Please select..."
				,"1": "Sole Proprietor"
				,"2": "Partnership"
				,"3": "Private Limited"
	    	};
		case constants.CMQ_COMPANY_INDUSTRY:
			return {
				"0": "Please select..."
		        ,"1": "Accounting/Audit/Tax Services"
		        ,"2": "Advertising/Public relations/Marketing Services"
		        ,"3": "Education"
		        ,"4": "Engineering - Electrical/Electronic/Mechanical"
		        ,"5": "Banking & Financial Services"
		        ,"6": "Manufacturing"
		    };
	}
}