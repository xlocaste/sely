import PrimaryButton from "./button"

const Navbar = () => {
    return (
        <div className="fixed flex justify-between w-full px-4 md:px-20 py-4">
            <div className="flex items-center">
                <img src="/logo.png" alt="" className="w-10"/>
            </div>
            <div className="flex items-center">
                <PrimaryButton>
                    About Me
                </PrimaryButton>
            </div>
        </div>
    )
}

export default Navbar