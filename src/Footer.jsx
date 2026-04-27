export function Footer(){
    return(
        <footer className="mt-auto py-8 lg:px-10 px-4 flex items-center justify-between  gap-2 border-t text-[10px] font-bold uppercase">
                        <div>© 2024 Premium ToDo </div>
                        <div className="flex items-center gap-6">
                        <a className="hover:text-primary" href="#">Privacy</a>
                        <a className="hover:text-primary" href="#">Terms</a>
                        <a className="hover:text-primary" href="#">Support</a>
                        </div>
        </footer>
    )
}