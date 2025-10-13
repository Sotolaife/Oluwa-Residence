import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { MoreHorizontal } from "lucide-react";
import { properties } from "@/lib/data";

export default function AdminDashboardPage() {
    return (
        <div>
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold font-headline">Manage Properties</h1>
                    <p className="text-muted-foreground">Here you can add, edit, or remove property listings.</p>
                </div>
                <Button className="bg-primary hover:bg-primary/90">Add New Property</Button>
            </div>
            
            <Card className="mt-8">
                <CardHeader>
                    <CardTitle>Existing Properties</CardTitle>
                    <CardDescription>A list of all properties currently in the system.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Title</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Price</TableHead>
                                <TableHead>Location</TableHead>
                                <TableHead><span className="sr-only">Actions</span></TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {properties.map(prop => (
                                <TableRow key={prop.id}>
                                    <TableCell className="font-medium">{prop.title}</TableCell>
                                    <TableCell><Badge variant={prop.status === 'Sold' ? 'destructive' : 'secondary'}>{prop.status}</Badge></TableCell>
                                    <TableCell>${prop.price.toLocaleString()}</TableCell>
                                    <TableCell>{prop.location}</TableCell>
                                    <TableCell>
                                        <Button variant="ghost" size="icon">
                                            <MoreHorizontal className="h-4 w-4" />
                                        </Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    )
}
