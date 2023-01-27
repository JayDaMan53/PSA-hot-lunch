var lunchList = {
  0: "",
  1: "",
  2: "",
  3: "",
  4: "",
  5: "",
  6: "",
  7: "",
  8: "",
  9: "Boneless Chicken Bites",
  10: "Biscuit and Gravy",
  11: "Cheesy Baked Potato",
  12: "Salisbury Steak with Brown Rice",
  13: "Orange Chicken",
  14: "N/A",
  15: "N/A",
  16: "Happy MLK day!",
  17: "Pizza (I think)",
  18: "Chicken & Vegetable Potsticks",
  19: "Chicken & Waffles",
  20: "Beef & Queso Nachos",
  21: "N/A",
  22: "N/A",
  23: "Boneless Chicken Bites",
  24: "Biscuit and Gravy",
  25: "Cheesy Baked Potato",
  26: "Salisbury Steak with Brown Rice",
  27: "Orange Chicken",
  28: "N/A",
  29: "N/A",
  30: "Cheeseburger",
  31: "Texas Toast Grilled Cheese + Tomato Basil Soup",
  32: "Waiting for next months menu!"
}
const date = new Date();
const day = date. getDate();
let month = date.getMonth();
if (month === 0) {
	document.getElementById("Lunch").innerHTML = "Todays hot-lunch: " + lunchList[day];
	document.getElementById("next lunch").innerHTML = "Tomorrow's hot-lunch: " + lunchList[day + 1];
} else {
	document.getElementById("Lunch").innerHTML = "Todays hot-lunch: " + "Waiting for next months menu!";
	document.getElementById("next lunch").innerHTML = "Tomorrow's hot-lunch: " + "Waiting for next months menu!";
};

chrome.storage.local.get(["DarkMode"]).then((DarkMode) => {
  if  (DarkMode.DarkMode) {
    document.getElementById("dark-mode-toggle").checked = true;
    document.body.classList.add("dark-mode");
    document.getElementById("Lunch").classList.remove("rounded-text-box")
    document.getElementById("Lunch").classList.add("rounded-text-box-dark")
    document.getElementById("next lunch").classList.remove("rounded-text-box")
    document.getElementById("next lunch").classList.add("rounded-text-box-dark")
    document.getElementById("menu").classList.remove("link")
    document.getElementById("menu").classList.add("dark-mode-link")
	document.getElementById("github").classList.remove("link")
    document.getElementById("github").classList.add("dark-mode-link")
	document.getElementById("Order").classList.remove("link")
    document.getElementById("Order").classList.add("dark-mode-link")
  } else {
    /*/document.body.classList.remove("dark-mode");
    document.getElementById("Lunch").classList.add("rounded-text-box")
    document.getElementById("Lunch").classList.remove("rounded-text-box-dark")
    document.getElementById("next lunch").classList.add("rounded-text-box")
    document.getElementById("next lunch").classList.remove("rounded-text-box-dark")
    document.getElementById("menu").classList.add("link")
    document.getElementById("menu").classList.remove("dark-mode-link")
	  document.getElementById("github").classList.add("link")
    document.getElementById("github").classList.remove("dark-mode-link")/*/
  }
});


const toggle = document.getElementById("dark-mode-toggle");

toggle.addEventListener("change", function(){
  if(this.checked){
    chrome.storage.local.set({ DarkMode: true }).then(() => {
      console.log("Done!")
    });    
    document.body.classList.add("dark-mode")
    document.getElementById("Lunch").classList.remove("rounded-text-box")
    document.getElementById("Lunch").classList.add("rounded-text-box-dark")
    document.getElementById("next lunch").classList.remove("rounded-text-box")
    document.getElementById("next lunch").classList.add("rounded-text-box-dark")
    document.getElementById("menu").classList.remove("link")
    document.getElementById("menu").classList.add("dark-mode-link")
	document.getElementById("github").classList.remove("link")
    document.getElementById("github").classList.add("dark-mode-link")
	document.getElementById("Order").classList.remove("link")
    document.getElementById("Order").classList.add("dark-mode-link")
  }else{
    chrome.storage.local.set({ DarkMode: false }).then(() => {
      console.log("Done!")
    });    
    document.body.classList.remove("dark-mode")
    document.getElementById("Lunch").classList.add("rounded-text-box")
    document.getElementById("Lunch").classList.remove("rounded-text-box-dark")
    document.getElementById("next lunch").classList.add("rounded-text-box")
    document.getElementById("next lunch").classList.remove("rounded-text-box-dark")
    document.getElementById("menu").classList.add("link")
    document.getElementById("menu").classList.remove("dark-mode-link")
	document.getElementById("github").classList.add("link")
    document.getElementById("github").classList.remove("dark-mode-link")
	document.getElementById("Order").classList.add("link")
    document.getElementById("Order").classList.remove("dark-mode-link")
  }
});
