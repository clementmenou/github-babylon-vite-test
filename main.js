import * as BABYLON from 'babylonjs';

const canvas = document.getElementById('renderCanvas');

const engine = new BABYLON.Engine(canvas);

const createScene = async function() {
  const scene = new BABYLON.Scene(engine);

  // scene.createDefaultCameraOrLight(true, false, true);
  scene.createDefaultLight();
  
  const camera = new BABYLON.ArcRotateCamera('camera', 2, 1, 10, new BABYLON.Vector3(0, 0, 0), scene)
  camera.attachControl(true);
  camera.setPosition(new BABYLON.Vector3(0, 0, -20));

  // const box = new BABYLON.MeshBuilder.CreateBox('myBox', {
  //   size: 0.2,
  //   width: .1,
  //   height: .3,
  //   depth: .1,
  //   colors: [
  //     new BABYLON.Color4(1, 0, 0, .4)
  //   ]
  // });

  // const sphere = new BABYLON.MeshBuilder.CreateSphere('mySphere', {
  //   segments: 50,
  //   diameter: 0.3,
  //   diameterX: 0.1
  // });

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

  const fontData = await (await fetch('/Montserrat_Bold.json')).json();
  const text = BABYLON.MeshBuilder.CreateText('', 'A', fontData, {
    size: 1,
    depth: .3
  });

  return scene;
}

const scene = await createScene();

engine.runRenderLoop(function () {
  scene.render();
});

window.addEventListener('resize', function() {
  engine.resize();
});

