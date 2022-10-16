// precision mediump float;

// uniform vec3 colorA;
// uniform vec3 colorB;
// varying vec3 vUv;

// void main() {
  //   gl_FragColor = vec4(mix(colorA, colorB, vUv.z), 1.0);
// }

varying vec2 vUv;

void main()
{
  gl_FragColor = vec4(vUv, 0.5, 1.0);
}