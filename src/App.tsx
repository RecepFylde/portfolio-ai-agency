import { MoveDownRight, MailIcon, MapPinIcon } from "lucide-react";
import { StaggerTestimonials } from "@/components/ui/stagger-testimonials";
import { ContactCard } from "@/components/ui/contact-card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const brands = ["OPENAI", "TENSORFLOW", "PYTORCH", "FLUTTER", "REACT"];

function App() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mbdzkkgw", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
        alert("Message sent successfully! Thank you for reaching out.");
      } else {
        alert("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="header">
        <a href="#home" className="logo">
          * recep haylu
        </a>

        <nav className="nav">
          <a href="#home">HOME</a>
          <a href="#references">REFERENCES</a>
          <a href="#contact">CONTACT</a>
        </nav>

        <a href="#contact" className="hire-me">
          <span>// HIRE ME</span>
          <span className="icon-arrow" aria-hidden="true">
            <MoveDownRight />
          </span>
        </a>
      </header>

      <main>
        <section
          id="home"
          className="site-wrapper hero-panel scroll-mt-24"
          aria-label="Hero section"
        >
          <div className="bg-text">
            <span className="text-orange">AI</span> &amp; APP
            <br />
            DESIGN
          </div>

          <div className="model-container" aria-hidden="true">
            <spline-viewer url="https://prod.spline.design/ElxJddWz4JGRR5jD/scene.splinecode" loading-anim="false"></spline-viewer>
          </div>

          <div className="main-content">
            <div className="side-text left-text">
              <p>// I&apos;M RECEP AI SOLUTIONS ENGINEER &amp; APP DESIGNER</p>
              <p className="sub">
                HELPING STARTUPS AND BUSINESSES BUILD
                <br />
                CLEAN, INTUITIVE DIGITAL PRODUCTS
                <br />
                ACCELERATED BY AI.
              </p>
            </div>

            <div className="side-text right-text">
              <p>
                // DESIGN THAT
                <br />
                SPEEDS UP YOUR BRAND
              </p>
            </div>
          </div>

          <footer className="footer">
            <div className="brands">
              {brands.map((brand) => (
                <span key={brand}>{brand}</span>
              ))}
            </div>
          </footer>
        </section>

        <section
          id="references"
          className="scroll-mt-24 border-t border-border bg-[radial-gradient(circle_at_top,#1c1c1c_0%,#0a0a0a_55%,#050505_100%)] px-4 py-20 sm:px-8 lg:px-12"
        >
          <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
            <div className="max-w-3xl">
              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                References
              </p>
              <h2 className="font-display text-4xl uppercase leading-none text-foreground sm:text-6xl">
                Social proof as the next section
              </h2>
              <p className="mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
                The top navigation now points directly to this section, and the
                testimonial carousel is integrated as the portfolio&apos;s
                references area.
              </p>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-border/70 bg-card/60 p-4 shadow-[0_30px_80px_rgba(0,0,0,0.35)] backdrop-blur sm:p-8">
              <StaggerTestimonials />
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="scroll-mt-24 border-t border-border px-4 py-20 sm:px-8 lg:px-12"
        >
          <div className="mx-auto w-full max-w-5xl">
            <ContactCard
              title="Let's talk"
              description="Have a project in mind? Let's discuss how I can help you build something amazing. Fill out the form and I'll get back to you within 1 business day."
              contactInfo={[
                {
                  icon: MailIcon,
                  label: "Email",
                  value: "recephaylu@gmail.com",
                },
                {
                  icon: MapPinIcon,
                  label: "Location",
                  value: "Blackpool/UK",
                  className: "col-span-2 md:col-span-1",
                },
              ]}
              className="overflow-hidden"
              formSectionClassName="p-6 md:p-8 w-full md:col-span-1 lg:col-span-1"
            >
              <form onSubmit={handleSubmit} className="w-full space-y-4">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="Your phone number"
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell me about your project..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    className="min-h-[100px]"
                  />
                </div>
                <Button
                  className="w-full"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </ContactCard>
          </div>
        </section>
      </main>
    </div>
  );
}

export default App;
