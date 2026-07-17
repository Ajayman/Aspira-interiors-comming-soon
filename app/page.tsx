import { Mail, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Page() {
  return (
    <main 
      className="w-full h-screen bg-background text-foreground overflow-hidden flex flex-col"
      style={{
        '--vw-base': 'calc(1vw + 1vh)',
        '--text-xs': 'calc(0.6 * var(--vw-base))',
        '--text-sm': 'calc(0.8 * var(--vw-base))',
        '--text-lg': 'calc(1.2 * var(--vw-base))',
        '--text-2xl': 'calc(1.8 * var(--vw-base))',
        '--text-3xl': 'calc(2.2 * var(--vw-base))',
        '--text-5xl': 'calc(3.5 * var(--vw-base))',
      } as React.CSSProperties}
    >
      {/* Navigation */}
      <nav className="flex items-center justify-between px-12 py-5 bg-background/95 backdrop-blur-sm border-b border-border flex-shrink-0">
        <div className="text-xl font-light tracking-wide">
          <span className="font-semibold" style={{ fontSize: 'var(--text-2xl)' }}>Aspira</span> Interiors
        </div>
        <div className="flex items-center gap-8">
        </div>
      </nav>

      {/* Main Content - Fixed Layout */}
      <div className="flex-1 overflow-hidden flex">
        {/* Left Side - Text Content */}
        <div className="w-1/3 flex flex-col justify-center px-12 py-8">
          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-accent font-medium tracking-widest uppercase" style={{ fontSize: 'var(--text-xs)' }}>Redefining Elegance</p>
              <h1 className="font-light tracking-tight leading-tight" style={{ fontSize: '36px' }}>
                Premium Interior Design
              </h1>
              <p className="text-muted-foreground font-light leading-relaxed" style={{ fontSize: 'var(--text-lg)' }}>
                Crafting spaces that inspire, comfort, and transform your world
              </p>
            </div>

            <div className="pt-4 space-y-4">
              <p className="text-muted-foreground font-light" style={{ fontSize: 'var(--text-sm)' }}>
                We&apos;re creating something extraordinary. Join our community of design enthusiasts.
              </p>
              <div className="flex gap-3">
                <Button
                  size="sm"
                  className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-2 rounded-md transition-all hover:shadow-lg"
                  style={{ fontSize: 'var(--text-sm)' }}
                >
                  <a href="https://www.instagram.com/aspirainteriors/">Visit Instagram</a>
                </Button>
              </div>
            </div>

            {/* Features */}
            <div className="pt-4 space-y-3">
              <div className="space-y-1">
                <div className="h-px w-8 bg-accent"></div>
                <h3 className="font-medium" style={{ fontSize: 'var(--text-sm)' }}>Bespoke Design</h3>
                <p className="text-muted-foreground" style={{ fontSize: 'var(--text-xs)' }}>Tailored solutions that reflect your unique aesthetic</p>
              </div>
              <div className="space-y-1">
                <div className="h-px w-8 bg-accent"></div>
                <h3 className="font-medium" style={{ fontSize: 'var(--text-sm)' }}>Expert Craftsmanship</h3>
                <p className="text-muted-foreground" style={{ fontSize: 'var(--text-xs)' }}>Collaboration with premium brands and master artisans</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Visual with Background */}
        <div
          className="w-2/3 flex flex-col items-center justify-center px-12 py-8 relative overflow-hidden"
          style={{
            backgroundImage: 'url(/interior-bg.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/40"></div>

          <div className="relative z-10 space-y-6 text-center">
            <div className="space-y-2">
              <p className="text-accent font-medium" style={{ fontSize: 'var(--text-2xl)' }}>Online Ecommerce Coming Soon</p>
              <h2 className="font-light text-white" style={{ fontSize: 'var(--text-3xl)' }}>Spaces of Distinction</h2>
            </div>

            <p className="text-white/70 max-w-xs" style={{ fontSize: 'var(--text-xs)' }}>
              Experience the seamless blend of modern aesthetics and timeless elegance
            </p>
          </div>
        </div>
      </div>

      {/* Footer Bar */}
      <div className="flex items-center justify-between px-12 py-4 border-t border-border bg-secondary/10 flex-shrink-0 text-muted-foreground" style={{ fontSize: 'var(--text-xs)' }}>
        <p>&copy; 2024 Aspira Interiors. All rights reserved.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
          <a href="#" className="hover:text-foreground transition-colors">Terms</a>
          <a href="#" className="hover:text-foreground transition-colors">Contact</a>
        </div>
      </div>
    </main>
  )
}
