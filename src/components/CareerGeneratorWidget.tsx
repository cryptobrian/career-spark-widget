import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Shuffle, Sparkles } from 'lucide-react';
import { canadianCareers } from '@/data/careers';

const CareerGeneratorWidget = () => {
  const [currentCareer, setCurrentCareer] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState(false);

  const generateRandomCareer = () => {
    setIsGenerating(true);
    
    // Add a delay for smooth animation
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * canadianCareers.length);
      setCurrentCareer(canadianCareers[randomIndex]);
      setIsGenerating(false);
    }, 400);
  };

  return (
    <div className="bg-embark-surface border border-embark-border rounded-2xl p-8 shadow-embark-lg max-w-3xl mx-auto font-inter">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-3 mb-3">
          <Sparkles className="h-7 w-7 text-embark-purple" />
          <h2 className="text-3xl font-bold text-embark-text-primary">
            Career Generator
          </h2>
          <Sparkles className="h-7 w-7 text-embark-purple" />
        </div>
        <p className="text-embark-text-secondary text-lg">
          Discover random careers from Canada's top 200 professions
        </p>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-8 justify-center">
        <Button
          onClick={generateRandomCareer}
          disabled={isGenerating}
          className="bg-embark-purple hover:bg-embark-purple-hover text-white px-10 py-4 h-auto font-semibold text-lg rounded-xl shadow-embark transition-embark hover:shadow-embark-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <Shuffle className={`mr-3 h-6 w-6 transition-transform duration-300 ${
            isGenerating ? 'animate-spin' : ''
          }`} />
          {isGenerating ? 'Generating...' : 'Generate Career'}
        </Button>

        <div className="flex-1 w-full max-w-lg">
          <div className="bg-embark border border-embark-border rounded-xl p-6 min-h-[80px] flex items-center shadow-embark">
            {currentCareer ? (
              <div className="animate-in fade-in slide-in-from-bottom-2 duration-300">
                <p className="text-2xl font-semibold text-embark-text-primary mb-1">
                  {currentCareer}
                </p>
                <p className="text-sm text-embark-text-secondary">
                  🇨🇦 Top Canadian career opportunity
                </p>
              </div>
            ) : (
              <p className="text-lg text-embark-text-secondary text-center w-full">
                {isGenerating 
                  ? <span className="animate-pulse">Discovering your next career...</span>
                  : 'Click the button to discover a career!'
                }
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerGeneratorWidget;