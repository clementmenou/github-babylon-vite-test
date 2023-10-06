import * as BABYLON from 'babylonjs';

const canvas = document.getElementById('renderCanvas');

const engine = new BABYLON.Engine(canvas);

const createScene = async function() {
  const scene = new BABYLON.Scene(engine);

  // scene.createDefaultCameraOrLight(true, false, true);

  const camera = new BABYLON.ArcRotateCamera('camera', 0, 0, 10, new BABYLON.Vector3(0, 0, 0), scene)
  
  camera.setPosition(new BABYLON.Vector3(2, 4, 5));
  camera.mode = BABYLON.Camera.ORTHOGRAPHIC_CAMERA;
  camera.orthoTop = 15;
  camera.orthoBottom = -15;
  camera.orthoLeft = -20;
  camera.orthoRight = 20;

  const box = new BABYLON.MeshBuilder.CreateBox('myBox', {
    size : 1,
    height: 3
  }, scene);

  box.enableEdgesRendering();
  box.edgesWidth = 1.0;
  box.edgesColor = new BABYLON.Color4(0, 1, 1, 1);

  const boxMaterial = new BABYLON.StandardMaterial();
  box.material = boxMaterial;
  boxMaterial.emissiveColor = new BABYLON.Color3(0, 1, 1);
  boxMaterial.alpha = .1;

  // boxMaterial.diffuseColor = new BABYLON.Color3(0, 1, 0);
  // boxMaterial.specularColor = new BABYLON.Color3(1, 0, 0);

  // boxMaterial.ambientColor = new BABYLON.Color3(0, 1, 1);
  // scene.ambientColor = new BABYLON.Color3(0, 1, 1);

  // boxMaterial.wireframe = true;


  // const ground = new BABYLON.MeshBuilder.CreateGround('', {
  //   height: 10,
  //   width: 10,
  //   subdivisions: 1
  // });

  // ground.material = new BABYLON.StandardMaterial();
  // ground.material.wireframe = true;

  // const groundFromHM = new BABYLON.MeshBuilder.CreateGroundFromHeightMap('', /* link to black and white image */, {
  //   height: 10,
  //   width: 10,
  //   subdivisions: 30
  // });

  // const light = new BABYLON.DirectionalLight(
  //   'directionnalLight',
  //   new BABYLON.Vector3(-2, -3, 0),
  //   scene
  // );
  // light.intensity = .5;

  const fontData = await (await fetch('/Montserrat_Bold.json')).json();
  const text = BABYLON.MeshBuilder.CreateText('', 'P', fontData, {
    size: 1,
    depth: .2
  }, scene);

  const textMaterial = new BABYLON.StandardMaterial();
  text.material = textMaterial;
  textMaterial.emissiveColor = new BABYLON.Color4(1, 1, 1, 1);

  return scene;
}

const scene = await createScene();

engine.runRenderLoop(function () {
  scene.render();
});

window.addEventListener('resize', function() {
  engine.resize();
});

