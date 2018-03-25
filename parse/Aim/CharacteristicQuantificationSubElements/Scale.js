/*
this is one of CharacteristicQuantification's sub element
  *CharacteristicQuantification's all possible elements:
    **Scale

    **Interval
    **NonQuantifiable
    **Numerical
    **Quantile
*/

var Scale = function(params) {
  var self = this;
  this.value="";
  this.valueDescription="";
  this.valueLabel="";
  this.scaleLevel={} ;
//*** private
  function constructor() {
    if (params !== null && params !== undefined) {
      if (params.value !== null && params.value !== undefined) {
        self.value = params.value;
      }
      if (params.valueDescription !== null && params.valueDescription !== undefined) {
        self.valueDescription = params.valueDescription;
      }
      if (params.valueLabel !== null && params.valueLabel !== undefined) {
        self.valueLabel = params.valueLabel;
      }
      if (params.scaleLevel !== null && params.scaleLevel !== undefined) {
        self.scaleLevel = params.scaleLevel;
      }
    }
  }
  this.getValue = function() {
		return this.value;
	};

	this.setValueDescription = function(valueDescription) {
		this.valueDescription = valueDescription;
	};

	this.getValueLabel = function() {
		return this.valueLabel;
	};

	this.setValueLabel = function(valueLabel) {
		this.valueLabel = valueLabel;
	};

	this.getScaleLevel = function () {
		return this.scaleLevel;
	};

	this.setScaleLevel = function(scaleLevel) {
		this.scaleLevelAIMTemlates = scaleLevel;
	};

  constructor();
};
