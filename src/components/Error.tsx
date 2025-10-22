export const Error = ({ error }: { error: string }) => {
    return (
        <div className="flex items-center justify-center min-h-screen">
            <p className="text-xl font-semibold text-red-600">{error}</p>
        </div>
    );
}
