
export default function Page() {
    return (
        <div className="min-h-screen w-full dark:bg-gray-900">
            <form method="POST" action="/auth/logout">
                <button type="submit">Log Out</button>
            </form>
        </div>
    )
}
