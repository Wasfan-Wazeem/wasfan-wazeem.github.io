import React, { useEffect, useRef, useState } from 'react';

const ReactiveBackground = () => {
    const canvasRef = useRef(null);
    const [mouse, setMouse] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        const handleMouseMove = (e) => {
            setMouse({ x: e.clientX, y: e.clientY });
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);
        handleResize();

        const dots = [];
        const spacing = 40;
        
        const draw = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            
            const cols = Math.ceil(canvas.width / spacing) + 1;
            const rows = Math.ceil(canvas.height / spacing) + 1;

            for (let i = 0; i < cols; i++) {
                for (let j = 0; j < rows; j++) {
                    const x = i * spacing;
                    const y = j * spacing;
                    
                    const dist = Math.sqrt(Math.pow(x - mouse.x, 2) + Math.pow(y - mouse.y, 2));
                    const maxDist = 200;
                    
                    let opacity = 0.05;
                    let size = 1;

                    if (dist < maxDist) {
                        const factor = 1 - dist / maxDist;
                        opacity = 0.05 + factor * 0.2;
                        size = 1 + factor * 2;
                    }

                    ctx.fillStyle = `rgba(0, 255, 65, ${opacity})`;
                    ctx.beginPath();
                    ctx.arc(x, y, size, 0, Math.PI * 2);
                    ctx.fill();
                }
            }

            animationFrameId = requestAnimationFrame(draw);
        };

        draw();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, [mouse]);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none -z-50 bg-tech-black"
        />
    );
};

export default ReactiveBackground;
