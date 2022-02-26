const timeElement = document.getElementById('time');
const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');

//経過時間のミリ秒
let elapsed = 0;

let intervalId = null;

function updateTime(){
  const ms = Math.floor(elapsed % 1000);
  const sec = Math.floor(elapsed / 1000) % 60;
  const min = Math.floor(elapsed / (1000*60))% 60;
  const hour = Math.floor(elapsed / (1000*60*60));
  
  const msStr = ms.toString().padStart(1, '0').slice(0,1);
  const sStr = sec.toString().padStart(1, '0');
  const mStr = min.toString().padStart(1, '0');
  const hStr = hour.toString().padStart(1, '0');
  
  timeElement.innerHTML = `${hStr}:${mStr}:${sStr}:${msStr}`;
}
  
start.addEventListener('click', function(e){
  if (intervalId !== null){ return; }
  let pre = new Date();
  intervalId = setInterval(function(){
    const now = new Date();
    elapsed += now - pre;
    pre = now
    updateTime();
    }, 100);
});

stop.addEventListener('click', function(e){
  clearInterval(intervalId);
  intervalId = null;
});

reset.addEventListener('click', function(e){
  elapsed = 0;
  updateTime();
});