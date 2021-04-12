import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
} from '@angular/core';

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import { DragControls } from 'three/examples/jsm/controls/DragControls';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, AfterViewInit {
  @ViewChild('view', { static: false }) view!: ElementRef;
  private renderer: any;
  private camera: any;
  private scene: any;
  private cameraControls: any;
  private wallrightBox: any;
  wallleftBox: any;
  wallbackBox: any;
  wallfrontBox: any;
  targetList: any = [];
  constructor(private apprenderer: Renderer2) {}

  ngOnInit() {
    this.init();
    this.animate();
  }
  ngAfterViewInit() {
    //this.apprenderer.appendChild(this.view.nativeElement, this.objRender);
  }

  private init() {
    const container = document.getElementById('container');

    // this.renderer
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    (container as any).appendChild(this.renderer.domElement);

    // this.scene
    this.scene = new THREE.Scene();

    this.scene.background = new THREE.Color(0xffffff);
    // this.camera
    this.camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      500
    );
    this.camera.position.set(0, 75, 160);

    this.cameraControls = new OrbitControls(
      this.camera,
      this.renderer.domElement
    );
    this.cameraControls.target.set(0, 40, 0);
    this.cameraControls.maxDistance = 400;
    this.cameraControls.minDistance = 10;
    this.cameraControls.update();

    const planeGeo = new THREE.PlaneGeometry(100.1, 100.1);

    // walls
    const planeTop = new THREE.Mesh(
      planeGeo,
      new THREE.MeshPhongMaterial({ color: 0xffffff })
    );
    planeTop.position.y = 100;
    planeTop.rotateX(Math.PI / 2);
    this.scene.add(planeTop);

    const planeBottom = new THREE.Mesh(
      planeGeo,
      new THREE.MeshPhongMaterial({ color: 0xffffff })
    );
    planeBottom.rotateX(-Math.PI / 2);
    this.scene.add(planeBottom);

    const planeFront = new THREE.Mesh(
      planeGeo,
      new THREE.MeshPhongMaterial({ color: 0x24986c })
    );
    planeFront.position.z = 50;
    planeFront.position.y = 50;
    planeFront.rotateY(Math.PI);
    this.scene.add(planeFront);
    this.wallfrontBox = new THREE.BoxHelper(planeFront);
    //this.wallfrontBox.update(planeFront);
    this.scene.add(this.wallfrontBox);
    const planeBack = new THREE.Mesh(
      planeGeo,
      new THREE.MeshPhongMaterial({ color: 0x5799ec })
    );
    planeBack.position.z = -50;
    planeBack.position.y = 50;
    this.scene.add(planeBack);

    const planeRight = new THREE.Mesh(
      planeGeo,
      new THREE.MeshPhongMaterial({ color: 0x00ff00 })
    );
    planeRight.position.x = 50;
    planeRight.position.y = 50;
    planeRight.rotateY(-Math.PI / 2);
    this.scene.add(planeRight);

    const planeLeft = new THREE.Mesh(
      planeGeo,
      new THREE.MeshPhongMaterial({ color: 0xff0000 })
    );
    planeLeft.position.x = -50;
    planeLeft.position.y = 50;
    planeLeft.rotateY(Math.PI / 2);
    this.scene.add(planeLeft);

    // lights
    const mainLight = new THREE.PointLight(0xcccccc, 1.5, 250);
    mainLight.position.y = 60;
    this.scene.add(mainLight);

    const greenLight = new THREE.PointLight(0x00ff00, 0.25, 1000);
    greenLight.position.set(550, 50, 0);
    this.scene.add(greenLight);

    const redLight = new THREE.PointLight(0xff0000, 0.25, 1000);
    redLight.position.set(-550, 50, 0);
    this.scene.add(redLight);

    const blueLight = new THREE.PointLight(0x7f7fff, 0.25, 1000);
    blueLight.position.set(0, 50, 550);
    this.scene.add(blueLight);

    this.addCube();
  }

  animate = () => {
    requestAnimationFrame(this.animate);

    this.renderer.render(this.scene, this.camera);
  };

  addCube() {
    const geometry = new THREE.BoxGeometry(20, 20, 50);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    //cube.position.set(50, 50, 50);
    cube.position.y = 7.5 + 15 * Math.sin((Math.PI / 180) * 30);
    console.log(cube.position);
    this.scene.add(cube);
    this.targetList.push(cube);
    this.registerDrag(cube);
  }

  registerDrag(objects: any) {
    const controls = new DragControls(
      [objects],
      this.camera,
      this.renderer.domElement
    );

    //add event listener to highlight dragged objects
    controls.addEventListener('dragstart', (event) => {
      this.cameraControls.enabled = false;
    });

    controls.addEventListener('dragend', (event) => {
      this.cameraControls.enabled = true;
    });
  }
}
