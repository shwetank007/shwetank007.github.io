import { motion, Variants } from "framer-motion"

interface Props {
    direction: string
    delay: number
    children: React.ReactNode
}

export default function MotionDiv(props: Props) {

    // function to create a fade in animation
    const fadeIn = (direction: string, delay: number): Variants => {
        return {
            hidden: {
                y: direction === 'up' ? 80 : direction === 'down' ? -80 : 0,
                opacity: 0,
                x: direction === 'left' ? 80 : direction === 'right' ? -80 : 0,
            },
            show: {
                y: 0,
                x: 0,
                opacity: 1,
                transition: {
                    type: 'tween',
                    duration: 1.2,
                    delay: delay,
                    ease: [0.25, 0.25, 0.25, 0.75],
                },
            },
        };
    };

    return (
        <motion.div
            variants={fadeIn(props.direction, props.delay)}
            initial='hidden'
            whileInView='show'
            viewport={{ once: false, amount: 0.3 }}
            className=""
        >
            {props.children}
        </motion.div>
    )

}