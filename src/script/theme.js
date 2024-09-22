document.getElementsByTagName('html')[0].setAttribute('data-theme', 'light');

// file added
const historySectiont = document.getElementById('history_sectont');
const donationSection = document.getElementById('donation_Section');
const historyBtn = document.getElementById('history_btn');
const donatinBtn = document.getElementById('donatin_btn');
// taka
const mainTk = document.getElementById('main_taka');
const floodNoakhali = document.getElementById('flood_Noakhali');
const feniAmount = document.getElementById('feni_amount');
const quataMov = document.getElementById('quata_mov');

// donation function
function donateButton(e){
    if(e.innerText === 'History'){
        historySectiont.classList.remove('hidden');
        donationSection.classList.add('hidden');
        e.classList.remove('btn-outline');
        donatinBtn.classList.add('btn-outline');
    }
    else if(e.innerText === 'Donation'){
        historySectiont.classList.add('hidden');
        donationSection.classList.remove('hidden');
        e.classList.remove('btn-outline');
        historyBtn.classList.add('btn-outline');
    }
}

// initilize amount
let initializeAmount = 17089;
let floodNoakhaliAmount = 231232;
let feniAmountTk = 142341;
let quataMovTk = 141031;
// inner
mainTk.innerText = initializeAmount;
floodNoakhali.innerText = floodNoakhaliAmount;
feniAmount.innerText = feniAmountTk;
quataMov.innerText = quataMovTk;