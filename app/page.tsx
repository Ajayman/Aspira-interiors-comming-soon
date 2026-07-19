import { Mail, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Page() {
  return (
    <main
      className="w-full h-full md:h-screen bg-background text-foreground overflow-hidden flex flex-col"
      style={
        {
          "--vw-base": "calc(1vw + 1vh)",
          "--text-xs": "calc(0.6 * var(--vw-base))",
          "--text-sm": "calc(0.8 * var(--vw-base))",
          "--text-lg": "calc(1.2 * var(--vw-base))",
          "--text-2xl": "calc(1.8 * var(--vw-base))",
          "--text-3xl": "calc(2.2 * var(--vw-base))",
          "--text-5xl": "calc(3.5 * var(--vw-base))",
        } as React.CSSProperties
      }
    >
      {/* Navigation */}
      <nav className="flex items-center justify-between px-6 py-5 bg-background/95 backdrop-blur-sm border-b border-border flex-shrink-0">
        <div className="text-xl font-light tracking-wide">
          <span
            className="font-semibold"
            style={{ fontSize: "var(--text-2xl)" }}
          >
            Aspira
          </span>
          {"  "}
          <span
            className="font-semibold"
            style={{ fontSize: "var(--text-xl)" }}
          >
            Interiors
          </span>
        </div>
        <div className="flex items-center gap-8"></div>
      </nav>

      {/* Main Content - Fixed Layout */}
      <div className="overflow-hidden flex flex-wrap">
        {/* Left Side - Text Content */}
        <div className="w-full md:w-1/3 flex flex-col justify-center px-12 py-8">
          <div className="space-y-6">
            <div className="space-y-3">
              <p
                className="text-accent font-medium tracking-widest uppercase"
                style={{ fontSize: "var(--text-xs)" }}
              >
                Redefining Elegance
              </p>
              <h1
                className="font-light tracking-tight leading-tight"
                style={{ fontSize: "36px" }}
              >
                Premium Interior Design
              </h1>
              <p
                className="text-muted-foreground font-light leading-relaxed"
                style={{ fontSize: "var(--text-lg)" }}
              >
                Crafting spaces that inspire, comfort, and transform your world
              </p>
            </div>

            <div className="pt-4 space-y-4">
              <p
                className="text-muted-foreground font-light"
                style={{ fontSize: "var(--text-sm)" }}
              >
                We&apos;re creating something extraordinary. Join our community
                of design enthusiasts.
              </p>
              <div className="flex gap-3">
                <Button
                  size="sm"
                  className="bg-primary hover:bg-primary/90 text-white font-medium px-6 py-2 rounded-md transition-all hover:shadow-lg"
                  style={{ fontSize: "var(--text-sm)" }}
                >
                  <a href="https://www.instagram.com/aspirainteriors/">
                    Visit Instagram
                  </a>
                </Button>
              </div>
            </div>

            {/* Features */}
            <div className="pt-4 space-y-3">
              <div className="space-y-1">
                <div className="h-px w-8 bg-accent"></div>
                <h3
                  className="font-medium"
                  style={{ fontSize: "var(--text-sm)" }}
                >
                  Bespoke Design
                </h3>
                <p
                  className="text-muted-foreground"
                  style={{ fontSize: "var(--text-xs)" }}
                >
                  Tailored solutions that reflect your unique aesthetic
                </p>
              </div>
              <div className="space-y-1">
                <div className="h-px w-8 bg-accent"></div>
                <h3
                  className="font-medium"
                  style={{ fontSize: "var(--text-sm)" }}
                >
                  Expert Craftsmanship
                </h3>
                <p
                  className="text-muted-foreground"
                  style={{ fontSize: "var(--text-xs)" }}
                >
                  Collaboration with premium brands and master artisans
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Visual with Background */}
        <div className="w-full md:w-2/3 flex flex-col items-center justify-center px-12 py-8 relative overflow-hidden min-h-[600px]">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-10"
          >
            <source src="aspira-site.mp4" type="video/mp4" />
          </video>
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-black/80 z-11" />
          <div className="relative z-10 space-y-6 text-center z-12">
            <div className="space-y-2">
              <p
                className="text-accent font-large"
                style={{ fontSize: "var(--text-2xl)" }}
              >
                Online Ecommerce Coming Soon
              </p>
              <h2
                className="font-light text-white"
                style={{ fontSize: "var(--text-3xl)" }}
              >
                Spaces of Distinction
              </h2>
              <div
                className="text-white/70"
                style={{ fontSize: "var(--text-xs)" }}
              >
                Experience the seamless blend of modern aesthetics and timeless
                elegance
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bar */}
    </main>
  );
}
