import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { TextureLoader } from 'three';
const modelloader = new GLTFLoader();
const textureloader = new TextureLoader();
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setPixelRatio( window.devicePixelRatio );
//document.getElementById("overlay").appendChild( renderer.domElement );
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 40, window.innerWidth / window.innerHeight, 0.1, 1000 );
camera.position.set( 5, 2, 8 );
const controls = new OrbitControls( camera, renderer.domElement );
controls.target.set( 0, 0.5, 0 );
controls.update();
controls.enablePan = true;
controls.enableDamping = true;
//controls.autoRotate = true

// Load Light
var directionalLight = new THREE.DirectionalLight( 0xffffff ,3);//like the sun, light in specific direction
directionalLight.position.set( 0, 1, 2 ).normalize();
scene.add( directionalLight );
//var ambientLight = new THREE.ambientLight

// var pillar;
// modelloader.load( '/Pillars.glb', function ( gltf ) {
//     pillar = gltf.scene;
//     pillar.scale.set(4,4,4)
//     pillar.position.y -= 25
//     pillar.position.x += 5
// 	scene.add( pillar );
//     console.log("Done adding to scene")
// },function ( xhr ) {

//     console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );

// },
// function ( error ) {

//     console.log( 'An error happened' );

// }
// )
textureloader.load(
    './sp.jpg', function( data ){
        data.mapping = THREE.EquirectangularReflectionMapping;
        data.colorSpace = THREE.SRGBColorSpace;
        scene.background = data;
        scene.environment = data;
    },function ( xhr ) {

        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    
    },
    function ( error ) {
    
        console.log( 'An error happened' );
    
    },
)
window.addEventListener( 'resize', onWindowResize );
function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );

}
camera.position.z = 15;
function animate() {
    requestAnimationFrame( animate );
    //scene.getObjectById(1).rotateY(1);
    //pillar.rotation.y += 0.01;
    controls.update();
	renderer.render( scene, camera );
}

animate();