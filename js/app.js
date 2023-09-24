import { Factory } from '/js/factory.js';
import { Grid } from '/js/grid.js';                // grid made with lines

// Create your scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);

var factory = new Factory(0, 0, 5, 10);



initialize();
animate();

function initialize() {
    var grid = new Grid(6, 4, scene, -3, 2);   //for line grid

}


function animate() {
    requestAnimationFrame(animate);
    
    factory.renderScene(scene);
}

