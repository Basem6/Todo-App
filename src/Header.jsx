export function Header({handlechange , data }){
    return(
    <header className="h-20 flex center justify-around  px-10 bg-background backdrop-blur-md sticky top-0 z-20">
                        <div className="flex items-center gap-6 flex-1">
                        <div className="relative w-full max-w-md">
                            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant text-xl ">
                            search
                            </span>
                            <input
                            className="w-full bg-surface-container-low border-none rounded-2xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-primary/20 text-sm transition-all "
                            placeholder="Search for tasks, dates..."
                            type="text"
                            value={data}
                            onChange={((e)=>{handlechange(e)})}
                            />
                        </div>
                        </div>
                        <div className="flex items-center gap-4">
                        <button className="size-10 flex items-center justify-center rounded-2xl bg-surface-container-low text-on-surface-variant hover:bg-surface-container-high transition-colors">
                            <span className="material-symbols-outlined">notifications</span>
                        </button>

                        <div className="h-8 w-[1px] bg-surface-container-high"></div>

                        <div className="flex items-center gap-3">
                            <div className="text-right">
                            <p className="text-sm font-bold leading-none">Alex Rivera</p>
                            <p className="text-[10px] text-on-surface-variant mt-1">
                                Product Designer
                            </p>
                            </div>

                            <div
                            className="size-10 rounded-2xl bg-surface-container-high bg-center bg-cover overflow-hidden"
                            style={{
                                backgroundImage:
                                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDsD5veZPFFeQTBKOLM2EO5e52N5Rw-SiMYaTDFD3wL4fRm5IL1TL2LqnOPKhhBu9Pw3oz3M1si73DvsQb7qCAmETfjvOnGSEzTpncXEKNivnLzWX-_8hKtI2udQY92xr04ub1ywgirrejz5E7GJVTyzIWGPBCr60kFlaq12daOrQR4PJcDFnnxgmNvjMJhmSS7Vq7FFBmfAu3_A9rAKeFFHoEuXX_9E4aYk1NLOS4Vo1MtVsv2iT941sDsibD32ljziP4e0bNGPE25')",
                            }}
                            ></div>
                        </div>
                        </div>
    </header>
    )
}