let memberName ="",memberBalance="",titleName = "", receiverName = "", amount = "";
let members = document.querySelectorAll(".tableBody tr");

for (let index = 0; index < 10; index++) {

    members[index].querySelectorAll('td')[3].addEventListener("click", function () {

        memberName = members[index].querySelectorAll("td")[0].innerHTML;
        memberBalance = members[index].querySelectorAll("td")[2].innerHTML;
        titleName = document.getElementById("exampleModal");
        titleName.querySelector(".modal-title").textContent = memberName + " is sending money";
        console.log(memberName, memberBalance);
        
    });
}

document.getElementById("sendMoney").addEventListener('click', function (){
    receiverName = document.getElementById('receiver').value;
    amount = document.getElementById('amount').value;

    console.log(receiverName, amount);
    // console.log(memberName, memberBalance);
    if(memberBalance - amount < 0){
        alert("You don't have sufficient balance.");
    }
    else{
        document.getElementById(memberName).querySelectorAll("td")[2].innerHTML -= Number(amount);
        // console.log(document.getElementById(memberName).querySelectorAll("td")[2].innerHTML);
        let  temp = Number(document.getElementById(receiverName).querySelectorAll("td")[2].innerHTML) + Number(amount);
        document.getElementById(receiverName).querySelectorAll("td")[2].innerHTML = temp;
    }
    var history = document.createElement("li");
    var content = document.createTextNode(`${memberName} sent ${amount} to ${receiverName} on ${Date()}.`)
    history.appendChild(content);
    var orderedli = document.getElementById('historyContent');
    orderedli.appendChild(history);
})
