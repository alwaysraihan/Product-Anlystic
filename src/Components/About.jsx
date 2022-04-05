import { OrbitControls, useGLTF } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React, { Suspense, useRef } from "react";

const Model = ({ ...props }) => {
  const group = useRef();
  const { nodes, materials } = useGLTF("/scene.gltf");
  return (
    <group ref={group} {...props} dispose={null} scale={2}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.01}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group
            position={[407.62, 590.39, -100.55]}
            rotation={[1.89, 0.88, -2.05]}
            scale={100}
          >
            <group rotation={[Math.PI / 2, 0, 0]} />
          </group>
          <group
            position={[735.89, 495.83, 692.58]}
            rotation={[Math.PI, 0.76, 2.68]}
            scale={100}
          />
          <group
            position={[0, 283.02, 133.14]}
            rotation={[0.34, 0, 0]}
            scale={100}
          >
            <group rotation={[Math.PI / 2, 0, 0]} />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={nodes.Base_TVBase_0.geometry}
              material={materials.TVBase}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={nodes.Screen_TVScreen_0.geometry}
              material={materials.TVScreen}
            />
          </group>
          <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
            <mesh
              geometry={nodes.Panel_Panel_0.geometry}
              material={materials.Panel}
            />
          </group>
        </group>
      </group>
    </group>
  );
};

const About = () => {
  return (
    <>
      <h1 className="text-3xl text-center text-blue-600 my-10 font-bold">
        About Us
      </h1>
      <div className="product-canvas my-10 px-10 md:px-[20%]">
        <div className="rounded shadow-lg h-[500px] p-5 shadow-gray-200 hover:shadow-gray-300 flex justify-center items-center">
          <Canvas>
            <Suspense fallback={null}>
              <ambientLight />
              <spotLight
                intensity={0.9}
                angle={0.1}
                penumbra={1}
                position={[10, 15, 10]}
                castShadow
              />
              <Model />
              <OrbitControls
                enablePan={true}
                enableZoom={true}
                enableRotate={true}
                autoRotate={true}
              />
            </Suspense>
          </Canvas>
        </div>
                <h1 className="text-center my-5 text-blue-600 font-bold text-2xl">Rotate for 3d view</h1>
      </div>
      <div className="px-[10%]">
        <p>
          Apple TV 4K with Siri Remote is designed with the following features
          to reduce its environmental impact:7 See the Apple TV 4K Product
          Environmental Report Made with better materials 100% recycled aluminum
          in the Siri Remote enclosure 100% recycled tin in the solder of the
          main logic board 35% or more recycled plastic in multiple components
          Energy efficient ENERGY STAR® certified8 Smarter chemistry9 Mercury-,
          BFR-, PVC-, and beryllium-free Green manufacturing Apple's Zero Waste
          Program helps suppliers eliminate waste sent to landfill All final
          assembly supplier sites are transitioning to 100% renewable energy for
          Apple production Responsible packaging 100% of virgin wood fiber comes
          from responsibly managed forests Recyclable, majority-fiber packaging
        </p>
      </div>
    </>
  );
};

export default About;
