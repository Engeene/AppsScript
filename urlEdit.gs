function urlEdit(event){
 
 var s=SpreadsheetApp.getActiveSheet() 
 var r = event.range;
  //Se l'evento è sul foglio che mi interessa e sulla colonna che mi interessa
   if(r.getColumn()==2&&s.getName()=="Mio Foglio")
   {
     //recupero la pagina dal link
    var text=UrlFetchApp.fetch(event.value).getContentText();
     //la parso
     var doc = Xml.parse(text, true);
     //ne recupero il titolo
    var title= doc.html.head.title.getText();
    
    //e la scrivo a fianco
    s.getRange(r.getRow(),1).setValue(title)
    
   }
}
