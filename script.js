const button = document.getElementById('interactiveButton');
const displayText = document.getElementById('displayText');
const clickCounter = document.getElementById('clickCounter');
const autoClickerButton = document.getElementById('autoClickerButton')


const buyButton = document.getElementById('buyButton');
const buyButton1250 = document.getElementById('buyButton1250');
const buyButton2600 = document.getElementById('buyButton2600');
let purchased500Clicks = false;
let purchased1250Clicks = false;
let purchased2600Clicks = false;

let purchasedAutoClicker = false;
let autoClickerInterval;

let clickCount = 0;



button.addEventListener('click', () => {
    if (!purchased500Clicks && !purchased1250Clicks && !purchased2600Clicks) {
        clickCount += 1;
    } else if (purchased500Clicks && !purchased1250Clicks && !purchased2600Clicks) {
        clickCount += 2;
    } else if (purchased1250Clicks && !purchased2600Clicks) {
        clickCount += 3;
    } else if (purchased2600Clicks) {
        clickCount += 5;
    }

    clickCounter.textContent = `Current Clicks: ${clickCount}`;
    
    if (clickCount === 1) {
        displayText.textContent = 'Okay! First click here. Keep going';
    } else if (clickCount >= 50 && clickCount < 100) {
        displayText.textContent = 'Congratulations!!! U clicked 50 times! Thats pretty good';
    } else if (clickCount >= 100 && clickCount < 150) {
        displayText.textContent = '100 clicks! Rank: Begginer clicker';
    } else if (clickCount >= 150 && clickCount < 200) {
        displayText.textContent = '150! Rank: Begginer clicker [25%]';
    } else if (clickCount >= 200 && clickCount < 400) {
        displayText.textContent = 'Yoooo 200 HERE! Rank: Begginer clicker [50%]';
    } else if (clickCount >= 400 && clickCount < 500) {
        displayText.textContent = 'Congratulations! Rank: Begginer clicker [100%] => Lover of clicks';
    } else if (clickCount >= 500 && clickCount < 600) {
        displayText.textContent = 'Half of a thousand. youre so close! Rank: Lover of clicks [25%]';
    } else if (clickCount >= 600 && clickCount < 700) {
        displayText.textContent = 'Nice. Rank: Lover of clicks [50%]';
    } else if (clickCount >= 700 && clickCount < 800) {
        displayText.textContent = 'Soo goood Rank: Lover of clicks [75%]';
    } else if (clickCount >= 800 && clickCount < 1000) {
        displayText.textContent = 'New Rank! Rank: Lover of clicks [100%] => Pro clicker';
    } else if (clickCount >= 1000 && clickCount < 1200) {
        displayText.textContent = 'THOUSAND1!!!1!!1 Rank: Pro clicker [25%]';
    } else if (clickCount >= 1200 && clickCount < 1500) {
        displayText.textContent = 'Good to be pro right? Rank: Pro clicker [50%]';
    } else if (clickCount >= 1800 && clickCount < 2000) {
        displayText.textContent = '<???> - Youve gone too far. Do you think you can just take and click??? I will not allow it. Either you stop now or wait for trouble. Rank: Pro clicker [75%]';
    } else if (clickCount >= 2000 && clickCount < 2200) {
        displayText.textContent = 'LETS GO! 2k here! Rank: Pro clicker [100%] => Legendary Clicker [0%]';
    } else if (clickCount >= 2200 && clickCount < 2400) {
        displayText.textContent = 'You going good. Legendary Clicker [10%]';
    } else if (clickCount >= 2400 && clickCount < 2500) {
        displayText.textContent = 'Wanna click 2500 times? Legendary Clicker [20%]';
    } else if (clickCount >= 2500 && clickCount < 2600) {
        displayText.textContent = 'Yes! 2,5k. Legendary Clicker [25%]';
    } else if (clickCount >= 2600 && clickCount < 2800) {
        displayText.textContent = 'Long.. Yes? WAIT! YOU GONNA BUY IT?? NOO! Legendary Clicker [30%]';
    } else if (clickCount >= 2800 && clickCount < 3000) {
        displayText.textContent = 'So close to get 3k! Legendary Clicker [40%]';
    } else if (clickCount >= 3000 && clickCount < 3200) {
        displayText.textContent = '3K!!!!!!!!! Legendary Clicker [50%]';
    }
});





buyButton.addEventListener('click', () => {
    if (clickCount >= 500 && !purchased500Clicks) {
        clickCount -= 500;
        purchased500Clicks = true;

        clickCounter.textContent = `Current Clicks: ${clickCount}`;
        buyButton.textContent = 'Purchased +2 per click';
        buyButton.disabled = true;
    } else if (purchased500Clicks) {
        alert('You have already purchased 500 clicks!');
    } else {
        alert('You need at least 500 clicks to purchase!');
    }
});




buyButton1250.addEventListener('click', () => {
    if (clickCount >= 1250 && !purchased1250Clicks) {
        clickCount -= 1250;
        purchased1250Clicks = true;

        clickCounter.textContent = `Current Clicks: ${clickCount}`;
        buyButton1250.textContent = 'Purchased +3 per click';
        buyButton1250.disabled = true;
    } else if (purchased1250Clicks) {
        alert('You have already purchased 1250 clicks!');
    } else {
        alert('You need at least 1250 clicks to purchase!');
    }
});


buyButton2600.addEventListener('click', () => {
    if (clickCount >= 2600 && !purchased2600Clicks) {
        clickCount -= 2600;
        purchased2600Clicks = true;

        clickCounter.textContent = `Current Clicks: ${clickCount}`;
        buyButton2600.textContent = 'Purchased +5 per click';
        buyButton2600.disabled = true;
    } else if (purchased2600Clicks) {
        alert('You have already purchased 2600 clicks!');
    } else {
        alert('You need at least 2600 clicks to purchase!');
    }
});


autoClickerButton.addEventListener('click', () => {
    if (!purchasedAutoClicker) {
        if (clickCount >= 800) {
            purchasedAutoClicker = true;
            clickCounter.textContent = `Current Clicks: ${clickCount}`;

            autoClickerButton.textContent = 'AutoClicker 1 p/0.9s (Active)';
            autoClickerButton.disabled = true;

            autoClickerInterval = setInterval(() => {
                clickCount += 1;
                clickCounter.textContent = `Current Clicks: ${clickCount}`;
            }, 900); // Кожну секунду
        } else {
            alert('You need at least 800 clicks to purchase AutoClicker!');
        }
    } else {
        alert('You have already purchased AutoClicker!');
    }
});