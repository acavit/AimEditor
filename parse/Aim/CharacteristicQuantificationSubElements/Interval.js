/*
this is one of CharacteristicQuantification's sub element
  *CharacteristicQuantification's all possible elements:
    **Interval

    **NonQuantifiable
    **Scale
    **Numerical
    **Quantile
*/

var Interval = function(params) {
  var self = this;
  this.minValue = 0.0;
	this.maxValue = 0.0;
	this.minOperator = "";
	this.maxOperator = "";
	this.ucumString = "";
	this.valueLabel = "";
	this.valueDescription = "";
	this.askForInput = false;
	this.defaultAnswer = false;
	this.nextId = "";
	this.noMoreQuestions = false;
//*** private
  function constructor() {
    if (params !== null && params !== undefined) {
      if (params.minValue !== null && params.minValue !== undefined) {
        self.minValue = params.minValue;
      }
      if (params.maxValue !== null && params.maxValue !== undefined) {
        self.maxValue = params.maxValue;
      }
      if (params.minOperator !== null && params.minOperator !== undefined) {
        self.minOperator = params.minOperator;
      }
      if (params.maxOperator !== null && params.maxOperator !== undefined) {
        self.maxOperator = params.maxOperator;
      }
      if (params.ucumString !== null && params.ucumString !== undefined) {
        self.ucumString = params.ucumString;
      }
      if (params.valueLabel !== null && params.valueLabel !== undefined) {
        self.valueLabel = params.valueLabel;
      }
      if (params.valueDescription !== null && params.valueDescription !== undefined) {
        self.valueDescription = params.valueDescription;
      }
      if (params.askForInput !== null && params.askForInput !== undefined) {
        self.askForInput = params.askForInput;
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
  this.getMinValue = function() {
		return this.minValue;
	};

	this.setMinValue = function(minValue) {
		this.minValue = minValue;
	};

	this.getMaxValue = function() {
		return this.maxValue;
	};

	this.setMaxValue = function (maxValue) {
		this.maxValue = maxValue;
	};

	this.getMinOperator = function() {
		return this.minOperator;
	};

	this.setMinOperator = function(minOperator) {
		this.minOperator = minOperator;
	};

	this.getMaxOperator = function() {
		return this.maxOperator;
	};

	this.setMaxOperator = function(maxOperator) {
		this.maxOperator = maxOperator;
	};

	this.getUcumString = function() {
		return this.ucumString;
	};

	this.setUcumString = function(ucumString) {
		this.ucumString = ucumString;
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

	this.getAskForInput = function() {
		return this.askForInput;
	};

	this.setAskForInput = function(askForInput) {
		this.askForInput = askForInput;
	};

	thi.getDefaultAnswer = function() {
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
