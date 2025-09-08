import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        Ready to start your project? Contact our experts for personalized assistance and quotes
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <Card className="p-8">
                        <h3 className="text-2xl font-semibold mb-6">Request a Quote</h3>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <label className="text-sm font-medium mb-2 block">First Name</label>
                                    <Input placeholder="John" />
                                </div>
                                <div>
                                    <label className="text-sm font-medium mb-2 block">Last Name</label>
                                    <Input placeholder="Doe" />
                                </div>
                            </div>

                            <div>
                                <label className="text-sm font-medium mb-2 block">Email</label>
                                <Input type="email" placeholder="john@company.com" />
                            </div>

                            <div>
                                <label className="text-sm font-medium mb-2 block">Phone</label>
                                <Input type="tel" placeholder="(555) 123-4567" />
                            </div>

                            <div>
                                <label className="text-sm font-medium mb-2 block">Company</label>
                                <Input placeholder="Company Name" />
                            </div>

                            <div>
                                <label className="text-sm font-medium mb-2 block">Project Details</label>
                                <Textarea
                                    placeholder="Please describe your project requirements, including pipe sizes, materials, quantities, and timeline..."
                                    className="min-h-[120px]"
                                />
                            </div>

                            <Button variant="industrial" size="lg" className="w-full">
                                Submit Quote Request
                            </Button>
                        </form>
                    </Card>

                    {/* Contact Information */}
                    <div className="space-y-8">
                        <Card className="p-6">
                            <div className="flex items-start space-x-4">
                                <div className="bg-accent/10 p-3 rounded-lg">
                                    <MapPin className="h-6 w-6 text-accent" />
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">Visit Our Office</h4>
                                    <p className="text-muted-foreground">
                                        Jeeneshwari Trading Company<br />
                                        Indore, Madhya Pradesh<br />
                                        India - 452001
                                    </p>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-6">
                            <div className="flex items-start space-x-4">
                                <div className="bg-accent/10 p-3 rounded-lg">
                                    <Phone className="h-6 w-6 text-accent" />
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">Call Us</h4>
                                    <p className="text-muted-foreground">
                                        Mobile: +91 98765 43210<br />
                                        Office: +91 731 234 5678<br />
                                        WhatsApp: +91 98765 43210
                                    </p>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-6">
                            <div className="flex items-start space-x-4">
                                <div className="bg-accent/10 p-3 rounded-lg">
                                    <Mail className="h-6 w-6 text-accent" />
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">Email Us</h4>
                                    <p className="text-muted-foreground">
                                        info@jeeneshwaritrading.com<br />
                                        sales@jeeneshwaritrading.com<br />
                                        quotes@jeeneshwaritrading.com
                                    </p>
                                </div>
                            </div>
                        </Card>

                        <Card className="p-6">
                            <div className="flex items-start space-x-4">
                                <div className="bg-accent/10 p-3 rounded-lg">
                                    <Clock className="h-6 w-6 text-accent" />
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2">Business Hours</h4>
                                    <p className="text-muted-foreground">
                                        Monday - Saturday: 9:00 AM - 7:00 PM<br />
                                        Sunday: 10:00 AM - 5:00 PM<br />
                                        Emergency Support: 24/7
                                    </p>
                                </div>
                            </div>
                        </Card>

                        {/* WhatsApp */}
                        <Card className="p-6 bg-green-50 border-green-200 dark:bg-green-950 dark:border-green-800">
                            <div className="flex items-start space-x-4">
                                <div className="bg-green-500 text-white rounded-full p-2">
                                    <Phone size={16} />
                                </div>
                                <div>
                                    <h4 className="font-semibold mb-2 text-green-800 dark:text-green-200">WhatsApp Support</h4>
                                    <p className="text-green-700 dark:text-green-300 mb-3">
                                        Quick quotes and instant support
                                    </p>
                                    <Button
                                        className="bg-green-500 hover:bg-green-600 text-white"
                                        onClick={() => window.open('https://wa.me/919876543210?text=Hello! I need information about water distribution products.', '_blank')}
                                    >
                                        Chat on WhatsApp
                                    </Button>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;