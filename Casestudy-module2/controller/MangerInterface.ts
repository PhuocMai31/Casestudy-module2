interface MangerInterface<T>{
    add(): void;
    update(id: number, newObject: T): string;
    delete(id: number): string;
    showAll(): T[];
    findById(id: number): T;
}