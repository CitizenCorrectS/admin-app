"use client";
import { useState } from "react"
import { SidebarInset } from "@/components/ui/sidebar";
import AppHeader from "../../_components/app-header";
import { useCurrentUser } from "@/hooks/use-current-user";
import { useRouter } from "next/navigation"
// import { useSearchParams } from 'next/navigation'
import Link from "next/link";
import { CircleUser, Menu, Package2, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const invoices = [
  {
    invoice: "Chandigarh",
    paymentStatus: "80%",
    totalAmount: "₹2,50,000.00",
    paymentMethod: "2,000",
  },
  {
    invoice: "Delhi",
    paymentStatus: "60%",
    totalAmount: "₹5,50,000.00",
    paymentMethod: "4,500",
  },
  {
    invoice: "Jammu",
    paymentStatus: "70%",
    totalAmount: "₹15,50,000.00",
    paymentMethod: "14,500",
  },
  {
    invoice: "Jalandhar",
    paymentStatus: "75%",
    totalAmount: "₹3,50,000.00",
    paymentMethod: "1,500",
  },
  {
    invoice: "Haryana",
    paymentStatus: "90%",
    totalAmount: "₹8,50,000.00",
    paymentMethod: "7,000",
  },
]




  const SolarResidentialPage = () => {
    const user = useCurrentUser();
    const [formData, setFormData] = useState({
      latitude: "",
      longitude: "",
      propertyName: "",
      capacity: ""
    })
    const router = useRouter()
  
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { id, value } = e.target
      setFormData(prev => ({
        ...prev,
        [id]: value
      }))
    }
  
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      const queryParams = new URLSearchParams(formData).toString()
      router.push(`/dashboard/solar-residential/analysis?${queryParams}`)
    }

    return (
        <>
        <SidebarInset>
          <AppHeader />
          <div className="flex flex-1 flex-col gap-4 p-4 pt-0 rounded-xl">
            {/* <div className="grid auto-rows-min gap-4 md:grid-cols-3"> */}
            <div className="flex min-h-screen w-full flex-col">
              <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10 rounded-xl">
                <div className="mx-auto grid w-full max-w-6xl items-start gap-6">
                  {/* <nav
                    className="grid gap-4 text-sm text-muted-foreground" x-chunk="dashboard-04-chunk-0"
                  >
                    <Link href="#" className="font-semibold text-primary">
                      General
                    </Link>
                    <Link href="#">Security</Link>
                    <Link href="#">Integrations</Link>
                    <Link href="#">Support</Link>
                    <Link href="#">Organizations</Link>
                    <Link href="#">Advanced</Link>
                  </nav> */}
                  <div className="grid gap-6">
                    <div className="grid grid-cols-2 gap-4">                  
                    {/* Open Projects */}
                    <Card x-chunk="dashboard-04-chunk-1">
                      <CardHeader>
                        <CardTitle>Open Projects</CardTitle>
                        <CardDescription>
                          Used to identify your property to locate latitude and longitude.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <form onSubmit={(e) => e.preventDefault()}>
                          <Input 
                            placeholder="Property Name" 
                            id="propertyName"
                          />
                        </form>
                      </CardContent>
                      <CardFooter className="border-t px-6 py-4">
                        <Button onClick={() => {
                          const input = document.getElementById('propertyName') as HTMLInputElement;
                          if (input) {
                            const newPropertyName = input.value;
                            const currentUrl = new URL(window.location.href);
                            currentUrl.searchParams.set('propertyName', newPropertyName);
                            window.history.pushState({}, '', currentUrl.toString());
                            console.log('Property Name updated:', newPropertyName);
                          }
                        }}>
                          Save
                        </Button>
                      </CardFooter>
                    </Card>

                    {/* Create New Projects */}
                    <Card x-chunk="dashboard-04-chunk-1">
                      <CardHeader>
                        <CardTitle>Create New Projects</CardTitle>
                        <CardDescription>
                          Enter property details.
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <form onSubmit={handleSubmit} className="grid gap-4">
                          <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-2">
                              <Label htmlFor="latitude">Latitude</Label>
                              <Input id="latitude" placeholder="40.7128" required onChange={handleInputChange} />
                            </div>
                            <div className="grid gap-2">
                              <Label htmlFor="longitude">Longitude</Label>
                              <Input id="longitude" placeholder="-74.0060" required onChange={handleInputChange} />
                            </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                          <div className="grid gap-2">
                            <Label htmlFor="propertyName">Property Name</Label>
                            <Input
                              id="propertyName"
                              type="text"
                              placeholder="My House"
                              required
                              onChange={handleInputChange}
                            />
                          </div>
                          <div className="grid gap-2">
                            <Label htmlFor="propertyAddress">Address</Label>
                            <Input
                              id="propertyAddress"
                              type="text"
                              placeholder="House No. Street, City"
                              required
                              onChange={handleInputChange}
                            />
                          </div>
                          </div>
                          <div className="grid grid-cols-2 gap-4">
                            <div className="grid gap-2">
                              <Label htmlFor="capacity">Panel Capacity (kW)</Label>
                                <Input id="capacity" placeholder="10" required onChange={handleInputChange} />
                            </div>
                            <div className="grid gap-2">
                              <Label htmlFor="projectType">Project Type</Label>
                              <Select>
                                <SelectTrigger className="w-[180px]">
                                  <SelectValue placeholder="Choose type" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectGroup>
                                    <SelectItem value="residential">Residential</SelectItem>
                                    <SelectItem value="commercial">Commercial</SelectItem>
                                    <SelectItem value="public">Public</SelectItem>
                                  </SelectGroup>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                        </form>
                      </CardContent>
                      <CardFooter className="border-t px-6 py-4">
                            <Button type="submit" className="w-[100px]">
                              Create
                            </Button>
                      </CardFooter>
                    </Card>
                    </div>
                    {/* Table */}
                    <Table>
                    <TableCaption>List of properties for site validation.</TableCaption>
                    <TableHeader>
                      <TableRow>
                        <TableHead className="w-[100px]">Property</TableHead>
                        <TableHead>Shadow</TableHead>
                        <TableHead>Units</TableHead>
                        <TableHead className="text-right">Cost</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {invoices.map((invoice) => (
                        <TableRow key={invoice.invoice}>
                          <TableCell className="font-medium">{invoice.invoice}</TableCell>
                          <TableCell>{invoice.paymentStatus}</TableCell>
                          <TableCell>{invoice.paymentMethod}</TableCell>
                          <TableCell className="text-right">{invoice.totalAmount}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                    <TableFooter>
                      <TableRow>
                        <TableCell colSpan={3}>Total</TableCell>
                        <TableCell className="text-right">₹30,50,000.00</TableCell>
                      </TableRow>
                    </TableFooter>
                  </Table>
                  </div>
                </div>
              </main>
            </div>
            {/* </div> */}
            <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min" />
          </div>
        </SidebarInset>
        </>
    )
  }

  export default SolarResidentialPage;