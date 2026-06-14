export function StatCard({ title, value, classname }: { title: string, value: number, classname?: string }) {
    return (
        <div className={`bg-mid-gray p-4 rounded-md shadow-md flex flex-col items-center gap-2 w-40 ${classname}`}>
            <h2 className="text-graphite-400">{title}</h2>
            <p className="text-white text-2xl font-semibold">{value}</p>

        </div>
    )
}