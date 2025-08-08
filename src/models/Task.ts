export interface Task {
    id: string
    title: string
    description?: string
    completed: boolean
    createdAt: Date
    updatedAt: Date
    priority: 'low' | 'medium' | 'high'
    dueDate?: Date
}

export interface TaskUpdate {
    title?: string
    description?: string
    completed?: boolean
    priority?: 'low' | 'medium' | 'high'
    dueDate?: Date
}

export interface TaskCreate {
    title: string
    description: string
    priority?: 'low' | 'medium' | 'high'
    dueDate?: Date
}

export interface TaskFilter {
    completed?: boolean
    priority?: 'low' | 'medium' | 'high'
    search?: string
}

