'use client';

export function VoiceSearch() {
  const [isListening, setIsListening] = useState(false);
  
  const startListening = () => {
    // Web Speech API implementation
  };
  
  return (
    <button 
      onClick={startListening}
      className="flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full"
    >
      <MicIcon />
      {isListening ? 'Listening...' : 'Ask Health Question'}
    </button>
  );
}
