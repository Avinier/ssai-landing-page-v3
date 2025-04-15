"use client";

import { useEffect, useState, useRef } from "react";
import ScrollAnimation from "@/components/util/scroll-animation";

const DeploymentSection = () => {
  // Generate a set of nodes for the visualization
  const [nodes, setNodes] = useState<Array<{
    top: string;
    left: string;
    pulse: boolean;
    size: number;
    delay: number;
  }>>([]);

  const connectionLinesRef = useRef<SVGGElement>(null);

  // Create random connections between nodes
  useEffect(() => {
    // Create some random nodes - more nodes for a richer visualization
    const newNodes = Array.from({ length: 18 }).map(() => ({
      top: `${15 + Math.random() * 70}%`,
      left: `${15 + Math.random() * 70}%`,
      pulse: false,
      size: 1 + Math.random() * 1.5, // Varied sizes
      delay: Math.random() * 2, // Random delay for animations
    }));

    setNodes(newNodes);

    // Create a pulse animation effect
    const interval = setInterval(() => {
      setNodes((prevNodes) => {
        const nodeIndex = Math.floor(Math.random() * prevNodes.length);
        return prevNodes.map((node, i) => {
          if (i === nodeIndex) {
            return { ...node, pulse: true };
          }
          return { ...node, pulse: false };
        });
      });
    }, 1500);

    // Draw random connection paths between nodes
    if (connectionLinesRef.current) {
      const svgEl = connectionLinesRef.current;
      svgEl.innerHTML = ''; // Clear existing lines

      // Create a set of random connections
      for (let i = 0; i < 15; i++) {
        const startNodeIndex = Math.floor(Math.random() * newNodes.length);
        let endNodeIndex = Math.floor(Math.random() * newNodes.length);

        // Ensure we're not connecting a node to itself
        while (endNodeIndex === startNodeIndex) {
          endNodeIndex = Math.floor(Math.random() * newNodes.length);
        }

        const startNode = newNodes[startNodeIndex];
        const endNode = newNodes[endNodeIndex];

        // Create line element
        const line = document.createElementNS('http://www.w3.org/2000/svg', 'line');
        line.setAttribute('x1', startNode.left);
        line.setAttribute('y1', startNode.top);
        line.setAttribute('x2', endNode.left);
        line.setAttribute('y2', endNode.top);
        line.setAttribute('stroke', 'rgba(59, 130, 246, 0.15)');
        line.setAttribute('stroke-width', '1');
        line.setAttribute('stroke-dasharray', '3,3');

        // Add animation class
        line.classList.add('animate-pulse-opacity');

        svgEl.appendChild(line);
      }
    }

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4">
        <ScrollAnimation>
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Deploy once, deliver everywhere.</h2>
            <p className="text-lg text-gray-600 mx-auto max-w-2xl">
              When you push code to Vercel, we make it instantly available across the planet.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-6">
              <a
                href="/products/managed-infrastructure"
                className="text-sm font-medium text-gray-900 hover:text-gray-700 transition hover-lift"
              >
                More about Infrastructure
              </a>
              <a
                href="/enterprise"
                className="text-sm font-medium text-gray-900 hover:text-gray-700 transition hover-lift"
              >
                Learn about Enterprise
              </a>
            </div>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={300}>
          {/* Globe visualization - enhanced with better visuals */}
          <div className="relative h-80 md:h-96 w-full rounded-xl bg-gradient-to-b from-gray-50 to-gray-100 overflow-hidden shadow-inner">
            {/* World map outline - simplified representation */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
              <svg
                viewBox="0 0 800 400"
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M673.7,138.2c-2.2-2.9-6.8-2.9-9,0l-12.9,17.4c-1.2,1.6-3.1,2.5-5.1,2.5h-22.1c-2,0-3.9-0.9-5.1-2.5l-12.9-17.4
                  c-2.2-2.9-6.8-2.9-9,0l-12.9,17.4c-1.2,1.6-3.1,2.5-5.1,2.5h-22.1c-2,0-3.9-0.9-5.1-2.5l-12.9-17.4c-2.2-2.9-6.8-2.9-9,0l-12.9,17.4
                  c-1.2,1.6-3.1,2.5-5.1,2.5h-22.1c-2,0-3.9-0.9-5.1-2.5l-12.9-17.4c-2.2-2.9-6.8-2.9-9,0l-12.9,17.4c-1.2,1.6-3.1,2.5-5.1,2.5h-22.1
                  c-2,0-3.9-0.9-5.1-2.5l-12.9-17.4c-2.2-2.9-6.8-2.9-9,0l-12.9,17.4c-1.2,1.6-3.1,2.5-5.1,2.5h-22.1c-2,0-3.9-0.9-5.1-2.5l-12.9-17.4
                  c-2.2-2.9-6.8-2.9-9,0l-12.9,17.4c-1.2,1.6-3.1,2.5-5.1,2.5H99.1c-2,0-3.9-0.9-5.1-2.5l-12.9-17.4c-2.2-2.9-6.8-2.9-9,0l-12.9,17.4
                  c-1.2,1.6-3.1,2.5-5.1,2.5H32c-2,0-3.6-1.7-3.6-3.7v-35.5c0-2,1.6-3.7,3.6-3.7h736c2,0,3.6,1.7,3.6,3.7v35.5c0,2-1.6,3.7-3.6,3.7h-22.1
                  c-2,0-3.9-0.9-5.1-2.5L673.7,138.2z"
                  fill="#6B7280"
                />
                <path
                  d="M32,205.7c-2,0-3.6-1.7-3.6-3.7v-35.5c0-2,1.6-3.7,3.6-3.7h22.1c2,0,3.9,0.9,5.1,2.5l12.9,17.4c2.2,2.9,6.8,2.9,9,0l12.9-17.4
                  c1.2-1.6,3.1-2.5,5.1-2.5h22.1c2,0,3.9,0.9,5.1,2.5l12.9,17.4c2.2,2.9,6.8,2.9,9,0l12.9-17.4c1.2-1.6,3.1-2.5,5.1-2.5h22.1
                  c2,0,3.9,0.9,5.1,2.5l12.9,17.4c2.2,2.9,6.8,2.9,9,0l12.9-17.4c1.2-1.6,3.1-2.5,5.1-2.5h22.1c2,0,3.9,0.9,5.1,2.5l12.9,17.4
                  c2.2,2.9,6.8,2.9,9,0l12.9-17.4c1.2-1.6,3.1-2.5,5.1-2.5h22.1c2,0,3.9,0.9,5.1,2.5l12.9,17.4c2.2,2.9,6.8,2.9,9,0l12.9-17.4
                  c1.2-1.6,3.1-2.5,5.1-2.5h22.1c2,0,3.9,0.9,5.1,2.5l12.9,17.4c2.2,2.9,6.8,2.9,9,0l12.9-17.4c1.2-1.6,3.1-2.5,5.1-2.5h22.1
                  c2,0,3.9,0.9,5.1,2.5l12.9,17.4c2.2,2.9,6.8,2.9,9,0l12.9-17.4c1.2-1.6,3.1-2.5,5.1-2.5h22.1c2,0,3.6,1.7,3.6,3.7v35.5
                  c0,2-1.6,3.7-3.6,3.7H32z"
                  fill="#6B7280"
                />
                <path
                  d="M673.7,268.2c-2.2-2.9-6.8-2.9-9,0l-12.9,17.4c-1.2,1.6-3.1,2.5-5.1,2.5h-22.1c-2,0-3.9-0.9-5.1-2.5l-12.9-17.4
                  c-2.2-2.9-6.8-2.9-9,0l-12.9,17.4c-1.2,1.6-3.1,2.5-5.1,2.5h-22.1c-2,0-3.9-0.9-5.1-2.5l-12.9-17.4c-2.2-2.9-6.8-2.9-9,0l-12.9,17.4
                  c-1.2,1.6-3.1,2.5-5.1,2.5h-22.1c-2,0-3.9-0.9-5.1-2.5l-12.9-17.4c-2.2-2.9-6.8-2.9-9,0l-12.9,17.4c-1.2,1.6-3.1,2.5-5.1,2.5h-22.1
                  c-2,0-3.9-0.9-5.1-2.5l-12.9-17.4c-2.2-2.9-6.8-2.9-9,0l-12.9,17.4c-1.2,1.6-3.1,2.5-5.1,2.5h-22.1c-2,0-3.9-0.9-5.1-2.5l-12.9-17.4
                  c-2.2-2.9-6.8-2.9-9,0l-12.9,17.4c-1.2,1.6-3.1,2.5-5.1,2.5h-22.1c-2,0-3.9-0.9-5.1-2.5l-12.9-17.4c-2.2-2.9-6.8-2.9-9,0l-12.9,17.4
                  c-1.2,1.6-3.1,2.5-5.1,2.5H99.1c-2,0-3.9-0.9-5.1-2.5l-12.9-17.4c-2.2-2.9-6.8-2.9-9,0l-12.9,17.4c-1.2,1.6-3.1,2.5-5.1,2.5H32
                  c-2,0-3.6-1.7-3.6-3.7v-35.5c0-2,1.6-3.7,3.6-3.7h736c2,0,3.6,1.7,3.6,3.7v35.5c0,2-1.6,3.7-3.6,3.7h-22.1c-2,0-3.9-0.9-5.1-2.5
                  L673.7,268.2z"
                  fill="#6B7280"
                />
              </svg>
            </div>

            {/* Connection lines */}
            <svg
              className="absolute inset-0 w-full h-full z-10"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g ref={connectionLinesRef}></g>
            </svg>

            {/* Network nodes */}
            {nodes.map((node, i) => (
              <div
                key={i}
                className={`absolute w-2 h-2 bg-blue-500 rounded-full z-20 transition-all duration-300 ease-in-out ${
                  node.pulse
                    ? "animate-ping opacity-75"
                    : "opacity-40"
                }`}
                style={{
                  top: node.top,
                  left: node.left,
                  width: `${node.size * 8}px`,
                  height: `${node.size * 8}px`,
                  animationDelay: `${node.delay}s`,
                  transform: `translate(-50%, -50%) scale(${node.pulse ? 1.2 : 1})`,
                }}
              />
            ))}

            {/* Central node - Vercel */}
            <div
              className="absolute top-1/2 left-1/2 w-10 h-10 rounded-full bg-black flex items-center justify-center -translate-x-1/2 -translate-y-1/2 z-20 shadow-lg"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 76 65"
                fill="currentColor"
                className="text-white"
              >
                <path d="M37.5274 0L75.0548 65H0L37.5274 0Z"></path>
              </svg>
            </div>

            {/* Add glow effect */}
            <div className="absolute top-1/2 left-1/2 w-16 h-16 -translate-x-1/2 -translate-y-1/2 bg-blue-500 rounded-full opacity-10 blur-xl animate-pulse"></div>

            {/* Text labels for regions */}
            <div className="absolute top-1/4 left-1/4 text-xs font-medium text-gray-500 bg-white bg-opacity-70 px-2 py-1 rounded-full shadow-sm">US East</div>
            <div className="absolute top-1/5 right-1/4 text-xs font-medium text-gray-500 bg-white bg-opacity-70 px-2 py-1 rounded-full shadow-sm">Europe</div>
            <div className="absolute bottom-1/4 left-1/3 text-xs font-medium text-gray-500 bg-white bg-opacity-70 px-2 py-1 rounded-full shadow-sm">South America</div>
            <div className="absolute bottom-1/3 right-1/5 text-xs font-medium text-gray-500 bg-white bg-opacity-70 px-2 py-1 rounded-full shadow-sm">Asia Pacific</div>
          </div>
        </ScrollAnimation>

        {/* Deployment metrics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <ScrollAnimation delay={450} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-sm font-medium text-gray-500 mb-2">Global Edge Network</div>
            <div className="text-3xl font-bold">28+ Regions</div>
            <div className="mt-2 text-sm text-gray-600">Instantly available worldwide</div>
          </ScrollAnimation>

          <ScrollAnimation delay={550} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-sm font-medium text-gray-500 mb-2">Average Response Time</div>
            <div className="text-3xl font-bold">45ms</div>
            <div className="mt-2 text-sm text-gray-600">Ultra-fast content delivery</div>
          </ScrollAnimation>

          <ScrollAnimation delay={650} className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-sm font-medium text-gray-500 mb-2">Uptime Guarantee</div>
            <div className="text-3xl font-bold">99.99%</div>
            <div className="mt-2 text-sm text-gray-600">Enterprise-grade reliability</div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  );
};

export default DeploymentSection;
