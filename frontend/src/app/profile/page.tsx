import { ProfileForm } from '@/components/profile-form';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

export default function ProfilePage() {
  const user = {
    name: 'Aakanksha Sharma',
    email: 'aakanksha@example.com',
    role: 'Lead PM Mentor & CEO',
    avatar: 'https://images.unsplash.com/photo-1715541448063-c103bd012b8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3NDE5ODJ8MHwxfHNlYXJjaHw3fHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdCUyMHdvbWFufGVufDB8fHx8MTc1OTAzNjkyN3ww&ixlib=rb-4.1.0&q=80&w=1080',
  };

  return (
    <main className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto max-w-4xl px-4">
        <Card>
            <CardHeader>
                <CardTitle>User Profile</CardTitle>
                <CardDescription>Manage your account settings and preferences.</CardDescription>
            </CardHeader>
            <CardContent>
                <Tabs defaultValue="profile">
                    <TabsList className="grid w-full grid-cols-2">
                        <TabsTrigger value="profile">Profile</TabsTrigger>
                        <TabsTrigger value="settings">Settings</TabsTrigger>
                    </TabsList>
                    <TabsContent value="profile">
                       <ProfileForm user={user} />
                    </TabsContent>
                    <TabsContent value="settings">
                        <div className="p-6 text-center text-muted-foreground">
                            <p>Notification and theme settings will be available here.</p>
                        </div>
                    </TabsContent>
                </Tabs>
            </CardContent>
        </Card>
      </div>
    </main>
  );
}
