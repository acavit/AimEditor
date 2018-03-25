/*
this is one of CharacteristicQuantification's sub element
  *CharacteristicQuantification's all possible elements:
    **NonQuantifiable

    **Interval
    **Scale
    **Numerical
    **Quantile
*/

var NonQuantifiable = function(params) {
  var self = this;
  this.codeValue = "";
  this.codeMeaning = "";
  this.codingSchemeDesignator = "";
  this.codingSchemeVersion = "";
  this.valueDescription = "";
  this.defaultAnswer = false;
  this.nextId = "";
  this.noMoreQuestions = false;
//*** private
  function constructor() {
    if (params !== null && params !== undefined) {
      if (params.codeValue !== null && params.codeValue !== undefined) {
        self.codeValue = params.codeValue;
      }
      if (params.codeMeaning !== null && params.codeMeaning !== undefined) {
        self.codeMeaning = params.codeMeaning;
      }
      if (params.codingSchemeDesignator !== null && params.codingSchemeDesignator !== undefined) {
        self.codingSchemeDesignator = params.codingSchemeDesignator;
      }
      if (params.codingSchemeVersion !== null && params.codingSchemeVersion !== undefined) {
        self.codingSchemeVersion = params.codingSchemeVersion;
      }
      if (params.valueDescription !== null && params.valueDescription !== undefined) {
        self.valueDescription = params.valueDescription;
      }
      if (params.defaultAnswer !== null && params.defaultAnswer !== undefined) {
        self.defaultAnswer = params.defaultAnswer;
      }
      if (params.nextId !== null && params.nextId !== undefined) {
        self.nextId = params.nextId;
      }
      if (params.noMoreQuestions !== null && params.noMoreQuestions !== undefined) {
        self.noMoreQuestions = params.noMoreQuestions;
      }
    }
  }


  this.getCodeValue = function(){
	   return this.codeValue;
	};

	this.setCodeValue = function(codeValue) {
	   this.codeValue = codeValue;
	};

	this.getCodeMeaning = function() {
	   return this.codeMeaning;
	};

	this.setCodeMeaning = function(codeMeaning) {
	   this.codeMeaning = codeMeaning;
	};

	this.getCodingSchemeDesignator = function () {
	   return this.codingSchemeDesignator;
	};

	this.setCodingSchemeDesignator = function(codingSchemeDesignator) {
	   this.codingSchemeDesignator = codingSchemeDesignator;
	};

	this.getCodingSchemeVersion = function() {
	   return this.codingSchemeVersion;
	};

	this.setCodingSchemeVersion = function(codingSchemeVersion) {
	   this.codingSchemeVersion = codingSchemeVersion;
	};

	this.getValueDescription = function() {
	   return this.valueDescription;
	};

  this.setValueDescription = function(valueDescription) {
		this.valueDescription = valueDescription;
	};

	this.getDefaultAnswer = function() {
		return this.defaultAnswer;
	};

	this.setDefaultAnswer = function(defaultAnswer) {
		this.defaultAnswer = defaultAnswer;
	};

	this.getNextId = function() {
		return this.nextId;
	};

	this.setNextId = function(nextId) {
		this.nextId = nextId;
	};

	this.getNoMoreQuestions = function() {
		return this.noMoreQuestions;
	};

	this.setNoMoreQuestions = function(noMoreQuestions) {
		this.noMoreQuestions = noMoreQuestions;
	};

  constructor();
};
/*
example:
var myObj = new NonQuantifiable({codeValue: "here code value", codeMeaning: "here code meaning!"});
console.log(myObj.getCodeValue());
console.log(myObj.getCodeMeaning());
*/
