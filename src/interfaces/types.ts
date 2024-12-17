export interface Captions { id: number, sender: string, text: string, timestamp: Date }

export interface User {
    name: string,
    email: string,
    password: string
}

export type InterviewSubject = 'backend' | 'frontend' | 'analytics' | 'data-science' | 'product' 