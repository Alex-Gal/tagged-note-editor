export interface INotes {
    id: number;
    note: string;
    tag?: string;
}

export interface INotes1 {
    userId?: number;
    id: number;
    title: string;
    completed?: string;
    // inputHandler: (e: React.ChangeEvent<HTMLInputElement>) => React.ChangeEvent<HTMLInputElement>;
}