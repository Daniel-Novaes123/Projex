import logo from "../../assets/logo.png"

export const Loading = () => {
    return (
        <div className="bg-dark-gray min-h-screen flex flex-col items-center justify-center gap-6">
            <img
                src={logo}
                alt="Projex"
                className="h-24 w-auto animate-pulse"
            />

            <div className="flex gap-2">
                <span className="w-3 h-3 rounded-full bg-white animate-bounce" />
                <span
                    className="w-3 h-3 rounded-full bg-white animate-bounce"
                    style={{ animationDelay: "0.15s" }}
                />
                <span
                    className="w-3 h-3 rounded-full bg-white animate-bounce"
                    style={{ animationDelay: "0.3s" }}
                />
            </div>
        </div>
    )
}