const mario_sprite = document.querySelector('.sprite__mario');
const block_sprite = document.querySelector('.sprite__block');
const root = document.documentElement;
let coins = 0;
let hold_key_duration = 0;
let mario_fire = false;
let keys = {}

document.addEventListener("keydown", function(event) {

    if (!keys[event]) keys[event] = Date.now();
    hold_key_duration = Date.now() - keys[event]
    if(!event.repeat) {
        handleEventOnce(event);
    }
    handleEvent(event)

});

document.addEventListener("keyup", function(event) {

    keys[event] = null;
    handleEvent(event);
    handleEventOnce(event)

});

function handleEvent(event){

    if (event.keyCode == 83 || event.keyCode == 40) { handleBentDown(event.type); }
   
    else if (event.keyCode == 87 || event.keyCode == 38) {handleLookUp(event.type);}
    else if (event.keyCode == 70) toggleMarioFire(event.type);
}
function handleEventOnce(event){

    if (event.keyCode == 32 ) { handleJump(event.type); }
    
}

function toggleMarioFire(type){
    
    if(!mario_fire && type == "keydown") {
        setMarioFire();
        mario_fire = true;
    } else if (mario_fire && type == "keydown"){
        setSuperMario();
        mario_fire = false;
    }
    
}

function setMarioFire(){
    root.style.setProperty('--cap-shirt-line', '#3F3F3F')
    root.style.setProperty('--cap-shirt-color', '#FFFFFF')
    root.style.setProperty('--cap-shirt-shadow', '#DADB9E')
    root.style.setProperty('--cap-deco-color', '#FEFF81');
    root.style.setProperty('--cap-deco-shadow', '#FFDA00');
    root.style.setProperty('--cap-deco-light', '#FFFFFF');
    root.style.setProperty('--hair-color', '#212121');
    root.style.setProperty('--eyes-color', '#212121');
    root.style.setProperty('--outer-eyes-color', '#FFFFFF');
    root.style.setProperty('--skin-color', '#FFCFBD');
    root.style.setProperty('--skin-shadow', '#FF5B00');
    root.style.setProperty('--skin-gloves-line', '#894D00');
    root.style.setProperty('--overall-color', '#FF0000');
    root.style.setProperty('--overall-shadow', '#C60000');
    root.style.setProperty('--overall-deco', '#FFFFFF');
    root.style.setProperty('--overall-line', '#3E0000');
    root.style.setProperty('--shoes-color', '#894D00');
    root.style.setProperty('--shoes-line', '#212121');
    root.style.setProperty('--shoes-deco', '#FEFF81');
    root.style.setProperty('--gloves-color', '#FFFFFF');
    root.style.setProperty('--white', '#FFFFFF');
}

function setSuperMario(){
    root.style.setProperty('--cap-shirt-line', '#212121');
    root.style.setProperty('--cap-shirt-color', '#FF0065');
    root.style.setProperty('--cap-shirt-shadow', '#BB0058');
    root.style.setProperty('--cap-deco-color', '#FFDA4E');
    root.style.setProperty('--cap-deco-shadow', '#E49A00');
    root.style.setProperty('--cap-deco-light', '#FFFFFF');
    root.style.setProperty('--hair-color', '#212121');
    root.style.setProperty('--eyes-color', '#212121');
    root.style.setProperty('--outer-eyes-color', '#FFFFFF');
    root.style.setProperty('--skin-color', '#FFCFBD');
    root.style.setProperty('--skin-shadow', '#FF5A58');
    root.style.setProperty('--skin-gloves-line', '#894D00');
    root.style.setProperty('--overall-color', '#55DDC9');
    root.style.setProperty('--overall-shadow', '#187B96');
    root.style.setProperty('--overall-deco', '#FFFFFF');
    root.style.setProperty('--overall-line', '#1A2487');
    root.style.setProperty('--shoes-color', '#894D00');
    root.style.setProperty('--shoes-line', '#212121');
    root.style.setProperty('--shoes-deco', '#FFCFBD');
    root.style.setProperty('--gloves-color', '#FFFFFF');
    root.style.setProperty('--white', '#FFFFFF');
}

function handleBentDown(type){
    if(type == "keydown"){
        mario_sprite.classList.add('sprite__mario--down') 
        if(hold_key_duration >= 3000){
             mario_sprite.classList.add('sprite__mario--down-anim') 
             setTimeout(()=>{

             mario_sprite.classList.add('sprite__mario--down-falling') 
             }, 500)
             setTimeout(()=>{
                 mario_sprite.classList.remove('sprite__mario--down-anim') 
                 mario_sprite.classList.remove('sprite__mario--down-falling')
                 }, 1100)
        }
    }   

    else if(type == "keyup"){
        mario_sprite.classList.remove('sprite__mario--down')
        
        }

}

function handleJump(type){
    
    if(type == "keydown"){
        mario_sprite.classList.add('sprite__mario--jump');
        block_sprite.classList.add('sprite__block--push');
        newCoin();
    } else{
        mario_sprite.classList.remove('sprite__mario--jump');
        block_sprite.classList.remove ('sprite__block--push');

    }
}

function handleLookUp(type){
    const credits = document.querySelector('.sprite__credits');
    if(type == "keydown"){
        mario_sprite.classList.add('sprite__mario--look-up');
        credits.classList.add('sprite__credits--show')
    }else{
        mario_sprite.classList.remove('sprite__mario--look-up');
        credits.classList.remove('sprite__credits--show')
    }
}

function newCoin(){
    const count_div = document.querySelector('.ui__num');
    coins++;
    count_div.innerText = coins;
    const coin = document.createElement('div');
    coin.setAttribute('class', 'sprite sprite__coin')
    document.body.appendChild(coin);
    setTimeout(function(){
        document.body.removeChild(coin);
    }, 500)
}