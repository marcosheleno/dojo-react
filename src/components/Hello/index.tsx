interface HelloProps {
    originalName?: string,
    name?: string
}

const Hello = ({ originalName, name }: HelloProps) => {
    return <div>
        <h1 data-testid="welcome">Hello, {name}!</h1>
    </div>;
}

export default Hello