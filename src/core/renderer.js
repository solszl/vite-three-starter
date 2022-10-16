import {
  ACESFilmicToneMapping,
  AxesHelper,
  Color,
  PCFShadowMap,
  Scene,
  sRGBEncoding,
  WebGLRenderer,
} from "three";

import { gui } from "./../gui/gui";

export const sizes = {
  width: window.innerWidth,
  height: window.innerHeight,
};

export const scene = new Scene();
scene.background = new Color("#333");

const canvas = document.querySelector("#root");
export const renderer = new WebGLRenderer({
  canvas,
  antialias: true,
  alpha: true,
});

// More realistic shadows
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = PCFShadowMap;
renderer.physicallyCorrectLights = true;
renderer.outputEncoding = sRGBEncoding;
renderer.toneMapping = ACESFilmicToneMapping;
renderer.toneMappingExposure = 1;

const axesHelper = new AxesHelper(50);
scene.add(axesHelper);

gui.addInput(axesHelper, "visible", {
  label: "AxesHelper",
});

function updateRenderer() {
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // To avoid performance problems on devices with higher pixel ratio
}

window.addEventListener("resize", () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
  updateRenderer();
});

updateRenderer();

export default {
  renderer,
  gui,
};
