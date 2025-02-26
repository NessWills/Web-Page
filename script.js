function display_date() {
    const Today = new Date();
    let ThisDay =Today.getDate();
    let ThisMonth = Today.getMonth() +1;
    let Thisyear = Today.getFullYear();
    let strDate= "Today's date: "+ThisMonth+"/"+ThisDay+"/"+Thisyear;
        document.getElementById("currdate").innerHTML = strDate;
}
display_date();