<template>
  <div>
   <div id="info">
		</div>
  </div>
</template>

<script>
import Stats from '../node_modules/three/examples/jsm/libs/stats.module.js';
import { TrackballControls } from '../node_modules/three/examples/jsm/controls/TrackballControls.js';
import { OrbitControls } from '../node_modules/three/examples/jsm/controls/OrbitControls.js';
let camera, scene, renderer, controls, stats;

export default {
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null,
      controls:null,
      isMouseDown:false,
      particles: [],
      count: 0,
      arr: [],
      mouseX: 0,
      mouseY: 0,
    };
  },
  mounted() {
    this.init();
    this.animate()
  },
  methods: {
    //初始化
    init() {
				this.renderer = new THREE.WebGLRenderer( { antialias: true } );
				this.renderer.setPixelRatio( window.devicePixelRatio );
				this.renderer.setSize( window.innerWidth,  window.innerHeight );
				document.getElementById('info').appendChild( this.renderer.domElement );
        document.getElementById('info').addEventListener('mousemove', this.onDocumentMouseMove, false);

        // fov — 摄像机视锥体垂直视野角度   aspect — 摄像机视锥体长宽比   near — 摄像机视锥体近端面   far — 摄像机视锥体远端面
				this.camera = new THREE.PerspectiveCamera( 45.0, window.innerWidth / window.innerHeight, 100, 1500.0 );
				this.camera.position.set( 0, 0, 1000 );
        this.camera.lookAt( 0, 0, 0 );   
        
        // var particles = new Array();
        // 线的材质
        let material = new THREE.LineBasicMaterial( { color: 0x0000ff } );
        this.scene = new THREE.Scene();

        for (let i = 0; i <= 30; i++) {
            let y = 8*i 
            let w = 40 * i 
            let a = new THREE.Vector2(-1000,y);
            let b = new THREE.Vector2(-300,y+300);
            let c = new THREE.Vector2(600,y-300);
            let d = new THREE.Vector2(1000,y);
            
            this.particles[i] = [a,b,c,d]
            const curve = new THREE.SplineCurve([a,b,c,d])
            const points = curve.getPoints( 50 );
            const geometry = new THREE.BufferGeometry().setFromPoints( points );
            let line = new THREE.Line( geometry, material );
            this.arr.push(line)
            this.scene.add(line);
        }

        this.scene.add( this.camera );

        let light = new THREE.DirectionalLight(0xFF0000, 1.0, 0);  // THREE.DirectionalLight平行光可以看作距离很远的光
        light.position.set(100, 100, 200);  // 坐标
        this.scene.add(light);  // 添加到场景中

        this.renderer.render( this.scene, this.camera );

      },
      onDocumentMouseMove(event) {
        let windowHalfX = window.innerWidth / 2;
        let windowHalfY = window.innerHeight / 2;
        this.mouseX = event.clientX - windowHalfX;
        this.mouseY = event.clientY - windowHalfY;
      },
      // 动画
    animate() {
      requestAnimationFrame(this.animate);
      this.renderFn()
    },
    //执行渲染操作
    renderFn() {
      this.camera.position.x += ( this.camera.position.x) * .05;
       this.camera.position.y += ( this.camera.position.y) * .05;
       this.camera.lookAt( this.scene.position);
       for (let i = 0; i <= this.arr.length; i++) {
            let a = this.arr[i]
            if (a) {
              a.position.y = (Math.sin((i + this.count) * 0.3) * 5) + (Math.sin((i + this.count) * 0.5) * 5) + this.mouseX;
              // a.position.x = this.mouseX;
              a.scale.x = (Math.sin((i + this.count) * 0.08))  + (Math.sin((i + this.count) * 0.1))*0.1 ;
              a.scale.y = (Math.sin((i + this.count) * 0.08))  + (Math.sin((i + this.count) * 0.1))*0.1 ;
            }
           
        }
      this.renderer.render(this.scene, this.camera);
      this.count += 0.01;
    }
  }
};
</script>

<style>
#info {
  position: absolute;
  width: 421px;
  height: 421px;
}

</style>