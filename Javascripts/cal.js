function calculete(){
    var principalAmount = parseInt(document.getElementById("PrincipalAmount").value);
    var annualInterestRate = document.getElementById("AnnualInterestrate").value;  
    var periodData = document.getElementById("period").value;  

    var selectElement = document.getElementById('currency');
    var selectedValue = selectElement.value;

    var periodtype = document.getElementById('periodtype');
    var finperiod = periodtype.value;




    var interestAmount;
    var totalamount = parseInt( 0 ); 


    if(selectedValue === "doller"){
        principalAmount = principalAmount/75;
        if (finperiod === "year"){

            interestAmount = (principalAmount * annualInterestRate * periodData) / 100;
            // console.log(interestAmount);
            totalamount = interestAmount + principalAmount;
            document.getElementById("interestamt").innerHTML = interestAmount;
            document.getElementById("totalamount").innerHTML = totalamount;
        }
        else  if(finperiod === "month"){

                periodData = periodData / 12;
                // console.log(periodData)
                interestAmount = (principalAmount * annualInterestRate * periodData) / 100;
                // console.log(interestAmount)
                totalamount = interestAmount + principalAmount
                document.getElementById("interestamt").innerHTML = interestAmount;
                document.getElementById("totalamount").innerHTML = totalamount;
       }
       else{
           window.alert("Plese select the Period type")
       }

    }

    else if (selectedValue === "inr"){
        if (finperiod === "year"){

            interestAmount = (principalAmount * annualInterestRate * periodData) / 100;
            // console.log(interestAmount)
            totalamount = interestAmount + principalAmount;
            document.getElementById("interestamt").innerHTML = interestAmount;
            document.getElementById("totalamount").innerHTML = totalamount;
        }
        else  if(finperiod === "month"){

                periodData = periodData / 12;
                // console.log(periodData)
                interestAmount = (principalAmount * annualInterestRate * periodData) / 100;
                // console.log(interestAmount)
                totalamount = interestAmount + principalAmount;
                document.getElementById("interestamt").innerHTML = interestAmount;
                document.getElementById("totalamount").innerHTML = totalamount;
        }
        else{
            window.alert("Plese select the Period type")
        }
       
    }

    else{

        window.alert("Please select the country")
    }

 
  



   

    


    // console.log("This is period of loan "+perioddata);
    // console.log("This is Annual rate of interst of loan "+annualinterest);
    // console.log("This is a principal time "+priamount);
}


function clear(){
    alert("this buttom is working")
    //  let x = document.getElementById("clearbutton");

    //  x.requestFullscreen();
}