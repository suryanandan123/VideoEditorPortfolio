function Contact() {
  return (
    <section className="bg-zinc-950 text-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-5xl font-bold mb-6">
          Let's <span className="text-red-500">Work Together</span>
        </h2>

        <p className="text-gray-400 text-lg mb-12">
          Looking for a professional video editor? Let's create something amazing together.
        </p>

        <div className="grid md:grid-cols-2 gap-6">

          <a
            href="mailto:skysuryanandan@gmail.com"
            className="bg-zinc-900 p-6 rounded-xl hover:border-red-500 border border-zinc-800 transition"
          >
            📧 skysuryanandan@gmail.com
          </a>

          <a
            href="https://linkedin.com/in/suryanandan-bhagat-766ab125a"
            target="_blank"
            rel="noreferrer"
            className="bg-zinc-900 p-6 rounded-xl hover:border-red-500 border border-zinc-800 transition"
          >
            💼 LinkedIn
          </a>

          <a
            href="https://youtube.com/@SnbThink"
            target="_blank"
            rel="noreferrer"
            className="bg-zinc-900 p-6 rounded-xl hover:border-red-500 border border-zinc-800 transition"
          >
            ▶️ YouTube Channel
          </a>

          <a
            href="https://wa.me/91YOURNUMBER"
            target="_blank"
            rel="noreferrer"
            className="bg-green-600 p-6 rounded-xl hover:bg-green-700 transition"
          >
            💬 WhatsApp
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;