import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50">
      {/* Nav */}
      <nav className="flex items-center justify-between px-8 py-6">
        <span className="text-xl font-semibold tracking-tight text-stone-800">
          旅伴{' '}
          <span className="text-stone-400 font-normal text-base">wanderpal</span>
        </span>
        <Link
          href="/trips"
          className="bg-stone-800 text-white text-sm px-4 py-2 rounded-full hover:bg-stone-700 transition-colors"
        >
          我的行程
        </Link>
      </nav>

      {/* Hero */}
      <section className="flex flex-col items-center text-center px-8 pt-24 pb-32">
        <p className="text-sm text-stone-400 tracking-widest uppercase mb-6">
          your travel companion
        </p>
        <h1 className="text-5xl font-semibold text-stone-800 leading-tight mb-6">
          随心规划
          <br />
          随手记录
        </h1>
        <p className="text-stone-500 text-lg max-w-md mb-10">
          你的旅行伴侣 — 轻松规划行程，记录途中每一个值得留下的瞬间
        </p>
        <Link
          href="/trips"
          className="bg-teal-600 text-white px-8 py-3 rounded-full text-base hover:bg-teal-500 transition-colors"
        >
          开始旅行 →
        </Link>
      </section>

      {/* Features */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto px-8 pb-32">
        {[
          {
            icon: '🗺️',
            title: '旅行规划',
            desc: '在地图上 pin 地点，一眼看清路线和距离',
          },
          {
            icon: '✨',
            title: '景点推荐',
            desc: '输入目的地，智能推荐值得去的地方',
          },
          {
            icon: '📸',
            title: '旅途记录',
            desc: '打卡 + 照片 + 文字，留住每个瞬间',
          },
        ].map((f) => (
          <div key={f.title} className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="text-2xl mb-3">{f.icon}</div>
            <h3 className="font-medium text-stone-800 mb-2">{f.title}</h3>
            <p className="text-stone-500 text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </section>
    </main>
  )
}