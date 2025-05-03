'use client';

import { unlockContent } from '@/services/payments';

export function ContentGate({ children, isLocked }) {
  const [unlocked, setUnlocked] = useState(!isLocked);

  const handleUnlock = async () => {
    const success = await unlockContent();
    if (success) setUnlocked(true);
  };

  if (unlocked) return children;

  return (
    <div className="bg-blue-50 p-8 rounded-lg text-center">
      <h3 className="text-xl font-bold mb-4">Premium Health Report</h3>
      <p className="mb-6">
        Access in-depth analysis and personalized recommendations
      </p>
      <button 
        onClick={handleUnlock}
        className="bg-blue-600 text-white px-6 py-2 rounded-full"
      >
        Unlock for $2.99
      </button>
    </div>
  );
}
