/*
this is one of CharacteristicQuantification's sub element
  *CharacteristicQuantification's all possible elements:
    **Numerical

    **Scale
    **Interval
    **NonQuantifiable
    **Quantile
*/

var Numerical = function(params) {
  var self = this;
  this.codeValue = "";
	this.codeMeaning = "";
	this.codingSchemeDesignator = "";
	this.codingSchemeVersion = "";

	this.value=0.0;
	this.valueDescription="";
	this.defaultAnswer = false;
	this.nextId = "";
	this.noMoreQuestions = false;
	this.askForInput = false;

	this.ucumString="";
	this.operator="";
	this.valueLabel="";
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
      if (params.value !== null && params.value !== undefined) {
        self.value = params.value;
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
      if (params.askForInput !== null && params.askForInput !== undefined) {
        self.askForInput = params.askForInput;
      }
      if (params.ucumString !== null && params.ucumString !== undefined) {
        self.ucumString = params.ucumString;
      }
      if (params.operator !== null && params.operator !== undefined) {
        self.operator = params.operator;
      }
      if (params.valueLabel !== null && params.valueLabel !== undefined) {
        self.valueLabel = params.valueLabel;
      }

    }
  }
  this.getValue = function() {
		return this.value;
	};

	this.setUcumString = function(ucumString) {
		this.ucumString = ucumString;
	};

	this.getUcumString = function() {
		return this.ucumString;
	};

	this.getOperator = function() {
		return this.operator;
	};

	this.setOperator = function(operator) {
		this.operator = operator;
	};

	this.getValueLabel = function() {
		return this.valueLabel;
	};

	this.setValueLabel = function(valueLabel) {
		this.valueLabel = valueLabel;
	};

	this.getValueDescription = function() {
		return this.valueDescription;
	};

	this.setValueDescription = function(valueDescription) {
		this.valueDescription = valueDescription;
	};

	this.setValue = function(value) {
		this.value = value;
	};

	this.getAskForInput = function() {
		return this.askForInput;
	};

	this.setAskForInput = function(askForInput) {
		this.askForInput = askForInput;
	};

	this.setCodeValue = function(codeValue) {
		this.codeValue = codeValue;
	};

	this.getCodeValue = function() {
		return this.codeValue;
	};

	this.setCodeMeaning = function(codeMeaning) {
		this.codeMeaning = codeMeaning;
	};

	this.setCodingSchemeDesignator = function(codingSchemeDesignator) {
		this.codingSchemeDesignator = codingSchemeDesignator;
	};

	this.setCodingSchemeVersion = function(codingSchemeVersion) {
		this.codingSchemeVersion = codingSchemeVersion;
	};


  constructor();
};
