setTimeout(function() {
    document.getElementById("welcomePopup").style.display = "flex";
}, 5000);

function closePopup() {
    document.getElementById("welcomePopup").style.display = "none";
}


setTimeout(function() {
    document.getElementById("welcomePopup").style.display = "flex";
}, 5000);

function closePopup() {
    document.getElementById("welcomePopup").style.display = "none";
}

window.addEventListener("DOMContentLoaded", function() {

    const toggleBtn = document.getElementById('imageBtn');
    let starsOn = false; 

    toggleBtn.addEventListener('click', function() {

        if (!starsOn) {
            document.body.style.backgroundImage =
                "url('https://images.unsplash.com/photo-1506318137071-a8e063b4bec0?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHN0YXJzfGVufDB8fDB8fHww&w=1000')";
            document.body.style.backgroundSize = "cover";
            document.body.style.backgroundPosition = "center";
            document.body.style.backgroundRepeat = "no-repeat";

            toggleBtn.textContent = "Switch to the original background"; 
            starsOn = true;

        } else {

            document.body.style.backgroundImage = "";
            document.body.style.backgroundColor = ""; 

            toggleBtn.textContent = "Star Background"; 
            starsOn = false;
        }
    });

});
