import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Clock, Award } from "lucide-react";
import heroImage from "@/assets/hero-pipes.jpg";

const Hero = () => {
    return (
        <section className="relative min-h-[80vh] flex items-center bg-gradient-hero">
            <div className="absolute inset-0 bg-black/40" />
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${heroImage})` }}
            />

            <div className="relative z-10 container mx-auto px-4">
                <div className="max-w-3xl">
                    <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        One-Stop Water
                        <span className="text-accent"> Project Solution</span>
                    </h1>
                    <p className="text-xl text-white/90 mb-8 leading-relaxed">
                        Comprehensive supplier of pipes, fittings, valves, machines & tools for water distribution projects.
                        Serving contractors, farmers & retailers across Madhya Pradesh since 1995.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mb-12">
                        <Button variant="accent" size="lg" className="group">
                            View Products
                            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button
                            variant="outline-white"
                            size="lg"
                            onClick={() => window.open('https://wa.me/919876543210?text=Hello! I need information about water distribution products.', '_blank')}
                        >
                            Contact Us on WhatsApp
                        </Button>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="flex items-center text-white">
                            <div className="bg-accent/20 p-3 rounded-lg mr-4">
                                <Shield className="h-6 w-6 text-accent" />
                            </div>
                            <div>
                                <h3 className="font-semibold">Quality Assured</h3>
                                <p className="text-white/80 text-sm">ISO certified materials</p>
                            </div>
                        </div>

                        <div className="flex items-center text-white">
                            <div className="bg-accent/20 p-3 rounded-lg mr-4">
                                <Clock className="h-6 w-6 text-accent" />
                            </div>
                            <div>
                                <h3 className="font-semibold">Fast Delivery</h3>
                                <p className="text-white/80 text-sm">Same-day shipping available</p>
                            </div>
                        </div>

                        <div className="flex items-center text-white">
                            <div className="bg-accent/20 p-3 rounded-lg mr-4">
                                <Award className="h-6 w-6 text-accent" />
                            </div>
                            <div>
                                <h3 className="font-semibold">Expert Support</h3>
                                <p className="text-white/80 text-sm">Technical consultation included</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;