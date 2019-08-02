// Arrays to keep track of each task's state
const newTask = (title, description) => {
  const task = {
    title : title,
    description: description,
    complete : false,
    completeTask : function() {
      this.complete = true;
    },
    printTask : function() {
      console.log(`${this.title} has ${this.complete ? "" : "not "}been completed`);
    }
  };
  return task;
};

// const printTask = (task) => {
//   console.log(`${task.title} has ${task.complete ? "" : "not "}been completed`);
// };

// const completeTask = (task) => {
//   task.complete = true;
// };

const t1 = newTask('Clean Cat Litter', "Cat litter at dennys den needs sweeping");
const t2 = newTask('Do Laundry', 'Make sure to separate the whites!');

const tasks = [t1, t2];

t1.printTask()
t1.completeTask()
t1.printTask()
