let price = 0;
let carValue = document.querySelector('#carValue');

const electricVehicles = document.querySelector('#electricVehicles');
const oilVehicles = document.querySelector('#oilVehicles');
const list1 = document.querySelector('#list1');
let priceEle = 0;
let modelEle = document.querySelector('#modelEle');
let rimsEle = document.querySelector('#rimsEle');
let spoilerEle = document.querySelector('#spoilerEle');
let limiterEle = document.querySelector('#limiterEle');
let fotoradarEle = document.querySelector('#fotoradarEle');
let radioEle = document.querySelector('#radioEle');
let stereoEle = document.querySelector('#stereoEle');
let up1Ele = document.querySelector('#up1Ele');
let up2Ele = document.querySelector('#up2Ele');
let up3Ele = document.querySelector('#up3Ele');
let up4Ele = document.querySelector('#up4Ele');
let absEle = document.querySelector('#absEle');
let fakeNitroEle = document.querySelector('#fakeNitroEle');
let nitroEle = document.querySelector('#nitroEle');
let glassEle = document.querySelector('#glassEle');
let counterColorEle = document.querySelector('#counterColorEle');
let lampColorEle = document.querySelector('#lampColorEle');
let keysEle = document.querySelector('#keysEle');
let hydraEle = document.querySelector('#hydraEle');
let eTransportEle = document.querySelector('#eTransportEle');

window.addEventListener('load', ()=>{
    oilVehicles.style.display = 'flex';
    electricVehicles.style.display = 'none';
    faq.style.display = 'none';
    
carValue.addEventListener('click', ()=>{
    carValue.classList.remove('btn-alert')
        if(model.value == 0){
            carValue.classList.add('btn-alert');
            carValue.innerHTML = `<span>&#33;</span> WYBIERZ MODEL POJAZDU`;
        }
        else{
            carValue.classList.remove('btn-alert')
        priceEle = 0;
        price = parseInt(model.value) + parseInt(intakesR.value) + parseInt(spoiler.value) + parseInt(intakesM.value) + parseInt(up1.value) 
        + parseInt(up2.value) + parseInt(eTransport.value) + parseInt(rims.value) + parseInt(up3.value) + parseInt(engine.value) + parseInt(keys.value) 
        + parseInt(lpg.value) + parseInt(fuel.value) + parseInt(glass.value) + parseInt(limiter.value) + parseInt(fotoradar.value) + parseInt(stereo.value) 
        + parseInt(radio.value) + parseInt(nitro.value) + parseInt(fakeNitro.value) + parseInt(up4.value) + parseInt(counterColor.value) 
        + parseInt(lampColor.value) + parseInt(abs.value) + parseInt(hydra.value);
        carValue.innerHTML = `WARTOŚĆ POJAZDU: ${price} PLN`;
        }
        });
    
});
let model = document.querySelector('#model');
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
list1.addEventListener('click', ()=>{
    oilVehicles.style.display = 'flex'
    electricVehicles.style.display = 'none';
    oilVehicles.style.animation = 'showMe 1.5s'
    faq.style.display = 'none';
    carValue.style.display = 'block';
    carValue.innerHTML = 'OBLICZ WARTOŚĆ POJAZDU';
    carValue.classList.remove('btn-alert')

    carValue.addEventListener('click', ()=>{
        if(model.value == 0){
            carValue.classList.add('btn-alert');
            carValue.innerHTML = `<span>&#33;</span> WYBIERZ MODEL POJAZDU`;
        }
        else{
            carValue.classList.remove('btn-alert');
        priceEle = 0;
        price = parseInt(model.value) + parseInt(intakesR.value) + parseInt(spoiler.value) + parseInt(intakesM.value) + parseInt(up1.value) 
        + parseInt(up2.value) + parseInt(eTransport.value) + parseInt(rims.value) + parseInt(up3.value) + parseInt(engine.value) + parseInt(keys.value) 
        + parseInt(lpg.value) + parseInt(fuel.value) + parseInt(glass.value) + parseInt(limiter.value) + parseInt(fotoradar.value) + parseInt(stereo.value) 
        + parseInt(radio.value) + parseInt(nitro.value) + parseInt(fakeNitro.value) + parseInt(up4.value) + parseInt(counterColor.value) 
        + parseInt(lampColor.value) + parseInt(abs.value) + parseInt(hydra.value);
        carValue.innerHTML = `WARTOŚĆ POJAZDU: ${price} PLN`;
        console.log(price);
        }
        });
});
const list2 = document.querySelector('#list2');

list2.addEventListener('click', ()=>{
    oilVehicles.style.display = 'none';
    electricVehicles.style.display = 'flex';
    electricVehicles.style.animation = 'showMe 1.5s'
    faq.style.display = 'none';
    carValue.style.display = 'block';
    carValue.innerHTML = 'OBLICZ WARTOŚĆ POJAZDU'; 
    carValue.classList.remove('btn-alert')
        
    carValue.addEventListener('click', ()=>{
        if(modelEle.value == 0){
            carValue.classList.add('btn-alert');
            carValue.innerHTML = `<span>&#33;</span> WYBIERZ MODEL POJAZDU`;
        }
        else{
            carValue.classList.remove('btn-alert')
        price = 0;
        priceEle = parseInt(modelEle.value) + parseInt(spoilerEle.value) + parseInt(up1Ele.value) 
        + parseInt(up2Ele.value) + parseInt(eTransportEle.value) + parseInt(rimsEle.value) + parseInt(up3Ele.value) + parseInt(keysEle.value) 
        + parseInt(glassEle.value) + parseInt(limiterEle.value) + parseInt(fotoradarEle.value) + parseInt(stereoEle.value) 
        + parseInt(radioEle.value) + parseInt(nitroEle.value) + parseInt(fakeNitroEle.value) + parseInt(up4Ele.value) + parseInt(counterColorEle.value) 
        + parseInt(lampColorEle.value) + parseInt(absEle.value) + parseInt(hydraEle.value);
        carValue.innerHTML = `WARTOŚĆ POJAZDU: ${priceEle} PLN`;
        console.log(priceEle);
        }
});
});

const faq = document.querySelector('#faq');
const list3 = document.querySelector('#list3');
list3.addEventListener('click', ()=>{
    faq.style.animation = 'showMe 1.5s'
    faq.style.display = 'flex';
    oilVehicles.style.display = 'none'
    electricVehicles.style.display = 'none';
    carValue.style.display = 'none';
    model.value = 0;
    engine.value = 0;
    rims.value = 0;
    spoiler.value = 0;
    limiter.value = 0;
    fotoradar.value = 0;
    radio.value = 0;
    stereo.value = 0;
    up1.value = 0;
    up2.value = 0;
    up3.value = 0;
    up4.value = 0;
    abs.value = 0;
    fuel.value = 0;
    lpg.value = 0;
    fakeNitro.value = 0;
    nitro.value = 0;
    glass.value = 0;
    counterColor.value = 0;
    lampColor.value = 0;
    keys.value = 0;
    hydra.value = 0;
    eTransport.value = 0;
    intakesM.value = 0;
    intakesR.value = 0;

    modelEle.value = 0;
    rimsEle.value = 0;
    spoilerEle.value = 0;
    limiterEle.value = 0;
    fotoradarEle.value = 0;
    radioEle.value = 0;
    stereoEle.value = 0;
    up1Ele.value = 0;
    up2Ele.value = 0;
    up3Ele.value = 0;
    up4Ele.value = 0;
    absEle.value = 0;
    fakeNitroEle.value = 0;
    nitroEle.value = 0;
    glassEle.value = 0;
    counterColorEle.value = 0;
    lampColorEle.value = 0;
    keysEle.value = 0;
    hydraEle.value = 0;
    eTransportEle.value = 0;
})
