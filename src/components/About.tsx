import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Building, Award, TrendingUp } from "lucide-react";

const About = () => {
    const stats = [
        { icon: Users, value: "1000+", label: "Water Projects" },
        { icon: Building, value: "25+", label: "Years Experience" },
        { icon: Award, value: "500+", label: "Happy Clients" },
        { icon: TrendingUp, value: "24/7", label: "Customer Support" }
    ];

    return (
        <section id="about" className="py-20 bg-gradient-subtle">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-6">
                            Leading Water Project
                            <span className="text-accent block">Solution Provider</span>
                        </h2>
                        <p className="text-lg text-muted-foreground mb-6">
                            Based in Indore, Madhya Pradesh, Jeeneshwari Trading Company is your trusted partner
                            for comprehensive water distribution solutions. With over 25 years of expertise,
                            we serve colony project contractors, farmers, and retailers across the region.
                        </p>
                        <p className="text-muted-foreground mb-8">
                            <strong>Our Mission:</strong> Supplying high-quality water distribution products with
                            trust & reliability. We are known for competitive pricing, excellent service, and
                            customized solutions that meet the unique needs of every water project.
                        </p>
                        <div className="space-y-4 mb-8">
                            <div className="flex items-center">
                                <div className="w-2 h-2 bg-accent rounded-full mr-4" />
                                <span>Complete range of water distribution products</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-2 h-2 bg-accent rounded-full mr-4" />
                                <span>Expert consultation for colony projects</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-2 h-2 bg-accent rounded-full mr-4" />
                                <span>Competitive pricing and bulk supply options</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-2 h-2 bg-accent rounded-full mr-4" />
                                <span>Quality assurance and material certifications</span>
                            </div>
                        </div>

                        <Button variant="industrial" size="lg">
                            Learn More About Us
                        </Button>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                        {stats.map((stat, index) => (
                            <Card key={index} className="p-6 text-center hover:shadow-card transition-shadow">
                                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                                    <stat.icon className="h-8 w-8 text-accent" />
                                </div>
                                <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                                <div className="text-muted-foreground text-sm">{stat.label}</div>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;