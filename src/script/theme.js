document.getElementsByTagName("html")[0].setAttribute("data-theme", "light");

// file added
const historySectiont = document.getElementById("history_sectont");
const donationSection = document.getElementById("donation_Section");
const historyBtn = document.getElementById("history_btn");
const donatinBtn = document.getElementById("donatin_btn");
// taka
const mainTk = document.getElementById("main_taka");
const floodNoakhali = document.getElementById("flood_Noakhali");
const feniAmount = document.getElementById("feni_amount");
const quataMov = document.getElementById("quata_mov");

// input field
const inputNoakhaly = document.getElementById("input_noakhaly");
const inputFeni = document.getElementById("inputFeni");

// modal function
const modal = document.getElementById("myModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");

function Close() {
  modal.classList.add("hidden");
}

// donation function
function donateButton(e) {
  if (e.innerText === "History") {
    historySectiont.classList.remove("hidden");
    donationSection.classList.add("hidden");
    e.classList.remove("btn-outline");
    donatinBtn.classList.add("btn-outline");
  } else if (e.innerText === "Donation") {
    historySectiont.classList.add("hidden");
    donationSection.classList.remove("hidden");
    e.classList.remove("btn-outline");
    historyBtn.classList.add("btn-outline");
  }
}

// initilize amount
let initializeAmount = 17089;
let floodNoakhaliAmount = 24101;
let feniAmountTk = 142341;
let quataMovTk = 141031;
// inner
mainTk.innerText = initializeAmount;
floodNoakhali.innerText = floodNoakhaliAmount;
feniAmount.innerText = feniAmountTk;
quataMov.innerText = quataMovTk;

// donate function
function donateFunction(e) {
  if (e.value === "fload_noakhali") {
    const n = Number(inputNoakhaly.value);
    if ((typeof n === "number" && !isNaN(n)) || n <= 0) {
      if (n > initializeAmount) {
        alert("You have not enough money");
      } else {
        floodNoakhaliAmount += n;
        initializeAmount -= n;
        mainTk.innerText = initializeAmount;
        floodNoakhali.innerText = floodNoakhaliAmount;

        const newDiv = document.createElement("div");
        newDiv.innerHTML = `
            <div class="w-full h-auto p-16 shadow-md">
                <p class="text-[20px] font-[700] text-black">${n} Taka is Donate for Flood at Noakhali, Bangladesh</p>

                <p class="text-[16px] font-[300]">Date: ${new Date()}</p>

            </div>
        `;
        historySectiont.appendChild(newDiv);
        // the moadl function
        modal.classList.remove("hidden");
      }
    } else {
      alert("Please Input right amount");
    }
  } else if (e.value === "feni") {
    const n = Number(inputNoakhaly.value);
    if ((typeof n === "number" && !isNaN(n)) || n <= 0) {
      if (n > initializeAmount) {
        alert("You have not enough money");
      } else {
        feniAmountTk += n;
        initializeAmount -= n;
        mainTk.innerText = initializeAmount;
        floodNoakhali.innerText = feniAmountTk;

        const newDiv = document.createElement("div");
        newDiv.innerHTML = `
            <div class="w-full h-auto p-16 shadow-md">
                <p class="text-[20px] font-[700] text-black">${n} Taka is Donate for Flood Relief in Feni, Bangladesh </p>

                <p class="text-[16px] font-[300]">Date: ${new Date()}</p>

            </div>
        `;
        historySectiont.appendChild(newDiv);
        // the moadl function
        modal.classList.remove("hidden");
      }
    } else {
      alert("Please Input right amount");
    }
  }
}
