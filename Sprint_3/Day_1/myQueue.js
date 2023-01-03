let myQueue=[];size=5;count=0;front=0;rear=0;

function enqueue(data) {
    if(count==size) {
        console.log('Queue is full');
        return;
    }
    myQueue[rear] = data;
    count++;
    rear = (rear+1) % size;
    return;
}

function deque() {
    if(count==0) {
        console.log('Queue is empty');
        return;
    }
    console.log(myQueue[front]);
    front = (front+1) % size;
    count--;
    return;
}

enqueue(15);
enqueue(25);
enqueue(35);
enqueue(45);
enqueue(65);
enqueue(75);
console.log(myQueue);
deque();
deque();
deque();
deque();
deque();