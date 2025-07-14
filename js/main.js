import { Rive } from 'https://unpkg.com/@rive-app/canvas@2.10.0?module';

const riveCanvas = document.getElementById("riveCanvas");

const rive = new Rive({
  src: "../rive/hexed_path.riv", // путь к .riv
  canvas: riveCanvas,
  autoplay: true,
  artboard: "Main", // если не знаешь — можешь убрать
  stateMachines: [], // или укажи имя stateMachine
  onLoad: () => console.log("Rive loaded"),
});
