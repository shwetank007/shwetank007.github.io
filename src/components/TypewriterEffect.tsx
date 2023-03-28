import Typewriter from 'typewriter-effect';

interface Props {
    textArray: string[]
}

export default function TypeWriterEffect(props: Props) {
    return (
        <Typewriter
            options={{
                strings: props.textArray,
                autoStart: true,
                loop: true,
            }}
        />
    )

}