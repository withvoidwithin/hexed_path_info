const PanelBackground = document.getElementById("Background");
const PanelLoadignTitle = document.getElementById("LoadingTitle");
const PanelContent = document.getElementById("Content");

function OnBackgroundLoaded() {
  PanelLoadignTitle.style.display = false;
  PanelContent.classList.remove("IsHidden");
}

function InitComponents() {
  const r = new rive.Rive({
    src: "assets/background.riv",
    canvas: PanelBackground,
    autoplay: true,
    stateMachines: "IDLE",
    onLoad: OnBackgroundLoaded,
  });
}

InitComponents();
