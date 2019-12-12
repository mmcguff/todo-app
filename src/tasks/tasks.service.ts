import { Injectable } from '@nestjs/common';

//Seed Data
const seedTasks = [
    {
        id: 1,
        name: "Do the dishes",
        status: "Done"
    },
    {
        id: 2,
        name: "Fold Laundry",
        status: "new"
    }
]


@Injectable()
export class TasksService {
    getAllTasks(): object {
        return seedTasks;
    }
}
