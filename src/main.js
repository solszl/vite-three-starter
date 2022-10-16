import * as THREE from "three";
import camera from "./core/camera";
import { controls } from "./core/orbit-control";
import { renderer, scene } from "./core/renderer";
import { fps } from "./gui/gui";
import "./style.css";

import frag from "./shaders/a.frag";
import vert from "./shaders/a.vert";

const box = new THREE.Mesh(
  new THREE.SphereGeometry(1, 32, 32),
  new THREE.ShaderMaterial({
    // uniforms: {
    //   colorB: { type: "vec3", value: new THREE.Color(0xacb6e5) },
    //   colorA: { type: "vec3", value: new THREE.Color(0x74ebd5) },
    // },
    uniforms: {
      uTime: { value: 0 },
      uFrequency: { value: new THREE.Vector2(20, 15) },
    },
    vertexShader: vert,
    fragmentShader: frag,
  })
);
box.position.set(0, 2, 0);
scene.add(box);

const plane = new THREE.Mesh(
  new THREE.PlaneGeometry(10, 10, 10, 10),
  new THREE.MeshToonMaterial({ color: "#444" })
);

plane.rotation.set(-Math.PI / 2, 0, 0);
plane.receiveShadow = true;
scene.add(plane);

const clock = new THREE.Clock();
const raf = () => {
  const elapsedTime = clock.getElapsedTime();
  fps.begin();
  box.material.uniforms.uTime.value = elapsedTime;
  controls.update();
  renderer.render(scene, camera);

  fps.end();

  requestAnimationFrame(raf);
};

raf();
