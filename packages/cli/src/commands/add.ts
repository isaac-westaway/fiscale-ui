import { Command, Option, Argument } from "commander";

export const add = new Command();

const components = [
    {
        "name": "button",
        "content": "import react from \"react\"\nconst button = (): JSX.Element => {\nreturn (\n<button>Hello</button>\n)\n}",
    }
]

// zod schema validation against component and components
// all option to prioritise above component variadic argument

async function getComponents(component: string) {
    const res = await fetch(`http://localhost:3000/api/components/${component}`);
    const body = await res.json();

    const { name, code } = body
    
    console.log(code)

    return body;
}

add
    .name('add')
    .description('add specified component')
    .argument('[component...]', 'name of component')
    .option('-a, --all', 'install all components', false)
    .action((component) => {
        getComponents(component);
    })