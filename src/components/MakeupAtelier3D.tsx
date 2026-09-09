import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { motion } from 'motion/react';
import { Brush, Palette, Sparkles, RotateCcw, Hand } from 'lucide-react';

const TOOLS = [
  {
    id: 'brush',
    label: 'Precision Brush',
    desc: 'Soft blending for HD foundation & contour',
    color: 0xd4af37,
  },
  {
    id: 'palette',
    label: 'Glam Palette',
    desc: 'Teal-to-magenta tonal story for every occasion',
    color: 0xb829a0,
  },
  {
    id: 'lipstick',
    label: 'Signature Lip',
    desc: 'Long-wear colour matched to your bridal look',
    color: 0x1fd1b2,
  },
];

function buildBrush(): THREE.Group {
  const group = new THREE.Group();
  const handle = new THREE.Mesh(
    new THREE.CylinderGeometry(0.12, 0.14, 2.2, 24),
    new THREE.MeshStandardMaterial({ color: 0xd4af37, metalness: 0.85, roughness: 0.25 })
  );
  handle.position.y = -0.4;
  group.add(handle);

  const ferrule = new THREE.Mesh(
    new THREE.CylinderGeometry(0.16, 0.14, 0.35, 24),
    new THREE.MeshStandardMaterial({ color: 0xe8e8e8, metalness: 0.95, roughness: 0.15 })
  );
  ferrule.position.y = 0.85;
  group.add(ferrule);

  const bristles = new THREE.Mesh(
    new THREE.ConeGeometry(0.28, 0.9, 24),
    new THREE.MeshStandardMaterial({ color: 0xf5d0c8, roughness: 0.7, metalness: 0.05 })
  );
  bristles.position.y = 1.45;
  bristles.rotation.x = Math.PI;
  group.add(bristles);

  group.rotation.z = -0.35;
  return group;
}

function buildPalette(): THREE.Group {
  const group = new THREE.Group();
  const base = new THREE.Mesh(
    new THREE.BoxGeometry(2.4, 0.18, 1.6),
    new THREE.MeshStandardMaterial({ color: 0x1a1a22, metalness: 0.4, roughness: 0.45 })
  );
  group.add(base);

  const colors = [0xb829a0, 0x1fd1b2, 0xd4af37, 0xf472b6, 0x7c3aed, 0xe11d48];
  colors.forEach((c, i) => {
    const pan = new THREE.Mesh(
      new THREE.CylinderGeometry(0.28, 0.28, 0.08, 24),
      new THREE.MeshStandardMaterial({ color: c, metalness: 0.2, roughness: 0.35 })
    );
    const col = i % 3;
    const row = Math.floor(i / 3);
    pan.position.set(-0.7 + col * 0.7, 0.14, -0.35 + row * 0.7);
    group.add(pan);
  });

  group.rotation.x = -0.45;
  return group;
}

function buildLipstick(): THREE.Group {
  const group = new THREE.Group();
  const tube = new THREE.Mesh(
    new THREE.CylinderGeometry(0.28, 0.3, 1.4, 28),
    new THREE.MeshStandardMaterial({ color: 0xd4af37, metalness: 0.9, roughness: 0.2 })
  );
  tube.position.y = -0.2;
  group.add(tube);

  const bullet = new THREE.Mesh(
    new THREE.ConeGeometry(0.22, 0.7, 28),
    new THREE.MeshStandardMaterial({ color: 0xb829a0, metalness: 0.15, roughness: 0.35 })
  );
  bullet.position.y = 0.85;
  group.add(bullet);

  const ring = new THREE.Mesh(
    new THREE.TorusGeometry(0.32, 0.04, 12, 40),
    new THREE.MeshStandardMaterial({ color: 0x1fd1b2, metalness: 0.8, roughness: 0.25 })
  );
  ring.rotation.x = Math.PI / 2;
  ring.position.y = 0.45;
  group.add(ring);

  return group;
}

export const MakeupAtelier3D: React.FC = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [activeTool, setActiveTool] = useState(0);
  const [autoRotate, setAutoRotate] = useState(true);
  const toolIndexRef = useRef(0);
  const autoRotateRef = useRef(true);
  const groupRef = useRef<THREE.Group | null>(null);
  const pointerRef = useRef({ down: false, x: 0, y: 0, vx: 0, vy: 0.008 });

  useEffect(() => {
    toolIndexRef.current = activeTool;
  }, [activeTool]);

  useEffect(() => {
    autoRotateRef.current = autoRotate;
  }, [autoRotate]);

  useEffect(() => {
    if (!canvasRef.current || !mountRef.current) return;

    const width = mountRef.current.clientWidth;
    const height = Math.max(360, Math.min(480, Math.round(width * 0.72)));

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, width / height, 0.1, 100);
    camera.position.set(0, 0.4, 6.2);

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;

    scene.add(new THREE.AmbientLight(0xffffff, 0.65));
    const teal = new THREE.DirectionalLight(0x1fd1b2, 2.4);
    teal.position.set(-5, 4, 3);
    scene.add(teal);
    const magenta = new THREE.DirectionalLight(0xb829a0, 2.2);
    magenta.position.set(5, -2, 4);
    scene.add(magenta);
    const key = new THREE.DirectionalLight(0xffffff, 1.4);
    key.position.set(0, 6, 5);
    scene.add(key);

    const floor = new THREE.Mesh(
      new THREE.CircleGeometry(3.2, 64),
      new THREE.MeshStandardMaterial({
        color: 0x0b0c10,
        metalness: 0.6,
        roughness: 0.35,
        transparent: true,
        opacity: 0.55,
      })
    );
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = -1.55;
    scene.add(floor);

    const root = new THREE.Group();
    scene.add(root);
    groupRef.current = root;

    const models = [buildBrush(), buildPalette(), buildLipstick()];
    models.forEach((m, i) => {
      m.visible = i === 0;
      root.add(m);
    });

    const particleGeo = new THREE.BufferGeometry();
    const count = 80;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 6;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 4;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 4;
    }
    particleGeo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    const particles = new THREE.Points(
      particleGeo,
      new THREE.PointsMaterial({ color: 0xd4af37, size: 0.035, transparent: true, opacity: 0.55 })
    );
    scene.add(particles);

    let frame = 0;
    let raf = 0;

    const onPointerDown = (e: PointerEvent) => {
      pointerRef.current.down = true;
      pointerRef.current.x = e.clientX;
      pointerRef.current.y = e.clientY;
      setAutoRotate(false);
    };
    const onPointerUp = () => {
      pointerRef.current.down = false;
    };
    const onPointerMove = (e: PointerEvent) => {
      if (!pointerRef.current.down) return;
      const dx = e.clientX - pointerRef.current.x;
      const dy = e.clientY - pointerRef.current.y;
      pointerRef.current.x = e.clientX;
      pointerRef.current.y = e.clientY;
      pointerRef.current.vx = dx * 0.005;
      pointerRef.current.vy = dy * 0.004;
    };

    const canvas = canvasRef.current;
    canvas.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointerup', onPointerUp);
    window.addEventListener('pointermove', onPointerMove);

    const animate = () => {
      raf = requestAnimationFrame(animate);
      frame += 0.01;
      particles.rotation.y = frame * 0.15;

      models.forEach((m, i) => {
        m.visible = i === toolIndexRef.current;
      });

      if (root) {
        if (autoRotateRef.current) {
          root.rotation.y += 0.01;
          root.rotation.x = Math.sin(frame) * 0.08;
        } else {
          root.rotation.y += pointerRef.current.vx;
          root.rotation.x += pointerRef.current.vy;
          pointerRef.current.vx *= 0.92;
          pointerRef.current.vy *= 0.92;
          root.rotation.x = Math.max(-0.6, Math.min(0.6, root.rotation.x));
        }
      }

      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      if (!mountRef.current) return;
      const w = mountRef.current.clientWidth;
      const h = Math.max(360, Math.min(480, Math.round(w * 0.72)));
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      window.removeEventListener('pointerup', onPointerUp);
      window.removeEventListener('pointermove', onPointerMove);
      canvas.removeEventListener('pointerdown', onPointerDown);
      renderer.dispose();
      models.forEach((m) => {
        m.traverse((obj) => {
          if (obj instanceof THREE.Mesh) {
            obj.geometry.dispose();
            if (Array.isArray(obj.material)) obj.material.forEach((mat) => mat.dispose());
            else obj.material.dispose();
          }
        });
      });
      particleGeo.dispose();
    };
  }, []);

  return (
    <section
      id="makeup-atelier-3d"
      className="relative py-20 md:py-28 bg-[#0B0C10] overflow-hidden border-t border-white/[0.06]"
      aria-labelledby="atelier-heading"
    >
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#B829A0]/12 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#1FD1B2]/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#D4AF37]/35 text-[11px] uppercase tracking-widest text-[#D4AF37] font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            Interactive 3D Atelier
          </div>
          <h2 id="atelier-heading" className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
            Makeup Tools in{' '}
            <span className="font-script text-4xl sm:text-5xl text-[#F472B6] font-normal tracking-normal">
              motion
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#94A3B8]">
            Drag to spin the kit — brushes, palettes and signature lip colour used in YM Studios bridal & event glam.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-7">
            <div
              ref={mountRef}
              className="relative rounded-[1.75rem] border border-[#D4AF37]/25 bg-gradient-to-b from-[#131419] to-[#0B0C10] overflow-hidden shadow-[0_25px_60px_rgba(0,0,0,0.55)]"
              style={{ minHeight: 360 }}
            >
              <canvas ref={canvasRef} className="w-full touch-none cursor-grab active:cursor-grabbing" />
              <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/55 border border-white/10 text-[10px] uppercase tracking-wider text-slate-300">
                <Hand className="w-3 h-3 text-[#1FD1B2]" />
                Drag to rotate
              </div>
              <button
                type="button"
                onClick={() => setAutoRotate((v) => !v)}
                className="absolute top-4 right-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/55 border border-[#D4AF37]/35 text-[10px] uppercase tracking-wider text-[#D4AF37] cursor-pointer hover:bg-[#D4AF37]/10"
              >
                <RotateCcw className="w-3 h-3" />
                {autoRotate ? 'Auto On' : 'Auto Off'}
              </button>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-3">
            {TOOLS.map((tool, index) => (
              <motion.button
                key={tool.id}
                type="button"
                onClick={() => {
                  setActiveTool(index);
                  setAutoRotate(true);
                }}
                initial={{ opacity: 0, x: 16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className={`w-full text-left p-4 rounded-2xl border transition-all cursor-pointer ${
                  activeTool === index
                    ? 'border-[#1FD1B2]/50 bg-[#1FD1B2]/10 shadow-[0_0_24px_rgba(31,209,178,0.15)]'
                    : 'border-white/[0.08] bg-black/40 hover:border-[#D4AF37]/35'
                }`}
              >
                <div className="flex items-start gap-3">
                  <span className="flyer-gold-ring">
                    {index === 0 ? <Brush className="w-4 h-4" /> : <Palette className="w-4 h-4" />}
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-white">{tool.label}</span>
                    <span className="block text-xs text-[#94A3B8] mt-0.5">{tool.desc}</span>
                  </span>
                </div>
              </motion.button>
            ))}

            <div className="relative mt-4 rounded-2xl overflow-hidden border border-white/[0.08] aspect-[4/3]">
              <img
                src="/images/makeup-tools-sharp.png"
                alt="Professional makeup brushes and palette at YM Studios"
                width={800}
                height={600}
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-xs text-white font-medium">Studio kit · camera-ready pigments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
