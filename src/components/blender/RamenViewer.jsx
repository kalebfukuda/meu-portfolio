import React, { Suspense, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Html, Stage } from "@react-three/drei";

// Simple wrapper component to load a GLB hosted in /public/models/model.glb
function Model({ url = "/models/ramen_shop.glb", scale = 1 }) {
  // useGLTF caches and parses glTF/GLB files
  const gltf = useGLTF(url);
  return <primitive object={gltf.scene} scale={scale} />;
}

// Fallback spinner overlay while the 3D model loads
function LoaderFallback() {
  return (
    <Html center>
      <div
        style={{
          background: "rgba(0,0,0,0.6)",
          color: "white",
          padding: "8px 12px",
          borderRadius: 8,
        }}
      >
        Loading 3D model...
      </div>
    </Html>
  );
}

export default function ModelViewer({
  modelPath = "/models/model.glb",
  height = 500,
}) {
  return (
    <div style={{ width: "100%", height }}>
      <Canvas dpr={[1, 2]} shadows>
        <ambientLight intensity={0.6} />
        <directionalLight position={[5, 10, 5]} intensity={1} castShadow />
        <Suspense fallback={<LoaderFallback />}>
          {/* Stage gives automatic lighting + ground */}
          <Stage environment="city" intensity={0.8}>
            <Model url={modelPath} scale={1} />
          </Stage>
        </Suspense>
        <OrbitControls makeDefault enablePan={true} />
      </Canvas>
    </div>
  );
}
