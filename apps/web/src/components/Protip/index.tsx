import { cn } from '@/lib/cn';

export type ProtipProps = {
    className: string,
    title: string,
    description: string
}

export const Protip = ({
    className,
    title,
    description,
}: ProtipProps) => {
    return (
        <div
            className={cn(
                'flex flex-col text-sm p-6 bg-primary-100/30 dark:bg-purple-900/30 rounded-md',
                className,
            )}
        >
            {title ? <p className="m-0 text-lg font-semibold">{title}</p> : null}
            <p className="flex gap-1 items-center my-2">
                {description}
            </p>
        </div>
    );
};
