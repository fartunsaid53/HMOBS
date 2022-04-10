function validateDate(){
  var dateOK  = false;
  var today   = new Date();
  var startDt = new Date (document.getElementById("checkin-date").value).getTime();
  var endDt   = new Date(document.getElementById("checkout-date").value).getTime();

  if (startDt < today || endDt < today)
    alert('please Enter a valid present date.');
  else if(startDt > endDt){
    alert ('Checkout date is greater than Checkin date.');
    dateOK = true;
  }
}