export default function RootContainer({ children }: { children: React.ReactNode }) {
    return (
        <div className='flex flex-col w-full px-44 py-14 min-h-screen justify-between gap-28 items-center'>
            {children}
        </div>
    )
}