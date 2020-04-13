function init() {
    //create a scene.
    var scene = new THREE.Scene();
    //cerate a camera
    var camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);

    var renderer = new THREE.WebGLRenderer();
    renderer.setClearColor(new THREE.Color(0x000000));
    renderer.setSize(window.innerWidth, window.innerHeight);

    //create the ground plane
    var planeGeometry = new THREE.PlaneGeometry(60,30);
    var planeMaterial = new THREE.MeshBasicMaterial({color: 0xAAAAAA});
    var plane = new THREE.Mesh(planeGeometry, planeMaterial);

    scene.add(plane);

    camera.position.set(-30, 40, 30);
    camera.lookAt(scene.position);

    document.getElementById("webgl-output").appendChild(renderer.domElement);

    renderer.render(scene, camera);
}