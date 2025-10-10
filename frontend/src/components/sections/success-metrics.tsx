import { Users, CheckCircle, Briefcase } from 'lucide-react';
import { Card, CardContent } from "@/components/ui/card";

const metrics = [
  {
    icon: Users,
    value: '500+',
    label: 'Professionals Trained',
  },
  {
    icon: CheckCircle,
    value: '90%',
    label: 'Success Rate in Career Transitions',
  },
  {
    icon: Briefcase,
    value: '30+',
    label: 'Corporate Partnerships',
  },
];

export default function SuccessMetrics() {
  return (
    <section className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {metrics.map((metric, index) => (
            <Card key={index} className="bg-secondary/50 border-none shadow-none">
              <CardContent className="p-6">
                <metric.icon className="h-12 w-12 text-primary mx-auto mb-4" />
                <p className="text-5xl font-extrabold text-foreground">
                  {metric.value}
                </p>
                <p className="text-muted-foreground mt-2 text-lg">{metric.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
