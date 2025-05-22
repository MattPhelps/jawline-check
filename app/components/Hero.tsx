import ReviewBox from "./ReviewBox";

export default function Hero() {
  return (
    <div className="hero min-h-screen lg:-mt-28 flex items-center justify-center">
      <div className="hero-content text-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl lg:text-5xl font-bold">
            Measure Your Jawline Angle
          </h1>
          <p className="py-6 text-lg mt-6">
            Upload a side profile photo and instantly find out your gonial angle. Quick, accurate, and judgment-free.
          </p>
          <a href="/upload">
            <button className="btn btn-primary btn-lg text-white mt-6">
              Check My Jawline <span className="text-lg">→</span>
            </button>
          </a>
          <ReviewBox />
        </div>
      </div>
    </div>
  );
}
