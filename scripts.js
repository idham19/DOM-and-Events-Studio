// Write your JavaScript code here.
const takeoff=document.getElementById('takeoff')
const flightStatus=document.getElementById('flightStatus')
const shuttleBackground=document.getElementById('shuttleBackground')
const shuttleHeight=document.getElementById("spaceShuttleHeight")
const land=document.getElementById('landing')
const abort =document.getElementById('missionAbort')
const rocket=document.getElementById('rocket')
const up=document.getElementById('up')
const down=document.getElementById('down')
const left=document.getElementById('left')
const right=document.getElementById('right')


takeoff.addEventListener('click',()=>{
    if(confirm('Confirm that the shuttle is ready for takeoff')){
        flightStatus.innerHTML="shuttle in flight"
        shuttleBackground.style.backgroundColor="blue"
        shuttleHeight.innerHTML=10000
        rocket.style.transform='translateY(0px)'
    }
})
land.addEventListener('click',()=>{
    alert('The shuttle is landing. Landing gear engaged.')
    flightStatus.innerText='The shuttle has landed'
    shuttleBackground.style.backgroundColor='green'
    shuttleHeight.innerHTML=0
    rocket.style.transform='translateY(250px)'
})

abort.addEventListener('click',()=>{
    if(confirm('Confirm that you want to abort the mission.')){
        flightStatus.innerHTML='Mission aborted'
        shuttleBackground.style.backgroundColor='green'
        shuttleHeight.innerHTML=0
        rocket.style.transform='translateY(250px)'
    }
})
up.addEventListener('click',()=>{
    rocket.style.transform+= 'translateY(-10px)'

})
down.addEventListener('click',()=>{
    rocket.style.transform+= 'translateY(10px)'

})
left.addEventListener('click',()=>{
    rocket.style.transform+= 'translateX(-10px)'

})
right.addEventListener('click',()=>{
    rocket.style.transform+= 'translateX(10px)'

})
// Remember to pay attention to page loading!

window.addEventListener('load', (event) => {
    console.log('page is fully loaded');
  });