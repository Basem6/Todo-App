export function Footer(){
    return(
        <footer className="mt-auto py-8 px-10 flex items-center justify-between border-t text-[10px] font-bold uppercase">
                        <div>© 2024 Premium ToDo Enterprise</div>
                        <div className="flex items-center gap-6">
                        <a className="hover:text-primary" href="#">Privacy</a>
                        <a className="hover:text-primary" href="#">Terms</a>
                        <a className="hover:text-primary" href="#">Support</a>
                        </div>
        </footer>
    )
}