import { MDXComponents } from "mdx/types";
import { Mybutton } from "./Button/Button";
import { Protip, ProtipProps } from "./Protip";

export const components: MDXComponents = {
    ProTip: ({title, className, description}: ProtipProps) => {
        return <Protip title={title} className={className} description={description} />;
    },
}