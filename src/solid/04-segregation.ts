interface Bird {
    eat(): void;
}

interface FlyingBirds {
    fly(): number;
}

interface RunningBirds {
    run(): void;
}

interface SwimmerBirds {
    swim(): void;
}

class Tucan implements Bird, FlyingBirds {
    public fly() {
        return 10;
    }
    public eat() {}
}

class Hummingbird implements Bird, FlyingBirds {
    public fly() {
        return 20;
    }
    public eat() {}
}

class Ostrich implements Bird, RunningBirds {
    public eat() {}
    public run() {}
}

class Penguin implements Bird, SwimmerBirds {
    public eat() {}
    public swim() {}
}
