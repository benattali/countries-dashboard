export const Error = ({ error }: { error: string | null }) => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <p className="text-xl font-semibold text-red-600">{error || "Something went wrong"}</p>
        </div>
    );
}
