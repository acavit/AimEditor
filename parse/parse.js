var _out = this;
var domelements  = [];
var ar;
var ids =0;

    var arrayLength = -1;
    var quantileDiva = document.createElement('div');
    var quantileSelecta = document.createElement('select');
    quantileDiva.id='Temp';
    quantileSelecta.id="S1";

    quantileSelecta.className = 'ui dropdown';
    quantileDiva.appendChild(quantileSelecta);
   // parentDiv.appendChild(quantileDiv);
    var quantileOptiona = document.createElement('option');
    quantileOptiona.value = "ATS_Template.json"  ;
    quantileOptiona.innerHTML = "ATS_Template.json"  ;
    var quantileOptionb = document.createElement('option');
    quantileOptionb.value = "BeaulieuBoneTemplate_rev13.json"  ;
    quantileOptionb.innerHTML = "BeaulieuBoneTemplate_rev13.json"  ;
    var quantileOptionc = document.createElement('option');
    quantileOptionc.value = "coordinationTest.json"  ;
    quantileOptionc.innerHTML = "coordinationTest.json"  ;
    var quantileOptiond = document.createElement('option');
    quantileOptiond.value = "Liver_Template_ePad_CFB_rev15.json"  ;
    quantileOptiond.innerHTML = "Liver_Template_ePad_CFB_rev15.json"  ;
    var quantileOptione = document.createElement('option');
    quantileOptione.value = "LT.json"  ;
    quantileOptione.innerHTML = "LT.json"  ;
    var quantileOptionf = document.createElement('option');
    quantileOptionf.value = "asdf.json"  ;
    quantileOptionf.innerHTML = "asdf.json"  ;    
    quantileSelecta.appendChild(quantileOptiona);
    quantileSelecta.appendChild(quantileOptionb);
    quantileSelecta.appendChild(quantileOptionc);
    quantileSelecta.appendChild(quantileOptiond);
    quantileSelecta.appendChild(quantileOptione);
    quantileSelecta.appendChild(quantileOptionf);
     var lblTxt = document.createTextNode("Select template:");
    //document.getElementById('shape').appendChild(lblTxt);
     document.getElementById('tlist').appendChild(quantileSelecta);
   $('document').ready(function(){
           $('select[id^="select"]').dropdown();
      $('select[class^="ui dropdown"]').dropdown();
      $('#selectF1AnatomicCenter').dropdown('setting', 'onChange', function(value){console.log(value);});
      $("#selectF3FunctionalBrainatRiskofResection").dropdown();
       document.getElementById("quantileSelecta").width="300px";
   });
     quantileSelecta.onchange = function (){
  $.getJSON("jsons/"+this.value, function(json) {
              document.getElementById('accordion1').innerHTML='';
              document.getElementById('shape').innerHTML='';
              console.log("first json");
              extractTemplate(json);
        });
           
     };
            

/*
function createCollapseTitle(){


  <div class="ui accordion">
  <div class="title">
    <i class="dropdown icon"></i>
    What is a dog?
  </div>
  <div class="content ">
            <table class="ui definition table">
                <tbody>
                  <tr>
                    <td class="two wide column">Size</td>
                    <td>1" x 2"</td>
                  </tr>
                  <tr>
                    <td>Weight</td>
                      <td>
                          <div class="ui checkbox checked">
                            <input name="example" tabindex="0" class="visible" type="checkbox">
                            <label>Make my profile visible</label>
                      </div>
                  </td>
                  </tr>
                  <tr>
                    <td>Color</td>
                    <td>Yellowish</td>
                  </tr>
                  <tr>
                    <td>Odor</td>
                    <td>Not Much Usually</td>
                  </tr>
                </tbody>
              </table>
  </div>


};
*/
/*
function checkcardinality(){
  alert(a);

}

function addDomElement (parent, domelement) { 
  this.parent=parent;
  // create a new div element 
  var newDiv = document.createElement("div"); 
  // and give it some content 
  //var newContent = document.createTextNode("Hi there and greetings!"); 
  // add the text node to the newly created div
  newDiv.appendChild(domelement);  

  // add the newly created element and its content into the DOM 
  //var currentDiv = document.getElementById("div1"); 
  this.parent.appendChild(newDiv); 
}


           
var createLabel = function(lblText){
  var label = document.createElement('label');
  return label;
}

*/
/*
var sira = [];
function abc(json){
          console.log(json);
          for (var key in json) {
           

                    if (typeof(json[key])=="object") {
                      console.log("key value if object : "+key);
                      if ( (isNaN(key)) && key!="AllowedTerm")
                          sira.push(key);
                        console.log(sira);
                          if (key=="AllowedTerm"){

                            console.log("allowedTerm: " +(json[key]));
                             console.log("parent: "+sira[sira.length-2]);
                         }else{
                            console.log(json[key]);
                           // console.log(json[key].label);
                        
                           }
                        abc(json[key]);
                    }else{
                      sira.pop();
                      console.log("key value if not an object : "+key);
                       //console.log("parent : " + sira[(sira.length)-2]);
                        // console.log(key );
                    }
            
          }


	
}
*/
var self = this;
//var myvar = "allowedTerm";


function extractTemplate(json){
  console.log(json);
  var subObject = null;
  var arrayLength = -1;
  if (Array.isArray(json.Template.Component))
     arrayLength = json.Template.Component.length;
  else
    arrayLength = 1;
  console.log(arrayLength);
  var component = null;
    for (var i = 0 ; i<arrayLength;i++ ){
      if (arrayLength>1)
          component = json.Template.Component[i];
      else
          component = json.Template.Component;
     console.log(component);
      if (component.hasOwnProperty("GeometricShape")){
          GeometricShape(component,component);
        }
        for (var key in component) {
            if (typeof(component[key])=="object"){
              subObject = 1;
              console.log(key);
              self[key](component,component[key],null);
            }
              
        }
    
       
       
    }
}

function QuestionType(parent, object, parentDiv){
  console.log("*******************     QuestionType                       **********************");
 
 console.log("*******************     QuestionType --end                      **********************");

}

function Calculation(parent, object, parentDiv){
  console.log("*******************     Calculation                       **********************");

 console.log("*******************     Calculation --end                      **********************");

}
function CalculationType(parent, object, parentDiv){
  console.log("*******************     CalculationType                       **********************");

 console.log("*******************     CalculationType --end                      **********************");

}

function Inference(parent, object, parentDiv){
  console.log("*******************     Inference                       **********************");

 console.log("*******************     Inference --end                      **********************");

}
function ValidTerm(parent, object, parentDiv){
  console.log("*******************     ValidTerm                       **********************");

 console.log("*******************     ValidTerm --end                      **********************");

}
function GeometricShape(parent, object, parentDiv){
  console.log("*******************     GeometricShape                       **********************");
  var GSDiv = document.createElement('div');
      GSDiv.id = 'block';
      GSDiv.className = 'mylbl';
      GSDiv.style.width = '200px';
      GSDiv.style.height = '20px';
      GSDiv.style.backgroundColor= 'white';
      GSDiv.style.color= 'black';
      GSDiv.innerHTML="Required shape : "+object.GeometricShape;
      document.getElementById('shape').appendChild(GSDiv);
 console.log("*******************     GeometricShape --end                      **********************");

}
function AllowedTerm(parent, object,parentDiv){
  console.log("*******************     Allowed Term                       **********************");
  //console.log("allowed term caled :"+parent+" " + object);
  console.log("allowed terms parent Label : "+parent.label);
  console.log(parent);
  var control;

  var txt =parent.label;

  var maindiv = (txt).replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>/ /\{\}\[\]\\\/]/gi, '');
  var lblTxt = document.createTextNode(parent.label);
  var uiAccordionDiv = document.createElement('div');
  uiAccordionDiv.className = 'ui accordion mylbl';
  var titleDiv = document.createElement('div');
  titleDiv.className = 'title';
  var titleI = document.createElement('i');
  titleI.className = 'dropdown icon';
  var contentDiv = document.createElement('div');
  //iconcav
  var iconI = document.createElement('i');
  iconI.className="red check circle outline icon";
   
  //iconcav
  contentDiv.className = 'content';
  contentDiv.id=maindiv;
   document.getElementById("accordion1").appendChild(uiAccordionDiv);  
    uiAccordionDiv.appendChild(titleDiv);
    //icon cav
    titleDiv.appendChild(iconI);
    titleDiv.appendChild(titleI);
    titleDiv.appendChild(lblTxt);
    uiAccordionDiv.appendChild(contentDiv);

    var mainSelectDiv = document.createElement('div');
    mainSelectDiv.className = "ui container";
   
    var selectDiv = document.createElement('select');
    selectDiv.className = "ui fluid multiple dropdown";
    //selectDiv.multiple=true;
    selectDiv.id='select'+maindiv;
 
    var alertDiv = document.createElement('div');
    alertDiv.className = "floating ui teal label";
   var alertNoDiv= document.createTextNode("22");
   //titleDiv.appendChild(alertDiv);
   //alertDiv.appendChild(alertNoDiv);
   // <div class="floating ui teal label">22</div>
    domelements[maindiv] = new Array(6);
    domelements[maindiv]['id'] = maindiv;
    domelements[maindiv]['label'] = parent.label;
    domelements[maindiv]['min'] = parent.minCardinality;
    domelements[maindiv]['max'] = parent.maxCardinality;
    domelements[maindiv]['selectedCnt'] = 0;
    domelements[maindiv]['selectVerification'] = false;
    
  

   
      console.log("each allowed term  array: "+object);
 
      console.log(object);
    var arrayLength = -1;
    if (Array.isArray(object)){
        
        arrayLength = object.length;

    }else{

        arrayLength = 1;
    }
    var subEObject= null;
      if ( (parent.minCardinality==1) && (parent.maxCardinality==1)){
     control = "radioBtn";
      }else{
         if (arrayLength>4){
        mainSelectDiv.appendChild(selectDiv)
        contentDiv.appendChild(mainSelectDiv);
      }
      }
      for (var i = 0 ; i<arrayLength;i++ ){

          if (arrayLength>1)
            subEObject =object[i];
          else
            subEObject = object;
          var ar;
          ids++;
          if ( control != "radioBtn"){
            if (arrayLength>4)
            {
              ar=new createOption(maindiv,ids, parent.label, "ui ", false , subEObject.codeMeaning);
                selectDiv.appendChild(ar.getelementHtml());
            }
            else{
                ar = new createCheckbox(maindiv,ids, parent.label, "ui checkbox mylbl", subEObject.codeMeaning , subEObject.codeMeaning);
                contentDiv.appendChild(ar.getelementHtml());
              }

          }
          else{

                ar=new createRadio(maindiv,ids, parent.label, "ui radio checkbox mylbl", false , subEObject.codeMeaning);
                contentDiv.appendChild(ar.getelementHtml());
                
          }
          var el = domelements[domelements.length-1];
          for (var key in subEObject) {
                    if (typeof(subEObject[key])=="object"){
                      subObject = 1;
                      console.log("key from alow term :array"+key);
                      self[key](subEObject,subEObject[key],contentDiv);
                    }
                
          }

          console.log("el el el ******");
          console.log("writing meaning : writing meaning between"+subEObject.codeMeaning);
      }
            $('.accordion1').accordion({
              selector: {
                  trigger: '.title'
              }
      });
      
 
   console.log("*******************     Allowed Term---end                       **********************");
}


function ImagingObservation(parent, object , parentDiv){
  console.log("*******************     ImagingObservation                       **********************");
  console.log("imaging observation caled : "+parent+" " + object);
  console.log("imaging observation:"+parent);
  console.log("xx"+object.ImagingObservationCharacteristic);
  console.log("*******************     ImagingObservation--end                       **********************");
  ImagingObservationCharacteristic(object,object.ImagingObservationCharacteristic,null);

}
function ImagingObservationCharacteristic(parent, object , parentDiv){
  console.log("*******************     ImagingObservationCharacteristic                       **********************");

 
  var arrayLength = -1;
    if (Array.isArray(object)){
        
        arrayLength = object.length;

    }else{

        arrayLength = 1;
    }
    var subEObject= null;
  for (var i = 0 ; i<arrayLength;i++ ){
    if (arrayLength>1)
      subEObject =object[i];
    else
      subEObject = object;
          for (var key in subEObject) {
                    if (typeof(subEObject[key])=="object"){
                      subObject = 1;
                      console.log("key from imageobserv char"+key);
                      self[key](subEObject,subEObject[key],null);
                    }
                      
                }
  }
   //document.getElementById("accordion1").innerHTML+="</div>";
  console.log("*******************     ImagingObservationCharacteristic--end                       **********************");

}

function CharacteristicQuantification(parent, object, parentDiv){
    console.log("*******************     CharacteristicQuantification                       **********************");
    console.log(parent);
  console.log(object);

    var arrayLength = -1;
    if (Array.isArray(object)){
        
        arrayLength = object.length;

    }else{

        arrayLength = 1;
    }
    var subEObject= null;
  for (var i = 0 ; i<arrayLength;i++ ){
    if (arrayLength>1)
      subEObject =object[i];
    else
      subEObject = object;
          for (var key in subEObject) {
                    if (typeof(subEObject[key])=="object"){
                      subObject = 1;
                      console.log(key);
                      self[key](subEObject,subEObject[key],parentDiv);
                    }
                      
                }
  }

   console.log("*******************     CharacteristicQuantification --end                     **********************");
}

function AnatomicEntity(parent, object , parentDiv){
  console.log("AnatomicEntity");
     console.log("*******************     AnatomicEntity                     **********************");
        var arrayLength = -1;
    if (Array.isArray(object)){
        
        arrayLength = object.length;

    }else{

        arrayLength = 1;
    }
    var subEObject= null;
  for (var i = 0 ; i<arrayLength;i++ ){
    if (arrayLength>1)
      subEObject =object[i];
    else
      subEObject = object;
          for (var key in subEObject) {
                    if (typeof(subEObject[key])=="object"){
                      subObject = 1;
                      console.log(key);
                      self[key](subEObject,subEObject[key],null);
                    }
                      
                }
         
  }
     console.log("*******************     AnatomicEntity   --end                  **********************");
}

function AnatomicEntityCharacteristic(parent, object, parentDiv){
  console.log("AnatomicEntityCharacteristic");
   console.log("*******************     AnatomicEntityCharacteristic                  **********************");
          var arrayLength = -1;
    if (Array.isArray(object)){
        
        arrayLength = object.length;

    }else{

        arrayLength = 1;
    }
    var subEObject= null;
  for (var i = 0 ; i<arrayLength;i++ ){
    if (arrayLength>1)
      subEObject =object[i];
    else
      subEObject = object;
          for (var key in subEObject) {
                    if (typeof(subEObject[key])=="object"){
                      subObject = 1;
                      console.log(key);
                      self[key](subEObject,subEObject[key],null);
                    }
                      
                }
         
  }
console.log("*******************     AnatomicEntityCharacteristic  --end                **********************");
}

function Scale(parent, object, parentDiv){
  
  console.log("Scale");
console.log("*******************     Scale                **********************");
      var arrayLength = -1;
    if (Array.isArray(object)){
        
        arrayLength = object.length;

    }else{

        arrayLength = 1;
    }
    var subEObject= null;
  for (var i = 0 ; i<arrayLength;i++ ){
    if (arrayLength>1)
      subEObject =object[i];
    else
      subEObject = object;
          for (var key in subEObject) {
                    if (typeof(subEObject[key])=="object"){
                      subObject = 1;
                      console.log(key);
                      self[key](subEObject,subEObject[key], parentDiv);
                    }
                      
                }
     
  }
console.log("*******************     Scale     --end           **********************");
}

function ScaleLevel(parent, object, parentDiv){
  
  console.log("ScaleLevel");
console.log("*******************     ScaleLevel                **********************");
		var arrayLength = -1;
		var quantileDiv = document.createElement('div');
		var quantileSelect = document.createElement('select');
		quantileSelect.className = 'ui dropdown';
		quantileDiv.appendChild(quantileSelect);
		parentDiv.appendChild(quantileDiv);
    if (Array.isArray(object)){
        
        arrayLength = object.length;

    }else{

        arrayLength = 1;
    }
    var subEObject= null;
  for (var i = 0 ; i<arrayLength;i++ ){
    if (arrayLength>1)
      subEObject =object[i];
    else
      subEObject = object;
          for (var key in subEObject) {
                    if (typeof(subEObject[key])=="object"){
                      subObject = 1;
                      console.log(key);
                      self[key](subEObject,subEObject[key], null);
                    }
                      
                }

        var quantileOption = document.createElement('option');
                quantileOption.innerHTML = subEObject.value  ;
				
				 quantileSelect.appendChild(quantileOption);
				   
          console.log(subEObject.valueLabel);
          //console.log(subEObject);
  }
console.log("*******************     ScaleLevel     --end           **********************");
}

function Numerical(parent, object, parentDiv){
  
  console.log("*******************     Numerical                    **********************");
  
  console.log("Numerical");

    var arrayLength = -1;
		var quantileDiv = document.createElement('div');
		var quantileSelect = document.createElement('select');
    quantileSelect.className = 'ui dropdown';
		
		quantileDiv.appendChild(quantileSelect);
		parentDiv.appendChild(quantileDiv);
    if (Array.isArray(object)){
        
        arrayLength = object.length;

    }else{

        arrayLength = 1;
    }
    var subEObject= null;
  for (var i = 0 ; i<arrayLength;i++ ){
    if (arrayLength>1)
      subEObject =object[i];
    else
      subEObject = object;
          for (var key in subEObject) {
                    if (typeof(subEObject[key])=="object"){
                      subObject = 1;
                      console.log(key);
                      self[key](subEObject,subEObject[key],null);
                    }
                      
                }
        
		var quantileOption = document.createElement('option');
        quantileOption.innerHTML = subEObject.operator + " "+subEObject.valueLabel   ;
		quantileSelect.appendChild(quantileOption);
        console.log(subEObject.valueLabel +"  "+subEObject.operator+"  "+subEObject.value);
  }
console.log("*******************     Numerical --end                     **********************");

}

function Quantile(parent, object, parentDiv){
  
   console.log("*******************     Quantile                    **********************");
  
  console.log("Quantile");

    var arrayLength = -1;
    if (Array.isArray(object)){
        
        arrayLength = object.length;

    }else{

        arrayLength = 1;
    }
    var subEObject= null;
  for (var i = 0 ; i<arrayLength;i++ ){
    if (arrayLength>1)
      subEObject =object[i];
    else
      subEObject = object;
          for (var key in subEObject) {
                    if (typeof(subEObject[key])=="object"){
                      subObject = 1;
                      console.log(key);
                      self[key](subEObject,subEObject[key], null);
                    }
                      
                }
                var quantileDiv = document.createElement('div');
                var quantileSelect = document.createElement('select');
                quantileSelect.className = 'ui dropdown';
                var quantileOption = document.createElement('option');
                quantileDiv.appendChild(quantileSelect);
                quantileSelect.appendChild(quantileOption);
                parentDiv.appendChild(quantileDiv);
                quantileOption.innerHTML = subEObject.maxValue +"  "+subEObject.minValue+"  "+subEObject.bins+"  "+subEObject.defaultBin ;
          console.log(subEObject.maxValue +"  "+subEObject.minValue+"  "+subEObject.bins+"  "+subEObject.defaultBin);
  }
console.log("*******************     Quantile --end                     **********************");

}

function Interval(parent, object, parentDiv){
  console.log("*******************     Interval                    **********************");
  
  console.log("Interval");

    var arrayLength = -1;
    if (Array.isArray(object)){
        
        arrayLength = object.length;

    }else{

        arrayLength = 1;
    }
    var subEObject= null;
    var intervalDiv = document.createElement('div');
    var intervalSelect = document.createElement('select');
    intervalSelect.className = 'ui dropdown';
    
   
    intervalDiv.appendChild(intervalSelect);
    for (var i = 0 ; i<arrayLength;i++ ){
      if (arrayLength>1)
        subEObject =object[i];
      else
        subEObject = object;
            for (var key in subEObject) {
                      if (typeof(subEObject[key])=="object"){
                        subObject = 1;
                        console.log(key);
                        self[key](subEObject,subEObject[key],null);
                      }
                        
                  }
                  var intervalOption = document.createElement('option');
                  intervalOption.innerHTML = subEObject.valueLabel;
                  intervalSelect.appendChild(intervalOption);
                  
                 
            console.log(subEObject.maxValue +"  "+subEObject.minValue+"  "+subEObject.minOperator+"  "+subEObject.maxOperator+"  "+subEObject.valueLabel);
    }
    parentDiv.appendChild(intervalDiv);
console.log("*******************     Interval --end                     **********************");
}

function NonQuantifiable(parent, object, parentDiv){
  
  console.log("*******************     NonQuantifiable                    **********************");
  
  console.log("NonQuantifiable");

    var arrayLength = -1;
		var quantileDiv = document.createElement('div');
		var quantileSelect = document.createElement('select');
		quantileSelect.className = 'ui dropdown';
		quantileDiv.appendChild(quantileSelect);
		parentDiv.appendChild(quantileDiv);
    if (Array.isArray(object)){
        
        arrayLength = object.length;

    }else{

        arrayLength = 1;
    }
    var subEObject= null;
  for (var i = 0 ; i<arrayLength;i++ ){
    if (arrayLength>1)
      subEObject =object[i];
    else
      subEObject = object;
          for (var key in subEObject) {
                    if (typeof(subEObject[key])=="object"){
                      subObject = 1;
                      console.log(key);
                      self[key](subEObject,subEObject[key],null);
                    }
                      
                }
		var quantileOption = document.createElement('option');
        quantileOption.innerHTML = subEObject.codeMeaning   ;
		quantileSelect.appendChild(quantileOption);
          console.log(subEObject.codeMeaning);
  }
console.log("*******************     NonQuantifiable --end                     **********************");

}




/*
var iDiv = document.createElement('div');
iDiv.id = 'block';
iDiv.className = 'block';
iDiv.style.width = '400px';
iDiv.style.height = '400px';
iDiv.style.backgroundColor= 'green';
document.body.appendChild(iDiv);

var inputno = document.createElement("INPUT");
	inputno.type = "radio";

    inputno.value = "no";
	 inputno.name = "ok";
    inputno.onclick = function () {alert("I select No in Form 2")};
    document.body.appendChild(inputno); // this is working
var text = document.createTextNode("Hello World");
 document.body.appendChild(text); // this is working


    var inputno2 = new createRadio('a','a',false);
    inputno2.onclick = function () {alert("I select yes in Form 2")};
    document.body.appendChild(inputno2); 
    var text2 = document.createTextNode("label 2");
    document.body.appendChild(text2); 

    var inputChx = new createCheckbox('chbID','chbName','chbValue');
    inputChx.onclick = function () {alert("chb box")};
    addDomElement(document.body,inputChx); 
    var text3 = document.createTextNode("label chx 1");
    document.body.appendChild(text3); 
    */

 /*
 public class Enumerations {

	public enum ShapeType {
		NONE, LINE, RECTANGLE, CIRCLE, OVAL, POLY, OPENPOLY, COMMENT, ARROW, SPLINE, OPENSPLINE, TEXT, ELLIPSE, NORMAL, PAINTBRUSH, ERASER, LABEL, POINT
	}

	public enum ComponentType {
		anatomicEntity, imagingObservation, inference, anatomicEntityCharacteristic, imagingObservationCharacteristic
	}

	public enum QuantifierType {
		numerical, quantile, interval, nonQuantifiable, scale
	}

}
*/

var createRadio = function(prObject, id, name, className, checked , lbl){
  this.par = prObject;
  console.log("pr pr pr pr "+this.par);
  //this.id = id.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
   this.id= id;
  this.name = name;
  this.checked = checked;
  this.className = className;
  this.lbl = lbl;
  var div = document.createElement('div');
  div.className = this.className;
  var label=document.createElement('label');
  label.textContent =  this.lbl;
  var radioInput = document.createElement('input');
  radioInput.type = "radio";
  radioInput.className = "ui radio checkbox";
  radioInput.id = this.id;
  radioInput.name = this.name;
  radioInput.checked = this.checked;
 
  //div.appendChild(radioInput);
  
  div.appendChild(radioInput);
  div.appendChild(label);

    radioInput.onclick = function() { alert(this.name) };


  //radioInput.onclick = function(evt) { alert('new') };
  //document.addEventListener('click', this.check.bind(this) );

 
  this.getelementHtml = function(){
    //alert(div.outerHTML);
     return div;
  };
  /*
  radioInput.onclick = function(){
    alert("");
  }
  */
  //return div;
  //var form_elements = document.getElementById('my_form').elements;
  //var selectedGender = form_elements['gender'].value;
};

var createOption = function(prObject, id, name, className, checked , lbl){
  this.par = prObject;
  //this.id = id.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
  this.id= id;
  this.name = name;
  this.value = name;
  this.checked = checked;
  this.className = className;
  this.lbl = lbl;
  var div = document.createElement('div');
  div.className = this.className;
  var label=document.createTextNode(this.lbl);
  
  var optionInput = document.createElement('option');
  optionInput.name = this.name;
  optionInput.checked = this.checked;
  optionInput.value = this.lbl;
  //div.appendChild(radioInput);
  
  div.appendChild(optionInput);
  optionInput.appendChild(label);

    optionInput.onclick = function() { alert(this.name) };


  //radioInput.onclick = function(evt) { alert('new') };
  //document.addEventListener('click', this.check.bind(this) );

 
  this.getelementHtml = function(){
    //alert(div.outerHTML);
    //alert(optionInput);
     return optionInput;
  };
  /*
  radioInput.onclick = function(){
    alert("");
  }
  */
  //return div;
  //var form_elements = document.getElementById('my_form').elements;
  //var selectedGender = form_elements['gender'].value;
};


var createCheckbox = function(prObject,id, name, className, value , lbl){
 this.par = prObject;
  //this.id = id.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
  this.id= id;
  this.name = name;
  this.className = className;
  this.value = value;
  this.lbl = lbl;
  var div = document.createElement('div');
  div.className = this.className;
  var label=document.createElement('label');
  label.textContent=  this.lbl;
  var checkbox = document.createElement('input');
  checkbox.type = "checkbox";
  checkbox.className = "ui checkbox";
  checkbox.name =  this.name;
  checkbox.value =  this.value;
  checkbox.id = this.id;
  div.appendChild(checkbox);
  div.appendChild(label);
   document.getElementById(this.par).appendChild(div);
  this.getelementHtml = function(){

      return div;
  };

   //checkbox.onclick = function() { alert(this.name + " " + this.value) };
   checkbox.onchange = function (){
    if (this.checked == true){
      domelements[this.name]['selectedCnt']++;
        //alert(this.value);
    }else{
      if ( domelements[this.name]['selectedCnt']>0)
       domelements[this.name]['selectedCnt']--;
    }
    if ( (domelements[this.name]['selectedCnt'] >= domelements[this.name]['min']) && (domelements[this.name]['selectedCnt'] <= domelements[this.name]['max'])){
    domelements[this.name]['selectVerification'] = true;
   // $('.accordion1').accordion('close',1 );
  }
  else
    domelements[this.name]['selectVerification'] = false;
  
 
    //checkAll();
  }
  //alert(div.outerHTML);
  //return div;
}

function checkAll(){
  console.clear();
  for (var property1 in domelements) {
  //alert(domelements[property1]);
  console.log('id : '+domelements[property1]['id']);
  console.log('label : '+domelements[property1]['label']);
  console.log('min : '+domelements[property1]['min']);
  console.log('max : '+domelements[property1]['max']);
  console.log('selected cnt : '+domelements[property1]['selectedCnt']);
  if  (domelements[property1]['selectVerification'] == true)
    console.log('true');
  else
    console.log('false');
}



}
/*
      document.ge$('.accordion1').accordion({
              selector: {
                  trigger: '.title'
              }
      });
      
      $('select[id^="select"]').dropdown();

      $('#selectF1AnatomicCenter').dropdown('setting', 'onChange', function(value){console.log(value);});
      $("#selectF3FunctionalBrainatRiskofResection").dropdown();
*/
      /*
      $('.accordion1').accordion({
              selector: {
                  trigger: '.title'
              }
      });
      
      $('select[id^="select"]').dropdown();

      $('#selectF1AnatomicCenter').dropdown('setting', 'onChange', function(value){console.log(value);});
      $("#selectF3FunctionalBrainatRiskofResection").dropdown();
      */