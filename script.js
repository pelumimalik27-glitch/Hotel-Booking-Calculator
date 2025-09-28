function result() {
    let nightLodge = document.getElementById("nightBooking").value;
    let hotelRoom = document.getElementById("nightRoom").value;
    let includeBreakFast = document.getElementById("nightLunch").checked;
    let baseCost = 10000;

    //additionalc cost to each room
    if (hotelRoom === "standard" ){
        baseCost += 5000;
    }
    if(hotelRoom === "deluxe"){
        baseCost += 7500;
    }
    if (hotelRoom === "suit" ){
        baseCost += 10000;
    }
   
     let totalCost = baseCost * nightLodge 
    if(nightLodge > 5){
        document.getElementById("calculate").innerText = "apply a discount of 2000 on the total cost";
        totalCost -= 2000
    }

    if(includeBreakFast){
        baseCost += 2000;
    }
    

     let message = "The total cost for a " + nightLodge + "-night stay in a " + hotelRoom + " is " + totalCost;
    console.log(message);
    document.getElementById("calculate").innerText = message;


}