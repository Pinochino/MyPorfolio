'use client'

import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

const HeroScene = () => {
  const mountRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const mountNode = mountRef.current
    if (!mountNode) {
      return
    }

    const scene = new THREE.Scene()
    scene.fog = new THREE.Fog(0x020617, 3.5, 11)

    const camera = new THREE.PerspectiveCamera(50, 1, 0.1, 100)
    camera.position.set(0, 0.05, 5.4)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'high-performance' })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(mountNode.clientWidth, mountNode.clientHeight)
    renderer.setClearColor(0x000000, 0)
    mountNode.appendChild(renderer.domElement)

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.35)
    scene.add(ambientLight)

    const mainLight = new THREE.DirectionalLight(0xa5f3fc, 2.5)
    mainLight.position.set(3, 4, 5)
    scene.add(mainLight)

    const accentLight = new THREE.PointLight(0x14b8a6, 2, 20)
    accentLight.position.set(-3, -1.5, 2)
    scene.add(accentLight)

    const rimLight = new THREE.PointLight(0x2563eb, 1.2, 18)
    rimLight.position.set(0, 2.5, -2)
    scene.add(rimLight)

    const coreGeometry = new THREE.TorusKnotGeometry(1.18, 0.34, 180, 22)
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      metalness: 0.88,
      roughness: 0.16,
      emissive: 0x0f766e,
      emissiveIntensity: 0.35,
    })
    const core = new THREE.Mesh(coreGeometry, coreMaterial)
    scene.add(core)

    const coreGlow = new THREE.Mesh(
      new THREE.TorusKnotGeometry(1.18, 0.42, 90, 14),
      new THREE.MeshBasicMaterial({ color: 0x22d3ee, transparent: true, opacity: 0.12 })
    )
    scene.add(coreGlow)

    const haloGeometry = new THREE.IcosahedronGeometry(2.05, 1)
    const haloMaterial = new THREE.MeshStandardMaterial({
      color: 0x0f172a,
      metalness: 0.28,
      roughness: 0.24,
      transparent: true,
      opacity: 0.09,
      wireframe: true,
    })
    const halo = new THREE.Mesh(haloGeometry, haloMaterial)
    scene.add(halo)

    const particlesGeometry = new THREE.BufferGeometry()
    const particlesCount = 180
    const positions = new Float32Array(particlesCount * 3)

    for (let index = 0; index < particlesCount; index += 1) {
      const radius = 2.5 + Math.random() * 1.7
      const angle = Math.random() * Math.PI * 2
      const height = (Math.random() - 0.5) * 5.2

      positions[index * 3] = Math.cos(angle) * radius
      positions[index * 3 + 1] = height
      positions[index * 3 + 2] = Math.sin(angle) * radius
    }

    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3))

    const particlesMaterial = new THREE.PointsMaterial({
      color: 0xa5f3fc,
      size: 0.045,
      transparent: true,
      opacity: 0.75,
      depthWrite: false,
    })
    const particles = new THREE.Points(particlesGeometry, particlesMaterial)
    scene.add(particles)

    let frameId = 0

    const handleResize = () => {
      const { clientWidth, clientHeight } = mountNode
      camera.aspect = clientWidth / clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(clientWidth, clientHeight)
    }

    const animate = () => {
      frameId = window.requestAnimationFrame(animate)

      core.rotation.x += 0.005
      core.rotation.y += 0.009
      coreGlow.rotation.x += 0.003
      coreGlow.rotation.y -= 0.006
      halo.rotation.x -= 0.002
      halo.rotation.y += 0.004
      particles.rotation.y += 0.002
      particles.rotation.x += 0.001

      renderer.render(scene, camera)
    }

    window.addEventListener('resize', handleResize)
    animate()

    return () => {
      window.cancelAnimationFrame(frameId)
      window.removeEventListener('resize', handleResize)
      coreGeometry.dispose()
      coreMaterial.dispose()
      haloGeometry.dispose()
      haloMaterial.dispose()
      particlesGeometry.dispose()
      particlesMaterial.dispose()
      renderer.dispose()
      if (renderer.domElement.parentNode === mountNode) {
        mountNode.removeChild(renderer.domElement)
      }
    }
  }, [])

  return <div ref={mountRef} className="absolute inset-0" aria-hidden="true" />
}

export default HeroScene