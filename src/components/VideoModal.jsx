function VideoModal({ video, onClose }) {
  if (!video) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-[999]"
      onClick={onClose}
    >
      <div
        className="w-[95%] max-w-5xl aspect-video bg-black rounded-2xl overflow-hidden relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg z-10"
        >
          ✕
        </button>

        <iframe
          className="w-full h-full"
          src={video}
          title="Project Video"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default VideoModal;