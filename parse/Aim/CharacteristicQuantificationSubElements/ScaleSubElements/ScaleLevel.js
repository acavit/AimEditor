/*
this is one of Scale's sub element
    **ScaleLevel
*/

var ScaleLevel = function(params) {
  var self = this;
  this.value = "";
	this.valueLabel = "";
	this.valueDescription = "";
	this.defaultAnswer = false;
	this.nextId = "";
	this.noMoreQuestions = false;
//*** private
  function constructor() {
    if (params !== null && params !== undefined) {
      if (params.value !== null && params.value !== undefined) {
        self.value = params.value;
      }
      if (params.valueLabel !== null && params.valueLabel !== undefined) {
        self.valueLabel = params.valueLabel;
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
  this.getValue = function() {
		return value;
	};

	this.setValue = function(value) {
		this.value = value;
	};

	this.getValueDescription = function() {
		if (this.valueDescription == null) {
			return this.value;
		}
		return this.valueDescription;
	};

	this.setValueDescription = function(valueDescription) {
		this.valueDescription = valueDescription;
	};

	this.getDefaultAnswer = function() {
		return defaultAnswer;
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
