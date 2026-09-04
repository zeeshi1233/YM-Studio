import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { PRODUCTS_3D } from '../data/servicesData';
import { Product3D } from '../types';
import { RotateCw, Sparkles, Check, Droplets, Shield, ArrowRight, Eye, RefreshCw } from 'lucide-react';

interface ProductShowcase3DProps {
  onSelectProduct: (productName: string) => void;
}

export const ProductShowcase3D: React.FC<ProductShowcase3DProps> = ({ onSelectProduct }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeProductId, setActiveProductId] = useState<string>('elixir-serum');
  const [autoRotate, setAutoRotate] = useState<boolean>(true);
  const [isInteracting, setIsInteracting] = useState<boolean>(false);

  const activeProduct = PRODUCTS_3D.find((p) => p.id === activeProductId) || PRODUCTS_3D[0];

  // Three.js scene refs
  const sceneRef = useRef<THREE.Scene | null>(null);
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const productGroupRef = useRef<THREE.Group | null>(null);
  const particlesRef = useRef<THREE.Points | null>(null);
  const animationFrameIdRef = useRef<number | null>(null);

  // Interaction tracking
  const pointerDownRef = useRef(false);
  const pointerPosRef = useRef({ x: 0, y: 0 });
  const rotationVelocityRef = useRef({ x: 0, y: 0.005 });

  // Initialize Three.js Scene
  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = 480;

    // 1. Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 8);
    cameraRef.current = camera;

    // 3. Renderer with antialiasing and alpha
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    rendererRef.current = renderer;

    // 4. Studio Lighting (Signature Magenta & Teal Lighting)
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    // Teal Rim Light
    const tealLight = new THREE.DirectionalLight(0x1fd1b2, 2.8);
    tealLight.position.set(-6, 4, 4);
    scene.add(tealLight);

    // Magenta Rim Light
    const magentaLight = new THREE.DirectionalLight(0xb829a0, 2.8);
    magentaLight.position.set(6, -3, 3);
    scene.add(magentaLight);

    // Top Key Light
    const topLight = new THREE.DirectionalLight(0xffffff, 1.5);
    topLight.position.set(0, 8, 4);
    scene.add(topLight);

    // 5. Floating Luxury Particles
    const particleCount = 70;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);

    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 10;
      particlePositions[i + 1] = (Math.random() - 0.5) * 8;
      particlePositions[i + 2] = (Math.random() - 0.5) * 6;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMaterial = new THREE.PointsMaterial({
      color: 0x1fd1b2,
      size: 0.08,
      transparent: true,
      opacity: 0.6,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);
    particlesRef.current = particles;

    // 6. Product Group container
    const productGroup = new THREE.Group();
    scene.add(productGroup);
    productGroupRef.current = productGroup;

    // Responsive Resize Handler
    const handleResize = () => {
      if (!containerRef.current || !renderer || !camera) return;
      const newWidth = containerRef.current.clientWidth;
      camera.aspect = newWidth / height;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, height);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameIdRef.current = requestAnimationFrame(animate);

      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Rotate particles subtly
      if (particles) {
        particles.rotation.y = elapsedTime * 0.03;
        particles.rotation.x = Math.sin(elapsedTime * 0.05) * 0.1;
      }

      if (productGroup) {
        // Auto-rotation when enabled and not dragging
        if (autoRotate && !pointerDownRef.current) {
          productGroup.rotation.y += 0.01;
        } else if (!pointerDownRef.current) {
          // Inertia damping
          productGroup.rotation.y += rotationVelocityRef.current.y;
          productGroup.rotation.x += rotationVelocityRef.current.x;
          rotationVelocityRef.current.y *= 0.95;
          rotationVelocityRef.current.x *= 0.95;
        }

        // Gentle floating bob
        productGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.15;
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationFrameIdRef.current) {
        cancelAnimationFrame(animationFrameIdRef.current);
      }
      renderer.dispose();
    };
  }, [autoRotate]);

  // Update 3D Model Geometry when activeProductId changes
  useEffect(() => {
    if (!productGroupRef.current || !sceneRef.current) return;

    const group = productGroupRef.current;
    // Clear previous children
    while (group.children.length > 0) {
      const obj = group.children[0];
      group.remove(obj);
      if ((obj as THREE.Mesh).geometry) (obj as THREE.Mesh).geometry.dispose();
    }

    if (activeProductId === 'elixir-serum') {
      // ----------------------------------------------------
      // MODEL 1: Radiance Glow Serum Bottle (Glass Dropper)
      // ----------------------------------------------------
      // Outer Glass Bottle Body
      const bottleGeo = new THREE.CylinderGeometry(0.85, 0.85, 2.8, 32);
      const glassMat = new THREE.MeshPhysicalMaterial({
        color: 0x111319,
        transparent: true,
        opacity: 0.65,
        roughness: 0.1,
        metalness: 0.1,
        transmission: 0.85,
        ior: 1.5,
        reflectivity: 0.9,
      });
      const bottle = new THREE.Mesh(bottleGeo, glassMat);
      bottle.position.y = 0;
      group.add(bottle);

      // Inner Liquid Column (Glowing Teal-Magenta Fluid)
      const liquidGeo = new THREE.CylinderGeometry(0.72, 0.72, 2.4, 32);
      const liquidMat = new THREE.MeshStandardMaterial({
        color: 0x1fd1b2,
        emissive: 0x0f766e,
        emissiveIntensity: 0.5,
        roughness: 0.3,
        metalness: 0.6,
        transparent: true,
        opacity: 0.85,
      });
      const liquid = new THREE.Mesh(liquidGeo, liquidMat);
      liquid.position.y = -0.1;
      group.add(liquid);

      // Metallic Golden Dropper Shoulder / Collar
      const collarGeo = new THREE.CylinderGeometry(0.55, 0.8, 0.6, 32);
      const goldMat = new THREE.MeshStandardMaterial({
        color: 0xffd700,
        metalness: 0.95,
        roughness: 0.2,
      });
      const collar = new THREE.Mesh(collarGeo, goldMat);
      collar.position.y = 1.6;
      group.add(collar);

      // Dropper Rubber Bulb / Cap
      const bulbGeo = new THREE.SphereGeometry(0.45, 32, 16);
      bulbGeo.scale(1, 1.4, 1);
      const bulbMat = new THREE.MeshStandardMaterial({
        color: 0x131419,
        roughness: 0.8,
        metalness: 0.1,
      });
      const bulb = new THREE.Mesh(bulbGeo, bulbMat);
      bulb.position.y = 2.2;
      group.add(bulb);

      // Internal Glass Pipette Stem
      const pipetteGeo = new THREE.CylinderGeometry(0.08, 0.08, 2.0, 16);
      const pipetteMat = new THREE.MeshStandardMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.9,
        roughness: 0.1,
      });
      const pipette = new THREE.Mesh(pipetteGeo, pipetteMat);
      pipette.position.y = 0.5;
      group.add(pipette);

      // Studio Embossed Emblem Label
      const labelGeo = new THREE.CylinderGeometry(0.86, 0.86, 1.4, 32, 1, true, 0, Math.PI);
      const labelMat = new THREE.MeshStandardMaterial({
        color: 0x181a24,
        roughness: 0.4,
        metalness: 0.4,
      });
      const label = new THREE.Mesh(labelGeo, labelMat);
      label.position.y = -0.1;
      label.rotation.y = Math.PI * 0.5;
      group.add(label);
    } else if (activeProductId === 'peptide-creme') {
      // ----------------------------------------------------
      // MODEL 2: Hydra-Luxe Rose Peptide Crème (Luxury Jar)
      // ----------------------------------------------------
      // Obsidian Frosted Jar Base
      const jarBaseGeo = new THREE.CylinderGeometry(1.4, 1.3, 1.6, 32);
      const jarMat = new THREE.MeshPhysicalMaterial({
        color: 0x18111e,
        roughness: 0.3,
        metalness: 0.3,
        transmission: 0.4,
        opacity: 0.9,
      });
      const jarBase = new THREE.Mesh(jarBaseGeo, jarMat);
      jarBase.position.y = -0.3;
      group.add(jarBase);

      // Polished Rose-Gold Metallic Lid
      const lidGeo = new THREE.CylinderGeometry(1.45, 1.45, 0.6, 32);
      const roseGoldMat = new THREE.MeshStandardMaterial({
        color: 0xb829a0,
        emissive: 0x581c87,
        emissiveIntensity: 0.2,
        roughness: 0.2,
        metalness: 0.9,
      });
      const lid = new THREE.Mesh(lidGeo, roseGoldMat);
      lid.position.y = 0.7;
      group.add(lid);

      // Gold Accent Rim Band
      const bandGeo = new THREE.TorusGeometry(1.42, 0.05, 16, 64);
      const goldBandMat = new THREE.MeshStandardMaterial({
        color: 0xffd700,
        metalness: 0.95,
        roughness: 0.2,
      });
      const band = new THREE.Mesh(bandGeo, goldBandMat);
      band.rotation.x = Math.PI * 0.5;
      band.position.y = 0.4;
      group.add(band);

      // Floating Glow Halo
      const haloGeo = new THREE.TorusGeometry(1.7, 0.02, 16, 64);
      const haloMat = new THREE.MeshBasicMaterial({
        color: 0xf472b6,
        transparent: true,
        opacity: 0.7,
      });
      const halo = new THREE.Mesh(haloGeo, haloMat);
      halo.rotation.x = Math.PI * 0.5;
      halo.position.y = -0.3;
      group.add(halo);
    } else {
      // ----------------------------------------------------
      // MODEL 3: Diamond Resurfacing Wand (Clinical Handpiece)
      // ----------------------------------------------------
      // Sleek Wand Handle Body
      const handleGeo = new THREE.CylinderGeometry(0.4, 0.35, 3.4, 32);
      const handleMat = new THREE.MeshStandardMaterial({
        color: 0x1e222d,
        roughness: 0.35,
        metalness: 0.85,
      });
      const handle = new THREE.Mesh(handleGeo, handleMat);
      handle.position.y = -0.2;
      group.add(handle);

      // Diamond Tip Collar
      const tipCollarGeo = new THREE.CylinderGeometry(0.3, 0.4, 0.6, 32);
      const tipCollarMat = new THREE.MeshStandardMaterial({
        color: 0x1fd1b2,
        metalness: 0.9,
        roughness: 0.2,
      });
      const tipCollar = new THREE.Mesh(tipCollarGeo, tipCollarMat);
      tipCollar.position.y = 1.7;
      group.add(tipCollar);

      // Diamond Micro-Crystal Head
      const diamondTipGeo = new THREE.ConeGeometry(0.35, 0.6, 12);
      const diamondTipMat = new THREE.MeshPhysicalMaterial({
        color: 0xffffff,
        emissive: 0x1fd1b2,
        emissiveIntensity: 0.6,
        roughness: 0.1,
        metalness: 0.3,
        transmission: 0.8,
        ior: 2.4, // Real diamond refractive index
      });
      const diamondTip = new THREE.Mesh(diamondTipGeo, diamondTipMat);
      diamondTip.position.y = 2.2;
      group.add(diamondTip);

      // LED Acoustic Status Ring
      const ringGeo = new THREE.TorusGeometry(0.42, 0.05, 16, 32);
      const ringMat = new THREE.MeshBasicMaterial({
        color: 0x1fd1b2,
      });
      const ring = new THREE.Mesh(ringGeo, ringMat);
      ring.rotation.x = Math.PI * 0.5;
      ring.position.y = 0.8;
      group.add(ring);

      // Power / Mode Button on body
      const btnGeo = new THREE.CylinderGeometry(0.12, 0.12, 0.08, 16);
      const btnMat = new THREE.MeshStandardMaterial({
        color: 0xb829a0,
        emissive: 0xb829a0,
        emissiveIntensity: 0.4,
      });
      const btn = new THREE.Mesh(btnGeo, btnMat);
      btn.rotation.x = Math.PI * 0.5;
      btn.position.set(0, 0.2, 0.4);
      group.add(btn);
    }
  }, [activeProductId]);

  // Pointer Drag Handlers for 360° interactive rotation
  const handlePointerDown = (e: React.PointerEvent) => {
    pointerDownRef.current = true;
    setIsInteracting(true);
    pointerPosRef.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!pointerDownRef.current || !productGroupRef.current) return;
    const deltaX = e.clientX - pointerPosRef.current.x;
    const deltaY = e.clientY - pointerPosRef.current.y;

    productGroupRef.current.rotation.y += deltaX * 0.008;
    productGroupRef.current.rotation.x += deltaY * 0.005;

    rotationVelocityRef.current = {
      x: deltaY * 0.002,
      y: deltaX * 0.004,
    };

    pointerPosRef.current = { x: e.clientX, y: e.clientY };
  };

  const handlePointerUp = () => {
    pointerDownRef.current = false;
    setTimeout(() => setIsInteracting(false), 2000);
  };

  const resetView = () => {
    if (productGroupRef.current) {
      productGroupRef.current.rotation.set(0, 0, 0);
      rotationVelocityRef.current = { x: 0, y: 0.005 };
    }
  };

  return (
    <section
      id="showcase-3d-section"
      className="relative py-20 md:py-28 bg-[#0B0C10] border-t border-white/[0.08] overflow-hidden"
    >
      {/* Background Radial Ambient Accents */}
      <div className="absolute top-1/4 right-5 w-96 h-96 bg-[#1FD1B2]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-5 w-96 h-96 bg-[#B829A0]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#131419] border border-[#1FD1B2]/30 text-xs font-semibold text-[#1FD1B2] uppercase tracking-widest mb-3">
            <Eye className="w-3.5 h-3.5" />
            Interactive 3D Technology
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
            Studio Formulas & <span className="text-gradient-ym">Clinical Hardware</span>
          </h2>
          <p className="text-base sm:text-lg text-[#94A3B8]">
            Interact with our proprietary facial formulations and medical-grade precision resurfacing instruments in full 3D.
          </p>

          {/* Product Switcher Bar */}
          <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
            {PRODUCTS_3D.map((product) => {
              const isSelected = product.id === activeProductId;
              return (
                <button
                  key={product.id}
                  onClick={() => setActiveProductId(product.id)}
                  className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer flex items-center gap-2 ${
                    isSelected
                      ? 'bg-gradient-to-r from-[#B829A0] to-[#1FD1B2] text-white shadow-[0_0_25px_rgba(31,209,178,0.35)]'
                      : 'bg-black/50 backdrop-blur-xl text-slate-300 border border-white/[0.08] hover:border-[#1FD1B2]/40 hover:text-white'
                  }`}
                  id={`product-tab-${product.id}`}
                >
                  <Sparkles
                    className={`w-3.5 h-3.5 ${
                      isSelected ? 'text-white' : 'text-[#1FD1B2]'
                    }`}
                  />
                  <span>{product.name.split(' ')[0]} {product.name.split(' ')[1]}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* 3D Showcase Interactive Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* 3D Canvas Stage (7 Columns) */}
          <div
            ref={containerRef}
            className="lg:col-span-7 glass-card rounded-3xl p-4 sm:p-6 relative border border-white/[0.08] shadow-[0_20px_60px_rgba(0,0,0,0.85)] overflow-hidden flex flex-col items-center justify-center min-h-[460px]"
          >
            {/* 3D Canvas Tag Badge */}
            <div className="absolute top-4 left-4 z-10 flex items-center gap-2 bg-black/70 backdrop-blur-xl px-3.5 py-1.5 rounded-full border border-white/[0.1] text-[11px] text-slate-300 shadow-[0_4px_20px_rgba(0,0,0,0.6)]">
              <span className="w-2 h-2 rounded-full bg-[#1FD1B2] animate-ping" />
              <span>360° Drag to Rotate</span>
            </div>

            {/* Quick Canvas Controls */}
            <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
              <button
                onClick={() => setAutoRotate(!autoRotate)}
                className={`p-2 rounded-full border text-xs transition-all cursor-pointer ${
                  autoRotate
                    ? 'bg-[#1FD1B2]/20 border-[#1FD1B2] text-[#1FD1B2] shadow-[0_0_15px_rgba(31,209,178,0.3)]'
                    : 'bg-black/70 backdrop-blur-xl border-white/[0.1] text-slate-400 hover:text-white'
                }`}
                title={autoRotate ? 'Pause Rotation' : 'Auto Rotate'}
                id="toggle-autorotate-btn"
              >
                <RotateCw className={`w-4 h-4 ${autoRotate ? 'animate-spin' : ''}`} style={{ animationDuration: '6s' }} />
              </button>

              <button
                onClick={resetView}
                className="p-2 rounded-full bg-black/70 backdrop-blur-xl border border-white/[0.1] text-slate-400 hover:text-white transition-all cursor-pointer hover:border-white/[0.2]"
                title="Reset Angle"
                id="reset-camera-btn"
              >
                <RefreshCw className="w-4 h-4" />
              </button>
            </div>

            {/* Canvas Element */}
            <canvas
              ref={canvasRef}
              onPointerDown={handlePointerDown}
              onPointerMove={handlePointerMove}
              onPointerUp={handlePointerUp}
              onPointerLeave={handlePointerUp}
              className="w-full h-[440px] cursor-grab active:cursor-grabbing touch-none"
            />

            {/* Interactive Hotspot Pills underneath canvas */}
            <div className="w-full pt-2 flex flex-wrap items-center justify-center gap-2 z-10">
              <span className="text-[11px] text-slate-400 bg-black/60 backdrop-blur-md px-3.5 py-1 rounded-full border border-white/[0.08]">
                ✨ High-Precision PBR Glass & Metal Shaders
              </span>
              <span className="text-[11px] text-[#1FD1B2] bg-[#1FD1B2]/10 backdrop-blur-md px-3.5 py-1 rounded-full border border-[#1FD1B2]/30 shadow-[0_0_15px_rgba(31,209,178,0.15)]">
                💎 Studio Authentic Standard
              </span>
            </div>
          </div>

          {/* Product Specifications & Clinical Detail Card (5 Columns) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
            <div className="glass-card rounded-3xl p-6 sm:p-8 border border-white/[0.08]">
              {/* Product Badge & Volume */}
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs uppercase font-bold tracking-widest text-[#1FD1B2]">
                  {activeProduct.type.toUpperCase()} • {activeProduct.volume}
                </span>
                <span className="text-2xl font-black text-white">
                  {activeProduct.price}
                </span>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-2xl font-bold text-white mb-1">
                {activeProduct.name}
              </h3>
              <p className="text-xs text-[#F472B6] font-medium mb-4">
                {activeProduct.tagline}
              </p>

              {/* Description */}
              <p className="text-sm text-[#94A3B8] leading-relaxed mb-6">
                {activeProduct.description}
              </p>

              {/* Key Bio-Active Actives */}
              <div className="mb-6">
                <div className="text-xs uppercase tracking-wider font-semibold text-slate-300 mb-2 flex items-center gap-1.5">
                  <Droplets className="w-3.5 h-3.5 text-[#1FD1B2]" />
                  <span>Key Ingredients & Mechanisms</span>
                </div>
                <ul className="space-y-1.5">
                  {activeProduct.keyIngredients.map((item, idx) => (
                    <li key={idx} className="text-xs text-slate-300 flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#1FD1B2] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Clinical Benefits */}
              <div className="mb-6 p-4 rounded-2xl bg-black/40 border border-white/[0.06]">
                <div className="text-xs uppercase tracking-wider font-semibold text-slate-300 mb-2 flex items-center gap-1.5">
                  <Shield className="w-3.5 h-3.5 text-[#B829A0]" />
                  <span>Clinical Efficacy</span>
                </div>
                <div className="space-y-1">
                  {activeProduct.clinicalBenefits.map((b, idx) => (
                    <div key={idx} className="text-xs text-slate-400">
                      • {b}
                    </div>
                  ))}
                </div>
              </div>

              {/* Usage Ritual */}
              <div className="text-xs text-[#94A3B8] mb-6">
                <span className="text-white font-semibold block mb-0.5">Therapist Ritual:</span>
                {activeProduct.usage}
              </div>

              {/* Action Button */}
              <button
                onClick={() => onSelectProduct(`Product / Treatment: ${activeProduct.name}`)}
                className="w-full py-3.5 rounded-full text-xs sm:text-sm font-bold text-white uppercase tracking-wider bg-gradient-to-r from-[#B829A0] via-[#9333ea] to-[#1FD1B2] hover:shadow-[0_0_25px_rgba(31,209,178,0.4)] transition-all cursor-pointer flex items-center justify-center gap-2"
                id="product-inquire-btn"
              >
                <span>Inquire About This Formulation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
