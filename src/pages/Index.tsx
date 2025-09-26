import CareerGeneratorWidget from '@/components/CareerGeneratorWidget';

const Index = () => {
  return (
    <div className="min-h-screen bg-widget flex items-center justify-center p-6">
      <div className="w-full max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Career Discovery Widget
          </h1>
          <p className="text-xl text-muted-foreground">
            Explore exciting career possibilities in Canada
          </p>
        </div>
        
        <CareerGeneratorWidget />
        
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            This widget can be easily embedded into any existing page or application
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
