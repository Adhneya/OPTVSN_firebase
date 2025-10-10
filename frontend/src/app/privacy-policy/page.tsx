
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-secondary">
      <div className="container mx-auto max-w-4xl py-16 px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-12">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Privacy Policy & Terms</h1>
            <p className="mt-4 text-muted-foreground">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
        </header>

        <div className="space-y-8">
            <Card>
                <CardHeader>
                    <CardTitle>Privacy Policy</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg dark:prose-invert max-w-none 
                                    prose-headings:text-foreground prose-h3:text-primary
                                    prose-p:text-muted-foreground
                                    prose-ul:list-disc prose-ul:pl-6 prose-li:text-muted-foreground
                                    prose-a:text-primary hover:prose-a:text-primary/80
                                    prose-strong:text-foreground">
                    <h3>Protecting your information is our priority</h3>
                    <p>
                        At OPTVSN Journey PVT LTD., we respect your privacy and are committed to protecting your personal information.
                    </p>
                    
                    <h4>Information We Collect:</h4>
                    <ul>
                        <li>Name, email, phone number, and payment details when you register.</li>
                        <li>Course usage data for improving our services.</li>
                    </ul>

                    <h4>How We Use Your Data:</h4>
                    <ul>
                        <li>To provide access to training programs.</li>
                        <li>To process payments securely via Razorpay.</li>
                        <li>To send updates and support communications.</li>
                    </ul>

                    <h4>Data Sharing & Security:</h4>
                    <ul>
                        <li>We do not sell or share your data with third parties for marketing purposes.</li>
                        <li>Data may be shared with payment processors (like Razorpay) and when legally required.</li>
                        <li>We use industry-standard security measures to keep your data safe.</li>
                    </ul>

                    <h4>Your Rights:</h4>
                    <p>You may request correction or deletion of your data by contacting us at <a href="mailto:admin@optvsnjourney.com">admin@optvsnjourney.com</a>.</p>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Terms & Conditions</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg dark:prose-invert max-w-none
                                    prose-headings:text-foreground prose-h3:text-primary
                                    prose-p:text-muted-foreground
                                    prose-ul:list-disc prose-ul:pl-6 prose-li:text-muted-foreground
                                    prose-a:text-primary hover:prose-a:text-primary/80
                                    prose-strong:text-foreground">
                    <h3>We protect your information</h3>
                    <p>
                        By enrolling in our training programs, you agree to the following terms and conditions.
                    </p>

                    <h4>Course Access</h4>
                    <ul>
                        <li>Access is provided upon successful registration and payment.</li>
                        <li>Sharing your login credentials or course content with others is strictly prohibited.</li>
                    </ul>

                    <h4>Intellectual Property</h4>
                    <ul>
                        <li>All videos, documents, and training material are the intellectual property of OPTVSN Journey PVT LTD.</li>
                        <li>You may not copy, resell, or distribute our content without prior written consent.</li>
                    </ul>

                    <h4>Disclaimer</h4>
                    <ul>
                        <li>Our programs are for educational and informational purposes only.</li>
                        <li>We do not guarantee specific career outcomes, job placements, or promotions.</li>
                    </ul>

                    <h4>Governing Law</h4>
                    <ul>
                        <li>These terms are governed by the laws of India.</li>
                        <li>Any disputes will be subject to the exclusive jurisdiction of the courts in New Delhi, India.</li>
                    </ul>
                </CardContent>
            </Card>

            <Card>
                <CardHeader>
                    <CardTitle>Refund & Cancellation Policy</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg dark:prose-invert max-w-none
                                    prose-headings:text-foreground
                                    prose-p:text-muted-foreground
                                    prose-strong:text-foreground">
                    <p>At OPTVSN Journey PVT LTD., we strive to deliver the best learning experience.</p>

                    <h4>Cancellations</h4>
                    <p>You are eligible for a full refund if you request a cancellation at least 7 days before course access is provided or the first session begins.</p>
                    
                    <h4>Refunds After Access</h4>
                    <p>No refund will be issued once course access is granted. Refunds are only permissible in cases of a duplicate payment for the same course or documented technical failure from our end that prevents access.</p>

                    <h4>Processing Time</h4>
                    <p>Approved refunds will be processed within 7–10 working days to the original method of payment.</p>
                </CardContent>
            </Card>
            
            <Card>
                <CardHeader>
                    <CardTitle>Contact Us</CardTitle>
                </CardHeader>
                <CardContent className="prose prose-lg dark:prose-invert max-w-none
                                    prose-p:text-muted-foreground
                                    prose-a:text-primary hover:prose-a:text-primary/80
                                    prose-strong:text-foreground">
                    <address className="not-italic">
                        <strong>OPTVSN Journey PVT LTD.</strong><br/>
                        FIRST FLOOR A-74, GALI NO-4C GOYLA VIHAR<br/>
                        NEW DELHI, CHHAWLA<br/>
                        SOUTH WEST DELHI-110071<br/>
                        INDIA
                    </address>
                    <p>
                        <strong>Phone:</strong> <a href="tel:+917330674746">+91 7330674746</a><br/>
                        <strong>Email:</strong> <a href="mailto:admin@optvsnjourney.com">admin@optvsnjourney.com</a>
                    </p>
                </CardContent>
            </Card>
        </div>
      </div>
    </div>
  );
}
