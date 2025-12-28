import { NavBar } from "@/components";


export default function GeneralLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <NavBar/>
            <main className="flex flex-col items-center justify-center text-xl p-24 bg-orange-200">
                <span>General Layout</span>
                {children}
            </main>
        </>
    );
}