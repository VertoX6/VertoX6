let price = 0;
const faq = document.querySelector('#faq');
window.addEventListener('load', ()=>{
    oilVehicles.style.display = 'flex'
    electricVehicles.style.display = 'none';
    faq.style.display = 'none';
    carValue.innerHTML = 'OBLICZ WARTOŚĆ POJAZDU';
}) 

const oilVehicles = document.querySelector('#oilVehicles')
const list1 = document.querySelector('#list1');
list1.addEventListener('click', ()=>{
    oilVehicles.style.display = 'flex'
    electricVehicles.style.display = 'none';
    faq.style.display = 'none';
    carValue.innerHTML = 'OBLICZ WARTOŚĆ POJAZDU';
})

const electricVehicles = document.querySelector('#electricVehicles')
const list2 = document.querySelector('#list2');
list2.addEventListener('click', ()=>{
    oilVehicles.style.display = 'none';
    electricVehicles.style.display = 'flex';
    faq.style.display = 'none';
    carValue.innerHTML = 'OBLICZ WARTOŚĆ POJAZDU';
})

const list3 = document.querySelector('#list3');
list3.addEventListener('click', ()=>{
    faq.style.display = 'flex';
    oilVehicles.style.display = 'none'
    electricVehicles.style.display = 'none';
    carValue.innerHTML = 'OBLICZ WARTOŚĆ POJAZDU';
    price = 0;
})

let carValue = document.querySelector('#carValue');
let model = document.querySelector('.model');
let engine = document.querySelector('#engine');
let rims = document.querySelector('#rims');
let spoiler = document.querySelector('#spoiler');
let limiter = document.querySelector('#limiter');
let fotoradar = document.querySelector('#fotoradar');
let radio = document.querySelector('#radio');
let stereo = document.querySelector('#stereo');
let up1 = document.querySelector('#up1');
let up2 = document.querySelector('#up2');
let up3 = document.querySelector('#up3');
let up4 = document.querySelector('#up4');
let abs = document.querySelector('#abs');
let fuel = document.querySelector('#fuel');
let lpg = document.querySelector('#lpg');
let fakeNitro = document.querySelector('#fakeNitro');
let nitro = document.querySelector('#nitro');
let glass = document.querySelector('#glass');
let counterColor = document.querySelector('#counterColor');
let lampColor = document.querySelector('#lampColor');
let keys = document.querySelector('#keys');
let hydra = document.querySelector('#hydra');
let eTransport = document.querySelector('#eTransport');
let intakesR = document.querySelector('#intakesR');
let intakesM = document.querySelector('#intakesM');
carValue.addEventListener('click', (price)=>{
    price = parseInt(model.value) + parseInt(intakesR.value) + parseInt(spoiler.value) + parseInt(intakesM.value) + parseInt(up1.value) 
    + parseInt(up2.value) + parseInt(eTransport.value) + parseInt(rims.value) + parseInt(up3.value) + parseInt(engine.value) + parseInt(keys.value) 
    + parseInt(lpg.value) + parseInt(fuel.value) + parseInt(glass.value) + parseInt(limiter.value) + parseInt(fotoradar.value) + parseInt(stereo.value) 
    + parseInt(radio.value) + parseInt(nitro.value) + parseInt(fakeNitro.value) + parseInt(up4.value) + parseInt(counterColor.value) 
    + parseInt(lampColor.value) + parseInt(abs.value) + parseInt(hydra.value);; 
    carValue.innerHTML = `WARTOŚĆ POJAZDU: ${price}`;
})
