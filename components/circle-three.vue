<template>
  <div class="circle-wrap">
    <div id="info">
	  </div>
  </div>
</template>

<script>
import Stats from '../node_modules/three/examples/jsm/libs/stats.module.js';
import { TrackballControls } from '../node_modules/three/examples/jsm/controls/TrackballControls.js';
import { OrbitControls } from '../node_modules/three/examples/jsm/controls/OrbitControls.js';

export default {
  data() {
    return {
      camera: null,
      scene: null,
      renderer: null,
      mesh: null,
      controls:null,
      isMouseDown:false
    };
  },
  mounted() {
    this.init();
    this.animate();
  },
  methods: {
    //初始化球
    init() {
      this.renderer = new THREE.WebGLRenderer( { antialias: true } );
      this.renderer.setPixelRatio( window.devicePixelRatio );
      this.renderer.setSize( 421, 421 );
      document.getElementById('info').appendChild( this.renderer.domElement );

      this.scene = new THREE.Scene();

      // fov — 摄像机视锥体垂直视野角度   aspect — 摄像机视锥体长宽比   near — 摄像机视锥体近端面   far — 摄像机视锥体远端面
      this.camera = new THREE.PerspectiveCamera( 45.0, 1, 100, 1500.0 );
      this.camera.position.z = 350.0;
      //从一个点向各个方向发射的光源
      const light = new THREE.PointLight( 0xffffff, 0.7 );
      this.camera.add( light );

      this.scene.add( this.camera );
      //环境光会均匀的照亮场景中的所有物体。
      this.scene.add( new THREE.AmbientLight( 0xffffff, 0.2 ) );

      this.initc();

      // window.addEventListener( 'resize', this.onWindowResize, false );
      document.getElementById('info').addEventListener('mousemove', this.onMouseDown);
      document.getElementById('info').addEventListener('mouseleave', this.onMouseUp);
    },
    onMouseDown(){
      this.isMouseDown = true;
    },
    onMouseUp(){
      this.isMouseDown = false;
    },
    initc() {
      //radius — 球体半径，默认为1。
      //widthSegments — 水平分段数（沿着经线分段），最小值为3，默认值为8
      //heightSegments — 垂直分段数（沿着纬线分段），最小值为2，默认值为6。
      //phiStart — 指定水平（经线）起始角度，默认值为0。。
      //phiLength — 指定水平（经线）扫描角度的大小，默认值为 Math.PI * 2。
      //thetaStart — 指定垂直（纬线）起始角度，默认值为0。
      //thetaLength — 指定垂直（纬线）扫描角度大小，默认值为 Math.PI。
      const sphereGeometry = new THREE.SphereBufferGeometry( 130, 20, 20 );
      // 材质
      const sphereMaterial = new THREE.MeshBasicMaterial( { color: 0x139484, wireframe: true, transparent: true, opacity: 0.3, } );
      this.mesh = new THREE.Mesh( sphereGeometry, sphereMaterial );
      let color = new THREE.Color( 0xffffff );
      this.scene.add( this.mesh );
      this.scene.background =color;
    },
    onWindowResize() {
      this.camera.aspect = window.innerWidth / window.innerHeight;
			this.camera.updateProjectionMatrix();
			this.renderer.setSize( window.innerWidth, window.innerHeight );
    },
    // 动画
    animate() {
      requestAnimationFrame( this.animate );
      this.renderer.render( this.scene, this.camera );
       if(!this.isMouseDown){
          // this.mesh.rotation.x += 0.01;
          this.mesh.rotation.y += 0.01;
       }
    }
  }
};
</script>

<style lang="less" scoped>
.circle-wrap {
  position: relative;
}

#info {
    position: absolute;
    width: 421px;
    height: 421px;
    left: 50%;
    transform: translate(-50%);
  }

</style>
