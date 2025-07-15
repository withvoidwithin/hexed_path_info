function InitPage() {
  InitComponents();

  document.getElementById("LoadingTitle").style.display = false;
}

function InitComponents() {
  const r = new rive.Rive({
    src: "assets/background.riv",
    canvas: document.getElementById("background"),
    autoplay: true,
    stateMachines: "IDLE",
  });
}

window.addEventListener("DOMContentLoaded", InitComponents);
