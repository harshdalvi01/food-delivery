import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Lock, Mail } from 'lucide-react';

function LoginPage({ onLogin, onBack }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const canSubmit = useMemo(() => email.trim() && password.trim(), [email, password]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const normalizedEmail = email.trim();
    const normalizedPassword = password.trim();

    if (!normalizedEmail.includes('@') || normalizedEmail.length < 6) {
      setError('Please enter a valid email address.');
      return;
    }

    if (normalizedPassword.length < 6) {
      setError('Password must be at least 6 characters.');
      return;
    }

    setError('');
    const userName = normalizedEmail.split('@')[0] || 'Guest';
    onLogin({ userName });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-white to-primary-50/50 px-4 py-6 flex items-center justify-center">
      <div className="max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="glass-card p-7 sm:p-8"
        >
          <h2 className="font-display text-3xl font-bold text-neutral-900">Welcome back</h2>
          <p className="text-neutral-600 mt-2">Login to view products and start shopping.</p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <label className="block">
              <span className="text-sm font-medium text-neutral-600">Email</span>
              <div className="relative mt-1.5">
                <Mail className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="input-field pl-11"
                  placeholder="you@example.com"
                  autoComplete="email"
                />
              </div>
            </label>

            <label className="block">
              <span className="text-sm font-medium text-neutral-600">Password</span>
              <div className="relative mt-1.5">
                <Lock className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="input-field pl-11 pr-11"
                  placeholder="Enter at least 6 characters"
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(prev => !prev)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-lg text-neutral-500 hover:bg-neutral-100"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </label>

            {error && (
              <p className="text-sm font-medium text-red-600 bg-red-50 px-3 py-2 rounded-lg border border-red-200">
                {error}
              </p>
            )}

            <button type="submit" disabled={!canSubmit} className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed">
              Login and Continue
            </button>
          </form>

          <button type="button" onClick={onBack} className="btn-ghost w-full mt-3">
            Back to Landing
          </button>
        </motion.div>
      </div>
    </div>
  );
}

export default LoginPage;
