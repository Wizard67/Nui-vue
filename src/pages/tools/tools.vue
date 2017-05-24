<template>
  <article>
    <div ref="three" style="width: 100%;height: 30rem">
    </div>
  </article>

</template>

<script>

  var THREE = require('three')
  var MTLLoader = require('./loader/MTLLoader')
  var OBJLoader = require('./loader/OBJLoader')
  var OrbitControls = require('./controls/OrbitControls')

  export default {
    data(){
      return {
        el: {},

        camera: {},
        scene: {},
        renderer: {},

        mouseX: 0,
        mouseY: 0,

        width: 0,
        height: 0,
        windowHalfX: 0,
        windowHalfY: 0,

        mesh:{},
        test:{
          first: 1,
          second: {
            one: ['one'],
            two: ['two']
          }
        },
        test2:[{'nihao':1},{'buhao':2}]
      }
    },
    computed:{

    },
    methods:{
      // init camera, scene, renderer
      init(){
        // camera
        this.camera = new THREE.PerspectiveCamera( 75, this.width / this.height, 1, 10000 )
        // this.camera.up.set( 10, 10, 1.5 )
        this.camera.position.set( 0, 100, 150 )

        // scene
        var pointLight = new THREE.PointLight( 0xffffff, 0.6 )
        pointLight.position.set( 80, 90, 150 )
        var ambientLight = new THREE.AmbientLight( 0x999999 )

        this.scene = new THREE.Scene()
        this.scene.add( pointLight )
        this.scene.add( ambientLight )
        this.scene.add( this.camera )

        // renderer
        this.renderer = new THREE.WebGLRenderer({alpha:true, antialias: true})
        // this.renderer.setClearColor( 0x333333 )
        this.renderer.setPixelRatio( window.devicePixelRatio )
        this.renderer.setSize( this.width, this.height )
        this.el.appendChild( this.renderer.domElement )

        // object
        this.getObject().then((res)=>{
          this.scene.add(this.mesh)
          this.render()
        })

        // controls
        var controls = new THREE.OrbitControls( this.camera, this.renderer.domElement )
        // controls.target.set( 80, 65, 35 )
        controls.target.set( 0, 0, 0 )
        controls.update()

        controls.addEventListener( 'change', this.throttle( this.render, 50 ) )
        window.addEventListener( 'resize', this.throttle( this.onWindowResize, 50 ), false )
      },

      // listen resize event
      onWindowResize(){
        this.getSize()
        this.camera.aspect = this.width / this.height
        this.camera.updateProjectionMatrix()
        this.renderer.setSize( this.width, this.height )
        this.render()
      },

      render(){
        this.renderer.render( this.scene, this.camera )
      },

      // get container size
      getSize(){
        this.width = this.el.offsetWidth
        this.height = this.el.offsetHeight
      },

      // get object model
      getObject(){
        var MTLLoader = new THREE.MTLLoader()
        var objLoader = new THREE.OBJLoader()

        return new Promise ((resolve, reject)=>{
          MTLLoader.load('./static/obj.mtl', (materials) => {
            materials.preload()

            objLoader.setMaterials( materials )
            objLoader.load('./static/obj.obj', (object) => {
              object.scale.multiplyScalar( 5 );
              this.mesh = object
              resolve('ok')
            })
          })
        })
      },
    },
    mounted(){

      return

      this.el = this.$refs.three
      this.getSize()
      this.init()
    }
  }
</script>