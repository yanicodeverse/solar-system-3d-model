import React, { useRef } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { OrbitControls, Stars } from "@react-three/drei";
import * as THREE from "three";

//images
import EarthDayMap from "../../assets/textures/8k_earth_daymap.jpg";
import EarthNormalMap from "../../assets/textures/8k_earth_normal_map.jpg";
import EarthSpecularMap from "../../assets/textures/8k_earth_specular_map.jpg";
import EarthCloudsMap from "../../assets/textures/8k_earth_clouds.jpg";
import sunTexture from "../../assets/textures/img/sun.jpg";
import mercuryTexture from "../../assets/textures/img/mercury.jpg";
import venusTexture from "../../assets/textures/img/venus.jpg";
import marsTexture from "../../assets/textures/img/mars.jpg";
import jupiterTexture from "../../assets/textures/img/jupiter.jpg";
import saturnTexture from "../../assets/textures/img/saturn.jpg";
import saturnRingTexture from "../../assets/textures/img/saturn ring.png";
import uranusTexture from "../../assets/textures/img/uranus.jpg";
import neptuneTexture from "../../assets/textures/img/neptune.jpg";

const Earth = (props) => {
  const [
    colorMap,
    normalMap,
    specularMap,
    cloudsMap,
    sun,
    mercury,
    venus,
    mars,
    jupiter,
    saturn,
    saturnRing,
    uranus,
    neptune,
  ] = useLoader(TextureLoader, [
    EarthDayMap,
    EarthNormalMap,
    EarthSpecularMap,
    EarthCloudsMap,
    sunTexture,
    mercuryTexture,
    venusTexture,
    marsTexture,
    jupiterTexture,
    saturnTexture,
    saturnRingTexture,
    uranusTexture,
    neptuneTexture,
  ]);

  const sunRef = useRef();
  const mercuryRef = useRef();
  const mercuryObjRef = useRef();
  const venusRef = useRef();
  const venusObjRef = useRef();
  const earthRef = useRef();
  const earthObjRef = useRef();
  const cloudsRef = useRef();
  const marsRef = useRef();
  const marsObjRef = useRef();
  const jupiterRef = useRef();
  const jupiterObjRef = useRef();
  const saturnRef = useRef();
  const saturnObjRef = useRef();
  const saturnRingRef = useRef();
  const uranusRef = useRef();
  const uranusObjRef = useRef();
  const neptuneRef = useRef();
  const neptuneObjRef = useRef();

  useFrame(({ clock }) => {
    const elapsedTime = clock.getElapsedTime();

    sunRef.current.rotation.y = elapsedTime / 12;
    mercuryRef.current.position.x = 30;
    mercuryRef.current.rotation.y = elapsedTime / 2;
    mercuryObjRef.current.rotation.y = elapsedTime;
    venusRef.current.position.x = 60;
    venusRef.current.rotation.y = elapsedTime / 2;
    venusObjRef.current.rotation.y = elapsedTime / 1.5;
    earthRef.current.position.x = 75;
    cloudsRef.current.position.x = 75;
    cloudsRef.current.rotation.y = elapsedTime / 10;
    earthRef.current.rotation.y = elapsedTime / 10;
    earthObjRef.current.rotation.y = elapsedTime / 3;
    marsRef.current.position.x = 95;
    marsRef.current.rotation.y = elapsedTime / 3.6;
    marsObjRef.current.rotation.y = elapsedTime / 3.5;
    jupiterRef.current.position.x = 120;
    jupiterRef.current.rotation.y = elapsedTime / 3.9;
    jupiterObjRef.current.rotation.y = elapsedTime / 3.9;
    saturnRef.current.position.x = 170;
    saturnRingRef.current.position.x = 170;
    saturnRingRef.current.rotation.x = -0.5 * Math.PI;
    saturnRef.current.rotation.y = elapsedTime / 4;
    saturnObjRef.current.rotation.y = elapsedTime / 4;
    uranusRef.current.position.x = 190;
    uranusRef.current.rotation.y = elapsedTime / 5;
    uranusObjRef.current.rotation.y = elapsedTime / 5;
    neptuneRef.current.position.x = 210;
    neptuneRef.current.rotation.y = elapsedTime / 6;
    neptuneObjRef.current.rotation.y = elapsedTime / 6;
  });

  return (
    <>
      <pointLight color="#f8f5e6" position={[2, 0, 2]} intensity={1.6} />
      <Stars radius={300} depth={60} count={2000} factor={6} fade={true} />
      {/* SUN  */}
      <mesh ref={sunRef}>
        {/* <ambientLight intensity={1} />
         */}
        <sphereGeometry args={[16, 30, 30]} />
        <meshBasicMaterial map={sun} />
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          enableRotate={true}
          zoomSpeed={0.6}
          panSpeed={0.5}
          rotateSpeed={0.4}
        />
      </mesh>

      {/* MERCURY  */}
      <mesh ref={mercuryObjRef}>
        <mesh ref={mercuryRef}>
          <sphereGeometry args={[3.5, 30, 30]} />
          <meshStandardMaterial map={mercury} />
          <OrbitControls
            enableZoom={true}
            enablePan={true}
            enableRotate={true}
            zoomSpeed={0.6}
            panSpeed={0.5}
            rotateSpeed={0.4}
          />
        </mesh>
      </mesh>

      {/* VENUS  */}
      <mesh ref={venusObjRef}>
        <mesh ref={venusRef}>
          <sphereGeometry args={[3.9, 30, 30]} />
          <meshStandardMaterial map={venus} />
          <OrbitControls
            enableZoom={true}
            enablePan={true}
            enableRotate={true}
            zoomSpeed={0.6}
            panSpeed={0.5}
            rotateSpeed={0.4}
          />
        </mesh>
      </mesh>

      {/* EARTH  */}

      <mesh ref={earthObjRef}>
        <mesh ref={cloudsRef}>
          <sphereGeometry args={[5.002, 30, 30]} />
          <meshPhongMaterial
            map={cloudsMap}
            opacity={0.4}
            depthWrite={true}
            transparent={true}
            side={THREE.DoubleSide}
          />
        </mesh>
        <mesh ref={earthRef}>
          <sphereGeometry args={[5, 30, 30]} />
          <meshPhongMaterial specularMap={specularMap} />
          <meshStandardMaterial
            map={colorMap}
            normalMap={normalMap}
            metalness={0.4}
            roughness={0.6}
          />
          <OrbitControls
            enableZoom={true}
            enablePan={true}
            enableRotate={true}
            zoomSpeed={0.6}
            panSpeed={0.5}
            rotateSpeed={0.4}
          />
        </mesh>
      </mesh>

      {/* MARS  */}
      <mesh ref={marsObjRef}>
        <mesh ref={marsRef}>
          <sphereGeometry args={[3.9, 30, 30]} />
          <meshStandardMaterial map={mars} />
          <OrbitControls
            enableZoom={true}
            enablePan={true}
            enableRotate={true}
            zoomSpeed={0.6}
            panSpeed={0.5}
            rotateSpeed={0.4}
          />
        </mesh>
      </mesh>

      {/* JUPITER  */}
      <mesh ref={jupiterObjRef}>
        <mesh ref={jupiterRef}>
          <sphereGeometry args={[8, 30, 30]} />
          <meshStandardMaterial map={jupiter} />
          <OrbitControls
            enableZoom={true}
            enablePan={true}
            enableRotate={true}
            zoomSpeed={0.6}
            panSpeed={0.5}
            rotateSpeed={0.4}
          />
        </mesh>
      </mesh>

      {/* SATURN  */}
      <mesh ref={saturnObjRef}>
        <mesh ref={saturnRingRef}>
          <ringGeometry args={[10, 20, 32]} />
          <meshBasicMaterial
            map={saturnRing}
            enablePan={true}
            enableRotate={true}
            side={THREE.DoubleSide}
          />
        </mesh>

        <mesh ref={saturnRef}>
          <sphereGeometry args={[7.5, 30, 30]} />
          <meshStandardMaterial map={saturn} />
          <OrbitControls
            enableZoom={true}
            enablePan={true}
            enableRotate={true}
            zoomSpeed={0.6}
            panSpeed={0.5}
            rotateSpeed={0.4}
          />
        </mesh>
      </mesh>

      {/* URANUS  */}
      <mesh ref={uranusObjRef}>
        <mesh ref={uranusRef}>
          <sphereGeometry args={[6.2, 30, 30]} />
          <meshStandardMaterial map={uranus} />
          <OrbitControls
            enableZoom={true}
            enablePan={true}
            enableRotate={true}
            zoomSpeed={0.6}
            panSpeed={0.5}
            rotateSpeed={0.4}
          />
        </mesh>
      </mesh>

      {/* NEPTUNE  */}
      <mesh ref={neptuneObjRef}>
        <mesh ref={neptuneRef}>
          <sphereGeometry args={[6, 30, 30]} />
          <meshStandardMaterial map={neptune} />
          <OrbitControls
            enableZoom={true}
            enablePan={true}
            enableRotate={true}
            zoomSpeed={0.6}
            panSpeed={0.5}
            rotateSpeed={0.4}
          />
        </mesh>
      </mesh>
    </>
  );
};

export default Earth;
