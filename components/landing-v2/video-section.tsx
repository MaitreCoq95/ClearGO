"use client"

import { useState, useRef } from "react"
import { Play, Pause, Volume2, VolumeX } from "lucide-react"

interface VideoShowcaseProps {
  src: string
  poster?: string
  title: string
  subtitle?: string
  autoPlay?: boolean
  className?: string
}

export function VideoShowcase({
  src,
  poster,
  title,
  subtitle,
  autoPlay = false,
  className = ""
}: VideoShowcaseProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(autoPlay)
  const [isMuted, setIsMuted] = useState(true)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <div className={`relative rounded-2xl overflow-hidden shadow-2xl group ${className}`}>
      {/* Video */}
      <video
        ref={videoRef}
        src={src}
        poster={poster}
        autoPlay={autoPlay}
        muted={isMuted}
        loop
        playsInline
        className="w-full h-auto"
        onClick={togglePlay}
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

      {/* Play button overlay */}
      {!isPlaying && (
        <button
          onClick={togglePlay}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center shadow-xl hover:scale-110 transition-transform">
            <Play className="w-8 h-8 text-cleargo-blue ml-1" />
          </div>
        </button>
      )}

      {/* Controls */}
      <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
        {/* Title */}
        <div className="text-white">
          <h4 className="font-semibold text-lg">{title}</h4>
          {subtitle && <p className="text-white/80 text-sm">{subtitle}</p>}
        </div>

        {/* Control buttons */}
        <div className="flex gap-2">
          <button
            onClick={togglePlay}
            className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            {isPlaying ? (
              <Pause className="w-5 h-5 text-white" />
            ) : (
              <Play className="w-5 h-5 text-white ml-0.5" />
            )}
          </button>
          <button
            onClick={toggleMute}
            className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            {isMuted ? (
              <VolumeX className="w-5 h-5 text-white" />
            ) : (
              <Volume2 className="w-5 h-5 text-white" />
            )}
          </button>
        </div>
      </div>
    </div>
  )
}

interface VideoSectionProps {
  variant?: "problem" | "solution" | "both"
}

export function VideoSection({ variant = "both" }: VideoSectionProps) {
  if (variant === "problem") {
    return (
      <section className="py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-cleargo-blue font-medium text-sm uppercase tracking-wider">
                🎬 En vidéo
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-3">
                Le quotidien de la conformité documentaire
              </h2>
            </div>
            <VideoShowcase
              src="/videos/VideoDifficultéDocument.mp4"
              title="La difficulté documentaire"
              subtitle="Ce que vivent les transporteurs au quotidien"
              autoPlay={true}
            />
          </div>
        </div>
      </section>
    )
  }

  if (variant === "solution") {
    return (
      <section className="py-16 lg:py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-cleargo-green font-medium text-sm uppercase tracking-wider">
                🎬 Découvrez ClearGo
              </span>
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mt-3">
                Comment ClearGo transforme votre conformité
              </h2>
            </div>
            <VideoShowcase
              src="/videos/Vidéo présentation.mp4"
              title="Présentation ClearGo"
              subtitle="Découvrez notre programme de transformation"
              autoPlay={true}
            />
          </div>
        </div>
      </section>
    )
  }

  // variant === "both" - Side by side layout
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-slate-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="text-cleargo-blue font-medium text-sm uppercase tracking-wider">
            🎬 Découvrez en vidéo
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mt-3">
            Du problème à la solution
          </h2>
          <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
            Comprenez les défis de la conformité et comment ClearGo les transforme en opportunités
          </p>
        </div>

        {/* Side by side videos */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Video 1 - Problem */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 bg-red-100 text-red-600 rounded-full flex items-center justify-center text-sm font-bold">1</span>
              <h3 className="font-semibold text-gray-900">Le problème</h3>
            </div>
            <VideoShowcase
              src="/videos/VideoDifficultéDocument.mp4"
              title="La difficulté documentaire"
              subtitle="Ce que vous vivez au quotidien"
              autoPlay={true}
            />
          </div>

          {/* Video 2 - Solution */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center text-sm font-bold">2</span>
              <h3 className="font-semibold text-gray-900">La solution</h3>
            </div>
            <VideoShowcase
              src="/videos/Vidéo présentation.mp4"
              title="Présentation ClearGo"
              subtitle="Notre programme de transformation"
              autoPlay={true}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
