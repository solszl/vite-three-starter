import * as THREE from "three";
import { scene, sizes } from "./renderer";

const VERTICAL_FIELD_OF_VIEW = 45;

export const camera = new THREE.PerspectiveCamera(
  VERTICAL_FIELD_OF_VIEW,
  sizes.width / sizes.height
);

camera.position.set(9, 4, 9);

window.addEventListener("resize", () => {
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();
});

scene.add(camera);

export default camera;
