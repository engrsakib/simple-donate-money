document.getElementsByTagName('html')[0].setAttribute('data-theme', 'light');

// file added
const historySectiont = document.getElementById('history_sectont');
const donationSection = document.getElementById('donation_Section');
const historyBtn = document.getElementById('history_btn');
const donatinBtn = document.getElementById('donatin_btn');
// taka
const mainTk = document.getElementById('main_taka');


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

let initializeAmount = 1789;
