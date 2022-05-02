function submit(){
    let amount = parseInt(document.getElementById("bill").value);
    // amount = parseInt(amount);
    // console.log(typeof amount);
    let person = parseInt(document.getElementById("person").value);
    // console.log(typeof person)
    let tip = parseInt(document.getElementById("tip").value);
    // console.log(tip)
    let tip_amt = (amount + ((amount*tip)/100))/person;
    console.log(tip_amt);
    document.getElementById("share_person").value = tip_amt;
}

let x = document.getElementById("button");
x.addEventListener("click",submit);