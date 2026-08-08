import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import portfolio from "../data/portfolio";
import VideoModal from "./VideoModal";
import SectionTitle from "./SectionTitle";

const TABS = [
  { key: "long", label: "🎬 Long Form Videos" },
  { key: "shorts", label: "📱 YouTube Shorts" },
  { key: "reels", label: "📸 Instagram Reels" },
];

function Projects() {
  const [activeTab, setActiveTab] = useState("long");
  const [selectedVideo, setSelectedVideo] = useState(null);

  const getVideoId = (link) => link.match(/(?:youtu\.be\/|v=)([^?&]+)/)?.[1];

  return (
    <section id="projects" className="bg-zinc-900 text-white py-24 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <SectionTitle
          eyebrow="Recent work"
          title="My"
          highlight="Projects"
          description="A selection of documentaries, shorts and reels I've edited for creators."
        />

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-5 py-2.5 rounded-xl font-semibold text-sm md:text-base transition-all duration-300 border ${
                activeTab === tab.key
                  ? "bg-red-500 border-red-500 text-white shadow-lg shadow-red-500/20"
                  : "bg-zinc-950 border-zinc-800 text-gray-300 hover:border-red-500 hover:text-red-500"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {activeTab === "long" && (
            <motion.div
              key="long"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {portfolio.longVideos.map((video, index) => (
                <div
                  key={index}
                  className="group bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden hover:-translate-y-1 hover:border-red-500 transition-all duration-300"
                >
                  <div className="overflow-hidden">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      loading="lazy"
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-4">
                    <h4 className="font-semibold text-base mb-3 text-pretty">
                      {video.title}
                    </h4>

                    <button
                      onClick={() => {
                        const videoId = getVideoId(video.link);
                        if (videoId) {
                          setSelectedVideo(`https://www.youtube.com/embed/${videoId}`);
                        }
                      }}
                      className="w-full bg-red-500 hover:bg-red-600 py-2.5 rounded-xl font-semibold transition"
                    >
                      ▶ Watch Project
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === "shorts" && (
            <motion.div
              key="shorts"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4"
            >
              {portfolio.shorts.map((video, index) => (
                <div
                  key={index}
                  className="group bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden hover:border-red-500 transition"
                >
                  <div className="overflow-hidden aspect-[9/16]">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-3">
                    <h4 className="font-semibold text-sm line-clamp-2">
                      {video.title}
                    </h4>

                    <button
                      onClick={() => {
                        const videoId = getVideoId(video.link);
                        if (videoId) {
                          setSelectedVideo(`https://www.youtube.com/embed/${videoId}`);
                        }
                      }}
                      className="mt-3 w-full bg-red-500 hover:bg-red-600 py-2 rounded-lg text-sm font-semibold transition"
                    >
                      ▶ Watch Short
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>
          )}

          {activeTab === "reels" && (
            <motion.div
              key="reels"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4"
            >
              {portfolio.reels.map((video, index) => (
                <a
                  key={index}
                  href={video.link}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-zinc-950 border border-zinc-800 rounded-xl overflow-hidden hover:border-red-500 hover:-translate-y-1 transition-all"
                >
                  <div className="aspect-[9/16] bg-gradient-to-br from-zinc-800 to-zinc-900 flex items-center justify-center text-5xl">
                    📸
                  </div>

                  <div className="p-3">
                    <h4 className="font-semibold text-sm line-clamp-2">
                      {video.title}
                    </h4>

                    <span className="mt-3 block w-full text-center bg-red-500 hover:bg-red-600 py-2 rounded-lg text-sm font-semibold transition">
                      ▶ View Reel
                    </span>
                  </div>
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <VideoModal video={selectedVideo} onClose={() => setSelectedVideo(null)} />
    </section>
  );
}

export default Projects;
