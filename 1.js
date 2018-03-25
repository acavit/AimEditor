var createRadio = function(diva,id, name, className, checked , lbl){
  this.id = id.replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '');
  this.name = name;
  this.checked = checked;
  this.className = className;
  this.lbl = lbl;
  var div = document.createElement('div');
  div.class = this.className;
  var label=document.createElement('label');
  label.textContent =  this.lbl;
  var radioInput = document.createElement('input');
  (radioInput).type = "radio";
  (radioInput).id = this.id;
  (radioInput).name = this.name;
  (radioInput).checked = this.checked;
  document.getElementById(diva).appendChild(radioInput);
  document.getElementById(diva).appendChild(label);
  radioInput.onmousedown =function(evt){ alert("a")};
  //document.addEventListener('click', this.Up.bind(this));

  this.getelementHtml = function(){
    //alert(div.outerHTML);
     return div.outerHTML;
  };

}


  myRad = new createRadio("accordion1","a","b","c","false","lbl");
  myRad = new createRadio("accordion1","a","b","c","false","lbla");