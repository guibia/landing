import Header from "./components/Header";
import AnimatedLogos from "./components/AnimatedLogos";
import { Play, X, TrendingUp, BarChart3, Settings, Calculator, Rocket } from "lucide-react";
import { useState } from "react";
import dashboardImage from 'figma:asset/d79256a6b7f28fb90ddce60fa6eb29d303571db8.png';
import homeLogo from 'figma:asset/b19ce98ea61b3d074ed52b4463f15a1f7c61f4b2.png';
import kfcLogo from 'figma:asset/7833ce59f85a0ddd3fda389b5be5831c3af9049d.png';
import weWorkLogo from 'figma:asset/2773ffc216f04429610faf59c2fc90004519c9e3.png';
import stepsImage from 'figma:asset/db09744be31841d8aa7b943635ae1e4023907541.png';
import headerBackground from 'figma:asset/0f25174fd550b348dc306b9cdc0a852f810edec3.png';

export default function App() {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  const handleImageClick = () => {
    setIsVideoPlaying(true);
  };

  const handleCloseVideo = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsVideoPlaying(false);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      
      {/* Hero Section - Above the fold */}
      <section className="relative overflow-hidden pt-24">
        {/* Background Image with Fade - Limited to above the fold */}
        <div className="absolute inset-0">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${headerBackground})`
            }}
          ></div>
          
          {/* Fade out gradient at bottom */}
          <div 
            className="absolute inset-0"
            style={{
              background: `linear-gradient(to bottom, 
                transparent 0%, 
                transparent 70%, 
                rgba(0,0,0,0.3) 85%, 
                rgba(0,0,0,0.8) 95%, 
                #000000 100%)`
            }}
          ></div>
          
          {/* Subtle overlay for better text readability */}
          <div className="absolute inset-0 bg-black/10"></div>
        </div>
        
        <div className="relative mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
          <div className="text-center">
            {/* Trust Badge */}
            <div className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 mb-8">
              <div className="flex -space-x-2 mr-3">
                <img 
                  src={homeLogo} 
                  alt="HOME" 
                  className="h-6 w-6 rounded-full object-cover border border-white/20"
                />
                <img 
                  src={kfcLogo} 
                  alt="KFC" 
                  className="h-6 w-6 rounded-full object-cover border border-white/20"
                />
                <img 
                  src={weWorkLogo} 
                  alt="WeWork" 
                  className="h-6 w-6 rounded-full object-cover border border-white/20"
                />
              </div>
              <span className="text-sm text-gray-300">+3.000 empresas confían en Bia</span>
            </div>

            {/* Main Headline */}
            <h1 className="mx-auto max-w-4xl text-5xl font-semibold tracking-tight text-white lg:text-7xl mb-6">
              Energía inteligente
              <br />
              para tu empresa
            </h1>

            {/* Subheading */}
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
              Monitorea el consumo energético de tus sedes, centraliza sus facturas y optimiza costos con inteligencia artificial
            </p>

            {/* CTA Buttons */}
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <button className="rounded-lg bg-[#08ddbc] border border-[#1f8984] px-6 py-3 font-medium text-[#14151d] hover:bg-[#17ffdb] transition-colors duration-200">
                Quiero unirme
                <span className="ml-2">→</span>
              </button>
            </div>

            {/* Animated Logos */}
            <AnimatedLogos />
          </div>
        </div>
      </section>

      {/* Dashboard Section - Dark Background */}
      <section className="relative bg-black py-20">
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            {/* Dashboard Image/Video - Blended Style */}
            <div className="mx-auto max-w-6xl perspective-[1000px] -mt-8">
              <div className="relative group">
                {/* Background glow layers */}
                <div className="absolute -inset-8 bg-gradient-to-r from-blue-600/30 via-[#3922bf]/8 to-[#3922bf]/10 rounded-3xl blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-700 pointer-events-none"></div>
                <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-[#3922bf]/5 to-[#3922bf]/8 rounded-2xl blur-2xl opacity-60 pointer-events-none"></div>
                
                {/* Main container with perspective */}
                <div 
                  className="relative transform rotate-x-[8deg] rotate-y-[-2deg] transition-transform duration-700 group-hover:rotate-x-[6deg] group-hover:rotate-y-[-1deg]"
                  style={{
                    transformStyle: 'preserve-3d',
                    perspective: '1000px'
                  }}
                >
                  {/* Layered shadow effects */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900/60 to-black/80 rounded-xl blur-sm transform translate-y-8 translate-x-4 scale-[1.02] pointer-events-none"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-800/40 to-black/60 rounded-xl blur-md transform translate-y-12 translate-x-6 scale-[1.04] pointer-events-none"></div>
                  
                  {/* Clickable container */}
                  <div 
                    className="relative rounded-xl overflow-hidden border border-gray-700/50 backdrop-blur-sm cursor-pointer"
                    onClick={!isVideoPlaying ? handleImageClick : undefined}
                  >
                    {/* Non-interactive gradient overlays */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-[#3922bf]/3 z-10 pointer-events-none"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent z-10 pointer-events-none"></div>
                    
                    {/* Inner border glow */}
                    <div className="absolute inset-0 rounded-xl border border-white/10 z-20 pointer-events-none"></div>
                    
                    {/* Conditional rendering: Image or Video */}
                    {!isVideoPlaying ? (
                      <>
                        {/* Image */}
                        <img 
                          src={dashboardImage} 
                          alt="BIA Dashboard - Energy Monitoring Platform" 
                          className="w-full h-auto relative z-0 transition-transform duration-700 group-hover:scale-[1.02]"
                        />
                        
                        {/* Play Button Overlay */}
                        <div className="absolute inset-0 flex items-center justify-center z-40 pointer-events-none">
                          <div className="group/play relative flex items-center justify-center w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 group-hover:bg-white/20 group-hover:border-white/30 transition-all duration-300 group-hover:scale-110">
                            {/* Background glow */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-[#3922bf]/5 blur-xl opacity-0 group-hover/play:opacity-100 transition-opacity duration-300"></div>
                            
                            {/* Play icon */}
                            <Play 
                              className="w-8 h-8 text-white ml-1 relative z-10 transition-transform duration-300 group-hover/play:scale-110" 
                              fill="white"
                            />
                            
                            {/* Inner highlight */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-60"></div>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        {/* Video */}
                        <video 
                          className="w-full h-auto relative z-0"
                          controls
                          autoPlay
                          playsInline
                        >
                          <source 
                            src="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4" 
                            type="video/mp4"
                          />
                          Tu navegador no soporta la reproducción de video.
                        </video>
                        
                        {/* Close Button Overlay */}
                        <div className="absolute top-4 right-4 z-40">
                          <button 
                            onClick={handleCloseVideo}
                            className="group/close relative flex items-center justify-center w-10 h-10 rounded-full bg-black/50 backdrop-blur-md border border-white/20 hover:bg-black/70 hover:border-white/30 transition-all duration-300 hover:scale-110"
                          >
                            {/* Background glow */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/20 to-[#3922bf]/5 blur-xl opacity-0 group-hover/close:opacity-100 transition-opacity duration-300"></div>
                            
                            {/* Close icon */}
                            <X 
                              className="w-5 h-5 text-white relative z-10 transition-transform duration-300 group-hover/close:scale-110"
                            />
                            
                            {/* Inner highlight */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-60"></div>
                          </button>
                        </div>
                      </>
                    )}
                    
                    {/* Subtle highlight overlay */}
                    <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent z-30 pointer-events-none"></div>
                  </div>
                  
                  {/* Floating reflection - Top - Extended */}
                  <div className="absolute inset-x-0 -top-20 h-80 bg-gradient-to-b from-blue-500/8 via-blue-500/4 to-transparent rounded-xl blur-2xl opacity-50 pointer-events-none"></div>
                  
                  {/* Floating reflection - Bottom */}
                  <div className="absolute inset-x-0 -bottom-4 h-32 bg-gradient-to-t from-blue-500/5 to-transparent rounded-xl blur-xl opacity-40 pointer-events-none"></div>
                  
                  {/* Light beams emanating from bottom */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full h-40 pointer-events-none">
                    {/* Central beam */}
                    <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-full bg-gradient-to-t from-[#3922bf]/8 to-transparent blur-sm"></div>
                    
                    {/* Left beams */}
                    <div className="absolute bottom-0 left-[30%] transform -translate-x-1/2 w-1 h-32 bg-gradient-to-t from-[#3922bf]/6 to-transparent blur-sm rotate-[-15deg] origin-bottom"></div>
                    <div className="absolute bottom-0 left-[20%] transform -translate-x-1/2 w-1 h-24 bg-gradient-to-t from-[#3922bf]/4 to-transparent blur-sm rotate-[-25deg] origin-bottom"></div>
                    
                    {/* Right beams */}
                    <div className="absolute bottom-0 left-[70%] transform -translate-x-1/2 w-1 h-32 bg-gradient-to-t from-[#3922bf]/6 to-transparent blur-sm rotate-[15deg] origin-bottom"></div>
                    <div className="absolute bottom-0 left-[80%] transform -translate-x-1/2 w-1 h-24 bg-gradient-to-t from-[#3922bf]/4 to-transparent blur-sm rotate-[25deg] origin-bottom"></div>
                    
                    {/* Additional subtle side beams */}
                    <div className="absolute bottom-0 left-[10%] transform -translate-x-1/2 w-px h-16 bg-gradient-to-t from-[#3922bf]/3 to-transparent blur-sm rotate-[-35deg] origin-bottom"></div>
                    <div className="absolute bottom-0 left-[90%] transform -translate-x-1/2 w-px h-16 bg-gradient-to-t from-[#3922bf]/3 to-transparent blur-sm rotate-[35deg] origin-bottom"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section - Left Aligned */}
      <section className="relative bg-black">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Content */}
              <div>
                <h1 className="text-5xl font-semibold tracking-tight text-white mb-6">
                  Haz de tu energía una oportunidad
                </h1>
                <p className="text-xl text-[#a1a1aa] leading-relaxed mb-8 max-w-xl">
                  Sin herramientas para gestionar tu consumo energético, cada factura es una sorpresa.
                </p>

                {/* 2x2 Grid Cards */}
                <div className="grid grid-cols-2 gap-4 max-w-lg">
                  {/* Card 1 - Rentabilidad */}
                  <div className="group relative p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex-shrink-0">
                        <TrendingUp className="w-5 h-5 text-[#a1a1aa] group-hover:text-[#08ddbc] transition-colors duration-200" />
                      </div>
                      <h3 className="text-white font-medium">
                        Rentabilidad
                      </h3>
                    </div>
                    <p className="text-[#a1a1aa] text-sm leading-relaxed">
                      Optimiza costos energéticos y maximiza ganancias.
                    </p>
                  </div>

                  {/* Card 2 - Información */}
                  <div className="group relative p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex-shrink-0">
                        <BarChart3 className="w-5 h-5 text-[#a1a1aa] group-hover:text-[#08ddbc] transition-colors duration-200" />
                      </div>
                      <h3 className="text-white font-medium">
                        Información
                      </h3>
                    </div>
                    <p className="text-[#a1a1aa] text-sm leading-relaxed">
                      Datos precisos en tiempo real para mejores decisiones.
                    </p>
                  </div>

                  {/* Card 3 - Control */}
                  <div className="group relative p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex-shrink-0">
                        <Settings className="w-5 h-5 text-[#a1a1aa] group-hover:text-[#08ddbc] transition-colors duration-200" />
                      </div>
                      <h3 className="text-white font-medium">
                        Control
                      </h3>
                    </div>
                    <p className="text-[#a1a1aa] text-sm leading-relaxed">
                      Gestiona gastos energéticos con total confianza.
                    </p>
                  </div>

                  {/* Card 4 - Competitividad */}
                  <div className="group relative p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="flex-shrink-0">
                        <Rocket className="w-5 h-5 text-[#a1a1aa] group-hover:text-[#08ddbc] transition-colors duration-200" />
                      </div>
                      <h3 className="text-white font-medium">
                        Competitividad
                      </h3>
                    </div>
                    <p className="text-[#a1a1aa] text-sm leading-relaxed">
                      Mantén ventaja estratégica optimizando energía.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Right Visual */}
              <div className="relative">
                <div className="relative rounded-xl overflow-hidden border border-[#27272a] bg-[#09090b]">
                  <img 
                    src="./Consumo.png"
                    alt="Consumo energético dashboard"
                    className="w-full h-[385px] object-cover opacity-80"
                  />
                  {/* Overlay with grid pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#08ddbc]/10 via-transparent to-[#3922bf]/5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </section>

      {/* Four Steps Section - Image Left */}
      <section className="relative bg-black">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
          <div className="relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Visual */}
              <div className="relative">
                <div className="relative rounded-xl overflow-hidden border border-[#27272a] bg-[#09090b]">
                  <img 
                    src={stepsImage}
                    alt="Four Steps Process"
                    className="w-full h-[385px] object-cover opacity-80"
                  />
                  {/* Overlay with grid pattern */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#08ddbc]/10 via-transparent to-[#3922bf]/5"></div>
                </div>
              </div>

              {/* Right Content */}
              <div>
                <h1 className="text-5xl font-semibold tracking-tight text-white mb-6">
                  Tres pasos para cambiar de proveedor
                </h1>
                <p className="text-xl text-[#a1a1aa] leading-relaxed mb-8 max-w-xl">
                  Simplificamos el proceso para que tu empresa acceda a mejores tarifas energéticas.
                </p>

                {/* Vertical Steps List */}
                <div className="space-y-6 max-w-lg">
                  {/* Step 1 */}
                  <div className="group relative flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#3922bf]/10 border border-[#3922bf]/20 flex items-center justify-center">
                      <span className="text-white text-sm font-medium">1</span>
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">
                        Regístrate
                      </h3>
                      <p className="text-[#a1a1aa] text-sm leading-relaxed">
                        Proporciona la información básica de tu empresa.
                      </p>
                    </div>
                  </div>

                  {/* Step 2 */}
                  <div className="group relative flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#3922bf]/10 border border-[#3922bf]/20 flex items-center justify-center">
                      <span className="text-white text-sm font-medium">2</span>
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">
                        Recibe oferta
                      </h3>
                      <p className="text-[#a1a1aa] text-sm leading-relaxed">
                        Te enviamos una propuesta con tarifas competitivas.
                      </p>
                    </div>
                  </div>

                  {/* Step 3 */}
                  <div className="group relative flex items-start gap-4">
                    <div className="flex-shrink-0 w-8 h-8 rounded-full bg-[#08ddbc]/20 border border-[#08ddbc]/40 flex items-center justify-center">
                      <span className="text-white text-sm font-medium">3</span>
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-1">
                        Firmamos por ti
                      </h3>
                      <p className="text-[#a1a1aa] text-sm leading-relaxed">
                        Gestionamos todo el cambio de proveedor por ti.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}