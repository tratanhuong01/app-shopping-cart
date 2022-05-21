import { ReactNode, useEffect, useRef, useState } from 'react'

type SliderProps = {
    length: number,
    role: {
        sc1440?: number,
        sc1280?: number,
        sc1024?: number,
        sc768?: number,
        sc640?: number
    },
    children: ReactNode,
    className?: string,
    hidePagination?: boolean
}

const Slider = ({ children, role, length, className, hidePagination }: SliderProps) => {
    //
    const [active, setActive] = useState<number>(0);
    const [pagination, setPagination] = useState<number>(2);
    const ref = useRef<HTMLDivElement>(null);
    useEffect(() => {
        //
        const resize = () => {
            setActive(0)
            if (window.innerWidth >= 1024 && role.sc1024) {
                setPagination(length - role.sc1024 + 1);
                return;
            }
            if (window.innerWidth < 1024 && window.innerWidth >= 768 && role.sc768) {
                setPagination(length - role.sc768 + 1);
                return;
            }
            if (window.innerWidth < 768 && window.innerWidth >= 640 && role.sc640) {
                setPagination(length - role.sc640 + 1);
                return;
            }
            if (window.innerWidth < 1024 && window.innerWidth >= 640 && role.sc640) {
                setPagination(length - role.sc640 + 1);
                return;
            }
            setPagination(Math.ceil(length))
        }
        resize();
        if (ref.current) {

        }
        window.addEventListener('resize', resize);
        return () => {
            window.removeEventListener('resize', resize);
        };
        //
    }, [ref, role])
    useEffect(() => {
        //
        if (ref.current) {
            const width = (() => {
                if (window.innerWidth >= 1024 && role.sc1024)
                    return 100 / role.sc1024;
                if (window.innerWidth < 1024 && window.innerWidth >= 768 && role.sc768)
                    return 100 / role.sc768
                if (window.innerWidth < 768 && window.innerWidth >= 640 && role.sc640)
                    return 100 / role.sc640
                if (window.innerWidth < 1024 && window.innerWidth >= 640 && role.sc640)
                    return 100 / role.sc640
                return 100;
            })();

            ref.current.style.transform = `translateX(-${active * width}%)`
        }
        //
    }, [active, ref])
    //
    return (
        <div className="wrapper">
            <div className={className || 'plans__wrapper'}>
                <div ref={ref}>
                    {children}
                </div>
            </div>
            {!hidePagination && <ul className="plans__pagination">
                {(() => {
                    let arr = [];
                    for (let index = 0; index < pagination; index++)
                        arr.push(index);
                    return arr;
                })().map((item, index) => <li onClick={() => setActive(index)}
                    className={index === active ? 'active' : ''} key={index}></li>)}
            </ul>}
        </div>
    )
}

export default Slider