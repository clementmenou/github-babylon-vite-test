import * as BABYLON from 'babylonjs';

const canvas = document.getElementById('renderCanvas');

const engine = new BABYLON.Engine(canvas);

const createScene = function() {
  const scene = new BABYLON.Scene(engine);

  scene.createDefaultCameraOrLight(true, false, true);
  const box = new BABYLON.MeshBuilder.CreateBox('myBox', {
    size: 0.2,
    width: .1,
    height: .3,
    depth: .1,
    colors: [
      new BABYLON.Color4(1, 0, 0, .4)
    ]
  });

  // const sphere = new BABYLON.MeshBuilder.CreateSphere('mySphere', {
  //   segments: 50,
  //   diameter: 0.3,
  //   diameterX: 0.1
  // });

  return scene;
}

const scene = createScene();

engine.runRenderLoop(function () {
  scene.render();
});

window.addEventListener('resize', function() {
  engine.resize();
});

