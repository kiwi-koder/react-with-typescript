import * as React from "react";

export interface Props {
    name: string;
    enthusiasmLevel?: number;
}

const getExclamationMarks = (num: number): string => {
    return "!".repeat(num);
};

export const Hello = ({ name, enthusiasmLevel = 1 }: Props) => {
    if (enthusiasmLevel <= 0) {
        throw new Error("You could be a little more enthusiastic");
    }

    return (
        <div className="hello">
            <div className="greeting">
                Hello {name + getExclamationMarks(enthusiasmLevel)}
            </div>
        </div>
    );
};
