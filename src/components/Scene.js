import React, { useRef } from "react";
import { useLoader } from "react-three-fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { DRACOLoader } from "three/examples/jsm/loaders/DRACOLoader";


export default function Model(props) {
  const group = useRef();
  const { nodes, materials } = useLoader(
    GLTFLoader,
    `../Jacket/scene.gltf`,
    loader => {
      const dracoLoader = new DRACOLoader();
      dracoLoader.setDecoderPath("/draco-gltf/");
      loader.setDRACOLoader(dracoLoader);
    }
  );

  return (
    <group ref={group} dispose={null} castShadow receiveShadow>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            material={materials.Jacket_Lv2_Jacket}
            material-color={props.color}
            geometry={nodes.defaultMaterial.geometry}
          />
        </group>
      </group>
    </group>
  );
}
