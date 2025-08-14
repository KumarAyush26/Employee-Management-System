import React, { useState } from 'react';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      handleLogin(email, password);
      setIsLoading(false);
      setEmail('');
      setPassword('');
    }, 800);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-[#0b0b1a] via-[#17162a] to-[#0b0b1a] relative overflow-hidden">
      {/* Starfield layers */}
      <div className="absolute inset-0 -z-10">
        <div className="stars stars-1"></div>
        <div className="stars stars-2"></div>
        <div className="stars stars-3"></div>
      </div>

      {/* Animated neon blobs */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-purple-500 rounded-full mix-blend-screen filter blur-[120px] opacity-60 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-pink-500 rounded-full mix-blend-screen filter blur-[120px] opacity-60 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-blue-500 rounded-full mix-blend-screen filter blur-[120px] opacity-50 animate-blob animation-delay-4000"></div>
      </div>

      {/* Card */}
      <div className="relative z-10 w-full max-w-md">
        <div className="bg-white/5 backdrop-blur-2xl rounded-3xl shadow-[0_0_40px_rgba(0,0,0,0.45)] border border-white/15 p-10 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_60px_rgba(0,0,0,0.6)]">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-extrabold bg-gradient-to-r from-purple-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent animate-fade-in">
              Welcome Back
            </h1>
            <p className="text-gray-400 animate-fade-in-delay">Sign in to your account</p>
          </div>

          <form onSubmit={submitHandler} className="space-y-6">
            <div className="relative">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                type="email"
                className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/70 focus:border-transparent transition-all duration-300"
                placeholder="Enter your email"
              />
            </div>

            <div className="relative">
              <input
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                type="password"
                className="w-full px-6 py-4 bg-white/5 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-pink-500/70 focus:border-transparent transition-all duration-300"
                placeholder="Enter your password"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-4 px-8 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 active:scale-95 ${
                isLoading
                  ? 'bg-gray-600 cursor-not-allowed text-gray-300'
                  : 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white shadow-lg hover:shadow-2xl'
              }`}
            >
              {isLoading ? (
                <div className="flex items-center justify-center">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Signing in...
                </div>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-400 text-sm">
              Need an account?{' '}
              <span className="text-purple-400 hover:text-purple-300 cursor-pointer transition-colors duration-300">
                Contact admin
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Custom animations and starfield CSS */}
      <style jsx>{`
        /* Blobs */
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.08); }
          66% { transform: translate(-20px, 20px) scale(0.94); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        .animate-blob { animation: blob 9s infinite ease-in-out; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }

        /* Fade-in */
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 0.8s ease-out; }
        .animate-fade-in-delay { animation: fade-in 0.8s ease-out 0.2s both; }

        /* Starfield: three layers for parallax + twinkle */
        .stars {
          position: absolute;
          inset: 0;
          background-repeat: repeat;
          background-size: contain;
          pointer-events: none;
          opacity: 0.6;
        }

        /* Generate dots using radial-gradients; each layer different density/size */
        .stars-1 {
          background-image:
            radial-gradient(1px 1px at 20% 30%, rgba(255,255,255,0.9) 99%, transparent 100%),
            radial-gradient(1px 1px at 80% 60%, rgba(255,255,255,0.8) 99%, transparent 100%),
            radial-gradient(1px 1px at 40% 80%, rgba(255,255,255,0.75) 99%, transparent 100%),
            radial-gradient(1px 1px at 60% 20%, rgba(255,255,255,0.8) 99%, transparent 100%),
            radial-gradient(1px 1px at 10% 70%, rgba(255,255,255,0.85) 99%, transparent 100%);
          animation: drift-1 120s linear infinite, twinkle 6s ease-in-out infinite;
          filter: drop-shadow(0 0 2px rgba(255,255,255,0.35));
        }
        .stars-2 {
          background-image:
            radial-gradient(1.5px 1.5px at 30% 20%, rgba(255,255,255,0.9) 99%, transparent 100%),
            radial-gradient(1.5px 1.5px at 70% 50%, rgba(255,255,255,0.85) 99%, transparent 100%),
            radial-gradient(1.5px 1.5px at 50% 90%, rgba(255,255,255,0.8) 99%, transparent 100%),
            radial-gradient(1.5px 1.5px at 90% 40%, rgba(255,255,255,0.8) 99%, transparent 100%);
          animation: drift-2 180s linear infinite, twinkle 7.5s ease-in-out infinite;
          opacity: 0.5;
        }
        .stars-3 {
          background-image:
            radial-gradient(2px 2px at 25% 75%, rgba(255,255,255,0.9) 99%, transparent 100%),
            radial-gradient(2px 2px at 85% 30%, rgba(255,255,255,0.85) 99%, transparent 100%),
            radial-gradient(2px 2px at 55% 10%, rgba(255,255,255,0.8) 99%, transparent 100%);
          animation: drift-3 240s linear infinite, twinkle 9s ease-in-out infinite;
          opacity: 0.45;
        }

        /* Slow parallax drift */
        @keyframes drift-1 { from { transform: translateY(0); } to { transform: translateY(-200px); } }
        @keyframes drift-2 { from { transform: translateY(0); } to { transform: translateY(-300px); } }
        @keyframes drift-3 { from { transform: translateY(0); } to { transform: translateY(-450px); } }

        /* Soft twinkle */
        @keyframes twinkle {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }

        /* Reduce motion preference */
        @media (prefers-reduced-motion: reduce) {
          .animate-blob,
          .stars-1, .stars-2, .stars-3 {
            animation: none !important;
            opacity: 0.35;
          }
        }
      `}</style>
    </div>
  );
};

export default Login;
