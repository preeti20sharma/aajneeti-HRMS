import { ChartColumn, Home, NotepadText, Package, PackagePlus, Settings, ShoppingBag, UserCheck, UserPlus, Users } from "lucide-react";

import ProfileImage from "@/assets/profile-image.jpg";
// import ProductImage from "@/assets/product-image.jpg";

export const navbarLinks = [
    {
        title: "Dashboard",
        links: [
            {
                label: "Dashboard",
                icon: Home,
                path: "/",
            },
            {
                label: "Employees",
                icon: ChartColumn,
                path: "/all-employees",
            },
            {
                label: "Companies",
                icon: NotepadText,
                path: "/reports",
            },
        ],
    },
    {
        title: "Updates",
        links: [
            {
                label: "Holiday",
                icon: Users,
                path: "/customers",
            },
            {
                label: "Leaves",
                icon: UserPlus,
                path: "/leaves",
            },
            {
                label: "Short Leaves",
                icon: UserCheck,
                path: "/verified-customers",
            },
        ],
    },
    {
        title: "Reports",
        links: [
            {
                label: "Working Hours",
                icon: Package,
                path: "/products",
            },
            {
                label: "Extra Working Hours",
                icon: PackagePlus,
                path: "/new-product",
            },
            {
                label: "Clients",
                icon: ShoppingBag,
                path: "/inventory",
            },
        ],
    },
    {
        title: "Settings",
        links: [
            {
                label: "Settings",
                icon: Settings,
                path: "/settings",
            },
        ],
    },
];

export const overviewData = [
    {
        name: "Jan",
        total: 1500,
    },
    {
        name: "Feb",
        total: 2000,
    },
    {
        name: "Mar",
        total: 1000,
    },
    {
        name: "Apr",
        total: 5000,
    },
    {
        name: "May",
        total: 2000,
    },
    {
        name: "Jun",
        total: 5900,
    },
    {
        name: "Jul",
        total: 2000,
    },
    {
        name: "Aug",
        total: 5500,
    },
    {
        name: "Sep",
        total: 2000,
    },
    {
        name: "Oct",
        total: 4000,
    },
    {
        name: "Nov",
        total: 1500,
    },
    {
        name: "Dec",
        total: 2500,
    },
];

export const recentSalesData = [
    {
        id: 1,
        name: "Olivia Martin",
        email: "olivia.martin@email.com",
        image: ProfileImage,
        today: "Daniel Martinz’s Birthday",
    },
    {
        id: 2,
        name: "James Smith",
        email: "james.smith@email.com",
        image: ProfileImage,
        today: "Amelia Curr’s Birthday",
    },
    {
        id: 3,
        name: "Sophia Brown",
        email: "sophia.brown@email.com",
        image: ProfileImage,
        today: "Madison Andrew is off sick today",
    },
    {
        id: 4,
        name: "Noah Wilson",
        email: "noah.wilson@email.com",
        image: ProfileImage,
        today: "Madison Andrew is off sick today",
    },
    {
        id: 5,
        name: "Emma Jones",
        email: "emma.jones@email.com",
        image: ProfileImage,
        today: "Amelia Curr’s Birthday",
    },
    {
        id: 6,
        name: "William Taylor",
        email: "william.taylor@email.com",
        image: ProfileImage,
        today: "Amelia Curr’s Birthday",
    },
    {
        id: 7,
        name: "Isabella Johnson",
        email: "isabella.johnson@email.com",
        image: ProfileImage,
        today: "Madison Andrew is off sick today",
    },
];

export const topProducts = [
    {
        number: 1,
        name: "Preeti Sharma",
        image: ProfileImage,
        description: "Frontend Developer ",
        leaveType: "sick leave",
        from: "12 sep 2025",
        to: "14 sep 2025",
        days: "02",
        remainingDays: "20",
        status: "approved",


    },
    {
        number: 2,
        name: "Preeti Sharma",
        image: ProfileImage,
        description: "Frontend Developer ",
        leaveType: "sick leave",
        from: "12 sep 2025",
        to: "14 sep 2025",
        days: "02",
        remainingDays: "20",
        status: "approved",


    },
    {
        number: 3,
        name: "Preeti Sharma",
        image: ProfileImage,
        description: "Frontend Developer ",
        leaveType: "sick leave",
        from: "12 sep 2025",
        to: "14 sep 2025",
        days: "02",
        remainingDays: "20",
        status: "approved",


    },
    {
        number: 4,
        name: "Preeti Sharma",
        image: ProfileImage,
        description: "Frontend Developer ",
        leaveType: "sick leave",
        from: "12 sep 2025",
        to: "14 sep 2025",
        days: "02",
        remainingDays: "20",
        status: "approved",


    },
    {
        number: 5,
        name: "Preeti Sharma",
        image: ProfileImage,
        description: "Frontend Developer ",
        leaveType: "sick leave",
        from: "12 sep 2025",
        to: "14 sep 2025",
        days: "02",
        remainingDays: "20",
        status: "approved",


    },
    {
        number: 6,
        name: "Preeti Sharma",
        image: ProfileImage,
        description: "Frontend Developer ",
        leaveType: "sick leave",
        from: "12 sep 2025",
        to: "14 sep 2025",
        days: "02",
        remainingDays: "20",
        status: "approved",


    },
    {
        number: 7,
        name: "Preeti Sharma",
        image: ProfileImage,
        description: "Frontend Developer ",
        leaveType: "sick leave",
        from: "12 sep 2025",
        to: "14 sep 2025",
        days: "02",
        remainingDays: "20",
        status: "approved",


    },
    {
        number: 8,
        name: "Preeti Sharma",
        image: ProfileImage,
        description: "Frontend Developer ",
        leaveType: "sick leave",
        from: "12 sep 2025",
        to: "14 sep 2025",
        days: "02",
        remainingDays: "20",
        status: "approved",


    },
    {
        number: 9,
        name: "Preeti Sharma",
        image: ProfileImage,
        description: "Frontend Developer ",
        leaveType: "sick leave",
        from: "12 sep 2025",
        to: "14 sep 2025",
        days: "02",
        remainingDays: "20",
        status: "approved",


    },
    {
        number: 10,
        name: "Preeti Sharma",
        image: ProfileImage,
        description: "Frontend Developer ",
        leaveType: "sick leave",
        from: "12 sep 2025",
        to: "14 sep 2025",
        days: "02",
        remainingDays: "20",
        status: "approved",


    }
];
export const leaves = [
    {
        number: 1,
        name: "Preeti Sharma",
        image: ProfileImage,
        description: "Frontend Developer ",
        leaveType: "sick leave",
        from: "12 sep 2025",
        to: "14 sep 2025",
        days: "02",
        remainingDays: "20",
        status: "approved",


    },
    {
        number: 2,
        name: "Preeti Sharma",
        image: ProfileImage,
        description: "Frontend Developer ",
        leaveType: "sick leave",
        from: "12 sep 2025",
        to: "14 sep 2025",
        days: "02",
        remainingDays: "20",
        status: "approved",


    },
    {
        number: 3,
        name: "Preeti Sharma",
        image: ProfileImage,
        description: "Frontend Developer ",
        leaveType: "sick leave",
        from: "12 sep 2025",
        to: "14 sep 2025",
        days: "02",
        remainingDays: "20",
        status: "approved",


    },
    {
        number: 4,
        name: "Preeti Sharma",
        image: ProfileImage,
        description: "Frontend Developer ",
        leaveType: "sick leave",
        from: "12 sep 2025",
        to: "14 sep 2025",
        days: "02",
        remainingDays: "20",
        status: "approved",


    },
    {
        number: 5,
        name: "Preeti Sharma",
        image: ProfileImage,
        description: "Frontend Developer ",
        leaveType: "sick leave",
        from: "12 sep 2025",
        to: "14 sep 2025",
        days: "02",
        remainingDays: "20",
        status: "approved",


    },
    {
        number: 6,
        name: "Preeti Sharma",
        image: ProfileImage,
        description: "Frontend Developer ",
        leaveType: "sick leave",
        from: "12 sep 2025",
        to: "14 sep 2025",
        days: "02",
        remainingDays: "20",
        status: "approved",


    },
    {
        number: 7,
        name: "Preeti Sharma",
        image: ProfileImage,
        description: "Frontend Developer ",
        leaveType: "sick leave",
        from: "12 sep 2025",
        to: "14 sep 2025",
        days: "02",
        remainingDays: "20",
        status: "approved",


    },
    {
        number: 8,
        name: "Preeti Sharma",
        image: ProfileImage,
        description: "Frontend Developer ",
        leaveType: "sick leave",
        from: "12 sep 2025",
        to: "14 sep 2025",
        days: "02",
        remainingDays: "20",
        status: "approved",


    },
    {
        number: 9,
        name: "Preeti Sharma",
        image: ProfileImage,
        description: "Frontend Developer ",
        leaveType: "sick leave",
        from: "12 sep 2025",
        to: "14 sep 2025",
        days: "02",
        remainingDays: "20",
        status: "approved",


    },
    {
        number: 10,
        name: "Preeti Sharma",
        image: ProfileImage,
        description: "Frontend Developer ",
        leaveType: "sick leave",
        from: "12 sep 2025",
        to: "14 sep 2025",
        days: "02",
        remainingDays: "20",
        status: "approved",


    }
];
export const allEmployees = [
    {
        number: 1,
        name: "Preeti Sharma",
        image: ProfileImage,
        description: "Frontend Developer ",
        employeeId: "EMP1234",
        position: "Frontend Developer",
        currentAddress: "123 Main Street, City",
        permanentAddress: "456 Home Town Road, City",
        fatherName: "Robert Carter",
        localGuardian: "Uncle - Steve Carter",
        managerName: "Prashant Kumar",
        joiningDate: "2022-05-15",
        department: "IT",
        teamLeader: "Prashant Kumar",
        status: "Intern",
        email: "preetiaajneeti@gmail.com",
        phone: 6396634822,
    },
    {
        number: 2,
        name: "Preeti Sharma",
        image: ProfileImage,
        description: "Frontend Developer ",
        employeeId: "EMP1234",
        position: "Frontend Developer",
        currentAddress: "123 Main Street, City",
        permanentAddress: "456 Home Town Road, City",
        fatherName: "Robert Carter",
        localGuardian: "Uncle - Steve Carter",
        managerName: "Prashant Kumar",
        joiningDate: "2022-05-15",
        department: "IT",
        teamLeader: "Prashant Kumar",
        status: "Intern",
        email: "preetiaajneeti@gmail.com",
        phone: 6396634822,
    },
    {
        number: 3,
        name: "Preeti Sharma",
        image: ProfileImage,
        description: "Frontend Developer ",
        employeeId: "EMP1234",
        position: "Frontend Developer",
        currentAddress: "123 Main Street, City",
        permanentAddress: "456 Home Town Road, City",
        fatherName: "Robert Carter",
        localGuardian: "Uncle - Steve Carter",
        managerName: "Prashant Kumar",
        joiningDate: "2022-05-15",
        department: "IT",
        teamLeader: "Prashant Kumar",
        status: "Intern",
        email: "preetiaajneeti@gmail.com",
        phone: 6396634822,
    },
    {
        number: 4,
        name: "Preeti Sharma",
        image: ProfileImage,
        description: "Frontend Developer ",
        employeeId: "EMP1234",
        position: "Frontend Developer",
        currentAddress: "123 Main Street, City",
        permanentAddress: "456 Home Town Road, City",
        fatherName: "Robert Carter",
        localGuardian: "Uncle - Steve Carter",
        managerName: "Prashant Kumar",
        joiningDate: "2022-05-15",
        department: "IT",
        teamLeader: "Prashant Kumar",
        status: "Intern",
        email: "preetiaajneeti@gmail.com",
        phone: 6396634822,
    },
    {
        number: 5,
        name: "Preeti Sharma",
        image: ProfileImage,
        description: "Frontend Developer ",
        employeeId: "EMP1234",
        position: "Frontend Developer",
        currentAddress: "123 Main Street, City",
        permanentAddress: "456 Home Town Road, City",
        fatherName: "Robert Carter",
        localGuardian: "Uncle - Steve Carter",
        managerName: "Prashant Kumar",
        joiningDate: "2022-05-15",
        department: "IT",
        teamLeader: "Prashant Kumar",
        status: "Intern",
        email: "preetiaajneeti@gmail.com",
        phone: 6396634822,
    },
    {
        number: 6,
        name: "Preeti Sharma",
        image: ProfileImage,
        description: "Frontend Developer ",
        employeeId: "EMP1234",
        position: "Frontend Developer",
        currentAddress: "123 Main Street, City",
        permanentAddress: "456 Home Town Road, City",
        fatherName: "Robert Carter",
        localGuardian: "Uncle - Steve Carter",
        managerName: "Prashant Kumar",
        joiningDate: "2022-05-15",
        department: "IT",
        teamLeader: "Prashant Kumar",
        status: "Intern",
        email: "preetiaajneeti@gmail.com",
        phone: 6396634822,
    },
    {
        number: 7,
        name: "Preeti Sharma",
        image: ProfileImage,
        description: "Frontend Developer ",
        employeeId: "EMP1234",
        position: "Frontend Developer",
        currentAddress: "123 Main Street, City",
        permanentAddress: "456 Home Town Road, City",
        fatherName: "Robert Carter",
        localGuardian: "Uncle - Steve Carter",
        managerName: "Prashant Kumar",
        joiningDate: "2022-05-15",
        department: "IT",
        teamLeader: "Prashant Kumar",
        status: "Intern",
        email: "preetiaajneeti@gmail.com",
        phone: 6396634822,
    },
    {
        number: 8,
        name: "Preeti Sharma",
        image: ProfileImage,
        description: "Frontend Developer ",
        employeeId: "EMP1234",
        position: "Frontend Developer",
        currentAddress: "123 Main Street, City",
        permanentAddress: "456 Home Town Road, City",
        fatherName: "Robert Carter",
        localGuardian: "Uncle - Steve Carter",
        managerName: "Prashant Kumar",
        joiningDate: "2022-05-15",
        department: "IT",
        teamLeader: "Prashant Kumar",
        status: "Intern",
        email: "preetiaajneeti@gmail.com",
        phone: 6396634822,
    },
    {
        number: 9,
        name: "Preeti Sharma",
        image: ProfileImage,
        description: "Frontend Developer ",
        employeeId: "EMP1234",
        position: "Frontend Developer",
        currentAddress: "123 Main Street, City",
        permanentAddress: "456 Home Town Road, City",
        fatherName: "Robert Carter",
        localGuardian: "Uncle - Steve Carter",
        managerName: "Prashant Kumar",
        joiningDate: "2022-05-15",
        department: "IT",
        teamLeader: "Prashant Kumar",
        status: "Intern",
        email: "preetiaajneeti@gmail.com",
        phone: 6396634822,
    },
    {
        number: 10,
        name: "Preeti Sharma",
        image: ProfileImage,
        description: "Frontend Developer ",
        employeeId: "EMP1234",
        position: "Frontend Developer",
        currentAddress: "123 Main Street, City",
        permanentAddress: "456 Home Town Road, City",
        fatherName: "Robert Carter",
        localGuardian: "Uncle - Steve Carter",
        managerName: "Prashant Kumar",
        joiningDate: "2022-05-15",
        department: "IT",
        teamLeader: "Prashant Kumar",
        status: "Intern",
        email: "preetiaajneeti@gmail.com",
        phone: 6396634822,
    }
];

