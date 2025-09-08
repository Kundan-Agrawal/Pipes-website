import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Truck, Users, Wrench, Shield, Phone, Calculator } from "lucide-react";

const Services = () => {
    const services = [
        {
            icon: Truck,
            title: "Fast Delivery",
            description: "Same-day shipping available for stock items. Emergency delivery services for urgent projects.",
            features: ["Same-day shipping", "Emergency delivery", "Nationwide coverage", "Real-time tracking"]
        },
        {
            icon: Users,
            title: "Expert Consultation",
            description: "Technical support from experienced engineers to help you choose the right materials.",
            features: ["Material selection", "Specification review", "Cost optimization", "Quality assurance"]
        },
        {
            icon: Wrench,
            title: "Custom Solutions",
            description: "Fabrication services for specialized fittings and assemblies to meet unique requirements.",
            features: ["Custom fabrication", "Special alloys", "Pressure testing", "Certification support"]
        },
        {
            icon: Shield,
            title: "Quality Guarantee",
            description: "All products come with manufacturer warranties and our quality guarantee.",
            features: ["Material certificates", "Pressure testing", "ISO compliance", "Return guarantee"]
        },
        {
            icon: Phone,
            title: "24/7 Support",
            description: "Round-the-clock customer service for emergency orders and technical assistance.",
            features: ["Emergency hotline", "Technical support", "Order tracking", "After-sales service"]
        },
        {
            icon: Calculator,
            title: "Project Estimation",
            description: "Comprehensive project estimation services including material take-offs and cost analysis.",
            features: ["Material take-offs", "Cost estimation", "Project planning", "Budget optimization"]
        }
    ];

    return (
        <section id="services" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Our Services</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Comprehensive support from specification to delivery, ensuring your project success
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Card key={index} className="p-6 hover:shadow-card transition-shadow group">
                            <div className="mb-6">
                                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                                    <service.icon className="h-8 w-8 text-accent" />
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                                <p className="text-muted-foreground">{service.description}</p>
                            </div>

                            <div className="space-y-2 mb-6">
                                {service.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center text-sm">
                                        <div className="w-2 h-2 bg-accent rounded-full mr-3" />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <Button variant="outline" className="w-full">
                                Learn More
                            </Button>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;