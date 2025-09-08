import { Button } from "@/components/ui/button";
import { Phone, Mail, Menu } from "lucide-react";

const Header = () => {
    return (
        <header className="bg-background border-b border-border shadow-sm">
            <div className="container mx-auto px-4">
                {/* Top bar */}
                <div className="flex justify-between items-center py-2 text-sm border-b border-border">
                    <div className="flex items-center space-x-4 text-muted-foreground">
                        <div className="flex items-center space-x-2">
                            <Phone size={16} />
                            <span>+91 98765 43210</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <Mail size={16} />
                            <span>info@jeeneshwaritrading.com</span>
                        </div>
                    </div>
                    <div className="hidden md:block text-muted-foreground">
                        One-Stop Water Project Solution Since 1995
                    </div>
                </div>

                {/* Main navigation */}
                <nav className="flex justify-between items-center py-4">
                    <div className="flex items-center">
                        <h1 className="text-2xl font-bold text-primary">
                            Jeeneshwari <span className="text-accent">Trading</span>
                        </h1>
                    </div>

                    <div className="hidden lg:flex items-center space-x-8">
                        <a href="#home" className="text-foreground hover:text-accent transition-colors">Home</a>
                        <a href="#products" className="text-foreground hover:text-accent transition-colors">Products</a>
                        <a href="#services" className="text-foreground hover:text-accent transition-colors">Services</a>
                        <a href="#about" className="text-foreground hover:text-accent transition-colors">About</a>
                        <a href="#contact" className="text-foreground hover:text-accent transition-colors">Contact</a>
                    </div>

                    <div className="flex items-center space-x-4">
                        <Button variant="industrial">Get Quote</Button>
                        <Button variant="ghost" size="icon" className="lg:hidden">
                            <Menu />
                        </Button>
                    </div>
                </nav>
            </div>
        </header>
    );
};

export default Header;