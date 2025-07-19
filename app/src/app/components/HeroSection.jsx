"use client";
import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';

const HeroSection = () => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [visibleWords, setVisibleWords] = useState([]);
  const [isClient, setIsClient] = useState(false);
  const [particles, setParticles] = useState([]);
  const leftSceneRef = useRef();
  const rightSceneRef = useRef();
  const topCoinsSceneRef = useRef();
  const bottomCoinsSceneRef = useRef();
  const leftRendererRef = useRef();
  const rightRendererRef = useRef();
  const topCoinsRendererRef = useRef();
  const bottomCoinsRendererRef = useRef();
  const animationFrameRef = useRef();

  const words = ["Lo", "que", "importa", "es", "el", "cajero", "no", "la", "plataforma"];

  // Detectar cliente
  useEffect(() => {
    setIsClient(true);
    const generatedParticles = [...Array(80)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDelay: Math.random() * 2,
      animationDuration: 2 + Math.random() * 2
    }));
    setParticles(generatedParticles);
  }, []);

  // Mostrar palabras progresivamente
  useEffect(() => {
    if (!isClient) return;

    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [isClient]);

  useEffect(() => {
    setVisibleWords(words.slice(0, currentWordIndex + 1));
  }, [currentWordIndex]);

  // Escenas 3D
  useEffect(() => {
    if (!isClient) return;

    const initScene = (container) => {
      if (!container) return null;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setClearColor(0x000000, 0);
      container.appendChild(renderer.domElement);

      const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
      const directionalLight = new THREE.DirectionalLight(0xffffff, 1.5);
      directionalLight.position.set(5, 5, 5);
      const pointLight = new THREE.PointLight( 0xFFBF00, 2, 100);
      pointLight.position.set(0, 0, 10);

      scene.add(ambientLight, directionalLight, pointLight);

      const objects = [];

      for (let i = 0; i < 20; i++) {
        const coin = new THREE.Mesh(
          new THREE.CylinderGeometry(0.8, 0.8, 0.1, 32),
          new THREE.MeshPhongMaterial({ color:  0xFFBF00, shininess: 200, specular: 0x444444, emissive: 0x332200 })
        );
        coin.position.set((Math.random() - 0.5) * 25, (Math.random() - 0.5) * 40, (Math.random() - 0.5) * 15);
        coin.rotation.set(Math.random() * Math.PI, 0, Math.random() * Math.PI);
        scene.add(coin);
        objects.push(coin);
      }

      for (let i = 0; i < 15; i++) {
        const smallCoin = new THREE.Mesh(
          new THREE.CylinderGeometry(0.5, 0.5, 0.08, 24),
          new THREE.MeshPhongMaterial({ color: 0xFFBF00, shininess: 250, specular: 0x555555, emissive: 0x221100 })
        );
        smallCoin.position.set((Math.random() - 0.5) * 30, (Math.random() - 0.5) * 45, (Math.random() - 0.5) * 12);
        smallCoin.rotation.set(Math.random() * Math.PI, 0, Math.random() * Math.PI);
        scene.add(smallCoin);
        objects.push(smallCoin);
      }

      camera.position.z = 15;
      return { scene, camera, renderer, objects };
    };

    const initCoinsScene = (container, isTop) => {
      if (!container) return null;

      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
      const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

      renderer.setSize(container.clientWidth, container.clientHeight);
      renderer.setClearColor(0x000000, 0);
      container.appendChild(renderer.domElement);

     const ambient = new THREE.AmbientLight(0xffffff, 1);

const directional = new THREE.DirectionalLight(0xffffff, 2);
directional.position.set(5, 5, 5);

const point1 = new THREE.PointLight(0xFFBF00, 3, 50);
point1.position.set(0, 0, 10);

const point2 = new THREE.PointLight(0xffa500, 2, 30);
point2.position.set(-5, 0, 5);

scene.add(ambient, directional, point1, point2);

      const objects = [];
      const numCoins = isTop ? 5 : 6;

      for (let i = 0; i < numCoins; i++) {
        const coin = new THREE.Mesh(
          new THREE.CylinderGeometry(1.2, 1.2, 0.15, 32),
          new THREE.MeshPhongMaterial({ color:  0xFFBF00, shininess: 300, specular: 0x666666, emissive: 0x443300 })
        );
        coin.position.set((i - (numCoins - 1) / 2) * 4, 0, Math.random() * 2 - 1);
        coin.rotation.set(Math.random() * Math.PI, 0, Math.random() * Math.PI);
        scene.add(coin);
        objects.push(coin);
      }

      for (let i = 0; i < 8; i++) {
        const smallCoin = new THREE.Mesh(
          new THREE.CylinderGeometry(0.6, 0.6, 0.1, 24),
          new THREE.MeshPhongMaterial({ color: 0xffa500, shininess: 350, specular: 0x777777, emissive: 0x332200 })
        );
        smallCoin.position.set((Math.random() - 0.5) * 20, (Math.random() - 0.5) * 4, Math.random() * 3 - 1.5);
        smallCoin.rotation.set(Math.random() * Math.PI, 0, Math.random() * Math.PI);
        scene.add(smallCoin);
        objects.push(smallCoin);
      }

      camera.position.z = 8;
      return { scene, camera, renderer, objects };
    };

    const leftScene = initScene(leftSceneRef.current);
    const rightScene = initScene(rightSceneRef.current);
    const topCoinsScene = initCoinsScene(topCoinsSceneRef.current, true);
    const bottomCoinsScene = initCoinsScene(bottomCoinsSceneRef.current, false);

    if (leftScene && rightScene && topCoinsScene && bottomCoinsScene) {
      leftRendererRef.current = leftScene;
      rightRendererRef.current = rightScene;
      topCoinsRendererRef.current = topCoinsScene;
      bottomCoinsRendererRef.current = bottomCoinsScene;

      const animate = () => {
        const time = Date.now();

        leftScene.objects.forEach((o, i) => {
          o.rotation.y += 0.01;
          o.rotation.x += 0.005;
          o.position.y += Math.sin(time * 0.001 + i) * 0.02;
        });
        rightScene.objects.forEach((o, i) => {
          o.rotation.y -= 0.01;
          o.rotation.x -= 0.005;
          o.position.y += Math.cos(time * 0.001 + i) * 0.02;
        });
        topCoinsScene.objects.forEach((o, i) => {
          o.rotation.y += 0.02;
          o.rotation.x += 0.01;
          o.position.y += Math.sin(time * 0.002 + i) * 0.03;
        });
        bottomCoinsScene.objects.forEach((o, i) => {
          o.rotation.y -= 0.02;
          o.rotation.x -= 0.01;
          o.position.y += Math.cos(time * 0.002 + i) * 0.03;
        });

        leftScene.renderer.render(leftScene.scene, leftScene.camera);
        rightScene.renderer.render(rightScene.scene, rightScene.camera);
        topCoinsScene.renderer.render(topCoinsScene.scene, topCoinsScene.camera);
        bottomCoinsScene.renderer.render(bottomCoinsScene.scene, bottomCoinsScene.camera);

        animationFrameRef.current = requestAnimationFrame(animate);
      };

      animate();
    }

    return () => {
      if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
    };
  }, [isClient]);

  // Resize
  useEffect(() => {
    if (!isClient) return;
    const handleResize = () => {
      [leftRendererRef, rightRendererRef, topCoinsRendererRef, bottomCoinsRendererRef].forEach((ref, i) => {
        const container = [leftSceneRef, rightSceneRef, topCoinsSceneRef, bottomCoinsSceneRef][i].current;
        if (ref.current && container) {
          ref.current.camera.aspect = container.clientWidth / container.clientHeight;
          ref.current.camera.updateProjectionMatrix();
          ref.current.renderer.setSize(container.clientWidth, container.clientHeight);
        }
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isClient]);

  if (!isClient) {
    return (
      <div className="relative w-full h-screen bg-gradient-to-br from-[#0F0F0F] to-[#1A1A1A] overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-10"></div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-screen bg-gradient-to-br from-[#0F0F0F] to-[#1A1A1A] overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10" />
      <div className="absolute inset-0">
        {particles.map(p => (
          <div
            key={p.id}
            className="absolute w-2 h-2 bg-[#E5C07B] rounded-full animate-pulse"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              animationDelay: `${p.animationDelay}s`,
              animationDuration: `${p.animationDuration}s`,
              boxShadow: '0 0 10px rgba(255, 215, 0, 0.8)'
            }}
          />
        ))}
      </div>
      <div className="relative z-10 flex flex-col h-full">
        <div className="h-32 flex justify-center items-center mb-8">
          <div className="w-96 h-full">
            <div ref={topCoinsSceneRef} className="w-full h-full" />
          </div>
        </div>
        <div className="flex-1 flex items-center">
          <div className="w-1/4 h-full">
            <div ref={leftSceneRef} className="w-full h-full" />
          </div>
          <div className="flex-1 flex items-center justify-center px-8">
            <div className="text-center relative">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
                {words.map((word, index) => (
                  <span
                    key={index}
                    className={`inline-block mr-4 transition-all duration-1000 transform ${
                      index <= currentWordIndex
                        ? 'opacity-100 translate-y-0 scale-100'
                        : 'opacity-0 translate-y-8 scale-90'
                    }`}
                  style={{
  color: '#E5C07B',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
  backgroundColor: '#E5C07B',
  textShadow: '0 0 30px rgba(229, 192, 123, 0.8)',
  filter: 'drop-shadow(0 0 15px rgba(229, 192, 123, 0.6))',
  transitionDelay: `${index * 0.2}s`
}}
                  >
                    {word}
                  </span>
                ))}
              </h1>
              <div className="mt-8 w-32 h-1 bg-[#E5C07B] mx-auto rounded-full shadow-xl" style={{ boxShadow: '0 0 20px rgba(229, 192, 123, 0.8)' }} />
            </div>
          </div>
          <div className="w-1/4 h-full">
            <div ref={rightSceneRef} className="w-full h-full" />
          </div>
        </div>
        <div className="h-32 flex justify-center items-center mt-8">
          <div className="w-96 h-full">
            <div ref={bottomCoinsSceneRef} className="w-full h-full" />
          </div>
        </div>
      </div>

      {/* Efectos de luz suaves */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#E5C07B] rounded-full opacity-20 blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#E5C07B] rounded-full opacity-20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-[#E5C07B] rounded-full opacity-15 blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>
    </div>
  );
};

export default HeroSection;
