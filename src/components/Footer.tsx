import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-primary text-primary-foreground">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4">
                            Jeeneshwari <span className="text-accent">Trading</span>
                        </h3>
                        <p className="text-primary-foreground/80 mb-6">
                            Your trusted partner for comprehensive water distribution solutions since 1995.
                            Serving colony project contractors, farmers, and retailers across Madhya Pradesh
                            with quality products and competitive pricing.
                        </p>
                        <div className="space-y-2 text-sm">
                            <div className="flex items-center">
                                <Phone size={16} className="mr-2" />
                                <span>+91 98765 43210</span>
                            </div>
                            <div className="flex items-center">
                                <Mail size={16} className="mr-2" />
                                <span>info@jeeneshwaritrading.com</span>
                            </div>
                            <div className="flex items-center">
                                <MapPin size={16} className="mr-2" />
                                <span>Indore, Madhya Pradesh</span>
                            </div>
                        </div>
                    </div>

                    {/* Products */}
                    <div>
                        <h4 className="font-semibold mb-4">Products</h4>
                        <ul className="space-y-2 text-sm text-primary-foreground/80">
                            <li><a href="#" className="hover:text-accent transition-colors">HDPE Pipes</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">UPVC Fittings</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Valves & Accessories</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Machines & Tools</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Water Meters</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Safety Equipment</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="font-semibold mb-4">Services</h4>
                        <ul className="space-y-2 text-sm text-primary-foreground/80">
                            <li><a href="#" className="hover:text-accent transition-colors">Colony Project Solutions</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Water Distribution Design</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Bulk Supply & Delivery</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Technical Consultation</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">24/7 Support</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Custom Solutions</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 className="font-semibold mb-4">Company</h4>
                        <ul className="space-y-2 text-sm text-primary-foreground/80">
                            <li><a href="#about" className="hover:text-accent transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Certifications</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Quality Policy</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Careers</a></li>
                            <li><a href="#contact" className="hover:text-accent transition-colors">Contact</a></li>
                            <li><a href="#" className="hover:text-accent transition-colors">Request Quote</a></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-primary-foreground/20 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center text-sm text-primary-foreground/60">
                        <p>&copy; 2024 Jeeneshwari Trading Company. All rights reserved.</p>
                        <div className="flex space-x-6 mt-4 md:mt-0">
                            <a href="#" className="hover:text-accent transition-colors">Privacy Policy</a>
                            <a href="#" className="hover:text-accent transition-colors">Terms of Service</a>
                            <a href="#" className="hover:text-accent transition-colors">Sitemap</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;