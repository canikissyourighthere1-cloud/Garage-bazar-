

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Sparkles, useGLTF } from "@react-three/drei";
import { motion } from "framer-motion";

function Car3D() {
  const gltf = useGLTF("/models/car.glb"); // Replace with real car GLTF
  return <primitive object={gltf.scene} scale={1.5} position={[0, -0.5, 0]} />;
}

function FloatingParts() {
  return (
    <>
      {[...Array(8)].map((_, i) => (
        <mesh key={i} position={[Math.random()*6-3, Math.random()*3+0.5, Math.random()*6-3]} rotation={[Math.random(), Math.random(), Math.random()]}>
          <torusGeometry args={[0.2, 0.05, 16, 100]} />
          <meshStandardMaterial color="orange" />
        </mesh>
      ))}
    </>
  );
}

export default function Hero() {
  return (
    <section className="relative h-screen w-full text-white">
      <Canvas camera={{ position: [5, 3, 10], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10,10,10]} intensity={1} />
        <Car3D />
        <FloatingParts />
        <Sparkles count={50} size={0.5} scale={[10,5,10]} speed={0.5} />
        <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={1} />
        <Environment preset="city" />
      </Canvas>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <motion.h1 
          className="text-5xl md:text-6xl font-bold drop-shadow-lg"
          initial={{ opacity:0, y:-50 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:1.5 }}
        >
          India’s Trusted Used Car Parts
        </motion.h1>
        <motion.p 
          className="text-xl md:text-2xl mt-4 drop-shadow-md"
          initial={{ opacity:0, y:20 }}
          animate={{ opacity:1, y:0 }}
          transition={{ duration:2 }}
        >
          Prepaid Orders with Video Proof & GST Invoice
        </motion.p>
        <motion.div className="mt-6 space-x-4" initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:2 }}>
          <a href="#categories" className="bg-orange-500 px-6 py-3 rounded text-black font-semibold hover:brightness-110 transition">Browse Parts</a>
          <a href="https://wa.me/your-number?text=Hello%20Garage%20Bazar%20India,%20I%20want%20to%20order%20parts" className="bg-lime-500 px-6 py-3 rounded text-black font-semibold hover:brightness-110 transition">Order via WhatsApp</a>
        </motion.div>
      </div>
    </section>
  );
}

