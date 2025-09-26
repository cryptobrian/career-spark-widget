import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Shuffle, Sparkles } from 'lucide-react';
import { canadianCareers } from '@/data/careers';

const CareerGeneratorWidget = () => {
  const [currentCareer, setCurrentCareer] = useState<string>('Click to discover your career!');
  const [isGenerating, setIsGenerating] = useState(false);

  const generateRandomCareer = () => {
    setIsGenerating(true);
    
    // Add a delay for smooth animation
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * canadianCareers.length);
      setCurrentCareer(canadianCareers[randomIndex]);
      setIsGenerating(false);
    }, 500);
  };

  return (
    <div className="bg-gradient-surface border border-widget-border rounded-2xl p-8 shadow-widget backdrop-blur-sm max-w-2xl mx-auto">
      <div className="text-center mb-6">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Sparkles className="h-6 w-6 text-widget-glow" />
          <h2 className="text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Career Generator
          </h2>
          <Sparkles className="h-6 w-6 text-widget-glow" />
        </div>
        <p className="text-muted-foreground text-sm">
          Discover random careers from Canada's top 200 professions
        </p>
      </div>

      <div className="flex items-center gap-6 justify-center">
        <Button
          onClick={generateRandomCareer}
          disabled={isGenerating}
          className="group bg-gradient-primary hover:shadow-glow text-primary-foreground px-8 py-3 h-auto font-semibold text-lg transition-all duration-300 hover:scale-105 disabled:hover:scale-100"
        >
          <Shuffle className={`mr-2 h-5 w-5 transition-transform duration-500 ${
            isGenerating ? 'rotate-180' : 'group-hover:rotate-12'
          }`} />
          {isGenerating ? 'Generating...' : 'Generate Career'}
        </Button>

        <div className="flex-1 max-w-md">
          <div className="bg-widget-surface/50 border border-widget-border rounded-xl p-4 min-h-[60px] flex items-center">
            <p className={`text-lg font-medium transition-all duration-500 ${
              isGenerating 
                ? 'text-muted-foreground animate-pulse' 
                : currentCareer === 'Click to discover your career!'
                  ? 'text-muted-foreground'
                  : 'text-career-highlight'
            }`}>
              {isGenerating ? 'Discovering your next career...' : currentCareer}
            </p>
          </div>
        </div>
      </div>

      {currentCareer !== 'Click to discover your career!' && !isGenerating && (
        <div className="mt-6 text-center animate-in fade-in slide-in-from-bottom-2 duration-500">
          <p className="text-sm text-muted-foreground">
            🇨🇦 One of Canada's top career opportunities
          </p>
        </div>
      )}
    </div>
  );
};

export default CareerGeneratorWidget;