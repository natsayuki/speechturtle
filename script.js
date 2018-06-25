let mic;
function setup(){
  mic = new p5.AudioIn();
  mic.start();
}
function draw(){
  let vol = mic.getLevel();
  let deg = 1500 * vol;
  if(deg > 50) deg = 50;
  console.log(deg);
  $('#mouth').css({'transform': 'rotate(' + deg + 'deg)'});
}
