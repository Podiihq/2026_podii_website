import { useRef } from 'react';
import LaserFlow from './LazerFlow';
import { BorderConers } from '../BorderConers';
import { ImageReelComponent } from '../Reels';

export function LaserFlowBoxExample() {
    const revealImgRef = useRef(null);

    return (
        <div className='relative overflow-hidden h-screen -top-20'
            onMouseMove={(e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const el = revealImgRef.current;
                if (el) {
                    el.style.setProperty('--mx', `${x}px`);
                    el.style.setProperty('--my', `${y + rect.height * 0.5}px`);
                }
            }}
            onMouseLeave={() => {
                const el = revealImgRef.current;
                if (el) {
                    el.style.setProperty('--mx', '-9999px');
                    el.style.setProperty('--my', '-9999px');
                }
            }}
        >
            <LaserFlow
                horizontalBeamOffset={0.0}
                verticalBeamOffset={0.0}
                color="#F47C59"
            />

            <div className='absolute z-50 w-full h-[55%] top-1/2 left-1/2 -translate-x-1/2'>
                <div className='h-full w-full'>
                    <ImageReelComponent />
                </div>
            </div>

            <img
                ref={revealImgRef}
                src=""
                alt="Reveal effect"
                style={{
                    position: 'absolute',
                    width: '100%',
                    top: '-50%',
                    zIndex: 5,
                    mixBlendMode: 'lighten',
                    opacity: 0.3,
                    pointerEvents: 'none',
                    '--mx': '-9999px',
                    '--my': '-9999px',
                    WebkitMaskImage: 'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)',
                    maskImage: 'radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,1) 0px, rgba(255,255,255,0.95) 60px, rgba(255,255,255,0.6) 120px, rgba(255,255,255,0.25) 180px, rgba(255,255,255,0) 240px)',
                    WebkitMaskRepeat: 'no-repeat',
                    maskRepeat: 'no-repeat'
                }}
                horizontalSizing={0.5}
                verticalSizing={2}
                wispDensity={1}
                wispSpeed={15}
                wispIntensity={5}
                flowSpeed={0.35}
                flowStrength={0.25}
                fogIntensity={0.45}
                fogScale={0.3}
                fogFallSpeed={0.6}
                decay={1.1}
                falloffStart={1.2}
            />
        </div>
    );
}