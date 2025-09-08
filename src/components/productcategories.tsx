import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import fittingsImage from "@/assets/fittings-collection.jpg";

const ProductCategories = () => {
    const categories = [
        {
            title: "Pipes",
            description: "Complete range of pipes for water distribution projects",
            image: fittingsImage,
            products: ["HDPE", "MDPE", "PVC", "UPVC", "CPVC", "SWR", "GI", "DI", "MS", "DWC"]
        },
        {
            title: "Fittings",
            description: "Comprehensive fittings for all pipe connection needs",
            image: fittingsImage,
            products: ["EF Fittings", "Butt Fusion", "Fabricated", "Compression", "CI", "DI", "GI", "UPVC"]
        },
        {
            title: "Valves & Accessories",
            description: "Water meters, valves, and accessories for flow control",
            image: fittingsImage,
            products: ["Water Meters", "CI/DI Valves", "Butterfly Valves", "Flanges", "Washers"]
        },
        {
            title: "Machines & Tools",
            description: "Professional equipment for pipe installation and joining",
            image: fittingsImage,
            products: ["Electrofusion Machine", "Pipe Jointing Tools", "Cutting Machines", "Power Tools"]
        },
        {
            title: "Additional Products",
            description: "Safety materials, lab equipment, and project essentials",
            image: fittingsImage,
            products: ["Safety Materials", "Lab Equipment", "Chemicals", "Cables", "Pumps", "Ropes"]
        },
        {
            title: "Custom Solutions",
            description: "Tailored solutions for colony projects and large installations",
            image: fittingsImage,
            products: ["Project Planning", "Bulk Supply", "Site Support", "Quality Testing"]
        }
    ];

    return (
        <section id="products" className="py-20 bg-gradient-subtle">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Our Product Range</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Complete water distribution solutions from pipes to machines - everything you need for your water projects
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {categories.map((category, index) => (
                        <Card key={index} className="group hover:shadow-accent transition-all duration-300 overflow-hidden">
                            <div
                                className="h-48 bg-cover bg-center relative"
                                style={{ backgroundImage: `url(${category.image})` }}
                            >
                                <div className="absolute inset-0 bg-primary/60 group-hover:bg-primary/40 transition-colors" />
                                <div className="absolute inset-0 p-6 flex items-end">
                                    <h3 className="text-2xl font-bold text-white">{category.title}</h3>
                                </div>
                            </div>

                            <div className="p-6">
                                <p className="text-muted-foreground mb-4">{category.description}</p>

                                <div className="mb-6">
                                    <h4 className="font-semibold mb-2 text-sm text-accent">AVAILABLE TYPES</h4>
                                    <div className="grid grid-cols-2 gap-2">
                                        {category.products.map((product, idx) => (
                                            <div key={idx} className="text-sm text-muted-foreground">
                                                • {product}
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <Button variant="ghost" className="w-full group/btn">
                                    View Products
                                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>

                <div className="text-center mt-12">
                    <Button variant="industrial" size="lg">
                        View Complete Catalog
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default ProductCategories;