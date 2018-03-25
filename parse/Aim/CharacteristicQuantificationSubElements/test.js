
var myObj = new NonQuantifiable({codeValue: "here code value", codeMeaning: "here code meaning!"});
console.log(myObj.getCodeValue());
console.log(myObj.getCodeMeaning());
var scaleLevel1 = new NonQuantifiable({value: "value1", valueLabel: "valueLabel",valueDescription:"valueDescription1",defaultAnswer:"defaultAnswer1",nextId:"nextId1",noMoreQuestions:"noMoreQuestions1"});
var scaleLevel2 = new NonQuantifiable({value: "value2", valueLabel: "valueLabe2",valueDescription:"valueDescription2",defaultAnswer:"defaultAnswer2",nextId:"nextId2",noMoreQuestions:"noMoreQuestions2"});
var someObj = {"0" :  scaleLevel1, "1" :scaleLevel2};
var someObjStr = JSON.stringify(someObj);
//console.log(someObjStr);
var scale1 =  new Scale({value:"scale value",valueDescription:"scale valueDescription", valueLabel:"scale valueLabel", scaleLevel:someObj});

//console.log(scale1.getValue());
//console.log(scale1.getValueLabel());
//console.log(scale1.getScaleLevel());



var template=  $.getJSON("scale.json", function(json) {
    //console.log(json.Template.Component[0]);
    //console.log(Object.keys(json.Template.Component).length);
    //console.log(Object.keys(json.Template.Component[0].ImagingObservation).length);
    //  console.log(json.Template.Component[0].[@label]);
    for (var i = 0; i < json.Template.Component.length; i++){
      console.log("--------------------------");
      var obj = json.Template.Component[i];
      for (var key in obj){
          var attrName = key;
          var attrValue = obj[key];
          console.log(attrName+" : "+ attrValue);
      }
  }
});
