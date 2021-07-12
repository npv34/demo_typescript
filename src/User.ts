export namespace Model {
    export class User {
        public name: string;
        protected age: number;
        private email: string;

        constructor(name: string,
                    age: number,
                    email: string) {
            this.name = name;
            this.age = age;
            this.email = email;
        }

        setName(name: string): void {
            this.name = name;
        }

    }

}

