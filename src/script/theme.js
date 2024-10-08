document.getElementsByTagName("html")[0].setAttribute("data-theme", "light");

// file added
const historySectiont = document.getElementById("history_sectont");
const donationSection = document.getElementById("donation_Section");
const historyBtn = document.getElementById("history_btn");
const donatinBtn = document.getElementById("donatin_btn");
const emptyTransection = document.getElementById('emptyTransection');
// taka
const mainTk = document.getElementById("main_taka");
const floodNoakhali = document.getElementById("flood_Noakhali");
const feniAmount = document.getElementById("feni_amount");
const quataMov = document.getElementById("quata_mov");

// input field
const inputNoakhaly = document.getElementById("input_noakhaly");
const inputFeni = document.getElementById("inputFeni");
const inputQuta = document.getElementById("inputQuta");

// modal function
const modal = document.getElementById("myModal");
const openModalBtn = document.getElementById("openModalBtn");
const closeModalBtn = document.getElementById("closeModalBtn");


// heading
const noakhaliHead = document.getElementById('noakhaliHead').innerText;
const FeniHead = document.getElementById('FeniHead').innerText;
const qutaHead = document.getElementById('qutaHead').innerText;

// modal close button
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

    if ((typeof n === "number" && !isNaN(n)) && n != " " && n > 0) {
      if (n > initializeAmount) {
        alert("You have not enough money");
      } else {
        floodNoakhaliAmount += n;
        initializeAmount -= n;
        mainTk.innerText = initializeAmount;
        floodNoakhali.innerText = floodNoakhaliAmount;

        const newDiv = document.createElement("div");
        newDiv.innerHTML = `
            <div class="w-full h-auto p-6 shadow-md">
                <p class="text-[20px] font-[700] text-black">${n} Taka is ${noakhaliHead} </p>

                <p class="text-[16px] font-[300]">Date: ${new Date()}</p>

            </div>
        `;
        historySectiont.appendChild(newDiv);
        emptyTransection.classList.add('hidden');
        // the moadl function
        modal.classList.remove("hidden");
        modal.classList.add("flex");
      }
    } else {
      alert("Please Input right amount");
    }
  } else if (e.value === "feni") {
    const n = Number(inputFeni.value);
    if ((typeof n === "number" && !isNaN(n)) && n != " " && n > 0) {
      if (n > initializeAmount) {
        alert("You have not enough money");
      } else {
        feniAmountTk += n;
        initializeAmount -= n;
        mainTk.innerText = initializeAmount;
        feniAmount.innerText = feniAmountTk;

        const newDiv = document.createElement("div");
        newDiv.innerHTML = `
            <div class="w-full h-auto p-6 shadow-md">
                <p class="text-[20px] font-[700] text-black">${n} Taka is ${FeniHead} </p>

                <p class="text-[16px] font-[300]">Date: ${new Date()}</p>

            </div>
        `;
        historySectiont.appendChild(newDiv);
        emptyTransection.classList.add('hidden');
        // the moadl function
        modal.classList.remove("hidden");
        modal.classList.add("flex");
      }
    } else {
      alert("Please Input right amount");
    }
  } else if (e.value === "quta") {
    const n = Number(inputQuta.value);
    if ((typeof n === "number" && !isNaN(n))  && n != " " && n > 0) {
      if (n > initializeAmount) {
        alert("You have not enough money");
      } else {
        quataMovTk += n;
        initializeAmount -= n;
        mainTk.innerText = initializeAmount;
        quataMov.innerText = quataMovTk;

        const newDiv = document.createElement("div");
        newDiv.innerHTML = `
            <div class="w-full h-auto p-6 shadow-md">
                <p class="text-[20px] font-[700] text-black">${n} Taka is ${qutaHead} </p>

                <p class="text-[16px] font-[300]">Date: ${new Date()}</p>

            </div>
        `;
        historySectiont.appendChild(newDiv);
        emptyTransection.classList.add('hidden');
        // the moadl function
        modal.classList.remove("hidden");
        modal.classList.add("flex");
      }
    } else {
      alert("Please Input right amount");
    }
  }
}


// page swap
const blog = document.getElementById('blog');
blog.addEventListener('click', function(){
    window.location.href = './pages/blog.html';
});

