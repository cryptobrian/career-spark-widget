import CareerGeneratorWidget from '@/components/CareerGeneratorWidget';

const Index = () => {
  return (
    <div className="min-h-screen bg-embark flex items-center justify-center p-6 font-inter">
      <div className="w-full max-w-5xl">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 text-embark-text-primary">
            Career Discovery Widget
          </h1>
          <p className="text-xl text-embark-text-secondary max-w-2xl mx-auto leading-relaxed">
            Explore exciting career possibilities in Canada with our interactive career generator
          </p>
        </div>
        
        <CareerGeneratorWidget />
        
        <div className="mt-16 text-center">
          <p className="text-embark-text-secondary">
            This widget can be easily embedded into any existing page or application
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
